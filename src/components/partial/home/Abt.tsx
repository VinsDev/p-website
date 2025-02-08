import Image from "next/image";
import styled from "styled-components";
import { Container } from "../../Container";
import Fade from 'react-reveal/Fade';
import profileImage from '../../../../public/assets/images/vincent.jpg'
import { Props } from "../../../theme/styling/GlobalStyle";

const Wrapper = styled.section.attrs({id: 'about'})`
    padding-block: 6em;
    position: relative;
    background-color: ${({theme}: Props) => theme.primaryBg};
    z-index: 1;
    @media(min-width: 50em){
        padding-block: 16em 6em;
        margin-top: -12em;
    }

    .about__details{
        & > *+*{
            margin-top: 1.2em;
        }
    }
    
    .about__list{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
        margin-top: 1.2em; 

        li{
            font-size: 0.85rem;
            position: relative;
            left: 1.2em;
            transition: transform 0.2s ease;

            @media(min-width: 50em){
                font-size: 0.95rem;
            }

            &:hover {
                transform: translateX(5px);
                color: ${({theme}: Props) => theme.txtPrimary300};
            }

            &::before{
                content: '▹';
                top: 0;
                left: -1.2em;
                position: absolute;
                color: ${({theme}: Props) => theme.txtPrimary300};
            }
        }
    }

    .image_container {
        transition: all 0.3s cubic-bezier(0.645,0.045,0.355,1);
        display: block;
        position: relative;
        width: 280px;
        height: 330px;
        border-radius: 8px;
        background: ${({theme}: Props) => theme.primaryBg};
        
        &::before {
            content: '';
            position: absolute;
            inset: -10px;
            background: ${({theme}: Props) => theme.txtPrimary300};
            filter: blur(30px);
            opacity: 0.15;
            transition: all 0.4s ease;
        }

        &::after {
            z-index: -1;
            position: absolute;
            border: 2px solid ${({theme}: Props) => theme.txtPrimary300};
            top: 2.5em;
            left: 2.5em;
            content: '';
            height: inherit;
            width: inherit;
            border-radius: 8px;
            transition: all 0.3s cubic-bezier(0.645,0.045,0.355,1);
        }

        @media(min-width: 50em) {
            &:hover {
                &::before {
                    filter: blur(40px);
                    opacity: 0.25;
                }
                &::after {
                    top: 1.5em;
                    left: 1.5em;
                }
                img {
                    transform: scale(1.02);
                    filter: none;
                    box-shadow: 0 0 30px rgba(0, 102, 255, 0.2);
                }
            }
        }
        
        img {
            height: inherit;
            width: 100%;
            object-fit: cover;
            border-radius: 8px;
            filter: grayscale(20%) contrast(1.1);
            transition: all 0.4s ease;
            position: relative;
            z-index: 2;
            box-shadow: 0 0 20px rgba(0, 102, 255, 0.1);
        }

        .smoke-effect {
            position: absolute;
            inset: -20px;
            background: radial-gradient(
                circle at 50% 50%,
                rgba(0, 102, 255, 0.1),
                transparent 70%
            );
            filter: blur(20px);
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: 1;
            
            &::before {
                content: '';
                position: absolute;
                inset: 0;
                background: radial-gradient(
                    circle at 30% 70%,
                    rgba(0, 102, 255, 0.15),
                    transparent 50%
                );
                filter: blur(25px);
            }
        }

        &:hover .smoke-effect {
            opacity: 1;
        }
    }
    
    .about__me{
        display: grid;
        place-content: center;
    }
`;

const About = () => {
    return (
        <Wrapper>
            <Fade ssrFadeout bottom>
                <h1 className="side">About Me</h1>
                <Container>
                    <div className="about grid even-columns">
                        <div className="about__details">
                            <h2 className="section__title"><span className="deco">01. </span>About me <span className="line"></span></h2>
                            <p>
                                As a passionate Software Engineer, I thrive on creating innovative solutions that push the boundaries 
                                of what's possible in web and mobile development. With a strong foundation in both front-end and 
                                back-end technologies, I specialize in building scalable, high-performance applications that deliver 
                                exceptional user experiences.
                            </p>
                            <p>
                                My approach combines technical expertise with a deep understanding of business needs, allowing me to 
                                develop solutions that not only meet technical requirements but also drive meaningful business outcomes. 
                                I'm particularly proud of my work in optimizing application performance and implementing robust 
                                architectures that support large-scale user bases.
                            </p>
                            <p>Here are the key technologies I work with:</p>
                            <ul className="about__list" role='list'>
                                <li>React/Next.js</li>
                                <li>Node.js</li>
                                <li>TypeScript</li>
                                <li>Flutter</li>
                                <li>Django</li>
                                <li>Flask</li>
                                <li>GraphQL</li>
                                <li>REST APIs</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>Firebase</li>
                                <li>AWS</li>
                                <li>Docker</li>
                                <li>CI/CD</li>
                            </ul>
                        </div>
                        <div className="about__me">
                            <div className="image_container">
                                <div className="smoke-effect" />
                                <Image src={profileImage} alt="Tech Space" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Fade>
        </Wrapper>
    );
}

export default About;