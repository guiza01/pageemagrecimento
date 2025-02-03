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

  return (
    <div>
      <div id="home" className="relative min-h-screen bg-gray-100 bg-cover bg-no-repeat bg-[url('/Hero.png')] md:bg-[url('/HeroDesktop.png')]">
        <button
          onClick={toggleMenu}
          className="absolute top-[1.5rem] right-4 z-50 text-2xl text-white md:hidden"
        >
          {isMenuOpen ? <RiCloseLargeLine /> : <AiOutlineMenu />}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#382513] bg-opacity-10 backdrop-blur-md flex justify-center items-center transition-all duration-500 z-20">
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
            <h2 className="bg-[#F9D689] bg-opacity-10 text-lg text-[#FFF2C0] rounded uppercase font-albert mb-5 mt-20 px-3 py-1 inline-block md:text-[1rem] md:px-[1rem] md:py-[0.5rem] md:tracking-[0.1rem] text-[0.875rem] px-[0.75rem] py-[0.38rem]">
              RESTAM APENAS 15 VAGAS!
            </h2>

            <h1 className="text-[1.25rem] text-white mb-5 font-literata md:text-[2.5rem] md:font-medium md:leading-[130%]">
              Programa Essência: Emagrecimento inteligente para{" "}
              <span className="text-[#F9D689] italic">mulheres em Natal.</span>
            </h1>

            <p className="text-[0.875rem] font-semibold text-white mb-5 font-literata md:text-[1.5rem] md:font-medium md:leading-[130%]">
              Proteção muscular e resultados duradouros baseados na ciência.
            </p>

            <p className="text-[0.875rem] text-white mb-5 md:text-[1rem] font-albert md:leading-[150%] md:text-[#CECECE]">
              Um programa personalizado que respeita sua individualidade metabólica
              e cuida da sua saúde de forma completa.{" "}
              <span className="font-bold">Resultados duradouros, sem efeitos radicais.</span>
            </p>

            <div className="md:mt-[3rem] relative z-10">
              <button className="bg-[#ffffff] bg-opacity-35 w-full text-white text-[0.875rem] font-semibold py-3 px-6 rounded-lg shadow hover:bg-[#4A3723] md:w-auto md:text-[1rem] font-sans md:py-[1rem] md:px-[4rem] backdrop-blur-sm">
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

      <div className="relative min-h-screen md:min-h-[60vh] bg-gray-100 bg-pilates bg-cover bg-no-repeat p-6 md:p-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between p-6 md:p-16 md:bg-[#FFFFFF] md:bg-opacity-10 md:border-2 md:border-white/20 rounded-lg">
          <div className="mb-10 md:mb-0 md:w-1/2">
            <h2 className="bg-[#FFF2C0] text-lg text-[#382513] uppercase rounded font-albert mb-5 mt-20 px-3 py-1 inline-block">
              O desafio da menopausa
            </h2>
            <h1 className="text-4xl text-white mb-10 font-literata">O que acontece com seu corpo?</h1>
          </div>
          <div className="md:w-1/2">
            <div className="border-2 border-white/20 rounded-xl bg-[#FFFFFF] bg-opacity-10 p-6">
              <h3 className="text-white ml-4 mr-4 flex gap-2 items-center mt-5">
                <AiOutlineWoman className="text-2xl" color="#F1C183" /> Menopausa
              </h3>
              <p className="text-white ml-4 mr-4 mt-2 font-albert">
                Durante a menopausa, o corpo feminino sofre alterações hormonais que dificultam a perda de peso.
              </p>
              <h3 className="text-white ml-4 mr-4 flex gap-2 items-center mt-5">
                <HiArrowTrendingDown className="text-2xl" color="#F1C183" /> Alterações hormonais
              </h3>
              <p className="text-white ml-4 mr-4 mb-10 mt-2 font-albert">
                As mudanças nos níveis de estrogênio e testosterona afetam diretamente o metabolismo e a distribuição de gordura.
              </p>
              <div className="w-[90%] h-[1px] bg-opacity-30 bg-gray-300 my-4 mx-auto"></div>
              <p className="text-white ml-4 mr-4 mt-8 mb-5 font-albert">
                Mas isso não significa que você não possa alcançar seus objetivos de emagrecimento - basta entender o que seu corpo precisa e seguir um programa adaptado à sua realidade.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
        <div className="hidden md:flex flex-row mt-16">
          <div className="md:w-1/2 bg-gra1 p-6 flex flex-col justify-center">
          </div>
          <div className="md:w-1/2 bg-[#FFFFFF] p-6">
            <h1 className="text-3xl font-semibold flex gap-2 items-center mb-5 font-literata">
              <HiArrowTrendingDown color="#F1C183" />
              Diminuição de Testosterona
            </h1>
            <p className="text-xl font-albert text-gray-500 mb-5">
              A testosterona, responsável pela preservação muscular, também diminui na menopausa. Isso contribui para a perda de massa muscular e aceleração do ganho de peso, conforme estudo.
            </p>
            <p className="text-lg font-albert text-gray-400">
              Fonte: Journal of Clinical Endocrinology & Metabolism.
            </p>
          </div>
        </div>

        <div className="block md:hidden p-6 mx-auto relative bg-[#FFFFFF] bg-gra1 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
        <div className="block md:hidden bg-[#FFFFFF] p-6">
          <h1 className="text-3xl ml-4 mr-4 font-semibold flex gap-2 items-center mb-5 font-literata">
            <HiArrowTrendingDown color="#F1C183" />
            Diminuição de Testosterona
          </h1>
          <p className="text-xl ml-4 mr-4 flex font-albert text-gray-500">
            A testosterona, responsável pela preservação muscular, também diminui na menopausa. Isso contribui para a perda de massa muscular e aceleração do ganho de peso, conforme estudo.
          </p>
          <p className="text-lg ml-4 mr-4 flex mt-5 font-albert text-gray-400">
            Fonte: Journal of Clinical Endocrinology & Metabolism.
          </p>
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
        <div className="hidden md:flex flex-row mt-16">
          <div className="md:w-1/2 bg-[#FFFFFF] p-6">
            <h1 className="text-3xl font-semibold flex gap-2 items-center mb-5 font-literata">
              <AiOutlineFieldTime color="#F1C183" />
              Metabolismo mais lento
            </h1>
            <p className="text-xl font-albert text-gray-500 mb-5">
              Após a menopausa, seu metabolismo pode cair até 10%. A perda de massa muscular diminui o gasto energético diário, tornando a perda de peso mais difícil.
            </p>
            <p className="text-lg font-albert text-gray-400">
              Fonte: American Journal of Clinical Nutrition
            </p>
          </div>
          <div className="md:w-1/2 bg-gra2 p-6 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
        </div>

        <div className="block md:hidden p-6 mx-auto relative bg-[#FFFFFF] bg-gra2 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
        <div className="bg-[#FFFFFF] p-6 md:hidden">
          <h1 className="text-3xl ml-4 mr-4 font-semibold flex gap-2 items-center mb-5 font-literata">
            <AiOutlineFieldTime color="#F1C183" />
            Metabolismo mais lento
          </h1>
          <p className="text-xl ml-4 mr-4 flex font-albert text-gray-500">
            Após a menopausa, seu metabolismo pode cair até 10%. A perda de massa muscular diminui o gasto energético diário, tornando a perda de peso mais difícil.
          </p>
          <p className="text-lg ml-4 mr-4 flex mt-5 font-albert text-gray-400">
            Fonte: American Journal of Clinical Nutrition
          </p>
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
        <div className="hidden md:flex flex-row mt-16">
          <div className="md:w-1/2 bg-gra3 p-6 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
          <div className="md:w-1/2 bg-[#FFFFFF] p-6">
            <h1 className="text-3xl mr-4 font-semibold flex gap-2 items-center mb-5 justify-center font-literata">
              <AiOutlineWoman color="#F1C183" />
              Redução do Estrogênio
            </h1>
            <p className="text-xl ml-4 mr-4 flex font-albert text-gray-500">
              A queda do estrogênio durante a menopausa faz com que a gordura se acumule na região abdominal, um fator conhecido por aumentar o risco de doenças metabólicas e cardiovasculares.
            </p>
            <p className="text-lg ml-4 mr-4 flex mt-5 font-albert text-gray-400">
              Fonte: Journal of Clinical Endocrinology & Metabolism.
            </p>
          </div>
        </div>

        <div className="block md:hidden p-6 mx-auto relative bg-[#FFFFFF] bg-gra3 bg-cover bg-no-repeat" style={{ height: '30vh' }}></div>
        <div className="bg-[#FFFFFF] p-6 md:hidden">
          <h1 className="text-3xl mr-4 font-semibold flex gap-2 items-center mb-5 justify-center font-literata">
            <AiOutlineWoman color="#F1C183" />
            Redução do Estrogênio
          </h1>
          <p className="text-xl ml-4 mr-4 flex font-albert text-gray-500">
            A queda do estrogênio durante a menopausa faz com que a gordura se acumule na região abdominal, um fator conhecido por aumentar o risco de doenças metabólicas e cardiovasculares.
          </p>
          <p className="text-lg ml-4 mr-4 flex mt-5 font-albert text-gray-400">
            Fonte: Journal of Clinical Endocrinology & Metabolism.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center min-h-[40vh]">
          <h1 className="text-4xl mx-4 font-semibold flex gap-2 items-center mt-4 mb-3 text-center font-literata">
            A boa notícia? Nós sabemos como ajudar você a superar esses desafios!
          </h1>
          <div className="flex justify-center items-center mt-2 mb-8">
            <div className="border-2 bg-[#FFF2C0] rounded-full flex justify-center items-center w-8 h-8">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[80vh] md:min-h-[60vh] bg-[#FFFBEC] bg-cover pb-20">
        <div className="pt-10">
          <div className="hidden md:block text-center">
            <h1 className="text-4xl font-semibold flex gap-2 mb-5 justify-center font-literata">
              Como nosso programa exclusivo ajudará você a emagrecer de forma sustentável?
            </h1>
            <p className="text-2xl text-gray-500 mx-auto max-w-3xl font-albert mb-10">
              Durante o emagrecimento, a preservação da massa muscular é a chave para manter seu metabolismo ativo. Músculos queimam mais calorias do que gordura, mesmo em repouso. Então, ao preservar seus músculos enquanto você pode perder gordura, você mantém seu metabolismo acelerado.
            </p>
          </div>

          <div className="block md:hidden text-center">
            <h1 className="text-3xl ml-4 mr-4 font-semibold flex gap-2 mb-5 font-literata">
              Como nosso programa exclusivo ajudará você a emagrecer de forma sustentável?
            </h1>
            <p className="text-xl text-gray-500 ml-4 mr-4 flex font-albert">
              Durante o emagrecimento, a preservação da massa muscular é a chave para manter seu metabolismo ativo. Músculos queimam mais calorias do que gordura, mesmo em repouso. Então, ao preservar seus músculos enquanto você pode perder gordura, você mantém seu metabolismo acelerado.
            </p>
          </div>

          <div className="hidden md:flex justify-center mt-10">
            <div className="bg-white border-2 rounded-2xl mx-3 p-6 flex flex-col items-center">
              <BsPatchCheck className="text-[#AC7D53] text-3xl" />
              <h1 className="text-4xl text-center font-literata">Programa personalizado</h1>
            </div>
            <div className="bg-white border-2 rounded-2xl mx-3 p-6 flex flex-col items-center">
              <BsPatchCheck className="text-[#AC7D53] text-3xl" />
              <h1 className="text-4xl text-center font-literata">Emagreça sem perder massa muscular</h1>
            </div>
            <div className="bg-white border-2 rounded-2xl mx-3 p-6 flex flex-col items-center">
              <BsPatchCheck className="text-[#AC7D53] text-3xl" />
              <h1 className="text-4xl text-center font-literata">Evite o efeito sanfona</h1>
            </div>
          </div>

          <div className="block md:hidden mt-5">
            <div className="bg-white border-2 rounded-2xl ml-5 mr-5 mt-5 flex flex-col items-center p-6">
              <BsPatchCheck className="text-[#AC7D53] text-3xl" />
              <h1 className="text-4xl text-center font-literata">Programa personalizado</h1>
            </div>
            <div className="bg-white border-2 rounded-2xl ml-5 mr-5 mt-5 flex flex-col items-center p-6">
              <BsPatchCheck className="text-[#AC7D53] text-3xl" />
              <h1 className="text-4xl text-center font-literata">Emagreça sem perder massa muscular</h1>
            </div>
            <div className="bg-white border-2 rounded-2xl ml-5 mr-5 mt-5 flex flex-col items-center p-6">
              <BsPatchCheck className="text-[#AC7D53] text-3xl" />
              <h1 className="text-4xl text-center font-literata">Evite o efeito sanfona</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[60vh] mt-16 mr-4 bg-[#FFFFFF] bg-cover bg-no-repeat">
        <div className="hidden lg:flex w-full justify-center items-center">
          <img
            src="/completa.png"
            alt="Imagem da esquerda"
            className="w-[30%] h-[30vh] object-cover rounded-3xl ml-5"
          />

          <div className="flex flex-col items-center justify-center text-center mx-5">
            <h1 className="text-3xl font-semibold gap-2 items-center mb-5 mt-8 font-literata">
              Não é sobre perder peso, mas sobre transformar seu corpo de forma
              <span className="text-[#AC7D53]"> saudável e sustentável.</span>
            </h1>
            <p className="text-xl flex font-albert">
              A sua jornada começa aqui. Agende sua consulta inicial e descubra como podemos ajudar você a alcançar resultados duradouros.
            </p>
            <button className="mt-16 bg-[#341900] w-[90%] text-white text-lg font-semibold py-3 px-6 rounded-2xl">
              Agendar Agora
            </button>
          </div>

          <img
            src="/completa2.png"
            alt="Imagem da direita"
            className="w-[30%] h-[30vh] object-cover rounded-3xl ml-5"
          />
        </div>

        <div className="lg:hidden mr-4">
          <img
            src="/completa.png"
            alt="Imagem"
            className="w-full h-[30vh] object-cover rounded-3xl ml-5 mr-5 mt-16"
          />

          <h1 className="text-3xl ml-4 mr-4 font-semibold gap-2 items-center mb-5 mt-8 font-literata">
            Não é sobre perder peso, mas sobre transformar seu corpo de forma
            <span className="text-[#AC7D53]"> saudável e sustentável.</span>
          </h1>
          <p className="text-xl ml-4 mr-4 flex font-albert">
            A sua jornada começa aqui. Agende sua consulta inicial e descubra como podemos ajudar você a alcançar resultados duradouros.
          </p>
          <button className="mt-16 ml-4 mb-16 mr-4 bg-[#341900] w-[90%] text-white text-lg font-semibold py-3 px-6 rounded-2xl">
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
          <h1 className="text-3xl text-center text-white ml-4 mr-4 font-semibold font-literata flex gap-2 items-center mt-8 justify-center">
            Como funciona o Programa Essência?
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
              icon: <BsPatchCheck className="text-xl" />,
            },
            {
              title: "Uso de Tecnologia Avançada",
              text: "Medicamentos e técnicas que potencializam seus resultados.",
              icon: <BsPatchCheck className="text-xl" />,
            },
            {
              title: "Treinos Rápidos e Eficientes",
              text: "Feitos online, adaptados ao seu corpo e à sua rotina.",
              icon: <BsPatchCheck className="text-xl" />,
            },
            {
              title: "Dieta Personalizada",
              text: "Desenvolvida com base nas suas preferências alimentares e necessidades metabólicas.",
              icon: <BsPatchCheck className="text-xl" />,
            },
            {
              title: "Acompanhamento Contínuo",
              text: "Suporte dedicado de médicos, nutricionistas e personal trainers.",
              icon: <BsPatchCheck className="text-xl" />,
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
          <h1 className="text-4xl text-center text-white font-semibold font-literata mb-8">
            Como Funciona o Programa Essência?
          </h1>
          <p className="text-xl text-white text-center max-w-3xl font-albert mb-16">
            Nosso programa é baseado em evidências científicas, com métodos validados que garantem que você perca peso sem comprometer sua saúde ou seu metabolismo.
          </p>

          <div className="relative flex justify-center items-center mb-16">
            <div
              className="absolute rounded-full bg-white/10 h-[400px] w-[400px] border border-white/20"
              style={{ borderRadius: "50%" }}
            ></div>
            <div className="relative z-10">
              <img
                src="/redonda.png"
                alt="Programa Essência"
                className="rounded-full h-[360px] w-[360px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 max-w-5xl">
            {[
              {
                title: "Avaliação Completa",
                text: "Consultas presenciais com exames detalhados e plano personalizado.",
                icon: <BsPatchCheck className="text-2xl" />,
              },
              {
                title: "Uso de Tecnologia Avançada",
                text: "Medicamentos e técnicas que potencializam seus resultados.",
                icon: <BsPatchCheck className="text-2xl" />,
              },
              {
                title: "Treinos Rápidos e Eficientes",
                text: "Feitos online, adaptados ao seu corpo e à sua rotina.",
                icon: <BsPatchCheck className="text-2xl" />,
              },
              {
                title: "Dieta Personalizada",
                text: "Desenvolvida com base nas suas preferências alimentares e necessidades metabólicas.",
                icon: <BsPatchCheck className="text-2xl" />,
              },
              {
                title: "Acompanhamento Contínuo",
                text: "Suporte dedicado de médicos, nutricionistas e personal trainers.",
                icon: <BsPatchCheck className="text-2xl" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-lg"
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

      <div id="kit" className="p-3 max-w-md mx-auto relative min-h-screen bg-white bg-cover bg-no-repeat mb-8 md:max-w-6xl md:flex md:flex-col md:items-center md:justify-center">
        <div className="text-center md:w-1/2">
          <h2 className="text-lg text-[#382513] bg-[#FFF2C0] rounded uppercase font-albert ml-5 mt-8 px-3 py-1 inline-block">
            exclusividade essêncial
          </h2>
          <h1 className="text-3xl ml-4 mr-4 font-semibold font-literata gap-2 items-center mb-5 mt-8 text-center md:text-justify">
            Bem-vinda ao primeiro passo da sua
            <span className="font-literata italic"> transformação!</span>
          </h1>
          <p className="text-xl text-gray-500 font-albert ml-4 mr-4 flex md:text-justify">
            Cada detalhe foi pensado para tornar sua experiência única e motivadora. Ao se juntar ao nosso programa, você receberá um kit exclusivo, repleto de itens úteis e sofisticados que simbolizam nosso compromisso com o seu bem-estar.
          </p>
          <h1 className="text-3xl text-[#AC7D53] ml-4 mr-4 font-semibold font-literata flex gap-2 mt-8 text-center">
            O que vem no Presskit?
          </h1>
        </div>

        <div className="md:flex md:gap-6 md:items-center mt-8 md:w-full">
          <div className="md:w-1/3 flex flex-col gap-5">
            <div className="bg-gray-100 border-4 border-gray/60 rounded-2xl ml-5 mr-5 mt-5 flex flex-col items-center p-6">
              <h1 className="text-xl text-center text-gray-500">Caixa do Presskit</h1>
            </div>
            <div className="bg-gray-100 border-4 border-gray/60 rounded-2xl ml-5 mr-5 mt-5 flex flex-col items-center p-6">
              <h1 className="text-xl text-center text-gray-500">SEMAglutida (Ozempic)</h1>
            </div>
            <div className="bg-gray-100 border-4 border-gray/60 rounded-2xl ml-5 mr-5 mt-5 flex flex-col items-center p-6">
              <h1 className="text-xl text-center text-gray-500">Kit Exercício em Casa</h1>
            </div>
          </div>

          <div className="flex justify-center items-center ml-10 mt-8 md:ml-0 md:mt-0 rounded-3xl bg-[#FFFFFF] bg-garrafa md:w-1/3 md:flex md:justify-center" style={{ height: '50vh', width: '33vh' }}></div>

          <div className="md:w-1/3 flex flex-col gap-5">
            <div className="bg-[#FFF2C0] border-4 border-gray/60 rounded-2xl ml-5 mr-5 mt-8 flex flex-col items-center p-6">
              <h1 className="text-xl text-center">Squeeze Personalizada</h1>
            </div>
            <div className="bg-gray-100 border-4 border-gray/60 rounded-2xl ml-5 mr-5 mt-8 flex flex-col items-center p-6">
              <h1 className="text-xl text-center text-gray-500">Guia de Introdução ao Programa</h1>
            </div>
            <div className="bg-gray-100 border-4 border-gray/60 rounded-2xl ml-5 mr-5 mt-8 flex flex-col items-center p-6">
              <h1 className="text-xl text-center text-gray-500">Itens Surpresa</h1>
            </div>
          </div>
        </div>
      </div>

      <div id="historia" className="p-3 max-w-md mx-auto relative min-h-screen bg-white bg-cover bg-no-repeat mb-8 md:max-w-6xl md:flex md:flex-col md:items-center md:justify-center">
        <div className="text-center md:w-full">
          <h2 className="text-lg text-[#382513] bg-[#FFF2C0] rounded uppercase font-albert mt-16 px-3 py-1 inline-block">
            Transformações que inspiram.
          </h2>
          <h1 className="text-3xl text-center font-semibold font-literata gap-2 items-center mb-5 mt-8">
            Histórias de Sucesso
          </h1>
        </div>

        <div className="md:flex md:items-center md:w-full md:gap-6">
          <div className="md:w-1/2 flex flex-row gap-6 justify-center">
            <div className="flex justify-center items-center">
              <Image
                src="/antes.png"
                alt="Antes"
                width={300}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/depois.png"
                alt="Depois"
                width={300}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col gap-4 md:text-left md:ml-8">
            <h1 className="text-xl gap-2 items-center mb-5 mt-8 font-albert">
              “Eu já tinha tentado tantas dietas e academias, mas nenhuma me ajudava de verdade. Com o Programa essência,
              <span className="font-semibold"> finalmente consegui entender meu corpo e alcançar resultados que jamais pensei ser possível!”</span>
            </h1>
            <p className="text-gray-400 text-xl font-albert italic mt-4">- Mariana, 47 anos</p>
            <p className="text-gray-400 text-xl font-albert mt-4">Perdeu 12kg em 6 meses, mais energia e autoestima renovada.</p>
            <div className="flex justify-between mt-16 mb-8">
              <div className="w-[30%] h-[8px] bg-gray-400 my-4 rounded"></div>
              <div className="w-[30%] h-[8px] bg-gray-300 my-4 rounded"></div>
              <div className="w-[30%] h-[8px] bg-gray-200 my-4 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="beneficio" className="p-3 mx-auto relative min-h-screen bg-[#FFFBEC] bg-cover bg-no-repeat mb-16 w-full md:w-4/5">
        <div className="relative mt-8">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center md:items-start">
            <div className="flex justify-center items-center mb-8 rounded bg-[#FFFFFF] relative md:w-1/2 w-full" style={{ height: '50vh' }}>
              <Image src="/mulheres.png" alt="Imagem Exemplo" layout="fill" objectFit="cover" className="rounded" />
              <div className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-[#FFF2C0] via-transparent to-transparent opacity-50 md:block hidden"></div>
            </div>
            <div className="bg-white mb-8 mx-auto max-w-4xl px-4 relative z-10 md:w-1/2 w-full">
              <div className="text-center">
                <h1 className="text-lg text-[#382513] bg-[#FFF2C0] rounded mt-8 uppercase font-albert mb-5 px-2 py-1 inline-block">
                  exclusividade e benefícios
                </h1>
              </div>
              <h1 className="text-4xl text-semibold font-literata gap-2 items-center mb-5 mt-8">
                Uma experiência exclusiva que garante o seu sucesso!
              </h1>
              <div className="ml-4 mt-4">
                <h1 className="flex text-lg items-center gap-2 font-bold">
                  <FaPeopleGroup className="text-xl text-[#AC7D53]" />
                  Apenas 30 vagas por mês
                </h1>
                <p>para garantir o cuidado que você merece.</p>
              </div>
              <div className="w-[90%] h-[1px] bg-gray-200 my-4 rounded mx-auto"></div>
              <div className="ml-4 mt-4">
                <h1 className="flex text-lg items-center gap-2 font-bold">
                  <PiStethoscopeLight className="text-xl text-[#AC7D53]" />
                  Equipe dedicada ao seu sucesso
                </h1>
                <p>médicos, nutricionistas e personal trainers renomados.</p>
              </div>
              <div className="w-[90%] h-[1px] bg-gray-200 my-4 rounded mx-auto"></div>
              <div className="ml-4 mt-4 mb-4">
                <h1 className="flex text-lg items-center gap-2 font-bold">
                  <IoBodyOutline className="text-xl text-[#AC7D53]" />
                  Comunidade que apoia e motiva
                </h1>
                <p>você nunca estará sozinha nessa jornada.</p>
              </div>
              <div className="w-[90%] h-[1px] bg-gray-200 my-4 rounded mx-auto"></div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white via-transparent to-transparent z-0" style={{ height: '50vh' }}></div>
        </div>
        <div id="equipe">
          <div className="text-center md:w-4/5 mx-auto">
            <h1 className="text-lg text-[#382513] bg-[#FFF2C0] rounded mt-8 uppercase font-albert mb-5 px-2 py-1 inline-block">
              Conheça a equipe que vai cuidar de você
            </h1>
            <h1 className="mb-4 text-4xl font-literata flex items-center justify-center gap-2">
              Uma equipe dedicada ao seu sucesso
            </h1>
            <p className="text-lg font-albert text-gray-500 text-center mx-4">
              Nosso time é composto por especialistas apaixonados por saúde e bem-estar, prontos para guiar você em cada etapa da sua jornada. Porque cuidar de você é a nossa prioridade.
            </p>
          </div>

          <div className="p-6 mt-16 rounded-3xl mb-16 mx-auto bg-[#FFFFFF] bg-equipe relative w-full md:w-4/5" style={{ height: '30vh' }}>

            <div className="absolute top-[-20px] left-[10%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
              <PiStethoscopeLight className="text-2xl" />
            </div>
            <div className="absolute top-[-20px] left-[50%] translate-x-[-50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
              <FaRegHeart className="text-2xl" />
            </div>

            <div className="absolute top-[-20px] right-[10%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
              <FaTruckMedical className="text-2xl" />
            </div>

            <div className="absolute bottom-[-20px] left-[10%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
              <CiMedicalCase className="text-2xl" />
            </div>
            <div className="absolute bottom-[-20px] left-[50%] translate-x-[-50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
              <PiHospital className="text-2xl" />
            </div>

            <div className="absolute bottom-[-20px] right-[10%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 md:hidden">
              <BsCapsule className="text-2xl" />
            </div>

            <div className="absolute top-[20%] left-[-20px] transform translate-y-[-50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
              <PiStethoscopeLight className="text-2xl" />
            </div>
            <div className="absolute top-[50%] right-[-20px] transform translate-y-[-50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
              <FaRegHeart className="text-2xl" />
            </div>

            <div className="absolute top-[50%] left-[-20px] transform translate-y-[-50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
              <FaTruckMedical className="text-2xl" />
            </div>

            <div className="absolute bottom-[80%] right-[-20px] transform translate-y-[50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
              <CiMedicalCase className="text-2xl" />
            </div>
            <div className="absolute bottom-[20%] left-[-0px] transform translate-x-[-50%] translate-y-[50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
              <PiHospital className="text-2xl" />
            </div>
            <div className="absolute bottom-[20%] right-[-20px] transform translate-y-[50%] border-2 bg-[#FFF2C0] bg-opacity-70 rounded-full flex justify-center items-center w-12 h-12 hidden md:flex">
              <BsCapsule className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="p-3 flex justify-center items-center">
          <div className="relative bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 w-full max-w-3xl mx-auto">
            <div className="text-center">
              <h1 className="text-lg bg-opacity-70 text-[#382513] bg-[#FFF2C0] rounded mt-8 uppercase font-albert px-2 py-1 inline-block">
                Você não está sozinha!
              </h1>
            </div>
            <h1 className="text-4xl text-center ml-4 mr-4 font-semibold font-literata flex gap-2 items-center mt-8 justify-center">
              Pronta para cuidar de si mesma como nunca antes?
            </h1>
            <p className="text-xl text-gray-500 text-center mt-8 ml-4 mr-4 flex">
              O primeiro passo para transformar sua vida começa agora. Não espere mais para sentir-se confiante, saudável e feliz!
            </p>
            <div className="flex justify-center mt-8">
              <button className="bg-[#341900] text-white text-md font-semibold py-2 px-4 rounded-2xl">
                Quero fazer meu programa!
              </button>
            </div>
          </div>
        </div>

        <div className="p-3 max-w-full mx-auto relative min-h-screen bg-white bg-cover bg-no-repeat mb-8">
          <div className="block lg:hidden">
            <div className="justify-center items-center ml-10 mt-20 rounded-2xl bg-[#FFFFFF] bg-faq relative" style={{ height: '50vh', width: '33vh' }}>
              <div className="bg-white bg-opacity-60 border-2 rounded py-2">
                <div className="flex justify-center mb-6">
                  <div className="bg-[#FFF2C0] rounded-xl px-3 py-1 w-fit">
                    <h2 className="text-lg text-[#382513] text-center uppercase font-albert">FAQ</h2>
                  </div>
                </div>
                <h1 className="text-2xl text-center ml-4 mr-4 font-semibold font-literata">
                  Respondendo dúvidas que outras mulheres tiveram
                </h1>
              </div>
            </div>

            <div className="mt-4 px-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-300 py-2">
                  <button
                    className="flex justify-between items-center w-full text-left text-lg text-albert font-semibold text-[#382513]"
                    onClick={() => toggleFAQ(index)}
                  >
                    {item.question}
                    {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-gray-700">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex">
            <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center p-6">
              <div
                className="w-full md:w-1/2 flex flex-col justify-start items-start ml-10 mt-20 rounded-2xl bg-[#FFFFFF] bg-faq relative"
                style={{ height: '50vh', width: '33vh' }}
              >
                <div className="bg-white bg-opacity-60 border-2 rounded py-2 w-full flex flex-col items-start p-6">
                  <div className="flex justify-start mb-6 w-full">
                    <div className="bg-[#FFF2C0] rounded-xl px-3 py-1 w-fit">
                      <h2 className="text-lg text-[#382513] uppercase font-albert">FAQ</h2>
                    </div>
                  </div>
                  <h1 className="text-2xl text-left font-semibold font-literata">
                    Respondendo dúvidas que outras mulheres tiveram
                  </h1>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col p-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-300 py-4">
                    <button
                      className="flex justify-between items-center w-full text-left text-xl text-albert font-semibold text-[#382513]"
                      onClick={() => toggleFAQ(index)}
                    >
                      {item.question}
                      {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </button>
                    {openIndex === index && (
                      <p className="mt-2 text-gray-700">{item.answer}</p>
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
          <div className="flex justify-center mb-4">
            <img src="/logo.png" alt="Logo da Empresa" className="h-10" />
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaWhatsapp className="text-2xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <CiFacebook className="text-2xl" />
            </a>
          </div>
          <p className="text-gray-700">CNPJ: 00.000.000/0000-00</p>
          <p className="text-gray-700">Localização: Rua Exemplo, 123 - Cidade, Estado</p>
          <p className="text-gray-500 mt-2">Menopausa</p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center space-y-2">
            <img src="/logo.png" alt="Logo da Empresa" className="h-10" />
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaWhatsapp className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <CiFacebook className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-gray-700">CNPJ: 00.000.000/0000-00</p>
            <p className="text-gray-700">Localização: Rua Exemplo, 123 - Cidade, Estado</p>
          </div>

          <div className="flex flex-col items-end justify-center space-y-2 mr-8">
            <div className="space-y-2">
              <p className="text-gray-500 font-bold">Menopausa</p>
              <a href="#home" className="text-gray-600 hover:text-gray-900 block">Como funciona?</a>
              <a href="#kit" className="text-gray-600 hover:text-gray-900 block">Kit exclusivo</a>
              <a href="#historia" className="text-gray-600 hover:text-gray-900 block">Histórias de sucesso</a>
              <a href="#beneficio" className="text-gray-600 hover:text-gray-900 block">Exclusividade e benefícios</a>
              <a href="#equipe" className="text-gray-600 hover:text-gray-900 block">Equipe</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 block">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
