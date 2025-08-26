// 1. Simple array
let numbers = [1, 2, 3, 4, 5];

// 2. Add to end (push)
numbers.push(6);

// 3. Remove from end (pop)
numbers.pop();

// 4. Add to start (unshift)
numbers.unshift(0);

// 5. Remove from start (shift)
numbers.shift();

// 6. Slice array
let part = numbers.slice(1, 3);

// 7. Splice array
numbers.splice(2, 1, 99); // remove index 2, add 99

// 8. Loop through array
for (let n of numbers) {
  console.log("Num:", n);
}

// 9. Map array
let doubled = numbers.map(x => x * 2);

// 10. Filter array
let evens = numbers.filter(x => x % 2 === 0);
