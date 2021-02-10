export const safeLocalStorageSetItem = (key: string, item: string): void => {
  let storageAccessible = false
  try {
    localStorage.setItem('testkey', 'testvalue')
    localStorage.removeItem('testkey')
    storageAccessible = true
  } catch (e) {
    storageAccessible = false
  }
  if (storageAccessible) {
    localStorage.setItem(key, item)
  }
}

export const safeLocalStorageGetItem = (key: string): string => {
  if (typeof Storage !== 'undefined') {
    try {
      return localStorage.getItem(key) || ''
    } catch (e) {
      return ''
    }
  }
  return ''
}

export const safeLocalStorageRemoveItem = (key: string): string => {
  if (typeof Storage !== 'undefined') {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      return ''
    }
  }
  return ''
}

export const safeLocalStorage = {
  getItem: safeLocalStorageGetItem,
  setItem: safeLocalStorageSetItem,
  removeItem: safeLocalStorageRemoveItem,
}
