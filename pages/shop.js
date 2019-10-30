import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { Checkbox } from "pretty-checkbox-react";
import Head from 'next/head';

const Shop = () => {
  const products = [
    {
      id: "b4b377ea-8688-4650-be3e-8580d554c6f2",
      sell_price: 18600000,
      buy_price: 19700000,
      total_sold: 1687,
      release_date: "1549773617",
      retail_price: 2358150,
      brand: "Asics",
      gender: "Female",
      status: "Best Seller",
      available_size: [46, 38.5, 51.5, 44.5, 42, 40.5, 48.5, 47.5, 42.5, 41],
      thumbnail: "/images/product/asics/Asics-Gel-Lyte-III-Afew-Koi.jpg",
      name: "ASICS Gel-Lyte III Afew Koi"
    },
    {
      id: "8da18960-5979-48ec-8df4-ca2d197812d7",
      sell_price: 38876805,
      buy_price: 8800490,
      total_sold: 525,
      release_date: "1326919361",
      retail_price: 6152314,
      brand: "Asics",
      gender: "Male",
      status: "Best Seller",
      available_size: [48.5, 41, 51.5, 50.5, 48, 43, 49.5, 45, 44.5, 47],
      thumbnail:
        "/images/product/asics/Asics-Gel-Lyte-III-Ronnie-Fieg-Super-Green.jpg",
      name: "ASICS Gel-Lyte III Ronnie Fieg Super Green"
    },
    {
      id: "8cf8b579-c7e9-4902-a771-7b11956137da",
      sell_price: 16097047,
      buy_price: 22989047,
      total_sold: 448,
      release_date: "1483649079",
      retail_price: 8729475,
      brand: "Air Jordan",
      gender: "Male",
      status: "Best Seller",
      available_size: [47.5, 45.5, 44.5, 50.5, 42, 44, 40.5, 46, 48, 38.5],
      thumbnail:
        "/images/product/air-jordan/Air-Jordan-1-Retro-High-Satin-Black-Toe.jpg",
      name: "Air Jordan 1 Retro High Satin Black Toe"
    },
    {
      id: "67f98dc6-40e3-478d-b8e9-333c5c9c2f0f",
      sell_price: 8619043,
      buy_price: 9683835,
      total_sold: 376,
      release_date: "1312534352",
      retail_price: 3309308,
      brand: "Asics",
      gender: "Male",
      status: "Best Seller",
      available_size: [43, 51.5, 48.5, 47, 45, 48, 45.5, 49.5, 44, 40],
      thumbnail:
        "/images/product/asics/Asics-Gel-Lyte-III-Afew-X-Beams-Orange-Koi-Product.jpg",
      name: "Asics Gel-Lyte III Afew x Beams Orange Koi"
    },
    {
      id: "b5ca49f5-fa2e-4af0-a389-574b4d4f64c8",
      sell_price: 8035228,
      buy_price: 35321619,
      total_sold: 149,
      release_date: "1457515918",
      retail_price: 9408250,
      brand: "Air Jordan",
      gender: "Female",
      status: "Staff Choose",
      available_size: [43, 51.5, 48.5, 47, 45, 48, 45.5, 49.5, 44, 40],
      thumbnail:
        "/images/product/air-jordan/Air-Jordan-12-Retro-Fiba-2019.jpeg",
      name: "Jordan 12 Retro Fiba (2019)"
    },
    {
      id: "d2a3b755-aeff-42a1-b128-b2ccd034a4fd",
      sell_price: 24995346,
      buy_price: 37250444,
      total_sold: 790,
      release_date: "1482747573",
      retail_price: 6120202,
      brand: "Adidas",
      gender: "Female",
      status: "Best Seller",
      available_size: [48, 47.5, 45, 47, 40, 48.5, 44, 38.5, 45.5, 42],
      thumbnail: "/images/product/adidas/adidas-Yeezy-Boost-500-Bone-White.jpg",
      name: "Adidas Yeezy 500 Bone White"
    },
    {
      id: "7c937eb3-852e-487f-b785-a6e5ea3e848d",
      sell_price: 43526236,
      buy_price: 20999679,
      total_sold: 1,
      release_date: "1407468934",
      retail_price: 2718062,
      brand: "Converse",
      gender: "Female",
      status: "Staff Choose",
      available_size: [48, 40.5, 42.5, 43, 40, 41, 47, 44, 50.5, 46],
      thumbnail:
        "/images/product/converse/Converse-Chuck-Taylor-All-Star-70s-Hi-Off-White-Product.jpg",
      name: "Converse Chuck Taylor All-Star 70s Hi Off-White"
    },
    {
      id: "0b0c2477-c0c5-4029-a012-48255ab7f01c",
      sell_price: 1631525,
      buy_price: 20771315,
      total_sold: 771,
      release_date: "1422809077",
      retail_price: 5641314,
      brand: "Converse",
      gender: "Female",
      status: "Under Retails",
      available_size: [47, 40.5, 48, 45, 46, 47.5, 42.5, 38.5, 48.5, 44.5],
      thumbnail:
        "/images/product/converse/Converse-Chuck-Taylor-All-Star-70s-Hi-Comme-des-Garcons-PLAY-White-Product.jpg",
      name: "Converse Chuck Taylor All-Star 70s Hi Comme des Garcons PLAY White"
    },
    {
      id: "6e7c750c-4dd9-4eb8-ae95-4ace72f5fc70",
      sell_price: 25091236,
      buy_price: 7547966,
      total_sold: 378,
      release_date: "1453156150",
      retail_price: 2993510,
      brand: "Converse",
      gender: "Male",
      status: "Staff Choose",
      available_size: [45.5, 48.5, 46, 42.5, 47.5, 47, 51.5, 49.5, 50.5, 41],
      thumbnail:
        "/images/product/converse/Converse-Chuck-Taylor-All-Star-70s-Hi-Kith-Coca-Cola-Denim-2019.jpeg",
      name: "Converse Chuck Taylor All-Star 70s Hi Kith Coca-Cola Denim (2019)"
    },
    {
      id: "70fdb627-ba03-4a28-a710-ba15a91027dc",
      sell_price: 28635857,
      buy_price: 16428818,
      total_sold: 864,
      release_date: "1474094947",
      retail_price: 5769070,
      brand: "Adidas",
      gender: "Female",
      status: "Best Seller",
      available_size: [42, 41, 46, 50.5, 45.5, 43, 40.5, 44.5, 39, 42.5],
      thumbnail:
        "/images/product/adidas/adidas-Yeezy-Boost-350-V2-Lundmark-Product.jpg",
      name: "Adidas Yeezy Boost 350 V2 Lundmark (Non Reflective)"
    },
    {
      id: "f8623651-de3a-4a33-b112-1fa5e9582534",
      sell_price: 16523792,
      buy_price: 30870027,
      total_sold: 479,
      release_date: "1310207254",
      retail_price: 5137146,
      brand: "Converse",
      gender: "Female",
      status: "Best Seller",
      available_size: [40, 43, 46, 42, 40.5, 48, 42.5, 38.5, 45, 49.5],
      thumbnail:
        "/images/product/converse/Converse-Chuck-Taylor-All-Star-Hi-Off-White-Product.jpg",
      name: "Converse Chuck Taylor All-Star Vulcanized Hi Off-White"
    },
    {
      id: "ac1c24b4-a93a-47d3-a619-b048dcf71d2d",
      sell_price: "9550000",
      buy_price: "9310000",
      total_sold: 2462,
      release_date: "1305658914",
      retail_price: 7350000,
      brand: "Adidas",
      gender: "Male",
      status: "Best Seller",
      available_size: [46, 42, 49.5, 39, 38.5, 47, 48.5, 45, 41, 44],
      thumbnail:
        "/images/product/adidas/Adidas-Yeezy-Wave-Runner-700-Solid-Grey-Product.jpg",
      name: "Adidas Yeezy Boost 700 Wave Runner Solid Grey"
    },
    {
      id: "2c552b05-6391-4a2d-ac0e-5804e480f3a4",
      sell_price: 38676899,
      buy_price: 29052661,
      total_sold: 345,
      release_date: "1526087683",
      retail_price: 3599193,
      brand: "Asics",
      gender: "Female",
      status: "Best Seller",
      available_size: [49.5, 46, 40, 41, 40.5, 47, 45, 42, 48.5, 51.5],
      thumbnail:
        "/images/product/asics/Asics-Gel-Lyte-III-Concepts-Boston-Tea-Party.jpg",
      name: "ASICS Gel-Lyte III Concepts Boston Tea Party"
    },
    {
      id: "4ae17289-a106-46c5-8764-5fb38b0de947",
      sell_price: 1347753,
      buy_price: 1271081,
      total_sold: 584,
      release_date: "1324407572",
      retail_price: 3373405,
      brand: "Converse",
      gender: "Male",
      status: "Under Retails",
      available_size: [44.5, 40, 47, 40.5, 43, 38.5, 44, 45.5, 45, 49.5],
      thumbnail:
        "/images/product/converse/Converse-Run-Star-Hike-Hi-JW-Anderson-Black-Product.jpg",
      name: "Converse Run Star Hike Hi JW Anderson Black"
    },
    {
      id: "03e0130a-190f-45f2-909b-f762a9ac3304",
      sell_price: 9381211,
      buy_price: 83737309,
      total_sold: 549,
      release_date: "1541699396",
      retail_price: 4989091,
      brand: "Air Jordan",
      gender: "Male",
      status: "Best Seller",
      available_size: [42, 47, 40.5, 47.5, 42.5, 45.5, 50.5, 45, 39, 41],
      thumbnail:
        "/images/product/air-jordan/Air-Jordan-1-Retro-High-Travis-Scott-Product.jpg",
      name: "Jordan 1 Retro High Travis Scott"
    },
    {
      id: "0375e659-b4f2-4922-acf0-f3c0e52343c3",
      sell_price: 19934682,
      buy_price: 35106952,
      total_sold: 58,
      release_date: "1517308997",
      retail_price: 6342299,
      brand: "Vans",
      gender: "Male",
      status: "Staff Choose",
      available_size: [49.5, 44.5, 39, 44, 42.5, 46, 50.5, 40.5, 41, 42],
      thumbnail: "/images/product/vans/Vans-Sk8-Hi-FOG.jpeg",
      name: "Vans Sk8-Hi Fear of God"
    },
    {
      id: "d4de304e-1b83-4859-a926-60b921fe8aac",
      sell_price: 11185340,
      buy_price: 14937559,
      total_sold: 531,
      release_date: "1318024335",
      retail_price: 5782995,
      brand: "Vans",
      gender: "Female",
      status: "Best Seller",
      available_size: [43, 44.5, 47.5, 50.5, 40, 44, 48.5, 46, 38.5, 48],
      thumbnail:
        "/images/product/vans/Vans-Old-Skool-David-Bowie-Aladdin-Sane-Product.jpg",
      name: "Vans Old Skool David Bowie Aladdin Sane"
    },
    {
      id: "7a0f2d15-4635-4b9a-8d77-b9e8ba6ca160",
      sell_price: 18426134,
      buy_price: 30613996,
      total_sold: 267,
      release_date: "1341785835",
      retail_price: 4825196,
      brand: "Converse",
      gender: "Female",
      status: "Staff Choose",
      available_size: [39, 42.5, 46, 47, 41, 40.5, 42, 48.5, 38.5, 48],
      thumbnail:
        "/images/product/converse/Converse-One-Star-Ox-Tyler-The-Creator-Golf-Le-Fleur-Jade-Lime-Product.jpg",
      name: "Converse One Star Ox Tyler the Creator Golf Le Fleur Jade Lime"
    },
    {
      id: "bc71eb92-ad71-4475-8062-208765d46665",
      sell_price: 36162615,
      buy_price: 7962105,
      total_sold: 249,
      release_date: "1386466447",
      retail_price: 3671230,
      brand: "Vans",
      gender: "Female",
      status: "Staff Choose",
      available_size: [42, 47, 51.5, 42.5, 41, 48, 47.5, 40, 39, 38.5],
      thumbnail:
        "/images/product/vans/Vans-OG-Sk8-Hi-Odd-Future-Donut-Product.jpg",
      name: "Vans Sk8-Hi Odd Future Donut"
    },
    {
      id: "1e5c6c12-5d30-4197-9b96-d33a22b71370",
      sell_price: 2588637,
      buy_price: 4312611,
      total_sold: 142,
      release_date: "1294388018",
      retail_price: 5495405,
      brand: "Air Jordan",
      gender: "Female",
      status: "Under Retails",
      available_size: [45, 42.5, 40, 38.5, 46, 39, 51.5, 48.5, 47, 47.5],
      thumbnail: "/images/product/air-jordan/Air-Jordan-1-Low-SB-UNC-v2.jpg",
      name: "Jordan 1 Low SB UNC"
    },
    {
      id: "09f597db-0caf-49d9-a9af-2dc67d7f5b6d",
      sell_price: 2938495,
      buy_price: 21565928,
      total_sold: 395,
      release_date: "1308645960",
      retail_price: 8921279,
      brand: "Adidas",
      gender: "Male",
      status: "Staff Choose",
      available_size: [39, 43, 49.5, 48, 45.5, 41, 45, 40.5, 44, 46],
      thumbnail:
        "/images/product/adidas/adidas-NMD-Hu-Pharrell-Mother-Product.jpg",
      name: "Adidas NMD Hu Pharrell Solar Pack Mother"
    },
    {
      id: "8784b8f1-a88a-4dc3-926f-6443139a62ae",
      sell_price: 24058649,
      buy_price: 1133297,
      total_sold: 177,
      release_date: "1400249660",
      retail_price: 7639674,
      brand: "Vans",
      gender: "Male",
      status: "Staff Choose",
      available_size: [51.5, 43, 39, 48, 50.5, 42.5, 40, 38.5, 48.5, 47.5],
      thumbnail:
        "/images/product/vans/Vans-Sk8-Hi-Deconstructed-Black-Product.jpg",
      name: "Vans Sk8-Hi Deconstructed Black"
    },
    {
      id: "48748f76-0384-4827-9c4c-17e2599df84b",
      sell_price: 22726853,
      buy_price: 5581617,
      total_sold: 254,
      release_date: "1391128071",
      retail_price: 7950931,
      brand: "Adidas",
      gender: "Female",
      status: "Best Seller",
      available_size: [51.5, 43, 39, 48, 50.5, 42.5, 40, 38.5, 48.5, 47.5],
      thumbnail:
        "/images/product/adidas/adidas-Ultra-Boost-4-Game-of-Thrones-White-Walkers-1.jpg",
      name: "Adidas Ultra Boost 4.0 Game of Thrones White Walkers"
    },
    {
      id: "3b4aebdf-4724-47f4-b413-2d586517ab96",
      sell_price: 44591059,
      buy_price: 15454147,
      total_sold: 342,
      release_date: "1356959410",
      retail_price: 4289584,
      brand: "Converse",
      gender: "Male",
      status: "Best Seller",
      available_size: [39, 40.5, 48, 44.5, 49.5, 44, 41, 43, 42.5, 48.5],
      thumbnail:
        "/images/product/converse/Converse-Chuck-Taylor-All-Star-70s-Hi-Undercover-New-Warriors-White-Product.jpg",
      name:
        "Converse Chuck Taylor All-Star 70s Hi Undercover New Warriors White"
    },
    {
      id: "390f3b2f-de08-4231-a4d6-c758e85c5043",
      sell_price: 43714166,
      buy_price: 7854025,
      total_sold: 121,
      release_date: "1301779131",
      retail_price: 2925717,
      brand: "Vans",
      gender: "Male",
      status: "Staff Choose",
      available_size: [42.5, 44, 43, 40, 48.5, 45, 41, 47, 48, 46],
      thumbnail: "/images/product/vans/Vans-Sk8-Hi-Checkerboard-Cap-1.jpg",
      name: "Vans Sk8-Hi Checkerboard Cap"
    },
    {
      id: "e6aa7ecd-9dea-4d21-8fe0-378a1e60b2ea",
      sell_price: 23101107,
      buy_price: 6859516,
      total_sold: 216,
      release_date: "1310263287",
      retail_price: 1638337,
      brand: "Nike",
      gender: "Female",
      status: "Best Seller",
      available_size: [45.5, 41, 45, 39, 38.5, 48, 48.5, 44.5, 40, 42],
      thumbnail: "/images/product/nike/Nike-Kyrie-5-Spongebob-Product.jpg",
      name: "Kyrie 5 Spongebob Squarepants"
    },
    {
      id: "007bc640-91e9-454c-8d25-69dd0d7ace33",
      sell_price: 33713366,
      buy_price: 39081113,
      total_sold: 521,
      release_date: "1514273204",
      retail_price: 7596955,
      brand: "Asics",
      gender: "Male",
      status: "Best Seller",
      available_size: [49.5, 45.5, 45, 47, 44.5, 44, 38.5, 47.5, 46, 42],
      thumbnail:
        "/images/product/asics/Asics-Gel-Lyte-III-Kith-Grand-Opening.jpg",
      name: "ASICS Gel-Lyte III Kith Grand Opening"
    },
    {
      id: "12cf9d6b-c1b1-45c9-b67f-4e21e75aba70",
      sell_price: 5385486,
      buy_price: 4345843,
      total_sold: 773,
      release_date: "1305207248",
      retail_price: 8021598,
      brand: "Nike",
      gender: "Female",
      status: "Best Seller",
      available_size: [40, 46, 51.5, 42.5, 50.5, 42, 48.5, 49.5, 41, 45],
      thumbnail: "/images/product/nike/Nike-SB-Dunk-Low-Parra-Product.jpg",
      name: "Nike SB Dunk Low Parra"
    },
    {
      id: "be92348e-3983-46ab-a32b-c63159fe2573",
      sell_price: 24510176,
      buy_price: 20556789,
      total_sold: 129,
      release_date: "1567031537",
      retail_price: 4269782,
      brand: "Converse",
      gender: "Male",
      status: "Best Seller",
      available_size: [43, 42.5, 51.5, 45, 48, 46, 41, 40.5, 47.5, 45.5],
      thumbnail:
        "/images/product/converse/Converse-Chuck-Taylor-All-Star-70s-Hi-BHM-2019-All-Over-Print-Product.jpg",
      name:
        "Converse Chuck Taylor All-Star 70s Hi BHM Black/Multi All Over Print (2019)"
    },
    {
      id: "ce22fd26-b34b-4a1a-af97-7e76a015c5a6",
      sell_price: 33340577,
      buy_price: 43450408,
      total_sold: 540,
      release_date: "1314580924",
      retail_price: 3602001,
      brand: "Vans",
      gender: "Male",
      status: "Best Seller",
      available_size: [46, 41, 42, 47, 47.5, 44.5, 51.5, 39, 40.5, 50.5],
      thumbnail: "/images/product/vans/Vans-Era-Patchwork.jpeg",
      name: "Vans Era Patchwork"
    },
    {
      id: "ba954459-1e06-419e-82ae-78530249ee68",
      sell_price: 11919540,
      buy_price: 25471230,
      total_sold: 706,
      release_date: "1290577653",
      retail_price: 1284742,
      brand: "Nike",
      gender: "Female",
      status: "Staff Choose",
      available_size: [47, 49.5, 50.5, 46, 45.5, 44, 39, 42, 41, 40],
      thumbnail: "/images/product/nike/Nike-Air-Max-1-Tinker-Sketch.jpg",
      name: "Air Max 1 Tinker Sketch to Shelf"
    },
    {
      id: "c33427b9-d59c-47af-a16b-cff599f4039c",
      sell_price: 16270840,
      buy_price: 38381795,
      total_sold: 441,
      release_date: "1554363565",
      retail_price: 6305653,
      brand: "Asics",
      gender: "Male",
      status: "Best Seller",
      available_size: [39, 38.5, 42, 45, 44, 50.5, 47.5, 40, 47, 40.5],
      thumbnail:
        "/images/product/asics/Asics-Gel-Lyte-III-Concepts-Three-Lies.jpg",
      name: "ASICS Gel-Lyte III Concepts Three Lies"
    },
    {
      id: "90947db9-fd36-4378-94a9-01d8fd22072c",
      sell_price: 17368228,
      buy_price: 40181656,
      total_sold: 701,
      release_date: "1435351329",
      retail_price: 1604875,
      brand: "Adidas",
      gender: "Female",
      status: "Staff Choose",
      available_size: [48, 41, 49.5, 46, 45, 44.5, 42.5, 48.5, 47.5, 42],
      thumbnail:
        "/images/product/adidas/Adidas-Yeezy-Powerphase-Calabasas-Grey-Product.jpg",
      name: "Adidas Yeezy Powerphase Calabasas Grey"
    },
    {
      id: "9265c648-6e8e-4c2d-9999-8c070b52ab6c",
      sell_price: 27433605,
      buy_price: 39011043,
      total_sold: 441,
      release_date: "1493732216",
      retail_price: 3400497,
      brand: "Asics",
      gender: "Male",
      status: "Staff Choose",
      available_size: [40.5, 45, 47.5, 43, 42, 44.5, 47, 49.5, 46, 39],
      thumbnail:
        "/images/product/asics/Asics-Gel-Lyte-III-Saint-Alfred-Olive-Birch.jpg",
      name: "ASICS Gel-Lyte III Saint Alfred Olive/Birch"
    },
    {
      id: "02931e4b-440e-42db-bdac-451141be5a10",
      sell_price: 30993150,
      buy_price: 17519903,
      total_sold: 146,
      release_date: "1257380386",
      retail_price: 3944551,
      brand: "Adidas",
      gender: "Female",
      status: "Best Seller",
      available_size: [46, 38.5, 48, 43, 45.5, 51.5, 48.5, 49.5, 47, 42.5],
      thumbnail:
        "/images/product/adidas/Adidas-NMD-R1-Japan-Triple-White-Product.jpg",
      name: "adidas NMD R1 Japan Triple White"
    },
    {
      id: "bf1289ab-ff9c-4202-bde3-13e2cce5a998",
      sell_price: 26733418,
      buy_price: 30827217,
      total_sold: 124,
      release_date: "1483256961",
      retail_price: 5623339,
      brand: "Vans",
      gender: "Male",
      status: "Staff Choose",
      available_size: [46, 38.5, 48, 43, 45.5, 51.5, 48.5, 49.5, 47, 42.5],
      thumbnail:
        "/images/product/vans/Vans-Old-Skool-Marvel-What-The-Avengers-Product.jpg",
      name: "Vans Old Skool Marvel What The Avengers"
    },
    {
      id: "949f1621-4d3a-47e8-a547-a5baf1c39bef",
      sell_price: 15583586,
      buy_price: 6871648,
      total_sold: 82,
      release_date: "1423657261",
      retail_price: 1504993,
      brand: "Converse",
      gender: "Male",
      status: "Staff Choose",
      available_size: [39, 48, 42, 43, 47.5, 40, 38.5, 42.5, 41, 47],
      thumbnail:
        "/images/product/converse/Converse-Chuck-Taylor-All-Star-70s-Hi-Kith-Navy-Product.jpg",
      name: "Converse Chuck Taylor All-Star 70s Hi Kith x Coca Cola Navy"
    },
    {
      id: "87bb21b1-02ea-4a5f-8ae1-1bb725803016",
      sell_price: 16562750,
      buy_price: 24969984,
      total_sold: 503,
      release_date: "1305084412",
      retail_price: 8352778,
      brand: "Vans",
      gender: "Female",
      status: "Best Seller",
      available_size: [38.5, 47, 41, 48.5, 44.5, 45.5, 42.5, 47.5, 40.5, 46],
      thumbnail:
        "/images/product/vans/Vans-Slip-On-Supreme-Diamond-Plate-Navy-Product.jpg",
      name: "Vans Slip-On Supreme Diamond Plate Red"
    },
    {
      id: "32a16e03-a9b1-44bf-a346-956507caf8e0",
      sell_price: 2224311,
      buy_price: 1910144,
      total_sold: 149,
      release_date: "1477651088",
      retail_price: 4902091,
      brand: "Air Jordan",
      gender: "Male",
      status: "Staffs Choose",
      available_size: [50.5, 43, 40, 49.5, 45, 39, 51.5, 48, 44, 42],
      thumbnail:
        "/images/product/air-jordan/Air-Jordan-4-Retro-Cool-Grey-2019-Product.jpg",
      name: "Jordan 4 Retro Cool Grey (2019)"
    },
    {
      id: "01585b20-f33e-4cf8-aa1f-603eb931e064",
      sell_price: 4864598,
      buy_price: 5801343,
      total_sold: 358,
      release_date: "1555537868",
      retail_price: 3183204,
      brand: "Air Jordan",
      gender: "Female",
      status: "Staffs Choose",
      available_size: [42, 47.5, 45, 44, 51.5, 47, 41, 48.5, 46, 44.5],
      thumbnail:
        "/images/product/air-jordan/Air-Jordan-11-Retro-Low-Snake-Navy-2019-Product.jpg",
      name: "Jordan 11 Retro Low Snake Navy (2019)"
    },
    {
      id: "e0e93361-dcf7-4f8c-a77b-1bfdd3530e69",
      sell_price: 1961114,
      buy_price: 2569077,
      total_sold: 617,
      release_date: "1537181896",
      retail_price: 5759284,
      brand: "Vans",
      gender: "Female",
      status: "Under Retails",
      available_size: [45.5, 50.5, 43, 42.5, 49.5, 38.5, 40.5, 39, 40, 48],
      thumbnail:
        "/images/product/vans/Vans-Old-Skool-Colorblock-Multi-Product.jpg",
      name: "Vans Old Skool Colorblock Multi"
    },
    {
      id: "0f485a85-04cc-48b2-b61d-508712095bc0",
      sell_price: 16982204,
      buy_price: 10459341,
      total_sold: 352,
      release_date: "1376835297",
      retail_price: 3520463,
      brand: "Converse",
      gender: "Female",
      status: "Staff Choose",
      available_size: [44, 40, 47, 49.5, 48.5, 42.5, 48, 50.5, 47.5, 41],
      thumbnail:
        "/images/product/converse/Converse-One-Star-Ox-Golf-Le-Fleur-Industrial-Pack-Blue-Product.jpg",
      name: "Converse One Star Ox Golf Le Fleur Industrial Pack Barely Blue"
    },
    {
      id: "39f26e06-dca4-4133-b2a0-dce85dc28e74",
      sell_price: 13111570,
      buy_price: 20858201,
      total_sold: 373,
      release_date: "1475270940",
      retail_price: 4173545,
      brand: "Adidas",
      gender: "Female",
      status: "Best Seller",
      available_size: [45, 51.5, 46, 39, 45.5, 44.5, 38.5, 42, 43, 40.5],
      thumbnail: "/images/product/adidas/Adidas-ZX-5000-Undftd-Bape-camo.jpg",
      name: "Adidas ZX 5000 UNDFTD x Bape Camo"
    },
    {
      id: "6321ed97-2a4c-425c-b3c5-ded4dff8a0fc",
      sell_price: 35826048,
      buy_price: 13205474,
      total_sold: 60,
      release_date: "1548634838",
      retail_price: 6700947,
      brand: "Adidas",
      gender: "Male",
      status: "Best Seller",
      available_size: [45, 51.5, 46, 39, 45.5, 44.5, 38.5, 42, 43, 40.5],
      thumbnail:
        "/images/product/adidas/Adidas-Human-Race-NMD-Pharrell-x-Chanel-Black.jpeg",
      name: "Adidas Human Race NMD Pharrell x Chanel"
    },
    {
      id: "0469ed4e-53ba-4b64-8dd1-d5bec2d6294c",
      sell_price: 42273309,
      buy_price: 42232383,
      total_sold: 521,
      release_date: "1274725944",
      retail_price: 4553289,
      brand: "Converse",
      gender: "Male",
      status: "Staff Choose",
      available_size: [41, 42, 40.5, 44.5, 40, 48, 50.5, 51.5, 45, 38.5],
      thumbnail:
        "/images/product/converse/Converse-Chuck-Taylor-All-Star-70s-Hi-Brain-Dead-Product.jpg",
      name: "Converse Chuck Taylor All-Star 70s Hi Brain Dead"
    },
    {
      id: "4f8f94fb-4e8f-4943-8f2c-c17f0caf61fe",
      sell_price: 17451343,
      buy_price: 6954013,
      total_sold: 962,
      release_date: "1256832982",
      retail_price: 9222970,
      brand: "Nike",
      gender: "Male",
      status: "Best Seller",
      available_size: [46, 43, 45.5, 44, 48.5, 42.5, 47, 47.5, 49.5, 39],
      thumbnail: "/images/product/nike/Nike-Adapt-BB-Mag-Product.jpg",
      name: "Nike Adapt BB Mag (Sạc bản US)"
    },
    {
      id: "72a0abbd-a7e0-410f-abc1-6e93763e6159",
      sell_price: 33419247,
      buy_price: 1013039,
      total_sold: 672,
      release_date: "1464557754",
      retail_price: 3273297,
      brand: "Nike",
      gender: "Male",
      status: "Staff Choose",
      available_size: [42.5, 38.5, 46, 47.5, 50.5, 43, 39, 40, 45.5, 48.5],
      thumbnail:
        "/images/product/nike/Nike-Blazer-High-sacai-Snow-Beach-Product.jpg",
      name: "Nike Blazer High sacai Snow Beach"
    },
    {
      id: "921dc393-0869-410d-af40-93d21aeeb047",
      sell_price: 10919476,
      buy_price: 24546058,
      total_sold: 312,
      release_date: "1442204294",
      retail_price: 7818040,
      brand: "Nike",
      gender: "Male",
      status: "Best Seller",
      available_size: [44, 40.5, 42, 48, 44.5, 51.5, 45, 49.5, 47, 41],
      thumbnail:
        "/images/product/nike/Nike-Air-Presto-Off-White-White-2018-Product.jpg",
      name: "Air Presto Off-White White (2018)"
    },
    {
      id: "92e53471-e128-416f-b114-5033c4e030f2",
      sell_price: 8825601,
      buy_price: 14695984,
      total_sold: 942,
      release_date: "1526218511",
      retail_price: 8273970,
      brand: "Nike",
      gender: "Male",
      status: "Best Seller",
      available_size: [45.5, 51.5, 47.5, 40.5, 48, 39, 38.5, 40, 42.5, 45],
      thumbnail:
        "/images/product/nike/Nike-Air-Force-1-Low-Off-White-Black-White-Product.jpg",
      name: "Air Force 1 Low Off-White Black White"
    },
    {
      id: "94fb7977-b223-4c5a-8687-1673876e30a8",
      sell_price: 2266429,
      buy_price: 3326160,
      total_sold: 438,
      release_date: "1312965697",
      retail_price: 1252868,
      brand: "Nike",
      gender: "Male",
      status: "Best Seller",
      available_size: [49.5, 41, 47, 50.5, 44, 46, 42, 44.5, 43, 48.5],
      thumbnail:
        "/images/product/nike/Nike-Air-Max-1-97-Sean-Wotherspoon-NA-Product.jpg",
      name: "Air Max 1/97 Sean Wotherspoon"
    },
    {
      id: "fdfd5299-b2e6-4e4f-b5f5-1412a139a437",
      sell_price: 2101701,
      buy_price: 1715546,
      total_sold: 608,
      release_date: "1471143348",
      retail_price: 8914471,
      brand: "Nike",
      gender: "Male",
      status: "Under Retails",
      available_size: [45, 40, 38.5, 44.5, 42, 44, 45.5, 48, 48.5, 47],
      thumbnail:
        "/images/product/nike/Nike-Cortez-Stranger-Things-Independence-Day-Pack.jpeg",
      name: "Nike Classic Cortez Stranger Things Independence Day Pack"
    },
    {
      id: "510b79a0-3fd5-4024-929c-6cf3cc06bae0",
      sell_price: 27379593,
      buy_price: 41615156,
      total_sold: 546,
      release_date: "1481926282",
      retail_price: 5665657,
      brand: "Nike",
      gender: "Male",
      status: "Best Seller",
      available_size: [40.5, 50.5, 46, 51.5, 49.5, 39, 47.5, 42.5, 41, 43],
      thumbnail: "/images/product/nike/Nike-Air-Max-90-Off-White-Product.jpg",
      name: "Air Max 90 OFF-WHITE"
    },
    {
      id: "6def4562-78a7-4032-a113-2d2b1e0381c1",
      sell_price: 12015122,
      buy_price: 33808275,
      total_sold: 159,
      release_date: "1545593027",
      retail_price: 6507508,
      brand: "Adidas",
      gender: "Female",
      status: "Staffs Choose",
      available_size: [40.5, 50.5, 46, 51.5, 49.5, 39, 47.5, 42.5, 41, 43],
      thumbnail:
        "/images/product/adidas/Adidas-Yeezy-Boost-350-V2-Core-Black-Red-Product.jpg",
      name: "Adidas Yeezy Boost 350 V2 Core Black Red"
    }
  ];

  const checkIcon = (
    <svg viewBox="0 0 20 20">
      <path
        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
        style={{ stroke: "white", fill: "white" }}
      ></path>
    </svg>
  );

  let sizeVn = [
    38.5,
    39,
    40,
    40.5,
    41,
    42,
    42.5,
    43,
    44,
    44.5,
    45,
    45.5,
    46,
    47,
    47.5,
    48,
    48.5,
    49.5,
    50.5,
    51.5
  ];

  const sizes = sizeVn.map(size => {
    return (
      <div className="item" key={size}>
        {size}
      </div>
    );
  });

  const product = products.map(product => {
    return (
      <Link href="/product/[id]" as={`/product/${product.id}`} key={product.id}>
        <a className="product-link" data-brand="${data[i]['brand']}">
          <div className="product position-relative">
            <div className="card">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                <p className="price">{product.sell_price}</p>
                <p className="card-text sold">
                  Đã bán {product.total_sold} đôi
                </p>
              </div>
            </div>
            <div className="shadow mx-auto position-absolute" />
          </div>
        </a>
      </Link>
    );
  });
  return (
    <Layout>
      <Head>
        <title>Cửa hàng</title>
        <link rel="stylesheet" type="text/css" href="/css/components/shop/filter-bar.css" />
        <link rel="stylesheet" type="text/css" href="/css/components/shop/product-showing.css" />
        <link rel="stylesheet" type="text/css" href="/css/components/shop/filter-bar-small.css" />
        <link rel="stylesheet" type="text/css" href="/css/except-home-page.css" />
      </Head>
      <main>
        <div className="breadcrumb container">
          <a className="previous-page" href="./index.html">
            Trang chủ
          </a>
          <i className="fas fa-chevron-right arrow" />
          <span className="current-page">Sản phẩm</span>
        </div>
        <div className="shop-content-wrapper container">
          <div className="row">
            <div className="filter-bar col-lg-3">
              <div className="filter-header content">
                <div className="left-side d-flex align-items-center">
                  <i className="fas fa-sliders-h" />
                  <div className="text">Lọc</div>
                </div>
                <button
                  className="clear-filter btn btn-primary"
                  disabled="disabled"
                >
                  Bỏ lọc
                </button>
              </div>
              <div className="break-line" />
              <div className="brand content">
                <div
                  className="title"
                  data-toggle="collapse"
                  href="#brand-collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="brand-collapse"
                >
                  <div className="text">Thương hiệu</div>
                  <i className="fas fa-chevron-up" />
                </div>
                <div
                  className="select-filter collapse show"
                  id="brand-collapse"
                >
                  <div className="item">
                    <Checkbox shape="curve" color="danger" svg={checkIcon}>
                      Nike
                    </Checkbox>
                  </div>
                  <div className="item">
                    <Checkbox shape="curve" color="danger" svg={checkIcon}>
                      Air Jordan
                    </Checkbox>
                  </div>
                  <div className="item">
                    <Checkbox shape="curve" color="danger" svg={checkIcon}>
                      Adidas
                    </Checkbox>
                  </div>
                  <div className="item">
                    <Checkbox shape="curve" color="danger" svg={checkIcon}>
                      Conserve
                    </Checkbox>
                  </div>
                  <div id="see-more-dropdown">
                    <div className="item">
                      <Checkbox shape="curve" color="danger" svg={checkIcon}>
                        Asics
                      </Checkbox>
                    </div>
                    <div className="item">
                      <Checkbox shape="curve" color="danger" svg={checkIcon}>
                        Vans
                      </Checkbox>
                    </div>
                  </div>
                  <div className="see-more" id="see-more-brand">
                    Xem thêm
                  </div>
                </div>
              </div>
              <div className="break-line" />
              <div className="category content">
                <div
                  className="title"
                  data-toggle="collapse"
                  href="#categories-collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="categories-collapse"
                >
                  <div className="text">Danh mục</div>
                  <i className="fas fa-chevron-up" />
                </div>
                <div
                  className="select-filter collapse show"
                  id="categories-collapse"
                >
                  <div className="item">
                    <Checkbox shape="curve" color="danger" svg={checkIcon}>
                      Nam
                    </Checkbox>
                  </div>
                  <div className="item">
                    <Checkbox shape="curve" color="danger" svg={checkIcon}>
                      Nữ
                    </Checkbox>
                  </div>
                  <div className="item">
                    <Checkbox shape="curve" color="danger" svg={checkIcon}>
                      Thiếu niên
                    </Checkbox>
                  </div>
                  <div className="item">
                    <Checkbox shape="curve" color="danger" svg={checkIcon}>
                      Sơ sinh
                    </Checkbox>
                  </div>
                </div>
              </div>
              <div className="break-line" />
              <div className="size content">
                <div
                  className="title"
                  data-toggle="collapse"
                  href="#size-collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="size-collapse"
                >
                  <div className="text">Size</div>
                  <i className="fas fa-chevron-up" />
                </div>
                <div className="select-filter collapse show" id="size-collapse">
                  {sizes}
                </div>
              </div>
              <div className="break-line" />
              <div className="price-range content">
                <div className="title">
                  <div className="text">Khoảng giá</div>
                </div>
                <input
                  className="form-control price-input"
                  id="from-price"
                  type="text"
                  placeholder="Từ"
                />
                <input
                  className="form-control price-input"
                  id="to-price"
                  type="text"
                  placeholder="Đến"
                  pattern="[0-9]"
                />
                <button className="btn btn-primary apply-price red-btn">
                  áp dụng
                </button>
              </div>
              <div className="break-line" />
              <div className="release-date content">
                <div
                  className="title"
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <div className="text">Năm ra mắt</div>
                  <i className="fas fa-chevron-up" />
                </div>
                <div
                  className="select-filter collapse show"
                  id="collapseExample"
                >
                  <div className="date-row">
                    <div className="item">
                      <Checkbox shape="curve" color="danger" svg={checkIcon}>
                        &lt; 2010
                      </Checkbox>
                    </div>
                    <div className="item">
                      <Checkbox shape="curve" color="danger" svg={checkIcon}>
                        2011
                      </Checkbox>
                    </div>
                  </div>
                  <div className="date-row">
                    <div className="item">
                      <Checkbox shape="curve" color="danger" svg={checkIcon}>
                        2012
                      </Checkbox>
                    </div>
                    <div className="item">
                      <Checkbox shape="curve" color="danger" svg={checkIcon}>
                        2013
                      </Checkbox>
                    </div>
                  </div>
                  <div className="date-row">
                    <div className="item">
                      <Checkbox shape="curve" color="danger" svg={checkIcon}>
                        2014
                      </Checkbox>
                    </div>
                    <div className="item">
                      <Checkbox shape="curve" color="danger" svg={checkIcon}>
                        2015
                      </Checkbox>
                    </div>
                  </div>
                  <div className="date-row">
                    <div className="item">
                      <Checkbox shape="curve" color="danger" svg={checkIcon}>
                        2016
                      </Checkbox>
                    </div>
                    <div className="item">
                      <Checkbox shape="curve" color="danger" svg={checkIcon}>
                        2017
                      </Checkbox>
                    </div>
                  </div>
                  <div className="date-row">
                    <div className="item">
                      <Checkbox shape="curve" color="danger" svg={checkIcon}>
                        2018
                      </Checkbox>
                    </div>
                    <div className="item">
                      <Checkbox shape="curve" color="danger" svg={checkIcon}>
                        2019
                      </Checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-showing col-lg-9 col-12">
              <div className="sort">
                <div className="sort-content">
                  Sắp xếp theo <span className="sort-name">Hàng mới</span>
                  <i className="fas fa-chevron-down" />
                  <div className="sort-dropdown">
                    <div className="sort-item new-arrival active">Hàng mới</div>
                    <div className="sort-item best-seller">Bán chạy</div>
                    <div className="sort-item low-to-high-price">
                      Giá thấp đến cao
                    </div>
                    <div className="sort-item high-to-low-price">
                      Giá cao đến thấp
                    </div>
                  </div>
                </div>
                <div
                  className="filter-icon"
                  data-toggle="modal"
                  data-target="#filterModal"
                >
                  <i className="fas fa-filter" />
                </div>
              </div>
              <div className="product-row">{product}</div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="filterModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="filterModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="filterModalLabel">
                  Lọc sản phẩm
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="filter-bar small-size">
                  <div className="brand content">
                    <div
                      className="title"
                      data-toggle="collapse"
                      href="#brand-collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="brand-collapse"
                    >
                      <div className="text">Thương hiệu</div>
                      <i className="fas fa-chevron-up" />
                    </div>
                    <div
                      className="select-filter collapse show"
                      id="brand-collapse"
                    >
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="nike"
                            id="nike"
                            data-id="Nike"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label className="checkbox-label" htmlFor="nike">
                              Nike
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="air-jordan"
                            id="air-jordan"
                            data-id="Air Jordan"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label
                              className="checkbox-label"
                              htmlFor="air-jordan"
                            >
                              Air Jordan
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="adidas"
                            id="adidas"
                            data-id="Adidas"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label className="checkbox-label" htmlFor="adidas">
                              Adidas
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="converse"
                            id="converse"
                            data-id="Converse"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label
                              className="checkbox-label"
                              htmlFor="converse"
                            >
                              Converse
                            </label>
                          </div>
                        </div>
                      </div>
                      <div id="see-more-dropdown">
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name="asics"
                              id="asics"
                              data-id="Asics"
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor="asics">
                                Asics
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name="vans"
                              id="vans"
                              data-id="Vans"
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor="vans">
                                Vans
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="see-more" id="see-more-brand">
                        Xem thêm
                      </div>
                    </div>
                  </div>
                  <div className="break-line" />
                  <div className="category content">
                    <div
                      className="title"
                      data-toggle="collapse"
                      href="#categories-collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="categories-collapse"
                    >
                      <div className="text">Danh mục</div>
                      <i className="fas fa-chevron-up" />
                    </div>
                    <div
                      className="select-filter collapse show"
                      id="categories-collapse"
                    >
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="male"
                            id="male"
                            data-id="Male"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label className="checkbox-label" htmlFor="male">
                              Nam
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="female"
                            id="female"
                            data-id="Female"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label className="checkbox-label" htmlFor="female">
                              Nữ
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="youth"
                            id="youth"
                            data-id="Youth"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label className="checkbox-label" htmlFor="youth">
                              Thiếu niên
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="toddler"
                            id="toddler"
                            data-id="Toddler"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label className="checkbox-label" htmlFor="toddler">
                              Sơ sinh
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="break-line" />
                  <div className="size content">
                    <div
                      className="title"
                      data-toggle="collapse"
                      href="#size-collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="size-collapse"
                    >
                      <div className="text">Size</div>
                      <i className="fas fa-chevron-up" />
                    </div>
                    <div
                      className="select-filter collapse show"
                      id="size-collapse"
                    />
                  </div>
                  <div className="break-line" />
                  <div className="price-range content">
                    <div className="title">
                      <div className="text">Khoảng giá</div>
                    </div>
                    <input
                      className="form-control price-input"
                      id="from-price-small"
                      type="text"
                      placeholder="Từ"
                    />
                    <input
                      className="form-control price-input"
                      id="to-price-small"
                      type="text"
                      placeholder="Đến"
                      pattern="[0-9]"
                    />
                  </div>
                  <div className="break-line" />
                  <div className="release-date content">
                    <div
                      className="title"
                      data-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <div className="text">Năm ra mắt</div>
                      <i className="fas fa-chevron-up" />
                    </div>
                    <div
                      className="select-filter collapse show"
                      id="collapseExample"
                    >
                      <div className="date-row">
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name="under-2010"
                              id="under-2010"
                              data-id={2010}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label
                                className="checkbox-label"
                                htmlFor="under-2010"
                              >
                                &lt; 2010
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2011}
                              id={2011}
                              data-id={2011}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2011}>
                                2011
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="date-row">
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2012}
                              id={2012}
                              data-id={2012}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2012}>
                                2012
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2013}
                              id={2013}
                              data-id={2013}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2013}>
                                2013
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="date-row">
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2014}
                              id={2014}
                              data-id={2014}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2014}>
                                2014
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2015}
                              id={2015}
                              data-id={2015}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2015}>
                                2015
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="date-row">
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2016}
                              id={2016}
                              data-id={2016}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2016}>
                                2016
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2017}
                              id={2017}
                              data-id={2017}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2017}>
                                2017
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="date-row">
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2018}
                              id={2018}
                              data-id={2018}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2018}>
                                2018
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2019}
                              id={2019}
                              data-id={2019}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2019}>
                                2019
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="clear-filter btn btn-primary"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ lineHeight: 24, padding: ".375rem .75rem" }}
                >
                  Bỏ lọc
                </button>
                <button className="btn btn-primary apply-price small red-btn">
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
        `{/* Modals*/}
        <div
          className="modal fade"
          id="signInSignUp"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="signInSignUpLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="signIn-tab"
                      data-toggle="pill"
                      href="#signIn"
                      role="tab"
                      aria-controls="signIn"
                      aria-selected="true"
                    >
                      Đăng nhập
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="signUp-tab"
                      data-toggle="pill"
                      href="#signUp"
                      role="tab"
                      aria-controls="signUp"
                      aria-selected="false"
                    >
                      Đăng ký
                    </a>
                  </li>
                </ul>
              </div>
              <div className="modal-body">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="signIn"
                    role="tabpanel"
                    aria-labelledby="signIn-tab"
                  >
                    <form>
                      <input
                        className="form-control sign-in-email"
                        placeholder="Email"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <input
                        className="form-control sign-in-password"
                        type="password"
                        placeholder="Mật khẩu"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <div className="forgot-password-wrapper" />
                      Quên mật khẩu? Nhấn vào{" "}
                      <span className="text-btn">đây</span>
                      <div className="btn btn-primary red-btn sign-in-btn">
                        Đăng nhập
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="signUp"
                    role="tabpanel"
                    aria-labelledby="signUp-tab"
                  >
                    <form>
                      <input
                        className="form-control sign-up-full-name"
                        placeholder="Họ và tên *"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <input
                        className="form-control sign-up-phone"
                        placeholder="Số điện thoại *"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <input
                        className="form-control sign-up-email"
                        placeholder="Email *"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <input
                        className="form-control sign-up-password"
                        type="password"
                        placeholder="Mật khẩu *"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <input
                        className="form-control sign-up-confirm-password"
                        type="password"
                        placeholder="Xác nhận mật khẩu *"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <div className="privacy-confirm" />
                      Khi bạn nhấn Đăng ký, bạn đã đồng ý thực hiện mọi giao
                      dịch mua bán theo{" "}
                      <span className="text-btn">
                        điều kiện sử dụng và chính sách của OBO Stadium.
                      </span>
                      <div className="btn btn-primary red-btn sign-up-btn">
                        Đăng kí
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="back-to-top" href="#">
          <img src="/images/back-to-top.png" alt="back-to-top" />
        </a>
      </main>

      {/* <style jsx>
        {`
          @import "/css/components/shop/filter-bar.css";
          @import "/css/components/shop/product-showing.css";
          @import "/css/components/shop/filter-bar-small.css";
          @import "/css/except-home-page.css";
        `}
      </style> */}
    </Layout>
  );
};

export default Shop;
