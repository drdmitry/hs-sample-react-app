import type { Meta, StoryObj } from '@storybook/react';

import { MatchCardSignals } from './index';

const meta = {
  title: 'Components/MatchCardSignals',
  component: MatchCardSignals,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // active: { control: 'boolean' },
  },
} satisfies Meta<typeof MatchCardSignals>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    signals: ['Artikel'],
    active: false,
  },
};

export const Many: Story = {
  args: {
    signals: ['Beförderung', 'Event', 'Geburtstag'],
    active: false,
  },
};

export const Empty: Story = {
  args: {
    signals: [],
    active: false,
  },
};
