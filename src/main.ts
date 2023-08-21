import { handleAllErrors } from './global-error-handling';

export const start = () => {
  handleAllErrors();
  console.log('hell-o');
};

start();
