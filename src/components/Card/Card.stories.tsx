import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
  args: {
    eyebrow: 'Workspace',
    title: 'Northwind redesign',
    description: 'Twelve screens across onboarding, billing and settings.',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFooter: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', gap: 'var(--loom-space-2)' }}>
        <Badge tone="success">On track</Badge>
        <Badge>Due 14 Oct</Badge>
      </div>
    ),
    footer: (
      <>
        <Button variant="ghost" size="sm">Archive</Button>
        <Button size="sm">Open</Button>
      </>
    ),
  },
};

export const Outlined: Story = { args: { variant: 'outlined' } };

export const Grid: Story = {
  decorators: [(Story) => <div style={{ width: 760 }}><Story /></div>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--loom-space-4)' }}>
      {['Northwind redesign', 'Billing v3', 'Mobile nav', 'Status page'].map((title, i) => (
        <Card key={title} eyebrow={`Project 0${i + 1}`} title={title} description="Last edited 2 days ago by Maya." />
      ))}
    </div>
  ),
};
