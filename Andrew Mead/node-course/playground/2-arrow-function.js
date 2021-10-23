const square = function(x) {
    return x * x
}



const squareA = (x) => {
    return x * x
}

// console.log(squareA(3));

// const squareB = (x) => x * x

const event = {
    name: 'birthday party',
    guestList: ['Boris', 'Boka', 'Oto'],
    printGuestList: function () {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach(guest => {
            console.log(`${guest} is attending ${this.name}`)
        })

    }
}

event.printGuestList()