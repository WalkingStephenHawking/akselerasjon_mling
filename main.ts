radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        current_state = 0
    } else if (receivedNumber == 1) {
        current_state = 1
    } else {
        current_state = 2
    }
})
let current_state = 0
radio.setGroup(98725)
let time_count = 0
datalogger.deleteLog()
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
loops.everyInterval(1, function () {
	
})
basic.forever(function () {
    while (current_state == 0) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(datalogger.createCV("aks_styrke", input.acceleration(Dimension.Strength)))
        datalogger.log(datalogger.createCV("aks_y", input.acceleration(Dimension.Y)))
        datalogger.log(datalogger.createCV("aks_z", input.acceleration(Dimension.Z)))
        datalogger.log(datalogger.createCV("aks_x", input.acceleration(Dimension.X)))
    }
    while (current_state == 1) {
        basic.showIcon(IconNames.Square)
    }
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.No)
        datalogger.deleteLog()
    }
})
