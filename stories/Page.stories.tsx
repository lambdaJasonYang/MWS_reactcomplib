import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
// import { Page } from './Page';



import { Example } from '../dist/index.js'


export default {
  title: 'Example/Page',
  component: Example,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Example>;

export const Template: ComponentStory<typeof Example> = (args) => <Example />;


// export const LoggedOut = Template.bind({});

// export const LoggedIn = Template.bind({});

// // More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// LoggedIn.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const loginButton = await canvas.getByRole('button', { name: /Log in/i });
//   await userEvent.click(loginButton);
// };
