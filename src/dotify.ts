export interface DotifyOptions {
  arrayBracket?: boolean | [ string, string ]
  separator?: string
}

export const dotify = ( dot: Record<string, any>, options: DotifyOptions = {} ): any => {
  const isArray = Array.isArray( dot )
  const { arrayBracket = true, separator: propertySeparator = '.' } = options
  const [ startArrayBracket, closeArrayBracket ] = Array.isArray( arrayBracket ) && arrayBracket.length === 2
    ? arrayBracket
    : arrayBracket
      ? [ '[', ']' ]
      : [ propertySeparator, '' ]

  return Object.entries( dot ).reduce( ( record, [ key, value ] ) => {
    const dotkey = isArray ? `${startArrayBracket}${key}${closeArrayBracket}` : `${key}`
    const separator = Array.isArray( value ) ? '' : propertySeparator

    if ( typeof value === 'object' && value !== null )
      return Object.entries( dotify( value, options ) ).reduce( ( record, [ key, value ] ) => {
        return { ...record, [`${dotkey}${separator}${key}`]: value }
      }, record )

    return { ...record, [dotkey]: value }
  }, {} )
}
