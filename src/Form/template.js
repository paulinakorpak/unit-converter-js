export const template = (state, categories, units) => {
  const renderCategories = (selectedCategory) => categories.reduce(
    (html, category) => {
      const selected = category === selectedCategory ? 'selected' : '';
      return `${html} <option ${selected}>${category}</option>`;
    },
    '',
  );

  const renderUnits = (selectedUnit) => units.reduce(
    (html, unit) => {
      const selected = unit === selectedUnit ? 'selected' : '';
      return `${html} <option ${selected}>${unit}</option>`;
    },
    '',
  );

  return `
      <div class="container-sm d-flex justify-content-center align-items-center">
          <div class="wrapper d-flex flex-column">
              <h1 class="text-primary text-uppercase text-center">Unit Converter JS</h1>
              <select class="unit-category form-select text-secondary">
                  ${renderCategories(state.category)}
              </select>
              <div class="unit-from row">
                  <div class="col">
                      <input class="form-control text-secondary" type="number" placeholder="0">
                  </div>
                  <div class="col">
                      <select class="unit-select form-select text-secondary" data-key="unitFrom">
                          ${renderUnits(state.unitFrom)}
                      </select>
                  </div>
              </div>
              <div class="unit-to row">
                  <div class="col">
                      <input class="form-control text-secondary" type="number" disabled="disabled" placeholder="0">
                  </div>
                  <div class="col">
                      <select class="unit-select form-select text-secondary" data-key="unitTo">
                          ${renderUnits(state.unitTo)}
                      </select>
                  </div>
              </div>
          </div>
      </div>
  `;
};
