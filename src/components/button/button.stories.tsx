import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'normal',
    children: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'normal',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'normal',
    children: 'Secondary Button',
  },
};

export default meta;
