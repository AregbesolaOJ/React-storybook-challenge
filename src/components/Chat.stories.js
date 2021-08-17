
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Chat } from './Chat';
import userAvatar from '../assets/chat-image.png';

const ChatComponent = {
  title: 'Component/Chat',
  component: Chat,
  decorators: [withDesign],
  argTypes: {},

  parameters: {
    design: {
      type: 'image',
      url: 'https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/7:10.png',
    },
  },
}

const Story = (args) => <Chat {...args} />;

export const Basic = Story.bind({});
Basic.args = {
  title: 'Emily Dougrer',
  role: 'Developer',
  userAvatar
};

export default ChatComponent;
