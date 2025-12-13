/* function isValidWWalk(walk) {
    //let timing be defined here

    switch (true) {
        case walk.length < 10:
            return false;
            break;
        case walk.length > 10:
            return false;
            break;
        case walk.length === 10:
            let result = true;
            for (let i = 0; i < walk.length; i++) {
                if (walk[i] === walk[i + 1]) {
                    result = false;
                } else {
                    if (walk[0] === walk[walk.length - 1]) {
                        result = true;
                    } else {
                        result = false;
                    }
                }
            }
            return result;
            break;
    }
}
 */
//console.log(isValidWWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
/* 
let sentence = "Learning JavaScript is fun!";
let extracted = sentence.slice(9, -5);

console.log(extracted); */
message = 'Welcome to freeCodeCamp!';
let greetingWord = message.slice(0, 7);

console.log(greetingWord)
