import { Inter } from "@next/font/google";
import styles from "./page.module.css";

import Game from "@/components/Game";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Game />
    </main>
  );
}
