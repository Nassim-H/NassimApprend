'use client'
import React, { useState } from 'react';

function FAQ() {
const [activeIndex, setActiveIndex] = useState<number | null>(null);

const handleQuestionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
};

return (
    <section id="faq" className=" py-16">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-gray-800">F.A.Q</h2>
            <div className="max-w-3xl mx-auto p-6">
                {questions.map((q, index) => (
                    <Question key={index} question={q.question} answer={q.answer} isActive={activeIndex === index} onClick={() => handleQuestionClick(index)} />
                ))}
            </div>
        </div>
    </section>
);
}

function Question({ question, answer, isActive, onClick }: { question: string, answer: React.ReactNode, isActive: boolean, onClick: () => void }) {
    return (
        <div className="mb-8">
            <div className={`cursor-pointer flex justify-between items-center p-4 bg-white rounded-lg shadow-md transition duration-300 ${isActive ? 'border border-gray-300' : ''}`} onClick={onClick}>
                <h3 className="text-xl md:text-2xl font-semibold text-primary">{question}</h3>
                <svg className={`w-6 h-6 fill-current ${isActive ? 'transform rotate-180' : ''}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>
            </div>
            {isActive && (
                <div className="p-4 mt-2 bg-gray-50 rounded-b-lg shadow-md">
                    <p className="text-gray-700">{answer}</p>
                </div>
            )}
        </div>
    );
}

const questions = [
  {
    question: "Qu'est-ce que la Roqya ?",
    answer: (
        <span>
        La <i>Roqya</i>, ou <i>exorcisme légiférée</i> en français, est une pratique spirituelle basée sur des versets du <b>Coran</b> et des <b>invocations prophétiques</b>. Elle est utilisée pour guérir divers maux physiques et mentaux, tels que le mauvais œil, le mal occulte et les troubles psychologiques.
        </span>
    )
  },
  {
    question: "Qui peut pratiquer la Roqya?",
    answer: (
        <span>
            La <i>Roqya</i> peut être pratiquée par des <b>spécialistes</b> formés dans ce domaine, mais également pas des <b>individus</b> souhaitant se protéger ou guérir des maux.
            </span>
    )
  
  },
  {
    question: "Quels sont les avantages de la Roqya?",
    answer:  (
        <span>
          La <i>Roqya</i> soigne des maux physiques et mentaux, à la <b>protection contre les influences négatives</b>, au <b>renforcement de la spiritualité et de la foi</b>, ainsi qu&apos;à <b>l&apos;amélioration du bien-être général</b>.
        </span>
      )
},
  {
    question: "Est-ce que la Roqya guérit ?",
    answer: (
        <span>
          La <i>Roqya</i> est une cause de guérison, comme l&apos;on prend un médicament. En aucun cas il faut placer sa confiance en la roqya ni en quelconque cause, mais c&apos;est en <b>Allah Seul</b> qu&apos;il faut placer sa confiance pour la guérison. La Roqya est un <b>moyen</b>, et non une fin en soi.
        </span>
      )
},
  {
    question: "Je ne sais pas si un proche est touché par un mal occule, que faire ?",
    answer: (
        <span>
          La plus grande cause dans toute chose est d&apos;<b>invoquer Allah</b>. Ensuite, vous pouvez <b>me contacter</b> afin d&apos;en discuter et pourquoi pas organiser une rencontre In Shaa Allah.
        </span>
      )
},
  {
    question: "Je suis triste, que faire ?",
    answer: (
        <span>
      Il y a beaucoup de causes afin de dissiper les soucis, parmi elles : <b>demander pardon à Allah</b>, <b>la lecture et la méditation du Qur&apos;aan</b>, <b>être assidû(e) aux prières</b>, <b>faire des aumônes</b>... Tiré de AbdAllâh Ibn &apos;Abder Razzâq Al Badr fils de Cheikh &apos;Abder Razzâq Al &apos;Abbâd Al Badr: <a href="https://www.3ilmchar3i.net/2017/02/les-moyens-pour-dissiper-les-soucis.html" target='blank' className="text-blue-500 underline transition duration-300 hover:text-blue-600 hover:underline">lien</a>.
        </span>
      )
},
  // Ajoutez d'autres questions et réponses ici
];

export default FAQ;
