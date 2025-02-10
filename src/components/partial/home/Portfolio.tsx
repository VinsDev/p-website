import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Image, { StaticImageData } from "next/image";
import { Props } from "../../../theme/styling/GlobalStyle";
import hse from "../../../../public/assets/images/hse.png";
import mlm from "../../../../public/assets/images/mlm.png";
import rest from "../../../../public/assets/images/rest.png";
import pf from "../../../../public/assets/images/pf.png";
import cican from "../../../../public/assets/images/cican.png";
import axis from "../../../../public/assets/images/axis.png";
import movie from "../../../../public/assets/images/movie.png";
import doorlock from "../../../../public/assets/images/doorlock.png";
import journal from "../../../../public/assets/images/journal.png";
import oyichesec from "../../../../public/assets/images/oyichesec.png";
import task from "../../../../public/assets/images/task.png";
import result from "../../../../public/assets/images/result.png";
import dream from "../../../../public/assets/images/dream.png";
import swaggo from "../../../../public/assets/images/swaggo.png";
import smith from "../../../../public/assets/images/smith.png";
import rejoice from "../../../../public/assets/images/rejoice.png";
import perpetual from "../../../../public/assets/images/perpetual.png";
import stations from "../../../../public/assets/images/stations.png";
import fcs from "../../../../public/assets/images/fcs.png";
import { Container } from "../../Container";

