import styles from "../../app/page.module.css";
import Link from "next/link";
import nextConfig from "@/next.config.mjs";
export default function ProductsList(){
    return <div>
        <main className={styles.main}>
            <h2 >商品一覧</h2>
            <ul>
                <li>
                    <Link  href="/products/smartphone">スマートフォン</Link>
                </li>
                <li>
                    <Link  href="/products/pc">パソコン</Link>
                </li>
                <li>
                    <Link  href="/products/headphone">ヘッドフォン</Link>
                </li>
            </ul>
        </main>
    </div>;
}

