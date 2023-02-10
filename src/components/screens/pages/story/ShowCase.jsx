import React from 'react';
import styled from 'styled-components';

function ShowCase() {
    return (
        <MainContainer>
            <WrapperContainer>
                <TopContainer>
                    <ContentBox>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque felis, ultricies ac augue quis, tincidunt cursus tellus. Phasellus nulla elit, tincidunt et vehicula vitae, pharetra at dolor. Vestibulum hendrerit mauris neque, vitae faucibus magna maximus quis. Duis vitae lacinia metus. Pellentesque nec odio blandit, hendrerit mi quis,
                        </Description>
                    </ContentBox>
                </TopContainer>
                <BottomContainer>
                    <PersonBox>
                        <Title>Name</Title>
                        <PersonDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi consectetur eum perspiciatis voluptates cumque ab ea praesentium at, assumenda cupiditate odio. Voluptates officia ratione dignissimos possimus excepturi fugit numquam!
                        </PersonDescription>
                    </PersonBox>
                </BottomContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default ShowCase;

const MainContainer = styled.div`
    margin-bottom: 100px;
`;
const WrapperContainer = styled.div`
    width: 75%;
    margin: 0 auto;
`;
const TopContainer = styled.div`
    margin-bottom: 50px;
`;
const ContentBox = styled.div`
    margin-bottom: 30px;
`;
const Description = styled.p``;
const BottomContainer = styled.div`
    position: relative;
    background-color: #b4c1cc;
    height: 500px;
`;
const PersonBox = styled.div`
    background-color: #fff;
    padding: 30px;
    width: 40%;
    position: absolute;
    bottom: -100px;
    left: 5%;
`;
const Title = styled.h3`
    font-size: 35px;
    font-weight: bold;
    color: #000;
    `;
const PersonDescription = styled.p`
    font-size: 20px;
    color: #000;
`;
