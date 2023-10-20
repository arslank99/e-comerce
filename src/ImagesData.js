const products = [
  {
    id: 95,
    name: "Loafers",
    slug: "loafers",
    price: 67,
    sale_price: null,
    review: 2,
    ratings: 3,
    until: null,
    stock: 103,
    top: null,
    featured: null,
    new: true,
    image:
      "https://cdn.derimarket.net/upload/images/PegiaHakikiSuetErkekLoaferAyakkabi500901_16919909206902_de.jpg",
    mouseOverImage:
      "https://cdn.derimarket.net/upload/images/PegiaHakikiSuetErkekLoaferAyakkabi500901_16953700953797_de.jpg",
    category: [
      {
        name: "Women",
        slug: "women",
      },
      {
        name: "Shoes",
        slug: "shoes",
      },
      {
        name: "Men",
        slug: "men",
      },
    ],
  },
  {
    id: 96,
    name: "Printed Sweatshirt",
    slug: "printed-sweatshirt",
    price: 12.99,
    sale_price: 7.99,
    review: 2,
    ratings: 1,
    until: null,
    stock: 100,
    top: false,
    featured: true,
    new: null,
    image:
      "https://d-themes.com/react_asset_api/molla/uploads/product_1_1_e44ea6b001.jpg",
    mouseOverImage:
      "https://d-themes.com/react_asset_api/molla/uploads/product_1_2_300x408_9e213baa0a.jpg",
    category: [
      {
        name: "Women",
        slug: "women",
      },
      {
        name: "Clothing",
        slug: "clothing",
      },
    ],
  },
  {
    id: 97,
    name: "Black Jeans",
    slug: "black-jeans",
    price: 14.99,
    sale_price: 9.99,
    review: 2,
    ratings: 2,
    until: "2022-01-01",
    stock: 100,
    top: null,
    featured: true,
    new: true,
    image:
      "https://d-themes.com/react_asset_api/molla/uploads/product_2_1_7ee61ecd14.jpg",
    mouseOverImage:
      "https://d-themes.com/react_asset_api/molla/uploads/product_2_2_300x408_edddfecb50.jpg",
    category: [
      {
        name: "Women",
        slug: "women",
      },
      {
        name: "Men",
        slug: "men",
      },
      {
        name: "Clothing",
        slug: "clothing",
      },
    ],
  },
  {
    id: 99,
    name: "Biker Jacket",
    slug: "biker-jacket",
    price: 23.99,
    sale_price: null,
    review: 2,
    ratings: 4,
    until: null,
    stock: 203,
    top: null,
    featured: null,
    new: null,
    image:
      "https://d-themes.com/react_asset_api/molla/uploads/product_4_1_ef8847a107.jpg",
    mouseOverImage:
      "https://d-themes.com/react_asset_api/molla/uploads/product_4_2_300x408_5c1ff41318.jpg",
    category: [
      {
        name: "Women",
        slug: "women",
      },
      {
        name: "Men",
        slug: "men",
      },
      {
        name: "Clothing",
        slug: "clothing",
      },
    ],
  },
  {
    id: 101,
    name: "Denim Jacket",
    slug: "denim-jacket",
    price: 19.99,
    sale_price: null,
    review: 2,
    ratings: 5,
    until: null,
    stock: 100,
    top: true,
    featured: true,
    new: null,
    image:
      "https://d-themes.com/react_asset_api/molla/uploads/product_7_2_d00ce48601.jpg",
    mouseOverImage:
      "https://d-themes.com/react_asset_api/molla/uploads/product_7_3_300x408_2e98eaeb9f.jpg",
    category: [
      {
        name: "Women",
        slug: "women",
      },
      {
        name: "Clothing",
        slug: "clothing",
      },
      {
        name: "Men",
        slug: "men",
      },
    ],
  },
  {
    id: 102,
    name: "Linen-blend paper bag trousers",
    slug: "linen-blend-paper-bag-trousers",
    price: 15.99,
    sale_price: null,
    review: 2,
    ratings: 5,
    until: null,
    stock: 100,
    top: null,
    featured: null,
    new: null,
    image:
      "https://d-themes.com/react_asset_api/molla/uploads/product_8_1_72e07f48f1.jpg",
    mouseOverImage:
      "https://d-themes.com/react_asset_api/molla/uploads/product_8_2_300x408_fd68021adc.jpg",
    category: [
      {
        name: "Clothing",
        slug: "clothing",
      },
      {
        name: "Women",
        slug: "women",
      },
    ],
  },

  {
    id: 104,
    name: "Sandals",
    slug: "sandals",
    price: 17.99,
    sale_price: null,
    review: 2,
    ratings: 0,
    until: null,
    stock: 0,
    top: true,
    featured: null,
    new: null,
    image:
      "https://d-themes.com/react_asset_api/molla/uploads/5_big_dff8095b6d.jpg",
    mouseOverImage:
      "https://d-themes.com/react_asset_api/molla/uploads/7_big_037aa72fde.jpg",
    category: [
      {
        name: "Shoes",
        slug: "shoes",
      },
      {
        name: "Women",
        slug: "women",
      },
    ],
  },
  {
    id: 105,
    name: "Short wrap dress",
    slug: "short-wrap-dress",
    price: 14.99,
    sale_price: null,
    review: 2,
    ratings: 0,
    until: null,
    stock: 100,
    top: true,
    featured: null,
    new: null,
    image:
      "https://d-themes.com/react_asset_api/molla/uploads/product_5_2_092ad839ae.jpg",
    mouseOverImage:
      "https://d-themes.com/react_asset_api/molla/uploads/product_5_1_b6fccd3735.jpg",
    category: [
      {
        name: "Women",
        slug: "women",
      },
      {
        name: "Clothing",
        slug: "clothing",
      },
    ],
  },
  {
    id: 106,
    name: "Fashion Sandals",
    slug: "fashion-sandals",
    price: 24.99,
    sale_price: null,
    review: 2,
    ratings: 0,
    until: null,
    stock: 100,
    top: true,
    featured: true,
    new: true,
    image:
      "https://d-themes.com/react_asset_api/molla/uploads/product_12_1_9844c58035.jpg",
    mouseOverImage:
      "https://d-themes.com/react_asset_api/molla/uploads/product_12_2_300x408_040de8318b.jpg",
    category: [
      {
        name: "Shoes",
        slug: "shoes",
      },
      {
        name: "Women",
        slug: "women",
      },
    ],
  },
];

export { products };
