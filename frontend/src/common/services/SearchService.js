import axios from 'axios'
import LogUtils from '../utils/LogUtils'

export default class SearchService {
  static #apiUrl

  static constructor() {
    this.#apiUrl = '/search'
  }

  static async sidoList(form) {
    try {
      const path = `${this.#apiUrl}/sidoList`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.sidoList', err)
      throw err
    }
  }

  static async gunList(form) {
    try {
      const path = `${this.#apiUrl}/gunList`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.gunList', err)
      throw err
    }
  }

  static async shelterList(form) {
    try {
      const path = `${this.#apiUrl}/shelterList`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.shelterList', err)
      throw err
    }
  }

  static async kindList(form) {
    try {
      const path = `${this.#apiUrl}/kindList`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.kindList', err)
      throw err
    }
  }

  static async animalList(form) {
    try {
      const path = `${this.#apiUrl}/animalList`
      const responseModel = await axios.get(path)
      return responseModel.data
    } catch (err) {
      LogUtils.debug('SearchService.animalList', err)
      throw err
    }
  }
}
