def completed():
    while True:
            basic.show_icon(IconNames.SAD)
            music.play_sound_effect(music.builtin_sound_effect(soundExpression.sad),
                SoundExpressionPlayMode.UNTIL_DONE)

def on_log_full():
    music.set_volume(255)
    while True:
        basic.show_icon(IconNames.SAD)
        music.play_sound_effect(music.builtin_sound_effect(soundExpression.sad),
            SoundExpressionPlayMode.UNTIL_DONE)
datalogger.on_log_full(on_log_full)

datalogger.delete_log()
datalogger.include_timestamp(FlashLogTimeStampFormat.MILLISECONDS)
time_count = 0
basic.show_icon(IconNames.HAPPY)

def on_every_interval():
    datalogger.log(datalogger.create_cv("", input.acceleration(Dimension.STRENGTH)))
    time_count =+ 1

    if time_count == 100:
        completed()

loops.every_interval(1, on_every_interval)
