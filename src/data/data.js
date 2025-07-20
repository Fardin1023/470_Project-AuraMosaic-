import { staticimages } from "../utils/images";

const navMenuData = [
  
  {
    id: "nav-menu-2",
    menuLink: "/",
    menuText: "SkinCare",
  },
  {
    id: "nav-menu-3",
    menuLink: "/",
    menuText: "Plants",
  },
  {
    id: "nav-menu-4",
    menuLink: "/",
    menuText: "HandCraft",
  },
  {
    id: "nav-menu-5",
    menuLink: "/",
    menuText: "Books",
  },
];

const sideMenuData = [
  {
    id: "side-menu-1",
    menuLink: "/",
    menuText: "Home",
    iconName: "house",
  },
  {
    id: "side-menu-2",
    menuLink: "/product",
    menuText: "Products",
    iconName: "grid-fill",
  },
  {
    id: "side-menu-3",
    menuLink: "/wishlist",
    menuText: "Wishlist",
    iconName: "heart",
  },
  {
    id: "side-menu-4",
    menuLink: "/account",
    menuText: "My Account",
    iconName: "person-fill",
  },
  {
    id: "side-menu-5",
    menuLink: "/cart",
    menuText: "Cart",
    iconName: "bag-check-fill",
  },
];

const bannerData = [
  {
    id: "banner-1",
    topText: "Skincare",
    titleText: "Holistic Products for Your Cycle",
    buttonLink: "/",
    buttonText: "Shop Now",
    imgSource: staticimages.hero1},

  {
    id: "banner-2",
    topText: "Skincare",
    titleText: "For healthy and beautiful Skin",
    buttonLink: "/",
    buttonText: "Shop Now",
    imgSource: staticimages.hero2,
  },
  {
    id: "banner-3",
    topText: "HandCraft Item",
    titleText: "Woven Calm",
    bottomText: "Handmade Coaster Set",
    buttonLink: "/",
    buttonText: "Shop Now",
    imgSource: staticimages.hero3,
  },
  {
    id: "banner-4",
    topText: "HandCraft Item",
    titleText: "Echoes of Earth",
    bottomText: "Handcrafted Clay Mug",
    buttonLink: "/",
    buttonText: "Shop Now",
    imgSource: staticimages.hero4,
  },
  {
    id: "banner-5",
    topText: "HandCraft Item",
    titleText: "Plant One On Me",
    bottomText: "Hand-Painted Pot",
    buttonLink: "/",
    buttonText: "Shop Now",
    imgSource: staticimages.hero5,
  },
  {
    id: "banner-6",
    topText: "HandCraft Item",
    titleText: "Loop",
    bottomText: "Minimalist Macramé Decor",
    buttonLink: "/",
    buttonText: "Shop Now",
    imgSource: staticimages.hero6,
  },
];

const featuredData = [
  {
    id: "featured-1",
    imgSource: staticimages.sample1,
    topText: "Low Price",
    largeText: "Solace",
    bottomText: "upto 50% off",
    buttonLink: "/",
    buttonText: "Explore Items",
  },
  {
    id: "featured-2",
    imgSource: staticimages.sample2,
    topText: "Beyoung Presents",
    largeText: "Golden Whispers",
    bottomText: "upto 35% off",
    buttonLink: "/",
    buttonText: "Explore Items",
  },
  {
    id: "featured-3",
    imgSource: staticimages.sample3,
    topText:"Skin",
    largeText: "Botaniq Bliss",
    bottomText: "upto 25% off",
    buttonLink: "/",
    buttonText: "Explore Items",
  },
  {
    id: "featured-4",
    imgSource: staticimages.sample4,
    topText: "Presents",
    largeText: "DewDrip",
    bottomText: "upto 60% off",
    buttonLink: "/",
    buttonText: "Explore Items",
  },

];

