import { useRef, useState } from 'react'
import { Send, CheckCircle } from 'react-feather'
import cn from 'classnames'
import { useRouter, NextRouter } from 'next/router'

import Button from 'components/button'

import styles from './subscribe.module.scss'

type SubscribeProps = { title?: string; header?: boolean; className?: string }

const Subscribe = ({ title, header = true, className }: SubscribeProps) => {
  const { query } = useRouter() as NextRouter
  const inputEl = useRef(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const subscribe = async e => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      setLoading(false)
      setMessage(error)
      return
    }

    inputEl.current.value = ''
    setLoading(false)
    setMessage('Thanks! Check you inbox for a confirmation email ✨')
  }

  const wrapperClassName = cn(styles.wrapper, className)
  if (query.confirmed) {
    return (
      <div className={wrapperClassName}>
        <header className={styles.header}>
          <CheckCircle style={{ color: 'green' }} />
          <h4 className={styles.title}>Thanks for confirming your email!</h4>
        </header>
        <p className={styles.description} style={{ marginBottom: 0 }}>
          You&apos;re on the list and will get updates when new content is published.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={subscribe} className={wrapperClassName}>
      {header && (
        <>
          <header className={styles.header}>
            <Send />
            <p className={styles.title}>{title || 'Enjoyed this post? Subscribe to the newsletter!'}</p>
          </header>
          <p className={styles.description}>
            A newsletter in the realm between <em className={styles.em}>design &amp; development</em>. Learn animations, CSS, web
            development tips &amp; tricks and creating delightful and useful interfaces!
          </p>
          <p className={styles.description}>No spam, unsubcribe at any time!</p>
        </>
      )}
      <label htmlFor="email-input" className="sr-only">
        Email address
      </label>
      <div className={cn(styles.inputWrapper, message && styles.hidden)}>
        <input className={styles.input} id="email-input" name="email" placeholder="Email address" ref={inputEl} required type="email" />
        <Button disabled={loading} type="submit">
          Subscribe
        </Button>
        {message && <div className={styles.message}>{message}</div>}
      </div>
    </form>
  )
}

export default Subscribe
