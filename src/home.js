import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NumberCounter from 'number-counter'
import './home.css'
import { Link } from 'react-router-dom';

function ProductDisplay({ product }) {

  return (
    <div className="product text-center col-lg-3 col-md-4 col-12" key={product.id}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        <img src={product.preview} alt={product.name} className="img-fluid mb-3" />
        <h5 className="p-name">{product.name}</h5>
        <button className="buy-btn">
          Read More
        </button>
      </Link>
    </div>
  );
}

const Home = () => {
  const Homeproduct =
    [
      {
        "id": "15",
        "name": "Visiting Card",
        "preview": "./img/product/visitingCard/2.jpg",
        "photos": [
          "./img/product/visitingCard/1.jpg",
          "./img/product/visitingCard/2.jpg",
          "./img/product/visitingCard/3.jpg"
        ],
        "description": "Introducing Avani Xerox and Stationery's Visiting Card printing service, where first impressions meet professional excellence. Our printing service offers high-quality and customizable visiting cards that leave a lasting impact on potential clients and partners. Leave a lasting impression with Avani Xerox and Stationery's Visiting Card printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Present yourself or your business in a professional and memorable way. Order your personalized Visiting Cards today and make a statement wherever you go.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "26",
        "name": "Offset Printing",
        "preview": "./img/product/offset/2.jpg",
        "photos": [
          "./img/product/offset/1.jpg",
          "./img/product/offset/2.jpg",
          "./img/product/offset/3.jpg",
          "./img/product/offset/4.jpg"
        ],
        "description": "Introducing Avani Xerox and Stationery's Offset Printing service, where precision meets professional printing. Our offset printing service offers exceptional quality and versatility for all your printing needs. Choose Avani Xerox and Stationery for your offset printing needs and experience the difference of professional printing. Trust in our commitment to quality, attention to detail, and customer satisfaction. Elevate your printed materials to new heights with our reliable offset printing service. Contact us today to bring your ideas to life.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "24",
        "name": "Rubber Stamp",
        "preview": "./img/product/stamp/1.jpg",
        "photos": [
          "./img/product/stamp/1.jpg",
          "./img/product/stamp/2.jfif",
          "./img/product/stamp/3.jfif",
          "./img/product/stamp/4.jfif",
          "./img/product/stamp/5.jfif"
        ],
        "description": "Introducing Avani Xerox and Stationery's customized rubber stamp service. Our rubber stamps are the perfect tool to add a personal touch to your documents, stationery, and crafts. Enhance your personal or professional stationery with a customized rubber stamp from Avani Xerox and Stationery. Trust in our commitment to quality, attention to detail, and customer satisfaction. Create a stamp that reflects your unique identity and leaves a lasting impression. Order your personalized rubber stamp today and make your mark with confidence.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "1",
        "name": "Mug Printing",
        "preview": "./img/product/mugPrinting/1.jpg",
        "photos": [
          "./img/product/mugPrinting/2.jpg",
          "./img/product/mugPrinting/3.jpg",
          "./img/product/mugPrinting/4.jpg",
          "./img/product/mugPrinting/5.jpg",
          "./img/product/mugPrinting/6.jpg",
          "./img/product/mugPrinting/7.jpg"
        ],
        "description": "At AJXS, we turn ordinary mugs into extraordinary works of art. Whether you prefer classic white, sleek black ,or the mesmerizing magic mug our print service brings your imagination to life.\nDiscover the joy of sipping from a mug that's as special as you are. Order your custom-printed white, black, or magic mug today and let your imagination take flight!",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "12",
        "name": "Black Book",
        "preview": "./img/product/blackBook/1.jfif",
        "photos": [
          "./img/product/blackBook/1.jfif",
          "./img/product/blackBook/2.jfif",
          "./img/product/blackBook/3.jfif",
          "./img/product/blackBook/4.jfif"
        ],
        "description": "Introducing Avani Xerox and Stationery's black book printing service, your go-to solution for college projects and presentations. Our black book printing service offers high-quality and professional printing for all your academic needs. Enhance your college projects with Avani Xerox and Stationery's black book printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Get your work professionally printed and make a lasting impression. Order your black books today and elevate your college projects to the next level.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "28",
        "name": "Bill Book Printing",
        "preview": "./img/product/billBook/1.jpg",
        "photos": [
          "./img/product/billBook/1.jpg",
          "./img/product/billBook/2.jfif",
          "./img/product/billBook/3.png",
          "./img/product/billBook/4.jfif"
        ],
        "description": "Welcome to Avani Xerox and Stationery's Bill Book Printing service, your reliable partner for professional and customized bill book solutions. We understand the importance of well-designed and accurate bill books in maintaining a smooth and organized billing process for your business. Avani Xerox and Stationery's Bill Book Printing service ensures that your business maintains professionalism and accuracy in its invoicing process. With customized designs, sequential numbering, accurate details, and various size options, our bill books are tailored to meet your specific requirements. Contact us today to discuss your bill book printing needs and let us provide you with high-quality, customized solutions that simplify your billing process.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "30",
        "name": "Letter Head Printing",
        "preview": "./img/product/letterHead/1.jpg",
        "photos": [
          "./img/product/letterHead/1.jpg",
          "./img/product/letterHead/2.jpg",
          "./img/product/letterHead/3.jpg",
          "./img/product/letterHead/4.jpg"
        ],
        "description": "Avani Xerox and Stationery's Letterhead Printing service is your reliable partner for creating professional and impactful correspondence. Trust in our commitment to quality, customization, and customer satisfaction. Elevate your business or organization's image with our premium letterheads. Contact us today to order your personalized letterheads and make a statement with every letter you send.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "7",
        "name": "Flex Printing ",
        "preview": "./img/product/flex/1.jpg",
        "photos": [
          "./img/product/flex/1.jpg",
          "./img/product/flex/2.jpg",
          "./img/product/flex/3.jfif",
          "./img/product/flex/4.jfif",
          "./img/product/flex/5.jpg"
        ],
        "description": "Avani Xerox and Stationery's Flex Printing service is your go-to solution for impactful outdoor advertising. With our commitment to customized designs, vibrant colors, and weather-resistant prints, we ensure your message stands out from the crowd. Contact us today to discuss your flex printing requirements and let us help you make a lasting impression with our top-quality prints.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "33",
        "name": "Customized Pen",
        "preview": "./img/product/pen/4.jpg",
        "photos": [
          "./img/product/pen/2.jpg",
          "./img/product/pen/3.jpg",
          "./img/product/pen/4.jpg",
          "./img/product/pen/5.jpg",
          "./img/product/pen/6.jpg",
          "./img/product/pen/7.jpg",
          "./img/product/pen/8.jpg",
          "./img/product/pen/1.jpg"
        ],
        "description": "Avani Xerox and Stationery's Customize Pen service offers you the opportunity to create pens that are unique, stylish, and personalized. With customized designs, personalized engravings, smooth writing experience, colorful options, and quick turnaround time, our pens are tailored to meet your needs. Start designing your own customized pen today and make a statement wherever you go.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "6",
        "name": "Customized Pillow ",
        "preview": "./img/product/pillow/1.jpg",
        "photos": [
          "./img/product/pillow/1.jpg",
          "./img/product/pillow/2.jpg",
          "./img/product/pillow/3.jpg",
          "./img/product/pillow/4.jpg"
        ],
        "description": "Welcome to Avani Xerox and Stationery, your go-to destination for personalized pillow printing services that add a touch of magic and comfort to your living space. Get ready to turn your dreams into reality with our pillow printing service available in heart and square shapes. Experience the joy of cuddling up to a pillow that's as unique as you are. Order your personalized heart-shaped or square pillows from Avani Xerox and Stationery today, and transform your living space into a haven of creativity and comfort.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "21",
        "name": "Customized bottle",
        "preview": "./img/product/Bottle/01.jpg",
        "photos": [
          "./img/product/Bottle/1.jpg",
          "./img/product/Bottle/2.jpg",
          "./img/product/Bottle/3.jpg",
          "./img/product/Bottle/4.jpg",
          "./img/product/Bottle/5.jpg",
          "./img/product/Bottle/6.jpg",
          "./img/product/Bottle/7.jpg"
        ],
        "description": "Welcome to Avani Xerox and Stationery, your trusted destination for customized water bottle printing services. We are dedicated to providing high-quality personalized water bottles that combine functionality with style. Quench your thirst for personalization with customized water bottles from Avani Xerox and Stationery. Trust in our commitment to quality, attention to detail, and customer satisfaction. Design a water bottle that reflects your style, promotes your brand, or makes a thoughtful gift. Order your personalized water bottle today and hydrate in style.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "14",
        "name": "Customized KeyChain",
        "preview": "./img/product/Keychain/4.jpg",
        "photos": [
          "./img/product/Keychain/1.jpg",
          "./img/product/Keychain/2.jpg",
          "./img/product/Keychain/3.jpg",
          "./img/product/Keychain/4.jpg"
        ],
        "description": "Welcome to Avani Xerox and Stationery, your trusted destination for customized keychain printing services. We take pride in delivering high-quality, personalized keychains that add a touch of uniqueness to your everyday life. Unlock a world of personalization with our customized keychain printing service at Avani Xerox and Stationery. Trust in our commitment to quality, customer satisfaction, and attention to detail. Create a keychain that reflects your style and holds your dearest memories. Order your personalized keychains today and carry a piece of uniqueness with you wherever you go.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "5",
        "name": "PhotoCopy",
        "preview": "./img/product/photocopy/1.jfif",
        "photos": [
          "./img/product/photocopy/1.jfif",
          "./img/product/photocopy/2.jfif",
          "./img/product/photocopy/3.jfif"
        ],
        "description": "Avani Xerox and Stationery's Photocopy Service is your go-to destination for all your copying needs. Experience the convenience of affordable, high-quality reproductions in both black and white and color. No matter the document size or the volume of copies required, we are here to serve you efficiently. Trust in our commitment to excellence and order your photocopies today.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "XEROX"
      },
      {
        "id": "10",
        "name": "Lamination",
        "preview": "./img/product/lamination/1.jfif",
        "photos": [
          "./img/product/lamination/1.jfif",
          "./img/product/lamination/2.jfif",
          "./img/product/lamination/3.jfif"
        ],
        "description": "Avani Xerox and Stationery's Lamination Service is your go-to choice for document protection and preservation. Experience the peace of mind that comes with knowing your important documents are safe from damage and deterioration. Whether it's a single document or a bulk order, we offer affordable and reliable lamination services. Trust in our commitment to quality and order your lamination service today.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "XEROX"
      },
      {
        "id": "13",
        "name": "Autocad Plotting",
        "preview": "./img/product/autocad/2.jfif",
        "photos": [
          "./img/product/autocad/1.jfif",
          "./img/product/autocad/2.jfif",
          "./img/product/autocad/3.jfif",
          "./img/product/autocad/4.jfif"
        ],
        "description": "Introducing Avani Xerox and Stationery's Autocad Plotting service, your trusted partner for precise and professional CAD document printing. Our state-of-the-art equipment and expertise ensure accurate reproductions of your AutoCAD drawings and designs. Avani Xerox and Stationery's Autocad Plotting service is your reliable solution for high-quality CAD document printing. Trust in our commitment to accuracy, confidentiality, and customer satisfaction. Elevate the impact of your AutoCAD designs with our precise and professional printing services. Contact us today to bring your CAD drawings to life.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "XEROX"
      },
      {
        "id": "17",
        "name": "Spiral binding",
        "preview": "./img/product/spiral/1.jpg",
        "photos": [
          "./img/product/spiral/1.jpg",
          "./img/product/spiral/2.jfif",
          "./img/product/spiral/3.jfif",
          "./img/product/spiral/4.jfif"
        ],
        "description": "Introducing Avani Xerox and Stationery's Spiral Binding service, your solution for creating professional and organized documents. Our spiral binding service offers a secure and convenient way to bind your papers, reports, presentations, and more. Avani Xerox and Stationery's Spiral Binding service offers a professional and organized way to present your documents. Trust in our commitment to quality, efficiency, and customer satisfaction. Enhance the readability and durability of your papers with our secure and customizable spiral binding service. Contact us today to bind your documents with style and professionalism.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "XEROX"
      }
    ];

  return (
    <>
      {/* slider main */}
      <section className="pt-5 my-5">
        <div className="container pt-5 mt-5">
          <Slider
            dots={true}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2000}
          >
            <div className="slidingImage">
              <img src="./img/slider/1.png" alt="image1" />
            </div>
            <div className="slidingImage">
              <img src="./img/slider/2.png" alt="image2" />
            </div>
            <div className="slidingImage">
              <img src="./img/slider/3.png" alt="image3" />
            </div>
            <div className="slidingImage">
              <img src="./img/slider/4.png" alt="image4" />
            </div>
            <div className="slidingImage">
              <img src="./img/slider/5.png" alt="image5" />
            </div>
            <div className="slidingImage">
              <img src="./img/slider/6.png" alt="image6" />
            </div>
            <div className="slidingImage">
              <img src="./img/slider/7.png" alt="image7" />
            </div>
          </Slider>
        </div>
      </section>

      {/* Banner 1 */}
      <div className="col-lg-12 col-md-12 col-12 mt-5">
        <div className="post-img">
          <img className="img-fluid w-100" src="./img/blog/1 FLEX.png" alt="banner1" />
        </div>
      </div>

      {/* sections */}
      <div className='product_type'>
        <div className='container'>
          <div className='box'>
            <div className='img_box'>
              <img src="./img/new/01.png" alt='Printing' />
            </div>
            <div className='detail'>
              <div><p><NumberCounter end={25} start={1} delay='8' preFix="+" />Products</p></div>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src="./img/new/02.png" alt='Gift' />
            </div>
            <div className='detail'>
              <div><p><NumberCounter end={30} start={1} delay='9' preFix="+" />Products</p></div>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src="./img/new/03.png" alt='Xerox Service' />
            </div>
            <div className='detail'>
              <div><p><NumberCounter end={17} start={1} delay='10' preFix="+" />Products</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* home page product */}
      <section id="print" >
        <div className="container text-center">
          <h3>Premium Product's</h3>
          <hr className="mx-auto" />
        </div>
        <div className="row mx-auto container">
          {Homeproduct.map((product) => (
            <ProductDisplay product={product} key={product.id} />
          ))}
        </div>
      </section>

      {/* offer */}

      <section >
        <div className="container pt-5 mt-5">
          <h3 className="text-center mt-3"> Offers</h3>
          <hr className="mx-auto" />
          <div className="post-img" id="banner-slider"></div>
          <Slider
            dots={false}
            infinite={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
          >
            <div className="img-fluid w-100">
              <img src="./img/blog/2 FLEX.png" alt="image1" />
            </div>
            <div className="img-fluid w-100">
              <img src="./img/blog/3 FLEX.png" alt="image2" />
            </div>
            <div className="img-fluid w-100">
              <img src="./img/blog/4 FLEX.png" alt="image3" />
            </div>
          </Slider>
        </div >
      </section >

      {/* client */}
      <section className="container">
        <div className="text-center mt-3 ">
          <h3> Clients</h3>
          <hr className="mx-auto" />
          <div className="container my-2" id="brand">
            <Slider
              dots={false}
              infinite={true}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2000}
            >
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/1.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/2.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/3.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/4.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/5.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/6.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/7.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/8.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/9.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/10.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/11.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/12.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/13.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/14.png" alt="client" />
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <img className="img-fluid" src="./img/logo/client/15.png" alt="client" />
              </div>
            </Slider>
            <hr className="mx-auto" />
          </div>
        </div>
      </section>

      {/* map */}
      <div className=" col-lg-12 col-md-12 col-12 ">
        <div className="post-img">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6595559054854!2d72.8558526092061!3d19.253663446299033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e482e6c5fb%3A0xf05f1fcfd1f9d533!2sAvani%20Jumbo%20Xerox!5e0!3m2!1sen!2sin!4v1682943226876!5m2!1sen!2sin"
            width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  )
}

export default Home