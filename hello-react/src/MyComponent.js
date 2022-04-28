import React, { Component } from "react";
// import { ReactPropTypes } from 'react'
import propTypes from "prop-types";

// const MyComponent = ({name,favNum,children}) => {
//   return (
//     <div>
//         Hello, my name is {name}.<br/>
//         children value is {children}.<br/>
//         My favorite number is {favNum}.
//     </div>
//   )
// }

class MyComponent extends Component {
  static defaultProps = {
    name: "default name",
  };
  static propsTypes = {
    name: propTypes.string,
    favNum: propTypes.number.isRequired,
  };
  render() {
    const { name, favNum, children } = this.props;
    return (
      <div>
        Hello, my name is {name}.<br />
        children value is {children}.<br />
        My favorite number is {favNum}.
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: "default name",
// };

// MyComponent.propTypes = {
//   name: propTypes.string,
//   favNum: propTypes.number.isRequired,
// };

export default MyComponent;
