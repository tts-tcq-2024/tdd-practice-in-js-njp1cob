

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
    let value = (number.replace(/[^0-9]+/g, '')).split("");
    for (let i = 0; i < value.length; i++) {
    parseInt(value[i]) > 1000 ? sum: sum = sum + parseInt(value[i]);
    }
    return sum;
  }

module.exports = {
    add
};
