import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import "../assets/styles/About.css";

function About() {
  return (
    <Container fluid className="about">
      <Row className="parca1">
        <Col>
          <Image
            className="myImage"
            src="https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/billboards/2021/11-Nov/men-women-sitting-table-chatting.jpg"
          />
        </Col>
        <Col className="metin">
          <h1>BİZ KİMİZ ?</h1>
          <p>
            Öğün yerine geçen shake’ler, takviye edici gıdalar ve cilt bakım
            ürünlerinde uzman. Her gün, dünya genelinde 4 milyondan fazla
            Herbalife Nutrition shake tüketiliyor.
          </p>
        </Col>
      </Row>
      <Row className="parca2">
        <Col className="metin">
          <h1>NASIL ÇALIŞIYORUZ ?</h1>
          <p>
            Müşterilerimize distribütör ağımızla ulaşıyoruz. Bağımsız
            Distribütörlerimizin sunduğu doğrudan iletişime dayalı kişiye özel
            deneyim, amacımızı gerçekleştirmemiz açısından kritik önem taşır.
            Ürün satışından çok daha fazlasını ifade eden bu deneyim,
            müşterilerimize değişmek için ihtiyaç duydukları motivasyonu ve
            kişisel desteği sunar. Biz buna distribütör farkı diyoruz.
          </p>
        </Col>
        <Col>
          <Image
            className="myImage"
            src="https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/billboards/2021/11-Nov/women-talking-about-formul1.jpg"
          />
        </Col>
      </Row>
      <Row className="parca1">
        <Col>
          <Image
            className="myImage"
            src="https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/billboards/2021/11-Nov/men-women-chatting.jpg"
          />
        </Col>
        <Col className="metin">
          <h1>NEREDEYİZ ?</h1>
          <p>
            1980’de kurulan Herbalife Nutrition, günümüzde 8.000 aşkın
            çalışanıyla 90’dan fazla ülkede faaliyet göstermektedir.
          </p>
        </Col>
      </Row>
      <Row className="parca2">
        <Col className="metin">
          <h1>NEDEN BİZİM ÜRÜNLERİMİZ ?</h1>
          <p>
            Dünyanın önde gelen uzmanlarını bir araya getiren Herbalife
            Nutrition Enstitüsü, klinik araştırmalar ve eğitim faaliyetleri
            aracılığıyla beslenme alanında ürün geliştirilmesini desteklemekle
            görevlidir.
          </p>
          <br />
          <p>
            Tesislerimiz, en yeni teknolojilerle donatılmıştır. Tüm
            laboratuvarlarımız ISO 17025 sertifikalıdır. Avrupa’daki
            Herbalife24® ürün hattı, LGC işbirliğiyle yürütülen dünyaca bilinen
            ‘Bilinçli Spor’ programı aracılığıyla yasaklı maddelerin tespitine
            ilişkin testlere tabi tutulmaktadır.
          </p>
        </Col>
        <Col>
          <Image
            className="myImage"
            src="https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/billboards/2021/11-Nov/F1-fabric.jpg"
          />
        </Col>
      </Row>
      <Row className="parca1">
        <Col>
          <Image
            className="myImage"
            src="https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/billboards/2021/11-Nov/breakfast-healthy-%20shake.jpg"
          />
        </Col>
        <Col className="metin">
          <h1>HAYATA DOKUNMAK</h1>
          <p>
            Distribütörlerimiz ve çalışanlarımız, topluma geri vermek için
            gayret gösterirler. Bu bakımdan, kar amacı gütmeyen bir kuruluş olan
            Herbalife Nutrition Vakfı tarafından iyi beslenmeyi ve aktif yaşam
            tarzını desteklemek için düzenlenen programlar kapsamında gönüllü
            çalışmalarda bulunmakta ve bağışlarıyla katkı yapmaktadırlar.
          </p>
        </Col>
      </Row>
      <Row className="parca2">
        <Col className="metin">
          <h1>SPONSORLUKLARIMIZ</h1>
          <p>
            Avrupa’da 70’ten fazla üst düzey sporcu ve takım da dahil olmak
            üzere dünya genelinde 190’ın üzerinde spor etkinliğine, takıma ve
            sporcuya sponsor olmaktayız. Herbalife Nutrition’un sponsor olduğu
            takım ve atletlerin bir kısmı: profesyonel futbolcu Cristiano
            Ronaldo, ABD’li futbol kulübü LA Galaxy ve İspanya Kadınlar Birinci
            Liginde mücadele eden futbol takımlarından Atlético Madrid.
          </p>
        </Col>
        <Col>
          <Image
            className="myImage"
            src="https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/billboards/2021/11-Nov/footballer.jpg"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
