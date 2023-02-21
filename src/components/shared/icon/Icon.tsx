import React from 'react'
import test from '../../../assets/shared/icons/github.svg'
const Icon = (props: any) => {

    const getImage = () => {
        return new URL(`../../../assets/shared/icons/${props.name}.svg`, import.meta.url).href
    }

    return (
        <img src={getImage()} width={props.width ?? 24} height={props.height ?? 24} />
    )
}

export default Icon