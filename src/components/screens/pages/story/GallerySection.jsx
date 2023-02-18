import React from 'react';
import styled from 'styled-components';

import Notepad from '../../../../assets/images/our-stories/notepad.png';
import BookTag from '../../../../assets/images/our-stories/idendt-book-and-tag.png';
import BlackBoard from '../../../../assets/images/our-stories/idendt-black-board.png';

function GallerySection() {
    return (
        <MainContainer>
            <WrapperContainer>
                <TopContainer>
                    <ImageContainer>
                        <img src={Notepad} alt="hero image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={BookTag} alt="hero image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={BlackBoard} alt="hero image"/>
                    </ImageContainer>
                </TopContainer>
                <BottomContainer>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aliquam incidunt accusamus hic tenetur veritatis numquam expedita porro dolor eos aspernatur, vero quae quo voluptas facere sequi ratione perferendis consectetur!
                    </Description>
                </BottomContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default GallerySection;

const MainContainer = styled.div`
    margin-bottom: 30px;
`;
const WrapperContainer = styled.div`
    width: 75%;
    margin: 0 auto;
`;
const TopContainer = styled.div`
    margin-bottom: 50px;
`;
const ImageContainer = styled.div`
    width: 100%;

    img {
        width: 100%;
        display: block;
    }
`;
const BottomContainer = styled.div``;
const Description = styled.p`
    font-size: 20px;
`;
