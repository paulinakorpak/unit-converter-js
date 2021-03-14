export const conversions = {
  length: {
    centimeter: {
      centimeter: (cm) => cm,
      meter: (cm) => cm / 100,
      kilometer: (cm) => cm / 100000,
      mile: (cm) => cm * 0.0000062137,
      yard: (cm) => cm * 0.010936,
      foot: (cm) => cm * 0.032808,
    },
    meter: {
      centimeter: (m) => m / 0.01,
      meter: (m) => m,
      kilometer: (m) => m / 1000,
      mile: (m) => m * 0.00062137,
      yard: (m) => m * 1.0936,
      foot: (m) => m * 3.2808,
    },
    kilometer: {
      centimeter: (km) => km * 100000,
      meter: (km) => km * 1000,
      kilometer: (km) => km,
      mile: (km) => km * 0.62137,
      yard: (km) => km * 1093.6,
      foot: (km) => km * 3280.8,
    },
    mile: {
      centimeter: (m) => m / 0.0000062137,
      meter: (m) => m / 0.00062137,
      kilometer: (m) => m / 0.62137,
      mile: (m) => m,
      yard: (m) => m * 1760,
      foot: (m) => m * 5280,
    },
    yard: {
      centimeter: (y) => y / 0.010936,
      meter: (y) => y / 1.0936,
      kilometer: (y) => y / 1093.6,
      mile: (y) => y * 0.00056818,
      yard: (y) => y,
      foot: (y) => y * 3,
    },
    foot: {
      centimeter: (f) => f / 0.032808,
      meter: (f) => f / 3.2808,
      kilometer: (f) => f / 3280.8,
      mile: (f) => f * 0.00018939,
      yard: (f) => f * 0.33333,
      foot: (f) => f,
    },
  },
  area: {
    squereMeter: {
      squereMeter: (sqm) => sqm,
      squereKilometer: (sqm) => sqm / 1000000,
      ar: (sqm) => sqm / 100,
      hectare: (sqm) => sqm / 10000,
    },
    squereKilometer: {
      squereMeter: (sqkm) => sqkm * 1000000,
      squereKilometer: (sqkm) => sqkm,
      ar: (sqkm) => sqkm * 10000,
      hectare: (sqkm) => sqkm * 100,
    },
    ar: {
      squereMeter: (a) => a * 100,
      squereKilometer: (a) => a / 10000,
      ar: (a) => a,
      hectare: (a) => a / 100,
    },
    hectare: {
      squereMeter: (h) => h / 10000,
      squereKilometer: (h) => h / 100,
      ar: (h) => h * 100,
      hectare: (h) => h,
    },
  },
  weight: {
    gram: {
      gram: (g) => g,
      kilogram: (g) => g * 1000,
      ton: (g) => g * 1000000,
    },
    kilogram: {
      gram: (kg) => kg / 1000,
      kilogram: (kg) => kg,
      ton: (kg) => kg * 1000,
    },
    ton: {
      gram: (t) => t / 1000000,
      kilogram: (t) => t / 1000,
      ton: (t) => t,
    },
  },
  temperature: {
    celsius: {
      celsius: (c) => c,
      kelvin: (c) => c + 273.15,
      farenheit: (c) => (c * 1.8) + 32,
    },
    kelvin: {
      celsius: (k) => k - 273.15,
      kelvin: (k) => k,
      farenheit: (k) => ((k * 9) / 5) - 459.67,
    },
    farenheit: {
      celsius: (f) => ((f - 32) * 5) / 9,
      kelvin: (f) => ((f + 459.67) * 5) / 9,
      farenheit: (f) => f,
    },
  },
};
