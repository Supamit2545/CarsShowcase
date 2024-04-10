import React from 'react'
import {useState, useEffect} from 'react'
import Cars from './Cars.json'
import './rental.css'
import Buttons from './Buttons'
function Rental() {
    
    const [Catas , setCatas] = useState(1)
    const [filteredCars, setFilteredCars] = useState(Cars);
  return (
    <div>
        <div className='mt-5'>
            <div className='neonText text-black text-center text-5xl font-bold font-mono border-b-white'>Rental Cars Service</div>    
            <div className='text-center text-3xl'>
                <div className='my-5'>Search Bar :
                    <input className='border-2 border-black' type="text" placeholder='ใส่ชื่อหรือรุ่นที่คุณต้องการ '/>
                </div>
                <div><Buttons/></div>
                <div className='my-5'>
                    <ul className='flex justify-center space-x-10'>
                        <li className={`Catas ${Catas === 1 ? "active-Catas" : ""}`}><button onClick={() => setCatas(1)}>All</button></li>
                        <li className={`Catas ${Catas === 2 ? "active-Catas" : ""}`}><button onClick={() => setCatas(2)}>Suv</button></li>
                        <li className={`Catas ${Catas === 3 ? "active-Catas" : ""}`}><button onClick={() => setCatas(3)}>Eco</button></li>
                        <li className={`Catas ${Catas === 4 ? "active-Catas" : ""}`}><button onClick={() => setCatas(4)}>Electric</button></li>
                        <li className={`Catas ${Catas === 5 ? "active-Catas" : ""}`}><button onClick={() => setCatas(5)}>Sport</button></li>
                        <li className={`Catas ${Catas === 6 ? "active-Catas" : ""}`}><button onClick={() => setCatas(6)}>Luxury</button></li>
                    </ul>
                </div>
                
                <div className={`CatasShow ${Catas === 1 ? "active-CatasShow" : ""}`}>
                    {
                        Cars.map( Car =>{
                            return(
                                <div className='container mx-auto w-3/6'>
                                    <div className='flex border-2 shadow-2xl drop-shadow-lg border-black mb-5'>
                                        <div className='shadow-sm'><img src={Car.img} alt="" width={300}/></div>
                                        <div key={Car.id} className='mx-auto text-left'><p>ID : {Car.id}</p>
                                            <p>Cars : {Car.name}</p>
                                            <p>Color : {Car.Color}</p>
                                            <p><span>Price:{Car.price} || Stock:{Car.stock}</span></p>
                                            <button className=' mt-2 border-2 text-white bg-black py-2 px-2 hover:bg-green-700 hover:border-black'>MoreInfo...</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`CatasShow ${Catas === 2 ? "active-CatasShow" : ""}`}>
                    <div>
                            {
                                Cars.map( Car =>{
                                    return(
                                        <div className='container mx-auto w-3/6'>
                                            <div className='flex border-2 shadow-2xl drop-shadow-lg border-black mb-5'>
                                                <div className='shadow-sm'><img src={Car.img} alt="" width={300}/></div>
                                                <div className='mx-auto text-left'><p>ID : {Car.id}</p>
                                                    <p>Cars : {Car.name}</p>
                                                    <p>Color : {Car.Color}</p>
                                                    <p><span>Price:{Car.price} || Stock:{Car.stock}</span></p>
                                                    <button className=' mt-2 border-2 text-white bg-black py-2 px-2 hover:bg-green-700 hover:border-black'>MoreInfo...</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rental