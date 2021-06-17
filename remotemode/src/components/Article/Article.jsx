import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Article.scss';
import Comment from './Comment';

function Article(props) {
  const { img, description, articleDescr, сomment } = props.data;

  return (
    <section className="article-bg">
      <Container fluid>
        <article className="article">
          <h1 className="article__head">{description}</h1>
          <Image src={img} alt="imageUrl" className="article__img" />
          <p className="article__descr">{articleDescr}</p>
          <Comment data={сomment} />
        </article>
      </Container>
    </section>
  );
}

export default Article;