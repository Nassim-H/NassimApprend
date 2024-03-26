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
                <h3 className="text-xl md:text-2xl font-semibold text-secondary">{question}</h3>
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
    question: "Puis-je me présenter en une ligne ?",
    answer: (
        <span>
        Non, donc j&apos;ai développé un <b>site</b> pour le faire ! (Je suis ambitieux et curieux de tout)
        </span>
    )
  },
  {
    question: "Pourquoi ai-je choisi le programme de Licence 3 éducation à distance ?",
    answer: (
        <span>
           En choisissant le programme de <em>Licence 3 en éducation</em> à distance, je souhaite non seulement <b>approfondir</b> ma compréhension des principes pédagogiques mais aussi explorer comment intégrer efficacement le numérique dans l'apprentissage. Mon objectif est de <b>contribuer</b> à transformer l'enseignement pour le rendre <b>plus</b> accessible, interactif et personnalisé.
        </span>
    )
  
  },
  {
    question: "Quelle expérience préalable ais-je dans le domaine de l'éducation ?",
    answer:  (
        <span>
          Je suis <b>enseignant</b> et <b>animateur</b> au sein de l'association APAS, je vous invite à découvrir davantage mon <b>expérience associative</b> <a href="/experience" target="_blank" className="text-blue-700">ici</a>.
        </span>
      )
},
  {
    question: "Comment mes expériences passées me préparent-elles pour réussir dans ce programme ?",
    answer: (
        <span>
          Mon expérience en tant qu'enseignant, ou plutôt en tant que <b><a href="/experience#experience" target="_blank" className="text-blue-700">grand-frère</a></b> comme je me considère, me prépare à ce programme. Mais pas seulement, ayant étudié en autodidacte sur <b>internet</b>, je suis habitué à travailler seul et à m'organiser. Je suis bien préparé pour <b>l'autonomie</b> requise dans <b>l'apprentissage à distance</b>
        </span>
      )
},
  {
    question: "Ai-je des idées spécifiques que je souhaites développer dans le cadre de ce programme ?",
    answer: (
        <span>
          Etant ambitieux, les <b>idées</b> ne sont pas ce qui manque. Je souhaite être <b>utile</b> à la <b>société</b>, dans ce cadre là, je souhaite développer <b>plusieurs</b> projets éducatifs. Vous pouvez en découvrir davantage <a href="/valeurs" target="_blank" className="text-blue-700">ici</a>.
        </span>
      )
},
  
{
  question: "Comment ai-je préparé mon environnement d'étude pour réussir dans un programme à distance ?",
  answer: (
      <span>
    Ayant plusieurs <b>projets</b> en parallèle de mes études, j&apos;ai dû <b>m&apos;organiser</b> afin de pouvoir tout gérer. J&apos;ai donc mis en place un <b>journal de productivité</b> qui me permet de gérer mon temps dans chaque projet. Je sais par exemple que pour le développement de ce site j&apos;ai pris <b>15 heures</b>. J&apos;ai également mis en place un <b>environnement de travail sain</b>, pour éviter toute <b>distraction</b>. Tout en utilisant la technique <a href="https://asana.com/fr/resources/pomodoro-technique" target="_blank" className="text-blue-700">Promodo</a> pour faire des <b>pauses régulières</b> qui sont essentielles à la santé mentale.
      </span>
    )
},
{
  question: "Comment mes expériences en informatique peuvent-elles enrichir mon approche de l&apos;éducation ?",
  answer: (
      <span>
    Les technologies évoluent vite et <b>l&apos;adaptation</b> est primordiale. Je suis donc bien placé pour <b>préparer</b> les élèves à un monde en <b>constante évolution</b>. Je peux également développer des <b>plateformes d&apos;éducation</b> innovantes qui reposeraient sur mes <b>connaissances acquises</b> durant ma formation dans l&apos;enseignement.
      </span>
    )
},
{
  question : "Quel rôle la curiosité et l&apos;apprentissage continu jouent-ils dans ma vie ?",
  answer : (
    <span>
      L&apos;apprentissage continu fait parti de mon <b>quotidien</b>. Je considère chaque compétence <b>complémentaire</b> aux autres, d&apos;une manière ou d&apos;une autre. J&apos;essaie donc de les relier afin de réaliser des projets d&apos;envergure avec <b>professionnalisme</b> qui ont pour objectif de <b>durer</b> et d&apos;évoluer.
    </span>
  )
},
{
  question : "Comment je me vois évoluer dans le domaine de l'éducation dans les cinq prochaines années ? ",
  answer : (
    <span>
      J&apos;ai pour objectif de continuer mon parcours académique dans l&apos;éducation en poursuivant un <em>master</em> qui <b>perfectionnera</b> mes connaissances afin de réaliser mes <b>projets</b> de la meilleure des manières. Je souhaite par la suite travailler dans l&apos;<b>éducation</b>, notamment auprès des jeunes afin de les <b>aider</b> à évoluer dans cette société.
    </span>
  )
},
{
  question: "Pourquoi devrais-je être choisi pour ce programme ?",
  answer: (
      <span>
          <b>Motivé</b> et <b>determiné</b>, je pense pouvoir développer des <b>projets sociétaux</b> plus complets avec ces <b>diplômes</b> dans l&apos;éducation. En effet, ma capacité à <b>fusionner</b> des compétences techniques avec une vision <b>humaniste</b> me distingue mais il est important d&apos;avoir les <b>connaissances</b> nécessaires afin de réussir ces nombreux projets (voir page <a href="/valeurs" target="_blank" className="text-blue-700">Ambitions</a>)
      </span>
    )
},

  // Ajoutez d'autres questions et réponses ici
];

export default FAQ;
