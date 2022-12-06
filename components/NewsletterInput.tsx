import { FormEvent, FormEventHandler, useState } from "react";
import cn from "clsx";

import Input from "./input";
import { IconArrowRight, IconAtSign, IconCheck, IconLoading } from "./Icons";

export default function NewsletterInput() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const subscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setLoading(false);
      setSuccess(false);
      setError(error);
      return;
    }

    setValue("");
    setLoading(false);
    setSuccess(true);
  };

  return (
    <form onSubmit={subscribe}>
      <Input
        id="email"
        type="email"
        placeholder="Email address…"
        pfix={<IconAtSign className="text-secondary" />}
        required
        suffix={
          <button
            type="submit"
            disabled={loading || success}
            className={cn(
              success && "bg-green-600",
              !success && !loading && "hover:bg-primary focus:bg-primary",
              !value && !success && "opacity-0",
              "transition-all duration-150  w-7 h-7 rounded-full -mr-1.5 flex items-center justify-center"
            )}
          >
            {loading ? (
              <IconLoading className="fill-orange-500 fill-text-primary" />
            ) : success ? (
              <IconCheck className="text-white" />
            ) : (
              <IconArrowRight />
            )}
          </button>
        }
        value={value}
        onChange={(e) => {
          if (error) setError("");
          if (success) setSuccess(false);
          return setValue(e.target.value);
        }}
        error={error}
      />
    </form>
  );
}
