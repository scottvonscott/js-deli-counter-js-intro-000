function takeANumber (currentLine, newName) {
  let i = 0
  for (i = 0; i <= 0; i+= 1) {
    currentLine.push(newName)
  }
  return `Welcome, ${newName}.` + ` You are number ${currentLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine > 0) {
    katzDeliLine.shift()
    return katzDeliLine
} else if (katzDeliLine.length = []) {
    return "There is nobody waiting to be served!"
}
}
