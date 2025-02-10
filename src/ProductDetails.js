import React, { useState } from 'react';
import { useEffect } from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import mugPrintingPreview from './img/product/mugPrinting/1.jpg'; // Replace with the actual path to the preview image
import mugPrinting2 from './img/product/mugPrinting/2.jpg';
import mugPrinting3 from './img/product/mugPrinting/3.jpg';
import mugPrinting4 from './img/product/mugPrinting/4.jpg';
import mugPrinting5 from './img/product/mugPrinting/5.jpg';
import mugPrinting6 from './img/product/mugPrinting/6.jpg';
import mugPrinting7 from './img/product/mugPrinting/7.jpg';

import customizedWalletPreview from './img/product/menWallet/1.jpg'; // Replace with the actual path to the preview image
import customizedWallet2 from './img/product/menWallet/2.jpg';
import customizedWallet3 from './img/product/menWallet/3.jpg';
import customizedWallet4 from './img/product/menWallet/4.jpg';
import customizedWallet5 from './img/product/menWallet/5.jpg';
import customizedWallet6 from './img/product/menWallet/6.jpg';

import officeStationeryPreview from './img/product/office/2.jfif'; // Replace with the actual path to the preview image
import officeStationery1 from './img/product/office/1.jfif';
import officeStationery2 from './img/product/office/2.jfif';
import officeStationery3 from './img/product/office/3.jfif';
import officeStationery4 from './img/product/office/4.jfif';

import comboOfferPreview from './img/product/combo2/1.jpg'; // Replace with the actual path to the preview image
import comboOffer1 from './img/product/combo2/1.jpg';
import comboOffer2 from './img/product/combo2/2.jpg';
import comboOffer3 from './img/product/combo2/3.jpg';
import comboOffer4 from './img/product/combo2/4.jpg';
import comboOffer5 from './img/product/combo2/5.jpg';
import comboOffer6 from './img/product/combo2/6.jpg';
import photoCopyPreview from './img/product/photocopy/1.jfif'; // Replace with the actual path to the preview image
import photoCopy1 from './img/product/photocopy/1.jfif';
import photoCopy2 from './img/product/photocopy/2.jfif';
import photoCopy3 from './img/product/photocopy/3.jfif';

import customizedPillowPreview from './img/product/pillow/1.jpg'; // Replace with the actual path to the preview image
import customizedPillow1 from './img/product/pillow/1.jpg';
import customizedPillow2 from './img/product/pillow/2.jpg';
import customizedPillow3 from './img/product/pillow/3.jpg';
import customizedPillow4 from './img/product/pillow/4.jpg';

import flexPrintingPreview from './img/product/flex/1.jpg'; // Replace with the actual path to the preview image
import flexPrinting1 from './img/product/flex/1.jpg';
import flexPrinting2 from './img/product/flex/2.jpg';
import flexPrinting3 from './img/product/flex/3.jfif';
import flexPrinting4 from './img/product/flex/4.jfif';
import flexPrinting5 from './img/product/flex/5.jpg';

import schoolStationeryPreview from './img/product/school/2.jfif'; // Replace with the actual path to the preview image
import schoolStationery1 from './img/product/school/1.jfif';
import schoolStationery2 from './img/product/school/2.jfif';
import schoolStationery3 from './img/product/school/3.jfif';
import schoolStationery4 from './img/product/school/4.jfif';

import combo3OfferPreview from './img/product/combo3/1.jpg'; // Replace with the actual path to the preview image
import combo3Offer1 from './img/product/combo3/1.jpg';
import combo3Offer2 from './img/product/combo3/2.jpg';
import combo3Offer3 from './img/product/combo3/3.jpg';
import combo3Offer4 from './img/product/combo3/4.jpg';
import laminationPreview from './img/product/lamination/1.jfif'; // Replace with the actual path to the preview image
import lamination1 from './img/product/lamination/1.jfif';
import lamination2 from './img/product/lamination/2.jfif';
import lamination3 from './img/product/lamination/3.jfif';

import customizedTshirtPreview from './img/product/tshirt/4.jpg'; // Replace with the actual path to the preview image
import customizedTshirt1 from './img/product/tshirt/1.jpg';
import customizedTshirt2 from './img/product/tshirt/2.jpg';
import customizedTshirt3 from './img/product/tshirt/3.jpg';
import customizedTshirt4 from './img/product/tshirt/4.jpg';

import blackBookPreview from './img/product/blackBook/1.jfif'; // Replace with the actual path to the preview image
import blackBook1 from './img/product/blackBook/1.jfif';
import blackBook2 from './img/product/blackBook/2.jfif';
import blackBook3 from './img/product/blackBook/3.jfif';
import blackBook4 from './img/product/blackBook/4.jfif';

import autocadPlottingPreview from './img/product/autocad/2.jfif'; // Replace with the actual path to the preview image
import autocadPlotting1 from './img/product/autocad/1.jfif';
import autocadPlotting2 from './img/product/autocad/2.jfif';
import autocadPlotting3 from './img/product/autocad/3.jfif';
import autocadPlotting4 from './img/product/autocad/4.jfif';

import customizedKeychainPreview from './img/product/Keychain/4.jpg'; // Replace with the actual path to the preview image
import customizedKeychain1 from './img/product/Keychain/1.jpg';
import customizedKeychain2 from './img/product/Keychain/2.jpg';
import customizedKeychain3 from './img/product/Keychain/3.jpg';
import customizedKeychain4 from './img/product/Keychain/4.jpg';

import visitingCardPreview from './img/product/visitingCard/2.jpg'; // Replace with the actual path to the preview image
import visitingCard1 from './img/product/visitingCard/1.jpg';
import visitingCard2 from './img/product/visitingCard/2.jpg';
import visitingCard3 from './img/product/visitingCard/3.jpg';

import combo4Preview from './img/product/combo4/1.jpg'; // Replace with the actual path to the preview image
import combo41 from './img/product/combo4/1.jpg';
import combo42 from './img/product/combo4/2.jpg';
import combo43 from './img/product/combo4/3.jpg';
import combo44 from './img/product/combo4/4.jpg';

