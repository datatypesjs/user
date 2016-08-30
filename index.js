const mapKeys = require('./mapKeys')

module.exports = class User {
  constructor (options = {}) {
    const normalizedOptions = mapKeys({
      in: options,
      mappings: [
        {from: 'uuid', to: 'id'},
        {from: 'login', to: 'username'},
        {from: 'display_name', to: 'name'},
        {from: ['avatar_url', 'links.avatar.href'], to: 'avatarUrl'},
        {from: ['created_on', 'created_at'], to: 'createdAt'},
        {from: ['website', 'url', 'links.self.href'], to: 'apiUrl'},
        {from: ['html_url', 'web_url', 'links.html.href'], to: 'accountUrl'},
      ],
    })

    Object.assign(this, normalizedOptions)
  }

  get fullName () {
    return this.user + '/' + this.name
  }

  get object () {
    const {id, name, username, accountUrl} = this
    return {id, name, username, accountUrl}
  }
  toJson () {
    return this.object
  }

  get string () {
    return this.url
  }
  toString () {
    return this.string
  }
}
