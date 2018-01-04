var Distance = function(){

  this.savedActions == [];
};

Distance.prototype.calculate = function(firstWord, secondWord, indexOne, indexTwo){
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
    return this.calculate(firstWord, secondWord, updatedIndexOne, updatedIndexTwo );
  }   

  else{
    // represents substituting a character
    var substituteCharacter= this.calculate(firstWord, secondWord, updatedIndexOne, updatedIndexTwo)

    // represents inserting a character
    var deleteCharacter = this.calculate(firstWord, secondWord, indexOne, updatedIndexTwo)

    // represents deleting a character
    var insertCharacter = this.calculate(firstWord, secondWord, updatedIndexOne, indexTwo)

    // characters dont match - so return 1 then calculate min number of moves required by doing the 3 available options - substitute, delete or insert a character.
    var distanceCalculated = 1 + Math.min( substituteCharacter, deleteCharacter, insertCharacter)
    return distanceCalculated;
  }
};




module.exports = Distance;