 function stringLength(string){
    if(typeof string !== "string"){
        throw new Error("string must be a string");
    }
 if(string.length >=1 && string.length<10){
    return string.length;
 }
 else{
    throw new Error("Invalid string length");
 }
 
 }
module.exports = stringLength;
