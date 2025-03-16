import React from 'react';
import Layout from '../components/Layout';
import './AboutUs.css';
import StudentOne from '../assets/intros/student-pic.webp';
import StudentTwo from '../assets/intros/dan-pic.webp';
import BulletIcon1 from '../assets/icons/globe.webp';
import BulletIcon2 from '../assets/icons/event.webp';
import BulletIcon3 from '../assets/icons/gear.webp';
import BulletIcon4 from '../assets/icons/network.webp';

const AboutUs = () => {
  return (
    <Layout backgroundImage={require('../assets/intros/about-us-pic.jpg')}>
      <div className="about-us">
        {/* Section: About */}
        <section className="section about">
          <h1>About Us</h1>
          <p className="centered-paragraph">
            We are a community of students at the University of Pennsylvania interested in all things language: from formal theory and experimental methods to topics in NLP, the origins and future of language, social implications of linguistic choices, and everything in between. We unite young researchers and language enthusiasts—undergraduate, graduate, and professional alike—from diverse backgrounds around the globe. Many of us are linguists in training, but our events are open to anyone interested in exploring the patterns of the languages they speak and learning all about those they don’t!
          </p>
        </section>

        {/* Section: Why Join PLING */}
        <section className="section why-penn">
          <h2>Why Join PLING</h2>
          <div className="why-penn-content">
            <div className="why-penn-item">
              <img className="bullet-icon" src={BulletIcon1} alt="Diverse Perspectives" />
              <p>A welcoming, diverse, multi-lingual environment, offering a unique blend of cultural perspectives, space for open-minded conversations, and a vibrant forum for intellectual exchange.</p>
            </div>
            <div className="why-penn-item">
              <img className="bullet-icon" src={BulletIcon2} alt="Engaging Events" />
              <p>A rich selection of semi-regular events ranging from educational workshops, through introspective activities, through fun and engaging community gatherings.</p>
            </div>
            <div className="why-penn-item">
              <img className="bullet-icon" src={BulletIcon3} alt="Skill Development" />
              <p>The right place to develop some transferable skills such as data analysis, pattern recognition, problem-solving, computational skills, and cross-cultural competence.</p>
            </div>
            <div className="why-penn-item">
              <img className="bullet-icon" src={BulletIcon4} alt="Networking Opportunities" />
              <p>Opportunity to network with students and faculty from not only linguistics but also a number of adjacent disciplines such as psychology, neuroscience, and computer science.</p>
            </div>
          </div>
        </section>

        {/* Section: Student Voices */}
        <section className="section alumni">
          <h2>Student Voices</h2>
          {/* Alumni Testimonial 1 */}
          <div className="alumni-container">
            <div className="alumni-image-container">
              <img loading="lazy" src={StudentOne} alt="Alumni Sophie Faircloth" className="alumni-image" />
              <blockquote>
                <footer>Sophie Faircloth</footer>
              </blockquote>
            </div>
            <div className="alumni-info">
              <p className="student-voice">
                "Being a part of the Penn Linguistics community was one of the best aspects of my time at Penn and one of the best decisions I made in my academic journey, and PLING played a role in making that experience what it was! Because of the Penn Linguistics community and support from undergraduates, grad students, and faculty alike, I am now continuing my education to pursue a PhD at the University of Michigan. The Penn Linguistics community offered me an opportunity to form connections with other linguists who have made me into the academic I am today, offering me support and guidance throughout my research and educational endeavors that has proven to be invaluable."
              </p>
            </div>
          </div>

          {/* Alumni Testimonial 2 */}
          <div className="alumni-container">
            <div className="alumni-info">
              <p className="student-voice">
                "Penn Linguistic Society has been an incredibly supportive and warm community to open up, discuss novel ideas with friends and develop a solid interest in research. With challenging courses and a very approachable faculty, the department has expanded my understanding of the world's linguistic diversity and sharpened my curiosity in pursuing more formal investigation. At the same time, PLING's social life, from short student presentations and informal lunch hours to karaoke, has helped to create a close-knit environment between peers and professors — a liberating venue for new connections and rigorous academic work!"
              </p>
            </div>
            <div className="alumni-image-container">
              <img loading="lazy" src={StudentTwo} alt="Alumni Daniel Shevchenko" className="alumni-image" />
              <blockquote>
                <footer>Daniel Shevchenko</footer>
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;





