import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FullWidthContent from "../components/full-width-content";
import "./resume.scss";
import ReactMarkdown from "react-markdown";

const occupations = [
  {
    startDate: new Date(2021, 9),
    designation: "Staff Frontend Engineer",
    organization: "ExpressVPN (SG)",
    details: `ExpressVPN is a leading VPN service provider enabling users to browse the internet privately.
- Architected and led the implementation of a web applications platform that allowed moving legacy pages to React. This platform has enabled teams to ship experiments and features up to 50% faster.
    - Initialized an Nx monorepo to host frontend libraries and applications that allowed for better code re-use and faster development. Cutting down duplicated CSS/JS by up-to 30%.
    - Enforced good practices by setting up formatters, linters, type checkers(TypeScript with auto-generated OpenAPI clients), & test runners(Playwright, Jest, React Testing Library), greatly improving the developer experience.
    - Implemented CI/CD pipelines that run on every PR creating preview environments & Storybook making it easier to test and review changes.
- Brought in new engineering processes including RFCs and tech designs, formalized pair-programming, and tech-debt management. These processes along with mentoring helped improve the team's productivity and happiness.
- Worked with cross-functional teams to ship multiple experiments improving the conversion rate by up to 20%.`,
  },
  {
    endDate: new Date(2021, 9),
    startDate: new Date(2019, 3),
    designation: "Senior Frontend Engineer",
    organization: "Beam Mobility (SG)",
    details: `Beam is APAC's leading micromobility firm. Headquartered in Singapore, Beam operates over 30,000 vehicles across Australia, New Zealand, South Korea, and Malaysia. 
- Led the development of a subscription feature bringing in ~10% of daily revenue. Collaborated with product managers, designers and developers to drive the project from RFC stage to completion.
- Created a library of re-usable components cutting down UI development time by upto 50%. Utilized this library to overhaul the look and feel of the UI successfully in two weeks while cutting down on the overall CSS.
- Analyzed performance issues on the mobile application and helped improve the application load times and rendering times as the operations were scaled.
- Took ownership of the maintenance of a legacy operations dashboard application written in HTML, CSS and JavaScript. Ensured that the application remained stable we scaled while making it more testable.`,
  },
  {
    startDate: new Date(2017, 1),
    endDate: new Date(2019, 2),
    designation: "Software Engineer",
    organization: "IFS R&D International (LK)",
    details: `- Developed a large-scale Angular client for a planning and scheduling optimization product leveraging advanced HTML/CSS and JavaScript features.
- Created and maintained a complete suite of automated tests using Selenium making the application more stable and testable cutting down regressions by 70%.
- Ensured that the application was accessible for all users by implementing accessibility features and testing it against multiple browsers and devices,`,
  },
  {
    startDate: new Date(2015, 10),
    endDate: new Date(2017, 0),
    designation: "User Interface Engineer",
    organization: "AccelAero (LK)",
    details: `- Re-built major components of the internet booking system with AngularJS and associated technologies (HTML, CSS with Sass and JavaScript)
- Delivered an Ionic mobile application that has over 4.5/5 ratings on Play Store utilizing the same code base
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
    designation: "Software Engineering Intern",
    organization: "IFS R&D International (LK)",
    details: `- Developed applications for the Windows 8 Metro and Windows Phone 8 platforms`,
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

            <div class="header-inline-items">
              <span>Singapore</span>
              <span>+6585150354</span>
              <a style={{ display: "inline" }} href="mailto:nipuna@nipuna.dev">
                nipuna@nipuna.dev
              </a>
              <a style={{ display: "inline" }} href="https://nipuna.dev">
                nipuna.dev
              </a>
              <a
                style={{ display: "inline" }}
                href="https://linkedin.com/in/nipuna-g"
              >
                linkedin.com/in/nipuna-g
              </a>
            </div>
          </div>
        </div>

        <div className="section section-work">
          <SectionHeader title="Summary" />

          <p>
            <b>Staff Frontend Engineer</b> with over 8 years of experience in
            building consumer-facing web applications. A pragmatic programmer
            committed to delivering products that delight the users by working
            with cross-functional teams. Passionate about building a good
            engineering culture by setting up processes, mentoring and
            empowering team members to do their best work.
          </p>
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
              Frontend Development:{" "}
              <strong>
                HTML/CSS/Sass, JavaScript, TypeScript, React, React Native,
                Angular, AngularJS NextJS, Redux, ChakraUI, Styled Components,
                Tailwind, MapboxGL, Storybook
              </strong>
            </li>
            <li>
              Backend Development: <strong>Firebase, NodeJS/ Express.js</strong>
            </li>
            <li>
              Other Tools & Technologies:{" "}
              <strong>
                Git/GitHub, Figma, AWS, CI/CD, Cypress, Selenium, Jest, Nx
              </strong>
            </li>
          </ul>
        </div>

        <div className="section section-achivements">
          <SectionHeader title="Other Achievements" />

          <h3 className="section__sub-title">Projects</h3>
          <ul>
            <li>
              Contributed to the{" "}
              <a href="https://github.com/LSFLK/MedicinesforLK">
                MedicinesforLK
              </a>{" "}
              project - A web application to connect donors and recipients of
              medicines in Sri Lanka
            </li>
            <li>
              Created a GTFS-RT Validator as part of Google Summer of Code 2015
              - Built a validator for General Transit Feed Real-Time
              Specifications using Java & JS for the UI -{" "}
              <a href="https://github.com/CUTR-at-USF/gtfs-realtime-validator">
                https://github.com/CUTR-at-USF/gtfs-realtime-validator
              </a>
            </li>
            {/* <li>
              Developed Train Tracking application as part of 3rd Year Project
            </li> */}
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
      <span>
        <span className="designation">{designation}</span> at{" "}
        <span className="company">{organization}</span>
      </span>
      {hideDates ? null : (
        <span className="duration">
          {dateFormatter.format(startDate)} -{" "}
          {endDate ? dateFormatter.format(endDate) : "Present"}
        </span>
      )}
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
