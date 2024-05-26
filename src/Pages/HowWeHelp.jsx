import React from 'react'
import  health  from '../assets/health.jpg';
import "./help.css";
import { Link } from 'react-router-dom/dist';

const HowWeHelp = () => {
  return (
    <div>
           

           <div className='about'>
        <img src={health} alt="About RRFIDF" />
        <h1 className='abttxt'>
        PROVIDING FOR THE HEALTH, WELFARE, AND EDUCATION OF IDF SOLDIERS
        </h1>
      </div>


      <div  className='helpBody'>
            <div>
                <h3>
                Friends of the IDF (RFIDF) is a non-political, non-military organization that works closely with the Israel Defense Forces (IDF) to provide for the well-being of its soldiers, veterans, and family members.
                </h3>
            </div>

            <div>
                        <h3>
                        Established in 1981 by a group of Holocaust survivors, RFIDF is a 501C3 not-for-profit corporation that operates 25 chapters across the United States with headquarters in New York City. It is the single organization authorized to collect charitable donations on behalf of the IDF in the United States, as designated by Lt. Gen. Gadi Eisenkot, IDF Chief of the General Staff, in March 2017, and by Lt. Gen. Aviv Kochavi, IDF Chief of the General Staff, in February 2019 and April 2021.
                        </h3>
            </div>


            <div>
                <h3>
                RFIDF is wholeheartedly committed to caring, supporting, and providing better everyday lives and brighter futures for the courageous men and women of the IDF who protect Israel and Jews worldwide. For over forty years, RFIDF programs have transformed countless young lives through many empowering educational, ﬁnancial, well-being, and cultural initiatives.
                </h3>
            </div>


            <div>
                <h3>
                OUR COMMITMENTS
Each year, RFIDF fulfills a dynamic portfolio of commitments dedicated to meaningful, life-changing programs for Israel’s brave soldiers
                </h3>
            </div>
      </div>

      <div className='helpn'>
                   <div className="card">
                        <img src="https://www.RFIDF.org/wp-content/uploads/2022/09/Education_a-533x300.jpg.webp" alt="" />
                        <h3>Education</h3>
                   </div>
                   <div className="card">
                   <img src="https://www.RFIDF.org/wp-content/uploads/2022/09/Lone-Soldiers_a-533x300.jpg.webp" alt="" />
                        <h3>Loan Soldiers</h3>
                   </div>
                   <div className="card">
                   <img src="https://www.RFIDF.org/wp-content/uploads/2022/09/Financial-Relief_a-533x300.jpg.webp" alt="" />
                        <h3>Financial Support</h3>
                   </div>
                   <div className="card">
                   <img src="https://www.RFIDF.org/wp-content/uploads/2022/09/Fallen-Wounded_a-533x300.jpg.webp" alt="" />
                        <h3>Wounded Soldier & Braved Family </h3>
                   </div>
                   <div className="card">
                   <img src="https://www.RFIDF.org/wp-content/uploads/2022/09/Adopt-a-Unit_a-533x300.jpg.webp" alt="" />
                        <h3>Spiritual And Heritage Programs</h3>
                   </div>
                   <div className="card">
                   <img src="https://www.RFIDF.org/wp-content/uploads/2022/09/Construction_a-533x300.jpg.webp" alt="" />
                        <h3>Construction</h3>
                   </div>
      </div>
      <div className="bluePic">
          <div className='smile'>
       <img src="https://mwi.westpoint.edu/wp-content/uploads/2016/06/CLDT-e1467127825405.jpg" alt="" />
         <div  className='absilutC'>
         <h1>YOU CAN MAKE A DIFFERENCE IN THE LIFE OF A SOLDIER.</h1>
         <h3>Each year, we touched the lives of more than 105,000 soldiers, veterans and bereaved family members, thanks to your support.</h3>
         <button className='dbtn1'><Link to="/donate">DONATE</Link></button>
         </div>
         
          
          </div>
      </div>
    </div>
  )
}

export default HowWeHelp