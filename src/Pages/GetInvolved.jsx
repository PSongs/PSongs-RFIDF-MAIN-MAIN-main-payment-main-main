import React from 'react'
import "./getiinvolved.css"

const GetInvolved = () => {
  return (
    <div className='involved'>
           

           <div className='about'>
        <img src="https://static.timesofisrael.com/www/uploads/2017/02/Yom-Siddurim-1.jpg"alt="About RFIDF" />
        <h1 className='abttxt'>
        GET INVOLVED
        </h1>
      </div>



      <div>
        <h1>There are many ways to get involved and support the soldiers.</h1>
      </div>

      <div className='helpn'>
                   <div className="card">
                        <img src="https://www.fidf.org/wp-content/uploads/2021/09/PlannedGiving-scaled.jpg.webp" alt="" />
                        <h3>Planned Giving</h3>
                   </div>
                   <div className="card">
                   <img src="https://www.fidf.org/wp-content/uploads/2021/08/Matching-Gifts_0-1.jpg.webp" alt="" />
                        <h3>Matching Gifts</h3>
                   </div>
                   <div className="card">
                   <img src="https://www.fidf.org/wp-content/uploads/2021/09/Guardian-Program_new.jpg.webp" alt="" />
                        <h3>Guardian Monthly Giving Program</h3>
                   </div>
                   <div className="card">
                   <img src="https://www.fidf.org/wp-content/uploads/2021/10/Start-Your-Own-Campaign-Header.jpg.webp" alt="" />
                        <h3>Start Your Campaign </h3>
                   </div>
                   <div className="card">
                   <img src="https://www.fidf.org/wp-content/uploads/2021/09/join-fidf-mission-scaled.jpg.webp" alt="" />
                   <h3>Support The RFIDF Mission</h3>
                   </div>
                  
      </div>
      </div>

  )
}

export default GetInvolved