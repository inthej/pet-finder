const { dataService } = require("./api/data.service");
const Paging = require("../models/paging.model");

exports.sido = async () => {
  try {
    const response = await dataService.sido()
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.sigungu = async (query) => {
  const { sido } = query
  try {
    const response = await dataService.sigungu(sido)
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.shelter = async (query) => {
  const { sido, sigungu } = query
  try {
    const response = await dataService.shelter(sido, sigungu)
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.kind = async (query) => {
  const { type } = query
  try {
    const response = await dataService.kind(type)
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.animals = async (query) => {
  const { start, end, kindType, sido, sigungu, shelter, state } = query
  try {
    const paging = Paging.request(query)
    const { items, pageNo, totalCount } = await dataService.animals(start, end, kindType, sido, sigungu, shelter, state, paging)
    const list = items.item
    const responseModel = {
      total: totalCount,
      page: {
        now: pageNo,
        total: list?.length,
      },
      list: list
    }
    return responseModel
  } catch (err) {
    console.log(err)
    throw err
  }
}