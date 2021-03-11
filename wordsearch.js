// Pair Programming completed by Eric Guthrie, Amanda Tuyen, and Luke Bergmann

const transpose = function (letters) {
  let a = letters.length; // rows
  let b = letters[0].length; // columns
  let newArr = [];
  for (let i = 0; i < b; i++) {
    newArr[i] = [];
    for (let j = 0; j < a; j++) {
      newArr[i][j] = letters[j][i];
    }
  }
  return newArr;
};



const wordSearch = (letters, word) => {
    if(letters.length === 0) {
        return false;
    }

  const horizontalJoin = letters.map(ls => ls.join(''));

  let verticalArr = transpose(letters);

  const verticalJoin = verticalArr.map(ls => ls.join(''));
  
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
