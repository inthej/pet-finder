exports.sidoList = async (req, res) => {
  try {
    res.status(200).json({ code: 200, success: true, obj: {} })
  } catch (err) {
    res.status(500).json({ code: 500, success: false, message: '서버 에러', error: err })
  }
}

exports.sigunguList = async (req, res) => {
  try {
    res.status(200).json({ code: 200, success: true, obj: {} })
  } catch (err) {
    res.status(500).json({ code: 500, success: false, message: 'Interval Server Error', error: err })
  }
}

exports.shelterList = async (req, res) => {
  try {
    res.status(200).json({ code: 200, success: true, obj: {} })
  } catch (err) {
    res.status(500).json({ code: 500, success: false, message: 'Interval Server Error', error: err })
  }
}

exports.kindList = async (req, res) => {
  try {
    res.status(200).json({ code: 200, success: true, obj: {} })
  } catch (err) {
    res.status(500).json({ code: 500, success: false, message: 'Interval Server Error', error: err })
  }
}

exports.animalList = async (req, res) => {
  try {
    res.status(200).json({ code: 200, success: true, obj: {} })
  } catch (err) {
    res.status(500).json({ code: 500, success: false, message: 'Interval Server Error', error: err })
  }
}