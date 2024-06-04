let stack = [];

function push() {
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
}
push();
console.log(stack);

function pop() {
  stack.pop();
}
pop();
console.log(stack);

function peek() {
  if (isEmpty()) {
    return "Stack is empty";
  }
  return stack[stack.length - 1];
}
console.log(peek());

function isEmpty() {
  if (stack.length === 0) {
    return true;
  }

  return false;
}

console.log(isEmpty());
