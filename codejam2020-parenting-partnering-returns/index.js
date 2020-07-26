let linesAsString = '';
process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        linesAsString += chunk;
    }
});

process.stdin.on('end', () => {
    let lines = linesAsString.split("\n").map(line => line.toString().trim());
    const T = parseInt(lines[0]);
    const testCasesAsArray = groupStringsInTheirTestCases(T, lines.splice(1));

    for (let caseI = 1; caseI <= T; caseI++) {
        process.stdout.write("Case #"+caseI+": "+doCase(testCasesAsArray[caseI-1])+"\n");
    }
});

const groupStringsInTheirTestCases = (howMany, testCases) => {
    let returnArray = [];
    for (let i=0; i < howMany; i++){
        returnArray.push(testCases.splice(0, parseInt(testCases[0])+1))
    }
    return returnArray;
};

const doCase = (T) => {
    let returnStr = '';
    const noOfTasks = T.splice(0, 1);
    let jBusyBetween = [0, 0];
    let cBusyBetween = [0, 0];

    let jTasks = [];
    let cTasks = [];

    const map = T.map(row => row.split(' ').map(s => parseInt(s)))
        .map((a, i) => ({s: a[0], e: a[1], i: i}))
        .sort((x, y) => x.s - y.s);

    for(let i = 0; i < map.length; i++){
        let taskAtHand = map[i];
        if(taskAtHand.s >= jBusyBetween[1]){
            jBusyBetween[0] = taskAtHand.s;
            jBusyBetween[1] = taskAtHand.e;
            jTasks.push(taskAtHand.i);
        } else if (taskAtHand.s >= cBusyBetween[1]) {
            cBusyBetween[0] = taskAtHand.s;
            cBusyBetween[1] = taskAtHand.e;
            cTasks.push(taskAtHand.i);
        } else {
            return 'IMPOSSIBLE';
        }
    }

    for(let i = 0;  i < noOfTasks; i++){
        if(jTasks.includes(i)){
            returnStr += 'J';
        } else {
            returnStr += 'C';
        }
    }

    return returnStr;
};
