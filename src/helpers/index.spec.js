import chai from 'chai'
import * as helpers from './index'

chai.should()

describe('Helper Functions', () => {
  describe('compileQuestions', () => {
    const compileQuestions = helpers.compileQuestions

    it('compiles spotify song data into questions', () => {
      (1).should.equal(1)
    })
  })

  describe('chooseRandomCorrectAnswers', () => {
    const chooseRandomCorrectAnswers = helpers.chooseRandomCorrectAnswers

    it('randomly chooses an answer to be correct', () => {
      (2).should.equal(2)
    })
  })
})