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

  async sido() {
    try {
      const path = `${this.#url}/sido`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.sido', err)
      throw err
    }
  }

  async sigungu(sido) {
    try {
      const path = `${this.#url}/sigungu&sido=${sido}`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.sigungu', err)
      throw err
    }
  }

  async shelter(sido, sigungu) {
    try {
      const path = `${this.#url}/shelter&sigo=${sido}&sigungu=${sigungu}`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.shelter', err)
      throw err
    }
  }

  async kind(kindType) {
    try {
      const path = `${this.#url}/kind&kindType=${kindType}`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.kind', err)
      throw err
    }
  }

  async animals(form = {}, paging) {
    const { start, end, kindType, sido, sigungu, shelter, state } = form
    try {
      let path = `${this.#url}/animals`
      path += `?page=${paging.page}&size=${paging.size}`
      if (start) path += `&start=${start}`
      if (end) path += `&end=${end}`
      if (kindType) path += `&kindType=${kindType}`
      if (sido) path += `&sido=${sido}`
      if (sigungu) path += `&sigungu=${sigungu}`
      if (shelter) path += `&shelter=${shelter}`
      if (state) path += `&state=${state}`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.animals', err)
      throw err
    }
  }
}

export const searchService = SearchService.getInstance()
