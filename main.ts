let stred = [2, 2]
let x = [0, 0]
let y = [1, 1]
function otaceni1() {
    
    let pozice = 1
    led.plot(y[0], y[1])
    while (y[pozice] != 3) {
        basic.pause(1000)
        led.unplot(y[0], y[1])
        if (y[pozice] < 3) {
            y[pozice] += 1
        } else if (y[pozice] == 3) {
            y[pozice] += 1
        }
        
        led.plot(y[0], y[1])
        console.logValue("y", y)
        if (y[1] == 3) {
            pozice = 0
            console.logValue("pozice", pozice)
        } else if (y[0] == 3) {
            pozice = 1
            console.logValue("pozice", pozice)
        }
        
    }
}

basic.forever(function on_forever() {
    led.plotBrightness(stred[0], stred[1], 100)
    led.plot(x[0], x[1])
    otaceni1()
})
