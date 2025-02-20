export default function validateInput(input) {
  if (!input) return false;

  if (input.match(/[^0-9.,]/)) {
    return false;
  }

  return true;
}
