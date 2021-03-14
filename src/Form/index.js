import { template } from './template';

export const Form = (element) => {
  const render = () => {
    element.innerHTML = template();
  };

  return { render };
};
