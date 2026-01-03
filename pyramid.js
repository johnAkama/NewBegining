function pyramid(char, rows, inverted) {
  let result = "\n";

  if (!inverted) {
    // Vertex facing UP
    for (let i = 0; i < rows; i++) {
      const spaces = " ".repeat(rows - i - 1);
      const pattern = char.repeat(2 * i + 1);
      result += spaces + pattern + "\n";
    }
  } else {
    // Vertex facing DOWN
    for (let i = rows - 1; i >= 0; i--) {
      const spaces = " ".repeat(rows - i - 1);
      const pattern = char.repeat(2 * i + 1);
      result += spaces + pattern + "\n";
    }
  }

  return result;
}
