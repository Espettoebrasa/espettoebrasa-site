import Link from "next/link";

export default function LinksPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111111",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          textAlign: "center",
        }}
      >
        <img
          src="/images/logo.PNG"
          alt="Espetto e Brasa"
          style={{
            width: "150px",
            maxWidth: "60%",
            display: "block",
            margin: "0 auto 20px auto",
          }}
        />

        <h1
          style={{
            fontSize: "28px",
            marginBottom: "8px",
          }}
        >
          Espetto e Brasa
        </h1>

        <p
          style={{
            color: "#cccccc",
            marginBottom: "32px",
          }}
        >
          Escolha uma opção
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Link
            href="/"
            style={{
              background: "#ffd700",
              color: "#111111",
              padding: "18px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            🌐 Acessar o Site
          </Link>

          <Link
            href="/#cardapio"
            style={{
              background: "#ffd700",
              color: "#111111",
              padding: "18px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            📖 Ver o Cardápio
          </Link>

          <a
            href="https://www.instagram.com/espettoebrasaa/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#ffd700",
              color: "#111111",
              padding: "18px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            📸 Instagram
          </a>
        </div>

        <p
          style={{
            marginTop: "32px",
            color: "#888888",
            fontSize: "14px",
          }}
        >
          Rua Pero de Góis, 118
          <br />
          Campos dos Goytacazes - RJ
        </p>
      </div>
    </main>
  );
}