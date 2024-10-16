import React from "react";
import WorkspaceImage from "./images/workspace.jpg";
import PlaceholderImage from "./images/placeholder-image.webp";
import Project1Image1 from "./images/project-1-1.jpeg";
import Project1Image2 from "./images/project-1-2.jpeg";
import Project2Image1 from "./images/project-2-1.jpeg";
import Project2Image2 from "./images/project-2-2.jpeg";
import TechStackImage from "./images/tech-stacks.jpeg";

const App = () => {
  return (
    <body>
      <main>
        <section className="header flex">
          <div
            className="left"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
              style={{ objectFit: "cover" }}
              alt="Workspace with computer monitor showing landscape"
            />
          </div>
        </section>
        <section>
          <h2>ABOUT ME</h2>
          <div className="flex">
            <div className="left">
              <img src={PlaceholderImage} alt="a man" />
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
                src={PlaceholderImage}
                alt="Close-up of a mechanical keyboard"
              />
            </div>
          </div>
        </section>

        <section>
          <h2>WORK</h2>
          <div className="project-images flex" style={{ alignItems: "center" }}>
            <img
              className="left"
              style={{ marginRight: "-10%" }}
              src={Project1Image1}
              alt="Laptop showing website design"
            />
            <img
              className="right"
              style={{ transform: "scale(0.6)" }}
              src={Project1Image2}
              alt="Mobile screenshot"
            />
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
        </section>
        <section className="flex">
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
            <div className="project-images flex">
              <img
                className="left"
                src={Project2Image1}
                style={{ transform: "scale(0.8)" }}
                alt="Mobile app screenshot showing exam topics"
              />
              <img
                className="right"
                src={Project2Image2}
                style={{ transform: "scale(0.8)" }}
                alt="Mobile app screenshot showing exam question"
              />
            </div>
          </div>
        </section>
        <section className="flex" style={{ minHeight: "500px" }}>
          <div className="left">
            <h3>My Tech Stacks</h3>
            <p>
              I'm all about finding the right tech solutions for your unique
              needs. I'll get to know your business, understand your challenges,
              and pick the perfect tools to build something amazing for you.
            </p>
          </div>
          <div className="right">
            <img src={TechStackImage} alt="Tech Stacks" />
          </div>
        </section>

        <section id="work-with-me">
          <h3>Work with me</h3>
          <div className="contact-info flex">
            <div className="left">
              <img
                src={PlaceholderImage}
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
