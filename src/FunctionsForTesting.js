const mostPopularLanguage = tally => {
  let keysArray = Object.keys(tally)
  return keysArray.reduce((highest, language) => {
  if (tally[highest] < tally[language]) { highest = language }
    return highest})
}

export default { mostPopularLanguage }