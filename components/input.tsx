import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import cn from "clsx";

type InputProps = {
  id: string;
  type?: string;
  pfix?: ReactNode;
  suffix?: ReactNode;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(function MyInput(
  props,
  ref
) {
  const { type = "text", pfix, suffix, id, error, ...otherProps } = props;
  return (
    <div className="flex flex-col gap-1">
      <div
        className={cn(
          error ? "border-red-600" : "",
          "flex items-center rounded-full bg-secondary w-fit focus-within:outline"
        )}
      >
        {pfix && (
          <label htmlFor={id} className="pl-2.5 pr-1.5">
            {pfix}
          </label>
        )}
        <input
          type={type}
          id={id}
          className="h-10 pr-4 bg-transparent outline-none placeholder:text-secondary"
          ref={ref}
          {...otherProps}
        />
        {suffix && (
          <label htmlFor={id} className="pl-2 pr-3">
            {suffix}
          </label>
        )}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
});

export default Input;
