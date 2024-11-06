import * as React from "react";
import PropTypes from "prop-types";
import { Image, tokens, makeStyles } from "@fluentui/react-components";


const Header = (props) => {
  const { title, logo, message } = props;

  return (
    <section>
      <Image width="90" height="90" src={logo} alt={title} />
      <h1>{message}</h1>
    </section>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
  message: PropTypes.string,
};

export default Header;
