import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Card.scss';

function CardItem(props) {
  const { id, imageUrl, title } = props.data;

  return (
    <Card >
      <Card.Body className="mycard">
        <NavLink to={`/article/${id}`}>
          <Card.Img src={imageUrl} variant="top" />
          <Card.Text className="mycard__description">{title}</Card.Text>
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default CardItem;