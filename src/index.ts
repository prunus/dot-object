import { object as dotObject } from './object'
import { pick as dotPick } from './pick'
import { set as dotSet } from './set'
import { dotify as dotDotify } from './dotify'

namespace dot {
  export const object = dotObject
  export const pick = dotPick
  export const set = dotSet
  export const dotify = dotDotify
  export const ify = dotDotify
}

export = dot
