import is from './is'
import parse from './parse'

const fill = ( path: string, target: any, value: any ) => {
  const parts = parse.path( path )
  parts.reduce( ( last, key, i, parts ) => {

    if ( last === undefined )
      if ( is.index( key ) ) last = []
      else last = {}

    if ( i + 1 === parts.length ) last[key] = value

    else if ( last[key] === undefined )
      last[key] = is.index( parts[i + 1] ) ? [] : {}

    return last[key]
  }, target )
  return target
}

export default fill
