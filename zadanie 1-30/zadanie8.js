function duplicateEncode(word) {
  var ciag = [];
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    var czyDuplikat = false;
    for (let j = 0; j < word.length; j++) {
      if (i !== j && word[i] === word[j]) {
        czyDuplikat = false;
        break;
      } else czyDuplikat = true;
    }
    if (czyDuplikat) {
      ciag.push("(");
    } else {
      ciag.push(")");
    }
  }
  return ciag.join("");
}
