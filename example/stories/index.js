import React from 'react'
import { setAddon } from '@storybook/react'
import JSXAddon from '../../lib/index'

import SimpleStories from './simple'
import VueStories from './vue'
import DeepStories from './deep'
import FunctionStories from './functions'
import ArrayStories from './array'
import WithPropsStories from './withProps'

setAddon(JSXAddon)

SimpleStories()
VueStories()
DeepStories()
FunctionStories()
ArrayStories()
WithPropsStories()
