import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Cursor from "./components/CustomCursor";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#e6e6e6] dark:bg-[#1f1f1f] dark:text-white">
      <Cursor className="" />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
