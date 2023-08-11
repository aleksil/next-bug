import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { withApp } from "@/lib/withApp";

const inter = Inter({ subsets: ["latin"] });

export const Home = () => {
  const router = useRouter();
  return (
    <main className="p-2">
      Here is a <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href="/stuff/test">link</Link>
      <p>Locale: {router.locale}</p>
    </main>
  );
}

export default withApp(Home);
