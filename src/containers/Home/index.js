import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import {
  getFilmsInfo
} from '../../actions';

class Home extends React.Component {
  componentDidMount() {
    const { getFilmsInfo } = this.props;
    if (typeof getFilmsInfo === 'function') {
      getFilmsInfo();
    }
    // fetch('http://www.omdbapi.com/?t=joker&apikey=1977b733')
    // .then((a) => {
    //   console.log('a', a);
    // })
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <h2>Welcome to omdapi</h2>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getFilmsInfo: PropTypes.func,
};

function mapStateToProps(state) {
  const {
    films,
  } = state;
  return {
    films,
  };
}

export default connect(mapStateToProps, {
  getFilmsInfo
})(Home);
