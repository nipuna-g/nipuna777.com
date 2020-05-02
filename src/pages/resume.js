import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import "./resume.css";

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <FullWidthContent>
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

          <ul>
            <li>
              Web Development:{" "}
              <strong>HTML, CSS, SASS, AngularJS, Angular, React</strong>
            </li>
            <li>
              Programming Languages:{" "}
              <strong>JavaScript, TypeScript, Java, C#</strong>
            </li>
            <li>
              Testing: <strong>Karma, Jasmine, Selenium</strong>
            </li>
            <li>
              Backend development: <strong>Firebase, NodeJS</strong>
            </li>
            <li>
              Version Control: <strong>Git, GitLab, GitHub</strong>
            </li>
          </ul>

          <hr />
          <ul>
            <li>Excellent Communication skills in English and Sinhalese</li>
            <li>
              Team player who is highly motivated to learn the latest
              technologies
            </li>
          </ul>
        </div>

        <div className="section section-work">
          <h2 className="section__title">Work Experience</h2>

          <div className="section-info">
            <div className="section-info__time">2019-April - Present</div>
            <div className="section-info__desc">
              <div className="section-info__desc__title">
                <h3 className="company">Beam</h3>
                <h3 className="designation">Frontend Engineer</h3>
              </div>
              <div className="section-info__desc__content"></div>
            </div>
          </div>

          <div className="section-info">
            <div className="section-info__time">2017-Feb - 2019-March</div>
            <div className="section-info__desc">
              <div className="section-info__desc__title">
                <h3 className="company">IFS</h3>
                <h3 className="designation">Software Engineer</h3>
              </div>
              <div className="section-info__desc__content">
                Working on a complex Angular client while creating and
                maintaining a complete suite of automated tests.
              </div>
            </div>
          </div>

          <div className="section-info">
            <div className="section-info__time">2014-Nov - 2016-Jan</div>
            <div className="section-info__desc">
              <div className="section-info__desc__title">
                <h3 className="company">AccelAero</h3>
                <h3 className="designation">User Interface Engineer</h3>
              </div>
              <div className="section-info__desc__content">
                Built a ticket booking application with AngularJS and associated
                technologies. Created Ionic mobile application and mobile sites.
              </div>
            </div>
          </div>

          <div className="section-info">
            <div className="section-info__time">2014-July - 2015-Feb</div>
            <div className="section-info__desc">
              <div className="section-info__desc__title">
                <h3 className="company">Bank of Ceylon</h3>
                <h3 className="designation">Software Engineering Intern</h3>
              </div>
              <div className="section-info__desc__content">
                Worked on a Hybrid Mobile Application and an SMS mobile banking
                application. PhoneGap was used for the Android Application and
                the web services were done with Java and Jersey.
              </div>
            </div>
          </div>

          <div className="section-info">
            <div className="section-info__time">2013-Nov - 2014-Mar</div>
            <div className="section-info__desc">
              <div className="section-info__desc__title">
                <h3 className="company">IFS</h3>
                <h3 className="designation">Software Engineering Intern</h3>
              </div>
              <div className="section-info__desc__content">
                Developed an applications for the Windows 8 Metro and Windows
                Phone 8 platforms.
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
              - Built a validator for General Transit Feed Real Time
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
            <div class="section-info__time">2011-2013</div>
            <div class="section-info__desc">
              <div class="section-info__desc__title">
                <h3 class="company">BCS Qualifications</h3>
                <h3 class="designation">Professional Graduate Diploma</h3>
              </div>
              <div class="section-info__desc__content">
                Passed British Computing Society (BCS) Higher Educational
                Qualifications Professional Graduate Diploma(PGD) in IT with the
                PGD level.
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
