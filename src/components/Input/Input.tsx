import { useId, type ComponentPropsWithRef, type ReactNode } from 'react';
import { cx } from '../../lib/cx';
import styles from './Input.module.css';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  label: ReactNode;
  /** Help text under the field. Replaced by `error` when both are set. */
  hint?: ReactNode;
  error?: ReactNode;
}

export function Input({ label, hint, error, id, className, ...rest }: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const messageId = `${inputId}-message`;
  const message = error ?? hint;

  return (
    <div className={cx(styles.field, className)}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className={cx(styles.input, error ? styles.invalid : undefined)}
        aria-invalid={error ? true : undefined}
        aria-describedby={message ? messageId : undefined}
        {...rest}
      />
      {message && (
        <p id={messageId} className={cx(styles.message, error ? styles.errorText : undefined)}>
          {message}
        </p>
      )}
    </div>
  );
}
