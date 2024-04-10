import React from 'react'
import Cars from "./Cars.json"

function Buttons() {
  return (
    <div>
        <div className='flex justify-center '>
            {
                Cars.map(car =>(
                    <button className='Catas'>
                        
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default Buttons