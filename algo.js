var removeDuplicates = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums = nums.slice(0, i).concat(nums.slice(i + 1));
        }
    } 
    return nums.length;
};

var maxArea = function (height) {
    let maxArea = 0;
    let rightIndex = height.length - 1;
    for (let leftIndex = 0; leftIndex < height.length - 1; leftIndex++) {
        rightIndex = height.length - 1; 
        while (rightIndex > leftIndex) {
            const area = calculateArea(height, leftIndex, rightIndex);
            if (area > maxArea) maxArea = area;
            rightIndex--;
        }
    }
    return maxArea;
};

function calculateArea(height, idx1, idx2) {
    return (Math.min(height[idx1], height[idx2]) * Math.abs(idx1 - idx2))
}


var isMatch = function(s, p) {
    let max = Math.max(s.length, p.length); 
    for(let i = 0; i < max; i++){
        if(s[i] === p[i]){
            continue; 
        } else{
            if(p[i] === ".") continue; 
            if(p[i] === "*"){
                if (possibleToDelete(s, p, i)) return true; 
                if(precedingCharacter(s[i], p, i)){
                    continue; 
                }
                
            }
            if(p[i + 1] === "*") continue; 
            return false; 
        }
    }
    return true; 
};
    

function precedingCharacter(char, p, i){
    for(let j = 0; j < i; j++){
        if(p[j] === char || p[j] === ".") return true; 
    }
    return false; 
}

function possibleToDelete(s, p, i){
    let firstIndex = i - 1; 
    if(firstIndex < 0) firstIndex = 0; 
    console.log(p); 
    console.log(p.slice(0, firstIndex) + p.slice(i + 1)); 
    if(isMatch(s, p.slice(0, firstIndex) + p.slice(i + 1))) return true; 
    return false; 
}




//Node constructor pseudo code
// 

// funciton setHead(node)
//     1. check if the linked list's head is null; 
//         a. if it is, set the head and the tail to the inputed node, then exit out of the function
//     2. call insertBefore on the head of the LL and the input node

// function setTail(node)
//     1. check if the LL's tail is null
//         a. if it is, set the LL's head to the input node;
//          b. exit out of function 
//     2. call insertAfter on the tail of the LL and the input node

// function insertBefore(node, nodeToInsert)
//  1. check if the LL is soley made up of the nodeToInsert
//      a. if so, exit out of funciton 
//  2. call remove on nodeToInsert; 
//  3. change the next and prev of nodeToInsert to mirror the input node 
//  4. check if the node that comes before then input node is is null
//.      a. if so, set the LL's head to nodeToInsert
//       b. Otherwise, set the input nodes prev node's next relationship to  the node to insert
//  5. set the input nodes' prev to nodeToInsert

// function insertAfter 
// 1. check if the LL is soley made up of the nodeToInsert
//      a. if so, exit out of funciton
//  2. call remove on nodeToInsert; 
//  3. change the next and prev of nodeToInsert to mirror the input node 
//  4. check if the node that comes after the input node is is null
//.      a. if so, set the LL's tail to nodeToInsert
//       b. Otherwise, set the input nodes next node's prev relationship to  the node to insert
//  5. set the input nodes' next to nodeToInsert
// 
// 
// function insertAtPosition(position, nodeToInsert)
//          1. check if position === 1
//              a. if it does, set LL's head to nodeToInsert and exit out of the funciton; 
//          2. set a variable node to the LL's head
//          3. set a variable currentPosition to 1; 
//          4. create a while loop checking that ode is not nul and current Position !== the input position.
//              a. in the while loop, increace current positon by 1 and set node to node.next; 
//          5. check if node !== null
//                  a. if it doesn't, call insertBefore on the variable nod and nodeToInsert
//                  b. if it does, cal setTail on nodeToInsert
//jksadjfklsajdlfkjasdlkfjlaksdjfkasdj
//djfkasdjkfjasd
// function removeNodesWithValue(value)
//          1. set node vaiable to the LL' head
//          2. while the node !== null
//              a. check if the node's value === value, if it does call the remove method on it 
//              b. set the node to node.next;
//          3. 

