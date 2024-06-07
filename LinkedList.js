import Node from './Node.js';

function LinkedList() {
  let head = null;
  let tail = null;

  const append = value => {
    if (head === null) {
      head = Node(value);
      tail = head;
      return;
    }
    if (head !== null) {
      tail.nextNode = Node(value);
      tail = tail.nextNode;
      return;
    }
  };

  const prepend = value => {
    if (head === null) {
      head = Node(value);
      tail = head;
      return;
    }
    if (head !== null) {
      const newNode = Node(value);
      newNode.nextNode = head;
      head = newNode;
      return;
    }
  };

  const getSize = () => {
    if (head === null) return 0;
    let size = 1;
    let tmp = head;
    while (tmp.nextNode !== null) {
      size++;
      tmp = tmp.nextNode;
    }
    return size;
  };

  const getHead = () => head;

  const getTail = () => tail;

  const at = index => {
    let tmp = head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
    }
    return tmp;
  };

  const pop = () => {
    let tmp = head;
    if (tmp === null) return;
    if (tmp.nextNode === null) {
      head = null;
      tail = null;
    }
    while (tmp.nextNode.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    tail = tmp;
    tail.nextNode = null;
    return;
  };

  const contains = value => {
    let tmp = head;
    if (tmp === null) return false;
    while (tmp.value !== value && tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    if (tmp.value === value) return true;
    return false;
  };

  const find = value => {
    let tmp = head;
    let index = 0;
    if (tmp === null) return false;
    while (tmp.value !== value && tmp.nextNode !== null) {
      index++;
      tmp = tmp.nextNode;
    }
    if (tmp.value === value) return index;
    return null;
  };

  const toString = () => {
    let tmp = head;
    if (tmp === null) return null;
    let string = `( ${tmp.value} )`;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      string += ` -> ( ${tmp.value} )`;
    }
    string += ` -> null`;
    return string;
  };

  const insertAt = (value, index) => {
    let oldNode = at(index);
    let newNode = Node(value);
    let prevNode = at(index - 1);
    prevNode.nextNode = newNode;
    newNode.nextNode = oldNode;
  };

  const removeAt = index => {
    let prevNode = at(index - 1);
    let nextNode = at(index + 1);
    prevNode.nextNode = nextNode;
  };

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

export default LinkedList();
