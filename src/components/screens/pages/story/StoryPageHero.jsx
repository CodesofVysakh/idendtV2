import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../../../assets/images/our-stories/idendt-reception.png';
import BookImage from '../../../../assets/images/our-stories/idendt-book.png';
import HandsProfit from '../../../../assets/images/our-stories/hands-profit.png';

function StoryPageHero() {
    return (
        <MainContainer>
            <WrapperContainer>
                <TopContainer>
                    <ContentBox>
                        <Title>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Title>
                        <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque felis, ultricies ac augue quis, tincidunt cursus tellus. Phasellus nulla elit, tincidunt et vehicula vitae, pharetra at dolor. Vestibulum hendrerit mauris neque, vitae faucibus magna maximus quis. Duis vitae lacinia metus. Pellentesque nec odio blandit, hendrerit mi quis, porttitor velit. Sed egestas, ante ut sodales egestas, dui justo congue orci, nec 
                        </Description>
                    </ContentBox>
                    <ImageContainer>
                        <img src={HeroImage} alt="hero image"/>
                    </ImageContainer>
                </TopContainer>
                <BottomContainer>
                    <CategoryBox>
                        <CategoryList>
                            <CategoryItem>1.Strategy</CategoryItem>
                            <CategoryItem>2.Branding</CategoryItem>
                            <CategoryItem>3.Website</CategoryItem>
                            <CategoryItem>4.Client Details</CategoryItem>
                        </CategoryList>
                    </CategoryBox>
                    <ImageContainer>
                        <img src={BookImage} alt="hero image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={HandsProfit} alt="hero image"/>
                    </ImageContainer>
                </BottomContainer>
            </WrapperContainer>
        </MainContainer>
    )
}

export default StoryPageHero;

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
const BottomContainer = styled.div``;
const ContentBox = styled.div`
    width: 50%;
    margin-bottom: 30px;
`;
const Title = styled.h3`
    font-size: 45px;
    margin-bottom: 20px;
`;
const Description = styled.p`
    font-size: 20px;
`;
const ImageContainer = styled.div`
    width: 100%;

    img {
        width: 100%;
        display: block;
    }
`;
const CategoryBox = styled.div`

`;
const CategoryList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
`;
const CategoryItem = styled.li`
    width: 50%;
    margin-bottom: 50px;
    font-size: 40px;
`;