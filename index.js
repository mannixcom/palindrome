 module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing, by setting everything all letters to lower case.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  // For example:
  //  new Phrase("hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
   let theLetters = [];
   return (this.content.match(/[a-z]/gi) || []).join("");
 }


  // Returns the letters in the content.
  //this.letters = function letters() {
    //return this.content;    // stub return value
//  }


  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
