import Link from "next/link";

export default function NotFound() {
   return (
      <section className="grid place-content-center h-screen">
         <h1 className="mb-8 text-2xl font-semibold tracking-normal">
            404 - Page Not Found
         </h1>
         <p className="mb-4">
            This page you are looking for could not be exist.
         </p>
         <Link href="/" className="hover:text-blue-400 transition-all">
            Go Home
         </Link>
      </section>
   );
}
