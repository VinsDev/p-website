import styled from "styled-components";
import { Props } from "../../../theme/styling/GlobalStyle";
import Image from "next/image";
import Fade from 'react-reveal/Fade';
import { Container } from "../../Container";
import fm from '../../../../public/assets/images/logo/featuremind.png'
import oyiche from '../../../../public/assets/images/logo/oyiche.png'
import groovinx from '../../../../public/assets/images/logo/groovinx.jpeg'

type d = { icon: string, title: string }
const skills: d[] = [
    {
        icon: 'bx bx-mobile-alt',
        title: 'Mobile App <br/> Development'
    },
    {
        icon: 'bx bx-devices',
        title: 'Frontend Web<br/> Development'
    },
    {
        icon: 'bx bx-data',
        title: 'Backend Web<br/> Development'
    },
];

const Wrapper = styled.section`
    padding-block: 6em;
    background-color: ${({ theme }: Props) => theme.secondaryBg};
    position: relative;

    .intro{
        justify-content: space-between;
        .line{
            flex: 1;
            margin-left: 2em;
            width: 100%;
            height: 1px;
            background: ${({ theme }: Props) => theme.txtPrimary400};
        }
    }

    .worked__with{
        margin-top: 4em;
        display: grid;
        justify-content: center;
        gap: 2em;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

        img{
            height: 60px !important;
            cursor: pointer;
            object-fit: contain !important;
            margin-inline: auto;

            &:not(:first-child){
                transition: .4s;
                filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
                filter: gray;
                -webkit-filter: grayscale(100%);

                &:hover{
                    filter: none;
                    -webkit-filter: grayscale(0%);
                }
            }
        } 
    }

    .skills{
        gap: 1em;
        margin-top: 2em;
    }

    .expo__skill-set{
        position: relative;
        z-index: 2;
    }

    .expo{
        margin-top: 6em;
        display: none;

        @media(min-width: 50em){
            display: grid;
            align-items: start;
            grid-template-columns: minmax(250px, 1fr) 3.5fr;
        }

        .yr{
            font-size: 6rem;
            font-weight: var(--fw-semi-bold);
            justify-content: flex-start;
            align-items: baseline;

            span{
                font-size: 4rem;
                margin-left: .3em;
            }
        }
        .box{
            height: 250px;
            display: grid;
            align-items: center;
            padding: 1em;
            // position: relative;
            z-index: 10 !important;
            transition: .4s;
            background: ${({ theme }: Props) => theme.expCard};

            &:hover{
                background: ${({ theme }: Props) => theme.expCardHover};
                color: ${({ theme }: Props) => theme.txtPrimary100};
                
                h3, a{
                    color: ${({ theme }: Props) => theme.txtPrimary100};
                }
                p{
                    opacity: 1;

                    &>i.bx{
                       margin-left: 1.5em;
                    }
                }
            }
            &> .bx{
                font-size: 2.5rem;
            }

            p{
                transition: opacity .4s;
                opacity: 0;
                font-size: .8rem;
                margin-top: .8em;
                &>i.bx{
                    transition: margin-left .4s;
                    display: inline-block;
                }
            }


        }
    }
    
`;

const Work = () => {
    return (
        // <Fade ssrFadeout bottom>
        <Wrapper>
            <h1 className="side">Work</h1>
            <Container>
                <p className="flex intro">Companies I&#39;ve Worked With <span className="line"></span></p>
                <div className="grid worked__with">
                    <Image src={fm} alt="Featuremind" height={60} width={212} />
                    <Image src={oyiche} alt="Oyiche Tech" height={60} width={212} />
                    <Image src={groovinx} alt="Groovinx" height={60} width={212} />
                    {/*    <Image src={oakSoft} alt="The Oaksoft " />
                        <Image src={cousant} alt="Cousant Connect" />
                        <Image src={hoh} alt="House of Hishighnex " />
                        <Image src={devAmplify} alt="Devamplify" /> */}
                </div>

                <div className="grid expo even-columns">
                    <Fade ssrFadeout bottom>
                        <div className="expo__years">
                            <p className="yr flex">6 <span>+</span></p>
                            <p>Years of Professional Experience.</p>
                        </div>
                    </Fade>
                    <div className="expo__skill-set">
                        <p>As a versatile full-stack developer, I specialize in creating comprehensive web and mobile solutions that drive business value.</p>
                        <Fade ssrFadeout bottom>
                            <div className="skills even-columns grid">
                                {skills.map(s => <SkillWrap {...s} key={s.title} />)}
                            </div>
                        </Fade>
                    </div>
                </div>
            </Container>
        </Wrapper>
        // </Fade>
    );
}

const SkillWrap = ({ title, icon }: d) => {
    return (
        <div className="box">
            <i className={icon}></i>
            <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
            <a href="mailto:vinsdev185@gmail.com"><p>Hire Me <i className='bx bx-right-arrow-alt'></i></p></a>
        </div>
    )
}



export default Work;
