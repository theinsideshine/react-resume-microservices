import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import  DribbbleIcon  from '../components/Icon/DribbbleIcon';
import FacebookIcon from '../components/Icon/FacebookIcon';
//import FaYoutubeSquare from 'react-icons/fa'


//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume Tavolaro Pablo',
  description: "Resume Tavolaro Pablo",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Pablo Tavolaro.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Buenos Aires based <strong className="text-stone-100">Electronic Engineer</strong>, currently working
        at <strong className="text-stone-100">Back end development</strong> helping the integration of services in the cloud of Google Cloud Platform.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time , you can catch me plucking my <strong className="text-stone-100">piano</strong>,
        <strong className="text-stone-100">guitar</strong>, and recording my songs.{' '}
        <strong className="text-stone-100"></strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume_ptavolaro.pdf',
      text: 'Resume-en',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: '/assets/cv_ptavolaro.pdf',
      text: 'Resume-sp',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: true,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Professional in the area of electronic engineering with more than 15 years researching and
  developing electronics, Sdk, Api, applications and firmware for the national 
  and international market. I am currently working as a backend java developer.`,
  aboutItems: [
    {label: 'Location', text: 'Buenos Aires, Argentina', Icon: MapIcon},
    {label: 'Age', text: '46', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Argentina', Icon: FlagIcon},
    {label: 'Interests', text: 'Technology, Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Mercantile Marine University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'CDT Soluciones Tecnologicas', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 4,
      },
     
      {
        name: 'Spanish',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React & Angular',
        level: 4,
      },
      {
        name: 'Typescript',
        level: 4,
      },

      {
        name: 'Js',
        level: 5,
      },
      {
        name: 'Mui & Bootstrap',
        level: 4,
      },
      
     
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'SpringBoot',
        level: 6,
      },
      {
        name: 'Spring data jpa',
        level: 6,
      },
      {
        name: 'Spring security',
        level: 6,
      },
    ],
  },
  {
    name: 'Data base',
    skills: [
      {
        name: 'Sql server',
        level: 5,
      },
      {
        name: 'My sql',
        level: 5,
      },
      {
        name: 'Liquid base',
        level: 5,
      },
    ],
  },
  {
    name: 'Embedded electronics',
    skills: [
      {
        name: 'C',
        level: 10,
      },
      {
        name: 'C++',
        level: 5,
      },
      {
        name: 'Phyton & Flask',
        level: 4,
      },
    ],
  },
  {
    name: 'Compiler',
    skills: [
      {
        name: 'Eclipse',
        level: 8,
      },
      {
        name: 'Intellij',
        level: 8,
      },
      {
        name: 'NetBeans',
        level: 4,
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Juint5 and Mockito',
    description: 'Integration and unit testing.',
    url: 'https://github.com/theinsideshine/integration-and-unit-tests',
    image: porfolioImage1,
  },
  {
    title: 'LightSaber',
    description: 'LightSaber is an open source c ++ program to control a prototype of a laser sword.',
    url: 'https://github.com/theinsideshine/light_saber_v1.00',
    image: porfolioImage2,
  },
  {
    title: 'Education tools',
    description: 'Is written in  Java for Android, the objective is to have in an application all the tools that our students are requesting.',
    url: 'https://github.com/theinsideshine/education_tools',
    image: porfolioImage3,
  },
  {
    title: 'University final project',
    description: 'Simply supported beam test.Physics Laboratory Test Automated Measurement.',
    url: 'https://github.com/theinsideshine/flexion_viga',
    image: porfolioImage4,
  },
  {
    title: 'Supervised professional practice',
    description: 'This project provides an interface between a web page and an Arduino platform for generic use.',
    url: 'https://github.com/theinsideshine/remote-lab-lib',
    image: porfolioImage5,
  },
  {
    title: 'Lector Rfid-Hardware and firmware',
    description: 'Project with more than 5,000 units on the market compatible Hid tech, 8 bits,C.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Encoding and deco message',
    description: 'Solve the encoding and decoding of the proposed problem.',
    url: 'https://github.com/theinsideshine/encode_message',
    image: porfolioImage7,
  },
  {
    title: 'Microservices-oauth-docker',
    description: 'Microservices ecosystem deployed on Google Cloud Platform.',
    url: 'https://github.com/theinsideshine/microservices-oauth-docker',
    image: porfolioImage8,
  },
  {
    title: 'Crud-weather-react-app',
    description: 'A react app with a crud and access to a weather endpoint, implemented with mui and redux.',
    url: 'https://github.com/theinsideshine/crud-weather-react-app',
    image: porfolioImage9,
  },
  {
    title: 'Angular-proyectApp',
    description: 'The intent of the project is to get familiar with using SpringBoot , SpringSecurity , Spring data jpa, and angular and bootstrap.',
    url: 'https://github.com/theinsideshine/springboot-apiproyects',
    image: porfolioImage10,
  },
  {
    title: 'Access control-Hardware and firmware',
    description: 'Project with more than 10,000 units on the market running Os Rtos, 32 bits, C.',
    url: '',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2022',
    location: 'Mercantile Marine University',
    title: 'Electronic Engineering',
    content: <p>With the knowledge acquired I was able to pass the final project that is in my portfolio.</p>,
  },
  {
    date: 'December 2018',
    location: 'Mercantile Marine University',
    title: 'Senior Electronics Technician',
    content: <p>With the knowledge acquired I was able to pass the supervised professional practice that is in my portfolio.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'CDT Soluciones Tecnologicas',
    title: 'SemiSenior Back-end - Java',
    content: (
      <p>
        Email delivery services. Google cloud Platform. Analysis of the code and architecture used in gcp.
         Improvement and continuous evolution of the system. Unit and integration tests.
      </p>
    ),
  },
  {
    date: 'October 2021 - September 2022',
    location: 'MbSoft, Laboratorio Pablo Cassara.',
    title: 'SemiSenior Java Full Stack',
    content: (
      <p>
       Functional analysis of the required tasks. Analysis of the impact of the change at the code level of the tasks.
        Carry out the implementation in java and primefaces of the tasks.
        Study of the business model and implementation of database queries. Document the required architectures.
      </p>
    ),
  },
  {
    date: 'November 2005 - September 2021',
    location: 'Intelektron',
    title: 'Senior Research and Development of hardware and firmware',
    content: (
      <p>
        Research and development of hardware/firmware in C C++ on 32/16/8 bit architectures, app in java/python.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Gabriel Jose',
      text: 'I met Pablo while we were studying Electronic Engineering and I can say that he is an excellent professional and a better human being. Over the years he has guided me on issues of product design as well as other engineering and manufacturing issues. He is always training and generating new paths. I highly recommend his talents for any task that is required of him, he will more than fulfill what is required of him.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Juan Schiavoni',
      text: 'I have more than 30 years developing electronics, specializing in low-level firmware, in my experience, I am convinced that the knowledge that one needs for a modern project can be learned, what cannot be learned is the high level of tolerance to pressure that is needed for these activities, in my years of working with Pablo he has shown to have a very good management of pressure.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I look forward to your messages.',
  items: [
    {
      type: ContactType.Email,
      text: 'pablo.tavolaro@gmail.com',
      href: 'mailto:pablo.tavolaro@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Buenos Aires Caba, Argentina',
      href: 'https://goo.gl/maps/i4UvTVHGuZoH2X8r9',
    },
    {
      type: ContactType.Instagram,
      text: '@educacion.ta',
      href: 'https://www.instagram.com/educacion.ta/',
    },
    {
      type: ContactType.Github,
      text: 'theinsideshine',
      href: 'https://github.com/theinsideshine',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/theinsideshine/'},
  {label: 'Youtube', Icon: DribbbleIcon, href: 'https://www.youtube.com/channel/UClLTMbxqK8LLSWm4bOdyx5Q/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/pablo-tavolaro-ingeniero-electrónico-63a55033/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/educacion.ta/'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/theinsideshine/'}
  
];
