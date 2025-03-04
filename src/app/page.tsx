"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    { question: "Posso realmente emagrecer sem perder massa muscular?", answer: "Sim! Nosso programa é focado em preservar sua massa muscular durante o processo de emagrecimento, o que mantém seu metabolismo ativo e evita o efeito sanfona." },
    { question: "Preciso de acompanhamento constante?", answer: "Sim! Oferecemos suporte contínuo via WhatsApp e consultas presenciais mensais para garantir que você siga no caminho certo." },
    { question: "O Ozempic é obrigatório?", answer: "O Ozempic é opcional e só será incluído se necessário, após avaliação médica. Ele pode ser uma ferramenta útil para acelerar a perda de peso sem prejudicar a massa muscular." },
    { question: "Quanto custa o programa?", answer: "O custo é personalizado, dependendo dos serviços e níveis de acompanhamento necessários. Entre em contato via WhatsApp para mais informações e para agendar sua consulta inicial." },
  ];

  type ClickedKey = "caixa" | "semaglutida" | "kitExercicio" | "squeeze" | "guia" | "surpresa";

  const imageMap: Record<ClickedKey, string> = {
    caixa: "/garrafa.png",
    semaglutida: "/completa2.png",
    kitExercicio: "/garrafa.png",
    squeeze: "/completa2.png",
    guia: "/garrafa.png",
    surpresa: "/completa2.png",
  };

  const [selected, setSelected] = useState<ClickedKey | null>("caixa");

  const handleClick = (key: ClickedKey) => {
    setSelected(selected === key ? null : key);
  };

  const testimonials = [
    {
      "before": "/antes.png",
      "after": "/depois.png",
      "quote":
        "Eu já tinha tentado tantas dietas e academias, mas nenhuma me ajudava de verdade. Com o Programa Essência, <strong>finalmente consegui entender meu corpo e alcançar resultados que jamais pensei ser possível!</strong>",
      "author": "Mariana, 47 anos",
      "result": "Perdeu 12kg em 6 meses, mais energia e autoestima renovada."
    },
    {
      before: "/antes.png",
      after: "/depois.png",
      quote:
        "Nada funcionava para mim até que conheci esse programa. <strong>Hoje me sinto mais confiante e feliz!</strong>",
      author: "Carlos, 35 anos",
      result: "Eliminou 8kg e ganhou mais disposição para o dia a dia."
    },
    {
      before: "/antes.png",
      after: "/depois.png",
      quote:
        "Descobri um estilo de vida sustentável que me fez <strong>emagrecer sem sofrimento!</strong>",
      author: "Ana, 29 anos",
      result: "Perdeu 10kg e manteve os resultados sem efeito sanfona."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[rgba(250,247,242,1)]">
      <div id="home" className="relative min-h-screen bg-gray-100 bg-cover bg-no-repeat bg-[url('/Hero.png')] md:bg-[url('/HeroDesktop.png')]">
        <button
          onClick={toggleMenu}
          className="absolute top-[1.5rem] right-4 z-50 text-2xl text-white md:hidden"
        >
          {isMenuOpen ? <RiCloseLargeLine /> : <AiOutlineMenu />}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#1C1C1C] bg-opacity-70 backdrop-blur-md flex justify-center items-center transition-all duration-500 z-20">
            <div className="w-[80%] h-full bg-[#382513]/50 p-6 flex flex-col justify-center items-center gap-[2rem] rounded-lg shadow-lg ml-auto">
              <a
                href="#home"
                onClick={closeMenu}
                className="text-[1rem] font-normal text-white hover:text-[#FFF2C0] hover:text-[#F9D689] font-albert"
              >
                Como funciona?
              </a>
              <a
                href="#kit"
                onClick={closeMenu}
                className="text-[1rem] font-normal text-white hover:text-[#FFF2C0] hover:text-[#F9D689] font-albert"
              >
                Kit exclusivo
              </a>
              <a
                href="#historia"
                onClick={closeMenu}
                className="text-[1rem] font-normal text-white hover:text-[#FFF2C0] hover:text-[#F9D689] font-albert"
              >
                Histórias de Sucesso
              </a>
              <a
                href="#beneficio"
                onClick={closeMenu}
                className="text-[1rem] font-normal text-white hover:text-[#FFF2C0] hover:text-[#F9D689] font-albert"
              >
                Exclusividade e benefícios
              </a>
              <a
                href="#faq"
                onClick={closeMenu}
                className="text-[1rem] font-normal text-white hover:text-[#FFF2C0] hover:text-[#F9D689] font-albert"
              >
                FAQ
              </a>
            </div>
          </div>
        )}

        <div className="p-6 max-w-md mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8 md:p-16">
          <div className="md:items-start md:text-left">
            <h2 className="bg-[#F9D689] bg-opacity-10 text-[1rem] text-[#FFF2C0] rounded uppercase font-albert mb-[1rem] mt-20 px-[0.75rem] py-[0.38rem] inline-block md:text-[1rem] md:px-[1rem] md:py-[0.5rem] md:tracking-[0.1rem] text-[0.875rem]">
              RESTAM APENAS 15 VAGAS!
            </h2>


            <h1 className="text-[1.25rem] text-white mb-[1rem] font-literata md:text-[2.5rem] md:font-medium md:leading-[130%]">
              Programa Essência: Emagrecimento inteligente para{" "}
              <span className="text-[#F9D689] italic">mulheres em Natal.</span>
            </h1>

            <p className="text-[0.875rem] font-semibold text-white mb-[1rem] font-literata md:text-[1.5rem] md:font-medium md:leading-[130%]">
              Proteção muscular e resultados duradouros baseados na ciência.
            </p>

            <p className="text-[0.875rem] mb-[1rem] md:text-[1rem] font-albert md:leading-[150%] text-[#CECECE]">
              Um programa personalizado que respeita sua individualidade metabólica
              e cuida da sua saúde de forma completa.{" "}
              <span className="font-bold">Resultados duradouros, sem efeitos radicais.</span>
            </p>

            <div className="md:mt-[3rem] mt-[2rem] relative z-10">
              <button className="bg-[#ffffff] bg-opacity-35 w-full text-white text-[0.875rem] font-semibold py-3 px-6 rounded-lg shadow hover:bg-[#4A3723] md:w-auto md:text-[1rem] font-albert md:py-[1rem] md:px-[4rem] backdrop-blur-sm">
                Quero saber mais
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:flex-row md:justify-center md:items-center md:absolute md:top-0 md:left-0 md:right-0 md:py-6 z-50">
          <a href="#home" className="font-normal font-sans text-white hover:text-[#FFF2C0] mx-6 text-shadow-md">
            Como funciona?
          </a>
          <a href="#kit" className="font-normal font-sans text-white hover:text-[#FFF2C0] mx-6 text-shadow-md">
            Kit exclusivo
          </a>
          <a href="#historia" className="font-normal font-sans text-white hover:text-[#FFF2C0] mx-6 text-shadow-md">
            Histórias de Sucesso
          </a>
          <a href="#beneficio" className="font-normal font-sans text-white hover:text-[#FFF2C0] mx-6 text-shadow-md">
            Exclusividade e benefícios
          </a>
          <a href="#faq" className="font-normal font-sans text-white hover:text-[#FFF2C0] mx-6 text-shadow-md">
            FAQ
          </a>
        </div>
      </div>

      <div id="menopausa" className="md:mx-[4rem] md:my-[4.38rem]">
        <div className="relative min-h-screen md:min-h-[calc(100vh-4rem-4.38rem)] md:rounded-2xl bg-pilates bg-cover bg-no-repeat md:p-[4rem_4.38rem]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-[4rem] p-6 md:p-16 md:border-2 md:border-white/20 rounded-lg">
            <div className="flex items-center justify-start md:mr-[4rem]">
              <div className="mb-10 mt-[4rem] md:mr-[2rem]">
                <h2 className="bg-[#FFF2C0] text-[1rem] text-[#382513] mb-[1rem] uppercase rounded font-semibold font-albert px-[0.75rem] py-[0.38rem] md:px-[1rem] md:py-[0.5rem] md:tracking-[0.1rem] inline-block">
                  O desafio da menopausa
                </h2>
                <h1 className="text-[2.5rem] text-white font-literata leading-[130%]">O que acontece <br /> com seu corpo?</h1>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="border-8 border-[#FFFFFF] border-opacity-5 rounded-xl bg-[rgba(33,16,0,0.15)] backdrop-blur-[15px] p-6">
                <h3 className="text-white ml-4 mr-4 flex gap-3 items-center mt-[1.5rem] font-literata text-[1.25rem] leading-[130%] font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                    <path d="M208,96a80,80,0,1,0-88,79.6V200H88a8,8,0,0,0,0,16h32v24a8,8,0,0,0,16,0V216h32a8,8,0,0,0,0-16H136V175.6A80.11,80.11,0,0,0,208,96ZM64,96a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,96Z"></path>
                  </svg>
                  Menopausa
                </h3>
                <p className="text-[#FFFBEC] ml-4 mr-4 mt-[0.75rem] font-albert leading-[150%]">
                  Durante a menopausa, o corpo feminino sofre alterações hormonais que dificultam a perda de peso.
                </p>
                <h3 className="text-white ml-4 mr-4 flex gap-3 items-center mt-[1.5rem] font-literata text-[1.25rem] leading-[130%] font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                    <path d="M240,128v64a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h44.69L136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,58.34L96,124.69l34.34-34.35a8,8,0,0,1,11.32,0L224,172.69V128a8,8,0,0,1,16,0Z"></path>
                  </svg>
                  Alterações hormonais
                </h3>
                <p className="text-[#FFFBEC] ml-4 mr-4 mt-[0.75rem] mb-[2rem] font-albert leading-[150%]">
                  As mudanças nos níveis de estrogênio e testosterona afetam diretamente o metabolismo e a distribuição de gordura.
                </p>
                <div className="w-[90%] h-[1px] bg-opacity-30 bg-gray-300 my-4 mx-auto"></div>
                <p className="text-[#FFFBEC] ml-4 mr-4 mt-[2rem] mb-5 font-albert text-[1.125rem] leading-[150%]">
                  Mas isso não significa que você não possa alcançar seus objetivos de emagrecimento - basta entender o que seu corpo precisa e seguir um programa adaptado à sua realidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(250,247,242,1)] mt-[4rem] mb-[4rem]">
        <div className="bg-[rgba(250,247,242,1)]">
          <div className="hidden md:flex flex-row mt-16">
            <div className="md:w-1/2 bg-gra1 p-6 flex flex-col justify-center">
            </div>
            <div className="md:w-1/2 bg-[rgba(250,247,242,1)] p-6">
              <h1 className="text-[1.5rem] text-[rgba(52,25,0,1)] font-semibold flex gap-2 items-center mb-5 font-literata">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                  <path d="M240,128v64a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h44.69L136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,58.34L96,124.69l34.34-34.35a8,8,0,0,1,11.32,0L224,172.69V128a8,8,0,0,1,16,0Z"></path>
                </svg>
                Diminuição de Testosterona
              </h1>
              <p className="text-[1.125rem] font-albert text-[rgba(131,131,131,1)] mb-5">
                A testosterona, responsável pela preservação muscular, também diminui na menopausa. Isso contribui para a perda de massa muscular e aceleração do ganho de peso, conforme estudo.
              </p>
              <p className="text-[1.125rem] font-albert mt-5 text-[rgba(131,131,131,1)] mb-[4rem]">
                Fonte: Journal of Clinical Endocrinology & Metabolism.
              </p>
            </div>
          </div>

          <div className="block md:hidden p-6 mx-auto relative bg-[rgba(250,247,242,1)] bg-gra1 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
          <div className="block md:hidden bg-[rgba(250,247,242,1)] p-6">
            <h1 className="text-[1.25rem] text-[rgba(52,25,0,1)] font-semibold flex gap-2 items-center mb-5 font-literata">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F1C183" viewBox="0 0 256 256">
                <path d="M240,128v64a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h44.69L136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,58.34L96,124.69l34.34-34.35a8,8,0,0,1,11.32,0L224,172.69V128a8,8,0,0,1,16,0Z"></path>
              </svg>
              Diminuição de Testosterona
            </h1>
            <p className="text-[1rem] flex font-albert text-[rgba(131,131,131,1)]">
              A testosterona, responsável pela preservação muscular, também diminui na menopausa. Isso contribui para a perda de massa muscular e aceleração do ganho de peso, conforme estudo.
            </p>
            <p className="text-[1rem] flex mt-5 font-albert text-[rgba(131,131,131,1)] mb-[4rem]">
              Fonte: Journal of Clinical Endocrinology & Metabolism.
            </p>
          </div>
        </div>

        <div className="bg-[rgba(250,247,242,1)]">
          <div className="hidden md:flex flex-row mt-16">
            <div className="md:w-1/2 bg-[rgba(250,247,242,1)] p-6">
              <h1 className="text-[1.5rem] text-[rgba(52,25,0,1)] font-semibold flex gap-2 items-center mb-5 font-literata">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                  <path d="M232,136.66A104.12,104.12,0,1,1,119.34,24,8,8,0,0,1,120.66,40,88.12,88.12,0,1,0,216,135.34,8,8,0,0,1,232,136.66ZM120,72v56a8,8,0,0,0,8,8h56a8,8,0,0,0,0-16H136V72a8,8,0,0,0-16,0Zm40-24a12,12,0,1,0-12-12A12,12,0,0,0,160,48Zm36,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm24,36a12,12,0,1,0-12-12A12,12,0,0,0,220,108Z"></path>
                </svg>
                Metabolismo mais lento
              </h1>
              <p className="text-xl font-albert text-[rgba(131,131,131,1)] mb-5">
                Após a menopausa, seu metabolismo pode cair até 10%. A perda de massa muscular diminui o gasto energético diário, tornando a perda de peso mais difícil.
              </p>
              <p className="text-lg font-albert mt-5 text-[rgba(131,131,131,1)] mb-[4rem]">
                Fonte: American Journal of Clinical Nutrition
              </p>
            </div>
            <div className="md:w-1/2 bg-gra2 p-6 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
          </div>

          <div className="block md:hidden p-6 mx-auto relative bg-[rgba(250,247,242,1)] bg-gra2 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
          <div className="bg-[rgba(250,247,242,1)] p-6 md:hidden">
            <h1 className="text-[1.25rem] text-[rgba(52,25,0,1)] font-semibold flex gap-2 items-center mb-5 font-literata">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F1C183" viewBox="0 0 256 256">
                <path d="M232,136.66A104.12,104.12,0,1,1,119.34,24,8,8,0,0,1,120.66,40,88.12,88.12,0,1,0,216,135.34,8,8,0,0,1,232,136.66ZM120,72v56a8,8,0,0,0,8,8h56a8,8,0,0,0,0-16H136V72a8,8,0,0,0-16,0Zm40-24a12,12,0,1,0-12-12A12,12,0,0,0,160,48Zm36,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm24,36a12,12,0,1,0-12-12A12,12,0,0,0,220,108Z"></path>
              </svg>
              Metabolismo mais lento
            </h1>
            <p className="text-[1rem] flex font-albert text-[rgba(131,131,131,1)]">
              Após a menopausa, seu metabolismo pode cair até 10%. A perda de massa muscular diminui o gasto energético diário, tornando a perda de peso mais difícil.
            </p>
            <p className="text-[1rem] flex mt-5 mb-[4rem] font-albert text-[rgba(131,131,131,1)]">
              Fonte: American Journal of Clinical Nutrition
            </p>
          </div>
        </div>

        <div className="bg-[rgba(250,247,242,1)]">
          <div className="hidden md:flex flex-row mt-16">
            <div className="md:w-1/2 bg-gra3 p-6 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
            <div className="md:w-1/2 bg-[rgba(250,247,242,1)] p-6">
              <h1 className="text-[1.5rem] mr-4 text-[rgba(52,25,0,1)] font-semibold flex gap-2 items-center mb-5 justify-start font-literata">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                  <path d="M208,96a80,80,0,1,0-88,79.6V200H88a8,8,0,0,0,0,16h32v24a8,8,0,0,0,16,0V216h32a8,8,0,0,0,0-16H136V175.6A80.11,80.11,0,0,0,208,96ZM64,96a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,96Z"></path>
                </svg>
                Redução do Estrogênio
              </h1>
              <p className="text-xl mr-4 flex font-albert text-[rgba(131,131,131,1)]">
                A queda do estrogênio durante a menopausa faz com que a gordura se acumule na região abdominal, um fator conhecido por aumentar o risco de doenças metabólicas e cardiovasculares.
              </p>
              <p className="text-lg mr-4 flex mt-5 font-albert text-[rgba(131,131,131,1)] mb-[4rem]">
                Fonte: Journal of Clinical Endocrinology & Metabolism.
              </p>
            </div>
          </div>

          <div className="block md:hidden p-6 mx-auto relative bg-[rgba(250,247,242,1)] bg-gra3 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
          <div className="bg-[rgba(250,247,242,1)] p-6 md:hidden">
            <h1 className="text-[1.25rem] text-[rgba(52,25,0,1)] font-semibold flex gap-2 items-center mb-5 justify-start font-literata">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F1C183" viewBox="0 0 256 256">
                <path d="M208,96a80,80,0,1,0-88,79.6V200H88a8,8,0,0,0,0,16h32v24a8,8,0,0,0,16,0V216h32a8,8,0,0,0,0-16H136V175.6A80.11,80.11,0,0,0,208,96ZM64,96a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,96Z"></path>
              </svg>
              Redução do Estrogênio
            </h1>
            <p className="text-[1rem] flex font-albert text-[rgba(131,131,131,1)]">
              A queda do estrogênio durante a menopausa faz com que a gordura se acumule na região abdominal, um fator conhecido por aumentar o risco de doenças metabólicas e cardiovasculares.
            </p>
            <p className="text-[1rem] flex mt-5 font-albert text-[rgba(131,131,131,1)] mb-[4rem]">
              Fonte: Journal of Clinical Endocrinology & Metabolism.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center min-h-[30vh]">
            <h1 className="text-[2rem] text-[rgba(52,25,0,1)] font-semibold items-center mt-4 mb-[1rem] text-center font-literata max-w-[40rem]">
              A boa notícia? Nós sabemos como ajudar você a <i>superar esses desafios!</i>
            </h1>
            <div className="flex justify-center items-center">
              <div className="bg-[#FFF2C0] rounded-full flex justify-center items-center w-[2.5rem] h-[2.5rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[80vh] md:min-h-screen bg-[rgba(255,248,236,1)] bg-cover pb-[4rem] md:mx-[9ren] flex items-center justify-center">
        <div className="pt-[4rem]">
          <div className="hidden md:block text-center">
            <h1 className="max-w-[640px] text-[2rem] font-semibold mb-[1rem] mx-auto font-literata text-[rgba(52,25,0,1)]">
              Como nosso programa exclusivo ajudará você a <span className="italic">emagrecer de forma sustentável</span>?
            </h1>
            <p className="max-w-[640px] text-[1rem] text-[rgba(131,131,131,1)] mx-auto font-albert mb-[2rem]">
              Durante o emagrecimento, a preservação da massa muscular é a chave para manter seu metabolismo ativo. Músculos queimam mais calorias do que gordura, mesmo em repouso. Então, ao preservar seus músculos enquanto você pode perder gordura, você mantém seu metabolismo acelerado.
            </p>
          </div>

          <div className="block md:hidden text-center">
            <h1 className="text-[1.5rem] ml-[1rem] mr-[1rem] font-semibold text-start mb-5 font-literata text-[rgba(52,25,0,1)]">
              Como nosso programa exclusivo ajudará você a <span className="italic">emagrecer de forma sustentável</span>?
            </h1>
            <p className="text-[1rem] text-[rgba(131,131,131,1)] ml-[1rem] mr-[1rem] text-start flex font-albert">
              Durante o emagrecimento, a preservação da massa muscular é a chave para manter seu metabolismo ativo. Músculos queimam mais calorias do que gordura, mesmo em repouso. Então, ao preservar seus músculos enquanto você pode perder gordura, você mantém seu metabolismo acelerado.
            </p>
          </div>

          <div className="hidden md:flex justify-center gap-[1.37rem]">
            <div className="relative flex flex-col items-center h-[9rem] w-[15rem]">
              <div className="bg-white border-[1px] border-opacity-10 border-[rgba(241,193,131,1)] rounded-2xl mx-[1.37rem] p-4 border-solid border-[1px] border-[#F1C183] flex flex-col items-center h-full w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                  <path d="M232,128c0,12.51-17.82,21.95-22.68,33.69-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68c-11.32-4.68-30.65,1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128Z" opacity="0.2"></path><path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"></path>
                </svg>
                <h1 className="text-[1.5rem] text-center font-literata font-semibold text-[rgba(52,25,0,1)] leading-tight">
                  Programa <br /> Personalizado
                </h1>
              </div>
            </div>
            <div className="relative flex flex-col items-center mt-[4.12rem] h-[9rem] w-[20rem]">
              <div className="bg-white border-[1px] border-opacity-10 border-[rgba(241,193,131,1)] rounded-2xl mx-[1.37rem] p-2 border-solid border-[1px] border-[#F1C183] flex flex-col items-center h-full w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                  <path d="M232,128c0,12.51-17.82,21.95-22.68,33.69-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68c-11.32-4.68-30.65,1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128Z" opacity="0.2"></path><path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"></path>
                </svg>
                <h1 className="text-[1.5rem] text-center font-literata font-semibold text-[rgba(52,25,0,1)] leading-tight">
                  Emagreça sem <br /> perder massa muscular
                </h1>
              </div>
            </div>
            <div className="relative flex flex-col items-center h-[9rem] w-[15rem]">
              <div className="bg-white border-[1px] border-opacity-10 border-[rgba(241,193,131,1)] rounded-2xl mx-[1.37rem] p-4 border-solid border-[rgba(252,252,252,0.3)] flex flex-col items-center h-full w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                  <path d="M232,128c0,12.51-17.82,21.95-22.68,33.69-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68c-11.32-4.68-30.65,1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128Z" opacity="0.2"></path><path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"></path>
                </svg>
                <h1 className="text-[1.5rem] text-center font-literata font-semibold text-[rgba(52,25,0,1)] leading-tight">
                  Evite o <br /> efeito sanfona
                </h1>
              </div>
            </div>
          </div>

          <div className="block md:hidden mt-[2rem]">
            <div className="bg-white border-2 border-[rgba(241,193,131,1)] rounded-2xl ml-5 mr-5 mt-5 flex flex-col items-center p-6 mb-[.5rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                <path d="M232,128c0,12.51-17.82,21.95-22.68,33.69-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68c-11.32-4.68-30.65,1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128Z" opacity="0.2"></path><path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"></path>
              </svg>
              <h1 className="text-[1.25rem] text-[rgba(52,25,0,1)] text-center font-literata">Programa <br /> personalizado</h1>
            </div>
            <div className="bg-white border-2 border-[rgba(241,193,131,1)] rounded-2xl ml-5 mr-5 mt-5 flex flex-col items-center p-6 mb-[.5rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                <path d="M232,128c0,12.51-17.82,21.95-22.68,33.69-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68c-11.32-4.68-30.65,1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128Z" opacity="0.2"></path><path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"></path>
              </svg>
              <h1 className="text-[1.25rem] text-[rgba(52,25,0,1)] text-center font-literata">Emagreça sem <br /> perder massa muscular</h1>
            </div>
            <div className="bg-white border-2 border-[rgba(241,193,131,1)] rounded-2xl ml-5 mr-5 mt-5 flex flex-col items-center p-6 mb-[.5rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                <path d="M232,128c0,12.51-17.82,21.95-22.68,33.69-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68c-11.32-4.68-30.65,1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128Z" opacity="0.2"></path><path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"></path>
              </svg>
              <h1 className="text-[1.25rem] text-[rgba(52,25,0,1)] text-center font-literata">Evite o <br /> efeito sanfona</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-screen mt-16 bg-[rgba(250,247,242,1)] bg-cover bg-no-repeat mt-[4rem] mb-[4rem]">
        <div className="hidden md:flex justify-center items-center mx-auto h-screen">
          <Image
            src="/completadesktop.png"
            alt="Imagem da esquerda - desktop"
            width={310}
            height={451}
            className=" object-cover rounded-[.5rem] ml-[4rem]"
          />

          <div className="flex flex-col items-center justify-center text-center ml-[1.25rem] mr-[1.25rem]">
            <h1 className="text-3xl font-semibold gap-2 text-[rgba(52,25,0,1)] items-center mb-[1rem] font-literata">
              Não é sobre perder peso, <br />  mas sobre transformar seu corpo <br />  de forma
              <span className="text-[#AC7D53] italic"> saudável e sustentável.</span>
            </h1>
            <p className="text-xl text-[rgba(100,100,100,1)] flex font-albert">
              A sua jornada começa aqui. Agende sua consulta inicial e descubra como podemos ajudar você a alcançar resultados duradouros.
            </p>
            <button className="mt-8 bg-[#341900] w-[200px] min-w-[200px] max-w-[200px] h-[50px] text-white text-lg font-semibold font-albert py-3 px-6 rounded-xl whitespace-nowrap">
              Agendar Agora
            </button>
          </div>

          <Image
            src="/completa2.png"
            alt="Imagem da direita - desktop"
            width={310}
            height={451}
            className="object-cover rounded-[0.5rem] mr-[4rem]"
          />
        </div>

        <div className="md:hidden px-4 mt-[4rem] mb-[4rem]">
          <Image
            src="/completa.png"
            alt="Imagem mobile"
            width={340}
            height={250}
            className="object-cover rounded-xl w-full h-auto"
          />

          <h1 className="text-[1.5rem] ml-4 mr-4 font-semibold text-[rgba(52,25,0,1)] gap-2 items-center mb-5 mt-[2rem] font-literata">
            Não é sobre perder peso, mas sobre transformar seu corpo de forma
            <span className="text-[#AC7D53]"> saudável e sustentável.</span>
          </h1>
          <p className="text-xl ml-4 mr-4 text-[rgba(131,131,131,1)] flex font-albert">
            A sua jornada começa aqui. Agende sua consulta inicial e descubra como podemos ajudar você a alcançar resultados duradouros.
          </p>
          <button className="mt-[2rem] bg-[#341900] w-full text-white text-lg font-semibold py-3 px-6 rounded-lg">
            Agendar Agora
          </button>
        </div>
      </div>

      <div>
        <div className="p-6 min-h-screen mb-[4rem] max-w-md mx-auto bg-clorblur bg-no-repeat lg:hidden">
          <div className="text-center">
            <h2 className="text-lg px-[.75rem] py-[.38rem] tracking-[.1rem] text-[#FFF2C0] bg-[#F9D689] rounded bg-opacity-10 uppercase font-albert mt-8 inline-block">
              Entenda
            </h2>
          </div>
          <h1 className="text-3xl text-center text-white ml-4 mr-4 font-literata items-center mt-4 justify-center">
            Como funciona o <i>Programa Essência?</i>
          </h1>
          <p className="text-xl text-white text-center mt-4 ml-4 mr-4 flex font-albert">
            Nosso programa é baseado em evidências científicas, com métodos validados que garantem que você perca peso sem comprometer sua saúde ou seu metabolismo.
          </p>

          <div
            className="p-6 mt-12 mb-8 rounded-3xl ml-5 mr-5 relative bg-redonda flex items-center justify-center"
            style={{ height: "35vh", borderRadius: "50%" }}
          ></div>

          {[
            {
              title: "Avaliação Completa",
              text: "Consultas presenciais com exames detalhados e plano personalizado.",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F1C183" viewBox="0 0 256 256"><path d="M232,128c0,12.51-17.82,21.95-22.68,33.69-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68c-11.32-4.68-30.65,1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128Z" opacity="0.2"></path><path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"></path></svg>,
            },
            {
              title: "Uso de Tecnologia Avançada",
              text: "Medicamentos e técnicas que potencializam seus resultados.",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F1C183" viewBox="0 0 256 256"><path d="M224,208H203.94A88.05,88.05,0,0,0,144,64.37V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V136a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V80.46A72,72,0,0,1,181.25,208H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Zm-96-72H80V32h48V136ZM72,184a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"></path></svg>,
            },
            {
              title: "Treinos Rápidos e Eficientes",
              text: "Feitos online, adaptados ao seu corpo e à sua rotina.",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F1C183" viewBox="0 0 256 256"><path d="M152,88a32,32,0,1,0-32-32A32,32,0,0,0,152,88Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,152,40Zm67.31,100.68c-.61.28-7.49,3.28-19.67,3.28-13.85,0-34.55-3.88-60.69-20a169.31,169.31,0,0,1-15.41,32.34,104.29,104.29,0,0,1,31.31,15.81C173.92,186.65,184,207.35,184,232a8,8,0,0,1-16,0c0-41.7-34.69-56.71-54.14-61.85-.55.7-1.12,1.41-1.69,2.1-19.64,23.8-44.25,36.18-71.63,36.18A92.29,92.29,0,0,1,31.2,208,8,8,0,0,1,32.8,192c25.92,2.58,48.47-7.49,67-30,12.49-15.14,21-33.61,25.25-47C86.13,92.35,61.27,111.63,61,111.84A8,8,0,1,1,51,99.36c1.5-1.2,37.22-29,89.51,6.57,45.47,30.91,71.93,20.31,72.18,20.19a8,8,0,1,1,6.63,14.56Z"></path></svg>,
            },
            {
              title: "Dieta Personalizada",
              text: "Desenvolvida com base nas suas preferências alimentares e necessidades metabólicas.",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F1C183" viewBox="0 0 256 256"><path d="M216,80V184a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V80Z" opacity="0.2"></path><path d="M88,48V16a8,8,0,0,1,16,0V48a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,128,56Zm32,0a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,160,56Zm92.8,46.4L224,124v60a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V124L3.2,102.4a8,8,0,0,1,9.6-12.8L32,104V80a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v24l19.2-14.4a8,8,0,0,1,9.6,12.8ZM208,88H48v96a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16Z"></path></svg>,
            },
            {
              title: "Acompanhamento Contínuo",
              text: "Suporte dedicado de médicos, nutricionistas e personal trainers.",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#F1C183" viewBox="0 0 256 256"><path d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"></path></svg>,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border-4 border-white/20 rounded-2xl bg-opacity-10 ml-5 mr-5 mt-6 flex items-center flex-col p-4"
            >
              <h1 className="text-xl text-[rgba(255,251,236,1)] flex items-center font-literata gap-2 text-left w-full">
                {item.icon}
                {item.title}
              </h1>
              <p className="text-[rgba(255,251,236,1)] mt-4 font-albert">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex flex-col items-center bg-clorblur min-h-screen py-16">
          <h2 className="text-[1rem] px-[1rem] py-[.5rem] tracking-[0.1rem] text-[#FFF2C0] bg-[#F9D689] rounded bg-opacity-10 uppercase font-albert mb-8">
            Entenda
          </h2>
          <h1 className="text-[2rem] text-center text-[rgba(255,251,236,1)] font-literata mb-8">
            Como Funciona o <i>Programa Essência?</i>
          </h1>
          <p className="text-[1rem] text-[rgba(225,225,225,1)] text-center max-w-3xl font-albert mb-16">
            Nosso programa é baseado em evidências científicas, com métodos validados que garantem que você perca peso sem comprometer sua saúde ou seu metabolismo.
          </p>

          <div className="relative flex justify-center items-center mb-16">
            <div className="absolute rounded-full h-[560px] w-[560px] border border-white" style={{ opacity: 0.4 }}></div>
            <div className="absolute rounded-full h-[760px] w-[760px] border border-white" style={{ opacity: 0.2 }}></div>
            <div className="absolute rounded-full h-[940px] w-[940px] border border-white" style={{ opacity: 0.1 }}></div>
            <div className="relative z-10">
              <Image
                src="/redonda.png"
                alt="Programa Essência"
                width={360}
                height={360}
                className="rounded-full border border-white"
                style={{ borderWidth: "1px" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-5xl">
            {[
              {
                title: "Avaliação Completa",
                text: "Consultas presenciais com exames detalhados e plano personalizado.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256"><path d="M232,128c0,12.51-17.82,21.95-22.68,33.69-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68c-11.32-4.68-30.65,1.42-39.85-7.78s-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128Z" opacity="0.2"></path><path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34Z"></path></svg>,
              },
              {
                title: "Uso de Tecnologia Avançada",
                text: "Medicamentos e técnicas que potencializam seus resultados.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256"><path d="M224,208H203.94A88.05,88.05,0,0,0,144,64.37V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V136a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V80.46A72,72,0,0,1,181.25,208H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Zm-96-72H80V32h48V136ZM72,184a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"></path></svg>,
              },
              {
                title: "Treinos Rápidos e Eficientes",
                text: "Feitos online, adaptados ao seu corpo e à sua rotina.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256"><path d="M152,88a32,32,0,1,0-32-32A32,32,0,0,0,152,88Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,152,40Zm67.31,100.68c-.61.28-7.49,3.28-19.67,3.28-13.85,0-34.55-3.88-60.69-20a169.31,169.31,0,0,1-15.41,32.34,104.29,104.29,0,0,1,31.31,15.81C173.92,186.65,184,207.35,184,232a8,8,0,0,1-16,0c0-41.7-34.69-56.71-54.14-61.85-.55.7-1.12,1.41-1.69,2.1-19.64,23.8-44.25,36.18-71.63,36.18A92.29,92.29,0,0,1,31.2,208,8,8,0,0,1,32.8,192c25.92,2.58,48.47-7.49,67-30,12.49-15.14,21-33.61,25.25-47C86.13,92.35,61.27,111.63,61,111.84A8,8,0,1,1,51,99.36c1.5-1.2,37.22-29,89.51,6.57,45.47,30.91,71.93,20.31,72.18,20.19a8,8,0,1,1,6.63,14.56Z"></path></svg>,
              },
              {
                title: "Dieta Personalizada",
                text: "Desenvolvida com base nas suas preferências alimentares e necessidades metabólicas.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256"><path d="M216,80V184a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V80Z" opacity="0.2"></path><path d="M88,48V16a8,8,0,0,1,16,0V48a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,128,56Zm32,0a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,160,56Zm92.8,46.4L224,124v60a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V124L3.2,102.4a8,8,0,0,1,9.6-12.8L32,104V80a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v24l19.2-14.4a8,8,0,0,1,9.6,12.8ZM208,88H48v96a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16Z"></path></svg>,
              },
              {
                title: "Acompanhamento Contínuo",
                text: "Suporte dedicado de médicos, nutricionistas e personal trainers.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256"><path d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"></path></svg>,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white/15 rounded-xl p-6 border-[8px] border-[rgba(255, 255, 255, 0.05)] backdrop-blur-lg mb-[1.5rem] ${index === 4 ? 'col-span-2 mx-auto' : ''
                  }`}
                style={{
                  border: "8px solid rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(15px)",
                }}
              >
                <h1 className="text-xl text-[rgba(255,251,236,1)] font-literata mb-4 flex items-center gap-2">
                  {item.icon} {item.title}
                </h1>
                <p className="text-[rgba(255,251,236,1)] font-albert">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="kit" className="p-3 max-w-screen mx-auto relative min-h-screen bg-[rgba(250,247,242,1)] bg-cover bg-no-repeat mt-[4rem] mb-8 md:max-w-6xl md:flex md:flex-col md:items-center md:justify-center">
        <div className="flex max-w-[40rem] flex-col md:items-center items-start">
          <h2 className="text-[1rem] text-[#382513] bg-[#FFF2C0] ml-4 rounded uppercase font-albert font-semibold px-[.75rem] py-[.38rem] md:px-[1rem] md:py-[0.5rem] tracking-[0.1rem] inline-block self-start md:self-center">
            exclusividade essêncial
          </h2>
          <h1 className="text-3xl text-[rgba(52,25,0,1)] ml-4 mr-4 font-semibold font-literata gap-2 mb-4 mt-4 text-start md:text-center">
            Bem-vinda ao primeiro passo da sua
            <span className="font-literata italic"> transformação!</span>
          </h1>
          <p className="text-[1rem] text-[rgba(131,131,131,1)] font-albert ml-4 mr-4 mb-[4rem] flex text-start md:text-center leading-[130%]">
            Cada detalhe foi pensado para tornar sua experiência única e motivadora. Ao se juntar ao nosso programa, você receberá um kit exclusivo, repleto de itens úteis e sofisticados que simbolizam nosso compromisso com o seu bem-estar.
          </p>
          <h1 className="text-[1.5rem] text-[#AC7D53] ml-4 mr-4 font-semibold font-literata flex gap-2 text-center">
            O que vem no Presskit?
          </h1>
        </div>

        <div className="md:flex md:gap-6 md:items-center md:w-full">
          <div className="md:w-1/3 flex flex-col gap-5">
            {(["caixa", "semaglutida", "kitExercicio"] as ClickedKey[]).map((key) => (
              <div
                key={key}
                onClick={() => handleClick(key)}
                className={`${selected === key ? "bg-[#FFF2C0] text-[rgba(52,25,0,1)]" : "bg-gray-100 text-[rgba(131,131,131,1)]"
                  } border-[8px] border-gray/50 rounded-2xl ml-5 mr-5 mt-[1.5rem] flex flex-col font-semibold items-center p-6 cursor-pointer`}
              >
                <h1 className="text-xl text-center">
                  {key === "caixa" && "Caixa do Presskit"}
                  {key === "semaglutida" && "SEMAglutida (Ozempic)"}
                  {key === "kitExercicio" && "Kit Exercício em Casa"}
                </h1>
              </div>
            ))}
          </div>

          <div
            className="flex justify-center items-center mx-auto md:ml-0 md:mt-0 rounded-2xl bg-[rgba(250,247,242,1)] md:w-1/3"
            style={{ height: "50vh", width: "33vh" }}
          >
            {selected && <img src={imageMap[selected]} alt={selected} className="h-full mt-[1.5rem] rounded-xl object-contain" />}
          </div>

          <div className="md:w-1/3 flex flex-col gap-5">
            {(["squeeze", "guia", "surpresa"] as ClickedKey[]).map((key) => (
              <div
                key={key}
                onClick={() => handleClick(key)}
                className={`${selected === key ? "bg-[#FFF2C0] text-[rgba(52,25,0,1)]" : "bg-gray-100 text-[rgba(131,131,131,1)]"
                  } border-[8px] border-gray/60 rounded-2xl ml-5 mr-5 mt-[1.5rem] flex flex-col font-semibold items-center p-6 cursor-pointer`}
              >
                <h1 className="text-xl text-center">
                  {key === "squeeze" && "Squeeze Personalizada"}
                  {key === "guia" && "Guia de Introdução ao Programa"}
                  {key === "surpresa" && "Itens Surpresa"}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="historia"
        className="p-3 pb-[4rem] m-0 w-full h-full mb-[4rem] max-w-none mx-auto relative bg-[rgba(255,255,255,1)] bg-cover bg-no-repeat md:max-w-full md:flex md:flex-col md:items-center md:justify-center"
      >
        <div className="text-center md:w-full">
          <h2 className="text-[1rem] text-[#382513] bg-[#FFF2C0] rounded uppercase font-albert font-semibold px-[1rem] py-[.5rem] tracking-[0.1rem] inline-block mt-[4rem] mb-[1rem]">
            Transformações que inspiram.
          </h2>
          <h1 className="text-[2rem] text-center text-[rgba(52,25,0,1)] font-semibold leading-[130%] font-literata gap-2 items-center mb-[1rem] md:mb-[4rem]">
            Histórias de Sucesso
          </h1>
        </div>

        <div className="md:flex md:items-end md:w-full md:gap-[1.25rem]">
          <div className="md:w-1/2 flex flex-row gap-6 justify-center">
            <div className="flex justify-center items-center">
              <Image
                src={testimonials[activeIndex].before}
                alt="Antes"
                width={300}
                height={500}
                className="rounded-[.5rem]"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={testimonials[activeIndex].after}
                alt="Depois"
                width={300}
                height={500}
                className="rounded-[.5rem]"
              />
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col gap-[1rem] md:text-left md:ml-8 md:self-end">
            <div className="flex items-start gap-2 mt-[2rem]">
              <img src="/aspas.png" alt="Aspas" className="w-5 h-5 align-top" />

              <h1
                className="text-[1.5rem] leading-[150%] text-[rgba(52,25,0,1)] font-albert"
                dangerouslySetInnerHTML={{
                  __html: `${testimonials[activeIndex].quote}`,
                }}
              ></h1>

              <img src="/aspas.png" alt="Aspas" className="w-5 h-5 mr-4 align-top rotate-180" />
            </div>

            <p className="text-[rgba(131,131,131,1)] text-xl ml-8 font-albert italic">
              - {testimonials[activeIndex].author}
            </p>
            <p className="text-[rgba(131,131,131,1)] text-xl ml-8 font-albert">
              {testimonials[activeIndex].result}
            </p>

            <div className="flex gap-1 ml-8 mt-[2rem]">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-[33%] md:w-[10%] h-[8px] rounded transition-all ${activeIndex === index
                    ? "bg-[rgba(187,187,187,1)]"
                    : "bg-[rgba(232,232,232,1)]"
                    }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="beneficio" className="p-3 mx-auto mt-[4rem] relative min-h-[40rem] bg-[rgba(250,247,242,1)] bg-cover bg-no-repeat w-full md:w-4/5">
        <div className="hidden md:block">
          <div className="relative mt-8">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-start relative">
              <div className="flex justify-center items-center mb-8 rounded relative md:w-1/2 w-full" style={{ height: '60vh' }}>
                <img src="/mulheres.png" alt="Imagem Exemplo" className="rounded" width="800" height="800" />
              </div>
              <div
                className="absolute mt-[4rem] rounded-xl inset-0 flex justify-center items-center"
                style={{
                  top: '-4rem',
                  left: '2rem',
                  right: '0',
                  bottom: '2rem',
                  opacity: 1.2,
                  border: '8px solid rgba(14, 13, 13, 0.1)',
                  background: 'rgba(255, 255, 255, 0.50)',
                  boxShadow: '0px 2px 20px 0px rgba(0, 0, 0, 0.10)',
                  width: 'calc(60% - 4rem)',
                  minHeight: '20rem',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="md:text-left text-center w-full max-w-4xl px-4">
                  <h1 className="text-[1rem] text-[#382513] bg-[#FFF2C0] rounded mt-8 uppercase font-albert font-semibold px-[1rem] py-[.5rem] tracking-[.1rem] inline-block">
                    exclusividade e benefícios
                  </h1>
                  <h1 className="mt-[1rem] text-[2rem] text-[rgba(52,25,0,1)] text-semibold font-literata gap-2 items-center mb-[4rem]">
                    Uma experiência exclusiva que garante o seu sucesso!
                  </h1>
                  <div className="mt-[1.5rem] border-b border-transparent border-b-[rgba(172,125,83,0.2)]">
                    <h1 className="flex text-lg text-[rgba(52,25,0,1)] items-center gap-2 mb-[.75rem] font-literata font-bold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                        <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                      </svg>
                      Apenas 30 vagas por mês
                    </h1>
                    <p className="font-albert mb-[1.5rem] text-[rgba(52,25,0,1)]">para garantir o cuidado que você merece.</p>
                  </div>
                  <div className="mt-[1.5rem] border-b border-transparent border-b-[rgba(172,125,83,0.2)]">
                    <h1 className="flex text-lg text-[rgba(52,25,0,1)] items-center gap-2 mb-[.75rem] font-literata font-bold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                        <path d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"></path>
                      </svg>
                      Equipe dedicada ao seu sucesso
                    </h1>
                    <p className="font-albert mb-[1.5rem] text-[rgba(52,25,0,1)]">médicos, nutricionistas e personal trainers renomados.</p>
                  </div>
                  <div className="mt-[1.5rem] border-b mb-[1.5rem] border-transparent border-b-[rgba(172,125,83,0.2)]">
                    <h1 className="flex text-lg text-[rgba(52,25,0,1)] items-center gap-2 mb-[.75rem] font-literata font-bold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256">
                        <path d="M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56ZM231.5,87.71A19.62,19.62,0,0,0,212,72H44a20,20,0,0,0-8.38,38.16l.13,0,50.75,22.35-21,79.72A20,20,0,0,0,102,228.8l26-44.87,26,44.87a20,20,0,0,0,36.4-16.52l-21-79.72,50.75-22.35.13,0A19.64,19.64,0,0,0,231.5,87.71Zm-17.8,7.9-56.93,25.06a8,8,0,0,0-4.51,9.36L175.13,217a7,7,0,0,0,.49,1.35,4,4,0,0,1-5,5.45,4,4,0,0,1-2.25-2.07,6.31,6.31,0,0,0-.34-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.05a6.31,6.31,0,0,0-.34.63,4,4,0,0,1-2.25,2.07,4,4,0,0,1-5-5.45,7,7,0,0,0,.49-1.35L103.74,130a8,8,0,0,0-4.51-9.36L42.3,95.61A4,4,0,0,1,44,88H212a4,4,0,0,1,1.73,7.61Z"></path>
                      </svg>
                      Comunidade que apoia e motiva
                    </h1>
                    <p className="font-albert mb-[2rem] text-[rgba(52,25,0,1)]">você nunca estará sozinha nessa jornada.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden block">
          <div className="flex justify-center items-center mt-8 rounded bg-[#FFFFFF] relative w-full" style={{ height: '40vh' }}>
            <Image src="/mulheres.png" alt="Imagem Exemplo" layout="fill" objectFit="cover" className="rounded" />
          </div>
          <div className="rounded-xl flex justify-center items-center z-20" style={{
            margin: '0 auto',
            opacity: 1.2,
            border: '8px solid rgba(14, 13, 13, 0.1)',
            background: 'rgba(255, 255, 255, 0.50)',
            boxShadow: '0px 2px 20px 0px rgba(0, 0, 0, 0.10)',
            width: '90%',
            minHeight: '20rem',
            marginTop: '-4rem',
            position: 'relative',
          }}>
            <div className="text-center w-full px-4 z-10">
              <h1 className="text-[.875rem] leading-[130%] text-[#382513] bg-[#FFF2C0] rounded mt-8 uppercase font-albert font-semibold tracking-[.1rem] px-[.75rem] py-[.38rem] inline-block">
                Exclusividade e benefícios
              </h1>
              <h1 className="mt-[1rem] leading-[130%] text-start text-[1.5rem] text-[rgba(52,25,0,1)] font-semibold font-literata gap-2 items-center mb-[2.5rem]">
                Uma experiência exclusiva que garante o seu sucesso!
              </h1>
              <div className="mt-[1.5rem] border-b border-transparent border-b-[rgba(172,125,83,0.2)]">
                <h1 className="flex text-lg text-start text-[rgba(52,25,0,1)] items-center gap-2 mb-[.75rem] font-literata font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256"><path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path></svg>
                  Apenas 30 vagas por mês
                </h1>
                <p className="font-albert mb-[1.5rem] text-start text-[rgba(52,25,0,1)]">para garantir o cuidado que você merece.</p>
              </div>
              <div className="mt-[1.5rem] border-b border-transparent border-b-[rgba(172,125,83,0.2)]">
                <h1 className="flex text-lg text-[rgba(52,25,0,1)] text-start items-center gap-2 mb-[.75rem] font-literata font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256"><path d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"></path></svg>
                  Equipe dedicada ao seu sucesso
                </h1>
                <p className="font-albert mb-[1.5rem] text-start text-[rgba(52,25,0,1)]">médicos, nutricionistas e personal trainers renomados.</p>
              </div>
              <div className="mt-[1.5rem] border-b mb-[1.5rem] border-transparent border-b-[rgba(172,125,83,0.2)]">
                <h1 className="flex text-lg text-[rgba(52,25,0,1)] text-start items-center gap-2 mb-[.75rem] font-literata font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F1C183" viewBox="0 0 256 256"><path d="M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56ZM231.5,87.71A19.62,19.62,0,0,0,212,72H44a20,20,0,0,0-8.38,38.16l.13,0,50.75,22.35-21,79.72A20,20,0,0,0,102,228.8l26-44.87,26,44.87a20,20,0,0,0,36.4-16.52l-21-79.72,50.75-22.35.13,0A19.64,19.64,0,0,0,231.5,87.71Zm-17.8,7.9-56.93,25.06a8,8,0,0,0-4.51,9.36L175.13,217a7,7,0,0,0,.49,1.35,4,4,0,0,1-5,5.45,4,4,0,0,1-2.25-2.07,6.31,6.31,0,0,0-.34-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.05a6.31,6.31,0,0,0-.34.63,4,4,0,0,1-2.25,2.07,4,4,0,0,1-5-5.45,7,7,0,0,0,.49-1.35L103.74,130a8,8,0,0,0-4.51-9.36L42.3,95.61A4,4,0,0,1,44,88H212a4,4,0,0,1,1.73,7.61Z"></path></svg>
                  Comunidade que apoia e motiva
                </h1>
                <p className="font-albert mb-[1.5rem] text-[rgba(52,25,0,1)] text-start">você nunca estará sozinha nessa jornada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="equipe">
        <div className="text-center md:w-4/5 mx-auto mt-[4rem]">
          <h1 className="text-[1rem] text-[#382513] bg-[#FFF2C0] rounded uppercase font-albert font-semibold mb-[1rem] px-[1rem] py-[.5rem] tracking-[0.1rem] inline-block">
            Conheça a equipe que vai cuidar de você
          </h1>
          <h1 className="mb-4 text-[2rem] text-[rgba(52,25,0,1)] font-literata flex items-center justify-center gap-2">
            Uma equipe dedicada ao seu sucesso
          </h1>
          <p className="text-[1rem] font-albert text-[rgba(131,131,131,1)] text-center mx-auto max-w-[40rem]">
            Nosso time é composto por especialistas apaixonados por saúde e bem-estar, prontos para guiar você em cada etapa da sua jornada. Porque cuidar de você é a nossa prioridade.
          </p>
        </div>

        <div className="p-6 mt-[4rem] md:mt-[3.25rem] rounded-[0.5rem] mb-[4rem] mx-auto bg-[#FFFFFF] mx-auto bg-equipe relative w-[92%] md:min-w-[30rem] md:w-2/5" style={{ height: '29.25rem', width: '67.25' }}>

          <div className="absolute top-[-20px] left-[10%] bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"></path></svg>
          </div>
          <div className="absolute top-[-20px] left-[50%] translate-x-[-50%] bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z" opacity="0.2"></path><path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path></svg>
          </div>

          <div className="absolute top-[-20px] right-[10%] bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M248,120v64a8,8,0,0,1-8,8H216a24,24,0,0,0-32-22.63h0A24,24,0,0,0,168,192H104a24,24,0,0,0-48,0H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184v56Z" opacity="0.2"></path><path d="M80,120a8,8,0,0,1,8-8h16V96a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16H120v16a8,8,0,0,1-16,0V128H88A8,8,0,0,1,80,120Zm176,0v64a16,16,0,0,1-16,16H223a32,32,0,0,1-62,0H111a32,32,0,0,1-62,0H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H184a8,8,0,0,1,8,8v8h34.58a15.93,15.93,0,0,1,14.86,10.06l14,35A7.92,7.92,0,0,1,256,120ZM192,88v24h44.18l-9.6-24ZM32,184H49a32,32,0,0,1,62,0h50a32.11,32.11,0,0,1,15-19.69V72H32Zm64,8a16,16,0,1,0-16,16A16,16,0,0,0,96,192Zm112,0a16,16,0,1,0-16,16A16,16,0,0,0,208,192Zm32-8V128H192v32a32.06,32.06,0,0,1,31,24Z"></path></svg>
          </div>

          <div className="absolute bottom-[-20px] left-[10%] bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M224,72V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H216A8,8,0,0,1,224,72Z" opacity="0.2"></path><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,200H40V72H216V200Zm-56-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,136Z"></path></svg>
          </div>
          <div className="absolute bottom-[-20px] left-[50%] translate-x-[-50%] bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M160,48V216H128V160H80v56H48V48a8,8,0,0,1,8-8h96A8,8,0,0,1,160,48Z" opacity="0.2"></path><path d="M248,208h-8V128a16,16,0,0,0-16-16H168V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208H32a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Zm-24-80v80H168V128ZM56,48h96V208H136V160a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48H56Zm64,160H88V168h32ZM72,96a8,8,0,0,1,8-8H96V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16H112v16a8,8,0,0,1-16,0V104H80A8,8,0,0,1,72,96Z"></path></svg>
          </div>

          <div className="absolute bottom-[-20px] right-[10%] bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M160,160l-50.75,50.75a45.26,45.26,0,0,1-64,0h0a45.26,45.26,0,0,1,0-64L96,96Z" opacity="0.2"></path><path d="M216.43,39.6a53.27,53.27,0,0,0-75.33,0L39.6,141.09a53.26,53.26,0,0,0,75.32,75.31L216.43,114.91A53.32,53.32,0,0,0,216.43,39.6ZM103.61,205.09h0a37.26,37.26,0,0,1-52.7-52.69L96,107.31,148.7,160ZM205.11,103.6,160,148.69,107.32,96l45.1-45.09a37.26,37.26,0,0,1,52.69,52.69ZM189.68,82.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,1,1-11.31-11.32l24-24A8,8,0,0,1,189.68,82.34Z"></path></svg>
          </div>

          <div className="absolute top-[20%] left-[-20px] transform translate-y-[-50%]  bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"></path></svg>
          </div>
          <div className="absolute top-[50%] right-[-20px] transform translate-y-[-50%] bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z" opacity="0.2"></path><path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path></svg>
          </div>

          <div className="absolute top-[50%] left-[-20px] transform translate-y-[-50%] bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M248,120v64a8,8,0,0,1-8,8H216a24,24,0,0,0-32-22.63h0A24,24,0,0,0,168,192H104a24,24,0,0,0-48,0H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184v56Z" opacity="0.2"></path><path d="M80,120a8,8,0,0,1,8-8h16V96a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16H120v16a8,8,0,0,1-16,0V128H88A8,8,0,0,1,80,120Zm176,0v64a16,16,0,0,1-16,16H223a32,32,0,0,1-62,0H111a32,32,0,0,1-62,0H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H184a8,8,0,0,1,8,8v8h34.58a15.93,15.93,0,0,1,14.86,10.06l14,35A7.92,7.92,0,0,1,256,120ZM192,88v24h44.18l-9.6-24ZM32,184H49a32,32,0,0,1,62,0h50a32.11,32.11,0,0,1,15-19.69V72H32Zm64,8a16,16,0,1,0-16,16A16,16,0,0,0,96,192Zm112,0a16,16,0,1,0-16,16A16,16,0,0,0,208,192Zm32-8V128H192v32a32.06,32.06,0,0,1,31,24Z"></path></svg>
          </div>

          <div className="absolute bottom-[80%] right-[-20px] transform translate-y-[50%] bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M224,72V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H216A8,8,0,0,1,224,72Z" opacity="0.2"></path><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,200H40V72H216V200Zm-56-64a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,136Z"></path></svg>
          </div>
          <div className="absolute bottom-[20%] left-[-0px] transform translate-x-[-50%] translate-y-[50%] bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M160,48V216H128V160H80v56H48V48a8,8,0,0,1,8-8h96A8,8,0,0,1,160,48Z" opacity="0.2"></path><path d="M248,208h-8V128a16,16,0,0,0-16-16H168V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208H32a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Zm-24-80v80H168V128ZM56,48h96V208H136V160a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48H56Zm64,160H88V168h32ZM72,96a8,8,0,0,1,8-8H96V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16H112v16a8,8,0,0,1-16,0V104H80A8,8,0,0,1,72,96Z"></path></svg>
          </div>
          <div className="absolute bottom-[20%] right-[-20px] transform translate-y-[50%] bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M160,160l-50.75,50.75a45.26,45.26,0,0,1-64,0h0a45.26,45.26,0,0,1,0-64L96,96Z" opacity="0.2"></path><path d="M216.43,39.6a53.27,53.27,0,0,0-75.33,0L39.6,141.09a53.26,53.26,0,0,0,75.32,75.31L216.43,114.91A53.32,53.32,0,0,0,216.43,39.6ZM103.61,205.09h0a37.26,37.26,0,0,1-52.7-52.69L96,107.31,148.7,160ZM205.11,103.6,160,148.69,107.32,96l45.1-45.09a37.26,37.26,0,0,1,52.69,52.69ZM189.68,82.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,1,1-11.31-11.32l24-24A8,8,0,0,1,189.68,82.34Z"></path></svg>
          </div>
        </div>


        <div className="p-3 flex justify-center mt-[8rem] items-center relative">
          <div className="relative bg-[rgba(250,247,242,1)] bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 w-full max-w-3xl mx-auto position-relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg bg-[#FFF2c0] rounded-full w-96 h-96 z-0 opacity-40"></div>
            <div className="text-center z-10 relative">
              <h1 className="text-[1rem] bg-opacity-70 text-[rgba(52,25,0,1)] bg-[rgba(255,255,255,1)]/60 md:bg-[rgba(255,255,255,1)]/60 rounded mt-8 uppercase font-albert font-semibold px-[1rem] py-[.5rem] tracking-[.1rem] inline-block">
                Você não está sozinha!
              </h1>
            </div>
            <h1 className="text-[2rem] text-[rgba(52,25,0,1)] text-center font-semibold font-literata items-center mt-[1rem] justify-center z-10 relative">
              Pronta para cuidar de si mesma <br /> <span className="italic">como nunca antes?</span>
            </h1>
            <p className="text-[1rem] text-[rgba(131,131,131,1)] text-center font-albert mt-[1rem] ml-4 mr-4 flex z-10 relative">
              O primeiro passo para transformar sua vida começa agora. Não espere mais para sentir-se confiante, saudável e feliz!
            </p>
            <div className="flex justify-center mt-[2rem] z-10 relative">
              <button className="bg-[#341900] text-white text-[1rem] font-albert font-semibold py-[1rem] px-[2rem] rounded-[.5rem]">
                Quero fazer meu programa!
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-full mx-auto relative min-h-[50rem] bg-[rgba(250,247,242,1)] bg-cover bg-no-repeat mb-8">
          <div className="block lg:hidden">
            <div className="justify-center items-center mb-[1.5rem] mt-[4rem] p-4 rounded-[.25rem] bg-[#FFFFFF] bg-faq relative w-auto mx-4" style={{ height: '40vh' }}>
              <div className="bg-white bg-opacity-60 border-2 rounded-[.25rem] py-2 flex flex-col">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#FFF2C0] rounded-xl px-3 py-1 w-fit">
                    <h2 className="text-[1rem] text-[#382513] text-center uppercase font-albert">FAQ</h2>
                  </div>
                </div>
                <h1 className="text-2xl text-[rgba(52,25,0,1)] text-center ml-4 mr-4 font-semibold font-literata">
                  Respondendo dúvidas que outras mulheres tiveram
                </h1>
              </div>
            </div>

            <div className="mt-4 px-4 p-[0.75rem]">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-300 py-2">
                  <button
                    className="flex justify-between items-center w-full text-left text-lg text-albert font-semibold text-[#382513]"
                    onClick={() => toggleFAQ(index)}
                  >
                    {item.question}
                    <div className="bg-[#FFF2C0] ml-2 rounded-full w-[1.75rem] h-[1.75rem] flex items-center justify-center">
                      {openIndex === index ? (
                        <IoIosArrowUp className="text-[1.5rem]" />
                      ) : (
                        <IoIosArrowDown className="text-[1.5rem]" />
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <p className="text-[1rem] text-gray-400">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex">
            <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center p-6">
              <div
                className="w-full md:w-1/2 flex flex-col justify-start items-start ml-10 mt-20 rounded-2xl bg-[#FFFFFF] bg-faq relative m-8"
                style={{ height: '60vh', width: '55vh' }}
              >
                <div className="ml-4 mr-4 mt-[1rem] p-[1rem] max-w-full bg-white bg-opacity-60 border-2 rounded-xl flex flex-col items-start">
                  <div className="flex justify-start mb-[1rem] w-full">
                    <div className="bg-[#FFF2C0] rounded-xl px-3 py-1 w-fit">
                      <h2 className="text-[1rem] text-[#382513] uppercase font-albert font-semibold px-[.75rem] py-[.38rem] tracking-[.1rem] ">FAQ</h2>
                    </div>
                  </div>
                  <h1 className="text-[2rem] text-[rgba(52,25,0,1)] font-medium text-left mb-[1rem] font-semibold font-literata">
                    Respondendo dúvidas que outras mulheres tiveram
                  </h1>
                </div>
              </div>

              <div className="max-w-[40rem] md:w-1/2 flex flex-col p-6 ml-[1.5rem]">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-300">
                    <button
                      className="flex justify-between items-center w-full h-[1.5rem] mb-[1.5rem] mt-[1.5rem] text-left text-xl font-albert font-semibold text-[#382513]"
                      onClick={() => toggleFAQ(index)}
                    >
                      {item.question}
                      <div className="bg-[#FFF2C0] ml-2 rounded-full w-[2.25rem] h-[2.25rem] flex items-center justify-center">
                        {openIndex === index ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
                            <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">
                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        )}
                      </div>
                    </button>
                    {openIndex === index && (
                      <p className="mt-2 text-[1rem] text-gray-400 font-albert">{item.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="faq" className="mt-10 bg-[#FFFBEC] py-6 text-center md:text-left">
        <div className="block md:hidden">
          {/* ------- LOGO DA EMPRESA AQUI ---------
          <div className="flex justify-center mb-4">
            <Image src="/logo.png" alt="Logo da Empresa" className="h-10" />
          </div>*/}
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaWhatsapp className="text-[2rem] text-[rgba(52,25,0,0.5)]" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaInstagram className="text-[2rem] text-[rgba(52,25,0,0.5)]" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <CiFacebook className="text-[2rem] text-[rgba(52,25,0,0.5)]" />
            </a>
          </div>
          <p className="text-[rgba(52,25,0,0.5)]"><span className="font-semibold">CNPJ:</span> 00.000.000/0000-00</p>
          <p className="text-[rgba(52,25,0,0.5)]"><span className="font-semibold">Localização:</span> Rua Exemplo, 123 - Cidade, Estado</p>
          <p className="text-[rgba(52,25,0,0.5)] font-semibold mt-2">Menopausa</p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center justify-center h-[20rem] space-y-2">
            {/* ------------ LOGO DA EMPRESA AQUI ------------*/}
            {/*<Image src="/logo.png" alt="Logo da Empresa" className="h-10" /> */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M128,32A96,96,0,0,0,44.89,176.07L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47A96,96,0,1,0,128,32Zm24,152a80,80,0,0,1-80-80,32,32,0,0,1,32-32l16,32-12.32,18.47a48.19,48.19,0,0,0,25.85,25.85L152,136l32,16A32,32,0,0,1,152,184Z" opacity="0.2"></path><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.62-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"></path><path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="[rgba(172,125,83,1)]" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-2">
            <p className="text-[rgba(52,25,0,0.5)]"> <span className="font-semibold">CNPJ:</span> 00.000.000/0000-00</p>
            <p className="text-[rgba(52,25,0,0.5)]"> <span className="font-semibold">Localização:</span> Rua Exemplo, 123 - Cidade, Estado</p>
          </div>

          <div className="flex flex-col items-end justify-center space-y-2 mr-8">
            <div className="flex space-x-4 mr-[4rem]">
              <div className="space-y-2 mr-[1rem]">
                <a href="#menopausa" className="text-[rgba(52,25,0,0.5)] hover:text-[rgba(52,25,0,1)] hover:font-bold block">Menopausa</a>
                <a href="#home" className="text-[rgba(52,25,0,0.5)] mb-[1rem] hover:text-[rgba(52,25,0,1)] hover:font-bold block">Como funciona?</a>
                <a href="#kit" className="text-[rgba(52,25,0,0.5)] mb-[1rem] hover:text-[rgba(52,25,0,1)] hover:font-bold block">Kit exclusivo</a>
                <a href="#historia" className="text-[rgba(52,25,0,0.5)] mb-[1rem] hover:text-[rgba(52,25,0,1)] hover:font-bold block">Histórias de sucesso</a>
              </div>
              <div className="space-y-2">
                <a href="#beneficio" className="text-[rgba(52,25,0,0.5)] mb-[1rem] hover:text-[rgba(52,25,0,1)] hover:font-bold block">Exclusividade e <br /> benefícios</a>
                <a href="#equipe" className="text-[rgba(52,25,0,0.5)] mb-[1rem] hover:text-[rgba(52,25,0,1)] hover:font-bold block">Equipe</a>
                <a href="#faq" className="text-[rgba(52,25,0,0.5)] hover:text-[rgba(52,25,0,1)] hover:font-bold block">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}