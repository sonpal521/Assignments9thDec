//Write a javascript program to print below 
// having numbers in pyramid form along with its
//mirror image
function print(n) {
	let var1 = 1, var2 = 1;

	for (let i = 0; i < n; i++) {
		for (let j = n - 1; j > i; j--) {
			document.write("");
		}

		for (let k = 1; k <= var1; k++) {
			document.write(Math.abs(k - var2));
		}

		var1 += 2;
		var2++;
		document.write("<br/>");
	}
}

let n = 5;
print(n);


