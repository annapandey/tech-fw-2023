import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/navbar/navbar.module.scss";

const nav = [
  { link: "Home", href: "" },
  { link: "Workshops", href: "workshop" },
  { link: "Resources", href: "resources" },
];

const dropDown_items = [1, 2, 3, 4, 5];
export default function Navbar() {
  const [active, setActive] = useState(false);

  const dropDown = () => {
    return (
      <ul className={styles.dropDown}>
        {dropDown_items.map((numWeek, index) => (
          <li key={index}>Week {numWeek}</li>
        ))}
      </ul> //TODO: ADD LINKS HEREEE :)))
    );
  };

  return (
    <nav className={styles.navbar}>
      <Link href="https://includedavis.com/about" target="_blank">
        <Image
          src="/Vector.svg"
          width={40}
          height={40}
          sizes={"{max-width: 1048px} 30px, 40px"}
          alt="logo"
          className={styles.logo}
        />
      </Link>

      <ul className={styles.links}>
        {nav.map((item, index) => {
          return (
            <li key={index}>
              {item.link === "Workshops" && dropDown()}
              <Link
                href={`/${item.href.toLowerCase()}`}
                className={styles.link}
              >
                {item.link}
              </Link>
            </li>
          );
        })}
      </ul>

      <section className={styles.contact}>
        <Link href="/contact">
          <button className={styles.btn}>Contact Us</button>
        </Link>
      </section>
    </nav>
  );
}
