import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { Container } from "../../Container";
import Button from "../../shared/Button";
import profileImage from '../../../../public/assets/images/man2.jpg';
import FadeIn from "react-fade-in";
import { Circle, Hex } from "../../Shape";

const breatheAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.03);
    }
    100% {
        transform: scale(1);
    }
`;

const smokeAnimation = keyframes`
    0% {
        transform: rotate(0deg) scale(1);
    }
    33% {
        transform: rotate(120deg) scale(1.1);
    }
    66% {
        transform: rotate(240deg) scale(1);
    }
    100% {
        transform: rotate(360deg) scale(1);
    }
`;

const revolvingLight = keyframes`
    0% {
        transform: rotate(0deg) translate(200px) rotate(0deg);
    }
    100% {
        transform: rotate(360deg) translate(200px) rotate(-360deg);
    }
`;

const HeroWrapper = styled.section`
    padding-top: 3em;
    min-height: 30em;
    position: relative;
    overflow: hidden;
    
    p {
        margin-block: 1.3em;
    }

    .hero_container {
        gap: 4em;
        padding-bottom: 2rem;
    }

    .hero__image {
        width: 280px;
        height: 280px;
        margin: 2em auto;
        position: relative;
        
        @media(min-width: 50em) {
            width: 400px;
            height: 400px;
            margin-left: 2em;
            margin: 0;
        }

        &::before {
            content: '';
            position: absolute;
            inset: -40px;
            background: ${props => props.theme.txtPrimary300};
            filter: blur(70px);
            opacity: 0.15;
            transition: all 0.4s ease;
            animation: ${smokeAnimation} 15s infinite linear;
            border-radius: 50%;
        }

        .image-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 2;
            animation: ${breatheAnimation} 4s ease-in-out infinite;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 0 50px rgba(0, 102, 255, 0.2);

            &::before {
                content: '';
                position: absolute;
                inset: -20px;
                background: ${props => props.theme.txtPrimary300};
                filter: blur(30px);
                z-index: 3;
                opacity: 0.15;
                pointer-events: none;
                border-radius: 50%;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: contrast(1.05);
                transition: all 0.4s ease;
                box-shadow: 
                    0 5px 25px rgba(0, 102, 255, 0.2),
                    0 0 60px rgba(0, 102, 255, 0.1);
                mask-image: radial-gradient(
                    circle at center,
                    black 60%,
                    rgba(0, 0, 0, 0.8) 75%,
                    transparent 95%
                );
                -webkit-mask-image: radial-gradient(
                    circle at center,
                    black 60%,
                    rgba(0, 0, 0, 0.8) 75%,
                    transparent 95%
                );
            }

            .smoke-effect {
                position: absolute;
                inset: -60px;
                background: radial-gradient(
                    circle at 50% 50%,
                    rgba(0, 102, 255, 0.15),
                    transparent 85%
                );
                filter: blur(50px);
                opacity: 0.8;
                z-index: 1;
                animation: ${smokeAnimation} 20s infinite linear reverse;
                transform-origin: center center;
                pointer-events: none;
                border-radius: 50%;
                
                &::before {
                    content: '';
                    position: absolute;
                    inset: -15px;
                    background: radial-gradient(
                        circle at 30% 70%,
                        rgba(0, 102, 255, 0.2),
                        transparent 75%
                    );
                    filter: blur(45px);
                    animation: ${smokeAnimation} 25s infinite linear;
                    border-radius: 50%;
                }

                &::after {
                    content: '';
                    position: absolute;
                    inset: -35px;
                    background: radial-gradient(
                        circle at 70% 30%,
                        rgba(0, 102, 255, 0.15),
                        transparent 70%
                    );
                    filter: blur(55px);
                    animation: ${smokeAnimation} 30s infinite linear reverse;
                    border-radius: 50%;
                }
            }

            .blend-overlay {
                position: absolute;
                inset: -10px;
                background: ${props => props.theme.primaryBg};
                filter: blur(20px);
                opacity: 0.4;
                z-index: 4;
                pointer-events: none;
                border-radius: 50%;
                mask-image: radial-gradient(
                    circle at center,
                    transparent 60%,
                    black 95%
                );
                -webkit-mask-image: radial-gradient(
                    circle at center,
                    transparent 60%,
                    black 95%
                );
            }

            &::after {
                content: '';
                position: absolute;
                width: 20px;
                height: 20px;
                background: ${props => props.theme.txtPrimary300};
                filter: blur(15px);
                border-radius: 50%;
                opacity: 0.7;
                top: 50%;
                left: 50%;
                transform-origin: 0 0;
                animation: ${revolvingLight} 8s linear infinite;
                box-shadow: 
                    0 0 20px ${props => props.theme.txtPrimary300},
                    0 0 40px ${props => props.theme.txtPrimary300},
                    0 0 60px ${props => props.theme.txtPrimary300};
                z-index: 5;
            }

            &::before {
                content: '';
                position: absolute;
                width: 15px;
                height: 15px;
                background: ${props => props.theme.txtPrimary300};
                filter: blur(12px);
                border-radius: 50%;
                opacity: 0.5;
                top: 50%;
                left: 50%;
                transform-origin: 0 0;
                animation: ${revolvingLight} 12s linear infinite reverse;
                box-shadow: 
                    0 0 15px ${props => props.theme.txtPrimary300},
                    0 0 30px ${props => props.theme.txtPrimary300};
                z-index: 5;
            }

            &:hover {
                &::after, &::before {
                    opacity: 0.9;
                    filter: blur(18px);
                }
            }
        }

        &:hover {
            &::before {
                filter: blur(80px);
                opacity: 0.25;
            }

            .image-wrapper {
                animation-play-state: paused;
                transform: scale(1.02);
                box-shadow: 0 0 70px rgba(0, 102, 255, 0.3);
                
                img {
                    box-shadow: 
                        0 8px 35px rgba(0, 102, 255, 0.25),
                        0 0 80px rgba(0, 102, 255, 0.15);
                }
                
                .smoke-effect {
                    opacity: 1;
                    filter: blur(45px);
                    inset: -70px;
                }
            }
        }
    }

    h1 {
        background: linear-gradient(45deg, ${props => props.theme.txtPrimary300}, ${props => props.theme.txtPrimary300});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;
        margin: 0.5em 0;
        transition: all 0.3s ease;
        
        &:hover {
            transform: translateY(-2px);
        }
    }

    .role {
        color: ${props => props.theme.txtPrimary300};
        font-weight: 500;
        font-size: 1.2em;
    }

    .description {
        font-size: 1.1em;
        line-height: 1.6;
        max-width: 600px;
        color: ${props => props.theme.txtPrimary200};
    }

    .text-primary-300 {
        color: ${props => props.theme.txtPrimary300};
    }

    .hero_container {
        display: flex;
        flex-direction: column;

        @media(min-width: 50em) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4em;
        }
    }
