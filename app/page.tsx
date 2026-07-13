"use client"
import React from "react";
import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";
const destaques = [
  {
    nome: "Picanha na Chapa",
    imagem: "/Images/picanha.PNG",
  },
  {
    nome: "Parmegiana",
    imagem: "/Images/parmegiana-nova.png",
  },
  {
    nome: "Carne Seca Cremosa",
    imagem: "/Images/carne-seca-nova.png",
  },
  {
    nome: "Frango Crocante",
    imagem: "/Images/Frango-crocante-novo.png",
  },
];

const galeria = [
  "/Images/Ambiente-interno.jpg",
  "/Images/ambiente-externo.jpg",
  "/Images/equipe.jpg",
];
const pratos = [
  {
    nome: "Picanha na Chapa",
    preco: "R$ 149,90",
    imagem: "/Images/picanha.PNG",
  },
  {
    nome: "Carne Seca Cremosa",
    preco: "R$ 119,90",
    imagem: "/Images/carne.seca.cremosa.PNG",
  },
  {
    nome: "Parmegiana de Filé",
    preco: "R$ 89,90",
    imagem: "/Images/parmegiana.PNG",
  },
  {
    nome: "Frango Crocante",
    preco: "R$ 82,90",
    imagem: "/Images/Frango.crocante.PNG",
  },
];

export default function Home() {
  const [menuAberto, setMenuAberto] = React.useState(false);
return (
    <main className="bg-[#111] text-white min-h-screen">
  {/* MENU DE NAVEGAÇÃO */}
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <a href="#inicio" aria-label="Ir para o início">
            <Image
              src="/Images/logo.PNG"
              alt="Logo Espetto e Brasa"
              width={80}
              height={80}
            />
          </a>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex gap-8 text-white font-semibold">
            <a href="#inicio" className="hover:text-yellow-400">
              Início
            </a>

            <a href="#quem-somos" className="hover:text-yellow-400">
              Quem Somos
            </a>

            <a href="#ambiente" className="hover:text-yellow-400">
              Nosso Ambiente
            </a>

            <a href="#cardapio" className="hover:text-yellow-400">
              Cardápio
            </a>

            <a href="#horarios" className="hover:text-yellow-400">
              Horários
            </a>

            <a href="#localizacao" className="hover:text-yellow-400">
              Localização
            </a>
          </div>

          {/* INSTAGRAM DESKTOP */}
          <a
            href="https://instagram.com/espettoebrasaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-300"
          >
            Instagram
          </a>

          {/* BOTÃO DO MENU MOBILE */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden bg-yellow-400 text-black p-3 rounded-full"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          >
            {menuAberto ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MENU MOBILE */}
        {menuAberto && (
          <div className="md:hidden bg-black/95 border-t border-yellow-400/30">
            <div className="flex flex-col px-6 py-6 text-lg font-semibold">

              <a
                href="#inicio"
                onClick={() => setMenuAberto(false)}
                className="py-3 border-b border-white/10 hover:text-yellow-400"
              >
                Início
              </a>

              <a
                href="#quem-somos"
                onClick={() => setMenuAberto(false)}
                className="py-3 border-b border-white/10 hover:text-yellow-400"
              >
                Quem Somos
              </a>

              <a
                href="#ambiente"
                onClick={() => setMenuAberto(false)}
                className="py-3 border-b border-white/10 hover:text-yellow-400"
              >
                Nosso Ambiente
              </a>

              <a
                href="#cardapio"
                onClick={() => setMenuAberto(false)}
                className="py-3 border-b border-white/10 hover:text-yellow-400"
              >
                Cardápio
              </a>

              <a
                href="#horarios"
                onClick={() => setMenuAberto(false)}
                className="py-3 border-b border-white/10 hover:text-yellow-400"
              >
                Horários
              </a>

              <a
                href="#localizacao"
                onClick={() => setMenuAberto(false)}
                className="py-3 border-b border-white/10 hover:text-yellow-400"
              >
                Localização
              </a>

              <a
                href="https://instagram.com/espettoebrasaa"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuAberto(false)}
                className="mt-5 text-center bg-yellow-400 text-black py-3 rounded-full font-bold"
              >
                Instagram
              </a>

            </div>
          </div>
        )}
      </nav>
{/* HERO */}

      <section
      id="inicio"
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
           "url('/Images/capa-nova.jpg')",
        }}
      >
       <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">

          <Image
            src="/Images/logo.PNG"
            alt="Logo"
            width={220}
            height={220}
            className="mx-auto"
          />

          <p className="text-2xl text-white mt-6">
  Espetaria • Grill • Refeições • Petiscos
