const { dataService } = require("./api/data.service");
const Paging = require("../models/paging.model");

exports.sidoList = async () => {
  try {
    const response = await dataService.sidoList()
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.sigunguList = async (query) => {
  const { sido } = query
  try {
    const response = await dataService.sigunguList(sido)
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.shelterList = async (query) => {
  const { sido, sigungu } = query
  try {
    const response = await dataService.shelterList(sido, sigungu)
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.kindList = async (query) => {
  const { type } = query
  try {
    const response = await dataService.kindList(type)
    return response
  } catch (err) {
    console.log(err)
    throw err
  }
}

exports.animalList = async (query) => {
  const { start, end, kindType, sido, sigungu, shelter, state } = query
  try {
    const paging = Paging.request(query)
    const response = await dataService.animalList(start, end, kindType, sido, sigungu, shelter, state, paging)
    const list = response.items.item
    const responseModel = {
      total: response.totalCount,
      page: {
        now: response.pageNo,
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