import { conversions } from './convertions';

export const Converter = () => {
  const getCategories = () => Object.keys(conversions);
  const getUnitsByCategory = (category) => Object.keys(conversions[category]);

  const calculate = (category, unitFrom, unitTo, value) => {
    const result = conversions[category][unitFrom][unitTo](value);
    return Math.round(result * 10000000000) / 10000000000;
  };

  return { getCategories, getUnitsByCategory, calculate };
};
