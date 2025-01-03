import React, { useEffect, useRef } from 'react';
import './Workshop.css';

import mindcore from '../assets/sponsors/mindcore.webp';
import ev from '../assets/sponsors/ev.webp';
import pennling from '../assets/sponsors/pennling.png';

const Workshop = () => {
  const sections = useRef([]); // Store references to sections

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

      // Add 'in-view' class to the closest section and remove from others
      sections.current.forEach((section) => {
        if (section === closestSection) {
          section.classList.add('in-view');
        } else {
          section.classList.remove('in-view');
        }
      });
    };

    // Attach scroll listener
    window.addEventListener('scroll', highlightClosestSection);

    // Initial highlight
    highlightClosestSection();

    return () => {
      window.removeEventListener('scroll', highlightClosestSection); // Cleanup on unmount
    };
  }, []);

  const scrollToSection = (id) => {
    const section = sections.current.find((el) => el.id === id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center', });
    }
  };

  const sectionData = [
    {
      id: 'programme',
      title: 'Programme',
      content: (
        <div>
          <p>
            The New Mind workshop series consists of <b>5 engaging sessions</b> designed to introduce essential skills for conducting LLM-related research and open up topics from the field to inspire interdisciplinary research. Below is the list of all 5 topics and brief descriptions of what to expect.
          </p>
          <div>
            <h3>Session 1: <span style={{ color: 'purple' }}>Can Machines Think?</span></h3>
            <p>
              Session 1 opens up the floor for discussing the concept of intelligence, both natural and artificial, and challenge traditional notions of thinking and learning as known across language and cognition sciences. We explore biases stemming from these traditional definitions as well as new ways of looking at the concepts.
            </p>

            <h3>Session 2: <span style={{ color: 'purple' }}>Origins of AI-Generated Language</span></h3>
            <p>
              Session 2 offers beginner-friendly insights into how LLMs work on the technical level, exposes differences between learning and memorisation, and fosters critical thinking about the relationship between language and computation.
            </p>

            <h3>Session 3: <span style={{ color: 'purple' }}>Common Failures and (Mis)Alignment</span></h3>
            <p>
                Session 3 introduces the key difficulties in creating aligned LLM systems and agents. In this session, participants get to understand what kinds of problems AI systems find challenging, discuss the consequences of uninterpretable and unexplainable AI, and see why unresolved questions can quickly become rather large-scale problems.
            </p>

            <h3>Session 4: <span style={{ color: 'purple' }}>Mitigating Risk</span></h3>
            <p>
              Session 4 offers insights into various approaches to AI safety (e.g., mech-interp, governance, adversarial testing…), gives participaants the opportunity to see examples of success in AI safety research, and lays out the dilemma of balancing performace and safety of AI systems.
 
            </p>

            <h3>Session 5: <span style={{ color: 'purple' }}>Interdisciplinary Research and Safe AI</span></h3>
            <p>
            Session 5 highlights the necessity of interdisciplinary expertise for addressing the complexity of LLMs, explores methods from language and cognition sciences to enhance AI safety, and provides strategies for effective interdisciplinary communication and peer review.
            </p>

            <h3>Final Event: <span style={{ color: 'purple' }}>Research Question Incubator</span></h3>
            <p>
            Research Question Incubator is designed as a day-long hackathon-style event aimed to bring in participants and mentors of a variety of backgrounds and encourage them to contribute their unique expertise to developm innovation-oriented interdisciplinary research projects that will help communities in Philadelphia and around the world.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'speakers',
      title: 'Speakers',
      content: 'Information about the featured speakers, their bios, and topics they will cover will be posted in Spring 2025.',
    },
    {
      id: 'logistics',
      title: 'Logistics',
      content: 'Information about dates and times, venues, and other possible workshop materials will be posted in Spring 2025. All our events are held on the campus of the University of Pennsylvania and will conclude with reception and refreshments.',
    },
    {
      id: 'registration',
      title: 'Registration',
      content: 'Registration for this event will open in Spring 2025. In-person attendence will be limited to the University of Pennsylvania community, but our events will also be open to the general public audience online.',
    },
  ];

  return (
    <div className="workshop-container">
      {/* Navigation Buttons */}
      <nav className="workshop-nav">
  <div className="workshop-header">
    <h1 className="workshop-title">The New Mind</h1>
    <p className="workshop-description">
    The New Mind workshop series explores the intersection of language, cognition, and artificial intelligence, equipping participants of all backgrounds with the tools to engage in meaningful AI research. By bringing together experts from diverse fields, we aim to break traditional academic boundaries and encourage the development of interdisciplinary projects that are innovative, future-oriented, and technically relevant.
    </p>
  </div>
  <div className="workshop-buttons">
    {sectionData.map(({ id, title }) => (
      <button
        key={id}
        onClick={() => scrollToSection(id)}
        aria-label={`Scroll to ${title}`}
      >
        {title}
      </button>
    ))}
  </div>
</nav>

      {/* Workshop Sections */}
      {sectionData.map(({ id, title, content }, index) => (
        <section
          key={id}
          id={id}
          ref={(el) => (sections.current[index] = el)}
          className="workshop-section"
        >
          <h2>{title}</h2>
          {content}
        </section>
      ))}

      {/* Footer Section */}
      <footer className="workshop-footer">
        <h3>Partners</h3>
        <p>
          This project was supported by the dedication of our sponsors, whom we thank for their support.
        </p>
        <div className="sponsor-logos">
          {/* Add sponsor images here */}
          <img src={ev} alt="Effective Ventures" className="sponsor-logo" />
          <img src={pennling} alt="Department of Linguistics" className="sponsor-logo" />
          <img src={mindcore} alt="MindCORE" className="sponsor-logo" />
        </div>
      </footer>
    </div>
  );
};

export default Workshop;






