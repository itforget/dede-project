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
        <div className="p-1 rounded-full bg-sky-600 relative mt-20 mb-28">
          <Image
            className="rounded-full"
            src="/Logo.jpg"
            alt="Logo"
            width={600}
            height={600}
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-bold">
            Filhas da
            <span className="text-green-700"> Terra</span>
          </h2>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center mt-3 border-t-[2px] border-sky-600">
        <div className="flex flex-row gap-16 my-16 items-center">
          <div className="flex flex-col">
            <h3 className="text-5xl font-extrabold text-sky-600 text-center">
              O Nosso <br /> Impacto
            </h3>
            <p className="text-xl text-sky-800 max-w-96 text-center">
              Realizamos{" "}
              <span className="font-bold">
                pesquisas, oficinas, palestras e rodas de conversa
              </span>{" "}
              acerca de temáticas como:{" "}
              <span className="font-bold">
                meio ambiente, soberania alimentar, hortas comunitárias urbanas
              </span>{" "}
              sem uso de agrotóxicos,{" "}
              <span className="font-bold">
                cultura negra, indígena e quilombola
              </span>
              , saúde, reutilização de materiais recicláveis, autocuidado,{" "}
              <span className="font-bold">
                alimentação saudável, arte, cultura e esporte
              </span>
              , sempre respeitando a diversidade e pluralidade coletiva e
              individual.
            </p>
          </div>
          <Image
            className="rounded-2xl"
            src="/foto.jpg"
            alt="Logo"
            width={600}
            height={600}
          />
        </div>
      </div>    </main>
  );
}
