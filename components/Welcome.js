import React from 'react';
import aboutMe from '../assets/images/real_about_me.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Welcome = () => {
  return(
    <section>
      <div className="hero"> 
        <h1>Welcome To My Portfolio</h1>
      </div>
      

    <Container fluid>
      <Row>
        <section className="my-5">
          <h1 className="titles">About Me</h1>
         </section>
      <Col xs={6}>
      
          <img src={aboutMe} className="about" id="about-right" alt="A photo of me" />
      </Col>
      <Col>
          <p className="about" id="about-left">
            I am a husband to a beautiful Brazilian wife. We have happily married for 3 years. 
            I have 9 brothers and sisters so I am a part of a big family. I also have a dog and cat.

            I really like to eat good food, go on walks with my Wife and my dog, and go to the movies.
            I also really like to play video games, which also peaked my interest in programming and web
            design.  

          </p>
      
      </Col>

      </Row>

    </Container>
    </section>
  )
}

export default Welcome;