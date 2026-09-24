import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  args: { children: 'In review' },
  argTypes: {
    tone: { control: 'inline-radio', options: ['neutral', 'accent', 'success', 'warning', 'danger'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--loom-space-2)' }}>
      <Badge>Draft</Badge>
      <Badge tone="accent">New</Badge>
      <Badge tone="success">Approved</Badge>
      <Badge tone="warning">Needs changes</Badge>
      <Badge tone="danger">Blocked</Badge>
    </div>
  ),
};

export const WithDot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--loom-space-2)' }}>
      <Badge tone="success" dot>Live</Badge>
      <Badge tone="warning" dot>Degraded</Badge>
      <Badge tone="danger" dot>Down</Badge>
    </div>
  ),
};
