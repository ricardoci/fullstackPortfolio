import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/me.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Ricardo Cisneros</span>
              </p>
              <h2 className="about__heading">A full Stack developer</h2>
              <div className="about__info">
                <PText>
                  
                  
                  Originally from Lynwood, California, I have lived in various places throughout my life, including the hot desert of Desert Hot Springs, California. Though I never imagined living in such a warm climate, I have come to appreciate its unique aspects and have learned to enjoy my time here.
                  <br /> <br />
                  My passion for technology led me to start coding while attending college. As an avid watcher of YouTube videos showcasing the latest tech and product unboxings, I was particularly intrigued by Apple's iPhone UI and wondered how it was made. It wasn't until someone asked me "if you like tech, why aren't you coding?" that I realized that this was what I wanted to pursue. 
                 
                  <br />
                  <br />
                  I strive to continuously improve as a developer every day. My passion for learning new technologies stems from the desire to simplify tasks and enhance efficiency. My goal is to have fun while building innovative solutions that enable people to explore and fulfill their potential.
                </PText>
              </div>
            
              <Button btnText="Download Resume" download href="FullStackResume.pdf" />

            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Bloomington High School, California']}
              />
              <AboutInfoItem
                title="Collage"
                items={['Riverside City College']}
              />
              <AboutInfoItem
                title="BootCamp"
                items={['University Of Minnesota']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'MySQL', 'NoSQL']}
              />
              <AboutInfoItem
                title="Design"
                items={['Figma', 'Procreate']}
              />
            </div>
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2010-2012"
                items={['junior developer at web Cifar']}
              />
              <AboutInfoItem
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              />
              <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              />
            </div> */}
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
