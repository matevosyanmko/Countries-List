import React, { useEffect } from 'react';
import './App.css';
import { message, Button, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { COUNTRIES } from './store/actiontypes';
import { ListTable } from './components/Table';
import { Error } from './components/Error';
const { Search } = Input;

class App extends React.Component {
  state = {
    type: true,
  };
  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch({ type: COUNTRIES.FIND_COUNTRIES });
  }
  async searchByName(payload) {
    const { dispatch } = this.props;
    payload.length
      ? await dispatch({ type: COUNTRIES.FIND_COUNTRIES_BY_NAME, payload })
      : await dispatch({ type: COUNTRIES.FIND_COUNTRIES });
  }
  render() {
    const { Countries } = this.props;
    if (Countries.error) {
      message.error(Countries.error);
      return <Error info={Countries.error} />;
    }
    return (
      <div className="App">
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Search placeholder="Search by name" onSearch={value => this.searchByName(value)} style={{ width: 200 }} />
          <Search placeholder="Search by alphacode" onSearch={value => console.log(value)} style={{ width: 200 }} />
          <Search placeholder="Search by capital" onSearch={value => this.searchByName(value)} style={{ width: 200 }} />
        </div>

        <ListTable data={Countries.data} loading={!Countries.loaded} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Countries: state.Countries,
});

export default connect(mapStateToProps)(App);
