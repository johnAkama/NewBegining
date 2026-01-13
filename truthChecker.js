function truthCheck(collection, pre) {
    const test = collection.every((obj) => Boolean(obj[pre]));
    //return pre;
    console.log(test);
}

truthCheck(
    [
        { name: 'Quincy', role: 'Founder', isBot: false },
        { name: 'Naomi', role: '', isBot: false },
        { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'isBot'
);
