
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

import Phone from "@/components/Phone";

const pages = [
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "OurWork",
    href: "#our-work",
  },
  {
    name: "News",
    href: "#news",
  },
  {
    name: "Contact",
    href: "#contact",
  },
]

const services = [
  {
    name: "Kitchen",
    href: "",
  },
  {
    name: "Living Area",
    href: "",
  },
  {
    name: "Bathroom",
    href: "",
  },
  {
    name: "Bedroom",
    href: "",
  },
]

const contacts = [
  <Link key={0}
    aria-label="company address"
    href="https://maps.app.goo.gl/V5FUdBbudLuooqBn6"
    target="_blank"
    className="font-medium text-[17px] text-black/75
    hover:text-orange-700/40 hover:cursor-pointer"
  >
    123 Maple Street, Suite 200, San Francisco, California 94105
  </Link>,
  <Link key={1}
    aria-label="email"
    href="mailto:info@interno-design.com"
    className="font-medium text-[17px] text-black/75
    hover:text-orange-700/40 hover:cursor-pointer"
  >
    info@interno-design.com
  </Link>,
  <Link key={2}
    aria-label="phone number"
    href="tel:+1123456789"
    className="font-medium text-[16px] text-black/75
    hover:text-orange-700/40 hover:cursor-pointer"
  >
    +1 (123) 456-789
  </Link>
];

export default function Footer() {
  return (
    <footer className="container mx-auto
      mt-[80px] xl:mt-[110px] mb-[130px]
      flex flex-col xl:flex-row
      text-center xl:text-start text-lg
      gap-12 xl:gap-4"
    >
      <article className="w-full xl:w-[33%]
        flex flex-col items-center xl:items-start gap-8"
      >
        <img src="/assets/logo.svg" alt="Interno" className="h-[50px]" />
        <p>At Interno, we believe in creating spaces that inspire and enhance your quality of life.</p>
        <div className="flex gap-12 text-[22px]">
          <Link href="https://www.facebook.com/" target="_blank">
            <FaFacebookF className="hover:text-orange-700/40 hover:cursor-pointer" />
          </Link>
          <Link href="https://x.com/Cxx_mlr" target="_blank">
            <FaTwitter className="hover:text-orange-700/40 hover:cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/santiago-yonathan-papiernik-caicedo-7502342b2/" target="_blank">
            <FaLinkedinIn className="hover:text-orange-700/40 hover:cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <RiInstagramFill className="hover:text-orange-700/40 hover:cursor-pointer" />
          </Link>
        </div>
      </article>

      <div className="w-full xl:w-[67%]
        grid grid-cols-2 xl:grid-cols-3
        gap-12"
      >
        <article>
          <h3 className="font-DM_Serif_Display text-black/80 text-xl mb-6">Pages</h3>
          <ul className="flex flex-col items-center xl:items-start gap-6">
            {pages.map((page, index) => {
              return (
                <li key={index}>
                  <Link
                    href={page.href}
                    className="max-w-[2500px] hover:text-orange-700/40"
                  >
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>

        <article>
          <h3 className="font-DM_Serif_Display text-black/80 text-xl mb-6">Services</h3>
          <ul className="flex flex-col items-center xl:items-start gap-6">
            {services.map((service, index) => {
              return (
                <li key={index}>
                  <Link scroll={false}
                    href={service.href}
                    className="max-w-[250px] hover:text-orange-700/40"
                  >
                    {service.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </article>

        <article className="col-span-2 xl:col-span-1">
          <h3 className="font-DM_Serif_Display text-black/80 text-xl mb-6">Contact</h3>
          <ul className="flex flex-col items-center xl:items-start gap-6">
            {contacts.map((contact, index) => {
              return (
                <li key={index}>
                  <span className="max-w-[250px] text-wrap block">{contact}</span>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </footer>
  );
}