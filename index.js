function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  //string = "hi"
  // string.toLowerCase() => 'hi'
  // string.toUpperCase() => 'HI' 
  if (string.toLowerCase() === string) {return "I can't hear you!"}
  // if(true) {string.toLowerCase}
  return "I can't hear you!"
}
