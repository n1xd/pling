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
        <p>🏛️ All key sessions of the <strong>AI4Good Research Incubator</strong> will take place in the <strong>Ben Franklin Room, Houston Hall</strong> .
        <br /><br />

        🍕 This will also be the spot for <strong>lunch and dinner</strong>, with <strong>snacks and beverages</strong> available to all registered participants throughout the day.
        <br /><br />
        
        ⏰ <strong>Registration opens at 10:00 AM</strong> on <strong>Saturday, April 19, 2025</strong>. The event will run through the day, with <strong>final decisions announced before 7:30 PM</strong>.
        
        <br /><br />
        
        🥂 After the event concludes, all participants are invited to join us for a <strong>networking reception</strong> to wrap up the day.
        
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
            <figcaption className="prize-caption"><strong>Apple Watch SE</strong><br />GPS 40mm Midnight Aluminum Case with Ink Sport Loop<br /><strong>FOR ALL TEAM MEMBERS</strong></figcaption>
          </figure>
          </div>
          <div className="prize-item">
            <h3>🌱 Best Community-Oriented Project</h3>
            <p>Awarded for a research project that most effectively explores AI's role in addressing a specific community's needs, circumstances, or challenges, with a strong focus on social relevance and impact.</p>
            <figure className="prize-figure">
            <div className="prize-image-container">
            <img src={bestcommunityproject} alt="Best Community-Oriented Project" className="prize-image" />
            </div>
            <figcaption className="prize-caption"><strong>AirPods 4</strong><br/> with Active Noise Cancellation<br /><strong>FOR ALL TEAM MEMBERS</strong>	</figcaption>
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
          <p> 📝 <strong>Pre-registration is required</strong> to participate in AI4GOOD.
<br /><br />

👥 While pre-existing teams are welcome to apply, <strong>each team member must complete their own registration form</strong>.

<br /><br />

🧠 Competing teams must include members from <strong>at least two different academic departments</strong>.
 (Don't worry if you can't find teammates from across departments, there’ll be opportunities to connect with others at the event!)

<br /><br />

🔢 <strong>Teams of more than four members will not be allowed to compete</strong>.

<br /><br />

🚨 <strong>Registration will close on April 12, 11.59PM</strong>.</p>

          <a href="https://forms.gle/hURpKmt6K8RtAz9K8" target="_blank" rel="noopener noreferrer" className="inc-register-button">
            Register by April 12!
          </a>
        </div>
      ),
    },
    {
      id: 'FAQ',
      title: 'FAQ',
      content: (
        <div>
          <div>
          <p style={{ marginBottom: '1.5em', fontSize: '0.8em' }}><strong style={{ fontSize: '1.25em' }}>📍 Do I really have to be in the Ben Franklin Room all day?</strong><br />
      Nope! You only need to be there for key moments like check-ins, pitches, and final presentations. The rest of the time, you're free to collaborate anywhere around Houston Hall or campus. (Food will be served in the Ben Franklin Room, though;)</p>

      <p style={{ marginBottom: '1.5em', fontSize: '0.8em' }}><strong style={{ fontSize: '1.25em' }}>⚖️ Is this more of a hackathon or a research event?</strong><br />
      It’s a bit of both! Think of it as a research-focused hackathon where you work in teams to explore questions that interest you about AI’s safety and societal impact.</p>

      <p style={{ marginBottom: '1.5em', fontSize: '0.8em' }}><strong style={{ fontSize: '1.25em' }}>🌟 Do I need to come with a team?</strong><br />
      Not at all! You can come solo and either have folks join the project you pitch or get behind someone else's idea yourself.</p>

      <p style={{ marginBottom: '1.5em', fontSize: '0.8em' }}><strong style={{ fontSize: '1.25em' }}>💻 Do I need technical experience to participate?</strong><br />
      Nope! All backgrounds are welcome. Tech skills are great—but so are your insights on ethics, governance, education, design, social changes, mind, language, and more. We encourage interdisciplinary collaboration and will bring in mentors to support you.</p>

      <p style={{ marginBottom: '1.5em', fontSize: '0.8em' }}><strong style={{ fontSize: '1.25em' }}>🍽️ Will there be food?</strong><br />
      Yes! Lunch and dinner will be served during the event. We will also accomodate as many diatery restrictions as possible. Vegan, kosher, and allergen-friendly food will be available.</p>

      <p style={{ marginBottom: '1.5em', fontSize: '0.8em' }}><strong style={{ fontSize: '1.25em' }}>🚀 Can my project continue after the event?</strong><br />
      Absolutely! This event is designed to spark research ideas. We’d love to see projects grow into papers, prototypes, or even collaborations down the line.</p>
    </div>
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


