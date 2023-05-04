import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Contact = () => {
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
          cont_active="active"
          cont_disable="disabled"
          about_to="/portal/About"
          app_to="/portal/Application"
          info_to="/portal/Info"
          profil_to="/portal/passwordUpdate"
        />
      </div>
      <div className="col-8">
        <div className="container-fluid">
          <div className="baslik">
            <h1>İletişim</h1>
          </div>
          <div className="iletisim">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th>İletişim Adresi:</th>
                        <td>
                          Cibali Mah. Kadir Has Cad. 34083 Fatih, İstanbul
                        </td>
                      </tr>
                      <tr>
                        <th>Telefon:</th>
                        <td>+90 (212) 533 65 32</td>
                      </tr>

                      <tr>
                        <th>Fax:</th>
                        <td>+90 (212) 631 91 50</td>
                      </tr>

                      <tr>
                        <th>E-posta:</th>
                        <td>danisma@khas.edu.tr</td>
                      </tr>

                      <tr>
                        <th>E-posta:</th>
                        <td>khas@hs01.kep.tr</td>
                      </tr>

                      <tr>
                        <th>Cybermacs info:</th>
                        <td>info@cybermacs.eu</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <div className="row">
                                <div style="width: 100%">
                                    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0"
                                        marginwidth="0"
                                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kadir%20has%20%C3%BCniversitesi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                                            href="https://www.maps.ie/distance-area-calculator.html">measure area
                                            map</a></iframe>
                                </div>
                            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
