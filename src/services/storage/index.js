export const saveItem = (key, data) => {
  try {
    localStorage.setItem(key, data)
  } catch (error) {
    return { error }
  }
}

export const restoreItem = (key) => {
  try {
    const data = localStorage.getItem(key)
    return data
  } catch (error) {
    return { error }
  }
}
