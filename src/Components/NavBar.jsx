import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBox from "./SearchBox";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className={`${styles.navBrand}`}>
        <Navbar.Brand>
          <Link className={`${styles.brand}`} to="/">
            Online Store
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          />
          <SearchBox />
          <Link to={"/cart"}>
            <Button variant="outline-success" onClick={() => {}}>
              <FaShoppingCart /> Cart (<span>0</span>)
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
