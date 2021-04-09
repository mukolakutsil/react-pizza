
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    //   fetch('http://localhost:3000/db.json')
    //     .then(res => res.json())
    //     .then(json => {
    //       setPizzas(json.pizzas)
    //     })
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        setPizzas(data.pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />

      </div>
    </div>
  );
}

export default App;
