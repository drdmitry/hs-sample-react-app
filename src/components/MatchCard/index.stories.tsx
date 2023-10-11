import type { Meta, StoryObj } from '@storybook/react';

import { MatchCard } from './index';
import { matchDataMock } from '~/constants/match';

const meta = {
  title: 'Components/MatchCard',
  component: MatchCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean' },
  },
} satisfies Meta<typeof MatchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: matchDataMock,
    active: false,
  },
};

export const Active: Story = {
  args: {
    item: matchDataMock,
    active: true,
  },
};

export const Processed: Story = {
  args: {
    item: {
      ...matchDataMock,
      status: 'processed',
    },
    active: false,
  },
};
