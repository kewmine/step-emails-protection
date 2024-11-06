import * as React from "react";
import PropTypes from "prop-types";
import Header from "./sections/header";
import Analyzer from "./sections/analyzer";
import Reporter from "./sections/reporter";
import Footer from "./sections/footer";
import "./app.scss";

const App = (props) => {


  return (
    <>
      <Header />
      <Analyzer />
      <Reporter />
      <Footer />
    </>
  );
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;