`;

const Hero = () => {
    return (
        <HeroWrapper>
            <Hex />
            <Circle />
            <Container>
                <div className="hero_container">
                    <div className="hero__detail">
                        <FadeIn delay={200}>
                            <p className="text-primary-400">Hello, I&#39;m</p>
                            <h1>VINCENT OMAKU<br/>DOMINIC</h1>
                            <p className="role">Software Engineer | Full-Stack Developer | Mobile Developer</p>
                            <p className="description">
                                Skilled and dedicated Full-Stack Software Engineer with a passion for crafting 
                                efficient digital solutions. Demonstrated expertise in building high-performance 
                                applications that serve 100K+ users, achieving 60% faster load times, and 
                                delivering mobile apps with 4.8+ user ratings. Proficient in React, Next.js, 
                                Flutter, and Node.js, with a proven ability to transform complex requirements 
                                into elegant, scalable solutions.
                            </p>
                            <Button 
                                as='a' 
                                href="/assets/docs/vincent_dominic.pdf" 
                                download={true} 
                                inverse={true}
                            >
                                DOWNLOAD CV
                            </Button>
                        </FadeIn>
                    </div>
                    
                    <div className="hero__image">
                        <div className="image-wrapper">
                            <div className="smoke-effect" />
                            <Image 
                                src={profileImage} 
                                priority 
                                alt="Tech Space" 
                            />
                            <div className="blend-overlay" />
                        </div>
                    </div>
                </div>
            </Container>
        </HeroWrapper>
    );
}

export default Hero;