import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillStarFill } from "react-icons/bs";

function GroupExample() {
  const LatestUploads = [
    {
      title: "Serinleten Yaz Lezzetleri Seti",
      detail:
        "1 adet Yüksek Proteinli Soğuk Kahve Karışımı, 1 adet Bitkisel Konsantre Çay – Klasik 100gr., 1 adet Protein Bar – Çikolatalı Yer Fıstıklı ve 1 adet HN logolu metal kaşıklı pipet hediyesinden oluşan Serinleten Yaz Lezzetleri Sizinle!",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/consumable_content/product-catalog-assets/images/2022/07-Jul/serinleten-yaz-lezzetleri.jpg/jcr:content/renditions/cq5dam.web.800.800.jpeg",
      preis: "716.35 TL",
    },
    {
      title: "Aloe Konsantre İçecek Mango 473 ml",
      detail:
        "Herbal Aloe Konsantre İçecek, Aloe Vera suyundan elde edilmiş mango aromalı bir içecektir. Ferahlatıcı bir içecek elde etmek için bu düşük kalorili şekersiz konsantre içeceği suyunuza ekleyin. Renksizleştirilmiş aloe vera yaprağından elde edilen %40 aloe vera yaprağı suyu içerir.",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2022/07-Jul/1065_TU_Aloe_Mango_Square_1300px.jpg/_jcr_content/renditions/original",
      preis: "303.07 TL",
    },
    {
      title: "ProCore Orman Meyveleri Tadında 37 g",
      detail:
        "Bağışıklık sistemimiz, her gün sessizce ve yorulmadan çalışan inanılmaz derecede karmaşık bir sistemdir. Pro-core içeriğindeki, yüksek miktarda C ve D vitamini, selenyum ve çinko bağışıklık sisteminin normal fonksiyonuna destek olur.",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2022/01-Jan/pro-core-3d-render-square-1300-1300-tr-tr.jpg",
      preis: "174.52 TL",
    },
    {
      title: "Besleyici shake karışımı Formül 550g",
      detail:
        "Protein ve temel besinlerin birleşiminden oluşan dengeli bir öğündür. Protein, kas kütlesinin korunmasına katkıda bulunur. Formül 1 aralarında Bvitaminleri, C vitamini, kalsiyum ve demir bulunan 22 vitamin ve mineral içerir.",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/0142-tr-formula-1-protein-shake-smooth-chocolate-550g.png",
      preis: "320.26 TL",
    },
    {
      title: "Protein Bar Protein Bar Limon 14 adet",
      detail:
        "Herbalife Protein Bar, yüksek protein içeriğine sahiptir. Her bir bar 10g protein içerir. Her bir bar, B vitaminleri (B6 ve B12), protein ve karbonhidrat içerir. Atıştırmalık olarak günde bir veya iki defa tüketebilirsiniz.",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/3976-tr-protein-bars-citrus-lemon-14-bars.png",
      preis: "215.12 TL",
    },
    {
      title: "Efervesan tablet takviye edici gıda LiftOff® ",
      detail:
        "Liftoff paketlerini her zaman, her yere götürebilirsiniz. Her iki aromayı da deneyin: Portakal ve Limon. akviye edici gıdalar normal beslenmenin yerine geçemez. İlaç değildir. ",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/3152-tr-lift-off-lemon-lime-10-tablets.png",
      preis: "202.15 TL",
    },
    {
      title: "Spor İçeceği Tozu CR7 Drive Açai Aromalı",
      detail:
        "Tatlandırıcı içermez. Uzun süreli dayanıklılık ve performans için karbonhidrat ve elektrolit içerir. Hafif bir aroması vardır. Yasaklı madde testi yapılmıştır.",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/1466-tr-herbalife24-cr7-drive-acai-berry-540g-canister.png",
      preis: "181.97 TL",
    },
    {
      title: "Hazır Gurme Domates Çorbası 672g",
      detail:
        "Inülin lifi ve domateste doğal olarak bulunan Likopen ile geliştirilmiştir. 104 kcal. Yüksek miktarda protein ve lif içerir. Yalnızca su ile karıştırın.Öğün arası atıştırmalık olarak sıcak tüketerek keyfine varın .",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/0155-tr-gourmet-tomato-soup-672g.png",
      preis: "341.84 TL",
    },
  ];

  const TopLikes = [
    {
      title: "Içecek tozu TRI BLEND SELECT Muz 600g",
      detail:
        "Krema kıvamında bir shake’tir. Size C vitamini ve 7 minerali sağlayan bir protein kaynağı sunabilmek için bu vegan karışımı özenle seçtik. Bezelye Proteini, Kinoa ve Keten Tohumundan oluşan vegan bir karışımdır.",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/013K-tr-tri-blend-select-banana-600g.png",
      preis: "586.49 TL",
    },
    {
      title: "Takviye gıda Thermo Complete ™ 90 tablet",
      detail:
        "Thermo Complete™Vitamin C, Yeşil Çay, Kafeinve Mate Yaprağı İçeren Tablet TAKVİYE EDİCİ GIDA 90 tablet C Vitamini ile yaşil çay ve mate yaprağı gibi özel seçilmiş bitki karışımları içerir.",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/0050-tr-thermo-complete-90-tablets.png",
      preis: "384.87 TL",
    },
    {
      title: "Balık yağı kapsülleri Herbalifeline 30 kapsül",
      detail:
        "Herbalifeline Max, Omega-3 yağ asitleri EPA ve DHA içeren balık yağı kapsülleri formunda bir takviye edici gıdadır. Sürdürülebilir kaynaklardan elde edilmiş YENİ balık yağı",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/0043-tr-herbalifeline-max-30-capsules.png",
      preis: "264.45 TL",
    },
    {
      title: "Rahatlatıcı Yüz Temizleme Jeli 150ml",
      detail:
        "Ferahlatıcı Aloe Vera içeriği ile cildinizin nazikçe temizlenmesine ve ferahlamasına yardımcı olur. Aloe vera özleri ile zenginleştirilmiş, taze ve yumuşak kokulu yüz temizleme jeli.",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/0765-tr-herbalife-skin-soothing-aloe-cleanser-150ml.png",
      preis: "251.33 TL",
    },
    {
      title: "Besleyici Gece Kremi 50 ml",
      detail:
        "Gece boyunca cildin derinlemesine nemlenmesine yardımcı olur. Uzun süreli nemlendirme sayesinde, daha yumuşak ve pürüzsüz bir ciltle uyanmanızı sağlar. 7 günde çizgilerin ve kırışıklıkların görünümünün azalmasına yardımcı olur.",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/0827-tr-herbalife-skin-replenishing-night-cream-50ml.png",
      preis: "489.96 TL",
    },
    {
      title: "Aloe El ve Vücut Şampuanı 250ml",
      detail:
        "Cildinizi nazikçe temizler venemli bir görünüm kazanmasına yardımcı olur. İçeriğinde sülfat ve paraben yoktur. Ferahlatıcı bir kokusu vardır.",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/2561-tr-herbal-aloe-hand-body-wash-250ml.png",
      preis: "117.29 TL",
    },
    {
      title: "Spor gıdası Formül 1 Sport Vanilya 524g",
      detail:
        "Içeriğindeki süt proteinleri ile (kazein ve peynir altı suyu proteini) yoğun fiziksel aktivite dönemlerinde protein dengesini korumak amacıyla formüle edilmiştir. C ve E Vitamini, demir ve kalsiyum içerir.",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/1432-tr-herbalife24-formula-1-sport-protein-shake-vanilla-cream-524g.png",
      preis: "380.12 TL",
    },
    {
      title: "Bitkisel Konsantre Çay Ahududu 50g",
      detail:
        "Yarım çay kaşığı ile hazırlanan içecek, porsiyon başına yaklaşık 6 kcal içerir. Bu tazeleyici içeceği sıcak ve soğuk olarak keyifle içebilirsiniz. 4 Farklı lezzet alternatifi mevcuttur.",
      url: "https://assets.herbalifenutrition.com/content/dam/regional/emea/tr_tr/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/0256-tr-instant-herbal-beverage-raspberry-50g.png",
      preis: "256.94 TL",
    },
  ];

  return (
    <div>
      <h1 className="baslik">YENİ ÜRÜNLERİMİZ</h1>
      <div className="cardContainer">
        {LatestUploads.map((item) => (
          <div className="myCard">
            <Card.Img variant="top" src={item.url} />
            <div className="cardText">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.detail}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </small>
              </Card.Footer>
            </div>
          </div>
        ))}
      </div>
      <h1 className="baslik">ÇOK SATANLAR</h1>
      <div className="cardContainer">
        {TopLikes.map((item) => (
          <div className="myCard">
            <Card.Img variant="top" src={item.url} />
            <div className="cardText">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.detail}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  {" "}
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </small>
              </Card.Footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupExample;
