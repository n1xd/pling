import React, { useEffect, useRef} from 'react';
import './AiforGood.css';

import mindcore from '../assets/sponsors/mindcore.webp';
import ev from '../assets/sponsors/ev.webp';
import pennling from '../assets/sponsors/pennling.png';
import presidentsoff from '../assets/sponsors/presidentsofficelogo.webp';
import rddsx from '../assets/sponsors/rddsx.png';
import bestpitch from '../assets/prizes/bestpitch.jpeg';
import bestproject from '../assets/prizes/bestproject.jpeg';
import bestcommunityproject from '../assets/prizes/bestcommunityproject.jpeg';
import fourLogo from '../assets/icons/4logothin.png';

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
            <p>We only ask that participants gather in the Ben Franklin Room for key agenda points (bolded) throughout the day to be eligible for all our exciting prizes. Otherwise, for most of the day, participants can freely collaborate around the Houston Hall or elsewhere on campus.</p>
            <div className="timetable">
              <table>
                <tbody>
                  <tr>
                    <td>10.00 AM</td>
                    <td><strong>Registration</strong></td>
                  </tr>
                  <tr>
                    <td>10.30 AM</td>
                    <td><strong>Welcome, Icebreakers, & Expectation-Setting</strong></td>
                  </tr>
                  <tr>
                    <td>10.45 AM</td>
                    <td><strong>Meet the Judges</strong></td>
                  </tr>
                  <tr>
                    <td>11.00 AM</td>
                    <td><strong>Pitches & Team-Forming</strong></td>
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
                    <td><strong>Final Presentations</strong></td>
                  </tr>
                  <tr>
                    <td>6.00 PM</td>
                    <td>Dinner (served)</td>
                  </tr>
                  <tr>
                    <td>7.00 PM</td>
                    <td><strong>Judging & Awards</strong></td>
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
          All key sessions of the AI4Good Research Incubator will take place in the <strong>Ben Franklin Room, Houston Hall</strong>. This is also where we will <strong>serve lunch</strong> and make <strong>snacks and beverages</strong> available for all registered participants anytime throughout the day.
          The registration will begin at <strong>10.00 AM</strong> on <strong>April 19, 2025,</strong> and the final decisions will be announced before <strong>7.30 PM</strong>. 
          Participants are invited to a networking reception after the event concludes.
        </p>
      ),
    },
    {
      id: 'prizes',
      title: 'Prizes',
      content: (
        <div className="prizes-container">
          <p className="prizes-description">
            Exciting prizes await the top-performing teams and participants! AI4Good will award prizes for the following categories:
          </p>
          <div className="prize-item">
            <h3>🎤 Best Pitch</h3>
            <p>Awarded to a student or faculty with the most compelling and well-articulated research idea, demonstrating clarity, depth, and the potential to advance research on social impacts of AI or AI safety.</p>
            <figure className="prize-figure">
            <div className="prize-image-container">
                <img src={bestpitch} alt="Best Pitch" className="prize-image" />
            </div>
            <figcaption className="prize-caption"><strong>iPad 10th Generation</strong><br />11-inch Wi-Fi 128GB Silver</figcaption>
          </figure>
          </div>
          <div className="prize-item">
            <h3>💡 Best Overall Project</h3>
            <p>Awarded for a research project that demonstrates excellence across all criteria, including computational rigor, interdisciplinarity, feasibility, and societal impact.</p>
            <figure className="prize-figure">
            <div className="prize-image-container">
            <img src={bestproject} alt="Best Project" className="prize-image" />
            </div>
            <figcaption className="prize-caption"><strong>Apple Watch SE</strong><br />GPS 40mm Midnight Aluminum Case with Ink Sport Loop</figcaption>
          </figure>
          </div>
          <div className="prize-item">
            <h3>🌱 Best Community-Oriented Project</h3>
            <p>Awarded for a research project that most effectively explores AI's role in addressing a specific community's needs, circumstances, or challenges, with a strong focus on social relevance and impact.</p>
            <figure className="prize-figure">
            <div className="prize-image-container">
            <img src={bestcommunityproject} alt="Best Community-Oriented Project" className="prize-image" />
            </div>
            <figcaption className="prize-caption"><strong>AirPods 4</strong><br/> with Active Noise Cancellation	</figcaption>
          </figure>
          </div>
          <p className="assessment-criteria">
          To qualify for the above awards, projects must be original and significantly developed during the event. Projects will be assessed on <strong>computational accuracy</strong>, promise of <strong>social impact</strong>, <strong>feasibility & scalability</strong>, and the degree of <strong>interdisciplinary perspective</strong>. While we understand you might need to step out now and then, only researchers who participate in all key sessions will be connsidered.
          </p>
        </div>
      ),
    },
    {
      id: 'registration',
      title: 'Registration',
      content: (
        <div>
          <p>
          Registration is required to participate in AI4Good. While pre-existing teams are encouraged to apply, all team members must submit their own registration form. Competing teams must span across at least two academic departments. (If your team doesn't satisfy this requirement, you'll be able to find more highly qualified team members at the event!) Teams larger than 4 members will not be permitted to compete.
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
    AI<img src={fourLogo} alt="4" className="logo-4" />GOOD
  </span>
  <span className="title-line2">Research Incubator</span>
</h1>
          <p className="research-incubator-description">
          The AI4Good Research Incubator is a research-focused ideathon (a hackathon-style event) where interdisciplinary teams of researchers of all backgrounds will explore curiosity-driven questions on the intersection of their own interests and the fields of <strong>AI safety</strong> and <strong>social impacts of AI</strong>. Participants collaborate to develop thoughtful, computationally grounded projects, receive mentorship, and compete for prizes—while laying the foundation for impactful research beyond the event.               </p>
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
        <p>This project was supported by the dedication of our sponsors, whom we thank for their support.</p>
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


