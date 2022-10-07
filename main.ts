input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 6))
})
let joe = 9
for (let index = 0; index < 9; index++) {
    basic.pause(1000)
    joe += -1
    basic.showNumber(joe)
}
