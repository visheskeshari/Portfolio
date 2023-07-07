import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";
import "./Home.css";
import * as THREE from "three";
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

// import moonImage from "../../images/moon.jpg";
// import venusImage from "../../images/venus.jpg";
// import spaceImage from "../../images/space6.jpg";

import cssLogo from "../../images/cssLogo.jpg";
import html5Logo from "../../images/html5Logo.png";
import reactJSlogo from "../../images/reactJSlogo.png";
import nodeJSlogo from "../../images/nodeJSlogo.png";
import mongoDBlogo from "../../images/mongoDBlogo.jpeg";
import javascriptLogo from "../../images/javascriptLogo.jpeg";

// import javaCertificate from "../../images/UDEMY JAVA UC-7H30W40Y.jpg";
// import nodeJScertificate from "../../images/NodeJsCertificate.jpg";
// import htmlCSSjavascriptCertificate from "../../images/HTML, CSS, and Javascript for Web Developers - Coursera F8BFWQ9GVPG9-1.png";

import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import { LiaJava } from "react-icons/lia";
import Certificate from "../Certificate/Certificate";

const Home = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGL1Renderer({ canvas });

    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(8, 5, 5);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight2.position.set(-8, -5, -5);

    // const controls = new OrbitControls(camera, renderer.domElement)
    // const lightHelper = new THREE.PointLightHelper(pointLight1)  // no need

    const textureLoader = new THREE.TextureLoader();

    const venusImage =
      "https://raw.githubusercontent.com/visheskeshari/Portfolio/main/src/images/venus.jpg";
    const venusTexture = textureLoader.load(venusImage);
    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const moonImage =
      "https://raw.githubusercontent.com/visheskeshari/Portfolio/main/src/images/moon.jpg";
    const moonTexture = textureLoader.load(moonImage);
    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshPhongMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const spaceImage =
      "https://raw.githubusercontent.com/visheskeshari/Portfolio/main/src/images/space6.jpg";
    const spaceTexture = textureLoader.load(spaceImage);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight1);
    scene.add(pointLight2);
    scene.background = spaceTexture;
    // scene.add(lightHelper)  //no need

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();
    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeSkillsBox");
      document.addEventListener("DOMContentLoaded", function () {
        // Add the code from the previous example here
        if (window.scrollY > 1500) {
          skillsBox.style.animationName = "homeSkillsBoxAnimationOn";
        } else {
          skillsBox.style.animationName = "homeSkillsBoxAnimationOff";
        }
      });
    });
  }, []);

  const timelines = [
    {
      date: "2018 - 2022",
      title: "Bachelor of Technology in Computer Science and Engineering",
      description: "GLA University, Mathura",
    },
    {
      date: "2016-2018",
      title: "Intermediate",
      description: "Universal Public School, Baburi, Chandauli",
    },
    {
      date: "2014-2016",
      title: "High School",
      description: "SRB School, Mughalsarai, Chandauli",
    },
  ];

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>V</p>
          <p>I</p>
          <p>S</p>
          <p>H</p>
          <p>E</p>
          <p>S</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">PHOTOGRAPHER</Typography>
          <Typography variant="h2">DANCER</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img
              // src="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg.webp"
              src={cssLogo}
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              // src="https://www.qwerty-design.co.uk/wp-content/uploads/2012/11/html5-logo.png"
              src={html5Logo}
              alt="Face2"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              // src="https://entornodev.com/wp-content/uploads/2021/05/curso-de-javascript.jpeg"
              src={javascriptLogo}
              alt="Face3"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              // src="https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png"
              src={nodeJSlogo}
              alt="Face4"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              // src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
              src={reactJSlogo}
              alt="Face5"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              // src="https://logodix.com/logo/2090013.jpg"
              src={mongoDBlogo}
              alt="Face6"
            />
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeSkillsBox" id="homeSkillsBox">
          <LiaJava />
          <SiReact />
          <SiJavascript />
          <SiMongodb />
          <SiNodedotjs />
          <SiExpress />
          <SiCss3 />
          <SiHtml5 />
          <SiThreedotjs />
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3">CERTIFICATIONS</Typography>
      </div>

      <div className="homeYoutubeWrapper">
        <Certificate
          url="https://coursera.org/share/698e1d3a3c43687c85ce54008f0267d6"
          // image={htmlCSSjavascriptCertificate}
          image="https://raw.githubusercontent.com/visheskeshari/Portfolio/main/src/images/HTML%2C%20CSS%2C%20and%20Javascript%20for%20Web%20Developers%20-%20Coursera%20F8BFWQ9GVPG9-1.png"
          title="HTML, CSS and JavaScript for Web Developers (Coursera)"
        />
        <Certificate
          url="https://www.udemy.com/certificate/UC-6d3c37ba-9aa4-4820-ba13-d59cd9f3a421/"
          // image={nodeJScertificate}
          image="https://raw.githubusercontent.com/visheskeshari/Portfolio/main/src/images/NodeJsCertificate.jpg"
          title="The complete Node.js Developer Course (3rd Edition)"
        />
        <Certificate
          url="https://www.udemy.com/certificate/UC-7H30W40Y/"
          // image={javaCertificate}
          image="https://raw.githubusercontent.com/visheskeshari/Portfolio/main/src/images/UDEMY%20JAVA%20UC-7H30W40Y.jpg"
          title="Java Programming Masterclass For Software Developers"
        />
      </div>
    </div>
  );
};

export default Home;
