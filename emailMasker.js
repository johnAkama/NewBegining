let email = 'apple@example.com';
function maskEmail(email) {
    let getIndex = email.indexOf('@', 1);

    let getPart = email.slice(1, getIndex - 1);

    let asterix = '*'.repeat(getPart.length);

    return email.replace(getPart, asterix);
}

console.log(maskEmail(email));
