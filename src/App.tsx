import React from "react";
import WorkspaceImage from "./images/workspace.jpg";
// import ProfilePicture from "./images/profile.jpg";
// import KeyboardImage from "./images/keyboard.jpg";
// import LaptopScreenshot from "./images/laptop-screenshot.jpg";
// import MobileScreenshot1 from "./images/mobile-screenshot-1.jpg";
// import MobileScreenshot2 from "./images/mobile-screenshot-2.jpg";
// import AppScreenshot1 from "./images/app-screenshot-1.jpg";
// import AppScreenshot2 from "./images/app-screenshot-2.jpg";

const App = () => {
  return (
    <body>
      <main>
        <section className="header">
          <div className="flex">
            <div className="left">
              <p>PORTFOLIO</p>
              <h1>
                ludigi.
                <br />
                work
              </h1>
              <p>TECH CONSULTING STUDIO</p>
            </div>
            <div className="right">
              <img
                src={WorkspaceImage}
                alt="Workspace with computer monitor showing landscape"
              />
            </div>
          </div>
        </section>
        <section>
          <h2>ABOUT ME</h2>
          <div className="flex">
            <div className="left">
              <img src="profile-picture.jpg" alt="a man" />
            </div>
            <div className="right">
              <h3>I am a web and mobile app developer</h3>
              <p>
                I've spent the last 7 years working with businesses of all
                sizes. My full-time roles as a senior software engineer at EPAM
                Systems (NYSE: EPAM) and Expedia Group (NASDAQ: EXPE) have given
                me experience with large-scale operations and complex systems.
              </p>
              <p>
                On the side, I've enjoyed helping local businesses thrive in the
                digital world. From building company websites to providing data
                management solutions.
              </p>
            </div>
          </div>
        </section>

        <section id="my-services">
          <h2>MY SERVICES</h2>
          <div className="flex">
            <div className="left">
              <p>
                I help businesses thrive online with custom digital solutions.
              </p>
              <ul>
                <li>Building tailored websites</li>
                <li>Implementing secure user authentication</li>
                <li>Creating data visualizations</li>
                <li>Developing user-friendly forms</li>
                <li>Managing backend infrastructure</li>
                <li>Ensuring responsive design</li>
                <li>Customizing platforms like WordPress and Shopify</li>
              </ul>
              <p>
                While I excel in development, I don't do graphic design. I'm
                happy to collaborate with your designer to bring your vision to
                life!
              </p>
            </div>
            <div className="right">
              <img
                src="keyboard-image.jpg"
                alt="Close-up of a mechanical keyboard"
              />
            </div>
          </div>
        </section>

        <section id="work">
          <h2>WORK</h2>
          <div className="project">
            <div className="project-images">
              <img
                src="laptop-screenshot.jpg"
                alt="Laptop showing website design"
              />
              <img src="mobile-screenshot-1.jpg" alt="Mobile screenshot 1" />
              <img src="mobile-screenshot-2.jpg" alt="Mobile screenshot 2" />
            </div>
            <div className="flex">
              <h3 className="left">Brand Website</h3>
              <p className="right">
                I worked with a Sino-French Ludic Education company to create
                their brand website. The goal was to showcase their dual focus:
                family fun and tech-enabled learning methods. I developed a
                simple, one-page website to effectively communicate their unique
                approach to education.
              </p>
            </div>
          </div>
          <div className="project flex">
            <div className="left">
              <h3>Full Solution</h3>
              <p>
                I built a mid-scale web app for a Hong Kong-based company
                specializing in exam preparation for students.
              </p>
              <p>
                The project spans the entire tech stack: database management,
                server-side logic, and frontend user interface development.
              </p>
            </div>
            <div className="right">
              <div className="project-images">
                <img
                  src="app-screenshot-1.jpg"
                  alt="Mobile app screenshot showing exam topics"
                />
                <img
                  src="app-screenshot-2.jpg"
                  alt="Mobile app screenshot showing exam question"
                />
              </div>
            </div>
          </div>
          <div className="tech-stacks flex">
            <div className="left">
              <h3>My Tech Stacks</h3>
              <p>
                I'm all about finding the right tech solutions for your unique
                needs. I'll get to know your business, understand your
                challenges, and pick the perfect tools to build something
                amazing for you.
              </p>
            </div>
            <div className="right">
              <div className="tech-logos">
                <img src="typescript-logo.png" alt="TypeScript logo" />
                <img src="nextjs-logo.png" alt="Next.js logo" />
                <img src="docker-logo.png" alt="Docker logo" />
                <img src="nginx-logo.png" alt="NGINX logo" />
                <img src="postgresql-logo.png" alt="PostgreSQL logo" />
                <img src="cloudflare-logo.png" alt="Cloudflare logo" />
              </div>
            </div>
          </div>
        </section>

        <section id="work-with-me">
          <h3>Work with me</h3>
          <div className="contact-info flex">
            <div className="left">
              <img
                src="office-photo.jpg"
                alt="Developer in an office setting"
              />
            </div>
            <div className="right">
              <div className="details">
                <div className="languages">
                  <h4>LANGUAGES</h4>
                  <p>English, Madrian Chinese, Cantonese</p>
                </div>
                <div className="timezone">
                  <h4>TIMEZONE</h4>
                  <p>Asia-pacific GMT+8</p>
                </div>
                <div className="email">
                  <h4>EMAIL</h4>
                  <p>sumtsui@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default App;