type Project = {
  name: string;
  description: string;
  stack: string[];
  environment: { icon: string; link: string }[];
  cover: StaticImageData;
};
interface Wp {
  featured: Project[];
  fun: Project[];
}
const projects: Wp = {
  featured: [
    {
      name: "Cican Technologies",
      description:
        "The website for a tech consulting company specializing in software development, digital marketing, and IT support. It is a highly responsive and user-friendly platform, designed to provide clear information and includes a seamless contact form for easy inquiries.",
      stack: [
        "React.js",
        "Node.js",
        "Postgres",
        "Tailwind CSS",
        "Framer Motion",
      ],
      cover: cican,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://cicantech.com",
        },
      ],
    },
    {
      name: "Axis Global Enterprise",
      description:
        "The official website of Axis Global Enterprise, designed to showcase company information and streamline job applicant management. It features an intuitive administrative backend that enables automated messaging for interview invitations, test links, and other candidate communications.",
      stack: ["React.js", "Tailwind CSS", "Material UI", "Node.js", "MongoDB"],
      cover: axis,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/VinsDev/axis-global-frontend",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://www.axisglobalenterprise.net/",
        },
      ],
    },
    {
      name: "Movie Listing Website",
      description:
        "A dynamic movie listing website built for a technical assessment task during a job interview. It leverages Redux for state management and incorporates clean code practices, optimizations, caching, and memoization for enhanced performance. Features include lazy loading, skeletal loading for better user experience, and efficient filtering by type, genre, and other tags, ensuring seamless movie search and detailed information display.",
      stack: [
        "React",
        "Vite",
        "Typescript",
        "Tailwind CSS",
        "TheMovieDB API",
        "Redux",
        "React Router",
      ],
      cover: movie,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/VinsDev/movie-list-app",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://movielistproject.vercel.app/",
        },
      ],
    },
    {
      name: "JOSTUM Door Lock Admin",
      description:
        "An administrative panel for a door lock system, enabling the management of users, doors, and access levels. It also provides real-time logs of door activities for monitoring and security. Integrated with an IoT project powered by Arduino, it facilitates seamless control of the door lock system.",
      stack: ["React", "AntD", "Node.js", "Nodemailer", "Firebase", "Postgres"],
      cover: doorlock,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/VinsDev/Isaac-Admin-React",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://isaac-admin-react.vercel.app/",
        },
      ],
    },
    {
      name: "JOSTUM Engineering Journals",
      description:
        "A dedicated platform for engineers to publish their research papers and journals. It enables users to create accounts, publish their work, and explore journals from other users. The platform also includes an admin panel for efficiently managing users and journal publications.",
      stack: ["Next.js", "Tailwind CSS", "Node.js", "MySQL", "Cloudinary"],
      cover: journal,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/VinsDev/jostum-engineering-journal-frontend",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://github.com/VinsDev/jostum-engineering-journal-backend",
        },
      ],
    },
    {
      name: "Country Finder Website",
      description:
        "A simple and intuitive website that allows users to search for countries and view detailed information about them. Users can also filter countries by region and explore countries within a selected region seamlessly.",
      stack: ["React", "Tailwind CSS", "SASS", "Rest Countries API"],
      cover: rest,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/VinsDev/Country-app-master",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://country-finder-website.vercel.app/",
        },
      ],
    },
    {
      name: "Oyiche Security Website",
      description:
        "A professional website for a security company offering security services, advanced security gadgets, and specialized training. It serves as an informative platform featuring a blog section, a job application feature, and a well-trained interactive chatbot for seamless user engagement.",
      stack: [
        "Wordpress",
        "Webpack",
        "WP Code",
        "Elementor",
        "AI Chatbot Integration",
      ],
      cover: oyichesec,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://oyichesec.com/",
        },
      ],
    },
    {
      name: "UI Task Challenge",
      description:
        "Developed a complex dashboard UI from a Figma design as part of a UI task challenge to test precision in design reproduction. The interface features numerous custom components, smooth animations, and a responsive layout tailored for desktop and tablet screens, as per contest specifications. Achieved a 91% accuracy score in the challenge. Mobile responsiveness was not required for this task.",
      stack: ["React", "Tailwind CSS", "Material UI"],
      cover: task,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/VinsDev/task",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://task-vinsdev.vercel.app/",
        },
      ],
    },
    {
      name: "Result Sphere",
      description:
        "An online automated result processing system designed for schools. It enables schools to upload results, generate report cards, and seamlessly send student results to parents via email. The platform also includes a robust admin panel for managing schools, students, and result records efficiently.",
      stack: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Node.js",
        "Postgres",
        "Cloudinary",
      ],
      cover: result,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://www.resultsphere.com.ng/",
        },
      ],
    },
    {
      name: "Dream Ventures LLC",
      description:
        "A professional website for a tech consulting company specializing in software development, digital marketing, and IT support. It serves as a simple yet informative platform, featuring a seamless contact form for easy inquiries and communication.",
      stack: ["Wordpress", "Webpack", "Elementor"],
      cover: dream,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://dreamvllc.com/",
        },
      ],
    },
    {
      name: "Swaggo Mayana",
      description:
        "A music artist's website designed to showcase his music, videos, and upcoming events. The site dynamically displays content from his Spotify, YouTube Music, Apple Music, and Audiomack channels, allowing visitors to stream music directly. It also features embedded YouTube videos for an immersive experience and includes a blog section for updates and insights.",
      stack: [
        "HTML",
        "CSS",
        "SASS",
        "Javascript",
        "Bootstrap CSS",
        "Video Embeddings",
      ],
      cover: swaggo,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/VinsDev/oyiche-site",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://www.swaggomayana.com/",
        },
      ],
    },
    {
      name: "Smith Sci-fi Mobile Assistant",
      description:
        "Developed a futuristic sci-fi UI mobile app inspired by Jarvis from Iron Man and Edith from Spider-Man. Built entirely with Flutter widgets from the ground up, the app features voice command capabilities, a heads-up display (HUD), animated text effects, and stunning custom graphics. This project was a passion-driven experiment, pushing the boundaries of Flutter while indulging my love for sci-fi movies. \nIn the future, I plan to integrate AI capabilities and work towards artificial general intelligence (AGI), leveraging advancements in AI to bring even more intelligent and interactive features to the app.",
      stack: ["Flutter", "Dart", "Provider", "Clippers"],
      cover: smith,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/VinsDev/smith",
        },
      ],
    },
    {
      name: "Rejoice in the Lord App",
      description:
        "Built a hymn app with a very responsive and user friendly design, cool features such as smart filters, search, hymn categorization, indexing and animations as well as a 3D side drawer implementation. The app is used by 10,000+ people all over the world.",
      stack: [
        "Flutter",
        "Dart",
        "Animation Controllers",
        "Binary search algorithm",
        "Search suggestions",
      ],
      cover: rejoice,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://drive.google.com/file/d/1f1ykJN7b7gxkP2WC2sq3DuqO0Wk4-OE2/view?usp=drive_link",
        },
      ],
    },
    {
      name: "Perpetual Help Novena App",
      description:
        "Built a Novena app with a very responsive and user friendly desing, dark mode support, text customization and so many other cool features and animations. Used by thousands of people all over the world.",
      stack: ["Flutter", "Dart", "Animation Controllers"],
      cover: perpetual,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://drive.google.com/file/d/1yAT-IHEG53U0Y2oyGZKn0oC_VZXtO4pK/view?usp=drive_link",
        },
      ],
    },
    {
      name: "Stations of the Cross App",
      description:
        "Built a beautiful and interactive Stations of the Cross App with very responsive and user friendly design. It contains up to 4 different versions of the Stations of the cross reflections with a multi-language support feature. Used by thousands of people all over Nigeria.",
      stack: ["Flutter", "Dart", "Animation Controllers"],
      cover: stations,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://drive.google.com/file/d/14n57Sa8ghRMPDRxDXXZ8mavh5REBrpN6/view?usp=drive_link",
        },
      ],
    },
    {
      name: "FCS Devotional App",
      description:
        "Built a user friendly functional devotional app for the Fellowship of Christian Students (FCS) Nigeria. The app contains daily devotional messages, bible reading plans, prayer points, and other cool features. Used by thousands of people all over Nigeria.",
      stack: ["Flutter", "Dart", "Node.js", "MongoDB", "Cloudinary"],
      cover: fcs,
      environment: [
        {
          icon: "bx bxl-play-store",
          link: "https://play.google.com/store/search?q=fcs+nigeria&c=apps&hl=en",
        },
      ],
    },
    {
      name: "Portfolio Website :)",
      description:
        "My Portfolio website. This is pretty much the same website you are on at the moment. I guess it's part of what I have built afterall :)",
      stack: ["React", "Next JS", "Styled Components"],
      cover: pf,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://vincentdominic.vercel.app",
        },
      ],
    },
  ],
  fun: [
    {
      name: "Facebook UI Clone",
      description: "A sample clone of Facebooks mobile App home",
      stack: ["Flutter", "Dart"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/VinsDev/facebook_ui_clone_flutter-master",
        },
      ],
    },
    {
      name: "React Router Practice",
      description: "A sample app that help master react router concepts",
      stack: ["React", "React Router"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/VinsDev/react-router-lesson",
        },
      ],
    },
    {
      name: "Redux Only Chat App",
      description:
        "A sample app that help master keey redux concepts like store, action, dispatch, middle-ware, state, reducers etc",
      stack: ["React", "Redux"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/VinsDev/redux-mastery-master",
        },
        // {
        //   icon: "bx bx-link-alt",
        //   link: " https://sleez007.github.io/redux-mastery/",
        // },
      ],
    },
  ],
};

