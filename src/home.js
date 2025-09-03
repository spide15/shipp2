import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NumberCounter from 'number-counter';
import './home.css';
import { Link } from 'react-router-dom';

import banner1 from './img/blog/1 FLEX.jpg';
import section1 from './img/new/01.png'
import section2 from './img/new/02.png'
import section3 from './img/new/03.png'
import flex1 from './img/blog/2 FLEX.png'
import flex2 from './img/blog/3 FLEX.png'
import flex3 from './img/blog/4 FLEX.png'
import client1 from './img/logo/client/1.png'
import client2 from './img/logo/client/2.png'
import client3 from './img/logo/client/3.png'
import client4 from './img/logo/client/4.png'
import client5 from './img/logo/client/5.png'
import client6 from './img/logo/client/6.png'
import client7 from './img/logo/client/7.png'
import client8 from './img/logo/client/8.png'
import client9 from './img/logo/client/9.png'
import client10 from './img/logo/client/10.png'
import client11 from './img/logo/client/11.png'
import client12 from './img/logo/client/12.png'
import client13 from './img/logo/client/13.png'
import client14 from './img/logo/client/14.png'
import client15 from './img/logo/client/15.png'
import visitingCard from './img/product/visitingCard/2.jpg';
import visitingCard1 from './img/product/visitingCard/1.jpg';
import visitingCard2 from './img/product/visitingCard/2.jpg';
import visitingCard3 from './img/product/visitingCard/3.jpg';
import offset1 from './img/product/offset/1.jpg';
import offset2 from './img/product/offset/2.jpg';
import offset3 from './img/product/offset/3.jpg';
import offset4 from './img/product/offset/4.jpg';
import offsetPreview from './img/product/offset/2.jpg';
import stamp1 from './img/product/stamp/1.jpg';
import stamp2 from './img/product/stamp/2.jfif';
import stamp3 from './img/product/stamp/3.jfif';
import stamp4 from './img/product/stamp/4.jfif';
import stamp5 from './img/product/stamp/5.jfif';
import stampPreview from './img/product/stamp/1.jpg';
import mugPreview from './img/product/mugPrinting/1.jpg';
import mug2 from './img/product/mugPrinting/2.jpg';
import mug3 from './img/product/mugPrinting/3.jpg';
import mug4 from './img/product/mugPrinting/4.jpg';
import mug5 from './img/product/mugPrinting/5.jpg';
import mug6 from './img/product/mugPrinting/6.jpg';
import mug7 from './img/product/mugPrinting/7.jpg';
import blackBookPreview from './img/product/blackBook/1.jfif';
import blackBook1 from './img/product/blackBook/1.jfif';
import blackBook2 from './img/product/blackBook/2.jfif';
import blackBook3 from './img/product/blackBook/3.jfif';
import blackBook4 from './img/product/blackBook/4.jfif';
import billBookPreview from './img/product/billBook/1.jpg';
import billBook1 from './img/product/billBook/1.jpg';
import billBook2 from './img/product/billBook/2.jfif';
import billBook3 from './img/product/billBook/3.png';
import billBook4 from './img/product/billBook/4.jfif';
import letterHeadPreview from './img/product/letterHead/1.jpg';
import letterHead1 from './img/product/letterHead/1.jpg';
import letterHead2 from './img/product/letterHead/2.jpg';
import letterHead3 from './img/product/letterHead/3.jpg';
import letterHead4 from './img/product/letterHead/4.jpg';
import flexPreview from './img/product/flex/1.jpg';
import flex11 from './img/product/flex/1.jpg';
import flex22 from './img/product/flex/2.jpg';
import flex33 from './img/product/flex/3.jfif';
import flex4 from './img/product/flex/4.jfif';
import flex5 from './img/product/flex/5.jpg';
import penPreview from './img/product/pen/4.jpg';
import pen2 from './img/product/pen/2.jpg';
import pen3 from './img/product/pen/3.jpg';
import pen4 from './img/product/pen/4.jpg';
import pen5 from './img/product/pen/5.jpg';
import pen6 from './img/product/pen/6.jpg';
import pen7 from './img/product/pen/7.jpg';
import pen8 from './img/product/pen/8.jpg';
import pen1 from './img/product/pen/1.jpg';
import pillowPreview from './img/product/pillow/1.jpg';
import pillow1 from './img/product/pillow/1.jpg';
import pillow2 from './img/product/pillow/2.jpg';
import pillow3 from './img/product/pillow/3.jpg';
import pillow4 from './img/product/pillow/4.jpg';
import bottlePreview from './img/product/Bottle/01.jpg';
import bottle1 from './img/product/Bottle/1.jpg';
import bottle2 from './img/product/Bottle/2.jpg';
import bottle3 from './img/product/Bottle/3.jpg';
import bottle4 from './img/product/Bottle/4.jpg';
import bottle5 from './img/product/Bottle/5.jpg';
import bottle6 from './img/product/Bottle/6.jpg';
import bottle7 from './img/product/Bottle/7.jpg';
import keychainPreview from './img/product/Keychain/4.jpg';
import keychain1 from './img/product/Keychain/1.jpg';
import keychain2 from './img/product/Keychain/2.jpg';
import keychain3 from './img/product/Keychain/3.jpg';
import keychain4 from './img/product/Keychain/4.jpg';
import photocopyPreview from './img/product/photocopy/1.jfif'; // Replace with the actual path to the preview image
import photocopy1 from './img/product/photocopy/1.jfif';
import photocopy2 from './img/product/photocopy/2.jfif';
import photocopy3 from './img/product/photocopy/3.jfif';
import laminationPreview from './img/product/lamination/1.jfif'; // Replace with the actual path to the preview image
import lamination1 from './img/product/lamination/1.jfif';
import lamination2 from './img/product/lamination/2.jfif';
import lamination3 from './img/product/lamination/3.jfif';

