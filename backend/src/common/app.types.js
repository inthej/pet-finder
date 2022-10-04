const AppTypes = {}

AppTypes.AnimalKindType = Object.freeze({
  dog: '417000',
  cat: '422400',
  etc: '429900'
})

AppTypes.AnimalState = Object.freeze({
  all: '',  // 전체
  notice: 'notice', // 공고중
  protect: 'protect', // 보호중
})

module.exports = AppTypes