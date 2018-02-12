import React, { Fragment } from 'react'
import styled from 'styled-components'

import Link from './components/Link'
import Header from './components/Header'
import Waving from './components/Waving'

export default _ => (
  <Fragment>
    <Header>Hi! <Waving>👋</Waving></Header>

    <p>I'm Joe Haines, a software developer at <Link href="http://www.mayden.co.uk/">Mayden</Link> where I work on <Link href="http://www.iaptus.co.uk/">iaptus</Link>, a patient management and reporting solution for psychological therapists.</p>

    <p>Building things on the web is my passion — I love working in JavaScript, CSS &amp; Elm and I write more PHP than any reasonable person should…</p>

    <p>You can find me on <Link href="https://github.com/imjoehaines">GitHub</Link> and email me at <Link href="mailto:hello@joehaines.co.uk">hello@joehaines.co.uk</Link>.</p>
  </Fragment>
)
