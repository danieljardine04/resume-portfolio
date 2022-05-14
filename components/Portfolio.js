import React from 'react';
import main from '../assets/images/main_typing_page.jpg';
import typing from '../assets/images/typing_page.jpg';
import highscore from '../assets/images/highscore.jpg'
import warehouseMain from '../assets/images/warehouse_main_page.jpg';
import warehouseItems from '../assets/images/warehouse_actions.jpg';
import warehouseReturns from '../assets/images/completed_returns.jpg';

const Portfolio = () => {
  return(
    <section>
        <h1 className="titles">My Projects</h1>
      <div>
        <a href="https://amhum.github.io/typingTest/" target="_blank">
        <h2>Typing Speed Test</h2>
        <img src={main} className="picture" alt="Ka-chow main page" />
        <img src={typing}  className="picture" alt="Ka-chow typing page" />
        <img src={highscore}  className="picture" alt="Ka-chow highscore page" />

        </a>
      </div>
      <div>
        <a href="https://salty-brook.herokuapp.com/login" target="_blank">
        <h2>Warehouse Returns</h2>
        <img src={warehouseMain}  className="picture" alt="Warehouse returns main page" />
        <img src={warehouseItems}  className="picture" alt="Warehouse returns Items" />
        <img src={warehouseReturns}  className="picture" alt="Completed Returns" />

        </a>
      </div>
      <div>
        <h2>Chess</h2>
      </div>
      <div>
        <h2>Risk</h2>
      </div>
    </section>
  )
}

export default Portfolio;