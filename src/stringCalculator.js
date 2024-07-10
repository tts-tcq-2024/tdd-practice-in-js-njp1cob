
let sum = 0;
function add(value) {
 let count = value.split(",");
 for (let i = 0; i < count.length; i++) {
   sum = sum + parseInt(count[i]);

  console.log(parseInt(count[i]))
 }
 return sum;
}

function checkValue(number) {
   if (number == "" || number == "0") {
    return 0;
    } else {
      add(number); 
    }  
}


module.exports = {
    add,
    checkValue
};
