import { regexp } from './constants'

export const is = {
  index: ( key: string ) => regexp.number.test( key )
}
