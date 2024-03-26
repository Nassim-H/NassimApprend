const Apropos = () => {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Pourquoi ce site ?</h2>
          <p className="text-lg text-gray-700 mb-8 text-justify">
            Ce site est né de ma <b>passion</b> pour l&apos;éducation et mon désir de <b>contribuer</b> positivement à la société en formant les futures générations. Mon objectif est de <b>candidater</b> à la <em>Licence 3 spécialité éducation</em> afin de développer mes compétences <b>pédagogiques</b> et devenir un <b>éducateur accompli</b>.
          </p>
          <p className="text-lg text-gray-700 mb-8 text-justify">
            Mon <a href="/parcours" target="_blank" className="text-blue-700">parcours</a> académique et mes <a href="/experience" target="_blank" className="text-blue-700">expériences</a> professionnelles m&apos;ont préparé à relever ce défi avec <b>détermination</b>. Je crois fermement en une approche éducative <b>centrée</b> sur l&apos;apprenant.
          </p>
          <p className="text-lg text-gray-700 mb-8 text-justify">
            À travers ce portfolio, je souhaite prouver mes <b>aptitudes</b> à réussir cette formation, de par ma <b>détermination</b> mais également ma <b>passion</b> pour les enfants. Je vous invite donc à <b>découvrir</b> les différentes sections du site et à me <b>contacter</b> si vous avez une quelconque <b>interrogation</b> sur mon profil, ou une quelconque <b>remarque</b> sur le site.
          </p>
          <div className="flex justify-center mt-8">

          <a href="mailto:nassimhassain@gmail.com" className="btn-primary flex items-center py-2 px-4 bg-accent rounded-lg shadow-md hover:shadow-lg transition duration-300 max-w-max">
              <span>Me contacter</span>
              </ a>
            </div>
          </div>
      </section>
    );
  };
  
  export default Apropos;
  