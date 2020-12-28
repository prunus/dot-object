import fill from './fill'

const object = ( object: { [key: string]: any } ) => {
  return Object.entries( object ).reduce( ( group, [ key, value ] ) => {
    return fill( key, group, value )
  }, {} )
}

export default object
