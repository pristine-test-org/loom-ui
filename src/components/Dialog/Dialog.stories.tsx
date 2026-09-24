import { useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Dialog } from './Dialog';

/** Opens on load so the story shows the dialog itself; the trigger reopens it. */
function DialogDemo({ trigger, ...props }: Omit<ComponentProps<typeof Dialog>, 'open' | 'onClose'> & { trigger: string }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>{trigger}</Button>
      <Dialog {...props} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div style={{ minHeight: 480, padding: 'var(--loom-space-5)' }}><Story /></div>],
  args: { open: true, onClose: () => {}, title: 'Dialog' },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Confirm: Story = {
  render: () => (
    <DialogDemo
      trigger="Publish review"
      size="sm"
      title="Publish this review?"
      description="Everyone in the Northwind workspace will be notified and can leave comments."
      footer={
        <>
          <Button variant="secondary">Cancel</Button>
          <Button>Publish</Button>
        </>
      }
    />
  ),
};

export const WithForm: Story = {
  render: () => (
    <DialogDemo
      trigger="Invite teammate"
      title="Invite a teammate"
      description="They will get an email with a link to join this workspace."
      footer={
        <>
          <Button variant="secondary">Cancel</Button>
          <Button>Send invite</Button>
        </>
      }
    >
      <Input label="Email" type="email" placeholder="name@company.com" />
      <Select
        label="Role"
        defaultValue="reviewer"
        options={[
          { value: 'viewer', label: 'Viewer' },
          { value: 'reviewer', label: 'Reviewer' },
          { value: 'editor', label: 'Editor' },
        ]}
      />
    </DialogDemo>
  ),
};

export const Destructive: Story = {
  render: () => (
    <DialogDemo
      trigger="Delete project"
      size="sm"
      title="Delete Northwind redesign?"
      description="This removes 12 screens and 48 comments. It cannot be undone."
      footer={
        <>
          <Button variant="secondary">Keep project</Button>
          <Button variant="danger">Delete</Button>
        </>
      }
    />
  ),
};
