import { Article, Header, MainPage } from '..';
import './App.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { validateCreatingCard } from '../../assets/validation';

function App() {
  const [fireCollection, setFireCollection] = useState([]);

  const getData = async () => {
    const db = firebase.firestore();
    const collections = await db.collection('reactdeved').get();
    const beforeValidate = collections.docs.map(el => el.data());
    setFireCollection(validateCreatingCard(beforeValidate));
  };
  useEffect(() => {
    getData();
  }, []);

  const article = fireCollection.map(el => {
    return (
      <Route path={`/article/${el.id}`} key={el.id}>
        <Article data={el} />
      </Route>
    );
  });

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/article" />
        </Route>
        <Route exact path="/article">
          <MainPage data={fireCollection} />
        </Route>
        {article}
      </Switch>
    </Router>
  );
}

export default App;
