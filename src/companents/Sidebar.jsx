import React, { useState } from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHandsHoldingCircle,
  faLandmark,
  faTarp,
  faFilePen,
  faDisplay,
} from "@fortawesome/free-solid-svg-icons";

import { useLocation, Link, useNavigate } from "react-router-dom";
import Signout from "../functions/Signout";
//import PasswordUpdate from "./PasswordUpdate";

const Sidebar = (props) => {
  const navigate = useNavigate();

  var loggedUser = sessionStorage.getItem("loggedInUser");

  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };
  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
            <div
              className={
                closeMenu === false ? "logoContainer" : "logoContainer active"
              }
            >
              <img
                src={logo}
                alt="logocyber"
                style={{ width: "100px", height: "100px" }}
                className="logo"
              />
              <a href="/portal" style={{ textDecoration: "none" }}>
                <h2 className="title">Cybermacs Portal</h2>
              </a>
            </div>
            <div
              className={
                closeMenu === false
                  ? "burgerContainer"
                  : "burgerContainer active"
              }
            >
              <div
                className="burgerTrigger"
                onClick={() => {
                  handleCloseMenu();
                }}
              ></div>
              <div className="burgerMenu"></div>
            </div>
            <div
              className={
                closeMenu === false
                  ? "profileContainer"
                  : "profileContainer active"
              }
            ></div>
            <div
              className={
                closeMenu === false
                  ? "contentsContainer"
                  : "contentsContainer active"
              }
            >
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <FontAwesomeIcon icon={faTarp} />
                  <Link
                    className={`nav-link ${props.about_active} ${props.about_disable}`}
                    to={`${props.about_to}`}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon icon={faDisplay} />
                  <Link
                    className={`nav-link ${props.app_active} ${props.app_disable}`}
                    to={`${props.app_to}`}
                  >
                    Application
                  </Link>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon icon={faFilePen} />
                  <Link
                    className={`nav-link ${props.info_active} ${props.info_disable}`}
                    to={`${props.info_to}`}
                  >
                    Info
                  </Link>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <Link
                    className={`nav-link ${props.cont_active} ${props.cont_disable}`}
                    to={`${props.cont_to}`}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon icon={faHandsHoldingCircle} />
                  <Link
                    className={`nav-link ${props.profil_active} ${props.profil_disable}`}
                    to={`${props.profil_to}`}
                  >
                    <p>{loggedUser}</p>
                  </Link>
                </li>
              </ul>
              <div className="btn" id="btn_div">
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => Signout(navigate)}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-6" id="sol" style={{ display: "none" }}></div>

            <div className="col-6" id="sag" style={{ display: "none" }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
