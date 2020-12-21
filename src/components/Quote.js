import React from 'react'

const Quote =(props)=> {
    const quote = props.quote;
    return (
        <div className='landing-header-main'>
            {quote} 
            <div className='landing-header-sub'>
                <p>Ron Swanson</p>
            </div>

        </div>
    )
}

export default Quote;
