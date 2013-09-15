$(document).ready(function() {
  $('#roller button.add').on('click', addDice);
  $('#roller button.roll').on('click', randomNumber);
  $('.dice').append(dieView.render().$elem);
});

function addDice(e) {
  console.log("WAT")
  $('.dice').append('<div class="die">0</div>');
};


function randomNumber(e) {
  $('.die').each(function(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
  });
};

function Die(data){
  this.value = data.value;
}

Die.prototype.roll = function(){
  this.value = Math.floor((Math.random()*6)+1);
}

function DieView(model){
  this.$elem = $('<div class="die"></div>');
  this.model = model;
  $(this.model).on('update', this.render);
}

DieView.prototype.render = function(){
  this.$elem.html(this.model.value);
  return this;
}

var die = new Die({value: 1});

var dieView = new DieView(die);

console.log(die, dieView);