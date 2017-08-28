$(document).ready(function() {
  var memGame = {
    cards: [1,1,2,2,3,3,4,4,5,5,6,6],
    init: function() {
      memGame.shuffle();
    },
    shuffle: function() {
      var random = 0;
      var temp = 0
      for(i = 1; i < memGame.cards.length; i++) {
        random = Math.round(Math.random() * i);
        temp = memGame.cards[i];
        memGame.cards[i] = memGame.cards[random];
        memGame.cards[random] = temp;
      }
    },
    clickHandlers: function() {

    }
  };
  memGame.init();
});

/*
for(var i= 0; i = arr.length; i++) {
var card = $('#flip' + i);
console.log(card.text(arr[i]));
}

$()
