process.stdout.write('Instantiate class "User"')

const assert = require('assert')
const User = require('../index.js')
const testFiles = [
  'bitbucket.json',
  'github.json',
  'gitlab.json',
]
const targetSchema = {
  id: 583231,
  username: 'octocat',
  email: 'octocat@github.com',
  name: 'The Octocat',
  accountUrl: 'https://api.github.com/users/octocat',
  apiUrl: 'https://api.github.com/users/octocat',
  type: 'bot',
  role: 'user',
  state: 'active',
  createdAt: '2011-01-25T18:44:36Z',
  updatedAt: '2016-07-22T20:23:23Z',
}

assert(targetSchema)

testFiles.forEach(fileName => {
  const fileData = require(`./fixtures/${fileName}`)
  const user = new User(fileData)

  assert(user.id)
  assert(user.name)
  assert(user.username)
  assert(user.accountUrl)
})

console.info(' ✔') // eslint-disable-line no-console
