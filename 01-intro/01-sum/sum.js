export default function sum(a, b) {
  if ( typeof a !== 'number' || typeof b !== 'number' ) throw new TypeError (`Parameters of sum() should be number`);
  return a + b;
}
