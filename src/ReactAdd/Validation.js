import React from 'react';
import PropTypes  from 'prop-types';
 class Greeting extends React.Component {
  render() {
    return (
      <div><h1>Hello, {this.props.name} {this.props.id}</h1></div>
    );
  }
}
  Greeting.propTypes={
    name:PropTypes.string,
    id:PropTypes.number.isRequired,
  }
  Greeting.defaultProps={
    name:'vini'
  };
export default Greeting;