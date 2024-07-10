
let sum = 0;
function add(value) {
 let count = value.split(",");
 for (let i = 0; i < count.length; i++) {
   sum = sum + parseInt(count[i]);
 }
 return sum;
}

function checkValue(number) {
   if (value == "" || value == "0") {
    return 0;
    } else {
      add(); 
    }  
}


module.exports = {
    add,
    checkValue
};
