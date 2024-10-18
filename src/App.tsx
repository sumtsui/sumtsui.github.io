import React from "react";
import WorkspaceImage from "./images/workspace.jpg";
import Project1Image1 from "./images/project-1-1.jpeg";
import Project1Image2 from "./images/project-1-2.jpeg";
import Project2Image1 from "./images/project-2-1.jpeg";
import Project2Image2 from "./images/project-2-2.jpeg";
import TechStackImage from "./images/tech-stacks.jpeg";
import MeImage from "./images/ludigi-me.jpg";
import RemoteWorkImage from "./images/remote-work.jpg";
import WorkWithMeImage from "./images/work-with-me.jpeg";

const App = () => {
  return (
    <>
      <main>
        <section id="header" className="flex" style={{ padding: 0 }}>
          <div
            className="left gray"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ marginTop: "100px" }}>PORTFOLIO</p>
            <h1>
              ludigi.
              <br />
              work
            </h1>
            <p>TECH CONSULTING STUDIO</p>
          </div>
          <img
            className="right"
            src={WorkspaceImage}
            style={{ objectFit: "cover" }}
            alt="Workspace with computer monitor showing landscape"
          />
        </section>
        <section id="about-me">
          <div className="flex">
            <div className="left" style={{ minHeight: "400px" }}>
              <h2>ABOUT ME</h2>
              <img src={MeImage} alt="haochen" />
            </div>
            <div className="right">
              <h3>I am a web and mobile app developer</h3>
              <p>
                My name is Haochen <i>(how-chen), he/him</i>. Over the past 7
                years, I've worked with businesses of all sizes, from local
                companies, startups, to publicly traded internaional companies.
                My full-time roles as a senior software engineer at EPAM Systems
                (NYSE: EPAM) and Expedia Group (NASDAQ: EXPE) provided me with
                valuable experience in large-scale operations and complex
                systems. Currently, I work as an independent
                consultant/contractor.
              </p>
            </div>
          </div>
        </section>

        <section id="my-services" className="gray">
          <h2>MY SERVICES</h2>
          <div className="flex">
            <div className="left">
              <p>
                I've enjoyed helping local businesses thrive in the digital
                world. From building company websites to providing data
                management solutions.
              </p>
              <ul>
                <li>Building tailored websites and landing pages</li>
                <li>Building custom web apps</li>
                <li>Implementing secure user authentication</li>
                <li>Creating data visualizations</li>
                <li>Developing user-friendly forms</li>
                <li>Managing backend infrastructure</li>
                <li>Ensuring responsive design</li>
                <li>Customizing platforms like WordPress and Shopify</li>
              </ul>
              <p>
                My consulting background allows me to go beyond simply
                fulfilling client requests. I work closely with clients to
                uncover underlying problems and provide constructive ideas and
                feedback.
              </p>
              <p>
                <i>
                  Something to note: While my strength is in development, I'm
                  not a graphic designer. I'm happy to collaborate with your
                  designer to bring your vision to life.
                </i>
              </p>
            </div>
            <div className="right">
              <img src={RemoteWorkImage} alt="Remote work" />
            </div>
          </div>
        </section>

        <section id="project-1">
          <h2>WORK</h2>
          <div className="project-images flex" style={{ alignItems: "center" }}>
            <img
              className="left"
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
            <div className="right">
              <p>
                I built a cool website for a Sino-French education company
                that's all about mixing fun and tech in learning. Here's what I
                did:
              </p>
              <ul>
                <li>
                  Created a slick one-page website to show off their unique
                  approach to education.
                </li>
                <li>
                  The site has two main themes: family fun and high-tech
                  learning methods. I added a neat background-changing effect
                  that the client really wanted.
                </li>
                <li>
                  Here's the clever part: I set up two different domains (.tech
                  and .fun) for the same site. When you visit the .tech domain,
                  it highlights their techy side of education. Hit up the .fun
                  domain, and it shows off their family-friendly, fun approach.
                </li>
              </ul>
              <p>
                So, one website, two domains, two different vibes - all
                showcasing how this company blends fun and tech in education.
                Pretty cool, right?
              </p>
            </div>
          </div>
        </section>
        <section id="project-2" className="flex">
          <div className="left">
            <h3>Full Solution</h3>
            <p>
              I created a solid web app for a Hong Kong company that helps
              students ace their exams. Here's what I did:
            </p>
            <ul>
              <li>
                Built the whole thing from scratch - database, server stuff, and
                the user interface.
              </li>
              <li>
                Design and set up a sophisticated relational database to cover
                their business.
              </li>
              <li>
                Coded the behind-the-scenes logic to make everything run
                smoothly.
              </li>
              <li>
                Implemented a user-friendly interface that students actually
                enjoy using.
              </li>
              <li>
                Hooked it up with WeChat (it's huge in China) so users can log
                in and pay easily.
              </li>
              <li>
                Bonus: I helped them grab publicly available data from the web
                to beef up their content.
              </li>
            </ul>
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
        <section id="tech-stacks" className="flex">
          <div className="left">
            <h3>My Tech Stacks</h3>
            <p>
              I'm all about finding the right tech solutions for your unique
              needs. I'll get to know your business, understand your challenges,
              and pick the perfect tools to build something amazing for you.
            </p>
          </div>
          <img src={TechStackImage} className="right" alt="Tech Stacks" />
        </section>

        <section
          id="work-with-me"
          className="gray"
          style={{ marginTop: "80px" }}
        >
          <h3>Work with Me</h3>
          <div className="contact-info flex">
            <img
              className="left"
              src={WorkWithMeImage}
              alt="Developer in an office setting"
            />
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
      <footer>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Ludigi. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default App;
