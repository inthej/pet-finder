export default class ReactUtils {
  static handleChange(event, setFormState) {
    event.persist()
    const name = event.target.name
    const val = event.target.value
    ReactUtils.handleNameChange(name, val, setFormState)
  }

  static handleNameChange(name, val, setFormState) {
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [name]: val,
      },
      touched: {
        ...formState.touched,
        [name]: true,
      },
    }))
  }
}