// function remove(node)
// 1. check if node === LL's head
//      a. if it does, set this.head to this.head.next; 
// 2. check if node === LL's tail
//      a. if it does, set this.tail to this.tail.prev
// call remove bindings on node

// function containsNodeWIthValue
//      1. set a variable node to the head of the LL
//      2. create a while loop for when node !== null && and the node's value !== value
//          a. in the while loop, set the node to node.next
//      3. return true if node !== null, false otherwise

//  function removeNodeBindings(node)
//      1. check if input node.prev does not equal null
//          a. if this is so, set node.prev.next to node.next
//      2. check if inputnode.next does not equal null
//          a. if this is so, set node.next.prev to node.prev
//      3. set node.prev to null;
//      4. set node.next to null  hello 

///

function findThreeLargestNumbers(array) {
    let threeLargestNumbers = [null, null, null];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > threeLargestNumbers[2] || threeLargestNumbers[2] === null) {
            threeLargestNumbers = thirdPos(array[i], threeLargestNumbers);
            continue;
        }
        if (array[i] > threeLargestNumbers[1] || threeLargestNumbers[1] === null) {
            threeLargestNumbers = secondPos(array[i], threeLargestNumbers);
            continue;
        }
        if (array[i] > threeLargestNumbers[0] || threeLargestNumbers[0] === null) {
            threeLargestNumbers[0] = array[i];
            continue;
        }
    }
    return threeLargestNumbers;
}

function thirdPos(ele, array) {
    let pos0 = array[1];
    let pos1 = array[2];
    return [pos0, pos1, ele]
}

function secondPos(ele, array) {
    return [array[1], ele, array[2]]
}

function longestSubstringWithoutDuplication(string) {
	let longestSub = []; 
	let mostRecent = {}; 
	let startingIndex = 0; 
  for(let i = 0; i < string.length; i++){
		if(string[i] in mostRecent){
			startingIndex = mostRecent[string[i]] + 1; 
		} else{
			startingIndex = 0; 
        }
        
		let sub = string.slice(startingIndex, i + 1); 
        if(sub.length > longestSub.length) longestSub = sub; 
        console.log(sub); 
	 	mostRecent[string[i]] = i; 
	}
	return longestSub; 
}



function underscorifySubstring(string, substring) {
    const length = substring.length ;
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string.slice(i, i + length) === substring) {
            let rightIndex = i + length - 1;
            let prevIndex = rightIndex;
            while(string.slice(rightIndex, rightIndex + length) === substring) {
                console.log("hit")
                prevIndex = rightIndex;
                rightIndex = rightIndex + length - 1;
            }
            newString += ("_" + string.slice(i, prevIndex + 1) + "_")
            i = prevIndex;
        } else {
            newString += string[i];
        }
    }
    return newString;
}

function patternMatcher(pattern, string) {
    let swaped = false;
    if (pattern[0] !== "x") {
        pattern = swap(pattern);
        swaped = true;
    }
    let hash = generateHash(pattern);
    let possibleLengths = generateLengths(hash, string);
    
    for (let i = 0; i < possibleLengths.length; i++) {
        let x = generateX(string, possibleLengths, i);
        let y = generateY(string, possibleLengths, i);
        let sub = generateSub(x, y, pattern);
        console.log(sub); 
        if (sub === string) {
            if (swaped) {
                return [y, x];
            } else {
                return [x, y];
            }
        }
    }
    if(Object.keys(hash).length === 1){
        let sub = string.slice(0, string.length / pattern.length); 
        if(swaped){
            return ["", sub]; 
        } else{
            return [sub, ""]; 
        }
        
    }
    return [];
}



function generateSub(x, y, pattern) {
    let newString = "";
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === "x") {
            newString += x
        }
        if (pattern[i] === "y") {
            newString += y
        }
    }
    return newString;
}

function generateX(string, possibleLengths, i) {
    return string.slice(0, possibleLengths[i][0])
}

function generateY(string, possibleLengths, i) {
    let firstPos = possibleLengths[i][2];
    let length = possibleLengths[i][1]
    return string.slice(firstPos, firstPos + length)
}

