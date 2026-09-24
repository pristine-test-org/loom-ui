import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const roles = [
  { value: 'viewer', label: 'Viewer' },
  { value: 'reviewer', label: 'Reviewer' },
  { value: 'editor', label: 'Editor' },
  { value: 'owner', label: 'Owner', disabled: true },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  decorators: [(Story) => <div style={{ width: 280 }}><Story /></div>],
  args: { label: 'Role', options: roles },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { defaultValue: 'reviewer' } };

export const WithPlaceholder: Story = {
  args: { placeholder: 'Choose a role', hint: 'Owners are set from the billing page.' },
};

export const Disabled: Story = { args: { defaultValue: 'editor', disabled: true } };
