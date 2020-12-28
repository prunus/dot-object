import { blacklistFilter } from "./constants"

const parse = {
  path: ( path: string ) => {
    const parts = path.replace( /\.?\[/g, '.' ).replace( /\]/g, '' ).split( /\.|\[/ )
    if ( parts.some( blacklistFilter ) )
      throw Error( 'Refusing to update blacklisted property ' + path )
    return parts
  }
}

export default parse
