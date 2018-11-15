var fs = require('fs');
let gematria = require(process.argv[3]);
let jsonData = JSON.parse(fs.readFileSync(process.argv[2]));

console.log("<title>" + jsonData.heSectionRef + "</title>");
for (let x=0; x<jsonData.he.length; x++) {
	if (jsonData.he[x] != "" ) {
		if (jsonData.alts[x] != undefined && jsonData.alts[x][0] != undefined){
			console.log("<h2>" + jsonData.alts[x][0]["he"][0] + "</h2>");
		}
		var d = x+1;
		var daf;
		if (d%2 == 0) {
			daf = gematria(d/2) + ":"
		} else {
			daf = gematria((d+1)/2) + "."
		}
		console.log("<h3>" + daf + "</h3>");
	}
	for (let i=0; i<jsonData.he[x].length; i++) {
		if (jsonData.alts[x] != undefined && i != 0 && jsonData.alts[x][i] != undefined){
			console.log("<h2>" + jsonData.alts[x][i]["he"][0] + "</h2>");
		}
		console.log('<p class="he">' + jsonData.he[x][i] + "</p>");
		if (jsonData.text[x]!= undefined && jsonData.text[x][i] != undefined ) {
			console.log('<p class="en">' + jsonData.text[x][i] + "</p>");
		}
	}
}
