import React from 'react';
import Footer from '../Components/Footer';
import Icons from '../Components/Icons';
import IMAGES from '../assets';
import styled from 'styled-components';

// Define styled components for the images
const SmallImage = styled.img`
    width: 30%; /* Smaller width for the first image */
    margin-right: 10px; /* Add some spacing */
`;

const NormalImage = styled.img`
    width: 10%; /* Smaller width for the second image */
`;

const ImagesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 60px;
`;

const LinkWrapper = styled.a`
    text-decoration: none;
`;

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Connect Us</Footer.Title>
                        <Footer.Link href="https://www.youtube.com/@MCNpartners" target="_blank" rel="noopener noreferrer"><Icons className="fab fa-youtube" /></Footer.Link>
                        <Footer.Link href="https://www.instagram.com/millenniumfellowshipmec/" target="_blank" rel="noopener noreferrer"><Icons className="fab fa-instagram" /></Footer.Link>
                        <Footer.Link href="https://github.com/MillenniumMec-24" target="_blank" rel="noopener noreferrer"><Icons className="fab fa-github" /></Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Row>
                    <ImagesContainer>
                        <LinkWrapper href="https://www.millenniumfellows.org/apply" target="_blank" rel="noopener noreferrer">
                            <SmallImage src={IMAGES.imgOne} alt="" />
                        </LinkWrapper>
                        <NormalImage src={IMAGES.imgTwo} alt="" />
                    </ImagesContainer>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    );
}
