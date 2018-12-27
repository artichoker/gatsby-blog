import React from 'react'
import { css } from 'emotion'

const style = css({
    color: 'red',
})

export default props => <h1 className={style}>{props.title}</h1>