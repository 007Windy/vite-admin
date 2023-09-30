const TokenKey = 'token'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token: string) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  // 也可以 setItem(TokenKey, '')
  return localStorage.removeItem(TokenKey)
}