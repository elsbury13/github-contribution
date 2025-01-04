function contributions(user) {
  return fetch('https://github.com/users/{user}/contributions'.replace('{user}', user))
    .then((res) => res.text())
    .then(processData)
}

function processData (text) {
  const todaysDate = new Date()
  const lastMonth = todaysDate.toLocaleString('default', { month: 'long' })

  matches = text.match(
    /\d{1,2} contributions on \w{3,9} \d{1,2}/gm
  )

  let yearTotal = 0
  let monthTotal = 0

  data = matches.map(function (match) {
    monthTotal = +monthTotal + +match.includes(lastMonth)
    yearTotal = +yearTotal + +match.split(' ')[0]
  })

  return { month: monthTotal, year: yearTotal }
}

module.exports = contributions
