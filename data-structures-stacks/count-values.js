// export default function countValues(stack) {
//   const popped = 0;
//   for (let i = 0; i < 4; i++) {
//     const top = stack.peek();
//     popped.push(top);
//     stack.pop();
//   }
//   return popped.length;
// }

export default function countValues(stack) {
  let popped = 0;
  for (let i = 0; i < 5; i++) {
    if (stack.peek() !== undefined) {
      stack.pop();
      popped += 1;
    } else return popped;
  }
  return popped;
}
