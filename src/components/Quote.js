import React from 'react'

const Quote =(props)=> {

    console.log("quote component");
    const quote = props.quote;
    console.log(quote);

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
