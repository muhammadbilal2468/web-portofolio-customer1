import "./App.css";
import React from "react";
import {
  bgMe2Img,
  bpmImg,
  csharpImg,
  cssImg,
  emailImg,
  gdscImg,
  githubImg,
  hardskillImg,
  hmtiImg,
  htmlImg,
  igImg,
  jsImg,
  lampuImg,
  linkedlinkImg,
  phpImg,
  pythonImg,
  telegramImg,
  untadImg,
  waImg,
  youtubeImg,
} from "./asset";

const App = () => {
  return (
    <div className="wp">
      <div className="header">
        <div className="nav">
          <div className="logo">
            <p>Dwi Tantu</p>
          </div>
          <div className="menu">
            <a href="home">Home</a>
            <a href="about">About</a>
            <a href="skill">Skill</a>
            <a href="contact">Contact</a>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p className="hello">Hello</p>
            <p className="name">Saya Dwi Putri Andini</p>
            <p className="status">
              Mahasiswi S1 Teknik Informatika Universitas Tadulako
            </p>
            <div className="btn">
              <button>Lihat Profile</button>
            </div>
          </div>
          <div className="right">
            <img src={bgMe2Img} alt="" className="bgme2" />
          </div>
        </div>
      </div>
      <div className="wp-about">
        <h3>Experienxe And Education</h3>
        <div className="about">
          <div className="left">
            <div className="box">
              <img src={gdscImg} alt="" />
              <div className="text">
                <p className="title">GDSC</p>
                <p className="desc">
                  Saya Sebagai Penyelanggara Acara Tim di Google Developer
                  Student Clubs President University
                </p>
                <p className="date">November 2022 - Sekarang</p>
              </div>
            </div>
            <div className="box">
              <img src={bpmImg} alt="" />
              <div className="text">
                <p className="title">BPM FT-UNTAD</p>
                <p className="desc">
                  Saya Sebagai Sekretaris Badan Pers Mahasiswa Fakultas Teknik
                  Universitas Tadulako
                </p>
                <p className="date">Maret 2022 - Maret 2023</p>
              </div>
            </div>
            <div className="box">
              <img src={hmtiImg} alt="" />
              <div className="text">
                <p className="title">HMTI UNTAD</p>
                <p className="desc">
                  Saya Aktif di Kegiatan Himpunan Mahasiswa Teknik Informatika
                  Universitas Tadulako Sebagai Anggota
                </p>
                <p className="date">Maret 2022 - Sekarang</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="card">
              <img src={untadImg} alt="" />
              <div className="content">
                <p className="title">Universitas Tadulako</p>
                <p className="desc">
                  Saya adalah Mahasiswa Fakultas Teknik Universitas Tadulako
                  yang tertarik pada bidang ilmu komputer, sistem pendukung
                  keputusan, dan komputasi awan.
                </p>
                <div className="btn">
                  <button>Lihat Kampus</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skill">
        <div className="softskill">
          <div className="left">
            <img src={lampuImg} alt="" />
          </div>
          <div className="right">
            <h3 className="title">SoftSkill</h3>
            <ul>
              <li>Mampu mengolah argumen dengan baik</li>
              <li>Berani tampil di depan umum</li>
              <li>memiliki manajemen waktu yang baik</li>
              <li>dapat berpartisipasi dalam beberapa kegiatan sekaligus</li>
              <li>Saya dapat bekerja dengan sangat baik sebagai sebuah tim</li>
              <li>berpikiran terbuka</li>
            </ul>
          </div>
        </div>
        <div className="hardskill">
          <div className="left">
            <h3 className="title">HardSkill</h3>
            <div className="language">
              <div className="box">
                <img src={htmlImg} alt="" />
                <div className="content">
                  <p className="title">HTML</p>
                  <p className="desc">Intermediate</p>
                </div>
              </div>
              <div className="box">
                <img src={cssImg} alt="" />
                <div className="content">
                  <p className="title">CSS</p>
                  <p className="desc">Beginner</p>
                </div>
              </div>
              <div className="box">
                <img src={jsImg} alt="" />
                <div className="content">
                  <p className="title">JS</p>
                  <p className="desc">Intermediate</p>
                </div>
              </div>
              <div className="box">
                <img src={phpImg} alt="" />
                <div className="content">
                  <p className="title">PHP</p>
                  <p className="desc">Intermediate</p>
                </div>
              </div>
              <div className="box">
                <img src={pythonImg} alt="" />
                <div className="content">
                  <p className="title">PYTHON</p>
                  <p className="desc">Beginner</p>
                </div>
              </div>
              <div className="box">
                <img src={csharpImg} alt="" />
                <div className="content">
                  <p className="title">C#</p>
                  <p className="desc">Beginner</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={hardskillImg} alt="" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="services">
          <p className="title">Layanan</p>
          <p className="service">Null</p>
          <p className="service">Null</p>
          <p className="service">Null</p>
          <p className="service">Null</p>
        </div>
        <div className="contacts">
          <p className="title">Contact</p>
          <a href="https://wa.me/6281354724238" className="contact">
            <img src={waImg} alt="" />
            <p>Whatsapp</p>
          </a>
          <a href="mailto:dwiputriandini061@gmail.com" className="contact">
            <img src={emailImg} alt="" />
            <p>Email</p>
          </a>
          <a href="https://t.me/sandwi21" className="contact">
            <img src={telegramImg} alt="" />
            <p>Telegram</p>
          </a>
        </div>
        <div className="links">
          <p className="title">Link</p>
          <div className="list">
            <a href="https://github.com/DwiPutriandini061">
              <img src={githubImg} alt="" />
            </a>
            <a href="http://www.linkedin.com/in/dwi-putri-">
              <img src={linkedlinkImg} alt="" />
            </a>
            <a href="https://www.instagram.com/dwisan__cin/">
              <img src={igImg} alt="" />
            </a>
            <a href="https://www.youtube.com/@dwiputri.a5562">
              <img src={youtubeImg} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2023 All rights reversed | By Dwi Puti Andini</p>
      </div>
    </div>
  );
};

export default App;
