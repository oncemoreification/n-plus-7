var findPOS = require('../lib/pos').findPOS;
var assert = require('assert');

var sampleText = "The sky above the port was the color of television, tuned to a dead channel.'It's not like I'm using,' Case heard someone say, as he shouldered his way through the crowd around the door of the Chat. 'It's like my body's developed this massive drug deficiency.'' It was a Sprawl voice and a Sprawl joke. The Chatsubo was a bar for professional expatriates; you could drink there for a week and never hear two words in Japanese.Ratz was tending bar, his prosthetic arm jerking monotonously as he filled a tray of glasses with draft Kirin. He saw Case and smiled, his teeth a webwork of East European steel and brown decay. Case found a place at the bar, between the unlikely tan on one of Lonny Zone's whores and the crisp naval uniform of a tall African whose cheekbones were ridged with precise rows of tribal scars. 'Wage was in here early, with two joeboys,' Ratz said, shoving a draft across the bar with his good hand. 'Maybe some business with you, Case?'Case shrugged. The girl to his right giggled and nudged him.The bartender's smile widened. His ugliness was the stuff of legend. In an age of affordable beauty, there was something heraldic about his lack of it. The antique arm whined as he reached for another mug. It was a Russian military prosthesis, a seven-function force-feedback manipulator, cased in grubby pink plastic. 'You are too much the artiste, Herr Case.' Ratz grunted; the sound served him as laughter. He scratched his overhang of white-shirted belly with the pink claw. 'You are the artiste of the slightly funny deal.'"

describe('findPOS', function() {
  it('should tokenize the text and find nouns', function() {
    var opts = {
      "NN": true
    }

    var res = findPOS(sampleText, opts);

    assert.equal(res.words[0], 'The')
    assert.equal(res.targets['sky'], 1)
  })
})
