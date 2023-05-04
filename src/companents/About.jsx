import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import KHASCyberMACS from "../images/KHASCyberMACS.jpg";

const About = () => {
  var navigate = useNavigate();
  var isLogin = sessionStorage.getItem("isLogin");

  useEffect(() => {
    if (isLogin === "false") {
      navigate("/");
    }
  }, []);
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar
          about_active="active"
          about_disable="disabled"
          info_to="/portal/Info"
          app_to="/portal/Application"
          cont_to="/portal/Contact"
          profil_to="/portal/passwordUpdate"
        />
      </div>
      <div className="col-8 about">
        <div className="container site-content">
          <div className="content row-12">
            <h3 className="baslik">2 Yıl, 2 Üniversite, 2 Derece</h3>
            <div className="abouticerik">
              CyberMACS, Türkiye, Almanya ve Kuzey Makedonya'daki üst düzey üç
              üniversiteden oluşan bir konsorsiyum tarafından sunulan uygulamalı
              siber güvenlik alanında bir Erasmus Mundus Ortak/çift Yüksek
              Lisans Derecesi (EMJM) programıdır. İki yıllık yüksek lisans
              çalışmaları sırasında, öğrenciler iki konsorsiyum üniversitesinde
              eğitim alacak ve her ikisinden de mezun olacaklardır. Sektör
              ortaklarımız, staj, şirket ziyaretleri ve kurs içeriklerine katkı
              sunarak CyberMACS öğrencilerinin gelecekteki istihdam
              edilebilirliğini teşvik ediyor. CyberMACS, Erasmus+ Programı
              (Erasmus Mundus) tarafından seçilen Avrupa'nın en kaliteli Yüksek
              Lisans Kurslarından biridir.
            </div>
            <div className="row-12">
              <img
                src={KHASCyberMACS}
                alt="CyberMACS"
                className="img-fluid d-block mx-auto rounded"
                style={{ marginTop: "45px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
