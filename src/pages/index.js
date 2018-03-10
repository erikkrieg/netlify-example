import React from "react"
import Helmet from 'react-helmet'

export default () => (
  <main>
    <Helmet title="Guided Support | Prodigy Game" />
    <header>
      <h1>Prodigy Support 💖</h1>
    </header>
    <ul>
      {/* <li><a href="/topics/teachers">Teachers</a></li> */}
      <li><a href="/topics/parents">Parents</a></li>
      {/* <li><a href="/topics/students">Students</a></li> */}
    </ul>
  </main>
)
