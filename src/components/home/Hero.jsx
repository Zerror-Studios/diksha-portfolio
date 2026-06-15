"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import SplitText from "gsap/dist/SplitText";
import { RiCloseLine, RiSearchLine } from '@remixicon/react';
gsap.registerPlugin(ScrollTrigger, SplitText)


const heroAiData = [
  {
    id: "01",
    question: "How do you design AI products?",
    answer:
      "I design AI products by starting with the human need, not the technology. Before thinking about models, prompts, or interfaces, I try to understand the behavior we’re supporting: what people are trying to do, where they feel uncertainty, what they need help deciding, and where intelligence could meaningfully reduce friction. For me, AI product design is about shaping the relationship between people and systems. I think carefully about where AI should assist, where the human should stay in control, and how the product should respond when the system is uncertain or wrong. I design for usefulness, trust, and clarity. That means creating experiences that feel intelligent, but also transparent, grounded, and easy to recover from. The best AI products don’t just feel automated. They feel considered."
  },
  {
    id: "02",
    question: "How do you turn ambiguity into product direction?",
    answer:
      "I turn ambiguity into direction by making the invisible parts of a problem visible. When a space feels unclear, I start by mapping the system: the users, workflows, constraints, business goals, emotions, and decision points. I look for patterns in the mess — where people are getting stuck, what is creating friction, and what outcome actually matters. From there, I frame the opportunity in a way that helps teams move. I translate broad questions into sharper product principles, user needs, experience goals, and design hypotheses. I don’t see ambiguity as a blocker. I see it as a signal that the problem needs structure. My role is often to create that structure: to help teams understand what we’re solving, why it matters, and what direction feels both human and strategically sound."
  },
  {
    id: "03",
    question: "How do you think in systems?",
    answer:
      "I think in systems by looking beyond the screen. A product is never just a set of interfaces. It is a network of people, decisions, data, behaviors, constraints, and feedback loops. I try to understand how all of those parts influence one another before designing the experience. This helps me design products that are not only usable in one moment, but coherent across the entire journey. I think about how a user enters the system, what they need to understand, what actions they can take, how the product responds, what happens when something fails, and how the experience evolves over time. Systems thinking helps me create clarity out of complexity. It allows me to design experiences that feel simple on the surface because the deeper structure underneath is thoughtful."
  },
  {
    id: "04",
    question: "What makes AI feel human and trustworthy?",
    answer:
      "AI feels human and trustworthy when it respects the person using it. That means it should be clear about what it knows, what it doesn’t know, and why it is making a suggestion. It should give people control, offer context, and make it easy to question, edit, undo, or override. Trust is not built by making AI sound more human. It is built by making the experience more understandable, reliable, and respectful. I think a lot about tone, transparency, feedback, and failure states. What does the system say when it is uncertain? How does it ask for more context? How does it help the user feel confident without pretending to be perfect? To me, human-centered AI is not about replacing judgment. It is about supporting it."
  },
  {
    id: "05",
    question: "Show me your process",
    answer:
      "My process starts by zooming out before I zoom in. I begin by understanding the larger system: the people, workflows, business goals, technical constraints, and emotional context around the product. I want to know not just what we are building, but what behavior or outcome we are trying to change. Then I move from insight to structure. I define the problem, map the journey, identify key moments, and shape the product logic. This is where strategy becomes experience architecture. From there, I prototype the behavior. I create flows, concepts, and interaction models that help teams see how the product could work. I test for clarity, usefulness, trust, and edge cases — not just visual polish. My process is iterative, but intentional. I like moving between the big picture and the details until the product feels clear, cohesive, and deeply considered."
  }
];

