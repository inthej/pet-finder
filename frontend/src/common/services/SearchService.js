import axios from 'axios'
import LogUtils from '../utils/LogUtils'

class SearchService {
  static #instance
  #url = 'http://localhost:3001/search'

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new SearchService()
    }
    return this.#instance
  }

  async sidoList() {
    try {
      const path = `${this.#url}/sidoList`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.sidoList', err)
      throw err
    }
  }

  async sigunguList(sido) {
    try {
      const path = `${this.#url}/gunList&sido=${sido}`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.gunList', err)
      throw err
    }
  }

  async shelterList(sido, sigungu) {
    try {
      const path = `${this.#url}/shelterList&sigo=${sido}&sigungu=${sigungu}`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.shelterList', err)
      throw err
    }
  }

  async kindList(kindType) {
    try {
      const path = `${this.#url}/kindList&kindType=${kindType}`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.kindList', err)
      throw err
    }
  }

  async animalList(model = {}, paging) {
    const { start, end, kindType, sido, sigungu, shelter, state } = model
    try {
      let path = `${this.#url}/animalList?size=100`
      if (start) path += `&start=${start}`
      if (end) path += `&end=${end}`
      if (kindType) path += `&kindType=${kindType}`
      if (sido) path += `&sido=${sido}`
      if (sigungu) path += `&sigungu=${sigungu}`
      if (shelter) path += `&shelter=${shelter}`
      if (state) path += `&state=${state}`
      path += `&page=${paging.page}&size=${paging.size}`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.animalList', err)
      throw err
    }
  }
}

export const searchService = SearchService.getInstance()
