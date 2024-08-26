import { TopCategories, LatestPosts, PopularPosts } from "@/components/shared";
import { Container, MainNav, Title } from "@/components/ui/index";

import Image from "next/image";

export default function Home() {
   return (
      <Container>
         <MainNav />
         <main className="flex flex-col justify-evenly mt-16 md:flex-row">
            <section>
               <LatestPosts />
            </section>

            <div className="h-screen">
               <section>
                  <div>
                     <Title title="TOP CATEGORIES" />
                     <TopCategories />
                  </div>
               </section>

               <section className="mt-10 sticky top-0">
                  <Title title="POPULAR POSTS" />
                  <PopularPosts />
               </section>
            </div>
         </main>
      </Container>
   );
}
