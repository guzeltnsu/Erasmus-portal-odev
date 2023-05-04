const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
//app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// body-parser middleware

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb",
});

connection.connect((err) => {
  if (err) {
    console.error("Veritabanina baglanirken hata olustu:", err);
    return;
  }
  console.log("Veritabanina baglanildi.");
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  const query = "INSERT INTO user (username,password) VALUE (?,?)";

  connection.query(query, [email, password], (err, result) => {
    if (err) {
      console.error("Veritabanina bilgi girerken hata olustu.", err);
      res.status(500).send({ error: "Kayit olusturulurken hata olustu" });
      return;
    }
    res.status(200).send({ message: "Kayit basarili" });
  });
});

//Giriş kontrolü
app.post("/", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM user WHERE username=? AND password=?";

  connection.query(query, [email, password], (err, result) => {
    if (err) {
      console.error("Bilgilerin kontrolünde hata oluştu.", err);
      res.status(500).send({ error: "Bilgilerin kontrolünde hata oluştu" });
      return;
    }
    if (result.length > 0) {
      const user_id = result[0].id_num;

      const isLoginQuery = "UPDATE user SET isLogin = 1 WHERE id_num=?";

      connection.query(isLoginQuery, user_id, (err, result) => {
        if (err) {
          console.error("Login bilgisi guncellenirken hata olustu");
          res.status(500).send({ error: "Login guncellenemedi" });
        }
      });

      res.status(200).send({ message: "1", id_num: user_id });
    } else {
      res.status(200).send({ message: "0" });
    }
  });
});

//Şifre Güncelleme
app.post("/updatePassword", (req, res) => {
  const { id_num, newPassword } = req.body;

  const kontrolQuery = "SELECT * FROM user WHERE id_num = ?";

  connection.query(kontrolQuery, [id_num], (err, result) => {
    if (err) {
      console.error("Veritabanına sorgu yapılırken hata oluştu: ", err);
      res
        .status(500)
        .send({ error: "Veritabanına sorgu yapılırken hata oluştu." });
      return;
    }
    console.log(result);

    if (result.length === 0) {
      res
        .status(404)
        .send({ error: "Belirtilen ID değerine sahip kayıt bulunamadı." });
      return;
    }

    const query = "UPDATE user SET PASSWORD=? WHERE id_num= ?";

    connection.query(query, [newPassword, id_num], (err, result) => {
      if (err) {
        console.error("Veritabanına güncelleme yapılırken hata oluştu. ", err);
        res
          .status(500)
          .send({ error: "Veritabanına güncelleme yapılırken hata oluştu." });
        return;
      }

      res.status(200).send({ message: "Basvuru basariyla kaydedildi." });
    });
  });
});

// Logout
app.post("/signout", (req, res) => {
  const { id_num } = req.body;

  const query = "UPDATE user SET isLogin = 0 WHERE id_num=?";

  connection.query(query, [id_num], (err, result) => {
    if (err) {
      console.error("isLogin güncellemesinde hata oluştu.", err);
      res.status(500).send({ error: "isLogin güncellemesinde hata oluştu." });
      return;
    }

    res.status(200).send({ message: "Kullanici cikisi güncellendi." });
  });
});

// başvuru gönder post
app.post("/application", async (req, res) => {
  const {
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
  } = req.body;

  const kontrolQuery = "SELECT * FROM kisisel_bi̇lgiler WHERE id_num = ?";

  try {
    const result = await connection.query(kontrolQuery, [id_num]);

    if (result.length > 0) {
      res
        .status(201)
        .send({ error: "Aynı hesaptan yalnızca bir başvuru yapılabilir." });
      return;
    } else {
      const query1 =
        "INSERT INTO kisisel_bi̇lgiler (id_num, isim, soyisim, email, birthDate, tel_no, tc_no, pasaport_no, cinsiyet, engel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      await connection.query(query1, [
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
      ]);

      const query2 =
        "INSERT INTO iletisim_bilgileri (id_num, adres, adres_dty, ulke, il, ilce, postcode) VALUES (?, ?, ?, ?, ?, ?, ?)";
      await connection.query(query2, [
        id_num,
        adres,
        adres_dty,
        ulke,
        il,
        ilce,
        postcode,
      ]);

      const query3 =
        "INSERT INTO egitim_bilgileri (id_num, universite, fakulte, bolum, mezun, mezun_tarih, mezun_ort) VALUES (?, ?, ?, ?, ?, ?, ?)";
      await connection.query(query3, [
        id_num,
        universite,
        fakulte,
        bolum,
        mezun,
        mezun_tarih,
        mezun_ort,
      ]);

      const query4 =
        "INSERT INTO dokumanlar (id_num,yabanci_dil, mtv_mektup, makale,ozgecmis, ikamet, pasaport_dok) VALUES (?,?,?,?,?,?,?)";
      await connection.query(query4, [
        id_num,
        yabanci_dil,
        mtv_mektup,
        makale,
        ozgecmis,
        ikamet,
        pasaport_dok,
      ]);

      res.status(200).send({ message: "Başvuru başarıyla kaydedildi." });
    }
  } catch (err) {
    console.error("Veritabanına sorgu hatası!", err);
  }
});

