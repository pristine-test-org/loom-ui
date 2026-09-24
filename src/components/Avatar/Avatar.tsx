import { useState, type ComponentPropsWithRef } from 'react';
import { cx } from '../../lib/cx';
import styles from './Avatar.module.css';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps extends ComponentPropsWithRef<'span'> {
  /** The person's full name. Used for the initials and the accessible name. */
  name: string;
  src?: string;
  size?: AvatarSize;
  /** Shows a presence dot in the bottom-right corner. */
  status?: 'online' | 'away';
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

export function Avatar({ name, src, size = 'md', status, className, ...rest }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <span role="img" aria-label={name} className={cx(styles.avatar, styles[size], className)} {...rest}>
      {showImage ? (
        <img className={styles.image} src={src} alt="" onError={() => setFailed(true)} />
      ) : (
        <span className={styles.initials} aria-hidden>
          {initials(name)}
        </span>
      )}
      {status && <span className={cx(styles.status, styles[status])} aria-hidden />}
    </span>
  );
}

export interface AvatarGroupProps extends ComponentPropsWithRef<'div'> {
  /** How many avatars to show before collapsing the rest into a count. */
  max?: number;
  people: Array<Pick<AvatarProps, 'name' | 'src'>>;
  size?: AvatarSize;
}

export function AvatarGroup({ people, max = 4, size = 'md', className, ...rest }: AvatarGroupProps) {
  const shown = people.slice(0, max);
  const hidden = people.length - shown.length;
  return (
    <div className={cx(styles.group, className)} {...rest}>
      {shown.map((person) => (
        <Avatar key={person.name} {...person} size={size} className={styles.stacked} />
      ))}
      {hidden > 0 && (
        <span className={cx(styles.avatar, styles[size], styles.stacked, styles.more)} aria-label={`${hidden} more`}>
          +{hidden}
        </span>
      )}
    </div>
  );
}
