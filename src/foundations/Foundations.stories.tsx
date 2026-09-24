import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import styles from './Foundations.module.css';

/** Reads the computed value of each token, so these pages always show what tokens.css says. */
function useTokenValues(names: string[], theme: unknown) {
  const [values, setValues] = useState<Record<string, string>>({});
  useEffect(() => {
    const style = getComputedStyle(document.documentElement);
    setValues(Object.fromEntries(names.map((name) => [name, style.getPropertyValue(name).trim()])));
  }, [names.join(), theme]);
  return values;
}

const scales = {
  Neutral: ['0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map((s) => `--loom-neutral-${s}`),
  Indigo: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map((s) => `--loom-indigo-${s}`),
  Status: ['green-50', 'green-300', 'green-600', 'green-700', 'amber-50', 'amber-300', 'amber-600', 'amber-700', 'red-50', 'red-300', 'red-600', 'red-700'].map((s) => `--loom-${s}`),
};

const semantic = [
  'bg', 'surface', 'surface-sunk', 'text', 'text-muted', 'text-faint', 'border', 'border-strong',
  'accent', 'accent-hover', 'accent-subtle', 'accent-text', 'on-accent', 'focus',
  'success', 'success-subtle', 'warning', 'warning-subtle', 'danger', 'danger-subtle', 'on-danger',
].map((s) => `--loom-color-${s}`);

function Swatches({ names, theme }: { names: string[]; theme: unknown }) {
  const values = useTokenValues(names, theme);
  return (
    <div className={styles.ramp}>
      {names.map((name) => (
        <div key={name} className={styles.swatch}>
          <div className={styles.chip} style={{ background: `var(${name})` }} />
          <span className={styles.token}>{name.replace('--loom-', '')}</span>
          <span className={styles.value}>{values[name]}</span>
        </div>
      ))}
    </div>
  );
}

function ColoursPage({ theme }: { theme: unknown }) {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h1 className={styles.heading}>Colour</h1>
        <p className={styles.lede}>
          Raw scales on top, semantic tokens below. Components only read the semantic layer; the dark theme swaps it and
          leaves the scales alone. Switch the Theme toolbar to compare.
        </p>
      </section>
      {Object.entries(scales).map(([label, names]) => (
        <section key={label} className={styles.section}>
          <p className={styles.scaleName}>{label}</p>
          <Swatches names={names} theme={theme} />
        </section>
      ))}
      <section className={styles.section}>
        <p className={styles.scaleName}>Semantic</p>
        <Swatches names={semantic} theme={theme} />
      </section>
    </div>
  );
}

const typeSteps = [
  ['3xl', 'Page heading', 'semibold'],
  ['2xl', 'Section heading', 'semibold'],
  ['xl', 'Dialog title', 'semibold'],
  ['lg', 'Card title', 'semibold'],
  ['md', 'Body copy reads at sixteen pixels', 'regular'],
  ['sm', 'Controls, labels and help text', 'medium'],
  ['xs', 'Badges and meta', 'medium'],
] as const;

function TypePage({ theme }: { theme: unknown }) {
  const values = useTokenValues(typeSteps.map(([step]) => `--loom-text-${step}`), theme);
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h1 className={styles.heading}>Type scale</h1>
        <p className={styles.lede}>One family, Inter, at seven sizes. Every font-size in a component reads one of these tokens.</p>
        <div>
          {typeSteps.map(([step, sample, weight]) => (
            <div key={step} className={styles.typeRow}>
              <div className={styles.typeMeta}>
                <span className={styles.token}>text-{step}</span>
                <span className={styles.value}>{values[`--loom-text-${step}`]} · {weight}</span>
              </div>
              <span className={styles.typeSample} style={{ fontSize: `var(--loom-text-${step})`, fontWeight: `var(--loom-weight-${weight})` }}>
                {sample}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const spaceSteps = ['1', '2', '3', '4', '5', '6', '7', '8'].map((s) => `--loom-space-${s}`);
const radii = ['sm', 'md', 'lg', 'pill'].map((s) => `--loom-radius-${s}`);
const shadows = ['sm', 'md', 'lg'].map((s) => `--loom-shadow-${s}`);

function SpacePage({ theme }: { theme: unknown }) {
  const values = useTokenValues([...spaceSteps, ...radii], theme);
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h1 className={styles.heading}>Spacing</h1>
        <p className={styles.lede}>A 4px base in eight steps. Inside a component use space-4 or smaller; between components use space-5 and up.</p>
        <div style={{ display: 'grid', gap: 'var(--loom-space-2)' }}>
          {spaceSteps.map((name) => (
            <div key={name} className={styles.spaceRow}>
              <span className={styles.token}>{name.replace('--loom-', '')}</span>
              <span className={styles.value}>{values[name]}</span>
              <div className={styles.spaceBar} style={{ width: `var(${name})` }} />
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>Radius and elevation</h2>
        <div className={styles.tiles}>
          {radii.map((name) => (
            <div key={name} className={styles.tile} style={{ borderRadius: `var(${name})` }}>
              <span className={styles.token}>{name.replace('--loom-', '')} · {values[name]}</span>
            </div>
          ))}
        </div>
        <div className={styles.tiles}>
          {shadows.map((name) => (
            <div key={name} className={styles.tile} style={{ borderRadius: 'var(--loom-radius-lg)', boxShadow: `var(${name})`, border: 0 }}>
              <span className={styles.token}>{name.replace('--loom-', '')}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const meta = {
  title: 'Foundations',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colours: Story = { render: (_, { globals }) => <ColoursPage theme={globals.theme} /> };
export const TypeScale: Story = { name: 'Type scale', render: (_, { globals }) => <TypePage theme={globals.theme} /> };
export const SpacingAndElevation: Story = { name: 'Spacing and elevation', render: (_, { globals }) => <SpacePage theme={globals.theme} /> };
