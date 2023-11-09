const bankacc = {
    balance:'345632',
    accountholder:'zoheb',
    deposit: function(a) {
        const numb = Number(bankacc.balance)
console.log(`deposit amount is`, a +++ numb);
    },
    withdraw: function(b) {
        const numb = Number(bankacc.balance)

        console.log(`withdraw amount is `, numb-b)
    }
}
bankacc.deposit('12');
bankacc.withdraw('20')