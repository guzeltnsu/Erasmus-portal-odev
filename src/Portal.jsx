import React, { useEffect } from "react";
import Sidebar from "./companents/Sidebar";
import { useNavigate } from "react-router-dom";
import erasssss from "./images/erasssss.jpg";

function Portal() {
  var navigate = useNavigate();
  var isLogin = sessionStorage.getItem("isLogin");

  useEffect(() => {
    if (isLogin === "false") {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return (
    <div
      className="row"
      style={{
        backgroundImage: `url(${erasssss})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="col-3">
        <Sidebar
          about_to="About"
          app_to="Application"
          info_to="Info"
          cont_to="Contact"
          profil_to="PasswordUpdate"
        />
      </div>
      <div className="col-9">
        <h1>PORTALA HOŞ GELDİNİZ</h1>
      </div>
    </div>
  );
}

export default Portal;
