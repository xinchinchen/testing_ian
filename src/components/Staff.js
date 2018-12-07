import React from 'react'

import Container from './Container'
import './Staff.sass'

export default function() {
    return (
        <Container id='staff' key='bottom' textAlign='center' color='white'>
            <ul>
                <li>
                    <div>
                        <header>王勝德</header>
                        <p>指導教授</p>
                    </div>
                </li>
            </ul>
            <hr />
            <ul>
                <li>
                    <div>
                        <header>呂其暐</header>
                        <p>助教（Fall 2017, Spring 2018）</p>
                    </div>
                </li>
                <li>
                    <div>
                        <header>陳奕安</header>
                        <p>助教（Fall 2017, Spring 2018）</p>
                    </div>
                </li>
            </ul>
        </Container>
    )
}

