import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge/Badge';
import { Tabs } from './Tabs';

const items = [
  { id: 'overview', label: 'Overview', content: 'Twelve screens across onboarding, billing and settings. Three are waiting on review.' },
  { id: 'comments', label: 'Comments', content: '48 comments, 6 unresolved. The newest is from Maya on the billing summary.' },
  { id: 'history', label: 'History', content: 'Last published on 12 September. Four versions since the first review.' },
];

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: [(Story) => <div style={{ width: 480 }}><Story /></div>],
  args: { items, label: 'Project sections' },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCounts: Story = {
  args: {
    defaultValue: 'comments',
    items: [
      items[0],
      { ...items[1], label: <span style={{ display: 'inline-flex', gap: 'var(--loom-space-2)', alignItems: 'center' }}>Comments <Badge tone="accent">6</Badge></span> },
      items[2],
    ],
  },
};

export const WithDisabledTab: Story = {
  args: { items: [...items, { id: 'settings', label: 'Settings', content: 'Owners only.', disabled: true }] },
};
