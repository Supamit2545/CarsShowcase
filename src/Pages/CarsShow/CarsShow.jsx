import React, { useState , useEffect } from 'react'
import './CarsShow.css'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function CarsShow() {
  const [Info, setInfo] = useState(1);
  const [Name, setName] = useState("");
  

  function scrolll(){
    var right = document.querySelector(".CarShowing");
    right.scrollBy(-950,0)
    setInfo(Info - 1)
    if(Info <= 1){
      setInfo(1)
    }
  }
  function scrollr(){
    var left = document.querySelector(".CarShowing");
    left.scrollBy(950 ,0)
    setInfo(Info +1)
    if(Info >= 3 ){
      setInfo(3)
    }
  }
  useEffect(() => {
    if (Info === 1) {
      setName("SuperCar");
    } else if (Info === 2) {
      setName("รถปกติ");
    } else if (Info === 3) {
      setName("รถแข่งบ่นิ");
    }
  }, [Info]);
  return (
    <div>
        {/* Background */}
        <div className='CarsShowbg'>
        <div className='neonText text-5xl text-center pt-10 text-white font-bold'>CAR RANTAL WEBSITE BY REACT</div>
          <div className='CarShowing'>
            <div className='CarsImg'>
              <div id='Car1' className='Cars'><img className='' src="./src/imgs/CarsShow1.png" alt=""/></div>
              <div id='Car2' className='Cars'><img className="" src="src\imgs\pngegg (1).png" alt="" /></div>
              <div id='Car3' className='Cars'><img className='' src="src/imgs/pngegg.png" alt="" /></div>
            </div>
          </div>
          <div className='InfoOfCars'>
            <div className='flex mt-10'>
              <button className='mx-auto hover:text-purple-500' onClick={() => scrolll()}><FaAngleLeft className='text-5xl mx-auto' /></button>
              <span className='neonText text-black text-4xl font-bold font-mono'>{Name}</span>
              <button className='mx-auto hover:text-purple-500' onClick={() => scrollr()}><FaAngleRight className='text-5xl mx-auto'/></button>
            </div>
            <div className='InfoContent'>
              <div id="SuperCar" className={`content ${Info === 1 ? "active-content" : ""}`}>
                <h1 className='neonText text-black mt-5 font-bold text-2xl'>𝐋𝐀𝐌𝐁𝐎𝐑𝐆𝐇𝐈𝐍𝐈 𝐀𝐕𝐄𝐍𝐓𝐀𝐃𝐎𝐑 </h1>
                <div className='text-2xl my-5 font-mono'>
                  <div className='text-3xl font-bold text-red-700'>Engine:</div>
                  <div>6498 cc, 12 Cylinders In V Shape, 6 Valves/Cylinder, DOHC</div>
                  <div className='text-3xl font-bold text-red-700'>Tranmission:</div>
                  <div>Automatic - 7 Gears, Paddle Shift, Sport Mode</div>
                </div>
              </div>
              <div className={`content ${Info === 2 ? "active-content" : ""}`}>
                <h1 className='neonText text-black mt-5 font-bold text-2xl'>รถธรรมดา </h1>
                  <p className='text-xl mt-5'>asdSADASDASDASDASD</p>
              </div>
              <div className={`content ${Info === 3 ? "active-content" : ""}`}>
                <h1 className='neonText text-black mt-5 font-bold text-2xl'>Racing Cars</h1>
                  <p className='text-xl mt-5'>.PDKASODSAOKDJOSPD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarsShow