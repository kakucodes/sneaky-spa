import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Container fluid="xxl">
        <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
          <h1 className="h2 text-uppercase display-3 text-nowrap fw-bold mb-0">
            <span data-aos="fade" data-aos-delay="350">
              Sneaky
            </span>{" "}
            <br />
            <span data-aos="fade" data-aos-delay="400">
              Productions
            </span>
            <br />
          </h1>
          <p data-aos="fade" data-aos-delay="450">
            Home of all things Sneaky. 🐽
          </p>
        </div>
      </Container>
    </main>
  );
}
