import fill from "./fill"

const set: {
  ( path: string, object: any, value: any ): any
  ( map: { [key: string]: any }, object: any ): any
  in: {
    ( path: string, object: any, value: any ): any
    ( map: { [key: string]: any }, object: any ): any
  }
} = ( path: string | { [key: string]: any }, object: any, value?: any ) => {
  const target = Object.assign( {}, object )

  set.in( path as any, target, value )

  return target
}

set.in = ( path: string | { [key: string]: any }, target: any, value?: any ) => {
  if ( typeof path === 'object' )

    Object.entries( path ).forEach( ( [ path, value ] ) => {
      fill( path, target, value )
    } )

  else fill( path, target, value )

  return target
}

export default set
