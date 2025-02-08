import styled from "styled-components";
import React from "react";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import { Container } from "../../Container";
import { Props } from "../../../theme/styling/GlobalStyle";

// Configure Modal
if (typeof window !== "undefined") {
  Modal.setAppElement("#__next");
}

interface ExperienceItem {
  company: string;
  title: string;
  at: string;
  duration: string;
  link: string;
  roles: string[];
  certificate?: string;
}

interface EducationData {
  experience: ExperienceItem[];
}

// Data
const data: EducationData = {
  experience: [
    {
      company: "Joseph Sarwuan Tarka University",
      title: "B. Eng",
      at: "Mechanical Engineering",
      duration: "2018 - 2023",
      link: "#",
      roles: [
        "Graduated with First Class Honors",
        "Completed comprehensive coursework in mechanical design, thermodynamics, and fluid mechanics",
        "Led team projects in machine design and automation",
        "Conducted research on renewable energy systems",
        "Participated in engineering workshops and seminars",
      ],
      certificate: "/assets/images/result.jpg",
    },
    {
      company: "Professional Certifications",
      title: "Engineering Software",
      at: "Various Platforms",
      duration: "2020 - Present",
      link: "#",
      roles: [
        "SolidWorks Professional Certification",
        "Autodesk Inventor Certified User",
        "MATLAB Programming and Numerical Methods",
        "CNC Programming and Machine Operation",
        "AutoCAD 2D and 3D Design",
      ],
      certificate: "/assets/images/result.jpg",
    },
    {
      company: "Online Education",
      title: "Additional Courses",
      at: "Multiple Platforms",
      duration: "2021 - Present",
      link: "#",
      roles: [
        "Completed Finite Element Analysis (FEA) course on Coursera",
        "Advanced Manufacturing Processes certification from edX",
        "Industrial Automation and Control Systems",
        "Project Management for Engineers",
        "Sustainable Engineering Practices",
      ],
      certificate: "/assets/images/result.jpg",
    },
  ],
};

const Wrapper = styled.section.attrs({ id: "education" })<{
  children?: React.ReactNode;
}>`
  padding-block: 6em;
  background-color: ${({ theme }: Props) => theme.secondaryBg};
  position: relative;

  .experience {
    margin-top: 4em;
    align-items: flex-start;
    grid-template-columns: 1fr;

    @media (min-width: 50em) {
      grid-template-columns: minmax(200px, 1fr) 3.5fr;
    }

    &__control {
      @media (max-width: 50em) {
        width: 100%;
        overflow-x: auto;
      }
      ul {
        padding-left: 0;
        white-space: nowrap;
        position: relative;
        width: 100%;

        @media (min-width: 50em) {
          padding-left: 1.5em;
          white-space: auto;

          &::before {
            display: block;
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            height: 100%;
            width: 2px;
            background-color: #1f1f1f;
          }
        }

        li {
          display: inline-block;
          position: relative;
          cursor: pointer;
          transition: var(--transition);
          &:hover {
            background-color: hsla(238, 77.8%, 50.6%, 0.44);
          }

          @media (min-width: 50em) {
            display: block;
          }

          &.active {
            color: ${({ theme }: Props) => theme.expCardHover};
            transition: var(--transition);
            a {
              color: ${({ theme }: Props) => theme.expCardHover};
            }

            &::before {
              display: none;

              @media (min-width: 50em) {
                display: block;
                content: "";
                position: absolute;
                background-color: ${({ theme }: Props) => theme.expCardHover};
                top: 0;
                left: -1.5em;
                height: 100%;
                width: 2px;
                transition: var(--transition);
              }
            }
          }

          a {
            padding: 0.4em;
            display: block;
            height: 100%;
            font-size: var(--fs-nav);

            @media (max-width: 666px) {
              display: inline-block;
            }
          }
        }
      }
    }

    &__detail {
      p {
        margin-top: 0.8em;
        margin-bottom: 2em;
        font-size: 0.8rem;
        background-color: ${({ theme }: Props) => theme.expCardHover};
        display: inline-block;
        padding: 0.4em;
        color: ${({ theme }: Props) => theme.txtPrimary100};
      }
      h3 a {
        font-weight: var(--fw-semi-bold);
        color: ${({ theme }: Props) => theme.expCardHover};
      }
      ul {
        margin-top: 0.8em;
        li {
          position: relative;
          left: 1.2em;
          margin: 0.8em 0;
          font-size: 0.88rem;
          @media (max-width: 60em) {
            font-size: 0.8rem;
          }

          &::before {
            content: "▹";
            top: 0;
            left: -1.2em;
            position: absolute;
            color: ${({ theme }: Props) => theme.expCardHover};
          }
        }
      }
    }
  }

  .certificate-preview {
    margin-top: 2em;
    text-align: center;

    img {
      max-width: 200px;
      cursor: pointer;
      border-radius: 4px;
      transition: var(--transition);

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

const StyledModal = styled(Modal)<Props>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.secondaryBg};
  padding: 2em;
  border-radius: 8px;
  max-width: 95vw;
  max-height: 95vh;
  outline: none;

  &.ReactModal__Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75) !important;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;

    img {
      max-width: min(800px, 90vw);
      max-height: 80vh;
      object-fit: contain;
      border-radius: 4px;
    }

    button {
      padding: 0.75em 1.5em;
      background-color: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.primaryBg};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: var(--transition);

      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
      }
    }
  }
`;

const Education: React.FC = () => {
  const experience = data.experience;
  const [index, setIndex] = React.useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

  return (
    <Wrapper>
      <h1 className="side">Education</h1>
      <Container>
        <h2 className="section__title">
          <span className="deco">04. </span>
          <span>Relevant Education</span>
          <span className="line"></span>
        </h2>

        <div className="grid experience">
          <div className="experience__control">
            <Fade left cascade>
              <ul role="list">
                {experience.map((e, i) => (
                  <li
                    className={`${index == i ? "active" : ""} `}
                    key={e.company}
                  >
                    <a onClick={() => setIndex(i)}>{e.company}</a>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
          <Fade bottom>
            <div className="experience__detail">
              <h3>
                {experience[index].title}{" "}
                <a href={experience[index].link}>{experience[index].at}</a>
              </h3>
              <p>{experience[index].duration}</p>
              <Fade top cascade delay={400}>
                <ul role="list">
                  {experience[index].roles.map((e, i) => (
                    <Fade bottom key={e} delay={i * 300}>
                      <li>{e}</li>
                    </Fade>
                  ))}
                </ul>
              </Fade>
              {experience[index].certificate && (
                <div className="certificate-preview">
                  <img
                    src={experience[index].certificate}
                    alt={`${experience[index].company} Certificate`}
                    onClick={() => setModalIsOpen(true)}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </Fade>
        </div>
      </Container>

      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Certificate Modal"
        closeTimeoutMS={300}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(5px)",
          },
        }}
      >
        <div className="modal-content">
          <img
            src={experience[index].certificate}
            alt={`${experience[index].company} Certificate`}
            loading="lazy"
          />
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </StyledModal>
    </Wrapper>
  );
};

export default Education;
