let playStartSound;
if (typeof window == 'undefined') {
  playStartSound  = function() {};
}else{

  const context = new AudioContext()
  const osc1 = context.createOscillator(),
    osc2 = context.createOscillator()

  osc1.type = 'triangle'
  osc2.type = 'triangle'
  const volume = context.createGain()

  volume.gain.value = 0.1

  osc1.connect(volume)
  osc2.connect(volume)

  volume.connect(context.destination)

  const duration = 2

  const startTime = context.currentTime

  osc1.start(startTime)
  osc2.start(startTime)

  osc1.stop(startTime + duration)
  osc1.stop(startTime + duration)
  const frequency = 493.883

  osc1.frequency.value = frequency + 1
  osc2.frequency.value = frequency - 2

  volume.gain.setValueAtTime(0.1, startTime + duration - 0.05)
  volume.gain.linearRampToValueAtTime(0, startTime + duration)

  const playNote = function(frequency: number, startTime: number, duration: number) {
    const osc1 = context.createOscillator(),
      osc2 = context.createOscillator(),
      volume = context.createGain()

    osc1.type = 'triangle'
    osc2.type = 'triangle'

    volume.gain.value = 0.1

    osc1.connect(volume)
    osc2.connect(volume)
    volume.connect(context.destination)

    osc1.frequency.value = frequency + 1
    osc2.frequency.value = frequency - 2

    volume.gain.setValueAtTime(0.1, startTime + duration - 0.05)
    volume.gain.linearRampToValueAtTime(0, startTime + duration)

    osc1.start(startTime)
    osc2.start(startTime)

    osc1.stop(startTime + duration)
    osc2.stop(startTime + duration)
  }

  playStartSound = function() {
    playNote(87.6535, 0, 2)

    playNote(1046.50, 2, 0.5)
    playNote(880, 2, 0.5)
    playNote(329.628, 2, 0.5)

    playNote(987.767, 2.5, 0.5)
    playNote(783.991, 2.5, 0.5)
    playNote(293.665, 2.5, 0.5)

    playNote(783.991, 3, 0.5)
    playNote(587.330, 3, 0.5)
    playNote(246.942, 3, 0.5)

    playNote(880, 3.5, 1.2)
    playNote(523.251, 3.5, 1.2)
    playNote(55, 3.5, 1.2)

    playNote(1174.66, 4.7, 0.5)
    playNote(36.7081, 4.7, 0.5)
    playNote(523.251, 4.7, 0.5)

    playNote(1318.51, 5.2, 0.5)
    playNote(55, 5.2, 0.5)
    playNote(523.251, 5.2, 0.5)
  }
}

export default playStartSound;
