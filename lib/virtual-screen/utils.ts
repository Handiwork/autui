export function generateId() {
  return Math.floor(Date.now() * Math.random()).toString();
}

/**
 * Make sure returned value is in [start, end].
 * @param value Target value
 * @param start Smallest value.
 * @param end Biggest value.
 * @returns Coerced value.
 */
export function coerceBetween(value: number, start: number, end: number) {
  return Math.min(Math.max(start, value), end);
}
