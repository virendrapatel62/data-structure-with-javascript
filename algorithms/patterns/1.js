function draw(row) {
  let string = [];
  let numberOfSpace = 1;
  for (let i = 0; i < row; i++) {
    let line = "";
    for (let j = 0; j < row - i - 1; j++) {
      line += " ";
    }

    line += "*";
    if (i > 0) {
      for (let space = 0; space < numberOfSpace; space++) {
        line += " ";
      }
      numberOfSpace += 2;
      line += "*";
    }
    line += "\n";
    string.push(line);
  }

  string = [...string, ...string.reverse().slice(1, string.length)];

  string.forEach((i) => console.log(i));
}

draw(5);
