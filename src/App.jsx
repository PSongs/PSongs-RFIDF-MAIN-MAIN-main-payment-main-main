import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import About from './Pages/About';
import HowWeHelp from './Pages/HowWeHelp';
import GetInvolved from './Pages/GetInvolved';
import ActLocal from './Pages/ActLocal';
import './App.css';
import Donate from './Pages/Donate';

function App() {
  const [count, setCount] = useState(0);


  const pages = [
    { path: '/', content: 'Their job is to look after Israel.Our job is to look after them. never is now Friends of the IDF is the sole organization authorized to collect charitable donations on behalf of the soldiers of the Israel Defense Forces across the United States of America.  DONATE NOW FUNDRAISE WAR FOR OUR HOME HOW RFIDF IS MAKING A FRONTLINE DIFFERENCE100% of emergency funds are going directly to support IDF’s soldiers’ urgent humanitarian needs. To date, RFIDF has transferred tens of millions of dollars in response to IDF requests for support during the Hamas-Israel War. pi chart analysis As the soldiers’ needs evolve, RFIDF will continue to be their trusted partners in action. SEE THE LATEST FROM THE GROUND “RFIDF’s love and support empower us to protect and defend Israel, the home of the Jewish people.” -Lt. Col Liron  SPECIAL BRIEFINGS FIDF’s special briefings give insider access to information on the Hamas-Israel War not covered by the media. You will be transported directly to the front lines for real-time updates into IDF heroes’ experiences, challenges, and triumphs.' },


    { path: '/about', content: ' CHAMPIONING THE COURAGEOUS MEN AND WOMEN OF THE IDF WITH RFIDF  Our Purpose To champion the courageous men and women of the IDF and care for their needs through transformational opportunities and support as they protect the State of Israel and her people. Our Vision  Our Mission We transform the lives of the young men and women of the IDF through empowering educational, financial, well-being, and cultural initiatives. About Us   Real Friends of the Israel Defense Forces (RFIDF) is a non-political, non-military organization that provides for the wellbeing of the soldiers of the Israel Defense Forces (IDF), veterans, and family members. Established in 1981 by a group of Holocaust survivors, RFIDF is a 501(c)(3) not-for-profit corporation that operates 24 Chapters in the United States with headquarters in New York City. We are the single organization authorized to collect charitable donations on behalf of the soldiers of the IDF across the United States, as designated by Lt. Gen. Gadi Eisenkot, IDF Chief of the General Staff in March 2017, and by Lt. Gen. Aviv Kochavi, IDF Chief of the General Staff in February 2019 and April 2021.  How We Rank RFIDF has consistently received the highest ratings for accountability and transparency from two of the leading independent charity evaluators: Charity Navigator and Charity Watch. RFIDF received the highest 4-star rating from Charity Navigator for the 11th year in a row—a feat accomplished by only 2% of charities in America, and Charity Watch has bestowed RFIDF with their “Top-Rated” seal. “Based on the most recent information available, we have issued a new rating for your organization. We are proud to announce Real Friends of the Israel Defense Forces has earned our ninth consecutive 4-star rating. This is our highest possible rating and indicates that your organization adheres to sector best practices and executes its mission in a financially efficient way. Attaining a 4-star rating verifies that Friends of the Israel Defense Forces exceeds industry standards and outperforms most charities in your area of work. Only 2% of the charities we evaluate have received at least 9 consecutive 4-star evaluations, indicating that Friends of the Israel Defense Forces outperforms most other charities in America. This exceptional designation from Charity Navigator sets Friends of the Israel Defense Forces apart from its peers and demonstrates to the public its trustworthiness.”' },


    { path: '/help', content: 'PROVIDING FOR THE HEALTH, WELFARE, AND EDUCATION OF IDF SOLDIERS    Friends of the IDF (FIDF) is a non-political, non-military organization that works closely with the Israel Defense Forces (IDF) to provide   for the well-being of its soldiers, veterans, and family members.   Established in 1981 by a group of Holocaust survivors, FIDF is a 501C3 not-for-profit corporation that operates 25 chapters across the United States with headquarters in New York City. It is the single organization authorized to collect charitable donations on behalf of the IDF in the United States, as designated by Lt. Gen. Gadi Eisenkot, IDF Chief of the General Staff, in March 2017, and by Lt. Gen. Aviv Kochavi, IDF Chief  of the General Staff, in February 2019 and April 2021.   FIDF is wholeheartedly committed to caring, supporting, and providing better everyday lives and brighter futures for the courageous men and women of the IDF who protect Israel and Jews worldwide. For over forty years, FIDF programs have transformed countless young lives through many  empowering educational, ﬁnancial, well-being, and cultural initiatives. death   OUR COMMITMENTS Each year, FIDF fulfills a dynamic portfolio of commitments dedicated to meaningful, life-changing programs for Israel’s  brave soldiers YOU CAN MAKE A DIFFERENCE IN THE LIFE OF A SOLDIER. Each year, we touched the lives of more educate than 105,000 soldiers, veterans and bereaved family members, thanks to your support food shelter cloths special package .' },


    { path: '/involved', content: 'Get Involved There are many ways to get involved and support the soldiers.Planned Giving Matching Gifts  Guardian Monthly Giving Program Start Your Campaign Support The RFIDF Mission give  cause support energyu youth young ' },


    { path: '/local', content: 'Act Local Choose Chapters or Young Leadership to find a regional office close to your home and take a step to act local today Our Chapters  Young Leadership' },
  ];
  




  return (
    <BrowserRouter>
      <Nav pages={pages} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<HowWeHelp />} />
          <Route path="/involved" element={<GetInvolved />} />
          <Route path="/local" element={<ActLocal />} />
          <Route path='/Donate' element={<Donate/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
