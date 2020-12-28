export const blacklist = [ '__proto__', 'prototype', 'constructor' ]
export const blacklistFilter = ( part ) => blacklist.includes( part )
export const regexp = {
  number: /\d+/
}