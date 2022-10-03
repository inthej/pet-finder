const axios = require('axios')
const LogUtils = require('../common/util/log.utils')

class SearchService {
  static #instance
  #url = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc'
  #serviceKey = process.env.DATA_SERVICE_KEY

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new SearchService()
    }
    return this.#instance
  }

  async sidoList(page) {
    try {
      const path = this.#url + `/sido?serviceKey=${this.#serviceKey}&numOfRows=1000&pageNo=1&_type=json`
      const response = await axios.get(path)
      return response.data.response.body
    } catch (err) {
      throw err
    }
  }

  async sigunguList(sido, page) {
    try {
      const path = this.#url + `/sigungu`
      const response = await axios.get(path)
      return response.data.response.body
    } catch (err) {
      LogUtils.debug('SearchService.sigunguList', err)
      throw err
    }
  }

  async shelterList(sido, gun, page) {
    try {
      const path = this.#url + `/shelter`
      const response = await axios.get(path)
      return response.data.response.body
    } catch (err) {
      LogUtils.debug('SearchService.shelterList', err)
      throw err
    }
  }

  async kindList(kindType, page) {
    try {
      const path = this.#url + `/kind?serviceKey=${this.#serviceKey}`
      const response = await axios.get(path)
      return response.data.response.body
    } catch (err) {
      LogUtils.debug('SearchService.kindList', err)
      throw err
    }
  }

  async animalList(sido, gun, kindType, shelter, page) {
    try {
      const path = this.#url + `/abandonmentPublic?serviceKey=${this.#serviceKey}`
      const responseModel = await axios.get(path)
      return responseModel
    } catch (err) {
      LogUtils.debug('SearchService.animalList', err)
      throw err
    }
  }
}


module.exports = SearchService