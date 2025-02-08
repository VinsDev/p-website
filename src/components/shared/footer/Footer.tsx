import styled from "styled-components";
import { Props } from "../../../theme/styling/GlobalStyle";
import { Container } from "../../Container";

const Wrapper = styled.footer.attrs({className: 'footer'})<{ children?: React.ReactNode }>`
    padding-block: 6em;

    .flex{
        gap: 1em;
        font-size: 1.9rem;
        margin-top: 1.4em;

        a{
            color: ${({theme}: Props) => theme.expCardHover};
        }
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <p className="text-center">Designed & Built with love by Vincent ©{new Date().getFullYear()}</p>

                <ul role='list' className="flex">
                    <li><a href="https://www.linkedin.com/in/vincent-dominic-277644273" target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-linkedin-square' ></i></a></li>
                    <li><a href="https://github.com/VinsDev" target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-github'></i></a></li>
                    <li><a href="https://x.com/DomVins757" target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i style={{ fontFamily: 'Arial', fontStyle: 'normal' }}>𝕏</i></a></li>
                    <li><a href="https://wa.me/2348105634427" target='_blank' referrerPolicy='no-referrer' rel="noreferrer"><i className='bx bxl-whatsapp'></i></a></li>
                    <li><a href="tel:+2348105634427"><i className='bx bx-phone'></i></a></li>
                </ul>
            </Container>
        </Wrapper>
    );
}

export default Footer;