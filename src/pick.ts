import { parse } from './parse'

export const pick = ( path: string, object: any ) => {
  return parse.path( path ).reduce( ( object, key ) => {
    if ( object === undefined || object === null ) return object
    return object[key]
  }, object )
}
