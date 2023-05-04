import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import arkaplan from "../src/images/arkaplan.png";
import { useState } from "react";
import axios from "axios";

function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passRepeat, setPassRepeat] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passRepeat) {
      toast.error("Şifreler eşleşmiyor!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/signup", {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("Kayit başarılı, yönlendiriliyorsunuz");
        setTimeout(() => {
          navigate("/");
        }, 1000);
        setEmail("");
        setPassword("");
        setPassRepeat("");
      } else {
        toast.error("Kayit oluşturulurken bir hata olustu");
      }
    } catch (err) {
      toast.error("Kayit oluşturulurken bir hata oluştu");
    }
  };

  return (
    <>
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
          <div className="card">
            <div className="card-body">
              <form className="bg-light rounded" onSubmit={handleSubmit}>
                <i className="fa-solid fa-pen-nib fa-4x"></i>
                <h1 className="h3 mb-3 fw-normal px-5">Hesap Oluşturma</h1>
                <div className="form-floating py-2">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                  />
                  <label For="floatingInput">Email adresi</label>
                </div>
                <div className="form-floating py-2">
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="6"
                    placeholder="Şifrenizi Girin"
                    required
                  />
                  <label For="floatingPassword">Şifrenizi Giriniz</label>
                </div>
                <div className="form-floating py-2">
                  <input
                    type="password"
                    className="form-control"
                    value={passRepeat}
                    onChange={(e) => setPassRepeat(e.target.value)}
                    minLength="6"
                    placeholder="Tekrar Şifrenizi Giriniz"
                    required
                  />
                  <label For="floatingPassword">Tekrar Şifrenizi Giriniz</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Hesap Oluştur
                </button>
              </form>
              <p>
                Hesabınız var mı? <Link to="/">Giriş Yap</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingUp;