import autocadPreview from './img/product/autocad/2.jfif'; // Replace with the actual path to the preview image
import autocad1 from './img/product/autocad/1.jfif';
import autocad2 from './img/product/autocad/2.jfif';
import autocad3 from './img/product/autocad/3.jfif';
import autocad4 from './img/product/autocad/4.jfif';

import spiralPreview from './img/product/spiral/1.jpg'; // Replace with the actual path to the preview image
import spiral1 from './img/product/spiral/1.jpg';
import spiral2 from './img/product/spiral/2.jfif';
import spiral3 from './img/product/spiral/3.jfif';
import spiral4 from './img/product/spiral/4.jfif';


import offer11 from "./img/OFFERNEW/11.jpeg";
import offer12 from "./img/OFFERNEW/12.jpeg";
import offer13 from "./img/OFFERNEW/13.jpeg";
import offer14 from "./img/OFFERNEW/14.jpeg";
import offer15 from "./img/OFFERNEW/15.jpeg";
import offer16 from "./img/OFFERNEW/16.jpeg";
import offer17 from "./img/OFFERNEW/17.jpeg";
import offer18 from "./img/OFFERNEW/18.jpeg";
import offer19 from "./img/OFFERNEW/19.jpeg";
import offer20 from "./img/OFFERNEW/20.jpeg";
import offer21 from "./img/OFFERNEW/21.jpeg";
import offer22 from "./img/OFFERNEW/22.jpeg";
import offer23 from "./img/OFFERNEW/23.jpeg";
import offer24 from "./img/OFFERNEW/24.jpeg";
import offer25 from "./img/OFFERNEW/25.jpeg";
import offer26 from "./img/OFFERNEW/26.jpeg";
import offer27 from "./img/OFFERNEW/27.jpeg";
import offer28 from "./img/OFFERNEW/28.jpeg";
import offer29 from "./img/OFFERNEW/29.jpeg";
import offer30 from "./img/OFFERNEW/30.jpeg";
import offer31 from "./img/OFFERNEW/31.jpeg";
import offer32 from "./img/OFFERNEW/32.jpeg";
import offer33 from "./img/OFFERNEW/33.jpeg";
import offer34 from "./img/OFFERNEW/34.jpeg";
import offer35 from "./img/OFFERNEW/35.jpeg";
import offer36 from "./img/OFFERNEW/36.jpeg";
import offer37 from "./img/OFFERNEW/37.jpeg";
import banner from "./img/Banner1.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ...existing code...

