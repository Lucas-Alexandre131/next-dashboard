import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>Teste Component</h1>
      <p>This is a simple test component.</p>
      <Link href="/">Voltar para Home</Link>
    </div>
  );
}