</p>

<p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-8">
  Cortes selecionados, espetinhos especiais, pratos executivos,
  refeições para compartilhar e o melhor churrasco de Campos dos Goytacazes.
</p>
          
          <div className="mt-8 space-y-3 text-xl text-white">


</div>

          <a
            href="https://instagram.com/espettoebrasaa"
            target="_blank"
            className="inline-block mt-10 bg-yellow-400 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            Seguir no Instagram
          </a>

        </div>

      </section>
<section className="bg-yellow-400 py-8">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-8 text-center">

      <div>
        <h3 className="text-2xl font-bold text-black">🥩 Carnes Selecionadas</h3>
        <p className="text-black mt-2">
          Qualidade em cada corte.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-black">🍢 Espetinhos Especiais</h3>
        <p className="text-black mt-2">
          Grande variedade de sabores.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-black">🍽️ Refeições Completas</h3>
        <p className="text-black mt-2">
          Para compartilhar ou aproveitar sozinho.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-black">❤️ Ambiente Familiar</h3>
        <p className="text-black mt-2">
          Atendimento acolhedor e confortável.
        </p>
      </div>

    </div>

  </div>

</section>
     {/* QUEM SOMOS */}
<section
  id="quem-somos"
  className="bg-[#111111] py-24"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="max-w-4xl mx-auto text-center">
      <span className="text-yellow-400 font-bold uppercase tracking-[0.25em] text-sm">
        Nossa Essência
      </span>

      <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-8">
        Muito mais que uma
        <span className="text-yellow-400"> espetaria.</span>
      </h2>

      <p className="text-lg md:text-xl leading-relaxed text-gray-300">
        O Espetto e Brasa nasceu para transformar bons momentos em
        experiências especiais. Unimos carnes selecionadas, espetinhos
        preparados na brasa, refeições completas e um atendimento
        acolhedor em um ambiente feito para reunir pessoas.
      </p>

      <p className="text-lg md:text-xl leading-relaxed text-gray-400 mt-6">
        Cada detalhe representa o nosso compromisso com qualidade,
        sabor e hospitalidade. Da escolha dos ingredientes ao atendimento,
        trabalhamos para que cada visita seja uma experiência que você
        queira viver novamente.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

      <div className="bg-[#1c1c1c] border border-white/10 rounded-3xl p-8 text-center">
        <div className="text-4xl mb-4">🔥</div>

        <h3 className="text-xl font-bold text-yellow-400 mb-3">
          Sabor de Verdade
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Ingredientes selecionados e sabores preparados para proporcionar
          uma experiência marcante em cada pedido.
        </p>
      </div>

      <div className="bg-[#1c1c1c] border border-white/10 rounded-3xl p-8 text-center">
        <div className="text-4xl mb-4">🤝</div>

        <h3 className="text-xl font-bold text-yellow-400 mb-3">
          Atendimento que Acolhe
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Um ambiente pensado para receber famílias, amigos e todos que
          valorizam bons momentos ao redor da mesa.
        </p>
      </div>

      <div className="bg-[#1c1c1c] border border-white/10 rounded-3xl p-8 text-center">
        <div className="text-4xl mb-4">⭐</div>

        <h3 className="text-xl font-bold text-yellow-400 mb-3">
          Padrão Espetto e Brasa
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Qualidade, cuidado e consistência em cada detalhe para construir
          uma marca preparada para crescer.
        </p>
      </div>

    </div>

  </div>
</section>
      {/* DESTAQUES */}
