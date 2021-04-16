
import axios from 'axios';
import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';
import setPizzas from './redux/actions/pizzas';

const App = () => {

  const dispatch = useDispatch();


  useEffect(() => {

    //   fetch('http://localhost:3000/db.json')
    //     .then(res => res.json())
    //     .then(json => {
    //       setPizzas(json.pizzas)
    //     })

    axios.get('http://localhost:3000/pizzas')
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  });

  return (
    <div className="wrapper" >
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />

      </div>
    </div>
  )
}

export default App;
