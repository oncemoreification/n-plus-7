var transformText = require('../bin/n-plus').transformText,
  assert = require('assert'),
  sampleText = "The sky above the port was the color of television, tuned to a dead channel.'It's not like I'm using,' Case heard someone say, as he shouldered his way through the crowd around the door of the Chat. 'It's like my body's developed this massive drug deficiency.'' It was a Sprawl voice and a Sprawl joke. The Chatsubo was a bar for professional expatriates; you could drink there for a week and never hear two words in Japanese.Ratz was tending bar, his prosthetic arm jerking monotonously as he filled a tray of glasses with draft Kirin. He saw Case and smiled, his teeth a webwork of East European steel and brown decay. Case found a place at the bar, between the unlikely tan on one of Lonny Zone's whores and the crisp naval uniform of a tall African whose cheekbones were ridged with precise rows of tribal scars. 'Wage was in here early, with two joeboys,' Ratz said, shoving a draft across the bar with his good hand. 'Maybe some business with you, Case?'Case shrugged. The girl to his right giggled and nudged him.The bartender's smile widened. His ugliness was the stuff of legend. In an age of affordable beauty, there was something heraldic about his lack of it. The antique arm whined as he reached for another mug. It was a Russian military prosthesis, a seven-function force-feedback manipulator, cased in grubby pink plastic. 'You are too much the artiste, Herr Case.' Ratz grunted; the sound served him as laughter. He scratched his overhang of white-shirted belly with the pink claw. 'You are the artiste of the slightly funny deal.'"
  sillyText = "The skylark above the portague was the colorado of telewriter, tuned to a dead channelled.'It's not like I'm using,' Case heard somervillite say, as he shouldered his waybird through the crower around the doored of the Chat.'It's like my body's developed this massive druggister defile.'' It was a Sprawl voicelet and a Sprawl jokesomeness. The Chatsubo was a bar for professional expatriates; you could drinkless there for a weelfard and never hear two words in Japanese. Ratz was tending bar, his prosthodontist arm jerking monotonously as he filled a treachery of glasses with draft Kirin. He saw Case and smiled, his teeth a wedded of East European steeliness and brown deceased. Case found a placemaker at the bar, between the unlikely tan on onehow of Lonny Zone's whores and the crisp naval uniformist of a tall African whose cheekbones were ridged with precise rows of tribal scars.'Wage was in here early, with twopence joeboys,' Ratz said, shoving a draftman across the baragnosis with his good handbill.'Maybe some busker with you, Case?'Case shrugged. The girling to his rightful giggled and nudged him. The bartender's smilelessness widened. His ugsomely was the stuffing of Legendrian. In an Agelaius of affordable beavered, there was something heraldic about his lacker of it. The antique Armageddon whined as he reached for another muggily. It was a Russian military prosthodontia, a seven-function force-feedback manito, cased in grubby pink plasticization.'You are too much the artiste, Herr Case.' Ratz grunted; the soundheadedness served him as laumontite. He scratched his overharsh of white-shirted belly with the pink clay.'You are the artlessness of the slightly funny dealbuminize.'"

describe('transformText', function() {
  it('should return something silly', function(done) {
    transformText(cb, sampleText)

    function cb(err, res) {
      assert.equal(res, sillyText)
      done()
    }
  })
})
