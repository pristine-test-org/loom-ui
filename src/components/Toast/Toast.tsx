import type { ComponentPropsWithRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import styles from './Toast.module.css';

export type ToastTone = 'info' | 'success' | 'warning' | 'danger';

export interface ToastProps extends Omit<ComponentPropsWithRef<'div'>, 'title'> {
  tone?: ToastTone;
  title: ReactNode;
  description?: ReactNode;
  /** An optional inline action, such as Undo. */
  action?: ReactNode;
  onDismiss?: () => void;
}

export function Toast({ tone = 'info', title, description, action, onDismiss, className, ...rest }: ToastProps) {
  return (
    <div
      role={tone === 'danger' ? 'alert' : 'status'}
      className={cx(styles.toast, styles[tone], className)}
      {...rest}
    >
      <span className={styles.stripe} aria-hidden />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
      {onDismiss && (
        <button type="button" className={styles.dismiss} onClick={onDismiss} aria-label="Dismiss">
          <span aria-hidden>×</span>
        </button>
      )}
    </div>
  );
}

/** A fixed stack in the bottom-right corner where toasts are rendered. */
export function ToastRegion({ className, ...rest }: ComponentPropsWithRef<'div'>) {
  return <div className={cx(styles.region, className)} aria-live="polite" {...rest} />;
}
