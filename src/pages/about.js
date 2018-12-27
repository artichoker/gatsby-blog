import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/Header'

export default () => (
    <div>
        <Link to="/">トップ</Link> {/** link to toppage */}
        <Header title="About" />
        <p>Aboutページ</p>
    </div>
)