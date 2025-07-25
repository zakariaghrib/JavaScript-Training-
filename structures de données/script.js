var numbers = [12, 0, -1, 9,0,23,-24];

//Speed Run
function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function countEven(numbers) {
  return numbers.filter(num => num % 2 === 0).length;
}

function double(numbers) {
  return numbers.map(num => num * 2);
}

console.log(sum([1, 2, 3]));          
console.log(countEven([1, 2, 4, 5])); 
console.log(double([4, 2, 7]));       




// Bubble Sort :
var numbers = [12, 0, -1, 9,0,23,-24];
console.log(numbers)

for(let i=0;i<numbers.length;i++){
  

  for(let j = i+1;j<numbers.length;j++){
    if (numbers[j]>numbers[i]) {
      let nv = numbers[j];
      numbers[j]=numbers[i];
      numbers[i]=nv;
      
    }
  }
}
console.log(numbers);
//----------------------------------------------------------------------------------------------------------------------

//selection sort
for (let i = 0; i < numbers.length - 1; i++) {
  
  let minIndex = i;

  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[minIndex]) {
      minIndex = j;
    }
  }
  if (minIndex !== i) {
    let temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
  }
}

console.log(numbers); 
//--------------------------------------------------------------------------------------------------------------------------

//insertion sort
for (let i = 1; i < numbers.length; i++) {
  let current = numbers[i];
  let j = i - 1;

  while (j >= 0 && numbers[j] > current) {
    numbers[j + 1] = numbers[j];
    j--;
  }

  numbers[j + 1] = current;
}
console.log(numbers); 
//----------------------------------------------------------------------------------------------------------------

//Linear Search
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; 
    }
  }
  return -1; 
}


let numberss = [5, 3, 7, 1, 9];
console.log(linearSearch(numberss, 7)); 
console.log(linearSearch(numberss, 4));

//------------------------------------------------------------------------------------------------------------------------
//Binary Search 
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid; 
    } else if (array[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return -1; 
}
let sortedNumbers = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(sortedNumbers, 7));  
console.log(binarySearch(sortedNumbers, 4));  






















