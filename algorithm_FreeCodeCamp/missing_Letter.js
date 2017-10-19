function fearNotLetter(str) {
   for(var i=0; i<str.length-1 ; i++){
     if (str.charCodeAt(i+1) - str.charCodeAt(i)!== 1){
       return String.fromCharCode(str.charCodeAt(i)+1);
     }
   }
}

fearNotLetter("abce");
