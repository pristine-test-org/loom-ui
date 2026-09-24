import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { Toast, ToastRegion } from './Toast';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  decorators: [(Story) => <div style={{ width: 384 }}><Story /></div>],
  args: { title: 'Review published', description: 'Maya and 3 others were notified.', onDismiss: () => {} },
  argTypes: { tone: { control: 'inline-radio', options: ['info', 'success', 'warning', 'danger'] } },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--loom-space-3)' }}>
      <Toast tone="info" title="Syncing screens" description="12 of 20 uploaded." />
      <Toast tone="success" title="Review published" description="Maya and 3 others were notified." onDismiss={() => {}} />
      <Toast tone="warning" title="Contrast below 4.5:1" description="Two text styles on the billing page need attention." onDismiss={() => {}} />
      <Toast tone="danger" title="Upload failed" description="The file is larger than 50 MB." onDismiss={() => {}} />
    </div>
  ),
};

export const WithAction: Story = {
  args: {
    tone: 'info',
    title: 'Project archived',
    description: undefined,
    action: <Button variant="ghost" size="sm">Undo</Button>,
  },
};

export const InRegion: Story = {
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div style={{ minHeight: 360 }}><Story /></div>],
  render: () => (
    <ToastRegion>
      <Toast tone="success" title="Invite sent" description="alex@northwind.com can now join." onDismiss={() => {}} />
      <Toast tone="info" title="Comment resolved" onDismiss={() => {}} />
    </ToastRegion>
  ),
};
