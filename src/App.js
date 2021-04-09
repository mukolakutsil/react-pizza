
import axios from 'axios';
import { React, Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';
import setPizzas from './redux/actions/pizzas';
class App extends Component {

  componentDidMount() {
    //   fetch('http://localhost:3000/db.json')
    //     .then(res => res.json())
    //     .then(json => {
    //       setPizzas(json.pizzas)
    //     })

    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        this.props.setPizzas(data.pizzas);
      });
  };

  render() {

    return (
      <div className="wrapper" >
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />

        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  }
};


const mapDispatchToProps = {
  setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
