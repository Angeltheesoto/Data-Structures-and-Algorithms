// STACKS -

// example 1:
/* functions: 
push - Placing data onto a stack.
pop - Removing the top element of a stack
peek - Displaying the top element of a stack.
length - Determining how many elements are on the stack.
*/

// let letters = []; // this is a stack

// let word = 'free';

// let rword = '';

// // put letters of word into stack
// for ( let i = 0; i < word.length; i++) {
//  letters.push(word[i]);
// }

// // pop off the stack in reverse order
// for (let i = 0; i < word.length; i++){
//  rword += letters.pop();
// }

// if ( rword === word){
//  console.log(word + ' is a palindrome.');
// } else {
//  console.log(word + ' is not a palindrome.')
// }
// Returns if its a palindrome or not.

// example 2:
// Creates a stack
let Stack = function() {
 this.count = 0;
 this.storage = {}

 // Adds a value onto the end of the stack
 this.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
 }

 // Removes and returns the calue at the end of the stack
 this.pop = function() {
  if(this.count === 0){
   return undefined;
  }

  this.count--;
  let result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
 }

 this.size = function() {
  return this.count;
 }

 // Returns the value at the end of the stack
 this.peek = function(){
  return this.storage[this.count-1]
 }
}

// let myStack = new Stack();

// myStack.push(1)
// myStack.push(2)
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push('freeCodeCamp');
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());


// SETS -

function mySet() {
 // the var collection will hold the set
 var collection = [];
 // this method will check for the presence of an element and return true or false
 this.has = function(element) {
  return (collection.indexOf(element) !== -1);
 }
 // this method will return all the values in the set
 this.values = function() {
  return collection;
 }
 // this method will add an element to the set 
 this.add = function(element) {
  if(!this.has(element)){
   collection.push(element);
   return true;
  }
  return true;
 };
 // this method will remove an elemetn from a set
 this.remove = function(element) {
  if(this.has(element)){
   index = collection.indexOf(element);
   collection.splice(index, 1)
   return true
  }
  return false; 
 };
 // this method will return the size of the collection
 this.size = function() {
  return collection.lengthl
 }
 // this method will return the union of two sets
 this.union = function(otherSet) {
  let unionSet = new mySet();
  let firstSet = this.values();
  let secondSet = otherSet.values();
  firstSet.forEach(function(e){
   unionSet.add(e);
  })
  secondSet.forEach(function(e){
   unionSet.add(e);
  });
  return unionSet;
 };
 // this method will return the intersection of two sets as a new set
 this.intersection = function(otherSet) {
  let intersectionSet = new mySet()
  let firstSet = this.values();
  firstSet.forEach(function(e){
   if(otherSet.has(e)){
    intersectionSet.add(e)
   }
  });
  return intersectionSet;
 }
 // this method will return the difference of two sets as a new set
 this.difference = function(otherSet){
  let differenceSet = new mySet();
  let firstSet = this.values();
  firstSet.forEach(function(e){
   if(!otherSet.has(e)){
    differenceSet.add(e)
   }
  })
  return differenceSet;
 }
 // this method will test if the set is a subset of a different set
 this.subset = function(otherSet) {
  let firstSet = this.values();
  return firstSet.every(function(value){
   return otherSet.has(value);
  });
 };
}
// let setA = new mySet();
// let setB = new mySet();
// setA.add('a');
// setB.add('b');
// setB.add('c');
// setB.add('a');
// setB.add('d');
// console.log(setA.subset(setB));
// console.log(setA.intersection(setB).value());


// QUEUE -

function Queue () {
 collection = []; // collect all the items in the queue
 // helps print collection
 this.print = function() {
  console.log(collection);
 };
 // enqueue - push the first item onto the queue
 this.enqueue = function(element){
  collection.push(element);
 };
 // dequeue - take an item off the queue
 this.dequeue = function() {
  return collection.shift();
 };
 // front - return what item is at the front of the array without removing the item off of the array.
 this.front = function() {
  return collection[0];
 };
 // size - figure out the size of the array
 this.size = function() {
  return collection.length;
 };
 // isEmpty - check if its empty
 this.isEmpty = function() {
  return (collection.length === 0)
 };
}

