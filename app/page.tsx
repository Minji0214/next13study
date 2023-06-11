import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>hello!!!!</h1>
      <Link href={"/"}>link to home page</Link>
    </main>
  );
}
