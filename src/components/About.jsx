import React from 'react';

const About = () => (
  <section id="about" data-aos="fade-up">
    <h2>About Me</h2>
    <div className="about-container">
      <img src={process.env.PUBLIC_URL + "/samplepic.jpg"} alt="Profile" className="profile-image" />
      <div className="about-text">
        <p>
          Hi, I'm Jerico — I'm a computer engineering stundent passionate about front-end development and user experience design.
        </p>
        <p className="mb-4 leading-relaxed">
            With a strong foundation in HTML, CSS, and JavaScript, I enjoy translating ideas into functional, elegant
            interfaces. I'm currently exploring backend technologies like Node.js and Express to transition into a
            full-stack developer.
          </p>
<div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🎓 Education</h3>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            <strong>BS in Computer Engineering</strong> – <span className="italic">Technological Institute of the Philippines</span>
          </li>
          <li>Expected Graduation: 2026</li>
        </ul>
      </div>
<div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🎯 Interests</h3>
        <p className="text-gray-700 leading-relaxed">
          Aside from coding, I’m interested in graphic design, tech communities, and open-source projects. I enjoy attending
          tech webinars, contributing to group work, and exploring UI/UX design trends in my spare time.
        </p>
      </div>

      </div>
    </div>
  </section>
);

export default About;