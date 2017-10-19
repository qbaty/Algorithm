var changes = {
    "ONE HUNDRED": 100.00,
    TWENTY:20.00,
    TEN:10.00,
    FIVE:5.00,
    ONE:1.00,
    QUARTER:0.25,
    DIME:0.10,
    NICKEL:0.05,
    PENNY:0.01
  };

function checkCashRegister(price, cash, cid) {
  var change = fpFix(cash - price);
  var totalChange = readTotal(cid);
  if(change == totalChange){
    return "Closed";
  } else if(change > totalChange){
    return "Insufficient Funds";
  } else{
    return changeCash(change,cid);
  } 
}

function readTotal(arr){
  var total = 0; 
  for(var j = 0; j < arr.length; j++ ){
     total = fpFix(total + arr[j][1]); 
  }
  return total;
}

function changeCash(total,arr){
   var change = ["ONE HUNDRED","TWENTY","TEN","FIVE","ONE","QUARTER","DIME","NICKEL","PENNY"];
   var result = [];
   var num =0;
   var cashNum = 0;
   var c;
   var output;   
   for(var i=0; i < arr.length; i++){
     c = changes[change[i]];
     if( c <= total){
         num = Math.floor(total/c);  //2
         cashNum = arr[arr.length -1 - i][1]; //60 
       if( fpFix(num*c) > cashNum  ){
           total = fpFix(total - cashNum);
           output = parseFloat(Math.round(cashNum * 100) / 100).toFixed(2);
           result.push([change[i],Number(output)]);      
       } else{
         total = fpFix(total - num*c);
         output = parseFloat(Math.round(num*c * 100) / 100).toFixed(2);
         result.push([change[i],Number(output)]); 
       }     
      }//if 
     } //for
  
  if(total == 0){
      return result;
  } else{
    return "Insufficient Funds";
  }  
} // function

var fpFix = function (n) {
    return Math.round(n * 100)/100;
};


changeCash(42.10, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);