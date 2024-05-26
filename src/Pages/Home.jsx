import React, { useState, useEffect } from 'react';
import './home.css';
import neverNow from '../assets/neverNow.jpg';
import warPi from '../assets/warPi.jpg';
import Slider from '../Components/Slider';
import logo from '../assets/LOGO 1.png';
import aface from '../assets/aface.jpeg';
import { Link } from 'react-router-dom/dist';
import ResponsiveIframe from '../Components/ResponsiveIframe';
import { images1, imagesSub1, imagesSub2, imagesSub3, imagesSub4, imagesSub5, imagesSub6, imagesSub7, imagesSub8 } from "../Components/DataStructure/Structure1";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [showRandom, setShowRandom] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1004);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1004);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSlideClick = (clickedIndex) => {
    setIndex(clickedIndex);
    setShowRandom(true);
  };

  const handleCloseRandom = () => {
    setShowRandom(false);
  };

  const imageSets = [imagesSub1, imagesSub2, imagesSub3, imagesSub4, imagesSub5, imagesSub6, imagesSub7, imagesSub8];
  const selectedImages = imageSets[index] || imagesSub1;

  return (
    <div className="home">
      <div className="neverNow">
        <img src={neverNow} alt="Never Now" />
      </div>

      <div className="textIntro">
        <div className="ceezyLine">
          <h1>Their job is to look after Israel.</h1>
          <h1>Our job is to look after them.</h1>
        </div>

        <div className="ceezyLine">
          <h3> Real Friends of the IDF is the sole organization authorized to collect charitable donations on behalf of the soldiers of the Israel Defense Forces across the United States of America.</h3>
        </div>

        <div className="donateBtns">
          <button className="dbtn1"><Link to="/donate">DONATE</Link></button>
        
        </div>
      </div>

      <div className="pi">
        <div className="War4oh">
          <h1 className="War4ohtxt1">WAR FOR OUR HOME</h1>
          <h1 className="War4ohtxt2">HOW RFIDF IS MAKING A FRONTLINE DIFFERENCE</h1>
          <h3>100% of emergency funds are going directly to support IDF’s soldiers’ urgent humanitarian needs. To date, RFIDF has transferred tens of millions of dollars in response to IDF requests for support during the Hamas-Israel War.</h3>
        </div>
        <img src={warPi} alt="War for Our Home" />
        <div className="actiondiv">
          <h2>As the soldiers’ needs evolve, RFIDF will continue to be their trusted partners in action.</h2>
          <button className='LEARNBTN'>LEARN MORE</button>
          <h1>SEE THE LATEST FROM THE GROUND</h1>
          <div className="swipers">
            <div className="clickables">
              <Slider
                slides={images1}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
                slidesPerView={isSmallScreen ? 1 : 4}
                onSlideClick={handleSlideClick}
              />
            </div>
            {showRandom && (
              <div className="random">
                <div className="random-content">
                  <Slider
                    slides={selectedImages}
                    autoplay={{ delay: 5000000, disableOnInteraction: true }}
                    slidesPerView={1}
                  />
                  <div className="writeups">
                    <button className="close-btn" onClick={handleCloseRandom}>X</button>
                    <div className="sectionsl">
                      <img src={logo} alt="Logo" />
                    </div>
                    <div className="sectionsp">
                      <span>{index + 1}/8</span>
                    </div>
                    <div className="sectionsw">
                      {selectedImages.map((item, idx) => (
                        <h3 key={idx}>{item.write}</h3>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='aface'>
        <div className="face">
          <img src={aface} alt="A Face" />
        </div>
        <div className="faceTalk">
          <h1>
            “RFIDF’s love and support empower us to protect and defend Israel, the home of the Jewish people.” -Lt. Col Liron
          </h1>
        </div>
      </div>

      <div className="briefing">
        <h1>SPECIAL BRIEFINGS</h1>
        <div>
          <h2>RFIDF’s special briefings give insider access to information on the Hamas-Israel War not covered by the media. You will be transported directly to the front lines for real-time updates into IDF heroes’ experiences, challenges, and triumphs.</h2>
          <div className="iframe">
            <ResponsiveIframe src="https://www.youtube.com/embed/DLyjqToDQYo?si=JkGwfAtYQKObv2fr" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
