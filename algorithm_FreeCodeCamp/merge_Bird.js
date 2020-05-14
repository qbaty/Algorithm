function migratoryBirds(n, ar) {
    var result = {};
    for(var i = 0; i < ar.length; i++) {
    if(!result[ar[i]]){
       result[ar[i]] = 0;
    }
        result[ar[i]]++;
    }
    
    var ans = result[ar[0]];
    for(var k = 0; k< ar.length-1; k++){
        if (result[ar[k]] < result[ar[k+1]] ){
            ans = ar[k+1];
        }
    }
    return ans;
  }

  // use !result[ar[i]] to make sure if tehre is an object existed.