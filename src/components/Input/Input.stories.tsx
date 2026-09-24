import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
  args: { label: 'Workspace name', placeholder: 'Acme Design' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: { label: 'Email', type: 'email', placeholder: 'you@company.com', hint: 'We only use this for review notifications.' },
};

export const WithError: Story = {
  args: { label: 'Email', type: 'email', defaultValue: 'maya@', error: 'Enter a full email address, like maya@company.com.' },
};

export const Disabled: Story = { args: { disabled: true, defaultValue: 'Northwind' } };