const newArrivalData = [
  {
    id: "new-arrival-1",
    imgSource: staticimages.new1,
    title: "Terra",
  },
  {
    id: "new-arrival-2",
    imgSource: staticimages.new2,
    title: "Glow-Getter ",
  },
  {
    id: "new-arrival-3",
    imgSource: staticimages.new3,
    title: "Elixiré",
  },
  {
    id: "new-arrival-4",
    imgSource: staticimages.new4,
    title: "Gleamé",
  },
  {
    id: "new-arrival-5",
    imgSource: staticimages.new5,
    title: "Eunoia Beauty",
  },
  {
    id: "new-arrival-6",
    imgSource: staticimages.new6,
    title: "Lüma",
  },
  
];

const products = [
  {
    id: 1,
    imgSource: staticimages.p1,
    title: "Nivea lip care",
    brand: "Nivea",
    price: 225.0,
    category:"skincare",
  },
  {
    id: 2,
    imgSource: staticimages.p2,
    title: "Body Wash",
    brand: "Nivea",
    price: 850.0,
    category:"skincare",
  },
  {
    id: 3,
    imgSource: staticimages.p3,
    title: "Face Wash",
    brand: "Aura",
    price: 700.0,
    category:"skincare",
  },
  {
    id: 4,
    imgSource: staticimages.p4,
    title: "Sleep Mask",
    brand: "Aura",
    price: 450.0,
    category:"skincare",
  },
  {
    id: 5,
    imgSource: staticimages.p5,
    title: "Cleanser ",
    brand: "Aura",
    price: 300.0,
    category:"skincare",
  },
  {
    id: 6,
    imgSource: staticimages.p6,
    title: "Woven Calm",
    brand: "Hand-Made",
    price: 230.0,
    category:"handcraft",
  },
  {
    id: 7,
    imgSource: staticimages.p7,
    title: "Bronze Rickshwa",
    brand: "Hand-Made",
    price: 500.0,
    category:"handcraft",
  },
  {
    id: 8,
    imgSource: staticimages.p8,
    title: "Metal Rickshaw",
    brand: "Hand-Made",
    price: 650.0,
    category:"handcraft",
  },
  {
    id: 9,
    imgSource: staticimages.p9,
    title: "Auto Rickshaw",
    brand: "Hand-Made",
    price: 485.0,
    category:"handcraft",
  },
  {
    id: 10,
    imgSource: staticimages.p10,
    title: "Metal Piece",
    brand: "",
    price: 123.0,
    category:"handcraft",
  },
  {
    id: 11,
    imgSource: staticimages.p11,
    title: "Plant",
    brand: "Aura-Nursery",
    price: 723.0,
    category:"plants",
  },
  {
    id: 12,
    imgSource: staticimages.p12,
    title: "Plant2",
    brand: "Aura-Nursery",
    price: 523.0,
    category:"plants",
  },
  {
    id: 13,
    imgSource: staticimages.p13,
    title: "Plant-3",
    brand: "Aura Nursery",
    price: 883.0,
    category:"plants",
  },
  {
    id: 14,
    imgSource: staticimages.p14,
    title: "Bean tree",
    brand: "Aura Nursery",
    price: 645.0,
    category:"plants",
  
  },
  {
    id: 15,
    imgSource: staticimages.p15,
    title: "Cactus",
    brand: "Aura-Nursery",
    price: 883.0,
    category:"plants",
  },
 ];

const skincareCatalog = products.filter(product => product.category === "skincare");

const handcraftCatalog = products.filter(product => product.category === "handcraft");

const plantsCatalog = products.filter(product => product.category === "plants");




