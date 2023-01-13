import React, { useState } from 'react';
import styled from 'styled-components';
import Gallery1 from '../../../assets/images/landingPage/Digital-Strategy.png';
import Gallery2 from '../../../assets/images/landingPage/Branding.png';
import Gallery3 from '../../../assets/images/landingPage/Marketing.png';
import Gallery4 from '../../../assets/images/landingPage/Web-development.png';
import Gallery5 from '../../../assets/images/landingPage/Design-and-Media.png';
import Gallery6 from '../../../assets/images/landingPage/SEO.png';
import Group from '../../../assets/images/landingPage/OurServices.png';

function Services({serviceRef}) {
    const [ toggle, setToggle ] = useState();
    const serviceData = [
        {
            "id" : 1,
            "image" : Gallery1,
            "title" : "Digital Strategy",
            "subtitle" :"We are a stand-alone brand consultant that collaborates with clients to unlock potential. To generate impact and\
            desire, we blend incisive strategic thinking with creative design. We combine strategy, design, and technology to produce stunning,\
            brilliant brands and experiences that expand the brand's future vision"
        },
        {
            "id" : 2,
            "image" : Gallery2,
            "title" : "Branding",
            "subtitle" : "A brand is all about the emotions it evokes in the market. It is not limited to a visual identity, a logo, or a design for a product or\
            service, but rather, it's a comprehensive system that integrates all channels and points of contact. We provide an end-to-end range of\
            services, from communications to style manuals, naming, logo creation and placing you right in the market."
        },
        {
            "id" : 3,
            "image" : Gallery3,
            "title" : "Marketing",
            "subtitle" : "The process of planning and organising the extreme promotional campaigns which will get your business a high-level\
            recognition & that will lead your business to generate a great revenue & towards an ultimate expansion. Our Marketing Squad at\
            idenDT will suggest you the most vibrant strategies to implement so that your business will never have a saturation, it keeps growing and\
            it goes on."
        },
        {
            "id" : 4,
            "image" : Gallery4,
            "title" : "Web Development",
            "subtitle" : "We know that websites speak louder for a brand. Our team of passionate developers and creative designers can help\
            you create next-level websites by strategically blending user experience and brand storytelling. Our web designers and\
            developers create responsive websites that feel at home on any device. Product landing pages, marketing sites, or UX/Ul for\
            company intranet portals-you name it, and we do it all."
        },
        {
            "id" : 5,
            "image" : Gallery5,
            "title" : "Design and Media",
            "subtitle" : "The course of creating a Design for your Brand which will let your business get a worldwide recognition & this\
            design will resemble your brand in the Global Market. Our Crew at idenDT will screen you with the most appropriate Design and will\
            implement it on the finest Media Platforms where in your desired audience will be aware about who you are."
        },
        {
            "id" : 6,
            "image" : Gallery6,
            "title" : "SEO",
            "subtitle" : "If you are ready to take your business to the next level, we are here to assist you. Using our marketing expertise, we can optimize\
            elements on your website that affect your ranking. You cannot maintain your top position on Google only by being popular and\
            visible. It's a fact. Therefore, we focus our off-page SEO service on building credibility for your website. To increase the authority of a\
            website, we use social media to increase brand awareness and provide quality backlinks."
        },
    ];
    return (
        <MainContainer>
            <WrapperContainer  ref={serviceRef}>
                <Title>OUR SERVICES</Title>
                <ImageGallery>
                    {serviceData.map((item) => (
                        <ImageContainer key={item.id} onMouseEnter={() => setToggle(item.id)} onMouseLeave={() => setToggle()}>
                            <img src={item.image} alt="Image" />
                            <BottomContent className={toggle === item.id ? "hoverContent" : ""}>
                                <ContentHeading>{item.title}</ContentHeading>
                                <ContentDescription className={toggle === item.id ? "onHoverContent" : ""}>
                                    {item.subtitle}
                                </ContentDescription>
                            </BottomContent>
                        </ImageContainer>
                    ))}
                </ImageGallery>
                <TagLine>" <TagContent>QUALITY OVER QUANTITY <br />AND RESULTS OVER EXCUSES</TagContent> "</TagLine>
                <ImageContainer>
                    <img src={Group} alt="Image" />
                </ImageContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default Services;

const MainContainer = styled.div `
    /* height: calc(100vh - 220px); */
    padding-bottom: 80px;
    @media all and (max-width: 640px) {
        padding-bottom: 30px;
    }
    @media all and (max-width: 480px) {
        padding-bottom: 20px;
    }
`;
const WrapperContainer = styled.div `
    width: 80%;
    margin: 0 auto;
`;
const Title = styled.h3 `
    font-size: 32px;
    margin-bottom: 20px;
    @media all and (max-width: 980px) {
        font-size: 28px;
    }
`;
const ImageGallery = styled.div `
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    margin-bottom: 30px;
    cursor: pointer;
    @media all and (max-width: 768px) {
        grid-template-columns: auto auto;
    }
    @media all and (max-width: 480px) {
        grid-template-columns: auto;
    }
`;
const ImageContainer = styled.div `
    position: relative;
    overflow: hidden;
    width: 90%;
    margin: 0 auto;
    img {
        width: 100%;
        display: block;
    }
`;
const TagLine = styled.small`
    font-size: 28px;
    font-style: bold;
    display: block;
    text-align: center;
    margin-bottom: 25px;
    font-family: Georgia;
    @media all and (max-width: 480px) {
        font-size: 20px;
    }
    `;
const TagContent = styled.p`
    display: inline;
    font-family: inter-bold;
    font-style: italic;
`;

const BottomContent = styled.div `
    /* background-image: linear-gradient(to bottom, #5c5c5c 30%, rgba(255,255,255,0));
    box-shadow: 0px -2px 2px rgba(34,34,34,0.6); */
    /* -webkit-mask-image : linear-gradient(90deg, transparent, #000 42.3rem); */
    background-image: -webkit-gradient(
    linear, left top, left bottom, from(rgba(50,50,50,0.8)),
    to(rgba(80,80,80,0.2)), color-stop(.5,#333333)
    );
    padding: 10px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 75%;
    transition: all 0.3s ease-in-out;
    overflow: scroll;
    &.hoverContent {
        top: 0;
        transition: all 0.3s ease-in-out;
    }

    @media all and (min-width: 1311px) {
        top: 85%;
    }
    @media all and (max-width: 980px) {
        top: 70%;
    }
    @media all and (max-width: 768px) {
        top: 77%;
    }
    @media all and (max-width: 480px) {
        top: 85%;
    }
    @media all and (max-width: 360px) {
        top: 76%;
    }
`;
const ContentHeading = styled.h5`
    font-size: 22px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 20px;
    @media all and (max-width: 980px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`;
const ContentDescription = styled.p`
    font-size: 16px;
    display: none;
    &.onHoverContent {
        display: inline-block;
    }
    &::-webkit-scrollbar {
        display: none;
      }
    @media all and (max-width: 980px) {
        font-size: 12px;
    }

`;