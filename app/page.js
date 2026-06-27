import Image from "next/image";
import Hero from "./component/Hero";
import Language from "./component/Language";
import Karsilastirma from "./component/Karsilastirma";
import Contact from "./component/Contact";
import Features from "./component/Features";
import Mobile from "./component/Mobile";
import Platform from "./component/Platform";
import Users from "./component/Users";
import SSS from "./component/SSS";
import Images from "./component/Images";

export default function Home() {
  return (
    <div className="w-full pb-32">
        <Hero />
        <Language />
        <Karsilastirma />
        <Contact />
        <Features />
        <Images />
        <Mobile />
        <Platform />
        <Users />
        <SSS />
    </div>
  );
}
