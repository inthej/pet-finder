const SearchService = require('../service/search.service')

exports.sidoList = async (req, res) => {
  /*
    #swagger.tags = ['Search']
    #swagger.summary = '시도 조회'
    #swagger.description = '시도 조회'
  */
  try {
    const response = await SearchService.sidoList(req.query)
    res.status(200).json({ code: 200, success: true, obj: response })
  } catch (err) {
    res.status(500).json({ code: 500, success: false, message: '서버 에러', error: err })
  }
}

exports.sigunguList = async (req, res) => {
  /*
    #swagger.tags = ['Search']
    #swagger.summary = '시군구 조회'
    #swagger.description = '시군구 조회'
  */
  try {
    res.status(200).json({ code: 200, success: true, obj: {} })
  } catch (err) {
    res.status(500).json({ code: 500, success: false, message: 'Interval Server Error', error: err })
  }
}

exports.shelterList = async (req, res) => {
  /*
    #swagger.tags = ['Search']
    #swagger.summary = '보호소 조회'
    #swagger.description = '보호소 조회'
  */
  try {
    res.status(200).json({ code: 200, success: true, obj: {} })
  } catch (err) {
    res.status(500).json({ code: 500, success: false, message: 'Interval Server Error', error: err })
  }
}

exports.kindList = async (req, res) => {
  /*
    #swagger.tags = ['Search']
    #swagger.summary = '품종 조회'
    #swagger.description = '품종 조회'
  */
  try {
    res.status(200).json({ code: 200, success: true, obj: {} })
  } catch (err) {
    res.status(500).json({ code: 500, success: false, message: 'Interval Server Error', error: err })
  }
}

exports.animalList = async (req, res) => {
  /*
    #swagger.tags = ['Search']
    #swagger.summary = '유기동물 조회'
    #swagger.description = '유기동물 조회'
  */
  try {
    const response = await SearchService.animalList(req.query)
    res.status(200).json({ code: 200, success: true, obj: response })
  } catch (err) {
    res.status(500).json({ code: 500, success: false, message: 'Interval Server Error', error: err })
  }
}