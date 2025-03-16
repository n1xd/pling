import React, { useEffect, useRef} from 'react';
import './AiforGood.css';

import mindcore from '../assets/sponsors/mindcore.webp';
import ev from '../assets/sponsors/ev.webp';
import pennling from '../assets/sponsors/pennling.png';
import presidentsoff from '../assets/sponsors/presidentsofficelogo.webp';
import rddsx from '../assets/sponsors/rddsx.png';

const AiforGood = () => {
  const sections = useRef([]);
  
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

    window.addEventListener('scroll', highlightClosestSection);
    highlightClosestSection();

    return () => {
      window.removeEventListener('scroll', highlightClosestSection);
    };
  }, []);

  const sectionData = [
    {
        id: 'programme',
        title: 'Programme',
        content: (
          <div className="programme-container">
            <div className="timetable">
              <table>
                <tbody>
                  <tr>
                    <td>9.00 AM</td>
                    <td>Registration</td>
                  </tr>
                  <tr>
                    <td>9.30 AM</td>
                    <td>Welcome, Icebreakers, & Expectation-Setting</td>
                  </tr>
                  <tr>
                    <td>10.00 AM</td>
                    <td>Meet the Judges</td>
                  </tr>
                  <tr>
                    <td>10.30 AM</td>
                    <td>Pitches & Team-Forming</td>
                  </tr>
                  <tr>
                    <td>12.00 PM</td>
                    <td>Lunch (served)</td>
                  </tr>
                  <tr>
                    <td>1.00 PM</td>
                    <td>Idea Validation & Mentoring</td>
                  </tr>
                  <tr>
                    <td>2.00 PM</td>
                    <td>Hacking</td>
                  </tr>
                  <tr>
                    <td>5.00 PM</td>
                    <td>Final Presentations</td>
                  </tr>
                  <tr>
                    <td>6.00 PM</td>
                    <td>Dinner (served)</td>
                  </tr>
                  <tr>
                    <td>7.00 PM</td>
                    <td>Judging & Awards</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="schedule-remark">
              *Schedule is subject to change. We encourage participants to check back closer to the event dates.
            </p>
          </div>
        ),
        
    },
    {
      id: 'judges',
      title: 'Judges',
      content: (
        <p>
          The panel of judges will be announced soon. We hope to welcome judges from across industry, NGOs, as well as academia. Stay tuned!
        </p>
      ),
    },
    {
      id: 'logistics',
      title: 'Logistics',
      content: (
        <p>
          The AI4Good Research Incubator will take place in the <strong>Ben Franklin Room</strong> (Houston Hall). 
          The registration will begin at <strong>9.00 AM</strong> on <strong>April 19</strong> and the final decisions will be announced before <strong>8.00 PM</strong>. 
          Participants are invited to a networking reception after the event concludes.
        </p>
      ),
    },
    {
        id: 'prizes',
        title: 'Prizes',
        content: (
          <div className="prizes-container">
            <p>Exciting prizes await the top-performing teams and participants! AI4Good will award prizes for the following:</p>
            <ul className="prizes-list">
              <li><strong>💡 Best Overall Project</strong>: awarded for a research project that demonstrates excellence across all criteria, including computational rigor, interdisciplinarity, feasibility, and societal impact.</li>
              <li><strong>🌱 Best Community-Oriented Project</strong>: awarded for a research project that most effectively explores AI's role in addressing a specific community's needs, circumstances, or challenges, with a strong focus on social relevance and impact.</li>
              <li><strong>🎤 Best Pitch</strong>: awarded to a student or faculty with the most compelling and well-articulated research idea, demonstrating clarity, depth, and the potential to advance research on social impacts of AI or AI safety.</li>
            </ul>
            <p>Projects will be assessed on <strong>computational accuracy</strong>, promise of <strong>social impact</strong>, <strong>feasibility & scaleability</strong>, and the degree of <strong>interdisciplinary perspective</strong>. Specific prizes will be announced closer to the event. More awards may be announced before or during the event!</p>
          </div>
        ),
      },
    {
      id: 'registration',
      title: 'Registration',
      content: (
        <div>
          <p>
          Registration is required to participate in AI4Good. You can sign up as an individual or register a team. For team registrations, we only allow up to 4 team members, leaving space for an additional researcher matched before or during the event to promote the interdisciplinary nature of projects. Teams larger than 5 members will not be permitted.
          </p>
          <a href="https://forms.gle/hURpKmt6K8RtAz9K8" target="_blank" rel="noopener noreferrer" className="inc-register-button">
            Register Here!
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="research-incubator-container">
      <nav className="research-incubator-nav">
        <div className="research-incubator-header">
        <h1 className="research-incubator-title">
        <span className="title-line1">
    AI<span className="white-text">4</span>GOOD
  </span>
  <span className="title-line2">Research Incubator</span>
</h1>
          <p className="research-incubator-description">
          Imagine a world where AI is not only powerful but ethically sound and socially transformative. The AI4Good Research Incubator brings together researchers across disciplines to propose and develop computationally sound research projects that examine AI’s impact on society and explore pathways for its safe and responsible integration. Come build research collaborations that go beyond the event, expand your network, and develop innovative inquiries into problems posed by rapidly developing AI systems with the chance to win exciting prizes.
               </p>
        </div>
        <div className="research-incubator-buttons">
          {sectionData.map(({ id, title }) => (
            <button key={id} onClick={() => document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' })}>
              {title}
            </button>
          ))}
        </div>
      </nav>
      {sectionData.map(({ id, title, content }, index) => (
        <section key={id} id={id} ref={(el) => (sections.current[index] = el)} className="research-incubator-section">
          <h2>{title}</h2>
          {content}
        </section>
      ))}
      <footer className="research-incubator-footer">
        <h3>Partners</h3>
        <p>We are grateful for the support of our sponsors.</p>
        <div className="sponsor-logos">
          <img src={ev} alt="Effective Ventures" className="sponsor-logo" />
          <img src={pennling} alt="Department of Linguistics" className="sponsor-logo" />
          <img src={mindcore} alt="MindCORE" className="sponsor-logo" />
          <img src={presidentsoff} alt="Office of the President" className="sponsor-logo" />
          <img src={rddsx} alt="Research Data & Digital Scholarship Exchange" className="sponsor-logo" />
        </div>
      </footer>
    </div>
  );
};

export default AiforGood;


