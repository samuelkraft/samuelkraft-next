import { ChangeEvent } from 'react'
import styles from './input.module.scss'

type InputProps = {
  type: string
  placeholder?: string
  disabled?: boolean
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void // eslint-disable-line
}

const Input = ({ type = 'text', placeholder, disabled, value, onChange }: InputProps): JSX.Element => (
  <input value={value} type={type} placeholder={placeholder} className={styles.input} disabled={disabled} onChange={onChange} />
)

export default Input
