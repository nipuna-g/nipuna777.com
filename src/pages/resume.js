import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import "./resume.css";

const ResumePage = () => (
  <Layout>
    <Seo title="Resume" />
    <FullWidthContent>
      <button className="print-button" onClick={() => window.print()}>
        Print{" "}
        <span role="img" aria-label="printer">
          🖨️
        </span>
      </button>
      <div className="content resume-container">
        <div className="resume-header">
          <div className="information">
            <div className="header-title">
              <h1>Nipuna Gunathilake</h1>
              <h3>&nbsp;Software Engineer</h3>
            </div>
            <div className="header-items">
              <div className="info-item">
                <strong>Phone:</strong> +85150354
              </div>
              <div className="info-item">
                <strong>Email:</strong> nipuna777@gmail.com
              </div>
            </div>

            <div className="header-items">
              <div className="info-item">
                <strong> Website:</strong>
                <a href="https://nipuna777.com">nipuna777.com</a>
              </div>
              <div className="info-item">
                <strong> LinkedIn:</strong>
                <a href="https://linkedin.com/in/nipuna777">
                  linkedin.com/in/nipuna777
                </a>
              </div>
              <div className="info-item">
                <strong> GitHub:</strong>
                <a href="https://github.com/nipuna777">github.com/nipuna777</a>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section__title">Skills</h2>

          <ul className="section__no-style-list">
            <li>
              Frontend Development:
              <strong>
                HTML/CSS/SASS, Angular, ReactJS, React Native, Flutter
              </strong>
            </li>
            <li>
              Programming Languages:
              <strong>JavaScript, TypeScript, Dart</strong>
            </li>
            <li>
              Testing: <strong>Karma, Jasmine, Selenium, Cypress, Detox</strong>
            </li>
            <li>
              Backend Development: <strong>Firebase, NodeJS</strong>
            </li>
            <li>
              Other Tools & Technologies:{" "}
              <strong>Git/Github, Figma, Gatsby, AWS, MapboxGL</strong>
            </li>
          </ul>
        </div>

        <div className="section section-work">
          <h2 className="section__title">Work Experience</h2>

          <div className="section-info section-info--no-underline">
            <div className="section-info__time">
              2021-Feb <br /> Present
            </div>
            <div className="section-info__desc">
              <div className="section-info__desc__title">
                <h3 className="company">Beam Mobility Holdings Pte. Ltd</h3>
                <h3 className="designation">Senior Frontend Engineer</h3>
              </div>
            </div>
          </div>

          <div className="section-info">
            <div className="section-info__time">
              2019-Apr <br /> 2021-Feb
            </div>
            <div className="section-info__desc">
              <div className="section-info__desc__title">
                <h3 className="company">Beam Mobility Holdings Pte. Ltd</h3>
                <h3 className="designation">Frontend Engineer</h3>
              </div>
              <div className="section-info__desc__content">
                <ul>
                  <li>
                    Completed UI overhaul of the <strong>React Native</strong>{" "}
                    application by using re-usable styled-components.
                  </li>
                  <li>
                    Integrated <strong>MapboxGL</strong> maps to allow for
                    customizable interactive maps to match designs
                  </li>
                  <li>
                    Added <strong>TypeScript</strong> support and end to end
                    tests using <strong>Detox</strong> helping cut down on
                    testing time
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-info">
            <div className="section-info__time">
              2017-Feb <br /> 2019-Mar
            </div>
            <div className="section-info__desc">
              <div className="section-info__desc__title">
                <h3 className="company">IFS R&D International (Pvt) Ltd</h3>
                <h3 className="designation">Software Engineer</h3>
              </div>
              <div className="section-info__desc__content">
                <ul>
                  <li>
                    Developed a complex <strong>Angular</strong> client for a
                    planning and scheduling optimization application
                  </li>
                  <li>
                    Created and maintained a complete suite of automated tests
                    using <strong>Selenium</strong>
                  </li>
                  <li>
                    Implemented lazy loaded modules for the single page
                    application making it load 20% faster
                  </li>
                  <li>
                    Assisted the onboarding process of new engineers into the
                    team
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-info">
            <div className="section-info__time">
              2015-Nov <br /> 2017-Jan
            </div>
            <div className="section-info__desc">
              <div className="section-info__desc__title">
                <h3 className="company">
                  Information Systems Associates (Pvt) Ltd
                </h3>
                <h3 className="designation">User Interface Engineer</h3>
              </div>
              <div className="section-info__desc__content">
                <ul>
                  <li>
                    Re-built major components of the internet booking system
                    with <strong>AngularJS</strong> and associated technologies
                  </li>
                  <li>
                    Delivered an <strong>Ionic</strong> mobile application that
                    has over 4.5/5 ratings on Play Store utilizing the same code
                    base
                  </li>
                  <li>
                    Produced a mobile website with theming support in less than
                    a month through effective code re-use
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-info">
            <div className="section-info__time">
              2014-July <br /> 2015-Feb
            </div>
            <div className="section-info__desc">
              <div className="section-info__desc__title">
                <h3 className="company">Bank of Ceylon</h3>
                <h3 className="designation">Software Engineering Intern</h3>
              </div>
              <div className="section-info__desc__content">
                <ul>
                  <li>
                    Worked on a Hybrid Mobile Application and an SMS mobile
                    banking application.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-info">
            <div className="section-info__time">
              2013-Nov <br /> 2014-Mar
            </div>
            <div className="section-info__desc">
              <div className="section-info__desc__title">
                <h3 className="company">IFS R&D International (Pvt) Ltd</h3>
                <h3 className="designation">Software Engineering Intern</h3>
              </div>
              <div className="section-info__desc__content">
                <ul>
                  <li>
                    Developed applications for the Windows 8 Metro and Windows
                    Phone 8 platforms.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="section section-achivements">
          <h2 class="section__title">Achievements</h2>

          <h3 class="section__sub-title">Projects</h3>
          <ul>
            <li>
              Created a GTFS-RT Validator as part of Google Summer of Code 2015
              - Built a validator for General Transit Feed Real-Time
              Specifications
            </li>
            <li>
              Developed Train Tracking application as part of 3rd Year Project
            </li>
            <li>
              Developed a Customer Information System as the PGD project for BCS
              using the C# Language and the .Net framework
            </li>
          </ul>

          <h3 class="section__sub-title">Competitions</h3>
          <ul>
            <li>Second runners-up of TadHack 2017</li>
            <li>Winners of HackaDev 2015</li>
            <li>LAN Hack 2015 Top 5 Teams</li>
          </ul>
        </div>

        <div class="section section-education">
          <h2 class="section__title">Education</h2>
          <div class="section-info">
            <div class="section-info__time">2011-2016</div>
            <div class="section-info__desc">
              <div class="section-info__desc__title">
                <h3 class="company">University of Kelaniya</h3>
                <h3 class="designation">BSc. In MIT(sp. In IT)</h3>
              </div>
              <div class="section-info__desc__content">
                Completed BSc. In Management and Information Technology (Sp.
                Information Technology) with a <strong>GPA of 3.85/4.0</strong>
              </div>
            </div>
          </div>
          <div class="section-info">
            <div class="section-info__time">2011-2013</div>
            <div class="section-info__desc">
              <div class="section-info__desc__title">
                <h3 class="company">BCS Qualifications</h3>
                <h3 class="designation">Professional Graduate Diploma</h3>
              </div>
              <div class="section-info__desc__content">
                Completed British Computing Society (BCS) Higher Educational
                Qualifications Professional Graduate Diploma(PGD).
              </div>
            </div>
          </div>

          <div class="section-info">
            <div class="section-info__time">2001-2010</div>
            <div class="section-info__desc">
              <div class="section-info__desc__title">
                <h3 class="company">Royal College, Colombo</h3>
                <h3 class="designation">A/L, O/L</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullWidthContent>
  </Layout>
);
export default ResumePage;