const footerData = [
  {
    id: "f_need_help",
    title: "Need Help",
    links: [
      { text: "Contact Us", url: "/contact" },
      { text: "Track Order", url: "/track_order" },
      { text: "Returns & Refunds", url: "/returns_refunds" },
      { text: "FAQ's", url: "/faqs" },
      { text: "Career", url: "/career" },
    ],
  },
  {
    id: "f_company",
    title: "Company",
    links: [
      { text: "About Us", url: "/contact" },
      { text: "Achats Blog", url: "/blog" },
      { text: "Achatsian", url: "/achatsian" },
      { text: "Collaboration", url: "/collaboration" },
      { text: "Media", url: "/media" },
    ],
  },
  {
    id: "f_more_info",
    title: "More info",
    links: [
      { text: "Terms and conditions", url: "/tac" },
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Shipping Policy", url: "/shipping" },
      { text: "Sitemap", url: "/sitemap" },
    ],
  },
  {
    id: "f_location",
    title: "Location",
    lists: [
      { text: "aparupadepartmental@gmail.com" },
      { text: "Planet SR,Kandirpar" },
      { text: "Cumilla, Bangladesh" },
      { text: "Phone: +01xxxxxxxx" },
    ],
  },
];

const cartItems = [
  {
    id: "C001",
    title: "Blue Flower Print Crop Top",
    color: "Yellow",
    size: "M",
    price: 29.0,
    quantity: 2,
    shipping: 0.0,
    imgSource: staticimages.cart1,
  },
  {
    id: "C002",
    title: "Blue Flower Print Crop Top",
    color: "Blue",
    size: "XL",
    price: 199.0,
    quantity: 5,
    shipping: 0.0,
    imgSource: staticimages.cart2,
  },
  {
    id: "C003",
    title: "Blue Flower Print Crop Top",
    color: "Yellow",
    size: "M",
    price: 123.0,
    quantity: 1,
    shipping: 5.0,
    imgSource: staticimages.cart3,
  },
];

const ProductFilterList = [
  {
    id: "prod_filter_1",
    title: "Tops",
  },
  {
    id: "prod_filter_2",
    title: "Printed T-shirts",
  },
  {
    id: "prod_filter_3",
    title: "Plain T-shirts",
  },
  {
    id: "prod_filter_4",
    title: "Kurti",
  },
  {
    id: "prod_filter_5",
    title: "Boxers",
  },
  {
    id: "prod_filter_6",
    title: "Full sleeve T-shirts",
  },
  {
    id: "prod_filter_7",
    title: "Joggers",
  },
  {
    id: "prod_filter_8",
    title: "Payjamas",
  },
  {
    id: "prod_filter_9",
    title: "Jeans",
  },
];

const StyleFilterList = [
  {
    id: "style_filter_1",
    title: "Classic",
  },
  {
    id: "style_filter_2",
    title: "Casual",
  },
  {
    id: "style_filter_3",
    title: "Business",
  },
  {
    id: "style_filter_4",
    title: "Sport",
  },
  {
    id: "style_filter_5",
    title: "Elegant",
  },
  {
    id: "style_filter_6",
    title: "Formal (evening)",
  },
];

const pricingData = [
  {
    id: "pricing_1",
    name: "Pick Any 4- Womens Plain T-shirt Combo",
    price: 19,
  },
  {
    id: "pricing_2",
    name: "Pick Any 4- Plain Womens Boxer Combo",
    price: 18,
  },
  {
    id: "pricing_3",
    name: "Multicolor Checkered Long Casual Shirts for Women",
    price: 16.7,
  },
  {
    id: "pricing_4",
    name: "Pick Any 4 - Women Plain Full Sleeve T-shirt Combo",
    price: 12,
  },
  {
    id: "pricing_5",
    name: "Pick Any 2: Plain Boxy Casual Shirts for Women Combo",
    price: 9.8,
  },
  {
    id: "pricing_6",
    name: "Jade Black Narrow Cut Flexible Women Jeggings",
    price: 15,
  },
  {
    id: "pricing_7",
    name: "Mustard-yellow Solid Straight-Fit Women Pant",
    price: 6.7,
  },
  {
    id: "pricing_8",
    name: "Pista Green Solid Boxy Casual Shirts for Women",
    price: 9,
  },
];

