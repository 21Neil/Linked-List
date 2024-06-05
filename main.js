import createLinkedList from './createLinkedList.js';

console.log(
  createLinkedList.contains('test'),
  createLinkedList.contains('test3')
);
console.log(createLinkedList.find('test'), createLinkedList.find('test3'));
createLinkedList.append('test');
createLinkedList.append('test2');
createLinkedList.append('test3');
console.log(createLinkedList.getHead());
createLinkedList.prepend('pre test');
console.log(createLinkedList.getHead());
console.log(createLinkedList.getTail());
console.log(createLinkedList.getSize());
console.log(createLinkedList.at(2));
createLinkedList.pop();
console.log(createLinkedList.getTail());
console.log(
  createLinkedList.contains('test'),
  createLinkedList.contains('test3')
);
console.log(createLinkedList.find('test'), createLinkedList.find('test3'));
console.log(createLinkedList.toString());
createLinkedList.insertAt('test insert', 1);
console.log(createLinkedList.toString());
createLinkedList.removeAt(2);
console.log(createLinkedList.toString());
