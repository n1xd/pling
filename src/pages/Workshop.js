import React, { useEffect, useRef, useState } from 'react';
import './Workshop.css';

import mindcore from '../assets/sponsors/mindcore.webp';
import ev from '../assets/sponsors/ev.webp';
import pennling from '../assets/sponsors/pennling.png';
import presidentsoff from '../assets/sponsors/presidentsofficelogo.webp';

import ccb from '../assets/speakers/ccbpic.jpeg';
import ollie from '../assets/speakers/ollie.jpg';

const speakersData = [
  {
    name: "Chris Callison-Burch",
    institution: "University of Pennsylvania",
    image: ccb,
    bio: "Chris Callison-Burch is an expert in AI who has been in the field for 20 years and has been using LMs in his research for much of that time. His more than 100 publications have been cited over 25,000 times. In 2023, he testified before Congress about generative AI. At Penn, his course on AI has one of the highest enrollments at the university, with over 500 students taking the class each Fall."
  },
  {
    name: "Ollie Jaffe",
    institution: "OpenAI",
    image: ollie,
    bio: "Ollie Jaffe works at OpenAI and is researching AI R&D capabilities of frontier models by building some of the hardest ML engineering evaluations to date. In his free time he enjoys researching deceptive capabilities of frontier models, AI control, and AI personhood. He also enjoys discussing neuroscience and creating antimemes."
  },
  // {
  //   name: "Mikhail Samin",
  //   institution: "AI Safety and Governance Institute",
  //   bio: "Mikhail Samin is the founder of the AI Governance and Safety Institute (AIGSI), an organization dedicated to enhancing institutional responses to existential risks posed by AI. His research focuses on AI governance and improving the understanding of AI risks among stakeholders."
  // }
];

