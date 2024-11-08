

/*function bS(arr, low, high, target) {
    let ans = -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      
      if (arr[mid] === target) {
        ans = mid;
        break;
      }
      
      if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return ans;
  }
  
  let arr = [2, 5, 17, 27, 99];
  let target = 27;
  console.log(bS(arr, 0, arr.length - 1, target));
*/

/*function lProperties(obj) {
    return Object.keys(obj);
  }
  
  
  let person = {
    name: "Alice",
    age: 30,
    city: "New York"
  };
  
  let properties = lProperties(person);
  console.log(properties);
*/

/*function hP(obj, prop) {
    return obj.hasOwnProperty(prop);
}
const person = { name: "Alice", age: 25, city: "New York" };
console.log(hp(person, "name")); 
console.log(hp(person, "gender"));
*/

/*function qSort(arr) {
    
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let leftArray = [];   
    let rightArray = [];  
    for (let i = 0; i < arr.length - 1; i++) {  
        if (arr[i] < pivot) {
            leftArray.push(arr[i]);   
        } else {
            rightArray.push(arr[i]); 
        }
    }
    return [...qSort(leftArray), pivot, ...qSort(rightArray)];
}
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = qSort(unsortedArray);
console.log("Sorted array:", sortedArray);*/
