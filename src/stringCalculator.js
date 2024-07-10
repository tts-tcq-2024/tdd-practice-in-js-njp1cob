

function add(number) {
  if (number == "" || number == "0") {
    return 0;
    } else {
    let finalCount = validateSum(number);
    return finalCount;
   }     
}

  function validateSum(number) {
     let sum = 0;
    let count = number.split(","); 
    for (let i = 0; i < count.length; i++) {
    parseInt(count[i]) > 1000 ? sum: sum = sum + parseInt(count[i]);
    }
    return sum;
  }

module.exports = {
    add
};
