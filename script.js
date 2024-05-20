function stringChop(str, size) {
  // your code here
	function stringChop(str, size) {
  // your code here
	if (size <= 0) return str; 
    let ans = [];
    for (let i = 0; i < str.length; i += size) {
        ans.push(str.slice(i, i + size));
    }
    return ans;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
