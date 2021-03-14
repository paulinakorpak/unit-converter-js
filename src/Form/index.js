import { template } from './template';

export const Form = (element, converter) => {
  const state = {
    category: 'length',
    unitFrom: null,
    unitTo: null,
  };

  let categorySelect = null;
  let unitSelects = null;

  const changeCategory = (e) => {
    state.category = e.target.value;
    state.unitFrom = null;
    state.unitTo = null;
    render();
  };

  const changeUnit = (e) => {
    state[e.target.dataset.key] = e.target.value;
  };

  const render = () => {
    element.innerHTML = template(
      state,
      converter.getCategories(),
      converter.getUnitsByCategory(state.category),
    );

    categorySelect = element.querySelector('.unit-category');
    unitSelects = element.querySelectorAll('.unit-select');

    categorySelect.addEventListener('change', changeCategory);
    Array.from(unitSelects).map((item) => item.addEventListener('change', changeUnit));
  };

  return { render };
};
