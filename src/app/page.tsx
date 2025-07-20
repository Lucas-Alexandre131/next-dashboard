import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Olá, Next.js!</h1>
      <p>Meu primeiro projeto funcionando 🎉</p>
      <p>
        <Link href="/about">Ir para About</Link>
      </p>
    </main>
  );
}
