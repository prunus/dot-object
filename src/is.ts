import { regexp } from './constants'

const is = {
  index: ( key: string ) => regexp.number.test( key )
}

export default is
