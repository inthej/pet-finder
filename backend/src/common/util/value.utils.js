class ValueUtils {
  constructor() {
    throw new Error()
  }

  static empty = (str, includeBlank = true) => {
    const empty = str === null || str === undefined || (includeBlank && str === '')
    return empty
  }

  static nonEmpty = (str, includeBlank = true) => {
    return !ValueUtils.empty(str, includeBlank)
  }

  static nvl = (str, defaultValue = '') => {
    if (ValueUtils.empty(str)) { return defaultValue }
    return str
  }

  static nvl2 = (str, str1, str2) => {
    if (ValueUtils.empty(str)) { return str2 }
    return str1
  }
}

module.exports = ValueUtils