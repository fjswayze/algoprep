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

console.log(isMatch("aaa", "ab*c*a"))


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