// var Distance = require('../distance.js');

button.onclick= function(){

  var button = document.getElementById('button');
  var firstWord = document.getElementById('word_1').value;
  var secondWord = document.getElementById('word_2').value;
  var indexOne = document.getElementById('word_1').value.length;
  var indexTwo = document.getElementById('word_2').value.length;
  // var distance;
  // distance = new Distance();

  var tag = document.querySelector('#result p');
  var result = distance( firstWord, secondWord, indexOne, indexTwo);
  tag.innerText = "The distance between " + firstWord + " and " + secondWord + " is " + result;
};




var distance = function(firstWord, secondWord, indexOne, indexTwo){
  var updatedIndexOne = indexOne-1;
  var updatedIndexTwo = indexTwo-1;

  // When indexOne equals 0, it means the secondWord is longer than the firstWord so we must insert the remaining characters from SecondWord
  if (indexOne == 0 ){
    return indexTwo;
  };
  // When indexTwo equals 0, it means the firstWord is longer than the secondWord so we must delete the remaining characters from firstWord
  if (indexTwo == 0 ){
    return indexOne;
  };

  // When the characters match, no action is required so move on to compare the next characters.
  if ( firstWord.charAt(indexOne-1) == secondWord.charAt(indexTwo-1) ){
    return distance(firstWord, secondWord, updatedIndexOne, updatedIndexTwo );
  }   

  else{
    // represents substituting a character
    var substituteCharacter= distance(firstWord, secondWord, updatedIndexOne, updatedIndexTwo)

    // represents inserting a character
    var deleteCharacter = distance(firstWord, secondWord, indexOne, updatedIndexTwo)

    // represents deleting a character
    var insertCharacter = distance(firstWord, secondWord, updatedIndexOne, indexTwo)

    // characters dont match - so return 1 then calculate min number of moves required by doing the 3 available options - substitute, delete or insert a character.
    var distanceCalculated = 1 + Math.min( substituteCharacter, deleteCharacter, insertCharacter)
    return distanceCalculated;
  }
};

