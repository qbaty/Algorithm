
// function pairElement(str) {
//  var newStr = str.split("");
//  var result = [];
//  var a =["A","T"];
//  var b =["T","A"];
//  var c =["C","G"];
//  var d =["G","C"];
  
//  for(var num in newStr){
//    if(newStr[num] == "A"){
//      result.push(a);
//    } else if(newStr[num] == "T"){
//      result.push(b);
//    } else if(newStr[num] == "C"){
//      result.push(c);
//    } else{
//      result.push(d);
//    }
//  }
  
//   return result;
// }

// //AT TA CG GC

// pairElement("GCG");


function pairElement(str) {
  map = {T:"A",A:"T",C:"G",G:"C"};
  newStrArr = str.split("");
  for(var n in newStr){
    newStrArr[n] = [newStrArr[n],map[newStrArr[n]]];
  }
  
  return newStrArr;
//AT TA CG GC

}
pairElement("GCG");


