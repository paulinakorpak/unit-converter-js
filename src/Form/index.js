import { template } from './template';

export const Form = (element, converter) => {
  const state = {
    category: 'length',
    unitFrom: 'centimeter',
    unitTo: 'meter',
  };

  let categorySelect = null;
  let unitSelects = null;
  let unitFromInput = null;
  let unitToInput = null;

  const changeCategory = (e) => {
    state.category = e.target.value;

    const units = converter.getUnitsByCategory(state.category);

    state.unitFrom = units[0];
    state.unitTo = units[1];
    render();
  };

  const changeUnit = (e) => {
    state[e.target.dataset.key] = e.target.value;
    calculate();
  };

  const calculate = () => {
    unitToInput.value = converter.calculate(
      state.category,
      state.unitFrom,
      state.unitTo,
      parseFloat(unitFromInput.value),
    );
  };

  const render = () => {
    element.innerHTML = template(
      state,
      converter.getCategories(),
      converter.getUnitsByCategory(state.category),
    );

    categorySelect = element.querySelector('.unit-category');
    unitSelects = element.querySelectorAll('.unit-select');
    unitFromInput = element.querySelector('.unit-from input');
    unitToInput = element.querySelector('.unit-to input');

    categorySelect.addEventListener('change', changeCategory);
    Array.from(unitSelects).map((item) => item.addEventListener('change', changeUnit));
    unitFromInput.addEventListener('keyup', calculate);
  };

  return { render };
};
