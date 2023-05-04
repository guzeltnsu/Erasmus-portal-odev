import axios from "axios";
import React, { useState } from "react";

async function Signout(navigate) {
  const id_num = sessionStorage.getItem("id_num");

  try {
    const response = await axios.post("http://localhost:3001/signout", {
      id_num,
    });

    if (response.status === 200) {
      var isLogin = sessionStorage.getItem("isLogin");
      isLogin = false;
      sessionStorage.setItem("isLogin", isLogin);
      navigate("/");
    } else {
      alert("şu an cikisinizi yapamiyoruz.");
    }
  } catch (err) {
    console.error(err);
  }
}

export default Signout;
