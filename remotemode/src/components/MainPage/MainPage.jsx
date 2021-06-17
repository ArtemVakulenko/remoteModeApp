import React from 'react';
import { Container } from 'react-bootstrap';
import { Card } from '..';
import data from '../../data/data.json';
import './MainPage.scss';

function MainPage() {
  const card = () => {
    return data.map(el => <Card data={el} key={el.id} />);
  };

  return (
    <div className="main-container">
      <Container fluid>
        <main className="main">
          {card()}
        </main>
      </Container>
    </div>

  );
}

export default MainPage;