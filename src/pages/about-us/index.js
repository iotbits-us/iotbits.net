import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const AboutUs = () => (
  <Layout bodyClass="page-about-us">
    <SEO title="About Us" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <p>
          At IOTBITS we are focused into development of tailored IoT hardware and software solutions
          that facilitate collecting data from industrial devices into cloud IoT platforms. Our
          industrial technology expertise, continued delivery excellence and a passionate team,
          helps us to develop IoT connected products and solutions that would speed up integration
          of industrial controllers into the IoT world, such as Variable Frequency Drives, Modbus
          RTU sensors and PLC's. We design and develop our products, hardware, firmware and
          applications in the US.
        </p>
        <p>
          We are pleased to assist our clients with full technical support of our devices, as well
          as preparation, implementation and deployment of cloud services, in addition to providing
          free consulting services to assist clients reimagine their online sensor presence.
        </p>
        <p>
          Our experienced IoT consultants and developers will help to define what technology is best
          suited for customers applications, with solid expertise developing IoT solutions, based on
          Wi-Fi, LoRa, LoRaWAN, and Narrowband IoT.
        </p>
      </div>
    </div>
  </Layout>
);

export default AboutUs;
