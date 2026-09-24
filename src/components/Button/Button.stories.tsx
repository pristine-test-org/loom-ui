import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Save changes' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: 'primary' } };

export const Secondary: Story = { args: { variant: 'secondary', children: 'Cancel' } };

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--loom-space-3)', flexWrap: 'wrap' }}>
      <Button {...args} variant="primary">Save changes</Button>
      <Button {...args} variant="secondary">Cancel</Button>
      <Button {...args} variant="ghost">Skip for now</Button>
      <Button {...args} variant="danger">Delete project</Button>
    </div>
  ),
};

export const SizesAndStates: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 'var(--loom-space-4)' }}>
      <div style={{ display: 'flex', gap: 'var(--loom-space-3)', alignItems: 'center' }}>
        <Button {...args} size="sm">Small</Button>
        <Button {...args} size="md">Medium</Button>
        <Button {...args} size="lg">Large</Button>
      </div>
      <div style={{ display: 'flex', gap: 'var(--loom-space-3)', alignItems: 'center' }}>
        <Button {...args} loading>Saving</Button>
        <Button {...args} disabled>Disabled</Button>
        <Button {...args} variant="secondary" disabled>Disabled</Button>
      </div>
    </div>
  ),
};
