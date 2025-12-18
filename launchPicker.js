let lunches = [];
function addLunchToEnd(lunches, item1) {
    lunches.push(item1);
    return item1 + ' added to the end of the lunch menu.';
}

function addLunchToStart(lunches, item2) {
    lunches.unshift(item2);
    return item2 + 'added to the start of the lunch menu.';
}

function removeLastLunch(lunches) {
    if (lunches.length == 0) {
        return 'No lunches to remove';
    } else {
        let removedItem = lunches.pop();
        return removedItem + ' added from the end of lunch menu.';
    }
}

function removeFistLunch(lunches) {
    if (lunches.length == 0) {
        return 'No lunches to remove';
    } else {
        let removedItem = lunches.shift();
        return removedItem + 'removed from the start of lunch menu.';
    }
}

function etRandomLunch(lunches) {
    if (lunches.length == 0) {
        return 'No lunches available';
    } else {
        let getRandomLanuch = Math.floor(Math.random() * lunches.length);

        return lunches[getRandomLanuch];
    }
}

function showLunchMenu(lunches) {
    if (lunches.length == 0) {
        return 'The menu is empty';
    } else {
    }
}

console.log(addLunchToEnd(lunches, 'Tacos'));
console.log(addLunchToStart(lunches, 'Pizza'));