import spiralBindingPreview from './img/product/spiral/1.jpg'; // Replace with the actual path to the preview image
import spiralBinding1 from './img/product/spiral/1.jpg';
import spiralBinding2 from './img/product/spiral/2.jfif';
import spiralBinding3 from './img/product/spiral/3.jfif';
import spiralBinding4 from './img/product/spiral/4.jfif';

import customizedCoverPreview from './img/product/mobileCover/1.jpg'; // Replace with the actual path to the preview image
import customizedCover1 from './img/product/mobileCover/1.jpg';
import customizedCover2 from './img/product/mobileCover/2.jpg';
import customizedCover3 from './img/product/mobileCover/3.jfif';

import smartCardPreview from './img/product/IdCard/2.jfif'; // Replace with the actual path to the preview image
import smartCard1 from './img/product/IdCard/1.jfif';
import smartCard2 from './img/product/IdCard/2.jfif';
import smartCard3 from './img/product/IdCard/3.jfif';
import smartCard4 from './img/product/IdCard/4.jpg';
import smartCard5 from './img/product/IdCard/5.jpg';

import dtpServicePreview from './img/product/dtp/4.jfif'; // Replace with the actual path to the preview image
import dtpService1 from './img/product/dtp/1.jfif';
import dtpService2 from './img/product/dtp/2.jfif';
import dtpService3 from './img/product/dtp/3.jfif';
import dtpService4 from './img/product/dtp/4.jfif';
import bottlePreview from './img/product/Bottle/01.jpg'; // Replace with the actual path to the preview image
import bottle1 from './img/product/Bottle/1.jpg';
import bottle2 from './img/product/Bottle/2.jpg';
import bottle3 from './img/product/Bottle/3.jpg';
import bottle4 from './img/product/Bottle/4.jpg';
import bottle5 from './img/product/Bottle/5.jpg';
import bottle6 from './img/product/Bottle/6.jpg';
import bottle7 from './img/product/Bottle/7.jpg';

import lacePrintingPreview from './img/product/Lace/2.jfif'; // Replace with the actual path to the preview image
import lacePrinting1 from './img/product/Lace/1.jpg';
import lacePrinting2 from './img/product/Lace/2.jfif';
import lacePrinting3 from './img/product/Lace/3.jfif';
import lacePrinting4 from './img/product/Lace/4.jfif';

import customizedRingPreview from './img/product/ring/1.jpg'; // Replace with the actual path to the preview image
import customizedRing1 from './img/product/ring/1.jpg';
import customizedRing2 from './img/product/ring/2.jpg';
import customizedRing3 from './img/product/ring/3.jpg';
import customizedRing4 from './img/product/ring/4.jpg';
import customizedRing5 from './img/product/ring/5.jpg';

import rubberStampPreview from './img/product/stamp/1.jpg'; // Replace with the actual path to the preview image
import rubberStamp1 from './img/product/stamp/1.jpg';
import rubberStamp2 from './img/product/stamp/2.jfif';
import rubberStamp3 from './img/product/stamp/3.jfif';
import rubberStamp4 from './img/product/stamp/4.jfif';
import rubberStamp5 from './img/product/stamp/5.jfif';

import customizedFramePreview from './img/product/photoframe/1.jpg'; // Replace with the actual path to the preview image
import customizedFrame2 from './img/product/photoframe/2.jpg';
import customizedFrame5 from './img/product/photoframe/5.jpg';
import customizedFrame6 from './img/product/photoframe/6.jpg';
import customizedFrame7 from './img/product/photoframe/7.jpg';
import customizedFrame8 from './img/product/photoframe/8.jpg';
import customizedFrame9 from './img/product/photoframe/9.jpg';

import offsetPrintingPreview from './img/product/offset/2.jpg'; // Replace with the actual path to the preview image
import offsetPrinting1 from './img/product/offset/1.jpg';
import offsetPrinting2 from './img/product/offset/2.jpg';
import offsetPrinting3 from './img/product/offset/3.jpg';
import offsetPrinting4 from './img/product/offset/4.jpg';

import penStandPreview from './img/product/penStand/1.jpg'; // Replace with the actual path to the preview image
import penStand1 from './img/product/penStand/1.jpg';
import penStand2 from './img/product/penStand/2.jpg';
import penStand3 from './img/product/penStand/3.jpg';
import penStand4 from './img/product/penStand/4.jpg';

import visitingCardHolderPreview from './img/product/VisitingCardHolder/1.jpg'; // Replace with the actual path to the preview image
import visitingCardHolder1 from './img/product/VisitingCardHolder/1.jpg';
import visitingCardHolder2 from './img/product/VisitingCardHolder/2.jpg';
import visitingCardHolder3 from './img/product/VisitingCardHolder/3.jpg';
import visitingCardHolder4 from './img/product/VisitingCardHolder/4.jpg';
import visitingCardHolder5 from './img/product/VisitingCardHolder/5.jpg';
import visitingCardHolder6 from './img/product/VisitingCardHolder/6.jpg';

import mobileStandPreview from './img/product/standmobile/1.jpg'; // Replace with the actual path to the preview image
import mobileStand1 from './img/product/standmobile/1.jpg';
import mobileStand2 from './img/product/standmobile/2.jpg';
import mobileStand3 from './img/product/standmobile/3.jpg';

import wineGlassPreview from './img/product/wineGlass/3.jpg'; // Replace with the actual path to the preview image
import wineGlass1 from './img/product/wineGlass/1.jpg';
import wineGlass2 from './img/product/wineGlass/2.jpg';
import wineGlass3 from './img/product/wineGlass/3.jpg';

import diaryPreview from './img/product/Dairy/1.jpg'; // Replace with the actual path to the preview image
import diary1 from './img/product/Dairy/1.jpg';
import diary2 from './img/product/Dairy/2.jpg';
import diary3 from './img/product/Dairy/3.jpg';
import diary4 from './img/product/Dairy/4.jpg';
import diary5 from './img/product/Dairy/5.jpg';
import diary6 from './img/product/Dairy/6.jpg';

import bagTagPreview from './img/product/bagTagger/1.jpg'; // Replace with the actual path to the preview image
import bagTag1 from './img/product/bagTagger/1.jpg';
import bagTag2 from './img/product/bagTagger/2.jpg';
import bagTag3 from './img/product/bagTagger/3.jpg';
import bagTag4 from './img/product/bagTagger/4.jpg';
import bagTag5 from './img/product/bagTagger/5.jpg';
import bagTag6 from './img/product/bagTagger/6.jpg';

