var fs = require('fs');
let gematria = require(process.argv[3]);
let jsonData = JSON.parse(fs.readFileSync(process.argv[2]));

console.log("<title>" + jsonData.heSectionRef + "</title>");
for (let x=0; x<jsonData.he.length; x++) {
	if (jsonData.he[x] != "" ) {
		if (jsonData.alts[x] != undefined && jsonData.alts[x][0] != undefined){
			console.log("<h2>" + jsonData.alts[x][0]["he"][0] + "</h2>");
		}
	}
	for (let i=0; i<jsonData.he[x].length; i++) {
		var seif = gematria(i+1)
		var content = jsonData.he[x][i]
		if (i==0) {
			var index = content.indexOf('</b>');
			if (index==-1){index=0;}else{index+=4;}
			console.log( "<h3>" + gematria(x+1) + ") " + content.substring(0, index ) + "</h3>");
			console.log('<div class="seif"><span class="seifh">'  + seif + ') </span>' + content.substring(index) + "</div>");
		} else {
			console.log('<div class="seif"><span class="seifh">'  + seif + ') </span>' + content + "</div>");
		}
	}
}
