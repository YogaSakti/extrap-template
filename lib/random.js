module.exports = {
    /**
     *
     *@param {String} lenght
     *@param {Object} types number, capital, alphabet, alphanumeric, alphanumeric, alphanumeric_capital, all
     */
    random: (len, tipe) => {
        const types = {
            number: '0123456789',
            capital: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            alphabet: 'abcdefghijklmnopqrstuvwxyz',
            alphanumeric: '0123456789abcdefghijklmnopqrstuvwxyz',
            alphanumeric_capital: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            all: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
        charSet = types[tipe];
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    }
}