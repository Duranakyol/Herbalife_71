import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item className="myCarousel">
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp4677845.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="myText">
          <h2>KIRIKKALE HERBALIFE AİLESİNE HOŞGELDİNİZ</h2>
          <p>Yüklenen ürünleri aşağıda görebilirsiniz.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="myCarousel">
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/3538657.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="myCarousel">
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/71Z2GuAm1OL._SL1500_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="myCarousel">
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1441947.jpg"
          alt="Letzte slide"
        />
        <Carousel.Caption className="myText">
          <h2>Bu sayfa sadece ürün tanıtımı içindir.</h2>
          <p>Distribütörlerimiz aracılığıyla satış yapıyoruz!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