const Workshop = () => {
  const sections = useRef([]);
  const [openSessions, setOpenSessions] = useState({});

  useEffect(() => {
    const highlightClosestSection = () => {
      const middleOfViewport = window.innerHeight / 2;
      let closestSection = null;
      let closestDistance = Infinity;

      sections.current.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;
        const distanceToViewportMiddle = Math.abs(sectionMiddle - middleOfViewport);

        if (distanceToViewportMiddle < closestDistance) {
          closestDistance = distanceToViewportMiddle;
          closestSection = section;
        }
      });

      sections.current.forEach((section) => {
        if (section === closestSection) {
          section.classList.add('in-view');
        } else {
          section.classList.remove('in-view');
        }
      });
    };

    const handleSpeakerZoom = () => {
      const speakerCards = document.querySelectorAll('.speaker-card');
      const middleOfViewport = window.innerHeight / 2;
    
      speakerCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;
        const distanceToMiddle = Math.abs(sectionMiddle - middleOfViewport);
    
        if (distanceToMiddle < 150) { // Adjust for smooth effect
          card.classList.add('zoomed');
        } else {
          card.classList.remove('zoomed');
        }
      });
    };

    window.addEventListener('scroll', highlightClosestSection);
    window.addEventListener('scroll', handleSpeakerZoom);
    highlightClosestSection();
    handleSpeakerZoom();

    return () => {
      window.removeEventListener('scroll', highlightClosestSection);
      window.removeEventListener('scroll', handleSpeakerZoom);
    };
  }, []);

  const toggleSession = (session) => {
    setOpenSessions((prev) => ({ ...prev, [session]: !prev[session] }));
  };

  const sectionData = [
    {
      id: 'programme',
      title: 'Programme',
      content: (
        <div>
          <p>The New Mind workshop series consists of <b>3 engaging sessions</b> designed to introduce essential skills for conducting <b>LLM-related research</b> and open up topics from the field to inspire <b>interdisciplinary research</b>. Step into the following topics to learn more about each session!</p>
          <div className="programme-sessions">
            {[ 
              // { title: "Session 1: ", topic: "Can Machines Think?", desc: "Session 1 explores intelligence, biases in traditional definitions, and new perspectives on cognition." },
              { title: "Session 1: ", topic: "Origins of AI-Generated Language", with: "with Chris Callison-Burch", desc: "Session 1 offers beginner-friendly insights into how LLMs work on the technical level, exposes differences between learning and memorisation, and fosters critical thinking about the relationship between language and computation." },
              { title: "Session 2: ", topic: "Common Failures and (Mis)Alignment", with: "with Ollie Jaffe", desc: "Session 2 introduces the key difficulties in creating aligned LLM systems and agents. In this session, participants get to understand what kinds of problems AI systems find challenging, discuss the consequences of uninterpretable and unexplainable AI, and see why unresolved questions can quickly become rather large-scale problems." },
              { title: "Session 3: ", topic: "Mitigating Risk", desc: "Session 3 offers insights into various approaches to AI safety (e.g., mech-interp, governance, adversarial testing…), gives participaants the opportunity to see examples of success in AI safety research, and lays out the dilemma of balancing performace and safety of AI systems." },
              // { title: "Session 5: ", topic: "Interdisciplinary Research and Safe AI", desc: "Session 5 highlights the necessity of interdisciplinary expertise for addressing the complexity of LLMs, explores methods from language and cognition sciences to enhance AI safety, and provides strategies for effective interdisciplinary communication and peer review." }
              { title: "Final Event: ", topic: "Research Question Incubator", desc: "Research Question Incubator is designed as a day-long hackathon-style event aimed to bring in participants and mentors of a variety of backgrounds and encourage them to contribute their unique expertise to developm innovation-oriented interdisciplinary research projects that will help communities in Philadelphia and around the world." },

            ].map((session, index) => (
              <div key={index} className={`session-container ${openSessions[index] ? "open" : ""}`}>
                <h3 className="session-title gradient-text" onClick={() => toggleSession(index)}>
  <span className="session-title-number">{session.title}</span>
  <span className="session-topic">{session.topic}</span> 
  <span className="session-instructor">{session.with}</span>
  <span className="triangle">{openSessions[index] ? '▲' : '▼'}</span>
</h3>


                <div className="session-description-wrapper">
                  <p className="session-description">{session.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'speakers',
      title: 'Speakers',
      content: (
        <div className="speakers-section">
          {speakersData.map((speaker, index) => (
            <div key={index} className="speaker-card">
              <h3 className="speaker-name gradient-text">{speaker.name}</h3>
              <h3 className="speaker-institution gradient-text">{speaker.institution}</h3>
              <img src={speaker.image} alt={speaker.name} className="speaker-image" />
              <p className="speaker-bio fade-in">{speaker.bio}</p>
            </div>
          ))}
        </div>
      ),
    },
    { id: 'logistics', title: 'Logistics', content: 'Information about dates and times, venues, and other possible workshop materials will be posted in Spring 2025. All our events are held on the campus of the University of Pennsylvania and will conclude with reception and refreshments.' },
    { id: 'registration', title: 'Registration', content: 'Registration for this event will open in Spring 2025. In-person attendence will be limited to the University of Pennsylvania community, but our events will also be open to the general public audience online.' },
  ];

  return (
    <div className="workshop-container">
      <nav className="workshop-nav">
        <div className="workshop-header">
          <h1 className="workshop-title">The New Mind</h1>
          <p className="workshop-description">The New Mind workshop series explores the intersection of language, cognition, and artificial intelligence, equipping participants of all backgrounds with the tools to engage in meaningful AI research. By bringing together experts from diverse fields, we aim to break traditional academic boundaries and encourage the development of interdisciplinary projects that are innovative, future-oriented, and technically relevant.</p>
        </div>
        <div className="workshop-buttons">
          {sectionData.map(({ id, title }) => (
            <button key={id} onClick={() => document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' })}>
              {title}
            </button>
          ))}
        </div>
      </nav>
      {sectionData.map(({ id, title, content }, index) => (
        <section key={id} id={id} ref={(el) => (sections.current[index] = el)} className="workshop-section">
          <h2>{title}</h2>
          {content}
        </section>
      ))}
      <footer className="workshop-footer">
        <h3>Partners</h3>
        <p>This project was supported by the dedication of our sponsors, whom we thank for their support.</p>
        <div className="sponsor-logos">
          <img src={ev} alt="Effective Ventures" className="sponsor-logo" />
          <img src={pennling} alt="Department of Linguistics" className="sponsor-logo" />
          <img src={mindcore} alt="MindCORE" className="sponsor-logo" />
          <img src={presidentsoff} alt="Office of the President" className="sponsor-logo" />
        </div>
      </footer>
    </div>
  );
};

export default Workshop;







