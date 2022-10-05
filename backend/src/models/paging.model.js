const ValueUtils = require('../common/util/value.utils')
const AppConstants = require('../common/app.constants')

const Paging = {}

Paging.request = (query) => {
  const page = (ValueUtils.empty(query.page) || query.page <= 0) ? AppConstants.DEFAULT_PAGE_NUM : query.page
  const size = ValueUtils.nvl(query.size, AppConstants.DEFAULT_PAGE_SIZE)
  return {
    page: page,
    size: size,
    begin: (page - 1) * size,
  }
}

module.exports = Paging