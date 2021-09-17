import { fill } from './fill'

export const object = ( object: { [key: string]: any } ) => {
  return Object.entries( object ).reduce( ( group, [ key, value ] ) => {
    return fill( key, group, value )
  }, {} )
}