import bedsheetPreview from './img/product/bedSheet/1.jfif'; // Replace with the actual path to the preview image
import bedsheet1 from './img/product/bedSheet/1.jfif';
import bedsheet2 from './img/product/bedSheet/2.jpg';
import bedsheet3 from './img/product/bedSheet/3.jfif';
import bedsheet4 from './img/product/bedSheet/4.jfif';

import namePlatePreview from './img/product/namePlate/2.jpg'; // Replace with the actual path to the preview image
import namePlate1 from './img/product/namePlate/1.jpg';
import namePlate2 from './img/product/namePlate/2.jpg';
import namePlate3 from './img/product/namePlate/3.jpg';
import namePlate4 from './img/product/namePlate/4.jpg';

import billBookPreview from './img/product/billBook/1.jpg'; // Replace with the actual path to the preview image
import billBook1 from './img/product/billBook/1.jpg';
import billBook2 from './img/product/billBook/2.jfif';
import billBook3 from './img/product/billBook/3.png';
import billBook4 from './img/product/billBook/4.jfif';

import braceletWomenPreview from './img/product/BraceletW/4.jpg'; // Replace with the actual path to the preview image
import braceletWomen2 from './img/product/BraceletW/2.jpg';
import braceletWomen3 from './img/product/BraceletW/3.jpg';
import braceletWomen4 from './img/product/BraceletW/4.jpg';
import braceletWomen5 from './img/product/BraceletW/5.jpg';
import braceletWomen6 from './img/product/BraceletW/6.jpg';
import braceletWomen1 from './img/product/BraceletW/1.jpg';

import letterHeadPreview from './img/product/letterHead/1.jpg'; // Replace with the actual path to the preview image
import letterHead1 from './img/product/letterHead/1.jpg';
import letterHead2 from './img/product/letterHead/2.jpg';
import letterHead3 from './img/product/letterHead/3.jpg';
import letterHead4 from './img/product/letterHead/4.jpg';

import braceletMenPreview from './img/product/BraceletM/4.jpg'; // Replace with the actual path to the preview image
import braceletMen2 from './img/product/BraceletM/2.jpg';
import braceletMen3 from './img/product/BraceletM/3.jpg';
import braceletMen4 from './img/product/BraceletM/4.jpg';
import braceletMen5 from './img/product/BraceletM/5.jpg';
import braceletMen6 from './img/product/BraceletM/6.jpg';
import braceletMen7 from './img/product/BraceletM/7.jpg';
import braceletMen8 from './img/product/BraceletM/8.jpg';
import braceletMen9 from './img/product/BraceletM/9.jpg';
import braceletMen1 from './img/product/BraceletM/1.jpg';

import pamphletPreview from './img/product/pamphlet/1.jfif'; // Replace with the actual path to the preview image
import pamphlet1 from './img/product/pamphlet/1.jfif';
import pamphlet2 from './img/product/pamphlet/2.jfif';
import pamphlet3 from './img/product/pamphlet/3.jfif';
import pamphlet4 from './img/product/pamphlet/4.jfif';

import penPreview from './img/product/pen/4.jpg'; // Replace with the actual path to the preview image
import pen2 from './img/product/pen/2.jpg';
import pen3 from './img/product/pen/3.jpg';
import pen4 from './img/product/pen/4.jpg';
import pen5 from './img/product/pen/5.jpg';
import pen6 from './img/product/pen/6.jpg';
import pen7 from './img/product/pen/7.jpg';
import pen8 from './img/product/pen/8.jpg';
import pen1 from './img/product/pen/1.jpg';

import vinylPreview from './img/product/vinyl/1.jfif'; // Replace with the actual path to the preview image
import vinyl1 from './img/product/vinyl/1.jfif';
import vinyl2 from './img/product/vinyl/2.jfif';
import vinyl3 from './img/product/vinyl/3.jfif';
import vinyl4 from './img/product/vinyl/4.jfif';

import engravedPreview from './img/product/Engraved/5.jpg'; // Replace with the actual path to the preview image
import engraved2 from './img/product/Engraved/2.jpg';
import engraved3 from './img/product/Engraved/3.jpg';
import engraved4 from './img/product/Engraved/4.jpg';
import engraved5 from './img/product/Engraved/5.jpg';
import engraved6 from './img/product/Engraved/6.jpg';
import engraved7 from './img/product/Engraved/7.jpg';
import engraved8 from './img/product/Engraved/8.jpg';
import engraved9 from './img/product/Engraved/9.jpg';
import engraved10 from './img/product/Engraved/10.jpg';
import engraved11 from './img/product/Engraved/11.jpg';
import engraved12 from './img/product/Engraved/12.jpg';
import engraved13 from './img/product/Engraved/13.jpg';
import engraved14 from './img/product/Engraved/14.jpg';
import engraved15 from './img/product/Engraved/15.jpg';
import engraved1 from './img/product/Engraved/1.jpg';

import weddingCardPreview from './img/product/weddingCard/1.jpg'; // Replace with the actual path to the preview image
import weddingCard1 from './img/product/weddingCard/1.jpg';
import weddingCard2 from './img/product/weddingCard/2.jpg';
import weddingCard3 from './img/product/weddingCard/3.jpg';
import weddingCard4 from './img/product/weddingCard/4.jpg';

import certificatePreview from './img/product/certificate/2.jfif'; // Replace with the actual path to the preview image
import certificate1 from './img/product/certificate/1.jpg';
import certificate2 from './img/product/certificate/2.jfif';
import certificate3 from './img/product/certificate/3.jfif';
import certificate4 from './img/product/certificate/4.jfif';

import invitationPreview from './img/product/invitation/2.jpg'; // Replace with the actual path to the preview image
import invitation1 from './img/product/invitation/1.jpg';
import invitation2 from './img/product/invitation/2.jpg';
import invitation3 from './img/product/invitation/3.jpg';
import invitation4 from './img/product/invitation/4.jpg';
import invitation5 from './img/product/invitation/5.jpg';
import invitation6 from './img/product/invitation/6.jpg';

