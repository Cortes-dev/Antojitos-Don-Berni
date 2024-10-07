import React from 'react'

const Phone = ({linkTel, Number}) => {
    return (
        <a className='text-green-600 font-semibold border-b-2 border-green-700' href={linkTel}>{Number}</a>
    )
}

export default Phone