const Wrapper = styled.section.attrs({ id: "portfolio" })<{
  children?: React.ReactNode;
}>`
  padding-block: 6em;
  position: relative;
  scroll-margin-top: 2rem;
  h2 {
    margin-bottom: 4em;
  }

  .project {
    margin-bottom: 2em;
    h3 {
      font-weight: var(--fw-semi-bold);
      color: ${({ theme }: Props) => theme.txtPrimary400};
    }
    @media (max-width: 60em) {
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      background-color: ${({ theme }: Props) => theme.secondaryBg};
      border-radius: 0.2em;
      overflow: hidden;

      &__content {
        & > * + * {
          margin-top: 0.6em;
        }
        padding: 1em;
        .flex {
          justify-content: start;
          gap: 0.5em;
          flex-wrap: wrap;
        }

        & > p {
          display: none;
        }
        .project__card {
          font-size: 0.8rem;
        }
        .project__stack {
          li {
            font-size: 0.7rem;
            color: ${({ theme }: Props) => theme.expCardHover};
          }
        }
        .project__env {
          ul {
            justify-content: start;
          }
          li {
            font-size: 1.8rem;
            a {
              color: ${({ theme }: Props) => theme.expCardHover};
            }
          }
        }
      }
    }

    img {
      filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
      filter: gray; /* IE6-9 */
      -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      border-radius: 10px;
      @media (max-width: 60em) {
        border-radius: 0px;
      }

      &:hover {
        filter: none;
        -webkit-filter: grayscale(0%);
      }
    }

    @media (min-width: 60em) {
      margin-bottom: 6em;
      grid-template-columns: repeat(12, 1fr);
      display: grid;
      align-items: center;
      gap: 2em;

      &__image {
        grid-area: 1 / 1 / 2 / 8;
        height: 100%;
        position: relative;
        border-radius: 10px;
      }

      &__content {
        z-index: 1;
        grid-row: 2;
        grid-area: 1/7/2/-1;
        text-align: right;
        padding: 1.5em 1em;

        .project-feat {
          color: ${({ theme }: Props) => theme.expCardHover};
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-bottom: 0.9em;
        }

        h3 {
          margin-bottom: 0.8em;
          font-size: 1.2rem;
        }

        .project__card {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          background: ${({ theme }: Props) => theme.projectColor};
          padding: 2em 1em;
          border-radius: 6px;
          margin-bottom: 0.8em;

          p {
            font-size: 0.88rem;
          }
        }
        .project__env ul,
        .project__stack ul {
          gap: 0.8em;
          justify-content: flex-end;
          margin-bottom: 0.8em;
          flex-wrap: wrap;
        }

        .project__stack ul li {
          font-size: 0.799rem;
          color: ${({ theme }: Props) => theme.expCardHover};
        }
        .project__env ul a {
          font-size: 1.6rem;
          color: ${({ theme }: Props) => theme.txtPrimary400};
        }
      }

      &:nth-child(even) {
        & > .project__image {
          grid-area: 1/ 6 / 2 / -1;
        }

        & > .project__content {
          grid-area: 1/1/2/7;
          text-align: left;
        }

        .project__env ul,
        .project__stack ul {
          justify-content: flex-start;
        }
      }
    }
  }

  .pxb {
    margin-top: 6em;
    margin-bottom: 3em;
    justify-content: center;
  }
  .others {
    justify-content: start;
    grid-template-columns: repeat(auto-fit, minMax(22em, 1fr));

    .fun {
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      background-color: ${({ theme }: Props) => theme.secondaryBg};
      border-radius: 0.2em;
      padding: 2em;
      transition: 0.2s all ease-in;

      &:hover {
        transform: translateY(-0.3em);
      }

      & > * + * {
        margin-top: 1em;
      }
      .ico {
        justify-content: space-between;

        .ddd {
          font-size: 2.4rem;
        }
      }
      h3 {
        margin-bottom: 0.8em;
        font-weight: var(--fw-semi-bold);
        color: ${({ theme }: Props) => theme.txtPrimary400};
        @media (min-width: 60em) {
          font-size: 1.2rem;
        }
      }
      p {
        font-size: 0.88rem;
        @media (max-width: 60em) {
          font-size: 0.8rem;
        }
      }

      .fun__env ul,
      .fun__stack ul {
        justify-content: flex-start;
        gap: 1em;
        flex-wrap: wrap;
      }

      .fun__stack ul li {
        font-size: 0.799rem;
        color: ${({ theme }: Props) => theme.expCardHover};
      }
      .fun__env ul a {
        font-size: 1.6rem;
        color: inherit;
      }
    }
  }
`;

