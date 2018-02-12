import { injectGlobal } from 'styled-components'

import App from './App'
import globalStyles from './util/global-styles'

injectGlobal`${globalStyles}`

export default App
