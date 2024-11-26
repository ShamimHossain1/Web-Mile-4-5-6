let slicedFruits = fruits.slice(1, 4); // Extracts elements from index 1 to 3 (end is not included)
// console.log("Sliced Fruits:", slicedFruits); // ["Banana", "Cherry", "Date"]
// console.log("Original Array After slice:", fruits); // ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

// // 2. splice(start, deleteCount, ...items) - Changes the array by removing/replacing elements
// // Removing 2 elements starting at index 2
// let splicedFruits = fruits.splice(2, 2); 
// console.log("Spliced Elements:", splicedFruits); // ["Cherry", "Date"]
// console.log("Array After splice (removal):", fruits); // ["Apple", "Banana", "Elderberry"]

// // Adding elements with splice at index 1
// fruits.splice(1, 0, "Grapes", "Mango"); 
// console.log("Array After splice (adding):", fruits); // ["Apple", "Grapes", "Mango", "Banana", "Elderberry"]