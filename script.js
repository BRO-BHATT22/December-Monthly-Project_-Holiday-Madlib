let adjective = prompt('Gimme an adjective pretty please:')
let noun = prompt('Gimme an noun pretty please:')
let verb = prompt('Gimme an verb pretty please:')
let adverb = prompt('Gimme an adverb pretty please:')

let story = `Once upon a time, in a ${adjective} ${noun}, a ${verb} ${noun} ${adverb} ${verb}.`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`