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

  async sidoList(page) {
    try {
      const path = `${this.#url}/sidoList`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.sidoList', err)
      throw err
    }
  }

  async gunList(sido, page) {
    try {
      const path = `${this.#url}/gunList`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.gunList', err)
      throw err
    }
  }

  async shelterList(sido, gun, page) {
    try {
      const path = `${this.#url}/shelterList`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.shelterList', err)
      throw err
    }
  }

  async kindList(type, page) {
    try {
      const path = `${this.#url}/kindList`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.kindList', err)
      throw err
    }
  }

  async animalList(sido, gun, type, shelter, page) {
    try {
      const path = `${this.#url}/animalList`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.animalList', err)
      throw err
    }
  }
}

export const searchService = SearchService.getInstance()
