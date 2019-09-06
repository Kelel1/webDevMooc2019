import React from 'react'
const Notification = (validation, warning) => {
    if (validation === null && warning === null) {
        return null
    } else if (warning !== null) {
        return (
            <div className='warn'>
                { warning }
            </div>
        )
    }
    return (
        <div className='validate'>
            { validation }
        </div>
    )
}

export default Notification