//başvuru görüntüleme post
app.post("/info", async (req, res) => {
  const user_id = req.body.id_num;

  const query1 = "SELECT * FROM kisisel_bi̇lgiler WHERE id_num=?";
  const query2 = "SELECT * FROM iletisim_bilgileri WHERE id_num=?";
  const query3 = "SELECT * FROM egitim_bilgileri WHERE id_num=?";
  const query4 = "SELECT * FROM dokumanlar WHERE id_num=?";

  await Promise.all([
    new Promise((resolve, reject) => {
      connection.query(query1, [user_id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
    new Promise((resolve, reject) => {
      connection.query(query2, [user_id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
    new Promise((resolve, reject) => {
      connection.query(query3, [user_id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
    new Promise((resolve, reject) => {
      connection.query(query4, [user_id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
  ])
    .then((results) => {
      const kisisel_bi̇lgilerResult = results[0];
      const iletisim_bilgileriResult = results[1];
      const egitim_bilgileriResult = results[2];
      const dokumanlarResult = results[3];
      if (kisisel_bi̇lgilerResult.length === 0) {
        res.status(404).send({ message: "Basvuruda bulunulamadı." });
      } else {
        const responseData = {
          isim: kisisel_bi̇lgilerResult[0].isim,
          soyisim: kisisel_bi̇lgilerResult[0].soyisim,
          email: kisisel_bi̇lgilerResult[0].email,
          birthDate: kisisel_bi̇lgilerResult[0].birthDate,
          tel_no: kisisel_bi̇lgilerResult[0].tel_no,
          tc_no: kisisel_bi̇lgilerResult[0].tc_no,
          pasaport_no: kisisel_bi̇lgilerResult[0].pasaport_no,
          cinsiyet: kisisel_bi̇lgilerResult[0].cinsiyet,
          engel: kisisel_bi̇lgilerResult[0].engel,
          adres: iletisim_bilgileriResult[0].adres,
          adres_dty: iletisim_bilgileriResult[0].adres_dty,
          ulke: iletisim_bilgileriResult[0].ulke,
          il: iletisim_bilgileriResult[0].il,
          ilce: iletisim_bilgileriResult[0].ilce,
          postcode: iletisim_bilgileriResult[0].postcode,
          universite: egitim_bilgileriResult[0].universite,
          fakulte: egitim_bilgileriResult[0].fakulte,
          bolum: egitim_bilgileriResult[0].bolum,
          mezun: egitim_bilgileriResult[0].mezun,
          mezun_tarih: egitim_bilgileriResult[0].mezun_tarih,
          mezun_ort: egitim_bilgileriResult[0].mezun_ort,
          yabanci_dil: dokumanlarResult[0].yabanci_dil,
          mtv_mektup: dokumanlarResult[0].mtv_mektup,
          makale: dokumanlarResult[0].makale,
          ozgecmis: dokumanlarResult[0].ozgecmis,
          ikamet: dokumanlarResult[0].ikamet,
          pasaport_dok: dokumanlarResult[0].pasaport_dok,
        };
        res.status(200).send(responseData);
      }
    })
    .catch((err) => {
      console.error("veritabanından bilgi alınırken hata oluştu.", err);
      res
        .status(500)
        .send({ error: "Veritabanından bilgi alınırken hata oluştu." });
      console.error(err);
    });
});

app.post("/updateInfo", async (req, res) => {
  const {
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
  } = req.body;

  try {
    const kontrolQuery = "SELECT * FROM kisisel_bi̇lgiler WHERE id_num = ?";
    connection.query("START TRANSACTION");
    await connection.beginTransaction();

    const result = await connection.query(kontrolQuery, [id_num]);
    if (result.length === 0) {
      res.status(201).send({ error: "Record not found for the specified ID." });
      return;
    }

    //tablo kisisel_bilgiler güncelleme sorgusu
    const query1 =
      "UPDATE kisisel_bi̇lgiler SET isim=?, soyisim=?, email=?, birthDate=?, tel_no=?, tc_no=?, pasaport_no=?, cinsiyet=?, engel=? WHERE id_num=?";
    const values1 = [
      isim,
      soyisim,
      email,
      birthDate,
      tel_no,
      tc_no,
      pasaport_no,
      cinsiyet,
      engel,
      id_num,
    ];
    await connection.query(query1, values1);

    //tablo iletisim_bigileri güncelleme sorgusu
    const query2 =
      "UPDATE iletisim_bilgileri SET adres=?, adres_dty=?, ulke=?, il=?, ilce=?, postcode=? WHERE id_num=?";
    const values2 = [adres, adres_dty, ulke, il, ilce, postcode, id_num];
    await connection.query(query2, values2);

    //tablo egitim_bilgileri güncelleme sorgusu
    const query3 =
      "UPDATE egitim_bilgileri SET  universite=?, fakulte=?, bolum=?, mezun=?, mezun_tarih=?, mezun_ort=? WHERE id_num=?";
    const values3 = [
      universite,
      fakulte,
      bolum,
      mezun,
      mezun_tarih,
      mezun_ort,
      id_num,
    ];
    await connection.query(query3, values3);

    // tablo dokmanlar güncelleme sorgusu
    const query4 =
      "UPDATE dokumanlar SET yabanci_dil=?, mtv_mektup=?, makale=?, ozgecmis=?, ikamet=?, pasaport_dok=? WHERE id_num=?";
    const values4 = [
      yabanci_dil,
      mtv_mektup,
      makale,
      ozgecmis,
      ikamet,
      pasaport_dok,
      id_num,
    ];
    await connection.query(query4, values4);

    res.status(200).json({ message: "Güncelleme işlemi başarılı!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Veritabanı hatası" });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server ${PORT} uzerinde dinleniyor.`);
});
