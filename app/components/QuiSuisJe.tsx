import React from 'react';

const QuiSuisJe = () => {
  return (
    
    <div className="py-8">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Mes Valeurs</h2>
        <p className="text-lg">Ici, je partage mes valeurs fondamentales qui guident mes actions au quotidien.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Mes Qualités</h2>
        <ul className="list-disc ml-6">
          <li className="text-lg">Qualité 1</li>
          <li className="text-lg">Qualité 2</li>
          <li className="text-lg">Qualité 3</li>
          {/* Ajoutez autant de qualités que vous le souhaitez */}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Mes Soft Skills</h2>
        <ul className="list-disc ml-6">
          <li className="text-lg">Soft Skill 1</li>
          <li className="text-lg">Soft Skill 2</li>
          <li className="text-lg">Soft Skill 3</li>
          {/* Ajoutez autant de soft skills que vous le souhaitez */}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Mes Compétences</h2>
        <p className="text-lg">Voici un aperçu de mes compétences techniques et de tout autre domaine dans lequel je me distingue.</p>
      </section>
    </div>
  );
};

export default QuiSuisJe;
