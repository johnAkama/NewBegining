function convertHTML(sentence) {
    const entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;',
    };

    let result = '';
    for (let i = 0; i < sentence.length; i++) {
        if (entities[sentence[i]]) {
            result += entities[sentence[i]];
        } else {
            result += sentence[i];
        }
    }
    return result;
}

console.log(convertHTML('sentence >'));

/* function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str.replace(/[&<>"']/g, match => entities[match]);
} */
