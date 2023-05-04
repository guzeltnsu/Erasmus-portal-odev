import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import arkaplan from "../src/images/arkaplan.png";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001", {
        email,
        password,
      });

      if (response.status === 200) {
        var isLogin = true;
        sessionStorage.setItem("isLogin", isLogin);
        if (response.data.message === "1") {
          sessionStorage.setItem("id_num", response.data.id_num);
          sessionStorage.setItem("loggedInUser", email);
          toast.success("Giriş başarılı. yönlendiriliyorsunuz...");
          setTimeout(() => {
            navigate("/portal");
          }, 2000);
        } else {
          toast.error("Kullanıcı adı veya sifre hatalı.");
        }
      }
    } catch (err) {
      toast.error("Kullanıcı adı ve şifre kontrolünde hata oluştu.");
    }
  };

  return (
    <div>
      <div
        className="row"
        style={{
          backgroundImage: `url(${arkaplan})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          boxSizing: "border-box",
        }}
      >
        <div className="col-md-4 offset-md-4 mt-4">
          <div
            className="card"
            style={{ backgroundColor: "rgba(207, 216, 220, 0.7)" }}
          >
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <i className="fa-solid fa-pen-nib fa-4x"></i>
                <h1 className="h3 mb-3 fw-normal">Giriş Yap</h1>

                <div className="form-floating py-2">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label For="floatingInput">Email adresi</label>
                </div>
                <div className="form-floating py-2">
                  <input
                    type="password"
                    className="form-control"
                    id="sifre"
                    placeholder="Şifrenizi Giriniz"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ backgroundColor: "248, 248, 255, 0.4" }}
                  />
                  <label For="floatingPassword">Şifrenizi Giriniz</label>
                </div>

                <p id="sonuc"></p>

                <button type="submit" className="w-100 btn btn-lg btn-primary">
                  Giriş
                </button>
              </form>
              <p>
                Hesabınız yok mu? <Link to="/signup">Kayıt Ol!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
