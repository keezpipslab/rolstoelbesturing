radio.onReceivedString(function (receivedString) {
    if (receivedString == 0) {
    	
    }
})
let speedL = 90
maqueen.servoRun(maqueen.Servos.S1, speedL)
maqueen.servoRun(maqueen.Servos.S2, speedL)
radio.setGroup(1)
basic.forever(function () {
	
})
