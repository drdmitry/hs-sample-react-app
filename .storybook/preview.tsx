import React from 'react';
import type { Preview } from "@storybook/react";

import '../src/styles/inter.css';
import '../src/styles/globals.css';
import '../src/styles/storybook.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
