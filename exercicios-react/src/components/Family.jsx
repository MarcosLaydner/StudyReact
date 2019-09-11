import React from 'react'
import {childrenWithProps} from '../utils/utils'

export default props =>

    <div>
        <h1>Family {props.surname}</h1>
        {childrenWithProps(props)}
    </div>