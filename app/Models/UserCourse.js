'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserCourse extends Model {
  static get table(){
    return 'users_courses'
  }
}

module.exports = UserCourse
