import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import { toast } from "react-hot-toast";
import { countries } from "../data/countries";

const Info = () => {
  var navigate = useNavigate();
  var isLogin = sessionStorage.getItem("isLogin");

  useEffect(() => {
    if (isLogin === "false") {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const [bilgi, setBilgi] = useState("");
  useEffect(() => {
    const bilgiGoster = async () => {
      const id_num = sessionStorage.getItem("id_num");
      console.log(id_num);

      try {
        const response = await axios.post("http://localhost:3001/info", {
          id_num,
        });
        if (response.status === 200) {
          setBilgi(response.data);
        }
      } catch (err) {
        toast.error("Kullanici bilgileri bulunamadi.", err);
      }
    };
    bilgiGoster();
  }, []);

  const handleUpdateClick = async (e) => {
    e.preventDefault();
    const id_num = sessionStorage.getItem("id_num");
    try {
      const newData = {
        id_num: id_num,
        isim: bilgi.isim,
        soyisim: bilgi.soyisim,
        email: bilgi.email,
        birthDate: bilgi.birthDate,
        tel_no: bilgi.tel_no,
        tc_no: bilgi.tc_no,
        pasaport_no: bilgi.pasaport_no,
        cinsiyet: bilgi.cinsiyet,
        engel: bilgi.engel,
        adres: bilgi.adres,
        adres_dty: bilgi.adres_dty,
        ulke: bilgi.ulke,
        il: bilgi.il,
        ilce: bilgi.ilce,
        postcode: bilgi.postcode,
        universite: bilgi.universite,
        fakulte: bilgi.fakulte,
        bolum: bilgi.bolum,
        mezun: bilgi.mezun,
        mezun_tarih: bilgi.mezun_tarih,
        mezun_ort: bilgi.mezun_ort,
        yabanci_dil: bilgi.yabanci_dil,
        mtv_mektup: bilgi.mtv_mektup,
        makale: bilgi.makale,
        ozgecmis: bilgi.ozgecmis,
        ikamet: bilgi.ikamet,
        pasaport_dok: bilgi.pasaport_dok,
      };
      const response = await axios.post(
        "http://localhost:3001/updateInfo",
        newData
      );
      setBilgi(response.data);
      console.log(newData);
      console.log(response);
      // handle success
    } catch (err) {
      console.log(err);
      // handle error
    }
  };

  return (
    <div className="row">
      <div className="col-4">
        <Sidebar
          info_active="active"
          info_disable="disabled"
          about_to="/portal/About"
          app_to="/portal/Application"
          cont_to="/portal/Contact"
          profil_to="/portal/passwordUpdate"
        />
      </div>
      <div className="col-8">
        <section id="application-page">
          <div className="icerik">
            <div className="basvuruForm row g-5">
              <div className="col-md-7 col-lg-9">
                <h3 className="mb-4 my-2 text-center">Başvuru Görüntüleme</h3>
                <form className="needs-validation">
                  <div className="row g-3">
                    <div className="card p-0">
                      <h5 className="card-header">Kişisel Bilgiler</h5>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-sm-6">
                            <label
                              for="firstName"
                              name="isim"
                              className="form-label"
                            >
                              İsim
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              placeholder="isminizi giriniz"
                              value={bilgi.isim}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, isim: e.target.value })
                              }
                              required
                            />
                            <div className="invalid-feedback">
                              Valid first name is required.
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <label
                              for="lastName"
                              name="soyisim"
                              className="form-label"
                            >
                              Soyisim
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              placeholder="soyisminizi giriniz"
                              value={bilgi.soyisim}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, soyisim: e.target.value })
                              }
                              required
                            />
                            <div className="invalid-feedback">
                              Valid last name is required.
                            </div>
                          </div>
                          <div className="col-12">
                            <label
                              for="username"
                              name="email"
                              className="form-label"
                            >
                              Email
                            </label>
                            <div className="input-group has-validation">
                              <span className="input-group-text">@</span>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="emailinizi giriniz"
                                value={bilgi.email}
                                onChange={(e) =>
                                  setBilgi({ ...bilgi, email: e.target.value })
                                }
                                required
                              />
                              <div className="invalid-feedback">
                                Your username is required.
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <label
                              for="tarih"
                              name="dog.tarih"
                              className="form-label"
                            >
                              Doğum Tarihi
                            </label>
                            <input
                              type="date"
                              id="tarih"
                              value={bilgi.birthDate}
                              onChange={(e) =>
                                setBilgi({
                                  ...bilgi,
                                  birthDate: e.target.value,
                                })
                              }
                              required
                              className="form-control"
                            />
                          </div>
                          <div className="col-sm-6">
                            <label for="tc" className="form-label">
                              Tc No
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="tel_no"
                              placeholder="tc no giriniz"
                              value={bilgi.tel_no}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, tel_no: e.target.value })
                              }
                              required
                            />
                          </div>
                          <div className="col-sm-6">
                            <label for="tc" className="form-label">
                              Tc No
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="tc"
                              placeholder="tc no giriniz"
                              value={bilgi.tc_no}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, tc_no: e.target.value })
                              }
                              required
                            />
                          </div>
                          <div className="col-sm-6">
                            <label for="tc" className="form-label">
                              Pasaport No
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="passport_no"
                              placeholder="pasaport no giriniz"
                              value={bilgi.pasaport_no}
                              onChange={(e) =>
                                setBilgi({
                                  ...bilgi,
                                  pasaport_no: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div className="col-sm-6 form-check">
                            <p>Cinsiyet</p>
                            <div className="col-sm-3 form-check">
                              <input
                                id="kadin"
                                name="gender"
                                type="radio"
                                className="form-check-input"
                                value={bilgi.cinsiyet}
                                onChange={(e) =>
                                  setBilgi({
                                    ...bilgi,
                                    cinsiyet: e.target.value,
                                  })
                                }
                                required
                              />
                              <label className="form-check-label" for="kadın">
                                Kadın
                              </label>
                            </div>
                            <div className="col-sm-3 form-check">
                              <input
                                id="erkek"
                                name="gender"
                                type="radio"
                                className="form-check-input"
                                required
                                value={bilgi.cinsiyet}
                                onChange={(e) =>
                                  setBilgi({
                                    ...bilgi,
                                    cinsiyet: e.target.value,
                                  })
                                }
                              />
                              <label className="form-check-label" for="erkek">
                                Erkek
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <label
                              for="engel"
                              name="engel"
                              className="form-label"
                            >
                              Engel Durumunuz
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="engel"
                              placeholder="giriniz"
                              value={bilgi.engel}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, engel: e.target.value })
                              }
                            />
                          </div>
                          <div className="col-sm-6 form-check">
                            <p>Engel Durumu</p>
                            <div className="col-sm-3 form-check">
                              <input
                                id="evet"
                                name="sec"
                                type="radio"
                                className="form-check-input"
                                required
                                value={bilgi.engel}
                                onChange={(e) =>
                                  setBilgi({ ...bilgi, engel: e.target.value })
                                }
                              />
                              <label className="form-check-label" for="evet">
                                Evet
                              </label>
                            </div>
                            <div className="col-sm-3 form-check">
                              <input
                                id="hayir"
                                name="sec"
                                type="radio"
                                className="form-check-input"
                                required
                                value={bilgi.engel}
                                onChange={(e) =>
                                  setBilgi({ ...bilgi, engel: e.target.value })
                                }
                              />
                              <label className="form-check-label" for="hayir">
                                Hayır
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card p-0">
                      <h5 className="card-header">İletişim Bilgileri</h5>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-12">
                            <label
                              for="address"
                              className="form-label"
                              name="adres"
                            >
                              Adres
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              placeholder="Adres detayı giriniz"
                              required
                              value={bilgi.adres}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, adres: e.target.value })
                              }
                            />
                            <div className="invalid-feedback">
                              Please enter your shipping address.
                            </div>
                          </div>
                          <div className="col-12">
                            <label
                              for="address2"
                              className="form-label"
                              name="adres"
                            >
                              Adres 2{" "}
                              <span className="text-muted">(Optional)</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address2"
                              placeholder="Apartman ve daire"
                              value={bilgi.adres_dty}
                              onChange={(e) =>
                                setBilgi({
                                  ...bilgi,
                                  adres_dty: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              for="country"
                              className="form-label"
                              name="ülke"
                            >
                              Ülke
                            </label>
                            <select
                              className="form-select"
                              id="country"
                              value={bilgi.ulke}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, ulke: e.target.value })
                              }
                              required
                            >
                              {countries.map((country) => {
                                return (
                                  <option value={country} key={country}>
                                    {country}
                                  </option>
                                );
                              })}
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid country.
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label for="il" className="form-label">
                              İl
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="il"
                              placeholder=""
                              required
                              value={bilgi.il}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, il: e.target.value })
                              }
                            />
                            <div className="invalid-feedback">
                              Please provide a valid state.
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label for="ilce" className="form-label">
                              İlçe
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="ilce"
                              placeholder
                              required
                              value={bilgi.ilce}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, ilce: e.target.value })
                              }
                            />
                            <div className="invalid-feedback">
                              ilçe girilecek
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <label for="zip" className="form-label">
                              Posta Kodu
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="zip"
                              placeholder="posta kodu girin"
                              value={bilgi.postcode}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, postcode: e.target.value })
                              }
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card p-0">
                      <h5 className="card-header">Eğitim Bilgileri</h5>
                      <div className="card-body">
                        <div className="row mb-3">
                          <div className="col-sm-6">
                            <label
                              for="education"
                              name="universite"
                              className="form-label"
                            >
                              Üniversite
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="education"
                              placeholder="üniversitenizi giriniz"
                              value={bilgi.universite}
                              onChange={(e) =>
                                setBilgi({
                                  ...bilgi,
                                  universite: e.target.value,
                                })
                              }
                              required
                            />
                          </div>

                          <div className="col-sm-6">
                            <label
                              for="fakulte"
                              name="fakulte"
                              className="form-label"
                            >
                              Fakülte
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="fakulte"
                              placeholder="fakültenizi giriniz"
                              value={bilgi.fakulte}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, fakulte: e.target.value })
                              }
                              required
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-6">
                            <label
                              for="bolum"
                              name="bolum"
                              className="form-label"
                            >
                              Bölüm
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="bolum"
                              placeholder="bölümünüzü giriniz"
                              value={bilgi.bolum}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, bolum: e.target.value })
                              }
                              required
                            />
                          </div>

                          <div className="col-sm-6">
                            <label
                              for="mezun"
                              name="mezun"
                              className="form-label"
                            >
                              Mezuniyet Durumu
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="mezun"
                              placeholder="mezun durumunuzu giriniz"
                              value={bilgi.mezun}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, mezun: e.target.value })
                              }
                              required
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-6">
                            <label
                              for="bolum"
                              name="bolum"
                              className="form-label"
                            >
                              Mezuniyet Tarihi
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="mzn_trh"
                              placeholder="mezuniyet tarihini giriniz"
                              value={bilgi.mezun_tarih}
                              onChange={(e) =>
                                setBilgi({
                                  ...bilgi,
                                  mezun_tarih: e.target.value,
                                })
                              }
                              required
                            />
                          </div>

                          <div className="col-sm-6">
                            <label
                              for="mezun"
                              name="mezun"
                              className="form-label"
                            >
                              Mezuniyet Ortalaması
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="mezunOrt"
                              placeholder={bilgi.mezun_ort}
                              onChange={(e) =>
                                setBilgi({
                                  ...bilgi,
                                  mezun_ort: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card p-0">
                      <h5 className="card-header">Dokümanlar</h5>
                      <div className="card-body">
                        <div className="row gy-3">
                          <div className="col-md-6">
                            <label for="formFile" className="form-label">
                              Yabancı Dil Sınavı
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="formFile"
                              value={bilgi.yabanci_dil}
                              onChange={(e) =>
                                setBilgi({
                                  ...bilgi,
                                  yabanci_dil: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="col-md-6">
                            <label for="formFile" className="form-label">
                              Motivasyon Mektubu
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="mtv"
                              required
                              value={bilgi.mtv_mektup}
                              onChange={(e) =>
                                setBilgi({
                                  ...bilgi,
                                  mtv_mektup: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="col-md-6">
                            <label
                              for="formFileMultiple"
                              className="form-label"
                            >
                              Yayınlanmış Çalışma/Makale
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="formFileMultiple"
                              value={bilgi.makale}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, makale: e.target.value })
                              }
                              multiple
                            />
                          </div>

                          <div className="col-md-6">
                            <label for="formFile" className="form-label">
                              Özgeçmiş
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="cv"
                              value={bilgi.ozgecmis}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, ozgecmis: e.target.value })
                              }
                            />
                          </div>

                          <div className="col-md-6">
                            <label for="formFile" className="form-label">
                              İkamet Belgesi
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="ikamet"
                              value={bilgi.ikamet}
                              onChange={(e) =>
                                setBilgi({ ...bilgi, ikamet: e.target.value })
                              }
                            />
                          </div>

                          <div className="col-md-6">
                            <label for="formFile" className="form-label">
                              Pasaport Taraması
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="passPort"
                              value={bilgi.pasaport_dok}
                              onChange={(e) =>
                                setBilgi({
                                  ...bilgi,
                                  pasaport_dok: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        id="sendForm"
                        className="btn btn-success mx-3"
                        onClick={handleUpdateClick}
                      >
                        Güncelle
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Info;
