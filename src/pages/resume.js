import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import "./resume.scss";
import ReactMarkdown from "react-markdown";

const occupations = [
  {
    startDate: new Date(2019, 3),
    designation: "Senior Frontend Engineer",
    organization: "Beam Mobility (SG)",
  },
  {
    startDate: null,
    endDate: null,
    designation: "Frontend Engineer",
    details: `Beam is APAC's leading micromobility firm. Headquartered in Singapore, Beam operates over 30,000 vehicles across Australia, New Zealand, South Korea, and Malaysia. 
- Led the development of the subscription feature bringing in ~10% of daily revenue. Collaborated with product managers, designers and developers to drive the project from RFC stage to completion.
- Created a library of re-usable components using **styled-components** cutting down UI development time and reducing rework by up-to 50%. Utilized this library to overhaul the look and feel of the UI successfully in two weeks.
- Introduced new technologies to the frontend stack including **TypeScript, MapboxGL, React hooks, React Testing Library** 
to the organization improving developer efficiency and happiness`,
  },
  {
    startDate: new Date(2017, 1),
    endDate: new Date(2019, 2),
    designation: "Software Engineer",
    organization: "IFS R&D International (LK)",
    details: `- Developed a complex **Angular** client for a planning and scheduling optimization application
- Created and maintained a complete suite of automated tests using **Selenium**
- Implemented lazy loaded modules for the single page application making it load 20% faster
- Assisted the onboarding process of new engineers into the team`,
  },
  {
    startDate: new Date(2015, 10),
    endDate: new Date(2017, 0),
    designation: "User Interface Engineer",
    organization: "AccelAero (LK)",
    details: `- Re-built major components of the internet booking system with **AngularJS** and associated technologies
- Delivered an **Ionic** mobile application that has over 4.5/5 ratings on Play Store utilizing the same code base
- Produced a mobile website with theming support in less than a month through effective code re-use`,
  },
  // {
  //   startDate: new Date(2014, 6),
  //   endDate: new Date(2015, 1),
  //   designation: "Software Engineering Intern",
  //   organization: "Bank of Ceylon",
  //   details: `Worked on a Hybrid Mobile Application and an SMS mobile banking application.`,
  // },
  {
    startDate: new Date(2013, 10),
    endDate: new Date(2014, 2),
    designation: "Software Engineering Intern ",
    organization: "IFS R&D International (LK)",
    details: `Developed applications for the Windows 8 Metro and Windows Phone 8 platforms`,
  },
];

const qualifications = [
  {
    startDate: new Date(2011, 0),
    endDate: new Date(2016, 0),
    designation: "BSc. In MIT(sp. In IT)",
    organization: "University of Kelaniya",
    details: `Completed BSc. In Management and Information Technology (Sp. Information Technology) with a GPA of **3.85/4.0**`,
  },
  {
    startDate: new Date(2011, 0),
    endDate: new Date(2013, 0),
    designation: "Professional Graduate Diploma",
    organization: "BCS Qualifications",
    details: `Completed British Computing Society (BCS) Higher Educational Qualifications Professional Graduate Diploma(PGD).`,
  },
];

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
              <h2>Nipuna Gunathilake</h2>
            </div>
            <div className="header-items">
              <div className="info-item info-item--left">
                <strong>Phone:</strong> +6585150354
              </div>
              <div className="info-item info-item--left">
                <strong>Email: </strong> nipuna777@gmail.com
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
            </div>
          </div>
        </div>

        <div className="section section-work">
          <SectionHeader title="Work Experience" />

          {occupations.map((occupation, i) => (
            <OccupationSection
              occupation={occupation}
              isLastItem={i === occupations.length - 1}
              key={`${occupation.organization}-${occupation.designation}`}
            />
          ))}
        </div>

        <div className="section section-education">
          <SectionHeader title="Education" />

          {qualifications.map((qualification, i) => (
            <EducationSection
              qualification={qualification}
              isLastItem={i === qualifications.length - 1}
              key={`${qualification.organization}-${qualification.designation}`}
            />
          ))}
        </div>

        <div className="section">
          <SectionHeader title="Languages and Technologies" />

          <ul className="section__no-style-list">
            <li>
              Frontend Development:
              <strong>
                HTML/CSS/SASS, JavaScript, TypeScript, ReactJS, React Native,
                Angular
              </strong>
            </li>
            <li>
              Backend Development: <strong>Firebase, NodeJS/ Express.js</strong>
            </li>
            <li>
              Other Tools & Technologies:{" "}
              <strong>
                Git/Github, Figma, Gatsby, AWS, MapboxGL, CI/CD, Cypress,
                Selenium, Jest
              </strong>
            </li>
          </ul>
        </div>

        <div className="section section-achivements">
          <SectionHeader title="Achievements" />

          <h3 className="section__sub-title">Projects</h3>
          <ul>
            <li>
              Created a GTFS-RT Validator as part of Google Summer of Code 2015
              - Built a validator for General Transit Feed Real-Time
              Specifications
            </li>
            <li>
              Developed Train Tracking application as part of 3rd Year Project
            </li>
            {/* <li>
              Developed a Customer Information System as the PGD project for BCS
              using the C# Language and the .Net framework
            </li> */}
          </ul>

          <h3 className="section__sub-title">Competitions</h3>
          <ul>
            <li>
              Participated in hackathons: Second runners-up of TadHack 2017,
              Winners of HackaDev 2015, LAN Hack 2015 Top 5 Teams
            </li>
          </ul>
        </div>
      </div>
    </FullWidthContent>
  </Layout>
);

const SectionHeader = ({ title }) => (
  <h2 className={`section-header`}>{title}</h2>
);

const SubSectionTitle = ({
  startDate,
  endDate,
  designation,
  organization,
  hideMonth,
}) => {
  const format = !hideMonth
    ? {
        year: "numeric",
        month: "short",
      }
    : {
        year: "numeric",
      };
  const dateFormatter = Intl.DateTimeFormat("en-GB", format);
  const hideDates = !startDate && !endDate;

  return (
    <div className="sub-section-title">
      {hideDates ? null : (
        <span className="duration">
          {dateFormatter.format(startDate)} -{" "}
          {endDate ? dateFormatter.format(endDate) : "Present"}
        </span>
      )}
      <span className="company">{organization}</span>
      <span className="designation">{designation}</span>
    </div>
  );
};

const OccupationSection = ({ occupation, isLastItem }) => (
  <div
    className={`sub-section ${isLastItem ? "sub-section--last-item" : ""} ${
      !occupation.details ? "sub-section--empty-item" : ""
    }`}
  >
    <SubSectionTitle {...occupation} />
    <ReactMarkdown>{occupation.details}</ReactMarkdown>
  </div>
);

const EducationSection = ({ qualification, isLastItem }) => (
  <div className={`sub-section ${isLastItem ? "sub-section--last-item" : ""}`}>
    <SubSectionTitle {...qualification} hideMonth={true} />
    <ReactMarkdown>{qualification.details}</ReactMarkdown>
  </div>
);

export default ResumePage;
