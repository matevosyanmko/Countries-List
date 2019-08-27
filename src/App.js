import React from 'react';
//components
import { ListTable } from './components/Table';
import { Error } from './components/Error';
// redux
import { connect } from 'react-redux';
import { COUNTRIES } from './store/actiontypes';
import { API } from './store/endpoints';
// assets
import { Input } from 'antd';
const { Search } = Input;

const style = {
  app: { width: "80%", margin: "auto", padding: "15px" },
  filter: { display: 'flex', justifyContent: 'space-between', padding: "20px 10px", background: "#1B5E20" },
  field: { width: 300 }
}

class App extends React.Component {

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch({ type: COUNTRIES.FIND_COUNTRIES, api: API.All });
  }

  async searchByName(payload) {
    const { dispatch } = this.props;
    payload.length ? await dispatch({ type: COUNTRIES.FIND_COUNTRIES_BY_NAME, payload, api: API.ByName }) : await dispatch({ type: COUNTRIES.FIND_COUNTRIES, api: API.All });
  }

  async searchByAlpha(payload) {
    const { dispatch } = this.props;
    payload.length ? await dispatch({ type: COUNTRIES.FIND_COUNTRIES_BY_ALPHA, payload, api: API.ByCode }) : await dispatch({ type: COUNTRIES.FIND_COUNTRIES, api: API.All });
  }

  async searchByCapital(payload) {
    const { dispatch } = this.props;
    payload.length ? await dispatch({ type: COUNTRIES.FIND_COUNTRIES_BY_CAPITAL, payload, api: API.ByCapital }) : await dispatch({ type: COUNTRIES.FIND_COUNTRIES, api: API.All });
  }

  render() {
    const { Countries } = this.props;
    if (Countries.error) return <Error info={Countries.error} />;

    return (
      <div style={style.app}>
        <div style={style.filter}>
          <Search placeholder="Search by name   Ex. Russia" onSearch={(value) => this.searchByName(value)} style={style.field} />
          <Search placeholder="Search by alphacode  Ex. RU" onSearch={(value) => this.searchByAlpha(value)} style={style.field} />
          <Search placeholder="Search by capital  Ex.` Moscow" onSearch={(value) => this.searchByCapital(value)} style={style.field} />
        </div>
        <ListTable data={Countries.data} loading={Countries.loaded} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Countries: state.Countries
});

export default connect(mapStateToProps)(App);
