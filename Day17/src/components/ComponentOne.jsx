import React from 'react'
import ComponentTwo from './ComponentTwo'

const ComponentOne = () => {
    const user = "priya"
    return <ComponentTwo user={user} />
}

export default ComponentOne