radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        current_state = 1
    } else if (receivedNumber == 2) {
        current_state = 2
    } else {
        current_state = 3
    }
})
let current_state = 0
radio.setGroup(98725)
let time_count = 0
datalogger.deleteLog()
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
basic.forever(function () {
    while (current_state == 1) {
        datalogger.log(
        datalogger.createCV("aks_styrke", input.acceleration(Dimension.Strength)),
        datalogger.createCV("aks_y", input.acceleration(Dimension.Y)),
        datalogger.createCV("aks_x", input.acceleration(Dimension.X)),
        datalogger.createCV("aks_z", input.acceleration(Dimension.Z))
        )
    }
    while (current_state == 2) {
    	
    }
    if (current_state == 3) {
        datalogger.deleteLog()
    }
})
