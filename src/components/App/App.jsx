import { Article, Header, MainPage } from '..';
import './App.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import firebase from '../../assets/firebase.js'
// import firebase from 'firebase'
import data from '../../data/data.json'
import React from 'react';
// import { useEffect, useState } from 'react'
// import { validateCreatingCard } from '../../assets/validation';

function App() {
  // const [fireCollection, setFireCollection] = useState([]);

  // const getData = async () => {
  //   const db = firebase.firestore();
  //   const collection = await db.collection('data').get();
  //   const data = collection.docs.map(el => el.data());
  //   console.log(collection)
  //   setFireCollection(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  const article = data.map(el => {
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
          <MainPage data={data} />
        </Route>
        {article}
      </Switch>
    </Router>
  );
}

export default App;
