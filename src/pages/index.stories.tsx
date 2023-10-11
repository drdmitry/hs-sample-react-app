import type { Meta, StoryObj } from '@storybook/react';

import Home from './index';

const meta = {
  title: 'Main/Home',
  component: Home,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    // active: { control: 'boolean' },
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
