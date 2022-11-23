let playStartSound;
if (typeof window == 'undefined') {
  playStartSound  = function() { console.log('server rendering') };
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
  playNote(550, context.currentTime, 0.1)
}
}

export default playStartSound;
