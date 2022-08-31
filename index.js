function hasTargetSum(array, target) {
  // Write your algorithm here
  const obj = {}
  //iterate over each array
  for(const number of array){
    const complement = target - number;
    if(obj[complement]) return true
    obj[number] = true;
  }
  return false;
}


/* 

  Write the Big O time complexity of your function here
  Time complexity: 0(n)
  Space complexity: 0(n)
*/

/* 
  Add your pseudocode here
*/
  //make a function that takes two parameters
    //make an emty object
    //iterate over each number of array
      //make a variable called complement that minus target and number and store the value to complement variable
      //check if object has the value of complement if it has , returns true
  //otherwise returns false 
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
