import PropTypes from "prop-types";
// impt
import Button from "./Button";

// rafce
const Header = ({ title }) => {
    const onClick=()=>{
        console.log('click')
    }
  return (
    <header className='header'>
      {/* <h1 style={{color:'pink',backgroundColor:'gray'}}>{title}</h1> */}
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
      {/* <Button color='pink' text='Hello1'/>
      <Button color='dodgerblue' text='Hello3'/> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propType = {
  title: PropTypes.string.isRequired,
  // 프롭스를 무조건 스트링으로 받겠다.
};

// const headingStyle = {
//   color: "pink",
//   backgroundColor: "gray",
// };

export default Header;
