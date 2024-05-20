function stringChop(str, size) {
  // your code here
	function stringChop(str, size) {
    // your code here
		 if (str === null) return [];
    let size1= parseInt(size);
      if (size1 <= 0 || size1>str.length-1) return [str]; 
      let ans = [];
          let i = 0
      while ( i < str.length) {
          let j=i+size1;
          ans.push(str.slice(i, j));
          i += size1;
      }
      return ans;
  }
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
}