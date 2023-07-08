import React, { useState } from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const ShopProduct =
    [
      {
        "id": "1",
        "name": "Mug Printing",
        "preview": "../img/product/mugPrinting/1.jpg",
        "photos": [
          "../img/product/mugPrinting/2.jpg",
          "../img/product/mugPrinting/3.jpg",
          "../img/product/mugPrinting/4.jpg",
          "../img/product/mugPrinting/5.jpg",
          "../img/product/mugPrinting/6.jpg",
          "../img/product/mugPrinting/7.jpg"
        ],
        "description": "At AJXS, we turn ordinary mugs into extraordinary works of art. Whether you prefer classic white, sleek black ,or the mesmerizing magic mug our print service brings your imagination to life.\nDiscover the joy of sipping from a mug that's as special as you are. Order your custom-printed white, black, or magic mug today and let your imagination take flight!",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "2",
        "name": "Customized Wallet",
        "preview": "../img/product/menWallet/1.jpg",
        "photos": [
          "../img/product/menWallet/2.jpg",
          "../img/product/menWallet/3.jpg",
          "../img/product/menWallet/4.jpg",
          "../img/product/menWallet/5.jpg",
          "../img/product/menWallet/6.jpg",
          "../img/product/menWallet/1.jpg"
        ],
        "description": "Avani Xerox and Stationery's Customize Men Wallet service offers you the opportunity to design a wallet that is both functional and stylish, while adding a personal touch. With customized designs, personalized engravings, smart organization features, superior quality, and quick turnaround time, our wallets are designed to enhance your everyday life. Start designing your own custom men's wallet today and carry your essentials with personalized flair.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "3",
        "name": "Office Stationery",
        "preview": "../img/product/office/2.jfif",
        "photos": [
          "../img/product/office/1.jfif",
          "../img/product/office/2.jfif",
          "../img/product/office/3.jfif",
          "../img/product/office/4.jfif"
        ],
        "description": "Welcome to Avani Xerox and Stationery, your trusted destination for all your office stationery needs. We offer a comprehensive range of high-quality products that will keep your office running smoothly and efficiently. At Avani Xerox and Stationery, we are committed to providing top-quality office stationery that enhances productivity and organization in your workplace. Visit our store today to explore our wide range of products and find the perfect supplies to meet your office needs.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "STATIONERY"
      },
      {
        "id": "4",
        "name": "COMBO OFFER(2 in 1)",
        "preview": "../img/product/combo2/1.jpg",
        "photos": [
          "../img/product/combo2/1.jpg",
          "../img/product/combo2/2.jpg",
          "../img/product/combo2/3.jpg",
          "../img/product/combo2/4.jpg",
          "../img/product/combo2/5.jpg",
          "../img/product/combo2/6.jpg"
        ],
        "description": "Avani Xerox and Stationery is excited to offer an exclusive combo deal to enhance your shopping experience. Our combo offer brings together a perfect combination of high-quality stationery and printing services at a discounted price. Whether you're looking for office supplies, personalized stationery, printing solutions, or a mix of everything, our combo offer has got you covered. Explore a wide range of options and create your own customized combo to meet your unique needs. Shop now and enjoy the convenience and affordability of our combo offer at Avani Xerox and Stationery.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "COMBO"
      },
      {
        "id": "5",
        "name": "PhotoCopy",
        "preview": "../img/product/photocopy/1.jfif",
        "photos": [
          "../img/product/photocopy/1.jfif",
          "../img/product/photocopy/2.jfif",
          "../img/product/photocopy/3.jfif"
        ],
        "description": "Avani Xerox and Stationery's Photocopy Service is your go-to destination for all your copying needs. Experience the convenience of affordable, high-quality reproductions in both black and white and color. No matter the document size or the volume of copies required, we are here to serve you efficiently. Trust in our commitment to excellence and order your photocopies today.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "XEROX"
      },
      {
        "id": "6",
        "name": "Customized Pillow ",
        "preview": "../img/product/pillow/1.jpg",
        "photos": [
          "../img/product/pillow/1.jpg",
          "../img/product/pillow/2.jpg",
          "../img/product/pillow/3.jpg",
          "../img/product/pillow/4.jpg"
        ],
        "description": "Welcome to Avani Xerox and Stationery, your go-to destination for personalized pillow printing services that add a touch of magic and comfort to your living space. Get ready to turn your dreams into reality with our pillow printing service available in heart and square shapes. Experience the joy of cuddling up to a pillow that's as unique as you are. Order your personalized heart-shaped or square pillows from Avani Xerox and Stationery today, and transform your living space into a haven of creativity and comfort.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "7",
        "name": "Flex Printing ",
        "preview": "../img/product/flex/1.jpg",
        "photos": [
          "../img/product/flex/1.jpg",
          "../img/product/flex/2.jpg",
          "../img/product/flex/3.jfif",
          "../img/product/flex/4.jfif",
          "../img/product/flex/5.jpg"
        ],
        "description": "Avani Xerox and Stationery's Flex Printing service is your go-to solution for impactful outdoor advertising. With our commitment to customized designs, vibrant colors, and weather-resistant prints, we ensure your message stands out from the crowd. Contact us today to discuss your flex printing requirements and let us help you make a lasting impression with our top-quality prints.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "8",
        "name": "School Stationery",
        "preview": "../img/product/school/2.jfif",
        "photos": [
          "../img/product/school/1.jfif",
          "../img/product/school/2.jfif",
          "../img/product/school/3.jfif",
          "../img/product/school/4.jfif"
        ],
        "description": "Welcome to Avani Xerox and Stationery, your one-stop shop for all your school stationery needs. We offer a wide range of high-quality products that will equip students with the tools they need for success in the classroom. At Avani Xerox and Stationery, we strive to provide top-quality school stationery that enhances learning and productivity. Visit our store today and discover the wide range of products we offer to meet your school stationery needs. Our friendly staff is here to assist you in finding the perfect supplies for your educational journey.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "STATIONERY"
      },
      {
        "id": "9",
        "name": "COMBO OFFER(3 in 1)",
        "preview": "../img/product/combo3/1.jpg",
        "photos": [
          "../img/product/combo3/1.jpg",
          "../img/product/combo3/2.jpg",
          "../img/product/combo3/3.jpg",
          "../img/product/combo3/4.jpg"
        ],
        "description": "Avani Xerox and Stationery is excited to offer an exclusive combo deal to enhance your shopping experience. Our combo offer brings together a perfect combination of high-quality stationery and printing services at a discounted price. Whether you're looking for office supplies, personalized stationery, printing solutions, or a mix of everything, our combo offer has got you covered. Explore a wide range of options and create your own customized combo to meet your unique needs. Shop now and enjoy the convenience and affordability of our combo offer at Avani Xerox and Stationery.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "COMBO"
      },
      {
        "id": "10",
        "name": "Lamination",
        "preview": "../img/product/lamination/1.jfif",
        "photos": [
          "../img/product/lamination/1.jfif",
          "../img/product/lamination/2.jfif",
          "../img/product/lamination/3.jfif"
        ],
        "description": "Avani Xerox and Stationery's Lamination Service is your go-to choice for document protection and preservation. Experience the peace of mind that comes with knowing your important documents are safe from damage and deterioration. Whether it's a single document or a bulk order, we offer affordable and reliable lamination services. Trust in our commitment to quality and order your lamination service today.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "XEROX"
      },
      {
        "id": "11",
        "name": "Customized T-Shirt ",
        "preview": "../img/product/tshirt/4.jpg",
        "photos": [
          "../img/product/tshirt/1.jpg",
          "../img/product/tshirt/2.jpg",
          "../img/product/tshirt/3.jpg",
          "../img/product/tshirt/4.jpg"
        ],
        "description": "Welcome to Avani Xerox and Stationery, your trusted destination for customized t-shirt printing services. We are passionate about transforming ordinary t-shirts into wearable works of art that reflect your personality and style. Express yourself with personalized t-shirts from Avani Xerox and Stationery. Trust in our commitment to quality, attention to detail, and customer satisfaction. Design t-shirts that capture your unique style, celebrate special moments, or promote your brand. Order your customized t-shirts today and wear your creativity with pride.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "12",
        "name": "Black Book",
        "preview": "../img/product/blackBook/1.jfif",
        "photos": [
          "../img/product/blackBook/1.jfif",
          "../img/product/blackBook/2.jfif",
          "../img/product/blackBook/3.jfif",
          "../img/product/blackBook/4.jfif"
        ],
        "description": "Introducing Avani Xerox and Stationery's black book printing service, your go-to solution for college projects and presentations. Our black book printing service offers high-quality and professional printing for all your academic needs. Enhance your college projects with Avani Xerox and Stationery's black book printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Get your work professionally printed and make a lasting impression. Order your black books today and elevate your college projects to the next level.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "13",
        "name": "Autocad Plotting",
        "preview": "../img/product/autocad/2.jfif",
        "photos": [
          "../img/product/autocad/1.jfif",
          "../img/product/autocad/2.jfif",
          "../img/product/autocad/3.jfif",
          "../img/product/autocad/4.jfif"
        ],
        "description": "Introducing Avani Xerox and Stationery's Autocad Plotting service, your trusted partner for precise and professional CAD document printing. Our state-of-the-art equipment and expertise ensure accurate reproductions of your AutoCAD drawings and designs. Avani Xerox and Stationery's Autocad Plotting service is your reliable solution for high-quality CAD document printing. Trust in our commitment to accuracy, confidentiality, and customer satisfaction. Elevate the impact of your AutoCAD designs with our precise and professional printing services. Contact us today to bring your CAD drawings to life.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "XEROX"
      },
      {
        "id": "14",
        "name": "Customized KeyChain",
        "preview": "../img/product/Keychain/4.jpg",
        "photos": [
          "../img/product/Keychain/1.jpg",
          "../img/product/Keychain/2.jpg",
          "../img/product/Keychain/3.jpg",
          "../img/product/Keychain/4.jpg"
        ],
        "description": "Welcome to Avani Xerox and Stationery, your trusted destination for customized keychain printing services. We take pride in delivering high-quality, personalized keychains that add a touch of uniqueness to your everyday life. Unlock a world of personalization with our customized keychain printing service at Avani Xerox and Stationery. Trust in our commitment to quality, customer satisfaction, and attention to detail. Create a keychain that reflects your style and holds your dearest memories. Order your personalized keychains today and carry a piece of uniqueness with you wherever you go.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "15",
        "name": "Visiting Card",
        "preview": "../img/product/visitingCard/2.jpg",
        "photos": [
          "../img/product/visitingCard/1.jpg",
          "../img/product/visitingCard/2.jpg",
          "../img/product/visitingCard/3.jpg"
        ],
        "description": "Introducing Avani Xerox and Stationery's Visiting Card printing service, where first impressions meet professional excellence. Our printing service offers high-quality and customizable visiting cards that leave a lasting impact on potential clients and partners. Leave a lasting impression with Avani Xerox and Stationery's Visiting Card printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Present yourself or your business in a professional and memorable way. Order your personalized Visiting Cards today and make a statement wherever you go.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "16",
        "name": "COMBO OFFER(4 in 1)",
        "preview": "../img/product/combo4/1.jpg",
        "photos": [
          "../img/product/combo4/1.jpg",
          "../img/product/combo4/2.jpg",
          "../img/product/combo4/3.jpg",
          "../img/product/combo4/4.jpg"
        ],
        "description": "Avani Xerox and Stationery is excited to offer an exclusive combo deal to enhance your shopping experience. Our combo offer brings together a perfect combination of high-quality stationery and printing services at a discounted price. Whether you're looking for office supplies, personalized stationery, printing solutions, or a mix of everything, our combo offer has got you covered. Explore a wide range of options and create your own customized combo to meet your unique needs. Shop now and enjoy the convenience and affordability of our combo offer at Avani Xerox and Stationery.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "COMBO"
      },
      {
        "id": "17",
        "name": "Spiral binding",
        "preview": "../img/product/spiral/1.jpg",
        "photos": [
          "../img/product/spiral/1.jpg",
          "../img/product/spiral/2.jfif",
          "../img/product/spiral/3.jfif",
          "../img/product/spiral/4.jfif"
        ],
        "description": "Introducing Avani Xerox and Stationery's Spiral Binding service, your solution for creating professional and organized documents. Our spiral binding service offers a secure and convenient way to bind your papers, reports, presentations, and more. Avani Xerox and Stationery's Spiral Binding service offers a professional and organized way to present your documents. Trust in our commitment to quality, efficiency, and customer satisfaction. Enhance the readability and durability of your papers with our secure and customizable spiral binding service. Contact us today to bind your documents with style and professionalism.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "XEROX"
      },
      {
        "id": "18",
        "name": "Customized Cover",
        "preview": "../img/product/mobileCover/1.jpg",
        "photos": [
          "../img/product/mobileCover/1.jpg",
          "../img/product/mobileCover/2.jpg",
          "../img/product/mobileCover/3.jfif"
        ],
        "description": "Welcome to Avani Xerox and Stationery, your trusted destination for personalized mobile cover printing services. Whether you prefer a soft or hard cover, we've got you covered with our high-quality printing and exceptional customer service. Protect your phone in style with a custom mobile cover from Avani Xerox and Stationery. Choose between soft and hard options, and let your creativity shine. Trust in our commitment to quality and customer satisfaction. Order your personalized mobile cover today and showcase your unique style wherever you go.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "19",
        "name": "Smart(PVC) Card",
        "preview": "../img/product/idCard/2.jfif",
        "photos": [
          "../img/product/idCard/1.jfif",
          "../img/product/idCard/2.jfif",
          "../img/product/idCard/3.jfif",
          "../img/product/idCard/4.jpg",
          "../img/product/idCard/5.jpg"
        ],
        "description": "Introducing Avani Xerox and Stationery's Smart Card or PVC card printing service. Our printing service offers high-quality and durable cards that are perfect for a wide range of applications. Choose Avani Xerox and Stationery for your Smart Card or PVC card printing needs. Trust in our commitment to quality, attention to detail, and customer satisfaction. Get your cards professionally printed and showcase your brand or personal information with confidence. Order your customized Smart Cards or PVC cards today and make a lasting impression.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "20",
        "name": "DTP Service",
        "preview": "../img/product/dtp/4.jfif",
        "photos": [
          "../img/product/dtp/1.jfif",
          "../img/product/dtp/2.jfif",
          "../img/product/dtp/3.jfif",
          "../img/product/dtp/4.jfif"
        ],
        "description": "Welcome to Avani Xerox and Stationery's DTP (Desktop Publishing) service, your go-to solution for all your language-based design and typesetting needs. Our DTP service combines creativity, precision, and multilingual capabilities to deliver professional and visually appealing designs in English, Hindi, Marathi, Gujarati, and more. Contact us today to discuss your DTP requirements and let our team bring your ideas to life with captivating designs.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "XEROX"
      },
      {
        "id": "21",
        "name": "Customized bottle",
        "preview": "../img/product/Bottle/01.jpg",
        "photos": [
          "../img/product/Bottle/1.jpg",
          "../img/product/Bottle/2.jpg",
          "../img/product/Bottle/3.jpg",
          "../img/product/Bottle/4.jpg",
          "../img/product/Bottle/5.jpg",
          "../img/product/Bottle/6.jpg",
          "../img/product/Bottle/7.jpg"
        ],
        "description": "Welcome to Avani Xerox and Stationery, your trusted destination for customized water bottle printing services. We are dedicated to providing high-quality personalized water bottles that combine functionality with style. Quench your thirst for personalization with customized water bottles from Avani Xerox and Stationery. Trust in our commitment to quality, attention to detail, and customer satisfaction. Design a water bottle that reflects your style, promotes your brand, or makes a thoughtful gift. Order your personalized water bottle today and hydrate in style.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "22",
        "name": "Lace Printing",
        "preview": "../img/product/Lace/2.jfif",
        "photos": [
          "../img/product/Lace/1.jpg",
          "../img/product/Lace/2.jfif",
          "../img/product/Lace/3.jfif",
          "../img/product/Lace/4.jfif"
        ],
        "description": "Introducing Avani Xerox and Stationery's lace printing service, where creativity meets elegance. Our lace printing service allows you to add a touch of sophistication and intricate designs to your special occasions and craft projects. Embrace elegance and creativity with Avani Xerox and Stationery's lace printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Add a touch of sophistication to your special occasions and crafts. Order your lace-printed items today and let your creativity bloom.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "23",
        "name": "Customized Ring",
        "preview": "../img/product/ring/1.jpg",
        "photos": [
          "../img/product/ring/1.jpg",
          "../img/product/ring/2.jpg",
          "../img/product/ring/3.jpg",
          "../img/product/ring/4.jpg",
          "../img/product/ring/5.jpg"
        ],
        "description": "Avani Xerox and Stationery's Customize Ring service allows you to create a ring that is as unique and exceptional as you are. With customized designs, personalized engravings, superior quality materials, and versatile styles, our rings are crafted to make a lasting impression. Start designing your own custom ring today and let us help you create a timeless piece of jewelry that tells your story.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "24",
        "name": "Rubber Stamp",
        "preview": "../img/product/stamp/1.jpg",
        "photos": [
          "../img/product/stamp/1.jpg",
          "../img/product/stamp/2.jfif",
          "../img/product/stamp/3.jfif",
          "../img/product/stamp/4.jfif",
          "../img/product/stamp/5.jfif"
        ],
        "description": "Introducing Avani Xerox and Stationery's customized rubber stamp service. Our rubber stamps are the perfect tool to add a personal touch to your documents, stationery, and crafts. Enhance your personal or professional stationery with a customized rubber stamp from Avani Xerox and Stationery. Trust in our commitment to quality, attention to detail, and customer satisfaction. Create a stamp that reflects your unique identity and leaves a lasting impression. Order your personalized rubber stamp today and make your mark with confidence.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "25",
        "name": "Customized Frame",
        "preview": "../img/product/photoframe/1.jpg",
        "photos": [
          "../img/product/photoframe/2.jpg",
          "../img/product/photoframe/5.jpg",
          "../img/product/photoframe/6.jpg",
          "../img/product/photoframe/7.jpg",
          "../img/product/photoframe/8.jpg",
          "../img/product/photoframe/9.jpg",
          "../img/product/photoframe/7.jpg"
        ],
        "description": "Welcome to Avani Xerox and Stationery! Capture and showcase your memories with Avani Xerox and Stationery's Customized Photo Frame Manufacturing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Let your photographs shine in personalized frames that reflect your style and preserve your precious moments.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "26",
        "name": "Offset Printing",
        "preview": "../img/product/offset/2.jpg",
        "photos": [
          "../img/product/offset/1.jpg",
          "../img/product/offset/2.jpg",
          "../img/product/offset/3.jpg",
          "../img/product/offset/4.jpg"
        ],
        "description": "Introducing Avani Xerox and Stationery's Offset Printing service, where precision meets professional printing. Our offset printing service offers exceptional quality and versatility for all your printing needs. Choose Avani Xerox and Stationery for your offset printing needs and experience the difference of professional printing. Trust in our commitment to quality, attention to detail, and customer satisfaction. Elevate your printed materials to new heights with our reliable offset printing service. Contact us today to bring your ideas to life.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "27",
        "name": "Customized Name Plate",
        "preview": "../img/product/namePlate/2.jpg",
        "photos": [
          "../img/product/namePlate/1.jpg",
          "../img/product/namePlate/2.jpg",
          "../img/product/namePlate/3.jpg",
          "../img/product/namePlate/4.jpg"
        ],
        "description": "Welcome to Avani Xerox and Stationery, your trusted destination for customized nameplate printing services. We specialize in creating personalized nameplates that add a touch of elegance and professionalism to your home or office. Enhance your personal or professional space with a customized nameplate from Avani Xerox and Stationery. Trust in our commitment to quality, attention to detail, and customer satisfaction. Create a nameplate that reflects your unique identity and makes a lasting impression. Order your personalized nameplate today and elevate your surroundings with style and professionalism.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "28",
        "name": "Bill Book Printing",
        "preview": "../img/product/billBook/1.jpg",
        "photos": [
          "../img/product/billBook/1.jpg",
          "../img/product/billBook/2.jfif",
          "../img/product/billBook/3.png",
          "../img/product/billBook/4.jfif"
        ],
        "description": "Welcome to Avani Xerox and Stationery's Bill Book Printing service, your reliable partner for professional and customized bill book solutions. We understand the importance of well-designed and accurate bill books in maintaining a smooth and organized billing process for your business. Avani Xerox and Stationery's Bill Book Printing service ensures that your business maintains professionalism and accuracy in its invoicing process. With customized designs, sequential numbering, accurate details, and various size options, our bill books are tailored to meet your specific requirements. Contact us today to discuss your bill book printing needs and let us provide you with high-quality, customized solutions that simplify your billing process.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "29",
        "name": "Customized Bracelet Women",
        "preview": "../img/product/BraceletW/4.jpg",
        "photos": [
          "../img/product/BraceletW/2.jpg",
          "../img/product/BraceletW/3.jpg",
          "../img/product/BraceletW/4.jpg",
          "../img/product/BraceletW/5.jpg",
          "../img/product/BraceletW/6.jpg",
          "../img/product/BraceletW/1.jpg"
        ],
        "description": "Avani Xerox and Stationery's Customize Women Bracelet service allows you to express your unique style and create a meaningful piece of jewelry. With customized designs, personalized engravings, premium quality materials, and versatile styles, our bracelets are designed to make a lasting impression.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "30",
        "name": "Letter Head Printing",
        "preview": "../img/product/letterHead/1.jpg",
        "photos": [
          "../img/product/letterHead/1.jpg",
          "../img/product/letterHead/2.jpg",
          "../img/product/letterHead/3.jpg",
          "../img/product/letterHead/4.jpg"
        ],
        "description": "Avani Xerox and Stationery's Letterhead Printing service is your reliable partner for creating professional and impactful correspondence. Trust in our commitment to quality, customization, and customer satisfaction. Elevate your business or organization's image with our premium letterheads. Contact us today to order your personalized letterheads and make a statement with every letter you send.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "31",
        "name": "Customized Bracelet Men",
        "preview": "../img/product/BraceletM/4.jpg",
        "photos": [
          "../img/product/BraceletM/2.jpg",
          "../img/product/BraceletM/3.jpg",
          "../img/product/BraceletM/4.jpg",
          "../img/product/BraceletM/5.jpg",
          "../img/product/BraceletM/6.jpg",
          "../img/product/BraceletM/7.jpg",
          "../img/product/BraceletM/8.jpg",
          "../img/product/BraceletM/9.jpg",
          "../img/product/BraceletM/1.jpg"
        ],
        "description": "Avani Xerox and Stationery's Customize Men Bracelet service allows you to express your unique style and create a meaningful piece of jewelry. With customized designs, personalized engravings, premium quality materials, and versatile styles, our bracelets are designed to make a lasting impression. Discover the joy of wearing a bracelet that tells your story and captures your essence. Start designing your own customized bracelet today and let your creativity shine.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "32",
        "name": "Pamphlet Printing",
        "preview": "../img/product/pamphlet/1.jfif",
        "photos": [
          "../img/product/pamphlet/1.jfif",
          "../img/product/pamphlet/2.jfif",
          "../img/product/pamphlet/3.jfif",
          "../img/product/pamphlet/4.jfif"
        ],
        "description": "Avani Xerox and Stationery's Pamphlet Printing service is designed to help you effectively promote your business, event, or cause. Let our expert team assist you in creating visually appealing and informative pamphlets that make a lasting impact. Contact us today to discuss your pamphlet printing requirements and take your promotional efforts to the next level.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "33",
        "name": "Customized Pen",
        "preview": "../img/product/pen/4.jpg",
        "photos": [
          "../img/product/pen/2.jpg",
          "../img/product/pen/3.jpg",
          "../img/product/pen/4.jpg",
          "../img/product/pen/5.jpg",
          "../img/product/pen/6.jpg",
          "../img/product/pen/7.jpg",
          "../img/product/pen/8.jpg",
          "../img/product/pen/1.jpg"
        ],
        "description": "Avani Xerox and Stationery's Customize Pen service offers you the opportunity to create pens that are unique, stylish, and personalized. With customized designs, personalized engravings, smooth writing experience, colorful options, and quick turnaround time, our pens are tailored to meet your needs. Start designing your own customized pen today and make a statement wherever you go.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "34",
        "name": "vinyl Printing",
        "preview": "../img/product/vinyl/1.jfif",
        "photos": [
          "../img/product/vinyl/1.jfif",
          "../img/product/vinyl/2.jfif",
          "../img/product/vinyl/3.jfif",
          "../img/product/vinyl/4.jfif"
        ],
        "description": "Avani Xerox and Stationery's Vinyl Printing service combines high-quality prints, customized designs, and durable materials to help you effectively promote your business or event. With weather-resistant properties, lamination options, and versatile applications, our vinyl prints ensure your message stands out and lasts. Contact us today to discuss your vinyl printing needs and let us bring your vision to life with our top-notch printing solutions.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "35",
        "name": "Customized Engraved",
        "preview": "../img/product/Engraved/5.jpg",
        "photos": [
          "../img/product/Engraved/2.jpg",
          "../img/product/Engraved/3.jpg",
          "../img/product/Engraved/4.jpg",
          "../img/product/Engraved/5.jpg",
          "../img/product/Engraved/6.jpg",
          "../img/product/Engraved/7.jpg",
          "../img/product/Engraved/8.jpg",
          "../img/product/Engraved/9.jpg",
          "../img/product/Engraved/10.jpg",
          "../img/product/Engraved/11.jpg",
          "../img/product/Engraved/12.jpg",
          "../img/product/Engraved/13.jpg",
          "../img/product/Engraved/14.jpg",
          "../img/product/Engraved/15.jpg",
          "../img/product/Engraved/1.jpg"
        ],
        "description": "Avani Xerox and Stationery's Customize Engraving Frame service offers you the opportunity to create personalized frames that are both stylish and sentimental. With customized designs, engraved personalization, showcasing memories, thoughtful gifting options, superior quality, and quick turnaround time, our frames are designed to preserve and celebrate your most treasured moments. Start designing your own custom engraving frame today and turn your memories into lasting works of art.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "36",
        "name": "Wedding Card Printing",
        "preview": "../img/product/weddingCard/1.jpg",
        "photos": [
          "../img/product/weddingCard/1.jpg",
          "../img/product/weddingCard/2.jpg",
          "../img/product/weddingCard/3.jpg",
          "../img/product/weddingCard/4.jpg"
        ],
        "description": "Celebrate love and create magical moments with Avani Xerox and Stationery's Wedding Card printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Let your wedding invitations shine and set the stage for a truly unforgettable day. Order your personalized Wedding Cards today and begin your journey of happily ever after.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "37",
        "name": "Certificate Printing",
        "preview": "../img/product/certificate/2.jfif",
        "photos": [
          "../img/product/certificate/1.jpg",
          "../img/product/certificate/2.jfif",
          "../img/product/certificate/3.jfif",
          "../img/product/certificate/4.jfif"
        ],
        "description": "Elevate the ownership and value of shares within your society or organization with Avani Xerox and Stationery's Society Share Certificate printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Create certificates that showcase the significance of share ownership and inspire confidence. Order your Certificates today and solidify the value of your society's shares.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "38",
        "name": "Invitation Card Printing",
        "preview": "../img/product/invitation/2.jpg",
        "photos": [
          "../img/product/invitation/1.jpg",
          "../img/product/invitation/2.jpg",
          "../img/product/invitation/3.jpg",
          "../img/product/invitation/4.jpg",
          "../img/product/invitation/5.jpg",
          "../img/product/invitation/6.jpg"
        ],
        "description": "Create unforgettable moments with Avani Xerox and Stationery's Invitation Card printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Let your invitations reflect the joy and excitement of your special occasions. Order your personalized Invitation Cards today and invite your guests with style and elegance.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "39",
        "name": "Calender Printing",
        "preview": "../img/product/callender/1.jpg",
        "photos": [
          "../img/product/callender/1.jpg",
          "../img/product/callender/2.jpg",
          "../img/product/callender/3.jpg",
          "../img/product/callender/4.jpg"
        ],
        "description": "Stay organized and showcase your style with Avani Xerox and Stationery's Calendar Printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Let your calendars be both functional and visually appealing. Order your personalized calendars today and start the year off right.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "PRINT"
      },
      {
        "id": "40",
        "name": "Customized Clock",
        "preview": "../img/product/Clock/1.jpg",
        "photos": [
          "../img/product/Clock/1.jpg",
          "../img/product/Clock/2.jpg",
          "../img/product/Clock/3.jpg",
          "../img/product/Clock/4.jpg"
        ],
        "description": "Introducing our exquisite collection of customized clocks from Avani Xerox and Stationery! Elevate your space and add a personal touch with our beautifully crafted timepieces. Each clock is designed with attention to detail and can be customized to reflect your unique style and taste. Whether it's a special gift for a loved one or a statement piece for your home or office, our customized clocks are sure to make a lasting impression. Trust in our commitment to quality, precision, and customer satisfaction. Order your personalized clock from Avani Xerox and Stationery today and transform your space with timeless elegance.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "41",
        "name": "Customized Passport Cover",
        "preview": "../img/product/passport/1.jpg",
        "photos": [
          "../img/product/passport/1.jpg",
          "../img/product/passport/2.jpg",
          "../img/product/passport/3.jpg",
          "../img/product/passport/4.jpg",
          "../img/product/passport/5.jpg",
          "../img/product/passport/6.jpg"
        ],
        "description": "Introducing our stylish and personalized passport covers from Avani Xerox and Stationery! Protect your travel essentials in style with our high-quality, customized passport covers. Each cover is meticulously crafted and can be personalized with your name, initials, or a unique design of your choice. Not only will our passport covers keep your documents safe and secure, but they will also add a touch of sophistication to your travel accessories. Trust in our commitment to quality, durability, and customer satisfaction. Order your customized passport cover from Avani Xerox and Stationery today and embark on your journeys with confidence and style.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "42",
        "name": "Customized Pen Stand",
        "preview": "../img/product/penStand/1.jpg",
        "photos": [
          "../img/product/penStand/1.jpg",
          "../img/product/penStand/2.jpg",
          "../img/product/penStand/3.jpg",
          "../img/product/penStand/4.jpg"
        ],
        "description": "Introducing our personalized pen stands from Avani Xerox and Stationery! Keep your desk organized and showcase your style with our custom-designed pen stands. Each stand is crafted with precision and can be customized with your name, logo, or a special message. Our pen stands are not only functional but also add a touch of elegance to your workspace. Whether it's for your home office or a professional setting, our personalized pen stands make a statement. Trust in our commitment to quality, craftsmanship, and customer satisfaction. Order your customized pen stand from Avani Xerox and Stationery today and elevate your desk with personalized sophistication.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "43",
        "name": "Visiting Card Holder",
        "preview": "../img/product/VisitingCardHolder/1.jpg",
        "photos": [
          "../img/product/VisitingCardHolder/1.jpg",
          "../img/product/VisitingCardHolder/2.jpg",
          "../img/product/VisitingCardHolder/3.jpg",
          "../img/product/VisitingCardHolder/4.jpg",
          "../img/product/VisitingCardHolder/5.jpg",
          "../img/product/VisitingCardHolder/6.jpg"
        ],
        "description": "Introducing our customized visiting card holders from Avani Xerox and Stationery! Stay organized and make a professional impression with our personalized card holders. Each holder is carefully designed and can be customized with your name, initials, or a unique design. Our visiting card holders are made with premium materials to ensure durability and style. Whether you're attending meetings, conferences, or networking events, our customized card holders are a must-have accessory. Trust in our commitment to quality, functionality, and customer satisfaction. Order your personalized visiting card holder from Avani Xerox and Stationery today and make a lasting impression wherever you go.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "44",
        "name": "Customized Mobile Stand",
        "preview": "../img/product/standmobile/1.jpg",
        "photos": [
          "../img/product/standmobile/1.jpg",
          "../img/product/standmobile/2.jpg",
          "../img/product/standmobile/3.jpg"
        ],
        "description": "Introducing our customized mobile stands from Avani Xerox and Stationery! Keep your device secure and hands-free with our personalized mobile stands. Each stand is designed with versatility and style in mind, allowing you to adjust the viewing angle and showcase your unique design or logo. Our mobile stands are made with high-quality materials to ensure stability and durability. Whether you're watching videos, attending virtual meetings, or following recipes in the kitchen, our customized mobile stands provide convenience and functionality. Trust in our commitment to quality, innovation, and customer satisfaction. Order your personalized mobile stand from Avani Xerox and Stationery today and elevate your mobile experience.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "45",
        "name": "Customized Wine Glass",
        "preview": "../img/product/wineGlass/3.jpg",
        "photos": [
          "../img/product/wineGlass/1.jpg",
          "../img/product/wineGlass/2.jpg",
          "../img/product/wineGlass/3.jpg"
        ],
        "description": "Introducing our exquisite collection of customized wine glasses from Avani Xerox and Stationery! Elevate your drinking experience and add a personal touch with our beautifully designed glassware. Each wine glass is carefully crafted and can be customized with your chosen design, initials, or special message. Made with premium quality materials, our customized wine glasses ensure durability and a luxurious feel. Whether it's a special occasion, a gift for a wine enthusiast, or a unique addition to your home bar, our customized wine glasses are sure to impress. Trust in our commitment to quality, elegance, and customer satisfaction. Order your personalized wine glass from Avani Xerox and Stationery today and savor every sip in style.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "46",
        "name": "Customized Diary",
        "preview": "../img/product/Dairy/1.jpg",
        "photos": [
          "../img/product/Dairy/1.jpg",
          "../img/product/Dairy/2.jpg",
          "../img/product/Dairy/3.jpg",
          "../img/product/Dairy/4.jpg",
          "../img/product/Dairy/5.jpg",
          "../img/product/Dairy/6.jpg"
        ],
        "description": "Introducing our exquisite collection of customized diaries from Avani Xerox and Stationery! Experience the joy of journaling and staying organized with our beautifully designed diaries. Each diary is crafted with meticulous attention to detail and can be personalized with your name, initials, or a special message. With high-quality paper and durable binding, our customized diaries provide a luxurious writing experience that lasts. Whether it's for personal use, a thoughtful gift, or professional note-taking, our customized diaries are the perfect companion. Trust in our commitment to quality, functionality, and customer satisfaction. Order your personalized diary from Avani Xerox and Stationery today and embark on a journey of self-expression and organization.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "47",
        "name": "Customized Bag Tag",
        "preview": "../img/product/bagTagger/1.jpg",
        "photos": [
          "../img/product/bagTagger/1.jpg",
          "../img/product/bagTagger/2.jpg",
          "../img/product/bagTagger/3.jpg",
          "../img/product/bagTagger/4.jpg",
          "../img/product/bagTagger/5.jpg",
          "../img/product/bagTagger/6.jpg"
        ],
        "description": "Introducing our stylish collection of customized bag tags from Avani Xerox and Stationery! Personalize your bags and luggage with our durable and eye-catching bag tags. Each tag is designed with precision and can be customized with your name, initials, or a unique design. Made from high-quality materials, our customized bag tags are built to withstand the rigors of travel and everyday use. Easily identify your bags and add a touch of personalization to your belongings. Whether it's for personal use or a thoughtful gift for a frequent traveler, our customized bag tags are the perfect accessory. Trust in our commitment to quality, style, and customer satisfaction. Order your personalized bag tag from Avani Xerox and Stationery today and make a statement wherever you go.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      },
      {
        "id": "48",
        "name": "Customized Bedsheet",
        "preview": "../img/product/bedSheet/1.jfif",
        "photos": [
          "../img/product/bedSheet/1.jfif",
          "../img/product/bedSheet/2.jpg",
          "../img/product/bedSheet/3.jfif",
          "../img/product/bedSheet/4.jfif"
        ],
        "description": "Introducing our luxurious collection of customized bedsheets from Avani Xerox and Stationery! Transform your bedroom into a haven of comfort and style with our personalized bedsheets. Each bedsheet is made from premium quality fabric and can be customized with your preferred design, pattern, or even a memorable photo. Experience ultimate comfort and create a unique ambiance in your bedroom with our customized bedsheets. Whether it's for your own home or a thoughtful gift for someone special, our personalized bedsheets are sure to enhance any bedroom decor. Trust in our commitment to quality, elegance, and customer satisfaction. Order your personalized bedsheet from Avani Xerox and Stationery today and indulge in a truly customized sleeping experience.",
        "brand": "Discount offer on Bulk Quantity",
        "category": "GIFT"
      }
    ];

  const { id } = useParams();
  const productId = parseInt(id, 10);

  const product = ShopProduct.find((p) => parseInt(p.id, 10) === productId);

 
  const [selectedPhoto, setSelectedPhoto] = useState(product.preview);
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };
  return (
    <div>
      <div className="row" id="containerProduct">
        <div id="containerD">
          <div className="container" id="imageSection">
            <img id="imgDetails" src={selectedPhoto} />
          </div>
          <div id="productDetails">
            <h2>{product.name}</h2>
            <div id="productPreview">
              {product.photos.map((photo, index) => (
                <img src={photo} alt={`Additional Photo ${index + 1}`} key={index} id="previewImg" onClick={() => handlePhotoClick(photo)} />
              ))}
            </div>
            <h4>Discount offer on Bulk Quantity</h4>
            <div id="details">
              <h3>Description</h3>
              <p>
                {product.description} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
