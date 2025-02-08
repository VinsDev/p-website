import FadeIn from "react-fade-in";
import styled from "styled-components";
import { NavBar } from "../shared/nav/Nav";
import Footer from "../shared/footer/Footer";

// A hack
const Ul = styled.ul``;

const Wrap = styled.div<{ children?: React.ReactNode; className?: string }>`
    position: relative;
    .email-me{
        z-index: 3;
        position: fixed;
        bottom:0;
        right:10px;
        a{
            margin: 20px auto;
            padding: 10px;
            letter-spacing: 0.1em;
            -webkit-writing-mode: vertical-rl;
            writing-mode: vertical-rl;
            display: inline-block;
            transition: .4s;
            font-size: .8rem;
            color: #707070;
        }

        &::after{
            content: "";
            display: block;
            width: 1px;
            height: 90px;
            margin: 0px auto;
            background-color: #707070;
        }

        @media (max-width: 1279px) {
            display: none;

            &::after{
                display: none;
            }
        }
    }

    .media{
        z-index: 3;
        position: fixed;
        bottom: 0;
        left:10px;

        ul{
            display: flex;
            flex-direction: column;
            -webkit-box-align: center;
            align-items: center;
            margin: 0px;
            padding: 0px;
            list-style: none;

            li{
               // margin-bottom: 10px;
                a{
                    color: #707070;
                    padding: 10px;
                    display: inline-block;
                    transition: .4s;
                    font-size: 1.3rem;

                    &:hover{
                        transform: translateY(-3px);
                    }
                }
            }

            &::after{
                content: "";
                display: block;
                width: 1px;
                height: 90px;
                margin: 0px auto;
                background-color: #707070;
            }
        }

        @media (max-width: 1279px) {
            display: none;

            &::after{
                display: none;
            }
        }
    }
`;

const DefaultLayout = ({children}: any) => {
    return (
        <Wrap className="layout-default">
            <NavBar />
            {children}
            <Footer />
            <div className="media">
                <FadeIn delay={200} wrapperTag={Ul}>
                    <li><a href="https://www.linkedin.com/in/vincent-dominic-277644273" target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-linkedin-square' ></i></a></li>
                    <li><a href="https://github.com/VinsDev" target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-github'></i></a></li>
                    <li><a href="https://x.com/DomVins757" target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i style={{ fontFamily: 'Arial', fontStyle: 'normal' }}>𝕏</i></a></li>
                    <li><a href=" https://wa.me/2348105634427" target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-whatsapp'></i></a></li>
                    <li><a href="tel:+2348105634427"><i className='bx bx-phone'></i></a></li>
                </FadeIn>
            </div>
            <FadeIn delay={200} className="email-me">
                <a href="mailto:vinsdev185@gmail.com">vinsdev185@gmail.com</a>
            </FadeIn>
        </Wrap>
    );
}

export default DefaultLayout;