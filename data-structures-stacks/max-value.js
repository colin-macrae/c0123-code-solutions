// I cheated on this one! 😏
export default function countValues(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    max = Math.max(max, stack.pop());
  }
  return max;
}

// export default function maxValue(stack) {
//   if (stack.pop() === undefined) {
//     return -Infinity;
//   }
//   const array = [];
//   let i = 0;
//   while (i < 4) {
//     array.push(stack.pop());
//     i++;
//   }
//   return Math.max(...array);
// }
