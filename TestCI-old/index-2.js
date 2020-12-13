// A.2
function merge2String(str1, str2) {
    let finalStr = ``;
    let totalLength = 0;
    if (str1.length > str2.length) {
        totalLength = str1.length;
    } else {
        totalLength = str2.length;
    }
    for (let i = 0; i < totalLength; i++) {
        let char1 = str1[i];
        let char2 = str2[i];
        if (str1[i] == undefined) {
            char1 = ``;
        } else if (str2[i] == undefined) {
            char2 = ``;
        }
        finalStr += char1 + char2;
    }
    return finalStr;
}
console.log(merge2String(`abc`, `0123`));
console.log(merge2String(`abcd`, `123`));