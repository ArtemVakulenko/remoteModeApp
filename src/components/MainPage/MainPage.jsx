import React from 'react';
import { Container } from 'react-bootstrap';
import { Card } from '..';
import './MainPage.scss';

function MainPage(props) {
  
  const createCard = () => {
    return props.data.map(el => <Card data={el} key={el.description} />);
  };

  return (
    <div className="main-bg">
      <Container fluid>
        <main className="main">
          {createCard()}
        </main>
      </Container>
    </div>

  );
}

export default MainPage;