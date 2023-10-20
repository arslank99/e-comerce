import Comp1 from "./components/images/company/comp-1.png";
import Comp2 from "./components/images/company/comp-2.png";
import Comp3 from "./components/images/company/comp-3.png";
import Comp4 from "./components/images/company/comp-4.png";
import Comp5 from "./components/images/company/comp-5.png";
import Comp6 from "./components/images/company/comp-6.png";
import Comp7 from "./components/images/company/comp-7.png";
import Comp8 from "./components/images/company/comp-8.png";
import Comp9 from "./components/images/company/comp-9.png";
import banner1 from "./components/images/banner-5.jpg";
import banner2 from "./components/images/banner-6.jpg";

import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";

import Instagram1 from "./components/images/instagram/1.jpg";
import Instagram2 from "./components/images/instagram/2.jpg";
import Instagram3 from "./components/images/instagram/3.jpg";
import Instagram4 from "./components/images/instagram/4.jpg";
import Instagram5 from "./components/images/instagram/5.jpg";
import Instagram6 from "./components/images/instagram/6.jpg";

import Member1 from "./components/images/member-1.jpg";
import Member2 from "./components/images/member-2.jpg";
import Member3 from "./components/images/member-3.jpg";

const company = [
  {
    img: Comp1,
  },
  {
    img: Comp2,
  },
  {
    img: Comp3,
  },
  {
    img: Comp4,
  },
  {
    img: Comp5,
  },
  {
    img: Comp6,
  },
  {
    img: Comp7,
  },
  {
    img: Comp8,
  },
  {
    img: Comp9,
  },
];

const banner = [
  {
    img: banner1,
    title: "Women's",
  },
  {
    img: banner2,
    title: "Men's",
  },
];

const card = [
  {
    title: "PAYMENT & DELIVERY",
    paragraph: "Free shipping for orders over $50",
    icon: faRocket,
  },
  {
    title: "RETURN & REFUND",
    paragraph: "Free 100% money back guarantee",
    icon: faSpinner,
  },
  {
    title: "QUALITY SUPPORT",
    paragraph: "Alway online feedback 24/7",
    icon: faLifeRing,
  },
];

const instagram = [
  {
    id: 1,
    img: Instagram1,
  },
  {
    id: 2,
    img: Instagram2,
  },
  {
    id: 3,
    img: Instagram3,
  },
  {
    id: 4,
    img: Instagram4,
  },
  {
    id: 5,
    img: Instagram5,
  },
  {
    id: 6,
    img: Instagram6,
  },
];

const member = [
  {
    id: 1,
    img: Member1,
    name: "Samanta Grey",
    profession: "Founder & CEO",
  },
  {
    id: 2,
    img: Member2,
    name: "Bruce Sutton",
    profession: "Sales & Marketing Manager",
  },
  {
    id: 3,
    img: Member3,
    name: "Janet Joy",
    profession: "Product Manager",
  },
];

export { company, banner, card, instagram, member };
