let name = prompt('Gimme your FIRSTNAME please:')
let surname = prompt('Gimme your SURNAME please:')
let adjective = prompt('Gimme an ADJECTIVE pretty please:')
let noun = prompt('Gimme an NOUN pretty please:')
let verb = prompt('Gimme an VERB pretty please:')
let adverb = prompt('Gimme an ADVERB pretty please:')

let story = `
Basil Falconhurst: Hey ${surname}, it's good to see you awake for a change. It’s a shame however you’ll be spending Christmas in the hospital.

You: Hey it's better than spendin’ it buried 6 feet under the ground.

Basil Falconhurst: Ain’t that the truth. Well anyways, I brought you a couple flowers. I know you’re not the type to like flowers but my wife forced me to buy some and I didn’t have the nerve to argue- not on Christmas. 

I’ll put them in that pot there, although they’ll probably never be watered, and they’d be neglected and left to slowly wither away. It’s funny ${name}. This might sound stupid, but you ever wonder how a house plant would feel, being mistreated. If you don’t water them or put ‘em in sufficient sunlight, they just sort of, wilt and crust up- and god that must be painful. It’s a shame how we measure the importance of things. We would never do this to a dog or cat, yet a plant - still living, mind you - is free to be trampled over and forgotten. The only solace given or justification even is the fact that they are replaceable.

You ever notice how we treat our pets like royalty, right? I mean, dogs and cats get the red-carpet treatment - cozy beds, fancy food, things like that. We practically roll out the red carpet for them. But plants: no. They’re in the corner just soaking up sunlight. We don't give them a second thought until they start looking like they've been through a desert trek without water. 

You ever just stand there, looking at that wilted plant in the corner, and wonder how it must feel? I mean, it's just a plant, right? But lately, every time I glance at those sagging leaves, a pang of guilt hits me square in the chest. It's not asking for much—just a bit of water, a ray of sunlight.


I can't shake off this feeling of remorse, this heavy weight in my chest when I see those drooping leaves. It's like I've let down this tiny, green guy that was just trying to coexist in my space. 

You: Oof, got somethin’ on your mind sir? You look kinda lost.


Basil Falconhurst: It’s Clementine. We just left her back in Borneo. I know that it was probably the right call but it-it’s eating me up. I know she went AWOL but she didn’t deserve that. And to think that she did everything for Merrick in order to make sure he survived through it, for her to be forgotten and left to wither in that godforsaken jungle. I-I don’t know, it's been on my mind.

You: Clementine Romano? What are you talkin’ about?! She died in a shoot-out six months ago in Argentina, ya know, the oil facility. Remember, they thought she was with the PMC’s but she was only the informant on the op. I was the one to help Merrick through Borneo. Clem wasn’t with us. Basil we were the ones that raided that hideout in the Klias Wetlands. We were the ones to deploy the countermeasures to ensure that the airspace would be clear for the insurgents’ landing. And that’s where I got shot in the thigh and ended up here. 

Basil Falconhurst: What?!? Why did I think that– nevermind… Well, then brief me on this mission cause clearly I must have forgotten what happened.


You: Alright, so there we were, me and my buddy Merrick, ready to tackle this ${adjective} ${noun} mission in the Klias Wetlands in Borneo. Our target: a secret ${noun} tucked away in the middle of nowhere. I tell ya, it was like something out of a movie – dense foliage, croaking frogs, and the ever-present hum of insects. Real James Bond stuff.

 We decided to play it smart, you know? No crazy stunts or loud entrances. Merrick, wide-eyed and looking like a deer caught in headlights, mumbles, "${surname} this is intense, man." I can't help but chuckle because this is his first mission, poor guy. "Nah don't worry, Merrick," I say, giving him a reassuring pat on the back. "We got this." We hunker down, waiting outside the ${noun}, trying to be as inconspicuous as possible. 

The night air is thick with mystery, and we're just crouched there, playing the waiting game. Merrick shoots me a nervous look and goes, "I didn't sign up for this kind of thrill, you know?" I couldn't help but laugh at his candidness. "Relax, buddy, it's all part of the game." As we ${verb} ${adverb} closer, I notice a flicker of light from inside the hideout. We exchange a quick nod, our silent communication game on point. Merrick, still a bit jittery, mutters, "I hope they don't have guard dogs or something." I reassure him, "Nah, it's Borneo, not a spy movie. We're good." And so, we continue. Merrick, now a bit more composed, throws in a joke to lighten the mood. "You ever think these frogs are part of the security detail?" We both crack up, our laughter echoing in the darkness. 

Finally, we reach a spot to ${verb} from where we can observe the hideout. Merrick, still catching his breath, says, "I gotta admit, this is kinda exciting." I give him a smirk and reply, "Told you, Merrick. Espionage – it's a rush." I grab a ${noun} and chuck it over the fence and it lands on the ground close to the guards surveying the entrance. Perplexed, they walk towards it, totally distracted. This was our chance, this was the only chance to secure that intel. 

Merrick ${verb} forward and I follow close behind. We are at the area where the intel was located. Merrick quickly spots it and picks it up and gives it to me.


Out of nowhere, a gunshot rings out, and before I know it, pain shoots through my thigh. I hit the ground, cursing under my breath. Merrick, quick on his feet, pulls me behind cover, his eyes wide with concern. "Are you okay?" he asks, panic lacing his words. I muster a weak smile, "Just a scratch, Merrick. Keep your head down." 

Adrenaline pumping, I glance at Merrick, "Guess we stirred up the hornet's nest." After what felt like an eternity, the chaos subsides. Merrick, now wearing a makeshift bandage expertly fashioned from a torn piece of his shirt, helps me up. "We need to get you out of here," he insists, determination in his eyes. The pain in my thigh protests, but I nod. We can't stick around. Merrick guides me through the now subdued hideout. Though still a bit shaken, he keeps his composure. "We'll get you patched up, and then we're outta here," he says, his voice steady.

 As we navigate the paths of the wetlands, Merrick, glancing over his shoulder, adds a touch of humor to lighten the mood. "Quite the introduction." I manage a dry laugh through the pain. We make it out of the hideout, adrenaline slowly giving way to a throbbing ache in my thigh. Merrick, still on high alert, ensures we're clear before allowing himself a sigh of relief. "We made it," he says, a mix of exhaustion and triumph in his voice. So, there we go, Merrick and I, limping our way through the night, the mission still a success. 

Basil Falconhurst: Wow that was something wasn’t it. Well I’m happy you two made it out and thanks for clarifying the story for me. 

You: Yea no problem, and Merry Christmas by the way
.`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`