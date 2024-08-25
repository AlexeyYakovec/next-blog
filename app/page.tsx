import { LatestPosts } from "@/components/shared/latest-posts";
import { MainNav } from "@/components/ui/nav-menu";

import Image from "next/image";

export default function Home() {
   return (
      <>
         <MainNav />
         <main className="">
            <LatestPosts />
         </main>
      </>
   );
}
