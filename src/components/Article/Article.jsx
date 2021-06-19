import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Article.scss';
import Comment from './Comment';

function Article(props) {
  const { imageUrl, title, description, expertComment } = props.data;

  return (
    <section className="article-bg">
      <Container fluid>
        <article className="article">
          <h1 className="article__head">{title}</h1>
          <Image src={imageUrl} alt="imageUrl" className="article__img" />
          <p className="article__descr">{description}</p>
          <Comment data={expertComment} />
        </article>
      </Container>
    </section>
  );
}

export default Article;