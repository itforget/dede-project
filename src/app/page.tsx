import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-orange-100 via-orange-100 to-sky-700">
      <header className="flex items-center justify-between mx-12">
        <div className="flex items-center">
          <Image src="/logoSemFundo.png" alt="Logo" width={100} height={100} />
          <h1 className="font-extrabold text-xl text-sky-600">
            Filhas <br /> da Terra
          </h1>
        </div>
        <nav className="flex gap-32 flex-1 justify-center text-2xl font-bold text-sky-600">
          <Link href="/">Inicio</Link>
          <Link href="/">Sobre</Link>
          <Link href="/">Contato</Link>
          <Link href="/">Portifolio</Link>
        </nav>
      </header>
      <div className="flex flex-1 justify-center items-center">
        <Image
          className="rounded-xl"
          src="/Logo.jpg"
          alt="Logo"
          width={400}
          height={400}
        />
      </div>
    </main>
  );
}
