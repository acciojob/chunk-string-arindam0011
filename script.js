function stringChop(str, size) {
  // your code here
	function stringChop(str, size) {
  // your code here
	let ans=[];
	let i=0;
	let j=size+1;
	while(j<str.length){
		ans.push(str.slice(i,j);
		i=j;
		j= j+size-1;
	}
	ans.push(str.slice(i));
	return ans;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
