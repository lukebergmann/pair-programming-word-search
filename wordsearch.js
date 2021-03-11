const transpose = function (matrix) {
  let a = matrix.length; // rows
  let b = matrix[0].length; // columns
  let newArr = [];
  for (let i = 0; i < b; i++) {
    newArr[i] = [];
    for (let j = 0; j < a; j++) {
      newArr[i][j] = matrix[j][i];
    }
  }
  return newArr;
};



const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  let verticalArr = transpose(letters);
  console.log('array', verticalArr);
  const verticalJoin = verticalArr.map(ls => ls.join(''));
  console.log('vertJoin', verticalJoin);
  
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
      
    }
  }
  return false;
}


module.exports = wordSearch

