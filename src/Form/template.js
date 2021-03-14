export const template = () => `
    <div class="container-sm d-flex justify-content-center align-items-center">
        <div class="wrapper d-flex flex-column">
            <h1 class="text-primary text-uppercase text-center">Unit Converter JS</h1>
            <select class="unit-category form-select text-secondary"></select>
            <div class="unit-from row">
                <div class="col">
                    <input class="unit-value form-control text-secondary" placeholder="0" type="text">
                </div>
                <div class="col">
                    <select class="unit-name form-select text-secondary"></select>
                </div>
            </div>
            <div class="unit-to row">
                <div class="col">
                    <input class="unit-value form-control text-secondary" placeholder="0" type="text">
                </div>
                <div class="col">
                    <select class="unit-name form-select text-secondary"></select>
                </div>
            </div>
        </div>
    </div>
`;
