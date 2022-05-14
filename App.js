import React, { useState } from 'react';
import './App.css';

import Body from './components/Body/index'
import Resume from './components/Resume';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Welcome from './components/Welcome'
import Footer from './components/Footer'



function App() {

  const [categories] = useState([
    {
      name: 'Welcome',
      description: "I am a husband to a beautiful Brazilian wife. We have happily married for 3 years. I have 9 brothers and sisters so I am a part of a big family. I also have a dog and cat. I really like to eat good food, go on walks with my Wife and my dog, and go to the movies. I also really like to play video games, which also peaked my interest in programming and web design. ",
      code: Welcome
    },

    {
      name: 'Portfolio',
      description: 'a place where you can see my projects',
      code: Portfolio
    },

    {
      name: 'Resume',
      description: 'a place where you are able to contact me',
      code: Resume
    }
  
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div >
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      
      ></Nav>
      <main>
        <Body currentCategory={currentCategory}></Body>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
