import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Sidebar from "./companents/Sidebar";
import axios from "axios";

function PasswordUpdateForm() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");

  const id_num = sessionStorage.getItem("id_num");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "newPassword":
        setNewPassword(value);
        break;
      case "newPasswordConfirmation":
        setNewPasswordConfirmation(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== newPasswordConfirmation) {
      toast.error("Şifre eşleşmesi yanlış girildi.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/updatePassword",
        {
          id_num,
          newPassword,
        }
      );
      if (response.status === 200) {
        setPassword("");
        setNewPassword("");
        setNewPasswordConfirmation("");
        toast.success("Şifreniz başarıyla güncellendi!");
      } else {
        toast.error(response.data.error);
      }
      console.log(response.data);
    } catch (error) {
      toast.error("Veritabanıyla bağlantı sağlanamadı.");
    }
  };

  return (
    <div className="row">
      <div className="col-3">
        <Sidebar
          profil_active="active"
          profil_disable="disabled"
          about_to="/portal/About"
          app_to="/portal/Application"
          info_to="/portal/Info"
          cont_to="/portal/Contact"
        />
      </div>
      <div className="col-8">
        <div className="col-5" style={{ margin: 150 }}>
          <form onSubmit={handleSubmit}>
            <div className="form-floating row g-3 p-2 align-items-center">
              <div>
                <label htmlFor="password">Mevcut Şifre:</label>
              </div>
              <input
                className="form-control"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-floating row g-3 p-2 align-items-center">
              <div>
                <label htmlFor="newPassword">Yeni Şifre:</label>
              </div>
              <input
                className="form-control"
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-floating row g-3 p-2 align-items-center">
              <div>
                <label htmlFor="newPasswordConfirmation">
                  Yeni şifre onayı:
                </label>
              </div>
              <input
                className="form-control"
                type="password"
                name="newPasswordConfirmation"
                value={newPasswordConfirmation}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button class="w-100 btn btn-lg btn-success" type="submit">
                Güncelle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordUpdateForm;
