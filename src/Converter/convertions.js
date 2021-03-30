export const conversions = {
  length: {
    centimeter: {
      centimeter: (cm) => cm,
      meter: (cm) => cm / 100,
      kilometer: (cm) => cm / 100000,
      mile: (cm) => cm * 0.0000062137,
      yard: (cm) => cm * 0.010936133,
      foot: (cm) => cm * 0.032808399,
    },
    meter: {
      centimeter: (m) => m * 100,
      meter: (m) => m,
      kilometer: (m) => m / 1000,
      mile: (m) => m * 0.000621371192,
      yard: (m) => m * 1.0936133,
      foot: (m) => m * 3.2808399,
    },
    kilometer: {
      centimeter: (km) => km * 100000,
      meter: (km) => km * 1000,
      kilometer: (km) => km,
      mile: (km) => km * 0.621371192,
      yard: (km) => km * 1093.6133,
      foot: (km) => km * 3280.8399,
    },
    mile: {
      centimeter: (m) => m * 160934.4,
      meter: (m) => m * 1609.344,
      kilometer: (m) => m * 1.609344,
      mile: (m) => m,
      yard: (m) => m * 1760,
      foot: (m) => m * 5280,
    },
    yard: {
      centimeter: (y) => y * 91.44,
      meter: (y) => y * 0.9144,
      kilometer: (y) => y * 0.0009144,
      mile: (y) => y / 1760,
      yard: (y) => y,
      foot: (y) => y * 3,
    },
    foot: {
      centimeter: (f) => f * 30.48,
      meter: (f) => f * 0.3048,
      kilometer: (f) => f * 0.0003048,
      mile: (f) => f / 5280,
      yard: (f) => f / 3,
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
      squereMeter: (h) => h * 10000,
      squereKilometer: (h) => h / 100,
      ar: (h) => h * 100,
      hectare: (h) => h,
    },
  },
  weight: {
    gram: {
      gram: (g) => g,
      kilogram: (g) => g * 0.001,
      ton: (g) => g * 0.00000110231131,
    },
    kilogram: {
      gram: (kg) => kg * 1000,
      kilogram: (kg) => kg,
      ton: (kg) => kg / 1000,
    },
    ton: {
      gram: (t) => t * 1000000,
      kilogram: (t) => t * 1000,
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
      farenheit: (k) => (k -273.15) * 9 / 5 + 32,
    },
    farenheit: {
      celsius: (f) => (f - 32) / 1.8,
      kelvin: (f) => (f + 459.67) / 1.8,
      farenheit: (f) => f,
    },
  },
  time: {
    millisecond: {
      millisecond: (m) => m,
      second: (m) => m / 1000,
      minute: (m) => m * 0.000016667,
      hour: (m) => m * 0.000000278,
      day: (m) => m * 0.000000011574074
    },
    second: {
      millisecond: (s) => s * 1000,
      second: (s) => s,
      minute: (s) => s / 60,
      hour: (s) => s * 0.000278,
      day: (s) => s * 0.0000115740741,
    },
    minute: {
      millisecond: (min) => min * 60000,
      second: (min) => min * 60,
      minute: (min) => min,
      hour: (min) => min * 0.0166666667,
      day: (min) => min * 0.000694444444,
    },
    hour: {
      millisecond: (h) => h * 3600000,
      second: (h) => h * 3600,
      minute: (h) => h * 60,
      hour: (h) => h,
      day: (h) => h * 0.0416666667,
    },
    day: {
      millisecond: (d) => d * 86400000,
      second: (d) => d * 86400,
      minute: (d) => d * 1440,
      hour: (d) => d * 24,
      day: (d) => d,
    }
  }
};