function generateLengths(hash, string) {
    let lengths = [];
    for (let i = 1; i < string.length; i++) {
        let ylength = string.length - (i * hash["x"]);
        ylength = ylength / hash["y"];
        if (ylength > 0) {
            lengths.push([i, ylength, hash["firstPos"] * i]);
        } else {
            break;
        }
    }
    return lengths;
}

function swap(pattern) {
    let swapped = "";
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === "x") {
            swapped += "y"
        } else {
            swapped += "x"
        }
    }
    return swapped;
}

function generateHash(pattern) {
    let hash = {};
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === "y") {
            hash["firstPos"] = hash["firstPos"] || i;
            hash["y"] = hash["y"] || 0;
            hash["y"] += 1;
        }
        if (pattern[i] === "x") {
            hash["x"] = hash["x"] || 0;
            hash["x"] += 1;
        }
    }
    return hash;
}
///jdfiajs;dlkfjlksadjlfkj
//ksjlfkjsal;dkjflskdj


//kdsjlakdjslkfjsljdskajdk


function smallestSubstringContaining(bigString, smallString) {
    let smallHash = generateHash(smallString);
    let smallest = bigString.slice();

    for (let i = 0; i < bigString.length; i++) {
        if (smallest.length > bigString.length - i) break;
        if (!(bigString[i] in smallHash)) continue;
        let rightIndex = i + 1;
        while (!containsAll(smallHash, bigString.slice(i, rightIndex)) && rightIndex < bigString.length) {
            rightIndex++;
        }
        let sub = bigString.slice(i, rightIndex);
        if (containsAll(smallHash, sub) && sub.length < smallest.length) {
            smallest = sub;
        }
    }
    if(containsAll(smallHash, smallest)){
        return smallest
    } else{
        return ""
    }
}

function generateHash(string) {
    let hash = {};
    for (let i = 0; i < string.length; i++) {
        hash[string[i]] = hash[string[i]] || 0;
        hash[string[i]] += 1;
    }
    return hash;
}

function containsAll(hash, sub) {
    let bigHash = generateHash(sub);
    let keys = Object.keys(hash);
    for (let j = 0; j < keys.length; j++) {
        if (!(keys[j] in bigHash) || hash[keys[j]] > bigHash[keys[j]]) return false;
    }
    return true;
}


var groupAnagrams = function (strs) {
    let anagramsHash = {};
    for (let i = 0; i < strs.length; i++) {
        let alphabatized = strs[i].split("").sort().join("");
        if (alphabatized in anagramsHash) {
            anagramsHash[alphabatized].push(strs[i]);
        } else {
            anagramsHash[alphabatized] = [strs[i]];
        }
    }
    return Object.values(anagramsHash);
};


var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums = nums.slice(0, i).concat(nums.slice(i + 1));
        }
    }
    console.log(nums); 
    return nums.length;
};



function testArray(array){
    let index = 0; 
    while(array[index]){
        console.log(index); 
        index += 1; 
    }
    return "hello"; 
}



function maxSumIncreasingSubsequence(array) {
    let max = null;
    let subsequences = [];
    for (let i = 0; i < array.length; i++) {
        subsequences.push(maxSumAtIndex(i, array));
    }
    max = findMax(subsequences); 
    return [max.reduce((a, b) => a + b), max]; 
}

function findMax(array) {
    let max = [Number.NEGATIVE_INFINITY];
    for (let i = 0; i < array.length; i++) {
        if(array[i].reduce((a, b) => a + b) > max.reduce((a, b) => a + b)) max = array[i]; 
    }
    return max
}

function maxSumAtIndex(index, array) {
    let min = Number.NEGATIVE_INFINITY;
    let subsequence = [array[index]];
    let max = array[index];
    for (let i = 0; i < index; i++) {
        if (array[i] < max && array[i] > min) {
            subsequence.unshift(array[i]);
            min = array[i];
        }
    }
    return subsequence.sort((a, b) => a - b);
}

var threeSum = function (nums) {
    inputed = {}; 
    nums.sort((a, b) => (a - b))
    let result = []
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                let key = nums[i].toString() + nums[left].toString() +  nums[right].toString(); 
                if(!inputed[key])result.push([nums[i], nums[left], nums[right]]);
                inputed[key] = true; 
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            }
        }
    }
    return result;
};


