import React from 'react'
import {Spinner , ProgressBar} from 'react-bootstrap'

function SpinnerLoading() {
    const progress = 65;
    return (

        <div>

        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>

       

        


            
        </div>
    )
}

export default SpinnerLoading
