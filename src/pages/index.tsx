import Image from "next/image";
import styles from "@/styles/Home.module.css";
import vase from "../../public/vase.png";
import purple_orchid from "../../public/purple_orchid.png";

const picArray = [
  {
    src: vase,
    alt: "Vase Image",
    link: "/acrylics",
  },
  {
    src: purple_orchid,
    alt: "Purple Orchid Image",
    link: "/watercolors",
  },
];

export default function Home() {
  return (
    <div className={styles.gallery}>
      {picArray.map((pic, index) => (
        <a key={index} href={pic.link}>
          <Image
            className={styles.picture}
            src={pic.src}
            alt={pic.alt}
            width={200}
            priority
          />
        </a>
      ))}
    </div>
  );
}