var lengthOfLastWord = function (s) {
    let array = s.split(" ");
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] !== "") return array[i].length;
    }
    return 0;
};


var removeDuplicates = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums = nums.slice(0, i).concat(nums.slice(i + 1));
        }
    }
    return nums;
};

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (i === 0 && digits[i] === 9) {
            digits[i] = 0
            digits.unshift(1);
            break
        }

        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
        } else {
            digits[i] = 0;
        }
    }
    return digits
};

var addBinary = function (a, b) {
    let returnArray = [];
    a = a.split("").reverse(); 
    b = b.split("").reverse(); 
   
    let longest = Math.max(a.length, b.length);
    let caryOver = false;
    for (let i = 0; i < longest; i++) {
        if (caryOver === false) {
            if (a[i] == 1 && b[i] == 1) {
                returnArray.unshift(0);
                caryOver = true;
            } else if (a[i] == 1 || b[i] == 1) {

                returnArray.unshift(1);
            } else {
                returnArray.unshift(0);
            }
        } else {
            if ((a[i] == 1 && b[i] == 1)) {
                returnArray.unshift(1);
            }
            else if (a[i] == 1 || b[i] == 1) {
                returnArray.unshift(0);
            } else {
                returnArray.unshift(1);
                caryOver = false;
            }
        }
    }
    if (caryOver === true) returnArray.unshift(1);
    return returnArray.join("");

};


var climbStairs = function(n) {
  if(n <= 0) return 0; 
  if(n == 1) return 1; 
  if(n == 2) return 2; 
  let one_step_before = 2; 
  let two_steps_before = 1; 
  let all_ways = 0; 
  for(let i = 2; i < n; i++){
      all_ways = one_step_before + two_steps_before; 
      two_steps_before = one_step_before; 
      one_step_before = all_ways; 
  }
  return all_ways; 
};

var maxProfit = function(prices) {
    let sum = 0; 
    let valley = null; 
    let peak = null; 
    for(let i = 0; i < prices.length; i++){
        if(i === 0){
            if(prices[i] < prices[i + 1]) valley = prices[i]; 
        } else if (i !== prices.length - 1){
            if(prices[i] < prices[i - 1] && prices[i] < prices[i + 1]) valley = prices[i]; 
        }
        if(i === prices.length - 1){
            if(prices[i] > prices[i - 1]) peak = prices[i]; 
        } else if (valley !== null){
            if(prices[i] > prices[i - 1] && prices[i] > prices[i + 1]) peak = prices[i]; 
            }
        if(peak !== null && valley !== null){
            sum += peak - valley; 
            peak = null; 
            valley = null; 
        }
    }
    return sum; 
};


//1320. Minimum Distance to Type a Word Using Two Fingers

var minimumDistance = function (word) {
    let positions = {
        "A": [0, 0],
        "B": [0, 1],
        "C": [0, 2],
        "D": [0, 3],
        "E": [0, 4],
        "F": [0, 5],
        "G": [1, 0],
        "H": [1, 1],
        "I": [1, 2],
        "J": [1, 3],
        "K": [1, 4],
        "L": [1, 5],
        "M": [2, 0],
        "N": [2, 1],
        "O": [2, 2],
        "P": [2, 3],
        "Q": [2, 4],
        "R": [2, 5],
        "S": [3, 0],
        "T": [3, 1],
        "U": [3, 2],
        "V": [3, 3],
        "W": [3, 4],
        "X": [3, 5],
        "Y": [4, 0],
        "Z": [4, 1]
    }
    let finger1Distance = 0;
    let finger1Position = positions[word[0]];
    let finger2Distance = 0;
    let finger2Position = findLargestDistance(finger1Position, word, positions);
    console.log(finger2Position); 
    let finger2Positions = { [finger2Position]: true };
    for (let i = 1; i < word.length; i++) {
        let toF1 = calculateDistance(finger1Position, positions[word[i]]);
        let toF2 = calculateDistance(finger2Position, positions[word[i]]);
        if (toF1 < toF2) {
            finger1Distance += toF1;
            finger1Position = positions[word[i]]; 
        } else {
        
            finger2Positions[positions[word[i]]] = true;
        }
    }
    let hitFirst = false;
  
    for (let j = 1; j < word.length; j++) {
        if (finger2Positions[positions[word[j]]]) {
            if (!hitFirst) {
                finger2Position = positions[word[j]];
                hitFirst = true;
            } else {
                finger2Distance += calculateDistance(finger2Position, positions[word[j]]);
                finger2Position = positions[word[j]]
            }
        }
    }
    
    return finger1Distance + finger2Distance;

};

