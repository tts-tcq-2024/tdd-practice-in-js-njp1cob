

function add(value) {
  if (number == "" || number == "0") {
    return 0;
    } else {
     let sum = 0;
    let count = value.split(",");
    for (let i = 0; i < count.length; i++) {
      sum = sum + parseInt(count[i]);
   }
 return sum;
    }  
}

module.exports = {
    add
};
