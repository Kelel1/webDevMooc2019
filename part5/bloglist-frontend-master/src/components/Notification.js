import React from 'react'
const Notification = ({ validation, errorMessage }) => {
    if (validation === null && errorMessage === null) {
        return null
    } else if (errorMessage !== null) {
        return (
            <div className='warn'>
                { errorMessage }
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