const Hero = () => {
  const promptRef = useRef(null);
  const [isExpand, setIsExpand] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState("");
  const [activeAnswer, setActiveAnswer] = useState("");
  const [hasAnswer, setHasAnswer] = useState(false);
  const answerRef = useRef(null);
  const splitRef = useRef(null);

  useGSAP(() => {

    if (window.innerWidth < 750) return
    gsap.to([".hero_bg_img"], {
      y: 200,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    })
  })

  useGSAP(
    () => {
      if (!activeAnswer || !answerRef.current) return;

      const split = SplitText.create(answerRef.current, {
        type: "lines",
        linesClass: "line",
      });

      splitRef.current = split;

      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("line-wrapper");
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.from(split.lines, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      });

      return () => {
        split.revert();
      };
    },
    { dependencies: [activeAnswer] }
  );

  const handleCloseAnswer = () => {
    if (!answerRef.current) return;

    const lines = answerRef.current.querySelectorAll(".line");

    gsap.timeline()
      .to(lines, {
        yPercent: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.inOut",
      })
      .fromTo(
        ".hero_title",
        {
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .call(() => {
        setHasAnswer(false);
        setActiveAnswer("");
      });
  };

  const handleQuestionClick = (answer, question) => {
    setIsExpand(false);

    if (!hasAnswer) {
      gsap.to(".hero_title", {
        opacity: 0,
        y: -100,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          setHasAnswer(true);
          setActiveAnswer(answer);
          setActiveQuestion(question)
        },
      });

      return;
    }

    setActiveAnswer(answer);
    setActiveQuestion(question)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        promptRef.current &&
        !promptRef.current.contains(event.target)
      ) {
        setIsExpand(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useGSAP(() => {

    const tl = gsap.timeline({
      delay: 0.25
    })
    tl.to(".hero_anim", {
      transform: "translateY(0)",
      stagger: 0.1,
      ease: "expo.out"
    })
    tl.to(".star_ico", {
      opacity: 1,
      ease: "expo.out"
    })
    tl.from(".star_ico", {
      width: 0,
      marginLeft: ".25rem",
      ease: "expo.out"
    }, "<")
    tl.to(".prompt_btn_paren", {
      opacity: 1,
      ease: "expo.out"
    })

  });


  return (
    <>
      <div className=" hero_section  w-full h-[100svh]! relative overflow-hidden">
        <video loop autoPlay muted playsInline className='cover hero_bg_img absolute inset-0' poster='/images/homepage/hero_bg.png' src="/videos/hero_vid.mp4"></video>
        <div className={`w-full h-full overla absolute inset-0 bg-black/30 backdrop-blur-md pointer-events-none transition-opacity duration-300 ${(isExpand || hasAnswer) ? "opacity-100" : "opacity-0"}`}></div>
        <div className="w-full h-[100svh]! center relative z-10">
          <h1 className=' hero_title  text-white  text-center leading-none text-2xl  md:text-5xl lg:text-7xl'>
            <div className="block  overflow-hidden">
              <div className=' hero_anim  translate-y-full  '>
                <p className='text-center'> Shaping strategy, systems, and </p>
              </div>
            </div>
            <div className=" block overflow-hidden">
              <div className=" hero_anim translate-y-full">
                <p className='text-center'> Ai-first experiences for human needs</p>
              </div>
            </div>
          </h1>

          {hasAnswer && (
            <div className="absolute text-white leading-none text-base md:text-3xl  w-[95vw] md:w-[80vw] text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex justify-end mb-2">
            <RiCloseLine size={30} onClick={handleCloseAnswer} className=' hover:text-[#713F1E] cursor-pointer hover:scale-110 transition-all duration-300' />
              </div>
              <p key={activeAnswer} ref={answerRef}>
                {activeAnswer}
              </p>
            </div>
          )}
          <div className="prompt_btn_paren opacity-0 absolute bottom-12 md:bottom-10 left-1/2 -translate-x-1/2 backdrop-blur-lg">
            <div ref={promptRef} className={` prompt_btn   cursor-pointer  transition-all duration-300  ${isExpand ? " w-[90vw] md:w-[60vw] bg-[#100E0D35] p-4 md:p-10" : " w-[90vw] md:w-[40vw] p-0 bg-white/20"}   border  text-white border-white/50   rounded-xl`}>
              <div className={`h-0 overflow-hidden transition-all duration-300  ${isExpand ? "h-78 opacity-100" : "opacity-0"}`}>
                <h4 className='md:text-2xl font-semibold'>Quick Prompt //</h4>
                <div className="space-y-2 py-5">
                  {heroAiData.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleQuestionClick(item.answer, item.question)}
                      className=" max-sm:text-sm border border-white/20 hover:bg-white/40 transition-all duration-300 cursor-pointer w-fit p-2 rounded-lg pb-1.5 flex items-center gap-x-2"
                    >
                      • {item.question}
                    </div>
                  ))}
                </div>
              </div>
              <div onClick={() => setIsExpand(!isExpand)} className={`w-full pl-3 p-2 md:p-3 flex items-center justify-between rounded-xl font-semibold transition-all duration-300  ${isExpand ? "bg-white text-choc" : "bg-transparent"}`}>
                <p className=' w-[70%] max-sm:text-sm translate-y-0.5'>{hasAnswer ? activeQuestion : "Ask AI about my design process"} </p>
                <button className={` group max-sm:text-sm flex gap-x-1 hover:gap-x-2 items-center font-semibold text-[#713F1E] rounded-lg bg-white px-4 py-2 leading-none border border-transparent text-sm transition-all duration-300  ${isExpand ? "bg-choc text-white hover:bg-transparent! hover:border-[#713F1E] hover:text-[#713F1E]!" : "bg-transparent hover:bg-[#713F1E] hover:text-white"}`}>
                  <RiSearchLine size={16} />
                  <p className='translate-y-0.75'>Search</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero