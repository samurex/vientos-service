const Mongoose = require('mongoose')
const schema = require('./schemas').person

const Person = Mongoose.model('Person', schema, 'people')

Person.prototype.hasCredentialWithId = function hasCredentialWithId (id) {
  return this.credentials.find(credential => credential.id === id)
}
Person.prototype.addCredential = function addCredential (credential) {
  this.credentials.push(credential)
  return this.save()
}

// needed not to leak credentials
Person.prototype.getProfile = function getProfile () {
  return {
    _id: this._id,
    type: this.type,
    name: this.name,
    logo: this.logo,
    followings: this.followings,
    favorings: this.favorings,
    categories: this.categories
  }
}

Person.prototype.getPublicProfile = function getPublicProfile () {
  return {
    _id: this._id,
    type: this.type,
    name: this.name,
    logo: this.logo
  }
}

module.exports = Person
