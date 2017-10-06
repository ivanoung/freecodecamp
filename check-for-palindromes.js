
function palindrome(str) {
  // Good luck!
  
  //remove all special characters
  var newstring = str.replace(/[\W_]/gi,"").toLowerCase();
  
  console.log(newstring);
  
  //Convert string into an Array
  var newarray = newstring.split("");
  console.log(newarray);
  console.log(Math.round(newarray.length/2));
  
  //When array is odd
  if (newarray.length%2!=0){
    for (i= Math.round(newarray.length/2);i>1;--i){
      var c = 1;
      if (newarray[i+c]===newarray[i-c]){
        ++c;
        Console.log(c);
        console.log("Hello World");
      }
      else{
        return false;
      }
    }
  }
  //When array is even
  else{
    for (i=Math.round(newarray.length/2); i>1; --i){
      var x=newarray.length/2;
      var y=(newarray.length/2) - 1;
      if (newarray[x]===newarray[y]){
        ++x;
        --y;
        
      }
      else{
        return false;
        
      }
      
    }
  }
  
  
  return true;
}



palindrome("eye");
