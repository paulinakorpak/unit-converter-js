import { Form } from './Form';
import { Converter } from './Converter';

const element = document.querySelector('.app');
const converter = Converter();

Form(element, converter).render();
