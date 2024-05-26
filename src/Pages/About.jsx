import React from 'react';
import './about.css';
import aboutC from '../assets/corrage.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className='about'>
        <img src={aboutC} alt="About RFIDF" />
        <h1 className='abttxt'>
          CHAMPIONING THE COURAGEOUS MEN AND WOMEN OF THE IDF WITH RFIDF
        </h1>
      </div>

      <div className='seriesHs aline'>
        <div>
          <h1>Our Purpose</h1>
          <h4>
            To champion the courageous men and women of the IDF and care for their needs through transformational opportunities and support as they protect the State of Israel and her people.
          </h4>
        </div>
        <div>
          <h1>Our Vision</h1>
          <h4>
            To secure the survival of Israel, providing a thriving homeland for Jews worldwide.
          </h4>
        </div>
        <div>
          <h1>Our Mission</h1>
          <h4>
            We transform the lives of the young men and women of the IDF through empowering educational, financial, well-being, and cultural initiatives.
          </h4>
        </div>
      </div>

      <div className="aboutUs">
        <div>
          <h1>About Us</h1>
        </div>
        <div>
          <h4>
            <Link to={"/"}>Real Friends of the Israel Defense Forces (RFIDF)</Link> is a non-political, non-military organization that provides for the wellbeing of the soldiers of the Israel Defense Forces (IDF), veterans, and family members. Established in 1981 by a group of Holocaust survivors, RFIDF is a 501(c)(3) not-for-profit corporation that operates 24 Chapters in the United States with headquarters in New York City. We are the single organization authorized to collect charitable donations on behalf of the soldiers of the IDF across the United States, as designated by Lt. Gen. Gadi Eisenkot, IDF Chief of the General Staff in March 2017, and by Lt. Gen. Aviv Kochavi, IDF Chief of the General Staff in February 2019 and April 2021.
          </h4>
        </div>
        <div>
          <h1>How We Rank</h1>
        </div>
        <div>
          <h4>
            RFIDF has consistently received the highest ratings for accountability and transparency from two of the leading independent charity evaluators: Charity Navigator and Charity Watch. RFIDF received the highest 4-star rating from Charity Navigator for the 11th year in a row—a feat accomplished by only 2% of charities in America, and Charity Watch has bestowed RFIDF with their “Top-Rated” seal.
          </h4>
        </div>
        <div className='centerIt'>
          <img src="https://www.fidf.org/wp-content/uploads/2021/09/Charity-Navigator-2019-certificate-1.png" alt="Charity Navigator Certificate" />
        </div>
        <div>
          <h4>
            “Based on the most recent information available, we have issued a new rating for your organization. We are proud to announce Real Friends of the Israel Defense Forces has earned our ninth consecutive 4-star rating. This is our highest possible rating and indicates that your organization adheres to sector best practices and executes its mission in a financially efficient way. Attaining a 4-star rating verifies that Friends of the Israel Defense Forces exceeds industry standards and outperforms most charities in your area of work. Only 2% of the charities we evaluate have received at least 9 consecutive 4-star evaluations, indicating that Friends of the Israel Defense Forces outperforms most other charities in America. This exceptional designation from Charity Navigator sets Friends of the Israel Defense Forces apart from its peers and demonstrates to the public its trustworthiness.”
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
