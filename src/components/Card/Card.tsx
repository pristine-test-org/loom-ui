import type { ComponentPropsWithRef, ReactNode } from 'react';
import { cx } from '../../lib/cx';
import styles from './Card.module.css';

export interface CardProps extends Omit<ComponentPropsWithRef<'section'>, 'title'> {
  /** Small uppercase label above the title. */
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  /** Actions or meta, separated from the body by a hairline. */
  footer?: ReactNode;
  /** `raised` floats on the page; `outlined` sits flat with a border. */
  variant?: 'raised' | 'outlined';
}

export function Card({
  eyebrow,
  title,
  description,
  footer,
  variant = 'raised',
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <section className={cx(styles.card, styles[variant], className)} {...rest}>
      {(eyebrow || title || description) && (
        <header className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          {title && <h3 className={styles.title}>{title}</h3>}
          {description && <p className={styles.description}>{description}</p>}
        </header>
      )}
      {children && <div className={styles.body}>{children}</div>}
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </section>
  );
}
