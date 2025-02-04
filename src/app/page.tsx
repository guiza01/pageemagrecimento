"use client";
import { useState } from "react";
import { HiArrowTrendingDown } from "react-icons/hi2";
import { AiOutlineWoman } from "react-icons/ai";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBodyOutline } from "react-icons/io5";
import { CiMedicalCase } from "react-icons/ci";
import { FaTruckMedical } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { PiStethoscopeLight } from "react-icons/pi";
import { PiHospital } from "react-icons/pi";
import { BsCapsule } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";
import { PiMicroscopeDuotone } from "react-icons/pi";
import { PiCookingPotDuotone } from "react-icons/pi";
import { PiPersonSimpleRun } from "react-icons/pi";
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
    { question: "Preciso de acompanhamento constante?", answer: "Não, este serviço é totalmente gratuito." },
    { question: "O Ozempic é obrigatório?", answer: "Não, este serviço é totalmente gratuito." },
    { question: "Quanto custa o programa?", answer: "Não, este serviço é totalmente gratuito." },
  ];

  type ClickedKey = 'caixa' | 'semaglutida' | 'kitExercicio' | 'squeeze' | 'guia' | 'surpresa';

  const [clicked, setClicked] = useState<{ [key in ClickedKey]: boolean }>({
    caixa: false,
    semaglutida: false,
    kitExercicio: false,
    squeeze: false,
    guia: false,
    surpresa: false,
  });

  const handleClick = (key: ClickedKey) => {
    setClicked((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const testimonials = [
    {
      before: "/antes.png",
      after: "/depois.png",
      quote:
        "Eu já tinha tentado tantas dietas e academias, mas nenhuma me ajudava de verdade. Com o Programa Essência, finalmente consegui entender meu corpo e alcançar resultados que jamais pensei ser possível!",
      author: "Mariana, 47 anos",
      result: "Perdeu 12kg em 6 meses, mais energia e autoestima renovada."
    },
    {
      before: "/antes.png",
      after: "/depois.png",
      quote:
        "Nada funcionava para mim até que conheci esse programa. Hoje me sinto mais confiante e feliz!",
      author: "Carlos, 35 anos",
      result: "Eliminou 8kg e ganhou mais disposição para o dia a dia."
    },
    {
      before: "/antes.png",
      after: "/depois.png",
      quote:
        "Descobri um estilo de vida sustentável que me fez emagrecer sem sofrimento!",
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
            <h2 className="bg-[#F9D689] bg-opacity-10 text-[1rem] text-[#FFF2C0] rounded uppercase font-albert mb-5 mt-20 px-[0.75rem] py-[0.38rem] inline-block md:text-[1rem] md:px-[1rem] md:py-[0.5rem] md:tracking-[0.1rem] text-[0.875rem]">
              RESTAM APENAS 15 VAGAS!
            </h2>


            <h1 className="text-[1.25rem] text-white mb-5 font-literata md:text-[2.5rem] md:font-medium md:leading-[130%]">
              Programa Essência: Emagrecimento inteligente para{" "}
              <span className="text-[#F9D689] italic">mulheres em Natal.</span>
            </h1>

            <p className="text-[0.875rem] font-semibold text-white mb-5 font-literata md:text-[1.5rem] md:font-medium md:leading-[130%]">
              Proteção muscular e resultados duradouros baseados na ciência.
            </p>

            <p className="text-[0.875rem] mb-5 md:text-[1rem] font-albert md:leading-[150%] text-[#CECECE]">
              Um programa personalizado que respeita sua individualidade metabólica
              e cuida da sua saúde de forma completa.{" "}
              <span className="font-bold">Resultados duradouros, sem efeitos radicais.</span>
            </p>

            <div className="md:mt-[3rem] relative z-10">
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

      <div className="md:mx-[4rem] md:my-[4.38rem]">
        <div className="relative min-h-screen md:min-h-[calc(100vh-4rem-4.38rem)] md:rounded-2xl bg-gray-100 bg-pilates bg-cover bg-no-repeat p-6 md:p-[4rem_4.38rem]">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between p-6 md:p-16 md:border-2 md:border-white/20 rounded-lg">
            <div className="mb-10 md:mb-0 md:w-1/2">
              <h2 className="bg-[#FFF2C0] text-lg text-[#382513] uppercase rounded font-semibold font-albert mb-5 mt-20 px-3 py-1 inline-block">
                O desafio da menopausa
              </h2>
              <h1 className="text-[2.5rem] text-white font-literata">O que acontece com seu corpo?</h1>
            </div>
            <div className="md:w-1/2">
              <div className="border-8 border-[#FFFFFF] border-opacity-5 rounded-xl bg-[rgba(33,16,0,0.15)] backdrop-blur-[15px] p-6">
                <h3 className="text-white ml-4 mr-4 flex gap-3 items-center mt-5 font-literata text-[1.25rem] leading-[130%] font-semibold">
                  <AiOutlineWoman className="text-[2rem] text-[#F1C183]" /> Menopausa
                </h3>
                <p className="text-[#FFFBEC] ml-4 mr-4 mt-[0.75rem] font-albert leading-[150%]">
                  Durante a menopausa, o corpo feminino sofre alterações hormonais que dificultam a perda de peso.
                </p>
                <h3 className="text-white ml-4 mr-4 flex gap-3 items-center mt-[1.5rem] font-literata text-[1.25rem] leading-[130%] font-semibold">
                  <HiArrowTrendingDown className="text-[2rem] text-[#F1C183]" /> Alterações hormonais
                </h3>
                <p className="text-[#FFFBEC] ml-4 mr-4 mt-[0.75rem] mb-[1.5rem] font-albert leading-[150%]">
                  As mudanças nos níveis de estrogênio e testosterona afetam diretamente o metabolismo e a distribuição de gordura.
                </p>
                <div className="w-[90%] h-[1px] bg-opacity-30 bg-gray-300 my-4 mx-auto"></div>
                <p className="text-[#FFFBEC] ml-4 mr-4 mt-[1.5rem] mb-5 font-albert text-[1.125rem] leading-[150%]">
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
              <h1 className="text-3xl font-semibold flex gap-2 items-center mb-5 font-literata">
                <HiArrowTrendingDown className="text-[2rem]" color="#F1C183" />
                Diminuição de Testosterona
              </h1>
              <p className="text-xl font-albert text-gray-500 mb-5">
                A testosterona, responsável pela preservação muscular, também diminui na menopausa. Isso contribui para a perda de massa muscular e aceleração do ganho de peso, conforme estudo.
              </p>
              <p className="text-lg font-albert mt-5 text-gray-400 mb-[4rem]">
                Fonte: Journal of Clinical Endocrinology & Metabolism.
              </p>
            </div>
          </div>

          <div className="block md:hidden p-6 mx-auto relative bg-[rgba(250,247,242,1)] bg-gra1 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
          <div className="block md:hidden bg-[rgba(250,247,242,1)] p-6">
            <h1 className="text-[1.25rem] font-semibold flex gap-2 items-center mb-5 font-literata">
              <HiArrowTrendingDown className="text-[1.5rem]" color="#F1C183" />
              Diminuição de Testosterona
            </h1>
            <p className="text-[1rem] flex font-albert text-gray-500">
              A testosterona, responsável pela preservação muscular, também diminui na menopausa. Isso contribui para a perda de massa muscular e aceleração do ganho de peso, conforme estudo.
            </p>
            <p className="text-[1rem] flex mt-5 font-albert text-gray-400 mb-[4rem]">
              Fonte: Journal of Clinical Endocrinology & Metabolism.
            </p>
          </div>
        </div>

        <div className="bg-[rgba(250,247,242,1)]">
          <div className="hidden md:flex flex-row mt-16">
            <div className="md:w-1/2 bg-[rgba(250,247,242,1)] p-6">
              <h1 className="text-3xl font-semibold flex gap-2 items-center mb-5 font-literata">
                <AiOutlineFieldTime className="text-[2rem]" color="#F1C183" />
                Metabolismo mais lento
              </h1>
              <p className="text-xl font-albert text-gray-500 mb-5">
                Após a menopausa, seu metabolismo pode cair até 10%. A perda de massa muscular diminui o gasto energético diário, tornando a perda de peso mais difícil.
              </p>
              <p className="text-lg font-albert mt-5 text-gray-400 mb-[4rem]">
                Fonte: American Journal of Clinical Nutrition
              </p>
            </div>
            <div className="md:w-1/2 bg-gra2 p-6 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
          </div>

          <div className="block md:hidden p-6 mx-auto relative bg-[rgba(250,247,242,1)] bg-gra2 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
          <div className="bg-[rgba(250,247,242,1)] p-6 md:hidden">
            <h1 className="text-[1.25rem] font-semibold flex gap-2 items-center mb-5 font-literata">
              <AiOutlineFieldTime className="text-[1.5rem]" color="#F1C183" />
              Metabolismo mais lento
            </h1>
            <p className="text-[1rem] flex font-albert text-gray-500">
              Após a menopausa, seu metabolismo pode cair até 10%. A perda de massa muscular diminui o gasto energético diário, tornando a perda de peso mais difícil.
            </p>
            <p className="text-[1rem] flex mt-5 mb-[4rem] font-albert text-gray-400">
              Fonte: American Journal of Clinical Nutrition
            </p>
          </div>
        </div>

        <div className="bg-[rgba(250,247,242,1)]">
          <div className="hidden md:flex flex-row mt-16">
            <div className="md:w-1/2 bg-gra3 p-6 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
            <div className="md:w-1/2 bg-[rgba(250,247,242,1)] p-6">
              <h1 className="text-3xl mr-4 font-semibold flex gap-2 items-center mb-5 justify-start font-literata">
                <AiOutlineWoman className="text-[2rem]" color="#F1C183" />
                Redução do Estrogênio
              </h1>
              <p className="text-xl mr-4 flex font-albert text-gray-500">
                A queda do estrogênio durante a menopausa faz com que a gordura se acumule na região abdominal, um fator conhecido por aumentar o risco de doenças metabólicas e cardiovasculares.
              </p>
              <p className="text-lg mr-4 flex mt-5 font-albert text-gray-400 mb-[4rem]">
                Fonte: Journal of Clinical Endocrinology & Metabolism.
              </p>
            </div>
          </div>

          <div className="block md:hidden p-6 mx-auto relative bg-[rgba(250,247,242,1)] bg-gra3 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
          <div className="bg-[rgba(250,247,242,1)] p-6 md:hidden">
            <h1 className="text-[1.25rem] font-semibold flex gap-2 items-center mb-5 justify-center font-literata">
              <AiOutlineWoman className="text-[1.5rem]" color="#F1C183" />
              Redução do Estrogênio
            </h1>
            <p className="text-[1rem] flex font-albert text-gray-500">
              A queda do estrogênio durante a menopausa faz com que a gordura se acumule na região abdominal, um fator conhecido por aumentar o risco de doenças metabólicas e cardiovasculares.
            </p>
            <p className="text-[1rem] flex mt-5 font-albert text-gray-400 mb-[4rem]">
              Fonte: Journal of Clinical Endocrinology & Metabolism.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center min-h-[40vh]">
            <h1 className="text-[2rem] text-[rgba(52,25,0,1)] mx-4 font-semibold items-center mt-4 mb-3 text-center font-literata max-w-[40rem]">
              A boa notícia? Nós sabemos como ajudar você a <i>superar esses desafios!</i>
            </h1>
            <div className="flex justify-center items-center">
              <div className="border-2 bg-[#FFF2C0] rounded-full flex justify-center items-center w-8 h-8">
                <IoIosArrowDown className="text-[rgba(52,25,0,1)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[80vh] md:min-h-[60vh] bg-[#FFFBEC] bg-cover pb-20 md:mx-[9ren] md:my-[6rem]">
        <div className="pt-10">
          <div className="hidden md:block text-center">
            <h1 className="max-w-[640px] text-[2rem] font-semibold mb-[1rem] mx-auto font-literata text-[rgba(52,25,0,1)]">
              Como nosso programa exclusivo ajudará você a <span className="italic">emagrecer de forma sustentável</span>?
            </h1>
            <p className="max-w-[640px] text-[1rem] text-gray-500 mx-auto font-albert mb-10">
              Durante o emagrecimento, a preservação da massa muscular é a chave para manter seu metabolismo ativo. Músculos queimam mais calorias do que gordura, mesmo em repouso. Então, ao preservar seus músculos enquanto você pode perder gordura, você mantém seu metabolismo acelerado.
            </p>
          </div>

          <div className="block md:hidden text-center">
            <h1 className="text-[1.5rem] ml-[1rem] mr-[1rem] font-semibold text-start mb-5 font-literata text-[rgba(52,25,0,1)]">
              Como nosso programa exclusivo ajudará você a <span className="italic">emagrecer de forma sustentável</span>?
            </h1>
            <p className="text-[1rem] text-rgba(131,131,131,1) ml-[1rem] mr-[1rem] text-start flex font-albert">
              Durante o emagrecimento, a preservação da massa muscular é a chave para manter seu metabolismo ativo. Músculos queimam mais calorias do que gordura, mesmo em repouso. Então, ao preservar seus músculos enquanto você pode perder gordura, você mantém seu metabolismo acelerado.
            </p>
          </div>

          <div className="hidden md:flex justify-center gap-[1.37rem] mt-10">
            <div className="relative flex flex-col items-center h-[9rem] w-[15rem]">
              <div className="bg-white border-[8px] border-opacity-30 border-white shadow-lg rounded-2xl mx-[1.37rem] p-4 border-solid border-[1px] border-[#F1C183] flex flex-col items-center h-full w-full">
                <BsPatchCheck className="text-[#AC7D53] text-3xl mb-2" />
                <h1 className="text-[1.5rem] text-center font-literata text-[rgba(52,25,0,1)] leading-tight">
                  Programa <br /> Personalizado
                </h1>
              </div>
            </div>
            <div className="relative flex flex-col items-center mt-[4.12rem] h-[9rem] w-[20rem]">
              <div className="bg-white border-[8px] border-opacity-30 border-white shadow-lg rounded-2xl mx-[1.37rem] p-4 border-solid border-[1px] border-[#F1C183] flex flex-col items-center h-full w-full">
                <BsPatchCheck className="text-[#AC7D53] text-3xl mb-2" />
                <h1 className="text-[1.5rem] text-center font-literata text-[rgba(52,25,0,1)] leading-tight">
                  Emagreça sem <br /> perder massa muscular
                </h1>
              </div>
            </div>
            <div className="relative flex flex-col items-center h-[9rem] w-[15rem]">
              <div className="bg-white border-[8px] border-opacity-30 border-white shadow-lg rounded-2xl mx-[1.37rem] p-4 border-solid border-[1px] border-[#F1C183] flex flex-col items-center h-full w-full">
                <BsPatchCheck className="text-[#AC7D53] text-3xl mb-2" />
                <h1 className="text-[1.5rem] text-center font-literata text-[rgba(52,25,0,1)] leading-tight">
                  Evite o <br /> efeito sanfona
                </h1>
              </div>
            </div>
          </div>

          <div className="block md:hidden mt-5">
            <div className="bg-white border-2 rounded-2xl ml-5 mr-5 mt-5 flex flex-col items-center p-6">
              <BsPatchCheck className="text-[#AC7D53] text-[1.5rem]" />
              <h1 className="text-[1.25rem] text-center font-literata">Programa personalizado</h1>
            </div>
            <div className="bg-white border-2 rounded-2xl ml-5 mr-5 mt-5 flex flex-col items-center p-6">
              <BsPatchCheck className="text-[#AC7D53] text-[1.5rem]" />
              <h1 className="text-[1.25rem] text-center font-literata">Emagreça sem perder massa muscular</h1>
            </div>
            <div className="bg-white border-2 rounded-2xl ml-5 mr-5 mt-5 flex flex-col items-center p-6">
              <BsPatchCheck className="text-[#AC7D53] text-[1.5rem]" />
              <h1 className="text-[1.25rem] text-center font-literata">Evite o efeito sanfona</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-screen mt-16 mr-4 bg-[rgba(250,247,242,1)] bg-cover bg-no-repeat mt-[4rem] mb-[4rem]">
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
              <span className="text-[#AC7D53]"> saudável e sustentável.</span>
            </h1>
            <p className="text-xl text-[rgba(100,100,100,1)] flex font-albert">
              A sua jornada começa aqui. Agende sua consulta inicial e descubra como podemos ajudar você a alcançar resultados duradouros.
            </p>
            <button className="mt-16 bg-[#341900] w-[30%] text-white text-lg font-semibold font-albert py-3 px-6 rounded-xl">
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

        <div className="md:hidden mr-4">
          <Image
            src="/completa.png"
            alt="Imagem mobile"
            width={340}
            height={250}
            className="object-cover rounded-xl mx-5 mt-16"
          />

          <h1 className="text-[1.5rem] ml-4 font-semibold text-[rgba(52,25,0,1)] gap-2 items-center mb-5 mt-[1rem] font-literata">
            Não é sobre perder peso, mas sobre transformar seu corpo de forma
            <span className="text-[#AC7D53]"> saudável e sustentável.</span>
          </h1>
          <p className="text-xl ml-4 flex font-albert">
            A sua jornada começa aqui. Agende sua consulta inicial e descubra como podemos ajudar você a alcançar resultados duradouros.
          </p>
          <button className="mt-[4rem] ml-4 mb-[4rem] bg-[#341900] w-[100%] text-white text-lg font-semibold py-3 px-6 rounded-lg">
            Agendar Agora
          </button>
        </div>
      </div>

      <div>
        <div className="p-6 min-h-screen max-w-md mx-auto bg-clorblur bg-no-repeat lg:hidden">
          <div className="text-center">
            <h2 className="text-lg px-3 py-1 text-[#FFF2C0] bg-[#F9D689] rounded bg-opacity-10 uppercase font-albert mt-8 inline-block">
              Entenda
            </h2>
          </div>
          <h1 className="text-3xl text-center text-white ml-4 mr-4 font-literata items-center mt-8 justify-center">
            Como funciona o <i>Programa Essência?</i>
          </h1>
          <p className="text-xl text-white text-center mt-8 ml-4 mr-4 flex font-albert">
            Nosso programa é baseado em evidências científicas, com métodos validados que garantem que você perca peso sem comprometer sua saúde ou seu metabolismo.
          </p>

          <div
            className="p-6 mt-16 rounded-3xl ml-5 mr-5 relative bg-redonda"
            style={{ height: "35vh", borderRadius: "50%" }}
          ></div>

          {[
            {
              title: "Avaliação Completa",
              text: "Consultas presenciais com exames detalhados e plano personalizado.",
              icon: <BsPatchCheck className="text-xl text-[rgba(255,242,192,1)]" />,
            },
            {
              title: "Uso de Tecnologia Avançada",
              text: "Medicamentos e técnicas que potencializam seus resultados.",
              icon: <PiMicroscopeDuotone className="text-xl text-[rgba(255,242,192,1)]" />,
            },
            {
              title: "Treinos Rápidos e Eficientes",
              text: "Feitos online, adaptados ao seu corpo e à sua rotina.",
              icon: <PiPersonSimpleRun className="text-xl text-[rgba(255,242,192,1)]" />,
            },
            {
              title: "Dieta Personalizada",
              text: "Desenvolvida com base nas suas preferências alimentares e necessidades metabólicas.",
              icon: <PiCookingPotDuotone className="text-xl text-[rgba(255,242,192,1)]" />,
            },
            {
              title: "Acompanhamento Contínuo",
              text: "Suporte dedicado de médicos, nutricionistas e personal trainers.",
              icon: <PiStethoscopeLight className="text-xl text-[rgba(255,242,192,1)]" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border-4 border-white/20 rounded-2xl bg-opacity-10 ml-5 mr-5 mt-16 flex items-center flex-col p-6"
            >
              <h1 className="text-xl text-white flex items-center font-literata gap-2 text-left w-full">
                {item.icon}
                {item.title}
              </h1>
              <p className="text-white mt-4 font-albert">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex flex-col items-center bg-clorblur min-h-screen py-16">
          <h2 className="text-lg px-3 py-1 text-[#FFF2C0] bg-[#F9D689] rounded bg-opacity-10 uppercase font-albert mb-8">
            Entenda
          </h2>
          <h1 className="text-[2rem] text-center text-white font-literata mb-8">
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
                icon: <BsPatchCheck className="text-2xl text-[rgba(255,242,192,1)]" />,
              },
              {
                title: "Uso de Tecnologia Avançada",
                text: "Medicamentos e técnicas que potencializam seus resultados.",
                icon: <PiMicroscopeDuotone className="text-2xl text-[rgba(255,242,192,1)]" />,
              },
              {
                title: "Treinos Rápidos e Eficientes",
                text: "Feitos online, adaptados ao seu corpo e à sua rotina.",
                icon: <PiPersonSimpleRun className="text-2xl text-[rgba(255,242,192,1)]" />,
              },
              {
                title: "Dieta Personalizada",
                text: "Desenvolvida com base nas suas preferências alimentares e necessidades metabólicas.",
                icon: <PiCookingPotDuotone className="text-2xl text-[rgba(255,242,192,1)]" />,
              },
              {
                title: "Acompanhamento Contínuo",
                text: "Suporte dedicado de médicos, nutricionistas e personal trainers.",
                icon: <PiStethoscopeLight className="text-2xl text-[rgba(255,242,192,1)]" />,
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
                <h1 className="text-xl text-white font-literata mb-4 flex items-center gap-2">
                  {item.icon} {item.title}
                </h1>
                <p className="text-white font-albert">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="kit" className="p-3 max-w-screen mx-auto relative min-h-screen bg-[rgba(250,247,242,1)] bg-cover bg-no-repeat mt-[4rem] mb-8 md:max-w-6xl md:flex md:flex-col md:items-center md:justify-center">
        <div className="flex flex-col md:items-center items-start">
          <h2 className="text-lg text-[#382513] bg-[#FFF2C0] rounded uppercase font-albert px-3 py-1 inline-block self-start md:self-center">
            exclusividade essencial
          </h2>
          <h1 className="text-3xl ml-4 mr-4 font-semibold font-literata gap-2 mb-5 mt-8 text-start md:text-center">
            Bem-vinda ao primeiro passo da sua
            <span className="font-literata italic"> transformação!</span>
          </h1>
          <p className="text-[1rem] text-[rgba(131,131,131,1)] font-albert ml-4 mr-4 flex text-start md:text-center leading-[130%]">
            Cada detalhe foi pensado para tornar sua experiência única e motivadora. Ao se juntar ao nosso programa, você receberá um kit exclusivo, repleto de itens úteis e sofisticados que simbolizam nosso compromisso com o seu bem-estar.
          </p>
          <h1 className="text-[1.5rem] text-[#AC7D53] ml-4 mr-4 font-semibold font-literata flex gap-2 mt-8 text-center">
            O que vem no Presskit?
          </h1>
        </div>

        <div className="md:flex md:gap-6 md:items-center mt-8 md:w-full">
          <div className="md:w-1/3 flex flex-col gap-5">
            <div
              onClick={() => handleClick('caixa')}
              className={`${clicked.caixa ? 'bg-[#FFF2C0] text-black' : 'bg-gray-100 text-[rgba(131,131,131,1)]'
                } border-4 border-gray/60 rounded-2xl ml-5 mr-5 mt-5 flex flex-col font-semibold items-center p-6 cursor-pointer`}
            >
              <h1 className="text-xl text-center">Caixa do Presskit</h1>
            </div>
            <div
              onClick={() => handleClick('semaglutida')}
              className={`${clicked.semaglutida ? 'bg-[#FFF2C0] text-black' : 'bg-gray-100 text-[rgba(131,131,131,1)]'
                } border-4 border-gray/60 rounded-2xl ml-5 mr-5 mt-5 flex flex-col font-semibold items-center p-6 cursor-pointer`}
            >
              <h1 className="text-xl text-center">SEMAglutida <br /> (Ozempic)</h1>
            </div>
            <div
              onClick={() => handleClick('kitExercicio')}
              className={`${clicked.kitExercicio ? 'bg-[#FFF2C0] text-black' : 'bg-gray-100 text-[rgba(131,131,131,1)]'
                } border-4 border-gray/60 rounded-2xl ml-5 mr-5 mt-5 flex flex-col font-semibold items-center p-6 cursor-pointer`}
            >
              <h1 className="text-xl text-center">Kit Exercício em Casa</h1>
            </div>
          </div>

          <div
            className="flex justify-center items-center mx-auto mt-5 md:ml-0 md:mt-0 rounded-3xl bg-[rgba(250,247,242,1)] bg-garrafa md:w-1/3 md:flex md:justify-center"
            style={{ height: '50vh', width: '33vh' }}
          ></div>

          <div className="md:w-1/3 flex flex-col gap-5">
            <div
              onClick={() => handleClick('squeeze')}
              className={`${clicked.squeeze ? 'bg-[#FFF2C0] text-black' : 'bg-gray-100 text-[rgba(131,131,131,1)]'
                } border-4 border-gray/60 rounded-2xl ml-5 mr-5 mt-5 flex flex-col font-semibold items-center p-6 cursor-pointer`}
            >
              <h1 className="text-xl text-center">Squeeze Personalizada</h1>
            </div>
            <div
              onClick={() => handleClick('guia')}
              className={`${clicked.guia ? 'bg-[#FFF2C0] text-black' : 'bg-gray-100 text-[rgba(131,131,131,1)]'
                } border-4 border-gray/60 rounded-2xl ml-5 mr-5 mt-5 flex flex-col font-semibold items-center p-6 cursor-pointer`}
            >
              <h1 className="text-xl text-center">Guia de Introdução ao Programa</h1>
            </div>
            <div
              onClick={() => handleClick('surpresa')}
              className={`${clicked.surpresa ? 'bg-[#FFF2C0] text-black' : 'bg-gray-100 text-[rgba(131,131,131,1)]'
                } border-4 border-gray/60 rounded-2xl ml-5 mr-5 mt-5 flex flex-col font-semibold items-center p-6 cursor-pointer`}
            >
              <h1 className="text-xl text-center">Itens Surpresa</h1>
            </div>
          </div>
        </div>
      </div>

      <div id="historia" className="p-3 mt-[4rem] max-w-md mx-auto relative min-h-screen bg-[rgba(250,247,242,1)] bg-cover bg-no-repeat mb-8 md:max-w-6xl md:flex md:flex-col md:items-center md:justify-center">
        <div className="text-center md:w-full">
          <h2 className="text-lg text-[#382513] bg-[#FFF2C0] rounded uppercase font-albert px-3 py-1 inline-block mb-[1rem]">
            Transformações que inspiram.
          </h2>
          <h1 className="text-[2rem] text-center font-semibold leading-[130%] font-literata gap-2 items-center mb-[2rem] md:mb-[4rem]">
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
                className="rounded-2xl"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={testimonials[activeIndex].after}
                alt="Depois"
                width={300}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col gap-4 md:text-left md:ml-8 md:self-end">
            <h1 className="text-[1.5rem] leading-[150%] text-[rgba(52,25,0,1)] gap-2 items-center mt-[2rem] font-albert">
              {testimonials[activeIndex].quote}
            </h1>
            <p className="text-[rgba(131,131,131,1)] text-xl font-albert italic mt-[1rem]">
              - {testimonials[activeIndex].author}
            </p>
            <p className="text-[rgba(131,131,131,1)] text-xl font-albert mt-[1rem]">
              {testimonials[activeIndex].result}
            </p>
            <div className="flex gap-1 mt-[2rem]">
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

      <div id="beneficio" className="p-3 mx-auto mt-[4rem] relative min-h-screen bg-[rgba(250,247,242,1)] bg-cover bg-no-repeat mb-16 w-full md:w-4/5">
        <div className="hidden md:block">
          <div className="relative mt-8">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-start relative">
              <div className="flex justify-center items-center mb-8 rounded bg-[#FFFFFF] relative md:w-1/2 w-full" style={{ height: '60vh' }}>
                <img src="/mulheres.png" alt="Imagem Exemplo" className="rounded" width="600" height="560" />
              </div>
              <div
                className="absolute rounded-xl inset-0 flex justify-center items-center"
                style={{
                  top: '-6rem',
                  left: '2rem',
                  right: '0',
                  bottom: '5rem',
                  opacity: 1.2,
                  border: '8px solid rgba(14, 13, 13, 0.1)',
                  background: 'rgba(255, 255, 255, 0.50)',
                  boxShadow: '0px 2px 20px 0px rgba(0, 0, 0, 0.10)',
                  width: 'calc(60% - 4rem)',
                  minHeight: '20rem',
                  zIndex: 1
                }}
              >
                <div className="md:text-left text-center w-full max-w-4xl px-4">
                  <h1 className="text-lg text-[#382513] bg-[#FFF2C0] rounded mt-8 uppercase font-albert px-2 py-1 inline-block">
                    exclusividade e benefícios
                  </h1>
                  <h1 className="mt-[1rem] text-[2rem] text-[rgba(52,25,0,1)] text-semibold font-literata gap-2 items-center mb-[2.5rem]">
                    Uma experiência exclusiva que garante o seu sucesso!
                  </h1>
                  <div className="mt-[1.5rem] border-b border-transparent border-b-[rgba(172,125,83,0.2)]">
                    <h1 className="flex text-lg text-[rgba(52,25,0,1)] items-center gap-2 font-literata font-bold">
                      <FaPeopleGroup className="text-[1.5rem] text-[#AC7D53]" />
                      Apenas 30 vagas por mês
                    </h1>
                    <p className="font-albert mb-[1.5rem] text-[rgba(52,25,0,1)]">para garantir o cuidado que você merece.</p>
                  </div>
                  <div className="mt-[1.5rem] border-b border-transparent border-b-[rgba(172,125,83,0.2)]">
                    <h1 className="flex text-lg text-[rgba(52,25,0,1)] items-center gap-2 font-literata font-bold">
                      <PiStethoscopeLight className="text-[1.5rem] text-[#AC7D53]" />
                      Equipe dedicada ao seu sucesso
                    </h1>
                    <p className="font-albert mb-[1.5rem] text-[rgba(52,25,0,1)]">médicos, nutricionistas e personal trainers renomados.</p>
                  </div>
                  <div className="mt-[1.5rem] border-b mb-[1.5rem] border-transparent border-b-[rgba(172,125,83,0.2)]">
                    <h1 className="flex text-lg text-[rgba(52,25,0,1)] items-center gap-2 font-literata font-bold">
                      <IoBodyOutline className="text-[1.5rem] text-[#AC7D53]" />
                      Comunidade que apoia e motiva
                    </h1>
                    <p className="font-albert mb-[1.5rem] text-[rgba(52,25,0,1)]">você nunca estará sozinha nessa jornada.</p>
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
          <div className="rounded-xl flex justify-center items-center z-10" style={{
            margin: '0 auto',
            opacity: 1.2,
            border: '8px solid rgba(14, 13, 13, 0.1)',
            background: 'rgba(255, 255, 255, 0.50)',
            boxShadow: '0px 2px 20px 0px rgba(0, 0, 0, 0.10)',
            width: '90%',
            minHeight: '20rem',
            marginTop: '-4rem'
          }}>
            <div className="text-center w-full px-4 z-10">
              <h1 className="text-lg  text-[#382513] bg-[#FFF2C0] rounded mt-8 uppercase font-albert px-2 py-1 inline-block">
                Exclusividade e benefícios
              </h1>
              <h1 className="mt-[1rem] text-start text-[1.5rem] text-[rgba(52,25,0,1)] text-semibold font-literata gap-2 items-center mb-[2.5rem]">
                Uma experiência exclusiva que garante o seu sucesso!
              </h1>
              <div className="mt-[1.5rem] border-b border-transparent border-b-[rgba(172,125,83,0.2)]">
                <h1 className="flex text-lg text-start text-[rgba(52,25,0,1)] items-center gap-2 font-literata font-bold">
                  <FaPeopleGroup className="text-[1.5rem] text-[#AC7D53]" />
                  Apenas 30 vagas por mês
                </h1>
                <p className="font-albert mb-[1.5rem] text-start text-[rgba(52,25,0,1)]">para garantir o cuidado que você merece.</p>
              </div>
              <div className="mt-[1.5rem] border-b border-transparent border-b-[rgba(172,125,83,0.2)]">
                <h1 className="flex text-lg text-[rgba(52,25,0,1)] text-start items-center gap-2 font-literata font-bold">
                  <PiStethoscopeLight className="text-[1.5rem] text-[#AC7D53]" />
                  Equipe dedicada ao seu sucesso
                </h1>
                <p className="font-albert mb-[1.5rem] text-start text-[rgba(52,25,0,1)]">médicos, nutricionistas e personal trainers renomados.</p>
              </div>
              <div className="mt-[1.5rem] border-b mb-[1.5rem] border-transparent border-b-[rgba(172,125,83,0.2)]">
                <h1 className="flex text-lg text-[rgba(52,25,0,1)] text-start items-center gap-2 font-literata font-bold">
                  <IoBodyOutline className="text-[1.5rem] text-[#AC7D53]" />
                  Comunidade que apoia e motiva
                </h1>
                <p className="font-albert mb-[1.5rem] text-[rgba(52,25,0,1)] text-start">você nunca estará sozinha nessa jornada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="equipe">
        <div className="text-center md:w-4/5 mx-auto">
          <h1 className="text-lg  text-[#382513] bg-[#FFF2C0] rounded mt-8 uppercase font-albert mb-5 px-2 py-1 inline-block">
            Conheça a equipe que vai cuidar de você
          </h1>
          <h1 className="mb-4 text-[2rem] font-literata flex items-center justify-center gap-2">
            Uma equipe dedicada ao seu sucesso
          </h1>
          <p className="text-[1rem] font-albert text-gray-500 text-center mx-4">
            Nosso time é composto por especialistas apaixonados por saúde e bem-estar, prontos para guiar você em cada etapa da sua jornada. Porque cuidar de você é a nossa prioridade.
          </p>
        </div>

        <div className="p-6 mt-16 rounded-[0.5rem] mb-16 mx-auto bg-[#FFFFFF] mx-auto bg-equipe relative w-full md:w-4/5" style={{ height: '29.25rem' }}>

          <div className="absolute top-[-20px] left-[10%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
            <PiStethoscopeLight className="text-[2rem]" />
          </div>
          <div className="absolute top-[-20px] left-[50%] translate-x-[-50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
            <FaRegHeart className="text-[2rem]" />
          </div>

          <div className="absolute top-[-20px] right-[10%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
            <FaTruckMedical className="text-[2rem]" />
          </div>

          <div className="absolute bottom-[-20px] left-[10%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
            <CiMedicalCase className="text-[2rem]" />
          </div>
          <div className="absolute bottom-[-20px] left-[50%] translate-x-[-50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
            <PiHospital className="text-[2rem]" />
          </div>

          <div className="absolute bottom-[-20px] right-[10%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
            <BsCapsule className="text-[2rem]" />
          </div>

          <div className="absolute top-[20%] left-[-20px] transform translate-y-[-50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
            <PiStethoscopeLight className="text-[2rem]" />
          </div>
          <div className="absolute top-[50%] right-[-20px] transform translate-y-[-50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
            <FaRegHeart className="text-[2rem]" />
          </div>

          <div className="absolute top-[50%] left-[-20px] transform translate-y-[-50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
            <FaTruckMedical className="text-[2rem]" />
          </div>

          <div className="absolute bottom-[80%] right-[-20px] transform translate-y-[50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
            <CiMedicalCase className="text-[2rem]" />
          </div>
          <div className="absolute bottom-[20%] left-[-0px] transform translate-x-[-50%] translate-y-[50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
            <PiHospital className="text-[2rem]" />
          </div>
          <div className="absolute bottom-[20%] right-[-20px] transform translate-y-[50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
            <BsCapsule className="text-[2rem]" />
          </div>
        </div>


        <div className="p-3 flex justify-center mt-[4rem] items-center relative">
          <div className="relative bg-[rgba(250,247,242,1)] bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 w-full max-w-3xl mx-auto position-relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg bg-[#FFF2c0] rounded-full w-96 h-96 z-0 opacity-40"></div>
            <div className="text-center z-10 relative">
              <h1 className="text-lg bg-opacity-70 text-[#382513] bg-[#] md:bg-[#FFF2C0] rounded mt-8 uppercase font-albert px-2 py-1 inline-block">
                Você não está sozinha!
              </h1>
            </div>
            <h1 className="text-[2rem] text-center ml-4 mr-4 font-semibold font-literata flex gap-2 items-center mt-[1rem] justify-center z-10 relative">
              Pronta para cuidar de si mesma como nunca antes?
            </h1>
            <p className="text-[1rem] text-gray-500 text-center mt-[1rem] ml-4 mr-4 flex z-10 relative">
              O primeiro passo para transformar sua vida começa agora. Não espere mais para sentir-se confiante, saudável e feliz!
            </p>
            <div className="flex justify-center mt-[2rem] z-10 relative">
              <button className="bg-[#341900] text-white text-[1rem] font-albert font-semibold py-[1rem] px-[4rem] rounded-[1rem]">
                Quero fazer meu programa!
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-full mx-auto relative min-h-screen bg-[rgba(250,247,242,1)] bg-cover bg-no-repeat mb-8">
          <div className="block lg:hidden">
            <div className="justify-center items-center mb-[1.5rem] mt-20 rounded-2xl bg-[#FFFFFF] bg-faq relative w-auto mx-4" style={{ height: '50vh' }}>
              <div className="bg-white bg-opacity-60 border-2 rounded mt-[1rem] ml-4 mr-4 py-2 mb-4">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#FFF2C0] rounded-xl px-3 py-1 w-fit">
                    <h2 className="text-[1rem] text-[#382513] text-center uppercase font-albert">FAQ</h2>
                  </div>
                </div>
                <h1 className="text-2xl text-center ml-4 mr-4 font-semibold font-literata">
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
                className="w-full md:w-1/2 flex flex-col justify-start items-start ml-10 mt-20 rounded-2xl bg-[#FFFFFF] bg-faq relative"
                style={{ height: '60vh', width: '50vh' }}
              >
                <div className="ml-4 mr-4 mt-[1rem] p-[1rem] max-w-full bg-white bg-opacity-60 border-2 rounded-xl flex flex-col items-start">
                  <div className="flex justify-start mb-[1rem] w-full">
                    <div className="bg-[#FFF2C0] rounded-xl px-3 py-1 w-fit">
                      <h2 className="text-lg text-[#382513] uppercase font-albert">FAQ</h2>
                    </div>
                  </div>
                  <h1 className="text-[2rem] font-medium text-left mb-[1rem] font-semibold font-literata">
                    Respondendo dúvidas que outras mulheres tiveram
                  </h1>
                </div>
              </div>

              <div className="max-w-[40rem] md:w-1/2 flex flex-col p-6 ml-[1.5rem]">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-300 py-4">
                    <button
                      className="flex justify-between items-center w-full h-[1.5rem] mb-[1rem] text-left text-xl font-albert font-semibold text-[#382513]"
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
                      <p className="mt-2 text-gray-400 font-albert">{item.answer}</p>
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
              <FaWhatsapp className="text-[2rem] text-[rgba(172,125,83,1)]" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaInstagram className="text-[2rem] text-[rgba(172,125,83,1)]" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <CiFacebook className="text-[2rem] text-[rgba(172,125,83,1)]" />
            </a>
          </div>
          <p className="text-[rgba(172,125,83,1)]"><span className="font-semibold">CNPJ:</span> 00.000.000/0000-00</p>
          <p className="text-[rgba(172,125,83,1)]"><span className="font-semibold">Localização:</span> Rua Exemplo, 123 - Cidade, Estado</p>
          <p className="text-[rgba(172,125,83,1)] mt-2">Menopausa</p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center justify-center h-[20rem] space-y-2">
            {/* ------------ LOGO DA EMPRESA AQUI ------------*/}
            {/*<Image src="/logo.png" alt="Logo da Empresa" className="h-10" /> */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaWhatsapp className="text-[2rem] text-[rgba(172,125,83,1)]" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram className="text-[2rem] text-[rgba(172,125,83,1)]" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <CiFacebook className="text-[2rem] text-[rgba(172,125,83,1)]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-2">
            <p className="text-[rgba(172,125,83,1)]"> <span className="font-semibold">CNPJ:</span> 00.000.000/0000-00</p>
            <p className="text-[rgba(172,125,83,1)]"> <span className="font-semibold">Localização:</span> Rua Exemplo, 123 - Cidade, Estado</p>
          </div>

          <div className="flex flex-col items-end justify-center space-y-2 mr-8">
            <div className="flex space-x-4">
              <div className="space-y-2 mr-[1rem]">
                <p className="text-[rgba(172,125,83,1)] font-bold">Menopausa</p>
                <a href="#home" className="text-[rgba(172,125,83,1)] mb-[1rem] hover:text-[rgba(52,25,0,1)] block">Como funciona?</a>
                <a href="#kit" className="text-[rgba(172,125,83,1)] mb-[1rem] hover:text-[rgba(52,25,0,1)] block">Kit exclusivo</a>
                <a href="#historia" className="text-[rgba(172,125,83,1)] mb-[1rem] hover:text-[rgba(52,25,0,1)] block">Histórias de sucesso</a>
              </div>
              <div className="space-y-2">
                <a href="#beneficio" className="text-[rgba(172,125,83,1)] mb-[1rem] hover:text-[rgba(52,25,0,1)] block">Exclusividade e <br /> benefícios</a>
                <a href="#equipe" className="text-[rgba(172,125,83,1)] mb-[1rem] hover:text-[rgba(52,25,0,1)] block">Equipe</a>
                <a href="#faq" className="text-[rgba(172,125,83,1)] hover:text-[rgba(52,25,0,1)] block">FAQ</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}