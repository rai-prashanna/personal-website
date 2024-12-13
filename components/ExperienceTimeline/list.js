import React from "react";
import ReactIcon from "@site/static/img/techs/react.svg";
import JSIcon from "@site/static/img/techs/js.svg";
import TsIcon from "@site/static/img/techs/typescript.svg";
import NodeIcon from "@site/static/img/techs/nodejs.svg";
import JavaEEIcon from "@site/static/img/techs/jakarta-ee.svg";
import EricssonIcon from "@site/static/images/ericsson-icon.svg";
import BrokerwayIcon from "@site/static/images/brokerway.svg";
import SparkIcon from "@site/static/img/techs/spark.svg";
import PlaywrightIcon from "@site/static/img/techs/playwright.svg";
import QAIcon from "@site/static/img/techs/quality-assurance.svg";
import JavaIcon from "@site/static/img/techs/java.svg";
import UUIcon from "@site/static/img/UU_logo_color.svg";
import DockerIcon from "@site/static/img/techs/docker.svg";
import AzureAssociateIcon from "@site/static/img/techs/microsoft-certified-associate-badge.svg";
import AngularIcon from "@site/static/img/techs/angular.svg";

export default [
  {
    date: "2 Sep 2024 - Present",
    role: "Azure Data Engineer Associate",
    location: "Sweden",
    website: "https://knightec.se/",
    icon: <AzureAssociateIcon />,
    description: () => (
      <ul>
        <li>
        Obtained certification on Microsoft Certified: Azure Data Engineer Associate within 2 months. 
        </li>
        <li>Preparing for next certification Azure Developer Associate.</li>
      </ul>
    ),
  },
  {
    date: "1 Jul 2023 - 1 Sep 2024",
    role: "Full stack developer",
    location: "Sweden",
    website: "https://www.brokerway.com/",
    icon: <AngularIcon />,
    description: () => (
      <ul>
        <li>
        My responsibilities are developing a frontend view in angular application and creating REST API‑based Jakarta EE application for STX product that handles post‑trade processes like clearing settlement, and corporate actions. Since our team is small, my assignment also involved providing first-line support and collecting user requirements from stakeholders.
        </li>
        <li>My work involves with Jakarta EE, AngularJS, Tortoise SVN, Erwin.</li>
      </ul>
    ),
  },
  {
    date: "1 Feb 2023 - 31 July 2023",
    role: "Master Thesis ‑ Cloud Native Authorization",
    location: "Sweden",
    website: "https://www.ericsson.com/en",
    icon: <JavaIcon />,
    description: () => (
      <ul>
        <li>
          The thesis investigates the benefit of OPA over a specialized policy engine to existing cloud‑native applications named EMC and OMC running
          in a private cloud
        </li>
        <li>
          It was observed that there was almost small difference in latency i.e 10% slower in latency when service was integrated with OPA as
          SideCar. But in the case of fine‑grained authorization, as data grows, Wasm‑based system integration performs well i.e 30% faster than
          the existing authorization system.
        </li>
        <li>The thesis project involves Kubernetes, Open Policy agent, and some Java Security and Python Security programming, threat modeling when
          integrating with OPA with existing service.</li>
          <li> 
          <a href="https://iamprashannarai.github.io/myPresentations/">link to my Presentation can be found</a> 
          </li>
      </ul>
    ),
  }
  ,
  {
    date: "Jan 2023 - Apr 2023",
    role: "Teaching assistant - Uppsala University",
    location: "Uppsala, Sweden",
    website: "https://www.uu.se/",
    icon: <SparkIcon />,
    description: () => (
      <ul>
        <li>
          participation in labs and tutorials/lessons of Hadoop, Spark, and Openstack, grading of assignments, answering student’s questions, and su‑
          pervision of student projects in the Data Engineering course.
        </li>
      </ul>
    ),
  },
  {
    date: "Oct 2022 - Jan 2023",
    role: "Test Automation Engineer - Dewire by Knightec",
    location: "Stockholm, Sweden",
    website: "https://knightec.se/",
    icon: <PlaywrightIcon />,
    description: () => (
      <ul>
        <li>
          Test automation of React application using Playwright. The application is a service portal for Boule’s hematology analyzer BM‑850 and eventu‑
          ally the newer BM‑900 model.
        </li>
      </ul>
    ),
  }
  ,
  {
    date: "Jun 2022 - Aug 2022",
    role: "Associate Engineer - Dewire by Knightec",
    location: "Sundsvall, Sweden",
    website: "https://knightec.se/",
    icon: <JavaIcon />,
    description: () => (
      <ul>
        <li>
          Summer Job
        </li>
        <li>maintaining Angular project</li>
        <li>Unit‑testing and Integration testing of Spring boot Application. The application is service gateway to integrate Telia numbers to Microsoft teams
        </li>
        <li> writing Fullstack application to unified view of swagger of microservices</li>
      </ul>
    ),
  },
  {
    date: "Mar 2020 - Jun 2020",
    role: "REMOTE SOFTWARE CONSULTANT (QUALITY ASSURANCE ENGINEER)",
    location: "Sweden",
    website: "https://www.xensam.com/",
    icon: <QAIcon />,
    description: () => (
      <ul>
        <li>
        Working as QA including writing unit tests, manual testing
        </li>
        <li>
        Spinning up testing environments with HyperV, KVM, Active Directory Domain controller
        </li>
        <li>
        Test data management with open source AD‐lab generator
        </li>
      </ul>
    ),
  },
  {
    date: "Aug 2019 - Sep 2019",
    role: "QUALITY ASSURANCE ENGINEER AND TESTER",
    location: "Sweden",
    website: "https://www.xensam.com/",
    icon: <QAIcon />,

    description: () => (
      <ul>
        <li>
        Designing a test strategy/test plan.
        </li>
        <li>
        Reporting software defects and work with development team to resolve them.
        </li>
        <li>Documenting and communicating findings and software quality improvements.</li>
      </ul>
    ),
  },
  {
    date: "Jan 2018 - Aug 2018",
    role: "SOFTWARE ENGINEER (DevOps Engineer)",
    location: "Kathmandu, Nepal",
    website: "https://fusemachines.com/",
    icon: <DockerIcon/>,

    description: () => (
      <ul>
        <li>
        Create continuous delivery pipeline with Jenkinsfile.
        </li>
        <li>
        Customize Dockerfile of Jupyterhub notebook to allow multi-user saving their document.
        </li>
        <li>Create Orchestration for ingestion pipeline environment with help of ansible.</li>
        <li>Automating deployment of Linux applications and system configurations</li>
      </ul>
    ),
  },
  {
    date: "Aug 2016 - Dec 2017",
    role: "SOFTWARE ENGINEER ASSOCIATE (Java Developer)",
    location: "Kathmandu, Nepal",
    website: "https://fusemachines.com/",
    icon: <JavaIcon/>,

    description: () => (
      <ul>
        <li>
        Part of a team with the responsibility of creating service of automation of realistic performance testing.
        </li>
        <li>Created Rest Api solutions for bussiness logic in Spring boot framework.</li>
        <li>Reviewing and resolving issues and software bugs.</li>
      </ul>
    ),
  }

];
