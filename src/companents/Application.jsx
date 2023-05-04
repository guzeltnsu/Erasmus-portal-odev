import React from "react";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { countries } from "../data/countries";

const Application = () => {
  var navigate = useNavigate();
  var isLogin = sessionStorage.getItem("isLogin");

  useEffect(() => {
    if (isLogin === "false") {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const [isim, setIsim] = useState("");
  const [soyisim, setSoyisim] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [tel_no, setTel_no] = useState("");
  const [tc_no, setTc_no] = useState("");
  const [pasaport_no, setPasaport_no] = useState("");
  const [cinsiyet, setCinsiyet] = useState("");
  const [engel, SetEngel] = useState("");
  const [adres, setAdres] = useState("");
  const [adres_dty, setAdres_dty] = useState("");
  const [ulke, setUlke] = useState("");
  const [il, setIl] = useState("");
  const [ilce, setIlce] = useState("");
  const [postcode, setPostcode] = useState("");
  const [universite, setUniversite] = useState("");
  const [fakulte, setFakulte] = useState("");
  const [bolum, setBolum] = useState("");
  const [mezun, setMezun] = useState("");
  const [mezun_tarih, setMezun_tarih] = useState("");
  const [mezun_ort, setMezun_ort] = useState("");
  const [yabanci_dil, setYabanci_dil] = useState("");
  const [mtv_mektup, setMtv_mektup] = useState("");
  const [makale, setMakale] = useState("");
  const [ozgecmis, setOzgecmis] = useState("");
  const [ikamet, setIkamet] = useState("");
  const [pasaport_dok, setPasaport_dok] = useState("");

  const id_num = sessionStorage.getItem("id_num");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/application", {
        //json objesi olarak bu dataları karşıya post ediyoruz.
        id_num,
        isim,
        soyisim,
        email,
        birthDate,
        tel_no,
        tc_no,
        pasaport_no,
        cinsiyet,
        engel,
        adres,
        adres_dty,
        ulke,
        il,
        ilce,
        postcode,
        universite,
        fakulte,
        bolum,
        mezun,
        mezun_tarih,
        mezun_ort,
        yabanci_dil,
        mtv_mektup,
        makale,
        ozgecmis,
        ikamet,
        pasaport_dok,
      });
      console.log(response);
      if (response.status === 200) {
        toast.success("Basvuru basarili sekilde alindi.");
        setIsim("");
        setSoyisim("");
        setEmail("");
        setBirthDate("");
        setTel_no("");
        setTc_no("");
        setPasaport_no("");
        setCinsiyet("");
        SetEngel("");
        setAdres("");
        setAdres_dty("");
        setUlke("");
        setIl("");
        setIlce("");
        setPostcode("");
        setUniversite("");
        setFakulte("");
        setBolum("");
        setMezun("");
        setMezun_tarih("");
        setMezun_ort("");
        setYabanci_dil("");
        setMtv_mektup("");
        setMakale("");
        setOzgecmis("");
        setIkamet("");
        setPasaport_dok("");
      } else {
        toast.error(response.data.error);
      }
    } catch (err) {
      toast.error("Veritabani baglantisinda hata olustu.", err);
    }
  };

  return (
    <div className="row">
      <div className="col-4">
        <Sidebar
          app_active="active"
          app_disable="disabled"
          about_to="/portal/About"
          info_to="/portal/Info"
          cont_to="/portal/Contact"
          profil_to="/portal/passwordUpdate"
        />
      </div>
      <div className="col-8">
        <div className="icerik">
          <div className="basvuruForm row g-5">
            <div className="col-md-7 col-lg-9">
              <h3 className="mb-4 my-2 text-center">Başvuru Formu</h3>
              <form onSubmit={handleSubmit}>
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
                            value={isim}
                            onChange={(e) => setIsim(e.target.value)}
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
                            value={soyisim}
                            minLength="2"
                            onChange={(e) => setSoyisim(e.target.value)}
                            required
                          />
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
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required=""
                            />
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
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            required
                            className="form-control"
                          />
                        </div>
                        <div className="col-sm-6">
                          <label for="tc" className="form-label">
                            Tel No
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="tel"
                            placeholder="tel no giriniz"
                            value={tel_no}
                            onChange={(e) => setTel_no(e.target.value)}
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
                            value={tc_no}
                            onChange={(e) => setTc_no(e.target.value)}
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
                            id="tc"
                            placeholder="pasaport no giriniz"
                            value={pasaport_no}
                            onChange={(e) => setPasaport_no(e.target.value)}
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
                              required
                              value={cinsiyet}
                              onChange={() => setCinsiyet("Kadın")}
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
                              onChange={() => setCinsiyet("Erkek")}
                              value={cinsiyet}
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
                            value={engel}
                            onChange={(e) => SetEngel(e.target.value)}
                          />
                        </div>
                        <div className="col-sm-6 form-check">
                          <p>Engel Durumu</p>
                          <div className="col-sm-3 form-check">
                            <input
                              id="Evet"
                              name="sec"
                              type="radio"
                              className="form-check-input"
                              required
                              onChange={(e) => SetEngel("Evet")}
                              value={engel}
                            />
                            <label className="form-check-label" for="Evet">
                              Evet
                            </label>
                          </div>
                          <div className="col-sm-3 form-check">
                            <input
                              id="Hayir"
                              name="sec"
                              type="radio"
                              className="form-check-input"
                              required
                              onChange={(e) => SetEngel("Hayir")}
                              value={engel}
                            />
                            <label className="form-check-label" for="Hayir">
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
                            value={adres}
                            onChange={(e) => setAdres(e.target.value)}
                            required
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
                            value={adres_dty}
                            onChange={(e) => setAdres_dty(e.target.value)}
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
                            value={ulke}
                            onChange={(e) => setUlke(e.target.value)}
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
                            value={il}
                            onChange={(e) => setIl(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="ilce" className="form-label">
                            İlçe
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="ilce"
                            value={ilce}
                            onChange={(e) => setIlce(e.target.value)}
                            placeholder="ilçe"
                            required
                          />
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
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
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
                            value={universite}
                            onChange={(e) => setUniversite(e.target.value)}
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
                            value={fakulte}
                            onChange={(e) => setFakulte(e.target.value)}
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
                            value={bolum}
                            onChange={(e) => setBolum(e.target.value)}
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
                            value={mezun}
                            onChange={(e) => setMezun(e.target.value)}
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
                            type="date"
                            className="form-control"
                            id="bolum"
                            placeholder="Mezuniyet tarihini giriniz"
                            value={mezun_tarih}
                            onChange={(e) => setMezun_tarih(e.target.value)}
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
                            id="mezun"
                            placeholder="mezun durumunuzu giriniz"
                            value={mezun_ort}
                            onChange={(e) => setMezun_ort(e.target.value)}
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
                            type="file"
                            id="formFile"
                            value={yabanci_dil}
                            onChange={(e) => setYabanci_dil(e.target.value)}
                          />
                        </div>

                        <div className="col-md-6">
                          <label for="formFile" className="form-label">
                            Motivasyon Mektubu
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            value={mtv_mektup}
                            onChange={(e) => setMtv_mektup(e.target.value)}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label for="formFileMultiple" className="form-label">
                            Yayınlanmış Çalışma/Makale
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFileMultiple"
                            value={makale}
                            onChange={(e) => setMakale(e.target.value)}
                            multiple
                          />
                        </div>

                        <div className="col-md-6">
                          <label for="formFile" className="form-label">
                            Özgeçmiş
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            value={ozgecmis}
                            onChange={(e) => setOzgecmis(e.target.value)}
                          />
                        </div>

                        <div className="col-md-6">
                          <label for="formFile" className="form-label">
                            İkamet Belgesi
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            value={ikamet}
                            onChange={(e) => setIkamet(e.target.value)}
                          />
                        </div>

                        <div className="col-md-6">
                          <label for="formFile" className="form-label">
                            Pasaport Taraması
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            value={pasaport_dok}
                            onChange={(e) => setPasaport_dok(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <input
                      type="submit"
                      id="sendForm"
                      className="btn btn-primary mx-3"
                    />
                    <input
                      type="reset"
                      className="btn btn-outline-secondary mx-3"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