function findLargestDistance(finger1Position, word, positions) {
    let largest = Number.NEGATIVE_INFINITY;
    let position = null;
    for (let i = 0; i < word.length; i++) {
        let distance = calculateDistance(finger1Position, positions[word[i]]);
        if (distance > largest) {
            largest = distance;
            position = positions[word[i]];
        }
    }
    return position;
}

function calculateDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}


var addDigits = function (num) {
    while (num > 9) {
        let alt = 0;
        let string = num.toString();
        for (let i = 0; i < string.length; i++) {
            alt += parseInt(string[i]);
        }
        num = alt;
    }
    return num;
};


var reverseWords = function(s) {
   let array = s.split(" ").reverse(" "); 
   let returnArray = []; 
   for(let i = 0; i < array.length; i++){
      if(array[i] !== " " && array[i] !== "") returnArray.push(array[i]); 
   }
   return returnArray.join(" "); 
   
};

var searchRange = function(nums, target) {
    let index = findIndex(nums, target); 
    if(index === -1) return [-1, -1]; 
    let start = findStart(nums, index, target); 
    let last = findLast(nums, index, target); 
    return [start, last]; 
};

function findLast(nums, index, target){
    let last = index; 
    while(nums[last] === target){
        last += 1; 
    }
    return last - 1; 
}

function findStart(nums, index, target){
    let start = index; 
    while(nums[start] === target) start -= 1; 
    return start + 1; 
}

function findIndex(nums, target){
    if(nums.length < 1) return -1; 
    let mid = Math.floor(nums.length/2); 
    let pivot = nums[mid]; 
    if(pivot === target) return mid; 
    if(pivot > target) return findIndex(nums.slice(0, mid), target); 
    if(pivot < target){
        let result = findIndex(nums.slice(mid + 1), target); 
        console.log(result); 
        if(result === -1) return -1; 
        return mid + 1 + result; 
    }
}

function addArrays(array1, array2) {
    let longest;
    let otherArray;
    if (array1.length >= array2.length) {
        longest = array1;
        otherArray = array2;
    } else {
        longest = array2;
        otherArray = array1;
    }
    let carryAmount = 0
    for (let i = 0; i < otherArray.length; i++) {
        if (carryAmount > 0) {
            if (longest[i] + otherArray[i] + carryAmount < 10) {
                longest[i] = longest[i] + otherArray[i] + carryAmount;
                carryAmount = 0;
            } else {
                let sum = longest[i] + otherArray[i] + carryAmount; 
                carryAmount = 0; 
                while(sum > 9){
                    sum -= 10; 
                    carryAmount += 1; 
                }
                longest[i] = sum; 
            }
        } else {
            if (longest[i] + otherArray[i] < 10) {
                longest[i] = longest[i] + otherArray[i];
            } else {
                let sum = longest[i] + otherArray[i];
                while (sum > 9) {
                    sum -= 10;
                    carryAmount += 1;
                }
                longest[i] = sum; 
            }
        }
    }
    for(let i = otherArray.length; i < longest.length; i++){
        if (carryAmount === 0) break; 
        let sum = longest[i] + carryAmount; 
        carryAmount = 0; 
        if(sum > 9){
            sum -= 10; 
            carryAmount += 1; 
        }
        longest[i] = sum; 
    }
    while(carryAmount > 0){
        let remainder = carryAmount % 10; 
        longest.push(remainder); 
        carryAmount -= 10; 
    }
    return longest
}

console.log(addArrays([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))