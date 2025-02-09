import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Image, { StaticImageData } from "next/image";
import { Props } from "../../../theme/styling/GlobalStyle";
import hse from "../../../../public/assets/images/hse.png";
import mlm from "../../../../public/assets/images/mlm.png";
import oil from "../../../../public/assets/images/oil.png";
import nov from "../../../../public/assets/images/nov.png";
import rest from "../../../../public/assets/images/rest.png";
import oilapp from "../../../../public/assets/images/oilapp.png";
import curr from "../../../../public/assets/images/curr@2x.png";
import news from "../../../../public/assets/images/news.png";
import nova from "../../../../public/assets/images/nova@2x.png";
import breakn from "../../../../public/assets/images/break.png";
import pf from "../../../../public/assets/images/pf.png";
import may from "../../../../public/assets/images/mayuk@2x.png";
import kanban from "../../../../public/assets/images/kanban.png";
import market from "../../../../public/assets/images/market.png";
import cican from "../../../../public/assets/images/cican.png";
import axis from "../../../../public/assets/images/axis.png";
import movie from "../../../../public/assets/images/movie.png";
import doorlock from "../../../../public/assets/images/doorlock.png";
import journal from "../../../../public/assets/images/journal.png";
import oyichesec from "../../../../public/assets/images/oyichesec.png";
import task from "../../../../public/assets/images/task.png";
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
        "A tech consulting company that offers services in software development, digital marketing, and IT support. The website is a simple informative website with a blog section",
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
      name: "Kanban Board",
      description:
        "This is a drag and drop project management board to keep track of tasks and their status",
      stack: [
        "Micro Frontend",
        "Nx mono Repo",
        "Angular",
        "DDD",
        "Jest & Rxjs Marble",
        "NGRX",
        "RXJS",
        "SASS",
      ],
      cover: kanban,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/kanban-board",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://kanban-board-inky.vercel.app",
        },
      ],
    },
    {
      name: "Axis Global Enterprise",
      description:
        "Official website for Axis Global Enterprise. This website contains company information and job applicants management features along with an administrative backend to send candidates automated messages for interview invites, test links etc",
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
        "Website that displays list of movies from a publc API and allows users to search for movies, filter by types, genre and other tages, and view movie details.",
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
        "This is an administrative end for a door lock system that allows the admin to manage users, doors, and access levels. It also allows the admin to view logs of door activities. It is connected to an IOT project (Arduino) that controls the door lock",
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
        "A platform for engineers to publish their research papers and journals. It allows users to create an account, publish journals, and view other users' journals. It also has an admin panel for managing users and journals",
      stack: ["React", "Tailwind CSS", "Node.js", "MySQL", "Cloudinary"],
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
      name: "Rest Countries App",
      description:
        "This is a challenge from frontend mentor. The web app basically fetches a list of countries via an API call and then displays the information to the user with ability to sort, search and also toggle theme.",
      stack: ["Angular", "RXJS", "SASS", "Rest Countries API"],
      cover: rest,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/Rest-countries",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://rest-countries-sleez007.vercel.app/",
        },
      ],
    },
    {
      name: "Oyiche Security Website",
      description:
        "A website for a security company that offers security services, security gadgets, and security training. The website is a simple informative website with a blog section, job application feature and a well trained interactive chatbot",
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
        "Built a complex dashboard UI from a figma design. The UI contains lots of custom componets, animations and responsive design",
      stack: [
        "React",
        "Tailwind CSS",
        "Material UI",
      ],
      cover: task,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/VinsDev/task",
        },
        {
            icon: "bx bx-link-alt",
            link: "https://task-vinsdev.vercel.app/",
          }
      ],
    },
    {
      name: "News App Android",
      description:
        "The News App fetches paginated up-to-date news from the remote server and caches it locally on the user device their by supporting fully offline usage. The App also uses dual theme",
      stack: [
        "Kotlin",
        "Jetpack Libraries",
        "Room",
        "Coroutines & Flow",
        "Dagger Hilt",
        "News Api",
        "MVI",
      ],
      cover: news,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/Innovate-Space/world_news",
        },
      ],
    },
    {
      name: "Whatsapp Clone Android",
      description:
        "Whatsapp Clone App is a sample implementtation of whatsapp with a couple of features like profile creation, contact syncronization, messaging, offline use. This uses the socket.IO library for real time communication. ",
      stack: [
        "Kotlin",
        "Jetpack Libraries",
        "Room",
        "Coroutines",
        "Dagger Hilt",
        "Socket IO",
        "Express",
        "Mongo DB",
        "Docker Compose",
        "MVVM",
      ],
      cover: nova,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/sleezChatApp",
        },
      ],
    },
    {
      name: "Ground Breaking App",
      description:
        "The ground breakinng App is an event app that is primarily built foruse only at the launching event of a popular estate in Awka",
      stack: ["Flutter", "Bloc", "Build Runner", "Freeze", "RX Dart", "MVVM"],
      cover: breakn,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/gve_ground_breaking",
        },
      ],
    },
    {
      name: "Mayuk Construction",
      description:
        "An informative website for a client who wants to be avaialable on the online space. No heavy requirements so i's pretty much basic.",
      stack: ["Javascript", "HTML", "CSS", "Email JS"],
      cover: may,
      environment: [
        {
          icon: "bx bx-link-alt",
          link: "https://www.mayuk.info/",
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
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/My-portfolio-website",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://vincentdominic.vercel.app",
        },
      ],
    },
  ],
  fun: [
    {
      name: "JWT Authentication Server",
      description:
        "A sample project to show how to do authentication in Nest JS using JWT Tokens",
      stack: ["Nest JS", "Postgres", "Docker"],
      cover: hse,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/Innovate-Space/authentication_backend",
        },
      ],
    },
    {
      name: "Facebook UI Clone",
      description: "A sample clone of Facebooks mobile App home",
      stack: ["Flutter", "Dart"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/facebook_ui_clone_flutter",
        },
      ],
    },
    {
      name: "Crypto Promo Page",
      description:
        "A sample project design for the landing page of a crypto promotion",
      stack: ["Angular", "SASS"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/promo_page",
        },
        {
          icon: "bx bx-link-alt",
          link: "promo-page.vercel.app",
        },
      ],
    },
    {
      name: "Url Shortening",
      description:
        "A sample project challenge from frontend mentor that enables users to generate a short version of any URL",
      stack: ["HTML", "CSS", "Javascript"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/Innovate-Space/URL-shortening-API-landing-page",
        },
        {
          icon: "bx bx-link-alt",
          link: "https://url-shortening-api-landing-page-sandy.vercel.app/",
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
          link: "https://github.com/sleez007/redux-mastery",
        },
        {
          icon: "bx bx-link-alt",
          link: " https://sleez007.github.io/redux-mastery/",
        },
      ],
    },
    {
      name: "Real Estate Landing Page",
      description:
        "A sample landing page for a real estate promotion on social media and online generally",
      stack: ["HTML", "SASS", "GSAP"],
      cover: mlm,
      environment: [
        {
          icon: "bx bxl-github",
          link: "https://github.com/sleez007/gve",
        },
        {
          icon: "bx bx-link-alt",
          link: "http://gve.vercel.app/",
        },
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
