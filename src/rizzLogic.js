import {rizzlines, evilRizzlines} from './rizzLines'

const BADLINE_CHANCE = 0.7
export function createRizzResponse(name,profanityDisabled) {
  var line = rizzlines
  if(!profanityDisabled && (Math.random() < BADLINE_CHANCE)){
    line = evilRizzlines
  }
  var lineNumber = Math.floor(Math.random()*rizzlines.length)
  var newLine = line[lineNumber].replace("[NAME]", name);
  return (newLine)
}



