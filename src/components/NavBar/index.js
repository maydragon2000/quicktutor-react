import React, { useState, useEffect } from "react";
import NormalButton from "../NormalButton";
import { Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { attemptGetUser } from "../../store/thunks/user";

const NavBar = (props) => {

  const { isAuth } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (isAuth && user.user == undefined) {
      dispatch(attemptGetUser(token))
        .then(() => {
          setName(user.user.name);
        })
        .catch(() => {
        });
    }
    else if(isAuth && user.user !== undefined){
      setName(user.user.name);
    }
  }, [user]);
  const [dropDownDisplay, setDropDownDisplay] = useState("none");
  const [brandImgDisplay, setBrandImgDisplay] = useState("block");
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      props.setNavBackColor("#1b1b26");
      setDropDownDisplay("block");
      setBrandImgDisplay("none");
    } else {
      props.setNavBackColor("transparent");
      setDropDownDisplay("none");
      setBrandImgDisplay("block");
    }
  }
  return (
    <>
      <Navbar className="" style={{ backgroundColor: props.navBackColor }}>
        <div className="container">
          <NavbarBrand href="/">
            <img style={{ display: brandImgDisplay }}
              className="white-img"
              src={"assets/image/a216b605626b87ed5097b77216439dcb.svg"}
            />
            <img style={{ display: dropDownDisplay }}
              className="special-img"
              src={"assets/image/d8cdb7a12ed7538612e66612979a6e41.svg"}
            />
          </NavbarBrand>
          <div className="nav-Learn">
            <NavLink>Learn</NavLink>
          </div>
          <div className="nav-Teach">
            <NavLink>Teach</NavLink>
          </div>
          <div className="dropdown" style={{ display: dropDownDisplay }}>
            <NormalButton
              class="dropbtn"
              value="Get the app"
              imageDisplay="none"
              url="#"
            />
            <div className="triangle-up"></div>
            <div className="dropdown-content">
              <a href="#">
                <img src={"assets/icons/apple.svg"} />
              </a>
              <a className="between">|</a>
              <a href="#">
                <img src={"assets/icons/google.svg"} />
              </a>
            </div>
          </div>
          {!isAuth ? (<><NormalButton class={"login"} value={"Login"} imageDisplay="none" url="login" />
            <NormalButton
              class={"Register"}
              value={"Register"}
              imageDisplay="none"
              url="register"
            /></>) : (<Dropdown className="drop_logout">
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                {name}
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="/" onClick={() => { localStorage.clear(); }}>
                  Log Out
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>)}


          <button className="navbar-toggler" onClick={props.sideNav} type="button">
            <img
              className="brrger"
              src={"assets/icons/burger@1x.svg"}
              style={{ display: props.burgerDispaly }}
            />
            <img
              className="cross"
              src={"assets/icons/cross@1x.svg"}
              style={{ display: props.crossDisplay }}
            />
          </button>
        </div>
      </Navbar>
    </>
  );
};
export default NavBar;
