var cardNumber = ""

function checkCard(cardManager) {
    var nod = cardManager.length
    var sum = 0
    var isSecond = false

    for (var x = nod - 1; x >= 0; x--) { //carissimo moon guarda che js è strano e le dichiarazioni
        var manager = cardManager[x].charCodeAt() - '0'.charCodeAt()//delle variabili sono invariate, quindi non avrei potuto usare sum.
        if (isSecond) manager = manager * 2

        sum += parseInt(manager / 10, 10) //se è un multiplo allora la carta è validata
        sum += manager % 10

        isSecond = !isSecond
    }

    return (sum % 10 == 0)
}

if (!checkCard(cardNumber)) console.log("Invalid card.")

else console.log("Valid card.")
