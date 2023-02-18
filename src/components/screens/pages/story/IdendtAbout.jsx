import React from 'react';
import styled from 'styled-components';

import IdendtImage from '../../../../assets/images/our-stories/idendt-logo-big.png'

function IdendtAbout() {
    return (
        <MainContainer>
            <WrapperContainer>
                <LeftContainer>
                    <ImageContainer>
                        <img src={IdendtImage} alt="hero image"/>
                    </ImageContainer>
                </LeftContainer>
                <RightContainer>
                    <Title>idendt</Title>
                    <Description>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet laudantium deleniti esse cumque, eligendi est nemo aperiam excepturi minima optio, laborum blanditiis maxime temporibus numquam, nobis iusto? Eligendi, cumque esse.
                    </Description>
                    <Description>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet laudantium deleniti esse cumque, eligendi est nemo aperiam excepturi minima optio, laborum blanditiis maxime temporibus numquam, nobis iusto? Eligendi, cumque esse.
                    </Description>
                </RightContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default IdendtAbout;

const MainContainer = styled.div`
    margin-bottom: 30px;
`;
const WrapperContainer = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;
const LeftContainer = styled.div`
    width: 50%;
`;
const ImageContainer = styled.div`
    width: 100%;

    img {
        width: 100%;
        display: block;
    }
`;
const RightContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Title = styled.h3`
    font-size: 30px;
    font-weight: bolder;
    margin-bottom: 20px;
`;
const Description = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
`;