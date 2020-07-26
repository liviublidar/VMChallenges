let linesAsString = ''; process.stdin.on('readable', () => { let 
    chunk; while ((chunk = process.stdin.read()) !== null) {
        linesAsString += chunk;
    }
});
process.stdin.on('end', () => { let lines = 
    linesAsString.split("\n").map(line => 
    line.toString().trim()); const T = parseInt(lines.length); 
    for (let caseI = 1; caseI <= T; caseI++) {
        if (lines[caseI]) { process.stdout.write("Case 
            #"+(caseI)+": "+ doCase(lines[caseI])+"\n");
        }
    }
});
function doCase(item){ let soFar = 0; let returnVal = ''; 
    item.split('').forEach((dStr) => {
        let d = parseInt(dStr); let needed; if(d > soFar) { 
            needed = d - soFar; for(let i = 0; i < needed; i++){
                returnVal += "(";
            }
            soFar += needed;
        } else {
            needed = soFar - d; for(let i = 0; i < needed; i++){ 
                returnVal += ")";
            }
            soFar -= needed;
        }
        returnVal += dStr;
    });
    for (let i=0; i < soFar; i++){ returnVal += ")";
    }
    return returnVal;
}
