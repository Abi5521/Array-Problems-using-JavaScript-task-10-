//queue with arrays
class Queue {
	constructor() {
		this.items = {}
		this.frontIndex = 0
		this.backIndex = 0
	}
	enqueue(item) {
		this.items[this.backIndex] = item
		this.backIndex++
		return item + ' inserted'
	}
	dequeue() {
		const item = this.items[this.frontIndex]
		delete this.items[this.frontIndex]
		this.frontIndex++
		return item
	}
	peek() {
		return this.items[this.frontIndex]
	}
	get printQueue() {
		return this.items;
	}
}
const queue = new Queue()
console.log(queue.enqueue(7))
console.log(queue.enqueue(2))
console.log(queue.enqueue(6))
console.log(queue.enqueue(4))
console.log(queue.dequeue())
console.log(queue.peek())
let str = queue.printQueue;
console.log(str)

// console.log(v);

function getIntersection(set1, set2) { 
    const ans = new Set(); 
    for (let i of set2) { 
        if (set1.has(i)) { 
            ans.add(i); 
        } 
    } 
    return ans; 
} 
const set1 = new Set([1, 2, 3, 8, 11]); 
const set2 = new Set([1, 2, 5, 8]); 
  
const result = getIntersection(set1, set2); 
// console.log(result);

function Remove(){
    const array = [2, 5, 9];
    console.log(array);
    const index = array.indexOf(5);
    if (index > -1) {
    array.splice(index, 1); 
    }
    console.log(array); 
}
// Remove();

function LongestString() {
    var arr = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
    ];
    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
        var lgth = arr[i].length;
        longest = arr[i];
    }
    }
    console.log(longest);
}
// LongestString();

function Mapping() {
    const numbers = [65, 44, 12, 4];
    const newArr = numbers.map(myFunction)

    function myFunction(num) {
    return num * 10;
    }
    console.log(newArr);
}
// Mapping();