stred=[2,2]
x=[0,0]
y=[1,1]

def otaceni1():
    global y
    pozice=1
    led.plot(y[0],y[1])
    while y[pozice]!=3:
        basic.pause(1000)
        led.unplot(y[0],y[1])
        if y[pozice]<3:
            y[pozice]+=1
        elif y[pozice]==3:
            y[pozice]+=1
        led.plot(y[0],y[1])
        console.log_value("y", y)
        if y[1]==3:
            pozice=0
            console.log_value("pozice", pozice)
        elif y[0]==3:
            pozice=1
            console.log_value("pozice", pozice)
        
def on_forever():
    led.plot_brightness(stred[0],stred[1], 100)
    led.plot(x[0],x[1])
    
    otaceni1()
basic.forever(on_forever)

