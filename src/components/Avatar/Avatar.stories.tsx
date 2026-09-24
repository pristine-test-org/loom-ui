import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, AvatarGroup } from './Avatar';

const team = [
  { name: 'Maya Okafor' },
  { name: 'Alex Lindqvist' },
  { name: 'Priya Raman' },
  { name: 'Tomás Ferreira' },
  { name: 'June Park' },
  { name: 'Sam Whitlock' },
];

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  args: { name: 'Maya Okafor' },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    status: { control: 'inline-radio', options: [undefined, 'online', 'away'] },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--loom-space-3)', alignItems: 'center' }}>
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--loom-space-3)', alignItems: 'center' }}>
      <Avatar name="Maya Okafor" size="lg" status="online" />
      <Avatar name="Alex Lindqvist" size="lg" status="away" />
      <Avatar name="Priya Raman" size="lg" />
    </div>
  ),
};

export const Group: Story = {
  render: () => <AvatarGroup people={team} max={4} />,
};
