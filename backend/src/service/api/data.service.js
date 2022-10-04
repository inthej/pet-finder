const axios = require('axios')
const LogUtils = require('../../common/util/log.utils')

class DataService {
  static #instance
  #url = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc'
  #serviceKey = process.env.DATA_SERVICE_KEY

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new DataService()
    }
    return this.#instance
  }

  async sidoList() {
    try {
      const path = this.#url + `/sido?serviceKey=${this.#serviceKey}&_type=json`
      const response = await axios.get(path)
      return response.data.response.body.items.item
    } catch (err) {
      LogUtils.debug('DataService.sidoList', err)
      throw err
    }
  }

  async sigunguList(sido) {
    try {
      const path = this.#url + `/sigungu?serviceKey=${this.#serviceKey}&upr_cd=${sido}&_type=json`
      const response = await axios.get(path)
      return response.data.response.body.items.item
    } catch (err) {
      LogUtils.debug('DataService.sigunguList', err)
      throw err
    }
  }

  async shelterList(sido, sigungu) {
    try {
      const path = this.#url + `/shelter?serviceKey=${this.#serviceKey}&upr_cd=${sido}&org_cd=${sigungu}&_type=json`
      const response = await axios.get(path)
      return response.data.response.body.items.item
    } catch (err) {
      LogUtils.debug('DataService.shelterList', err)
      throw err
    }
  }

  async kindList(kindType) {
    try {
      const path = this.#url + `/kind?serviceKey=${this.#serviceKey}&up_kind_cd=${kindType}`
      const response = await axios.get(path)
      return response.data.response.body.items.item
    } catch (err) {
      LogUtils.debug('DataService.kindList', err)
      throw err
    }
  }


  async animalList(start, end, kindType, sido, sigungu, shelter, state, paging) {
    try {
      let path = this.#url + `/abandonmentPublic?serviceKey=${this.#serviceKey}`
      if (start) path += `&bgnde=${start}`
      if (end) path += `&endde=${end}`
      if (kindType) path += `&upkind=${kindType}`
      if (sido) path += `&upr_cd=${sido}`
      if (sigungu) path += `&org_cd=${sigungu}`
      if (shelter) path += `&care_reg_no=${shelter}`
      if (sigungu) path += `&org_cd=${sigungu}`
      if (state) path += `&state=${state}`
      path += `&pageNo=${paging.page}&numOfRows=${paging.size}`
      path += `&_type=json`
      const responseModel = await axios.get(path)
      return responseModel.data.response.body
    } catch (err) {
      LogUtils.debug('DataService.animalList', err)
      throw err
    }
  }
}

module.exports = { dataService: DataService.getInstance() }