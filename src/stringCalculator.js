
function add(number) {
  if (number == "" || number == "0") {
    return 0;
    } else {
    let finalCount = validateSum(number);
    return finalCount;
   }     
}

  function validateSum(number) {
    let value = (number.replace(/^[^0-9]+/, '')).split(/,|;|\n/);

    let negatives = value.filter(num => num < 0);
    if (negatives.length == 0) {
      throw new Error(negatives.map(item => "negatives not allowed" + item));
    } else {
     calculateSum(value);
    }
  
  }

function calculateSum(value) {
  let sum = 0;
 for (let i = 0; i < value.length; i++) {
    parseInt(value[i]) > 1000 ? sum: sum = sum + parseInt(value[i]);
    }
    return sum;
}
module.exports = {
    add
};
