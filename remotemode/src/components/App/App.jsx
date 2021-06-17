import { Article, Header, MainPage } from '..';
import './App.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import data from '../../data/data.json';

function App() {
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
        <Route exact path="/article" component={MainPage} />
        {article}
      </Switch>
    </Router>
  );
}

export default App;
