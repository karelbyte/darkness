import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white flex items-center justify-center relative"
      style={{
        backgroundImage: "url(/images/foresti.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center space-y-8 relative z-10">
        <h1
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600"
          style={{
            fontFamily: "coralines",
            lineHeight: "1.6",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          Bosque Oscuro
        </h1>
        <p className="text-xl text-black max-w-2xl mx-auto">
          Un juego de aventura de texto interactivo donde cada decisión cuenta.
          Explora locaciones misteriosas, interactúa con personajes únicos y
          descubre los secretos ocultos.
        </p>
        <div className="space-y-4">
          <Link
            href="/game"
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Comenzar Aventura
          </Link>
          <div className="text-sm text-gray-700">
            <p>
              Comandos básicos: ir [dirección], tomar [objeto], usar [objeto],
              hablar [personaje]
            </p>
            <p>Tu progreso se guarda automáticamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
