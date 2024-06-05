export default function createNode(value = null) {
  return {
    value: value,
    nextNode: null,
  };
}
