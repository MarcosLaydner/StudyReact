import React from 'react'

const approved = ["Paula", "Roberta", "gustavo", "Julio do galo lá"]

export default props => {
    const gerarItens = items => {
        return items.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens (approved)}
        </ul>
    )
}