// let q = new Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// q.print();
// q.dequeue();
// console.log(q.front())
// q.print();

// Priority Queue
function PriorityQueue() {
 let collection = []
 this.printCollection = function() {
  (console.log(collection))
 };
 this.enqueue = function(element){
  if(this.isEmpty()){
   collection.push(element);
  } else {
   let added = false;
   for(let i = 0; i < collection.length; i++){
    if(element[i] < collection[i][1]) { // checking priorities
     collection.splice(i, 0, element);
     added = true;
     break;
    }
   }
   if(!added){
    collection.push(element);
   }
  }
 };
 this.dequeue = function() {
  let value = collection.shift();
  return value[0]
 }
 this.front = function() {
  return collection[0];
 }
 this.size = function() {
  return collection.length;
 };
 this.isEmpty = function() {
  return (collection.length === 0)
 };
}

// let pq = new PriorityQueue();
// pq.enqueue(['Beau Carnes', 2]);
// pq.enqueue(['Quincy Larson', 3]);
// pq.enqueue(['Ewa Mitulska-Wojcik', 1]);
// pq.enqueue(['Briana Swift', 2])
// pq.printCollection();
// pq.dequeue(); 
// pq.front();
// pq.printCollection();


// BINARY SEARCH TREE -

class Node {
 constructor(data, left = null, right = null){
  this.data = data;
  this.left = left;
  this.right = right;
 }
}

class BST {
 constructor() { // root of the tree
  this.root = null;
 }
 add(data) { // add something to the tree
  const node = this.root;
  if(node === null) {
   this.root = new Node(data);
   return;
  } else {
   const searchTree = function(node) {
    if (data < node.data) {
     if(node.left === null) {
      node.left = new Node(data);
      return;
     } else if (node.left !== null) {
      return searchTree(node.left);
     }
    } else if (data > node.data) {
     if(node.right === null){
      node.right = new Node(data);
      return;
     } else if (node.right !== null) {
      return searchTree(node.right);
     }
    } else {
     return null;
    }
   };
   return searchTree(node);
  }
 }
 findMin() {
  let current = this.root;
  while(current.left !== null) {
   current = current.left; 
  }
  return current.data;
 }
 findMax() {
  let current = this.root;
  while(current.right !== null) {
   current = current.right;
  }
  return current.data;
 }
 find(data) { // skipping find because it is so similar to 'isPresent'
  let current = this.root;
  while (current.data !== data) {
   if(data < current.data) {
    current = current.left;
   } else {
    current = current.right;
   }
   if(current === null) {
    return null;
   }
  }
  return current;
 }
 isPresent(data){
  let current = this.root;
  while(current) {
   if(data === current.data) {
    return true;
   }
   if (data < current.data) {
    current = current.left;
   } else {
    current = current.right;
   }
  }
  return false;
 }
 remove(data) {
  const removeNode = function(node, data){
   if(node == null) {
    return null;
   }
   if(data == node.data) {
    // node has no children
    if (node.left == null && node.right == null) {
     return null;
    }
    // node had no left child
    if (node.left == null) {
     return node.right;
    }
    // node has no right child
    if(node.right == null) {
     return node.left;
    }
    // node has two children
    let tempNode = node.right;
    while (tempNode.left !== null){
     tempNode = tempNode.left;
    }
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
   } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
   } else {
    node.right = removeNode(node.right, data);
    return node;
   }
  }
  this.root = removeNode(this.root, data);
 }
}

// const bst = new BST();
// bst.add(4);
// bst.add(2);
// bst.add(6);
// bst.add(1);
// bst.add(3);
// bst.add(5);
// bst.add(7);
// bst.remove(4)
// console.log(bst.findMin());
// console.log(bst.findMax());
// bst.remove(7)
// console.log(bst.findMax());
// console.log(bst.isPresent(4));