const Portfolio = () => {
  return (
    <Wrapper>
      <h1 className="side">PORTFOLIO</h1>
      <Container>
        <h2 className="section__title">
          <span className="deco">03. </span> Some Things I&#39;ve Built{" "}
          <span className="line"></span>
        </h2>
        <ul role="list">
          {projects.featured.map((e, i) => (
            <ProjectItem key={e.name} {...e} />
          ))}
        </ul>
        <Fade ssrFadeout bottom>
          <h2 className="section__title text-center pxb">
            Other Note Worthy Projects
          </h2>
          <div className="grid others">
            {projects.fun.map((e, i) => (
              <FunItem key={i} {...e} />
            ))}
          </div>
        </Fade>
      </Container>
    </Wrapper>
  );
};

const FunItem = ({ name, description, cover, stack, environment }: Project) => {
  return (
    <div className="fun">
      <div className="flex ico">
        <div>
          <i className="bx bx-folder ddd"></i>
        </div>
        <div className="fun__env">
          <ul role="list" className="flex">
            {environment.map((s) => (
              <li key={s.icon}>
                <a
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                >
                  <i className={s.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="fun__stack">
        <ul className="flex" role="list">
          {stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProjectItem = ({
  name,
  description,
  cover,
  stack,
  environment,
}: Project) => {
  return (
    <Fade ssrFadeout bottom>
      <li className="grid-12 project">
        <div className="project__image">
          <Image src={cover} alt={name} />
        </div>
        <div className="project__content">
          <p className="project-feat">Featured Project</p>
          <h3>{name}</h3>
          <div className="project__card">
            <p>{description}</p>
          </div>
          <div className="project__stack">
            <ul className="flex" role="list">
              {stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="project__env">
            <ul className="flex" role="list">
              {environment.map((s) => (
                <li key={s.icon}>
                  <a
                    href={s.link}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noreferrer"
                  >
                    <i className={s.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    </Fade>
  );
};

export default Portfolio;