// 3D Parallax Banner1 image component
function ParallaxBanner() {
  const imgRef = useRef(null);
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const handleMove = (e) => {
      const rect = img.getBoundingClientRect();
      const x = ((e.touches ? e.touches[0].clientX : e.clientX) - rect.left) / rect.width;
      const y = ((e.touches ? e.touches[0].clientY : e.clientY) - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 30;
      const rotateX = (0.5 - y) * 30;
      img.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.08)`;
    };
    const reset = () => { img.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)'; };
    img.addEventListener('mousemove', handleMove);
    img.addEventListener('mouseleave', reset);
    img.addEventListener('touchmove', handleMove);
    img.addEventListener('touchend', reset);
    return () => {
      img.removeEventListener('mousemove', handleMove);
      img.removeEventListener('mouseleave', reset);
      img.removeEventListener('touchmove', handleMove);
      img.removeEventListener('touchend', reset);
    };
  }, []);
  return (
    <img
      ref={imgRef}
      src={banner}
      alt="3D Banner"
      className="parallax-3d-img"
      style={{ width: '100%', maxWidth: 600, borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
    />
  );
}




// 3D Flipping Card
function ProductDisplay({ product }) {
  return (
    <div className="product-3d-col text-center col-lg-4 col-md-6 col-12" key={product.id}>
      <div className="product-3d-flip">
        <div className="product-3d-flip-inner">
          <div className="product-3d-flip-front">
            <img src={product.preview} alt={product.name} className="img-fluid mb-3" />
            <h5 className="p-name">{product.name}</h5>
          </div>
          <div className="product-3d-flip-back">
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <button className="buy-btn">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const Home = () => {
  const featureSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'is-visible' to the container, which triggers animations on children
            entry.target.classList.add('is-visible');
            // No need to observe anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = featureSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);
  // Scroll-Reveal Effect: fade/slide content as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const content = document.getElementById('scrollRevealContent');
      if (!content) return;
      const section = content.parentElement;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // How much of the section is visible (0 = top of viewport, 1 = bottom)
      const visible = Math.min(Math.max((windowHeight - rect.top) / (rect.height || 1), 0), 1);
      // Fade out and slide up as user scrolls down
      content.style.opacity = 1 - visible * 1.2;
      content.style.transform = `translateY(${-visible * 60}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const offerImages = [
    offer11, offer12, offer13, offer14, offer15, offer16, offer17,
    offer18, offer19, offer20, offer21, offer22, offer23, offer24,
    offer25, offer26, offer27, offer28, offer29, offer30, offer31,
    offer32, offer33, offer34, offer35, offer36, offer37
  ];
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 750,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Medium devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const Homeproduct =
    [
      {
        "id": "15",
        "name": "Visiting Card",
        preview: visitingCard,
        photos: [
          visitingCard1,
          visitingCard2,
          visitingCard3
        ],
        "description": "Introducing Avani Xerox and Stationery's Visiting Card printing service, where first impressions meet professional excellence. Our printing service offers high-quality and customizable visiting cards that leave a lasting impact on potential clients and partners. Leave a lasting impression with Avani Xerox and Stationery's Visiting Card printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Present yourself or your business in a professional and memorable way. Order your personalized Visiting Cards today and make a statement wherever you go.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "26",
        "name": "Offset Printing",
        preview: offsetPreview,
        photos: [
          offset1,
          offset2,
          offset3,
          offset4
        ],
        "description": "Introducing Avani Xerox and Stationery's Offset Printing service, where precision meets professional printing. Our offset printing service offers exceptional quality and versatility for all your printing needs. Choose Avani Xerox and Stationery for your offset printing needs and experience the difference of professional printing. Trust in our commitment to quality, attention to detail, and customer satisfaction. Elevate your printed materials to new heights with our reliable offset printing service. Contact us today to bring your ideas to life.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "24",
        "name": "Rubber Stamp",
        preview: stampPreview,
        photos: [
          stamp1,
          stamp2,
          stamp3,
          stamp4,
          stamp5
        ],
        "description": "Introducing Avani Xerox and Stationery's customized rubber stamp service. Our rubber stamps are the perfect tool to add a personal touch to your documents, stationery, and crafts. Enhance your personal or professional stationery with a customized rubber stamp from Avani Xerox and Stationery. Trust in our commitment to quality, attention to detail, and customer satisfaction. Create a stamp that reflects your unique identity and leaves a lasting impression. Order your personalized rubber stamp today and make your mark with confidence.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "1",
        "name": "Mug Printing",
        preview: mugPreview,
        photos: [
          mug2,
          mug3,
          mug4,
          mug5,
          mug6,
          mug7
        ],
        "description": "At AJXS, we turn ordinary mugs into extraordinary works of art. Whether you prefer classic white, sleek black ,or the mesmerizing magic mug our print service brings your imagination to life.\nDiscover the joy of sipping from a mug that's as special as you are. Order your custom-printed white, black, or magic mug today and let your imagination take flight!",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "12",
        "name": "Black Book",
        preview: blackBookPreview,
        photos: [
          blackBook1,
          blackBook2,
          blackBook3,
          blackBook4
        ],
        "description": "Introducing Avani Xerox and Stationery's black book printing service, your go-to solution for college projects and presentations. Our black book printing service offers high-quality and professional printing for all your academic needs. Enhance your college projects with Avani Xerox and Stationery's black book printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Get your work professionally printed and make a lasting impression. Order your black books today and elevate your college projects to the next level.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        id: "28",
        name: "Bill Book Printing",
        preview: billBookPreview,
        photos: [
          billBook1,
          billBook2,
          billBook3,
          billBook4
        ],
        description: "Welcome to Avani Xerox and Stationery's Bill Book Printing service, your reliable partner for professional and customized bill book solutions. We understand the importance of well-designed and accurate bill books in maintaining a smooth and organized billing process for your business. Avani Xerox and Stationery's Bill Book Printing service ensures that your business maintains professionalism and accuracy in its invoicing process. With customized designs, sequential numbering, accurate details, and various size options, our bill books are tailored to meet your specific requirements. Contact us today to discuss your bill book printing needs and let us provide you with high-quality, customized solutions that simplify your billing process.",
        brand: "Discount offer on Bulk Quantity",
        category: "PRINT"
      },
      {
        id: "30",
        name: "Letter Head Printing",
        preview: letterHeadPreview,
        photos: [
          letterHead1,
          letterHead2,
          letterHead3,
          letterHead4
        ],
        description: "Avani Xerox and Stationery's Letterhead Printing service is your reliable partner for creating professional and impactful correspondence. Trust in our commitment to quality, customization, and customer satisfaction. Elevate your business or organization's image with our premium letterheads. Contact us today to order your personalized letterheads and make a statement with every letter you send.",
        brand: "Discount offer on Bulk Quantity",
        category: "PRINT"
      },
      {
        id: "7",
        name: "Flex Printing",
        preview: flexPreview,
        photos: [
          flex11,
          flex22,
          flex33,
          flex4,
          flex5
        ],
        description: "Avani Xerox and Stationery's Flex Printing service is your go-to solution for impactful outdoor advertising. With our commitment to customized designs, vibrant colors, and weather-resistant prints, we ensure your message stands out from the crowd. Contact us today to discuss your flex printing requirements and let us help you make a lasting impression with our top-quality prints.",
        brand: "Discount offer on Bulk Quantity",
        category: "PRINT"
      },
      {
        id: "33",
        name: "Customized Pen",
        preview: penPreview,
        photos: [
          pen2,
          pen3,
          pen4,
          pen5,
          pen6,
          pen7,
          pen8,
          pen1
        ],
        description: "Avani Xerox and Stationery's Customize Pen service offers you the opportunity to create pens that are unique, stylish, and personalized. With customized designs, personalized engravings, smooth writing experience, colorful options, and quick turnaround time, our pens are tailored to meet your needs. Start designing your own customized pen today and make a statement wherever you go.",
        brand: "Discount offer on Bulk Quantity",
        category: "GIFT"
      },
      {
        id: "6",
        name: "Customized Pillow",
        preview: pillowPreview,
        photos: [
          pillow1,
          pillow2,
          pillow3,
          pillow4
        ],
        description: "Welcome to Avani Xerox and Stationery, your go-to destination for personalized pillow printing services that add a touch of magic and comfort to your living space. Get ready to turn your dreams into reality with our pillow printing service available in heart and square shapes. Experience the joy of cuddling up to a pillow that's as unique as you are. Order your personalized heart-shaped or square pillows from Avani Xerox and Stationery today, and transform your living space into a haven of creativity and comfort.",
        brand: "Discount offer on Bulk Quantity",
        category: "GIFT"
      },
      {
        id: "21",
        name: "Customized bottle",
        preview: bottlePreview,
        photos: [
          bottle1,
          bottle2,
          bottle3,
          bottle4,
          bottle5,
          bottle6,
          bottle7
        ],
        description: "Welcome to Avani Xerox and Stationery, your trusted destination for customized water bottle printing services. We are dedicated to providing high-quality personalized water bottles that combine functionality with style. Quench your thirst for personalization with customized water bottles from Avani Xerox and Stationery. Trust in our commitment to quality, attention to detail, and customer satisfaction. Design a water bottle that reflects your style, promotes your brand, or makes a thoughtful gift. Order your personalized water bottle today and hydrate in style.",
        brand: "Discount offer on Bulk Quantity",
        category: "GIFT"
      },
      {
        id: "14",
        name: "Customized KeyChain",
        preview: keychainPreview,
        photos: [
          keychain1,
          keychain2,
          keychain3,
          keychain4
        ],
        description: "Welcome to Avani Xerox and Stationery, your trusted destination for customized keychain printing services. We take pride in delivering high-quality, personalized keychains that add a touch of uniqueness to your everyday life. Unlock a world of personalization with our customized keychain printing service at Avani Xerox and Stationery. Trust in our commitment to quality, customer satisfaction, and attention to detail. Create a keychain that reflects your style and holds your dearest memories. Order your personalized keychains today and carry a piece of uniqueness with you wherever you go.",
        brand: "Discount offer on Bulk Quantity",
        category: "GIFT"
      },
      {
        id: "5",
        name: "PhotoCopy",
        preview: photocopyPreview,
        photos: [
          photocopy1,
          photocopy2,
          photocopy3
        ],
        description: "Avani Xerox and Stationery's Photocopy Service is your go-to destination for all your copying needs. Experience the convenience of affordable, high-quality reproductions in both black and white and color. No matter the document size or the volume of copies required, we are here to serve you efficiently. Trust in our commitment to excellence and order your photocopies today.",
        brand: "Discount offer on Bulk Quantity",
        category: "XEROX"
      },
      {
        id: "10",
        name: "Lamination",
        preview: laminationPreview,
        photos: [
          lamination1,
          lamination2,
          lamination3
        ],
        description: "Avani Xerox and Stationery's Lamination Service is your go-to choice for document protection and preservation. Experience the peace of mind that comes with knowing your important documents are safe from damage and deterioration. Whether it's a single document or a bulk order, we offer affordable and reliable lamination services. Trust in our commitment to quality and order your lamination service today.",
        brand: "Discount offer on Bulk Quantity",
        category: "XEROX"
      },
      {
        id: "13",
        name: "Autocad Plotting",
        preview: autocadPreview,
        photos: [
          autocad1,
          autocad2,
          autocad3,
          autocad4
        ],
        description: "Introducing Avani Xerox and Stationery's Autocad Plotting service, your trusted partner for precise and professional CAD document printing. Our state-of-the-art equipment and expertise ensure accurate reproductions of your AutoCAD drawings and designs. Avani Xerox and Stationery's Autocad Plotting service is your reliable solution for high-quality CAD document printing. Trust in our commitment to accuracy, confidentiality, and customer satisfaction. Elevate the impact of your AutoCAD designs with our precise and professional printing services. Contact us today to bring your CAD drawings to life.",
        brand: "Discount offer on Bulk Quantity",
        category: "XEROX"
      },
      {
        id: "17",
        name: "Spiral binding",
        preview: spiralPreview,
        photos: [
          spiral1,
          spiral2,
          spiral3,
          spiral4
        ],
        description: "Introducing Avani Xerox and Stationery's Spiral Binding service, your solution for creating professional and organized documents. Our spiral binding service offers a secure and convenient way to bind your papers, reports, presentations, and more. Avani Xerox and Stationery's Spiral Binding service offers a professional and organized way to present your documents. Trust in our commitment to quality, efficiency, and customer satisfaction. Enhance the readability and durability of your papers with our secure and customizable spiral binding service. Contact us today to bind your documents with style and professionalism.",
        brand: "Discount offer on Bulk Quantity",
        category: "XEROX"
      },
    ];

  // 3D Parallax Hero
  const heroRef = useRef(null);
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.touches ? e.touches[0].clientX : e.clientX) - rect.left) / rect.width;
      const y = ((e.touches ? e.touches[0].clientY : e.clientY) - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 30;
      const rotateX = (0.5 - y) * 30;
      hero.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };
    const reset = () => { hero.style.transform = 'rotateY(0deg) rotateX(0deg)'; };
    hero.addEventListener('mousemove', handleMove);
    hero.addEventListener('mouseleave', reset);
    hero.addEventListener('touchmove', handleMove);
    hero.addEventListener('touchend', reset);
    return () => {
      hero.removeEventListener('mousemove', handleMove);
      hero.removeEventListener('mouseleave', reset);
      hero.removeEventListener('touchmove', handleMove);
      hero.removeEventListener('touchend', reset);
    };
  }, []);

  return (
    <>
      <div className="hero-3d-container"></div>
      {/* <div className="home-background"> */}
        <div className="scrolling-line">
          <span>
            We take orders on WhatsApp | Bulk orders available | Call us at{' '}
            <a href="tel:+917738405495">+91-7738405495</a>
          </span>
        {/* </div> */}
      </div>

      <div>
        <div className='product_type home-container container-fluid'>
          <div className='container pt-3 product-type-flex'>
            <div className='box'>
              <div className='img_box'>
                <img src={section1} alt='Printing' />
              </div>
              <div className='detail'>
                <div><p><NumberCounter end={25} start={1} delay='8' preFix="+" />Products</p></div>
              </div>
            </div>
            <div className='box'>
              <div className='img_box'>
                <img src={section2} alt='Gift' />
              </div>
              <div className='detail'>
                <div><p><NumberCounter end={30} start={1} delay='9' preFix="+" />Products</p></div>
              </div>
            </div>
            <div className='box'>
              <div className='img_box'>
                <img src={section3} alt='Xerox Service' />
              </div>
              <div className='detail'>
                <div><p><NumberCounter end={17} start={1} delay='10' preFix="+" />Products</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      
      {/* Responsive Parallax Scrolling Section */}
      <section className="parallax-section">
        {/* Parallax background image is set via CSS */}
        {/* <div className="parallax-content">
          <h2>Discover Our Services</h2>
          <p>We offer a wide range of printing, gifting, and stationery solutions for every need. Scroll down to explore more!</p>
        </div> */}
      </section>




      {/* Moving printing paper effect */}
      {/* <div className="printing-paper">Deep</div> */}

      {/* <div className="home-container">
          <div className="image-wrapper">
            <img src={AvaniXerox1} alt="Welcome to Our Shop" className="responsive-image" />
          </div>
        </div> */}

      {/* sections */}
      

      {/* Banner 1 */}
      {/* <div className="home-container"> */}

      {/* <div className="image-wrapper">
            <img src={banner1} alt="Welcome to Our Shop" className="responsive-image" />
          </div> */}
      {/* </div> */}

      <div className="container-fluid features-section" ref={featureSectionRef}>
        <div className="row px-xl-3">
          {/** Feature Item */}
          <div className="col-lg-6 col-md-6 col-sm-12 pb-1">
            <div className="feature-item d-flex align-items-center mb-4 swipe-in-from-left">
              <h1 className="fa fa-print text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">High-Quality Printing</h5>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 pb-1">
            <div className="feature-item d-flex align-items-center mb-4 swipe-in-from-right">
              <h1 className="fa fa-money-bill-wave text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Affordable Prices</h5>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 pb-1">
            <div className="feature-item d-flex align-items-center mb-4 swipe-in-from-left">
              <h1 className="fas fa-layer-group text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Wide Range of Products</h5>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 pb-1">
            <div className="feature-item d-flex align-items-center mb-4 swipe-in-from-right">
              <h1 className="fa fa-clock text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Quick Service</h5>
            </div>
          </div>
        </div>
      </div>



      {/* new offer */}
      <div className="home-container">
        <div className="container text-center">
          <h3>Trending Offer</h3>
          <hr className="mx-auto" />
        </div>
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {offerImages.map((src, index) => (
              <div key={index} className="slider-item">
                <img src={src} alt={`Offer ${index + 11}`} />
              </div>
            ))}
          </Slider>
        </div>

        {/* feature */}



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
              autoplaySpeed={1500}
              arrows={false}
            >
              <div className="img-fluid w-100">
                <img src={flex1} alt="image1" />
              </div>
              <div className="img-fluid w-100">
                <img src={flex2} alt="image2" />
              </div>
              <div className="img-fluid w-100">
                <img src={flex3} alt="image3" />
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
                autoplaySpeed={1000}
                arrows={false}
              >
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client1} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client2} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client3} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client4} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client5} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client6} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client7} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client8} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client9} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client10} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client11} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client12} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client13} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client14} alt="client" />
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <img className="img-fluid" src={client15} alt="client" />
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
      </div>
    </>

  );
}


export default Home