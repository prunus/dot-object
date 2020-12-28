import parse from './parse'

const pick = ( path: string, object: any ) => {
  return parse.path( path ).reduce( ( object, key ) => {
    if ( object === undefined || object === null ) return object
    return object[key]
  }, object )
}

export default pick
