let linesAsString = '';
process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        linesAsString += chunk;
    }
});

process.stdin.on('end', () => {
    let lines = linesAsString.split("\n").map(line => line.trim());
    const T = parseInt(lines[0]);
    const testCasesAsArray = groupStringsInTheirTestCases(T, lines.splice(1));

    for (let caseI = 1; caseI <= T; caseI++) {
        process.stdout.write("Case #"+caseI+": "+doCase(testCasesAsArray[caseI-1])+"\n");
    }
});

/**
 * because why wouldn't you? this is so much nicer and easier to understand
 * @param howMany
 * @param testCases
 * @returns {[]}
 */
const groupStringsInTheirTestCases = (howMany, testCases) => {
    let returnArray = [];
    for (let i=0; i < howMany; i++){
        returnArray.push(testCases.splice(0, parseInt(testCases[0])+1))
    }
    return returnArray;
};

/**
 * solves for test case
 * @param C
 * @returns {string}
 */
const doCase = (C) => {
    const matrixSize = C.splice(0, 1);
    const k = doTrace(C, matrixSize);
    const r = doRows(C, matrixSize);
    const c = doColumns(C, matrixSize);
    return k + " " + r + ' '+ c;
};

/**
 * solves matrix trace
 * @param matrix
 * @param matrixSize
 * @returns {number}
 */
const doTrace = (matrix, matrixSize) => {
    let returnVal = 0;
    for(let i = 0; i < matrixSize; i++){
        returnVal = returnVal + parseInt(matrix[i].split(' ')[i]);
    }
    return returnVal;
};

/**
 * number of rows that have duplicate elements
 * @param matrix
 * @param matrixSize
 * @returns {number}
 */
const doRows = (matrix, matrixSize) => {
    let returnVal = 0;

    for(let i = 0; i < matrixSize; i++){
        let asArray = matrix[i].split(' ');
        if(asArray.some((val, i) => asArray.indexOf(val) !== i)){
            returnVal ++;
        }
    }
    return returnVal;
};

const doColumns = (matrix, matrixSize) => {
    let returnVal = 0;

    for(let j = 0; j < matrixSize; j++){
        let column = [];
        for(let i = 0; i < matrixSize; i++){
            let asArray = matrix[i].split(' ');
            column.push(asArray[j]);
        }
        if(column.some((val, i) => column.indexOf(val) !== i)){
            returnVal ++;
        }
    }

    return returnVal;
};