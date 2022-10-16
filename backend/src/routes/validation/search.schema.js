const AppType = require('../../common/app.types')

exports.Animals = {
  page: {
    optional: { options: { nullable: true, checkFalsy: true }},
    in: ['query'],
    errorMessage: 'page is wrong',
    isInt: {
      errorMessage: '페이지번호는 1이상이여야 함',
      options: {
        min: 1,
      },
    },
    toInt: true
  },
  size: {
    optional: { options: { nullable: true, checkFalsy: true } },
    in: ['query'],
    errorMessage: 'size is wrong',
    isInt: {
      errorMessage: '글 갯수는 1이상이어야 함',
      options: {
        min: 1,
      },
    },
    toInt: true,
  },
  start: {
    optional: { options: { nullable: true, checkFalsy: true } },
    in: ['query'],
    isString: true,
  },
  end: {
    optional: { options: { nullable: true, checkFalsy: true } },
    in: ['query'],
    isString: true,
  },
  kindType: {
    default: { options: AppType.AnimalKindType.dog },
    in: ['query'],
    isString: true,
    toLowerCase: true,
  },
  sido: {
    optional: { options: { nullable: true, checkFalsy: true } },
    in: ['query'],
    isString: true,
  },
  sigungu: {
    optional: { options: { nullable: true, checkFalsy: true } },
    in: ['query'],
    isString: true,
  },
  shelter: {
    optional: { options: { nullable: true, checkFalsy: true } },
    in: ['query'],
    isString: true,
  },
  state: {
    default: { options: AppType.AnimalState.all },
    in: ['query'],
    isString: true,
    toLowerCase: true,
  }
}