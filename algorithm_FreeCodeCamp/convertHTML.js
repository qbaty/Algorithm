function convertHTML(str) {
  // &colon;&rpar;
  map = {'&':'&amp;',
          '<':'&lt;',
          '>':'&gt;',
          '\"':'&quot;',
          '\'':"&apos;"
        };
  
  mapArr = Object.keys(map);
  for(var n in mapArr){
    word = mapArr[n];
    str = str.replace(RegExp(word, 'g'),map[word]);
  }
  return str;
}

convertHTML("Hamburgers < Pizza < Tacos");
