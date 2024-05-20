function stringChop(str, size) {
  // your code here
	function stringChop(str, size) {
  // your code here
	if (size <= 0 || size>str.length-1) return [str]; 
    let ans = [];
		let i = 0
    for ( i < str.length) {
		let j=i+size+1;
        ans.push(str.slice(i, j));
		i += size
    }
		ans.push(str.slice(i));
    return ans;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
}