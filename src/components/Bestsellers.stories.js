
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Bestsellers } from './Bestsellers';
import thumbnail1 from '../assets/thumbnail1.png';
import thumbnail2 from '../assets/thumbnail2.png';
import thumbnail3 from '../assets/thumbnail3.png';

const data = [
  { _id: 1,
    modelName: 'Nike Air Max 270',
    thumbnail: thumbnail1,
    brandName: 'Nike', price: 195.8
  },
  { _id: 2,
    modelName: 'Nike Air Max 90',
    thumbnail: thumbnail2,
    brandName: 'Nike', price: 195.8
  },
  { _id: 3,
    modelName: 'Nike Air Max Plus',
    thumbnail: thumbnail3,
    brandName: 'Nike', price: 195.8
  },
]

const BestsellersComponent = {
  title: 'Component/Bestsellers',
  component: Bestsellers,
  decorators: [withDesign],
  argTypes: {},

  parameters: {
    design: {
      type: 'image',
      url: 'https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/40:2.png',
    },
  },

};

const Story = (args) => <Bestsellers {...args} />;

export const Basic = Story.bind({});
Basic.args = {
  data
};

export default BestsellersComponent;