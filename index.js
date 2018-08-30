//1
function theBeatlesPlay(musicians, instruments) {
  var allBeatles = [];
  for (var i = 0; i < musicians.length; i++) {
    allBeatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return allBeatles;
}

//2
function johnLennonFacts(facts) {
  var allFacts = [];
  for (let i = 0; i < facts.length; i++) {
    allFacts.push(facts[i] + "!!!");
  }
  return allFacts;
}

//3
function iLoveTheBeatles(num) {
  var love = [];
  do {
    love.push("I love the Beatles!" + num);
  }
  while (num < 15);
  num++;
  return love;
}
