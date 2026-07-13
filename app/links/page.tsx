"use client";

import Image from "next/image";

export default function LinksPage() {
  const buttonStyle = {
    width: "100%",
    padding: "20px",
    borderRadius: "16px",
    backgroundColor: "#ffe600",
    color: "#333333",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "600",
    textAlign: "center" as const,
    display: "block",
    boxSizing: "border-box" as const,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#111111",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 20px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Image
            src="/Images/logo.PNG"
            alt="Espetto e Brasa"
            width={180}
            height={180}
            priority
            style={{
              width: "180px",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>

        {/* TÍTULO */}
        <h1
          style={{
            fontSize: "28px",
            margin: "0 0 8px 0",
          }}
        >
          Espetto e Brasa
        </h1>

        <p
          style={{
            fontSize: "18px",
            margin: "0 0 32px 0",
            color: "#dddddd",
          }}
        >
          Escolha uma opção
        </p>

        {/* BOTÕES */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            width: "100%",
          }}
        >
          <a
            href="/"
            style={buttonStyle}
          >
            🌐 Acessar o Site
          </a>

          <a
            href="/#cardapio"
            style={buttonStyle}
          >
            📖 Ver o Cardápio
          </a>

          <a
            href="https://www.instagram.com/espettoebrasaa/"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            📸 Instagram
          </a>
        </div>

        {/* ENDEREÇO */}
        <p
          style={{
            marginTop: "32px",
            color: "#888888",
            fontSize: "14px",
            lineHeight: "1.5",
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