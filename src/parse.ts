import { blacklistFilter } from "./constants"

export const parse = {
  path: ( path: string ) => {
    const parts = path.replace( /\.?\[/g, '.' ).replace( /\]/g, '' ).split( /\.|\[/ )
    if ( parts.some( blacklistFilter ) )
      throw Error( 'Refusing to update blacklisted property ' + path )
    return parts
  }
}
