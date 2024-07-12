import React from 'react';
import Layout from '../components/Layout';
import './AboutUs.css';
import StudentOne from '../assets/intros/student-pic.jpg';

const AboutUs = () => {
    return (
<Layout backgroundImage={require('../assets/intros/about-us-pic.jpg')}>
            <div className="about-us">
            <section className="section about">
          <h1>About Us</h1>
          <p className="centered-paragraph">We are a community of students at the University of Pennsylvania interested in all things language: from formal theory and experimental methods to topics in NLP, the origins and future of language, social implications of linguistic choices, and everything in between. We unite young researchers and language enthusiasts — undergraduate, graduate, and professional alike — from diverse backgrounds around the globe. Many of us are linguists in training, but our events are open to anyone interested in exploring the patterns of the languages they speak and learning all about those they don’t! </p>
        </section>

        <section className="section why-penn">
          <h2>Why Join PLING</h2>
          <div className="why-penn-content">
            <ul>
              <li>A welcoming, diverse, multi-lingual environment, offering a unique blend of cultural perspectives, space for open-minded conversations, and a vibrant forum for intellectual exchange.</li>
              <li>A rich selection of semi-regular events ranging from educational workshops, through introspective activities, through fun and engaging community gatherings.</li>
              <li>The right place to develop some transferable skills such as data analysis, pattern recognition, problem-solving, computational skills, and cross-cultural competence.</li>
              <li>Opportunity to network with students and faculty from not only linguistics but also a number of adjacent disciplines such as psychology, neuroscience, and computer science.</li>
            </ul>
          </div>
        </section>

                <section className="section alumni">
          <h2>Student Voices</h2>
          <div className="alumni-container">
            <div className="alumni-image-container">
            <img src={StudentOne} alt="Alumni" className="alumni-image" /> 
            <blockquote>
                <footer>Sophie Faircloth</footer>
              </blockquote>
            </div>
            <div className="alumni-info">
              <p>"Being a part of the Penn Linguistics community was one of the best aspects of my time at Penn and one of the best decisions I made in my academic journey, and PLING played a role in making that experience what it was! Because of the Penn Linguistics community and support from undergraduates, grad students, and faculty alike, I am now continuing my education to pursue a PhD at the University of Michigan. The Penn Linguistics community offered me an opportunity to form connections with other linguists who have made me into the academic I am today, offering me support and guidance throughout my research and educational endeavors that has proven to be invaluable". 
              </p>
              </div>
          </div>
          {/* Repeat .alumni-container for additional alumni */}
        </section>
            </div>
        </Layout>
    );
};

export default AboutUs;


