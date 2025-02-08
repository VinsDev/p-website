import styled from "styled-components";

const LogoWrapper = styled.svg.attrs({viewBox: '0 0 87.866 101.459', xmlns: 'http://www.w3.org/2000/svg'})`
    width: 55px;
    height: 55px;
    object-fit: contain;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
`;

export const Logo = () => {
    return (
        <LogoWrapper>
            <g id="logo" transform="translate(3 3.464)">
                <g id="hex">
                    <path 
                        id="Path_83" 
                        data-name="Path 83" 
                        d="M40.933,0,81.866,23.633V70.9L40.933,94.53,0,70.9V23.633Z" 
                        fill="none" 
                        stroke="#0066FF" 
                        strokeWidth="6"
                    />
                </g>
                <text 
                    id="VD" 
                    transform="translate(14.205 61.53)" 
                    fill="#0066FF" 
                    style={{
                        fontSize: '38px',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: '600',
                        letterSpacing: '2px'
                    }}
                >
                    <tspan x="0" y="0">VD</tspan>
                </text>
            </g>
        </LogoWrapper>
    )
}