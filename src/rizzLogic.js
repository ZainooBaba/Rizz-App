import {rizzlines} from './rizzLines'
export function createRizzResponse(name) {
  var line = rizzlines
  var lineNumber = Math.floor(Math.random()*rizzlines.length)
  var newLine = line[lineNumber].replace("[NAME]", name);
  return (newLine)
}



