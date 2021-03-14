import { conversions } from './convertions';

export const Converter = () => {
  const getCategories = () => Object.keys(conversions);
  const getUnitsByCategory = (category) => Object.keys(conversions[category]);

  return { getCategories, getUnitsByCategory };
};
