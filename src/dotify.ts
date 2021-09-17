export interface DotifyOptions {
  arrayBracket?: boolean | [ string, string ]
  separator?: string
  coverUpProperty?: string | [ string, string ]
}

export const dotify = ( dot: Record<string, any>, options: DotifyOptions = {} ): any => {
  const isArray = Array.isArray( dot )
  const { arrayBracket = true, separator: propertySeparator = '.', coverUpProperty = [ '', '' ] } = options
  const [ startArrayBracket, closeArrayBracket ] = Array.isArray( arrayBracket ) && arrayBracket.length === 2
    ? arrayBracket
    : arrayBracket
      ? [ '[', ']' ]
      : [ propertySeparator, '' ]
  const [ startCoverUpProperty, closeCoverUpProperty ] = Array.isArray( coverUpProperty ) && coverUpProperty.length === 2
    ? coverUpProperty
    : typeof coverUpProperty === 'string'
      ? [ coverUpProperty, coverUpProperty ]
      : [ '', '' ]

  return Object.entries( dot ).reduce( ( record, [ key, value ] ) => {
    const dotkey = isArray ? `${startArrayBracket}${key}${closeArrayBracket}` : `${startCoverUpProperty}${key}${closeCoverUpProperty}`
    const separator = Array.isArray( value ) ? '' : propertySeparator

    if ( typeof value === 'object' && value !== null )
      return Object.entries( dotify( value, options ) ).reduce( ( record, [ key, value ] ) => {
        return { ...record, [`${dotkey}${separator}${key}`]: value }
      }, record )

    return { ...record, [dotkey]: value }
  }, {} )
}