const servicesData = [
  {
    id: "service_1",
    icon: staticimages.card_icon,
    text: "Secure Payment",
  },
  {
    id: "service_2",
    icon: staticimages.size_icon,
    text: "Size & fit",
  },
  {
    id: "service_3",
    icon: staticimages.shipping_icon,
    text: "Free Shipping",
  },
  {
    id: "service_4",
    icon: staticimages.return_icon,
    text: "Free Shipping & Returns",
  },
];

const product_one = {
  id: "product_01",
  title: "Raven Hoodie With Black Colored Design",
  previewImages: [
    {
      id: "preview1",
      imgSource: staticimages.preview1,
    },
    {
      id: "preview2",
      imgSource: staticimages.preview2,
    },
    {
      id: "preview3",
      imgSource: staticimages.preview3,
    },
    {
      id: "preview4",
      imgSource: staticimages.preview1,
    },
    {
      id: "preview5",
      imgSource: staticimages.preview2,
    },
  ],
  rating: 3.5,
  comments_count: 120,
  sizes: ["xs", "s", "m", "l", "xl"],
  colors: ["#3C4242", "#EDD146", "#EB84B0", "#9C1F35"],
  price: 63.0,
};

const productDescriptionTabHeads = [
  {
    id: "tab-description",
    tabHead: "tabDescription",
    tabText: "Description",
    badgeValue: null,
    badgeColor: "",
  },
  {
    id: "tab-comments",
    tabHead: "tabComments",
    tabText: "User Comments",
    badgeValue: 10,
    badgeColor: "purple",
  },
  {
    id: "tab-QNA",
    tabHead: "tabQNA",
    tabText: "Question & Answer",
    badgeValue: 4,
    badgeColor: "outerspace",
  },
];


const wishlistData = [
  {
    id: "wishlist_1",
    name: "Blue Flower Print Crop Top",
    color: "yellow",
    quantity: 1,
    price: 29,
    imgSource: staticimages.wishitem1,
  },
  {
    id: "wishlist_2",
    name: "Yellow Flower Print Dress",
    color: "yellow",
    quantity: 4,
    price: 40,
    imgSource: staticimages.wishitem2,
  },
  {
    id: "wishlist_3",
    name: "White Hoodie long sleeve",
    color: "white",
    quantity: 1,
    price: 123,
    imgSource: staticimages.wishitem3,
  },
  {
    id: "wishlist_4",
    name: "Brown men’s long sleeve T-shirt",
    color: "brown",
    quantity: 6,
    price: 42,
    imgSource: staticimages.wishitem4,
  },
];

const recentViewedData = products.slice(0, 4);

const cardsData = [
  {
    id: "card_1",
    imgSource: staticimages.paypal,
  },
  {
    id: "card_2",
    imgSource: staticimages.paypass,
  },
  {
    id: "card_3",
    imgSource: staticimages.googlePay,
  },
  {
    id: "card_4",
    imgSource: staticimages.visa,
  },
];

const socialLinksData = [
  {
    id: "social_link_1",
    site_name: "facebook",
    site_icon: "bi bi-facebook",
    site_url: "www.facbook.com",
  },
  {
    id: "social_link_2",
    site_name: "instagram",
    site_icon: "bi bi-instagram",
    site_url: "www.instagram.com",
  },
  {
    id: "social_link_3",
    site_name: "twitter",
    site_icon: "bi bi-twitter",
    site_url: "www.twitter.com",
  },
  {
    id: "social_link_4",
    site_name: "linkedin",
    site_icon: "bi bi-linkedin",
    site_url: "www.linkedin.com",
  },
];

export {
  products,
  cartItems,
  sideMenuData,
  navMenuData,
  bannerData,
  featuredData,
  skincareCatalog,
  handcraftCatalog,
  plantsCatalog,
  newArrivalData,
  footerData,
  ProductFilterList,
  StyleFilterList,
  pricingData,
  servicesData,
  product_one,
  productDescriptionTabHeads,
  wishlistData,
  recentViewedData,
  cardsData,
  socialLinksData,
};
