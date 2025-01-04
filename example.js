const contributions = require('./')
const user = 'elsbury13'

let commits

contributions(user)
  .then(data => {
    commits = data
    console.log(commits.month)
    console.log(commits.year)
})
