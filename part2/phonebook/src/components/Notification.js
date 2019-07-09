import React from 'react'

const Notification = ({message, warning}) => {

    if (message === null && warning === null) {
        return null
    } else if (warning !== null) {
        return (
            <div className='warn'>
                {warning}
            </div>
        )
    }
    return (
        <div className='validate'>
            {message}
        </div>
    )
}

export default Notification