<section
  id="destaques"
  className="bg-[#181818] py-24"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="text-yellow-400 font-bold uppercase tracking-[0.25em] text-sm">
        Sabores que marcam
      </span>

      <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
        Destaques da
        <span className="text-yellow-400"> Casa</span>
      </h2>

      <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto">
        Uma seleção de pratos que representam o sabor e a experiência
        do Espetto e Brasa.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {destaques.map((item) => (
        <div
          key={item.nome}
          className="group bg-[#222222] border border-white/10 rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="overflow-hidden">
            <Image
              src={item.imagem}
              alt={item.nome}
              width={500}
              height={350}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-white">
              {item.nome}
            </h3>

            <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto mt-4" />
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
   {/* GALERIA */}
<section
  id="ambiente"
  className="bg-[#111111] py-24"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="text-yellow-400 font-bold uppercase tracking-[0.25em] text-sm">
        Viva a experiência
      </span>

      <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
        Conheça Nosso
        <span className="text-yellow-400"> Ambiente</span>
      </h2>

      <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto">
        Um espaço acolhedor, preparado para reunir família e amigos
        em momentos especiais.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {galeria.map((foto, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-xl"
        >
          <Image
            src={foto}
            alt={`Ambiente Espetto e Brasa ${index + 1}`}
            width={900}
            height={600}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ))}
    </div>

  </div>
</section>
   {/* CARDÁPIO */}
      <section
        id="cardapio"
        className="bg-[#181818] py-24"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-yellow-400 mb-8">
            Nosso Cardápio
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            Conheça todas as nossas opções de espetinhos, porções, refeições,
            bebidas e sobremesas.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#222] rounded-2xl p-6">
              <h3 className="text-yellow-400 text-2xl font-bold">
                🍢 Espetinhos
              </h3>
              <p className="mt-3 text-gray-300">
                Mais de 15 sabores preparados na brasa.
              </p>
            </div>

            <div className="bg-[#222] rounded-2xl p-6">
              <h3 className="text-yellow-400 text-2xl font-bold">
                🍽️ Refeições
              </h3>
              <p className="mt-3 text-gray-300">
                Parmegianas, Picanha na Chapa e Carne Seca Cremosa.
              </p>
            </div>

            <div className="bg-[#222] rounded-2xl p-6">
              <h3 className="text-yellow-400 text-2xl font-bold">
                🍟 Porções
              </h3>
              <p className="mt-3 text-gray-300">
                Batata, Torresmo, Pastel, Bolinho de Bacalhau e muito mais.
              </p>
            </div>

            <div className="bg-[#222] rounded-2xl p-6">
              <h3 className="text-yellow-400 text-2xl font-bold">
                🍺 Bebidas
              </h3>
              <p className="mt-3 text-gray-300">
                Cervejas, Drinks, Caipirinhas, Refrigerantes e Sucos.
              </p>
            </div>
          </div>

          <div className="bg-[#222] rounded-2xl p-6 text-left mb-8">
            <h3 className="text-yellow-400 text-3xl font-bold mb-6">
              🍢 Espetinhos
            </h3>

            <div className="space-y-3 text-lg">
              {[
                ["Boi", "R$ 12,00"],
                ["Porco", "R$ 11,00"],
                ["Linguiça Mineira", "R$ 11,00"],
                ["Frango", "R$ 11,00"],
                ["Queijo", "R$ 12,00"],
                ["Fraldinha na Mostarda", "R$ 13,00"],
                ["Pão de Alho da Casa", "R$ 10,00"],
                ["Kafta", "R$ 10,00"],
                ["Kafta com Queijo", "R$ 13,00"],
                ["Medalhão", "R$ 13,00"],
                ["Medalhão de Carne com Queijo", "R$ 14,00"],
                ["Cordeiro", "R$ 16,00"],
                ["Romeu e Julieta", "R$ 15,00"],
                ["Meio da Asa", "R$ 12,00"],
                ["Coração", "R$ 12,00"],
                ["Salsichão", "R$ 10,00"],
              ].map(([nome, preco]) => (
                <div
                  key={nome}
                  className="flex justify-between gap-4 border-b border-gray-700 pb-2"
                >
                  <span>{nome}</span>
                  <span className="whitespace-nowrap">{preco}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#222] rounded-2xl p-6 text-left mb-8">
            <h3 className="text-yellow-400 text-3xl font-bold mb-6">
              🍟 Porções
            </h3>

            <div className="space-y-3 text-lg">
              {[
                ["Batata Frita", "R$ 32,00"],
                ["Batata à Moda da Casa", "R$ 40,00"],
                ["Torresmo de Barriga", "R$ 40,00"],
                ["Pastel (6 un.)", "R$ 33,00"],
                ["Feijão Amigo", "R$ 22,00"],
                ["Salpicão", "R$ 20,00"],
                ["Arroz", "R$ 15,00"],
                ["Tropeiro", "R$ 20,00"],
                ["Bolinho de Bacalhau (10 un.)", "R$ 49,90"],
              ].map(([nome, preco]) => (
                <div
                  key={nome}
                  className="flex justify-between gap-4 border-b border-gray-700 pb-2"
                >
                  <span>{nome}</span>
                  <span className="whitespace-nowrap">{preco}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#222] rounded-2xl p-6 text-left mb-8">
            <h3 className="text-yellow-400 text-3xl font-bold mb-6">
              🍛 Executivos
            </h3>

            <div className="space-y-3 text-lg">
              {[
                ["Executivo", "R$ 42,90"],
                ["Executivo de Carneiro", "R$ 47,90"],
              ].map(([nome, preco]) => (
                <div
                  key={nome}
                  className="flex justify-between gap-4 border-b border-gray-700 pb-2"
                >
                  <span>{nome}</span>
                  <span className="whitespace-nowrap">{preco}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#222] rounded-2xl p-6 text-left mb-8">
            <h3 className="text-yellow-400 text-3xl font-bold mb-2">
              🍽️ Refeições
            </h3>

            <p className="text-yellow-400 font-bold mb-6">
              Todas as refeições servem 2 pessoas
            </p>

            <div className="space-y-3 text-lg">
              {[
                ["Picanha na Chapa", "R$ 149,90"],
                ["Carne Seca Cremosa", "R$ 119,90"],
                ["Parmegiana de Filé Mignon", "R$ 89,90"],
                ["Parmegiana de Frango", "R$ 82,90"],
                ["Frango Crocante", "R$ 82,90"],
              ].map(([nome, preco]) => (
                <div
                  key={nome}
                  className="flex justify-between gap-4 border-b border-gray-700 pb-2"
                >
                  <span>{nome}</span>
                  <span className="whitespace-nowrap">{preco}</span>
                </div>
              ))}
            </div>
          </div>

         <div className="bg-[#222] rounded-2xl p-6 text-left">
            <h3 className="text-yellow-400 text-3xl font-bold mb-6">
              🍺 Bebidas
            </h3>

            <div className="space-y-3 text-lg">
              {[
                ["Original 600ml", "R$ 13,50"],
                ["Spaten 600ml", "R$ 13,50"],
                ["Corona 600ml", "R$ 19,00"],
                ["Stella Pure Gold 600ml", "R$ 19,00"],
                ["Água sem gás", "R$ 4,00"],
                ["Água com gás", "R$ 5,00"],
                ["Refrigerante", "R$ 8,00"],
                ["Mate Leão", "R$ 7,50"],
                ["H2O", "R$ 8,50"],
                ["Tônica", "R$ 8,50"],
                ["Skol Beats", "R$ 12,00"],
                ["Guaravita", "R$ 3,50"],
                ["Sucos lata", "R$ 8,50"],
                ["Suco natural", "R$ 10,00"],
                ["Ice", "R$ 12,00"],
              ].map(([nome, preco]) => (
                <div
                  key={nome}
                  className="flex justify-between gap-4 border-b border-gray-700 pb-2"
                >
                  <span>{nome}</span>
                  <span className="whitespace-nowrap">{preco}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#222] rounded-2xl p-6 text-left mt-8">
            <h3 className="text-yellow-400 text-3xl font-bold mb-6">
              🥃 Doses
            </h3>

            <div className="space-y-3 text-lg">
              {[
                ["Red Label", "R$ 20,00"],
                ["Smirnoff", "R$ 12,00"],
                ["Absolut", "R$ 20,00"],
                ["Black", "R$ 30,00"],
                ["Gin importado", "R$ 20,00"],
                ["Gin nacional", "R$ 12,00"],
                ["Campari", "R$ 10,00"],
                ["Cachaça", "R$ 5,00"],
                ["Rum", "R$ 10,00"],
              ].map(([nome, preco]) => (
                <div
                  key={nome}
                  className="flex justify-between gap-4 border-b border-gray-700 pb-2"
                >
                  <span>{nome}</span>
                  <span className="whitespace-nowrap">{preco}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#222] rounded-2xl p-6 text-left mt-8">
            <h3 className="text-yellow-400 text-3xl font-bold mb-6">
              🍹 Caipirinhas
            </h3>

            <div className="space-y-3 text-lg">
              {[
                ["Caipirinha", "R$ 18,00"],
                ["Caipvodka nacional", "R$ 20,00"],
                ["Caipvodka importada", "R$ 28,00"],
                ["Caipgin nacional", "R$ 20,00"],
                ["Caipgin importada", "R$ 28,00"],
              ].map(([nome, preco]) => (
                <div
                  key={nome}
                  className="flex justify-between gap-4 border-b border-gray-700 pb-2"
                >
                  <span>{nome}</span>
                  <span className="whitespace-nowrap">{preco}</span>
                </div>
              ))}
            </div>
    <div className="bg-[#222] rounded-2xl p-6 text-left">
  <h3 className="text-yellow-400 text-3xl font-bold mb-6">
    🍰 Sobremesas
  </h3>

  <div className="space-y-3 text-gray-200 text-lg">
    {[
      ["Cheesecake de Morango", "R$ 24,90"],
      ["Mousse de Chocolate", "R$ 24,90"],
    ].map(([nome, preco]) => (
      <div
        key={nome}
        className="flex justify-between gap-4 border-b border-gray-600 pb-3"
      >
        <span>{nome}</span>
        <span className="whitespace-nowrap">{preco}</span>
      </div>
    ))}
    </div>
  </div>
</div>
</div>
</section>

      {/* HORÁRIO */}

      <section 
      id="horarios"
className="py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-yellow-400 mb-12">
            Horário de Funcionamento
          </h2>

          <div className="bg-[#222] rounded-2xl p-10 text-xl leading-10">

            <p>Terça a Sabado — 18h às 00h</p>


            <p>Domingo — 12h às 16h</p>

          </div>

        </div>

      </section>
      {/* LOCALIZAÇÃO */}

      <section id="localizacao" className="bg-[#181818] py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-yellow-400 mb-12">
            Onde Estamos
          </h2>

          <p className="text-xl mb-10">
            📍 Rua Pero de Góis, 118<br />
            Campos dos Goytacazes - RJ
          </p>

          <iframe
            src="https://www.google.com/maps?q=Rua+Pero+de+Góis,+118,+Campos+dos+Goytacazes&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            style={{
              border: 0,
              borderRadius: "20px",
            }}
          />

        </div>

      </section>

      {/* INSTAGRAM */}

      <section className="py-24 text-center">

        <h2 className="text-5xl font-bold text-yellow-400 mb-8">
          Acompanhe nossas novidades
        </h2>

        <p className="text-xl text-gray-300 mb-10">
          Siga o Espetto e Brasa no Instagram.
        </p>

        <a
          href="https://instagram.com/espettoebrasaa"
          target="_blank"
          className="inline-block bg-yellow-400 text-black px-12 py-5 rounded-xl text-xl font-bold hover:bg-yellow-300 transition"
        >
          @espettoebrasaa
        </a>

      </section>

      {/* RODAPÉ */}

      <footer className="bg-black py-10 text-center text-gray-400">

        <Image
          src="/Images/logo.PNG"
          alt="Logo"
          width={120}
          height={120}
          className="mx-auto mb-6"
        />

        <p className="text-lg">
          © 2026 Espetto e Brasa
        </p>

        <p className="mt-2">
          Rua Pero de Góis, 118
        </p>

        <p className="mt-2">
          Campos dos Goytacazes - RJ
        </p>

      </footer>
      <a
  href="https://instagram.com/espettoebrasaa"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
>
  <MessageCircle size={26}/>
  <span>Entre em Contato</span>
</a>
      </main>
  );
}