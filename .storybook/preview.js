import '../src/styles/base.css';
import '../src/styles/chat.css';
import '../src/styles/bestsellers.css';

export const parameters = {
  actions: {
    argTypesRegex: '^on.*',
  },
  backgrounds: {
    values: [
      { name: 'black', value: '#333' },
      { name: 'grey', value: '#999' },
      { name: 'white', value: '#fff' },
    ],
  },
};
