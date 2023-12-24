function makeid(l) {
  // write your code here
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let randomString="";
	for(let i=0; i<l; i++){
		let randomIndex = Math.floor(Math.random() * characters.length);
		randomString += characters.charAt(randomIndex);
	}
	return randomString;
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
