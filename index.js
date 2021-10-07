// Reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrasse object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return  this.string.toLowerCase();
  }

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  //Returns true for a palindrome. False otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }

  // Makes the Phrase Louder!!
  this.louder = function louder() {
    let loud = this.content.toUpperCase();
    return loud
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  //Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation) ;
  }
}
TranslatedPhrase.prototype = new Phrase();
