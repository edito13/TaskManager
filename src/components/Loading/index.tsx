import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Loading } from "./style";

const Index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Loading
        data-aos="zoom-in"
        data-aos-delay="150"
        style={{ width: "3.5rem", height: "3.5rem" }}
      />
      <p data-aos="zoom-in" data-aos-delay="250">
        Aguarde...
      </p>
    </Container>
  );
};

export default Index;