import calendarPreview from './img/product/callender/1.jpg'; // Replace with the actual path to the preview image
import calendar1 from './img/product/callender/1.jpg';
import calendar2 from './img/product/callender/2.jpg';
import calendar3 from './img/product/callender/3.jpg';
import calendar4 from './img/product/callender/4.jpg';

import clockPreview from './img/product/Clock/1.jpg'; // Replace with the actual path to the preview image
import clock1 from './img/product/Clock/1.jpg';
import clock2 from './img/product/Clock/2.jpg';
import clock3 from './img/product/Clock/3.jpg';
import clock4 from './img/product/Clock/4.jpg';

import passportCoverPreview from './img/product/passport/1.jpg'; // Replace with the actual path to the preview image
import passportCover1 from './img/product/passport/1.jpg';
import passportCover2 from './img/product/passport/2.jpg';
import passportCover3 from './img/product/passport/3.jpg';
import passportCover4 from './img/product/passport/4.jpg';
import passportCover5 from './img/product/passport/5.jpg';
import passportCover6 from './img/product/passport/6.jpg';
function ProductDetails() {
    const ShopProduct = [
        {
            id: "1",
            name: "Mug Printing",
            preview: mugPrintingPreview,
            photos: [
                mugPrinting2,
                mugPrinting3,
                mugPrinting4,
                mugPrinting5,
                mugPrinting6,
                mugPrinting7
            ],
            description: "At AJXS, we turn ordinary mugs into extraordinary works of art. Whether you prefer classic white, sleek black, or the mesmerizing magic mug our print service brings your imagination to life. Discover the joy of sipping from a mug that's as special as you are. Order your custom-printed white, black, or magic mug today and let your imagination take flight!",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "2",
            name: "Customized Wallet",
            preview: customizedWalletPreview,
            photos: [
                customizedWallet2,
                customizedWallet3,
                customizedWallet4,
                customizedWallet5,
                customizedWallet6,
                customizedWalletPreview
            ],
            description: "Avani Xerox and Stationery's Customize Men Wallet service offers you the opportunity to design a wallet that is both functional and stylish, while adding a personal touch. With customized designs, personalized engravings, smart organization features, superior quality, and quick turnaround time, our wallets are designed to enhance your everyday life. Start designing your own custom men's wallet today and carry your essentials with personalized flair.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "3",
            name: "Office Stationery",
            preview: officeStationeryPreview,
            photos: [
                officeStationery1,
                officeStationery2,
                officeStationery3,
                officeStationery4
            ],
            description: "Welcome to Avani Xerox and Stationery, your trusted destination for all your office stationery needs. We offer a comprehensive range of high-quality products that will keep your office running smoothly and efficiently. At Avani Xerox and Stationery, we are committed to providing top-quality office stationery that enhances productivity and organization in your workplace. Visit our store today to explore our wide range of products and find the perfect supplies to meet your office needs.",
            brand: "Discount offer on Bulk Quantity",
            category: "STATIONERY"
        },
        {
            id: "4",
            name: "COMBO OFFER(2 in 1)",
            preview: comboOfferPreview,
            photos: [
                comboOffer1,
                comboOffer2,
                comboOffer3,
                comboOffer4,
                comboOffer5,
                comboOffer6
            ],
            description: "Avani Xerox and Stationery is excited to offer an exclusive combo deal to enhance your shopping experience. Our combo offer brings together a perfect combination of high-quality stationery and printing services at a discounted price. Whether you're looking for office supplies, personalized stationery, printing solutions, or a mix of everything, our combo offer has got you covered. Explore a wide range of options and create your own customized combo to meet your unique needs. Shop now and enjoy the convenience and affordability of our combo offer at Avani Xerox and Stationery.",
            brand: "Discount offer on Bulk Quantity",
            category: "COMBO"
        },
        {
            id: "5",
            name: "PhotoCopy",
            preview: photoCopyPreview,
            photos: [
                photoCopy1,
                photoCopy2,
                photoCopy3
            ],
            description: "Avani Xerox and Stationery's Photocopy Service is your go-to destination for all your copying needs. Experience the convenience of affordable, high-quality reproductions in both black and white and color. No matter the document size or the volume of copies required, we are here to serve you efficiently. Trust in our commitment to excellence and order your photocopies today.",
            brand: "Discount offer on Bulk Quantity",
            category: "XEROX"
        },
        {
            id: "6",
            name: "Customized Pillow",
            preview: customizedPillowPreview,
            photos: [
                customizedPillow1,
                customizedPillow2,
                customizedPillow3,
                customizedPillow4
            ],
            description: "Welcome to Avani Xerox and Stationery, your go-to destination for personalized pillow printing services that add a touch of magic and comfort to your living space. Get ready to turn your dreams into reality with our pillow printing service available in heart and square shapes. Experience the joy of cuddling up to a pillow that's as unique as you are. Order your personalized heart-shaped or square pillows from Avani Xerox and Stationery today, and transform your living space into a haven of creativity and comfort.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "7",
            name: "Flex Printing",
            preview: flexPrintingPreview,
            photos: [
                flexPrinting1,
                flexPrinting2,
                flexPrinting3,
                flexPrinting4,
                flexPrinting5
            ],
            description: "Avani Xerox and Stationery's Flex Printing service is your go-to solution for impactful outdoor advertising. With our commitment to customized designs, vibrant colors, and weather-resistant prints, we ensure your message stands out from the crowd. Contact us today to discuss your flex printing requirements and let us help you make a lasting impression with our top-quality prints.",
            brand: "Discount offer on Bulk Quantity",
            category: "PRINT"
        },
        {
            id: "8",
            name: "School Stationery",
            preview: schoolStationeryPreview,
            photos: [
                schoolStationery1,
                schoolStationery2,
                schoolStationery3,
                schoolStationery4
            ],
            description: "Welcome to Avani Xerox and Stationery, your one-stop shop for all your school stationery needs. We offer a wide range of high-quality products that will equip students with the tools they need for success in the classroom. At Avani Xerox and Stationery, we strive to provide top-quality school stationery that enhances learning and productivity. Visit our store today and discover the wide range of products we offer to meet your school stationery needs. Our friendly staff is here to assist you in finding the perfect supplies for your educational journey.",
            brand: "Discount offer on Bulk Quantity",
            category: "STATIONERY"
        },
        {
            id: "9",
            name: "COMBO OFFER(3 in 1)",
            preview: combo3OfferPreview,
            photos: [
                combo3Offer1,
                combo3Offer2,
                combo3Offer3,
                combo3Offer4
            ],
            description: "Avani Xerox and Stationery is excited to offer an exclusive combo deal to enhance your shopping experience. Our combo offer brings together a perfect combination of high-quality stationery and printing services at a discounted price. Whether you're looking for office supplies, personalized stationery, printingsolutions, or a mix of everything, our combo offer has got you covered. Explore a wide range of options and create your own customized combo to meet your unique needs. Shop now and enjoy the convenience and affordability of our combo offer at Avani Xerox and Stationery.",
            brand: "Discount offer on Bulk Quantity",
            category: "COMBO"
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
            id: "11",
            name: "Customized T-Shirt",
            preview: customizedTshirtPreview,
            photos: [
                customizedTshirt1,
                customizedTshirt2,
                customizedTshirt3,
                customizedTshirt4
            ],
            description: "Welcome to Avani Xerox and Stationery, your trusted destination for customized t-shirt printing services. We are passionate about transforming ordinary t-shirts into wearable works of art that reflect your personality and style. Express yourself with personalized t-shirts from Avani Xerox and Stationery. Trust in our commitment to quality, attention to detail, and customer satisfaction. Design t-shirts that capture your unique style, celebrate special moments, or promote your brand. Order your customized t-shirts today and wear your creativity with pride.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "12",
            name: "Black Book",
            preview: blackBookPreview,
            photos: [
                blackBook1,
                blackBook2,
                blackBook3,
                blackBook4
            ],
            description: "Introducing Avani Xerox and Stationery's black book printing service, your go-to solution for college projects and presentations. Our black book printing service offers high-quality and professional printing for all your academic needs. Enhance your college projects with Avani Xerox and Stationery's black book printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Get your work professionally printed and make a lasting impression. Order your black books today and elevate your college projects to the next level.",
            brand: "Discount offer on Bulk Quantity",
            category: "PRINT"
        },
        {
            id: "13",
            name: "Autocad Plotting",
            preview: autocadPlottingPreview,
            photos: [
                autocadPlotting1,
                autocadPlotting2,
                autocadPlotting3,
                autocadPlotting4
            ],
            description: "Introducing Avani Xerox and Stationery's Autocad Plotting service, your trusted partner for precise and professional CAD document printing. Our state-of-the-art equipment and expertise ensure accurate reproductions of your AutoCAD drawings and designs. Avani Xerox and Stationery's Autocad Plotting service is your reliable solution for high-quality CAD document printing. Trust in our commitment to accuracy, confidentiality, and customer satisfaction. Elevate the impact of your AutoCAD designs with our precise and professional printing services. Contact us today to bring your CAD drawings to life.",
            brand: "Discount offer on Bulk Quantity",
            category: "XEROX"
        },
        {
            id: "14",
            name: "Customized KeyChain",
            preview: customizedKeychainPreview,
            photos: [
                customizedKeychain1,
                customizedKeychain2,
                customizedKeychain3,
                customizedKeychain4
            ],
            description: "Welcome to Avani Xerox and Stationery, your trusted destination for customized keychain printing services. We take pride in delivering high-quality, personalized keychains that add a touch of uniqueness to your everyday life. Unlock a world of personalization with our customized keychain printing service at Avani Xerox and Stationery. Trust in our commitment to quality, customer satisfaction, and attention to detail. Create a keychain that reflects your style and holds your dearest memories. Order your personalized keychains today and carry a piece of uniqueness with you wherever you go.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "15",
            name: "Visiting Card",
            preview: visitingCardPreview,
            photos: [
                visitingCard1,
                visitingCard2,
                visitingCard3
            ],
            description: "Introducing Avani Xerox and Stationery's Visiting Card printing service, where first impressions meet professional excellence. Our printing service offers high-quality and customizable visiting cards that leave a lasting impact on potential clients and partners. Leave a lasting impression with Avani Xerox and Stationery's Visiting Card printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Present yourself or your business in a professional and memorable way. Order your personalized Visiting Cards today and make a statement wherever you go.",
            brand: "Discount offer on Bulk Quantity",
            category: "PRINT"
        },
        {
            id: "16",
            name: "COMBO OFFER(4 in 1)",
            preview: combo4Preview,
            photos: [
                combo41,
                combo42,
                combo43,
                combo44
            ],
            description: "Avani Xerox and Stationery is excited to offer an exclusive combo deal to enhance your shopping experience. Our combo offer brings together a perfect combination of high-quality stationery and printing services at a discounted price. Whether you're looking for office supplies, personalized stationery, printing solutions, or a mix of everything, our combo offer has got you covered. Explore a wide range of options and create your own customized combo to meet your unique needs. Shop now and enjoy the convenience and affordability of our combo offer at Avani Xerox and Stationery.",
            brand: "Discount offer on Bulk Quantity",
            category: "COMBO"
        },
        {
            id: "17",
            name: "Spiral binding",
            preview: spiralBindingPreview,
            photos: [
                spiralBinding1,
                spiralBinding2,
                spiralBinding3,
                spiralBinding4
            ],
            description: "Introducing Avani Xerox and Stationery's Spiral Binding service, your solution for creating professional and organized documents. Our spiral binding service offers a secure and convenient way to bind your papers, reports, presentations, and more. Avani Xerox and Stationery's Spiral Binding service offers a professional and organized way to present your documents. Trust in our commitment to quality, efficiency, and customer satisfaction. Enhance the readability and durability of your papers with our secure and customizable spiral binding service. Contact us today to bind your documents with style and professionalism.",
            brand: "Discount offer on Bulk Quantity",
            category: "XEROX"
        },
        {
            id: "18",
            name: "Customized Cover",
            preview: customizedCoverPreview,
            photos: [
                customizedCover1,
                customizedCover2,
                customizedCover3
            ],
            description: "Welcome to Avani Xerox and Stationery, your trusted destination for personalized mobile cover printing services. Whether you prefer a soft or hard cover, we've got you covered with our high-quality printing and exceptional customer service. Protect your phone in style with a custom mobile cover from Avani Xerox and Stationery. Choose between soft and hard options, and let your creativity shine. Trust in our commitment to quality and customer satisfaction. Order your personalized mobile cover today and showcase your unique style wherever you go.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "19",
            name: "Smart(PVC) Card",
            preview: smartCardPreview,
            photos: [
                smartCard1,
                smartCard2,
                smartCard3,
                smartCard4,
                smartCard5
            ],
            description: "Introducing Avani Xerox and Stationery's Smart Card or PVC card printing service. Our printing service offers high-quality and durable cards that are perfect for a wide range of applications. Choose Avani Xerox and Stationery for your Smart Card or PVC card printing needs. Trust in our commitment to quality, attention to detail, and customer satisfaction. Get your cards professionally printed and showcase your brand or personal information with confidence. Order your customized Smart Cards or PVC cards today and make a lasting impression.",
            brand: "Discount offer on Bulk Quantity",
            category: "PRINT"
        },
        {
            id: "20",
            name: "DTP Service",
            preview: dtpServicePreview,
            photos: [
                dtpService1,
                dtpService2,
                dtpService3,
                dtpService4
            ],
            description: "Welcome to Avani Xerox and Stationery'sDTP (Desktop Publishing) service, your go-to solution for all your language-based design and typesetting needs. Our DTP service combines creativity, precision, and multilingual capabilities to deliver professional and visually appealing designs in English, Hindi, Marathi, Gujarati, and more. Contact us today to discuss your DTP requirements and let our team bring your ideas to life with captivating designs.",
            brand: "Discount offer on Bulk Quantity",
            category: "XEROX"
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
            id: "22",
            name: "Lace Printing",
            preview: lacePrintingPreview,
            photos: [
                lacePrinting1,
                lacePrinting2,
                lacePrinting3,
                lacePrinting4
            ],
            description: "Introducing Avani Xerox and Stationery's lace printing service, where creativity meets elegance. Our lace printing service allows you to add a touch of sophistication and intricate designs to your special occasions and craft projects. Embrace elegance and creativity with Avani Xerox and Stationery's lace printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Add a touch of sophistication to your special occasions and crafts. Order your lace-printed items today and let your creativity bloom.",
            brand: "Discount offer on Bulk Quantity",
            category: "PRINT"
        },
        {
            id: "23",
            name: "Customized Ring",
            preview: customizedRingPreview,
            photos: [
                customizedRing1,
                customizedRing2,
                customizedRing3,
                customizedRing4,
                customizedRing5
            ],
            description: "Avani Xerox and Stationery's Customize Ring service allows you to create a ring that is as unique and exceptional as you are. With customized designs, personalized engravings, superior quality materials, and versatile styles, our rings are crafted to make a lasting impression. Start designing your own custom ring today and let us help you create a timeless piece of jewelry that tells your story.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "24",
            name: "Rubber Stamp",
            preview: rubberStampPreview,
            photos: [
                rubberStamp1,
                rubberStamp2,
                rubberStamp3,
                rubberStamp4,
                rubberStamp5
            ],
            description: "Introducing Avani Xerox and Stationery's customized rubber stamp service. Our rubber stamps are the perfect tool to add a personal touch to your documents, stationery, and crafts. Enhance your personal or professional stationery with a customized rubber stamp from Avani Xerox and Stationery. Trust in our commitment to quality, attention to detail, and customer satisfaction. Create a stamp that reflects your unique identity and leaves a lasting impression. Order your personalized rubber stamp today and make your mark with confidence.",
            brand: "Discount offer on Bulk Quantity",
            category: "PRINT"
        },
        {
            id: "25",
            name: "Customized Frame",
            preview: customizedFramePreview,
            photos: [
                customizedFrame2,
                customizedFrame5,
                customizedFrame6,
                customizedFrame7,
                customizedFrame8,
                customizedFrame9,
                customizedFrame7
            ],
            description: "Welcome to Avani Xerox and Stationery! Capture and showcase your memories with Avani Xerox and Stationery's Customized Photo Frame Manufacturing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Let your photographs shine in personalized frames that reflect your style and preserve your precious moments.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "26",
            name: "Offset Printing",
            preview: offsetPrintingPreview,
            photos: [
                offsetPrinting1,
                offsetPrinting2,
                offsetPrinting3,
                offsetPrinting4
            ],
            description: "Introducing Avani Xerox and Stationery's Offset Printing service, where precision meets professional printing. Our offset printing service offers exceptional quality and versatility for all your printing needs. Choose Avani Xerox and Stationery for your offset printing needs and experience the difference of professional printing. Trust in our commitment to quality, attention to detail, and customer satisfaction. Elevate your printed materials to new heights with our reliable offset printing service. Contact us today to bring your ideas to life.",
            brand: "Discount offer on Bulk Quantity",
            category: "PRINT"
        },
        {
            id: "27",
            name: "Customized Name Plate",
            preview: namePlatePreview,
            photos: [
                namePlate1,
                namePlate2,
                namePlate3,
                namePlate4
            ],
            description: "Welcome to Avani Xerox and Stationery, your trusted destination for customized nameplate printing services. We specialize in creating personalized nameplates that add a touch of elegance and professionalism to your home or office. Enhance your personal or professional space with a customized nameplate from Avani Xerox and Stationery. Trust in our commitment to quality, attention to detail, and customer satisfaction. Create a nameplate that reflects your unique identity and makes a lasting impression. Order your personalized nameplate today and elevate your surroundings with style and professionalism.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
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
            brand: "Discount offer on Bulk Quantity", category: "PRINT"
        },
        {
            id: "29",
            name: "Customized Bracelet Women",
            preview: braceletWomenPreview,
            photos: [
                braceletWomen2,
                braceletWomen3,
                braceletWomen4,
                braceletWomen5,
                braceletWomen6,
                braceletWomen1
            ],
            description: "Avani Xerox and Stationery's Customize Women Bracelet service allows you to express your unique style and create a meaningful piece of jewelry. With customized designs, personalized engravings, premium quality materials, and versatile styles, our bracelets are designed to make a lasting impression.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
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
            id: "31",
            name: "Customized Bracelet Men",
            preview: braceletMenPreview,
            photos: [
                braceletMen2,
                braceletMen3,
                braceletMen4,
                braceletMen5,
                braceletMen6,
                braceletMen7,
                braceletMen8,
                braceletMen9,
                braceletMen1
            ],
            description: "Avani Xerox and Stationery's Customize Men Bracelet service allows you to express your unique style and create a meaningful piece of jewelry. With customized designs, personalized engravings, premium quality materials, and versatile styles, our bracelets are designed to make a lasting impression. Discover the joy of wearing a bracelet that tells your story and captures your essence. Start designing your own customized bracelet today and let your creativity shine.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "32",
            name: "Pamphlet Printing",
            preview: pamphletPreview,
            photos: [
                pamphlet1,
                pamphlet2,
                pamphlet3,
                pamphlet4
            ],
            description: "Avani Xerox and Stationery's Pamphlet Printing service is designed to help you effectively promote your business, event, or cause. Let our expert team assist you in creating visually appealing and informative pamphlets that make a lasting impact. Contact us today to discuss your pamphlet printing requirements and take your promotional efforts to the next level.",
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
            id: "34",
            name: "Vinyl Printing",
            preview: vinylPreview,
            photos: [
                vinyl1,
                vinyl2,
                vinyl3,
                vinyl4
            ],
            description: "Avani Xerox and Stationery's Vinyl Printing service combines high-quality prints, customized designs, and durable materials to help you effectively promote your business or event. With weather-resistant properties, lamination options, and versatile applications, our vinyl prints ensure your message stands out and lasts. Contact us today to discuss your vinyl printing needs and let us bring your vision to life with our top-notch printing solutions.",
            brand: "Discount offer on Bulk Quantity",
            category: "PRINT"
        },
        {
            id: "35",
            name: "Customized Engraved",
            preview: engravedPreview,
            photos: [
                engraved2,
                engraved3,
                engraved4,
                engraved5,
                engraved6,
                engraved7,
                engraved8,
                engraved9,
                engraved10,
                engraved11,
                engraved12,
                engraved13,
                engraved14,
                engraved15,
                engraved1
            ],
            description: "Avani Xerox and Stationery's Customize Engraving Frame service offers you the opportunity to create personalized frames that are both stylish and sentimental. With customized designs, engraved personalization, showcasing memories, thoughtful gifting options, superior quality, and quick turnaround time, our frames are designed to preserve and celebrate your most treasured moments. Start designing your own custom engraving frame today and turn your memories into lasting works of art.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "36",
            name: "Wedding Card Printing",
            preview: weddingCardPreview,
            photos: [
                weddingCard1,
                weddingCard2,
                weddingCard3,
                weddingCard4
            ],
            description: "Celebrate love and create magical moments with Avani Xerox and Stationery's Wedding Card printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Let your wedding invitations shine and set the stage for a truly unforgettable day. Order your personalized Wedding Cards today and begin your journey of happily ever after.",
            brand: "Discount offer on Bulk Quantity",
            category: "PRINT"
        },
        {
            id: "37",
            name: "Certificate Printing",
            preview: certificatePreview,
            photos: [
                certificate1,
                certificate2,
                certificate3,
                certificate4
            ],
            description: "Elevate the ownership and value of shares within your society or organization with Avani Xerox and Stationery's Society Share Certificate printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Create certificates that showcase the significance of share ownership and inspire confidence. Order your Certificates today and solidify the value of your society's shares.",
            brand: "Discount offer on Bulk Quantity",
            category: "PRINT"
        },
        {
            id: "38",
            name: "Invitation Card Printing",
            preview: invitationPreview,
            photos: [
                invitation1,
                invitation2,
                invitation3,
                invitation4,
                invitation5,
                invitation6
            ],
            description: "Create unforgettable moments with Avani Xerox and Stationery's Invitation Card printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Let your invitations reflect the joy and excitement of your special occasions. Order your personalized Invitation Cards today and invite your guests with style and elegance.",
            brand: "Discount offer on Bulk Quantity",
            category: "PRINT"
        },
        {
            id: "39",
            name: "Calendar Printing",
            preview: calendarPreview,
            photos: [
                calendar1,
                calendar2,
                calendar3,
                calendar4
            ],
            description: "Stay organized and showcase your style with Avani Xerox and Stationery's Calendar Printing service. Trust in our commitment to quality, attention to detail, and customer satisfaction. Let your calendars be both functional and visually appealing. Order your personalized calendars today and start the year off right.",
            brand: "Discount offer on Bulk Quantity",
            category: "PRINT"
        },
        {
            id: "40",
            name: "Customized Clock",
            preview: clockPreview,
            photos: [
                clock1,
                clock2,
                clock3,
                clock4
            ],
            description: "Introducing our exquisite collection of customized clocks from Avani Xerox and Stationery! Elevate your space and add a personal touch with our beautifully crafted timepieces. Each clock is designed with attention to detail and can be customized to reflect your unique style and taste. Whether it's a special gift for a loved one or a statement piece for your home or office, our customized clocks are sure to make a lasting impression. Trust in our commitment to quality, precision, and customer satisfaction. Order your personalized clock from Avani Xerox and Stationery today and transform your space with timeless elegance.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "41",
            name: "Customized Passport Cover",
            preview: passportCoverPreview,
            photos: [
                passportCover1,
                passportCover2,
                passportCover3,
                passportCover4,
                passportCover5,
                passportCover6
            ],
            description: "Introducing our stylish and personalized passport covers from Avani Xerox and Stationery! Protect your travel essentials in style with our high-quality, customized passport covers. Each cover is meticulously crafted and can be personalized with your name, initials, or a unique design of your choice. Not only will our passport covers keep your documents safe and secure, but they will also add a touch of sophistication to your travel accessories. Trust in our commitment to quality, durability, and customer satisfaction. Order your customized passport cover from Avani Xerox and Stationery today and embark on your journeys with confidence and style.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "42",
            name: "Customized Pen Stand",
            preview: penStandPreview,
            photos: [
                penStand1,
                penStand2,
                penStand3,
                penStand4
            ],
            description: "Introducing our personalized pen stands from Avani Xerox and Stationery! Keep your desk organized and showcase your style with our custom-designed pen stands. Each stand is crafted with precision and can be customized with your name, logo, or a special message. Our pen stands are not only functional but also add a touch of elegance to your workspace. Whether it's for your home office or a professional setting, our personalized pen stands make a statement. Trust in our commitment to quality, craftsmanship, and customer satisfaction. Order your customized pen stand from Avani Xerox and Stationery today and elevate your desk with personalized sophistication.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "43",
            name: "Visiting Card Holder",
            preview: visitingCardHolderPreview,
            photos: [
                visitingCardHolder1,
                visitingCardHolder2,
                visitingCardHolder3,
                visitingCardHolder4,
                visitingCardHolder5,
                visitingCardHolder6
            ],
            description: "Introducing our customized visiting card holders from Avani Xerox and Stationery! Stay organized and make a professional impression with our personalized card holders. Each holder is carefully designed and can be customized with your name, initials, or a unique design. Our visiting card holders are made with premium materials to ensure durability and style. Whether you're attending meetings, conferences, or networking events, our customized card holders are a must-have accessory. Trust in our commitment to quality, functionality, and customer satisfaction. Order your personalized visiting card holder from Avani Xerox and Stationery today and make a lasting impression wherever you go.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "44",
            name: "Customized Mobile Stand",
            preview: mobileStandPreview,
            photos: [
                mobileStand1,
                mobileStand2,
                mobileStand3
            ],
            description: "Introducing our customized mobile stands from Avani Xerox and Stationery! Keep your device secure and hands-free with our personalized mobile stands. Each stand is designed with versatility and style in mind, allowing you to adjust the viewing angle and showcase your unique design or logo. Our mobile stands are made with high-quality materials to ensure stability and durability. Whether you're watching videos, attending virtual meetings, or following recipes in the kitchen, our customized mobile stands provide convenience and functionality. Trust in our commitment to quality, innovation, and customer satisfaction. Order your personalized mobile stand from Avani Xerox and Stationery today and elevate your mobile experience.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "45",
            name: "Customized Wine Glass",
            preview: wineGlassPreview,
            photos: [
                wineGlass1,
                wineGlass2,
                wineGlass3
            ],
            description: "Introducing our exquisite collection of customized wine glasses from Avani Xerox and Stationery! Elevate your drinking experience and add a personal touch with our beautifully designed glassware. Each wine glass is carefully crafted and can be customized with your chosen design, initials, or special message. Made with premium quality materials, our customized wine glasses ensure durability and a luxurious feel. Whether it's a special occasion, a gift for a wine enthusiast, or a unique addition to your home bar, our customized wine glasses are sure to impress. Trust in our commitment to quality, elegance, and customer satisfaction. Order your personalized wine glass fromHere's the continuation of the code for the ",

            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "46",
            name: "Customized Diary",
            preview: diaryPreview,
            photos: [
                diary1,
                diary2,
                diary3,
                diary4,
                diary5,
                diary6
            ],
            description: "Introducing our exquisite collection of customized diaries from Avani Xerox and Stationery! Experience the joy of journaling and staying organized with our beautifully designed diaries. Each diary is crafted with meticulous attention to detail and can be personalized with your name, initials, or a special message. With high-quality paper and durable binding, our customized diaries provide a luxurious writing experience that lasts. Whether it's for personal use, a thoughtful gift, or professional note-taking, our customized diaries are the perfect companion. Trust in our commitment to quality, functionality, and customer satisfaction. Order your personalized diary from Avani Xerox and Stationery today and embark on a journey of self-expression and organization.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "47",
            name: "Customized Bag Tag",
            preview: bagTagPreview,
            photos: [
                bagTag1,
                bagTag2,
                bagTag3,
                bagTag4,
                bagTag5,
                bagTag6
            ],
            description: "Introducing our stylish collection of customized bag tags from Avani Xerox and Stationery! Personalize your bags and luggage with our durable and eye-catching bag tags. Each tag is designed with precision and can be customized with your name, initials, or a unique design. Made from high-quality materials, our customized bag tags are built to withstand the rigors of travel and everyday use. Easily identify your bags and add a touch of personalization to your belongings. Whether it's for personal use or a thoughtful gift for a frequent traveler, our customized bag tags are the perfect accessory. Trust in our commitment to quality, style, and customer satisfaction. Order your personalized bag tag from Avani Xerox and Stationery today and make a statement wherever you go.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        },
        {
            id: "48",
            name: "Customized Bedsheet",
            preview: bedsheetPreview,
            photos: [
                bedsheet1,
                bedsheet2,
                bedsheet3,
                bedsheet4
            ],
            description: "Introducing our luxurious collection of customized bedsheets from Avani Xerox and Stationery! Transform your bedroom into a haven of comfort and style with our personalized bedsheets. Each bedsheet is made from premium quality fabric and can be customized with your preferred design, pattern, or even a memorable photo. Experience ultimate comfort and create a unique ambiance in your bedroom with our customized bedsheets. Whether it's for your own home or a thoughtful gift for someone special, our personalized bedsheets are sure to enhance any bedroom decor. Trust in our commitment to quality, elegance, and customer satisfaction. Order your personalized bedsheet from Avani Xerox and Stationery today and indulge in a truly customized sleeping experience.",
            brand: "Discount offer on Bulk Quantity",
            category: "GIFT"
        }
    ];

    const { id } = useParams();
    const productId = parseInt(id, 10);

    const product = ShopProduct.find((p) => parseInt(p.id, 10) === productId);

    useEffect(() => {
        // Scroll to top when the page loads
        window.scrollTo(0, 0);
    }, []);

    const [selectedPhoto, setSelectedPhoto] = useState(product.preview);
    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    return (
        <main className="product-page">

            <div className="row" id="containerProduct">
                <div id="particles-js">

                    <div id="containerD">
                        {/* Image Section */}
                        <div className="container" id="imageSection">
                            <img id="imgDetails" src={selectedPhoto} alt="Product" />
                        </div>

                        {/* Product Details */}
                        <div id="productDetails">
                            <h2>{product.name}</h2>

                            {/* Photo Previews */}
                            <div id="productPreview">
                                {product.photos.map((photo, index) => (
                                    <img
                                        src={photo}
                                        alt={`Additional Photo ${index + 1}`}
                                        key={index}
                                        id="previewImg"
                                        onClick={() => handlePhotoClick(photo)}
                                    />
                                ))}
                            </div>

                            <h4>Discount offer on Bulk Quantity</h4>

                            {/* Description */}
                            <div id="details">
                                <h3>Description</h3>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetails;
