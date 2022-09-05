export function generateId() {
  return Math.floor(Date.now() * Math.random()).toString();
}
