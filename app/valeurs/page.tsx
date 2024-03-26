'use client'
import Header from "../components/Header";
import MultiLayerParallax from "../components/Parallax";
import confetti from 'canvas-confetti';

const Valeurs = () => {

    

  function onReflechis() {
    confetti({
      particleCount: 10,
      gravity: 0.5,
      origin: { y: 1},
    })
  }

  function onSubmit(){
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2
      }
    });
  }
  
    return (
        <>
        <Header />
            <MultiLayerParallax />
            <section className="bg-mountain py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-primary text-center">Quelles sont mes valeurs ?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Je souhaite à travers la licence Education devenir un <b>éducateur accompli</b>. Mon objectif est de contribuer <b>positivement</b> à la société en formant les futures générations. Je crois fermement en une approche éducative centrée sur l&apos;apprenant, qui valorise l&apos;autonomie, la créativité et l&apos;inclusion.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Mon expérience en tant qu&apos;animateur et enseignant dans l&apos;association <a href="https://www.helloasso.com/associations/apas-bethunois" target="_blank" className="text-blue-700">APAS</a> m&apos;a permis de renforcer ma conviction en l&apos;importance de l&apos;éducation. J&apos;ai en effet la <b>conviction</b> que l&apos;éducation n&apos;est pas seulement un <b>levier</b> pour l&apos;épanouissement personnel et le développement de l&apos;individu, mais c&apos;est <b>le</b> levier pour le développement de la société.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Mes ambitions sont donc multiples à travers ce parcours d&apos;enseignant, je ne souhaite pas seulement transmettre des connaissances. Je souhaite concevoir et collaborer dans des projets éducatifs qui améliorent la qualité de l&apos;éducation de tous.
          </p>
          <section className="py-12 bg-opacity-25">
              <h2 className="text-3xl font-bold mb-6 text-center text-primary">Mes Projets</h2>
              <p className="text-lg text-gray-300 mb-8 text-center">
                  Voici quelques-uns des projets éducatifs sur lesquels je travaille ou envisage, chacun visant à apporter une contribution significative à l&apos;éducation et à l&apos;apprentissage. Pour leur accomplissement de la meilleure des manières, rien de mieux que de <b>compléter</b> mon parcours avec une formation dans l&apos;éducation qui me permettrait d&apos;avoir les <b>compétences</b> nécessaires pour mener à bien ces projets.
              </p>
              {/* Conteneur des projets ici */}
              <section className="py-12">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-bold  mb-6 text-center text-secondary">Application ludique</h2>
                  <h3 className="text-3xl font-bold mb-6 text-accent">Ma Vision</h3>
                  <p className="text-lg mb-8 text-gray-300 text-justify">Dans un monde où le <b>divertissement</b> règne, avec toute sorte de types d&apos;amusement, les plus grands y sont déjà plongés, comment espérer que les plus petits n&apos;y tombent pas ? Il faut en effet prendre conscience des <b>dangers</b> des technologies, notamment les addictions. Mais les bénéfices des technologies sont également nombreux, il serait naif de ne pas profiter de cela pour concevoir des services <b>utiles</b></p>
                  
                  <h3 className="text-3xl font-bold mb-6 text-accent">Le Plan</h3>
                  <p className="text-lg mb-8 text-gray-300 text-justify" >C&apos;est donc dans ce cadre là que j&apos;ai eu l&apos;idée de concevoir une <b>application mobile</b> pour <b>s&apos;amuser</b> en premier, mais en intégrant des manières d&apos;apprendre la <b>langue arabe</b>. Le but est donc que les utilisateurs soient <b>réguliers</b> afin que les <b>bases</b> de la langue s&apos;encre dans le cerveau.</p>
                  
                  <h3 className="text-3xl font-bold mb-6 text-accent">Les Défis et Solutions</h3>
                  <p className="text-lg text-gray-300 text-justify">Le défi premier est simple : <b>amuser</b>. Il faut que l&apos;enfant soit <b>stimulé</b> dans l&apos;application, afin qu&apos;il <b>revienne</b> pour jouer, avec cela les connaissances vont s&apos;ancrer. La solution est simple : <em>tester</em>. Le <em>design</em> c&apos;est concevoir un produit qui répond parfaitement au <b>besoin</b>, comme le chemin qui coupe l&apos;herbe. Mais pour cela il faut construire <b>avec</b> les utilisateurs le produit. C&apos;est donc en profitant de ma <b>proximité</b> avec les élèves que j&apos;ai que je souhaite tester et améliorer mon application. </p>
                  

                  <div className="flex justify-center mt-8">
                  <button className="bg-accent text-black font-bold py-2 px-4 rounded-lg shadow-md shadow-accent/50 hover:shadow-accent/50 hover:shadow-lg text-center mr-4" onClick={onSubmit}>Fonce !</button>
                    <button className="bg-primary text-black font-bold py-2 px-4 rounded-lg shadow-md shadow-primary/50 hover:shadow-primary/50  hover:shadow-lg transition duration-300 text-center" onClick={onReflechis}>Réfléchis bien...</button>
                  </div>
               
               
                </div>
              </section>
              <section className="py-12">
                <div className="container mx-auto px-4">
                  <h2 className="text-4xl font-bold  mb-6 text-center text-secondary">Mentorat Informatique</h2>
                  <h3 className="text-3xl font-bold mb-6 text-accent">Ma Vision</h3>
                  <p className="text-lg mb-8 text-gray-300 text-justify">Mon <a href="/parcours" target="_blank" className="text-blue-700">parcours</a> m&apos;a permis non seulement d&apos;apprendre de <b>nouvelles</b> compétences, mais surtout d&apos;avoir une vue d&apos;ensemble sur <b>l&apos;apprentissage</b> en autodidacte et ses difficultés ainsi qu&apos;en études supérieures. Ce que j&apos;ai relevé de ces deux expériences fût similaire : <b>apprendre c&apos;est possible dans tous les cas</b>, mais le manque <b>d&apos;accompagnement</b> est la première source de <b>démotivation</b>, de manque de discipline et tout simplement de perte de temps et d&apos;énergie. Seul, je n&apos;avais personne pour m&apos;accompagner sur le <b>chemin</b> de l&apos;apprentissage, puis durant les études supérieures les professeurs ne pouvaient naturellement pas prendre le temps de rester avec moi m&apos;expliquer. </p>
                  
                  <h3 className="text-3xl font-bold mb-6 text-accent">Le Plan</h3>
                  <p className="text-lg mb-8 text-gray-300 text-justify" >Le plan est le suivant : permettre aux jeunes (et plus âgés) d&apos;être <b>accompagné</b> dans leur formation au <em>développement web</em>. Cette idée est nait suite à une analyse du <b>marché du travail</b> et de mon expérience en tant que <b>développeur</b> : bien que le diplôme soit important pour être recruté, les projets personnels est ce qui démarque le plus, tout en apprenant et en faisant ce qu&apos;on aime (la preuve avec ce site !). </p>
                  
                  <h3 className="text-3xl font-bold mb-6 text-accent">Les Défis et Solutions</h3>
                  <p className="text-lg text-gray-300 text-justify">L&apos;<b>absence</b> de diplôme et de <b>garantie</b> de recrutement dans ce projet est présent. Cependant, non seulement cet accompagnement est une cause de développement de <b>compétences</b>, mais c&apos;est également l&apos;occasion d&apos;élaborer un <b>portfolio</b> solide. Ce portfolio répond aussi à un autre défi : le <em>gap</em> présent entre les études et le travail. En concevant un site <b>complet</b> et en le mettant en ligne, l&apos;élève aura une vue d&apos;ensemble sur <b>l&apos;ensemble</b> du projet et se rendra compte du travail des entreprises dans le domaine. Cet accompagnement offre également la possibilité de se lancer en <em>Freelance</em> à son compte.</p>
                  <div className="flex justify-center mt-8">
                    <button className="bg-accent text-black font-bold py-2 px-4 rounded-lg  shadow-md shadow-accent/50 hover:shadow-accent/50  hover:shadow-lg text-center mr-4" onClick={onSubmit}>Fonce !</button>
                    <button className="bg-primary text-black font-bold py-2 px-4 rounded-lg shadow-md shadow-primary/50 hover:shadow-primary/50  hover:shadow-lg text-center" onClick={onReflechis}>Réfléchis bien...</button>
                  </div>
                </div>
              </section>

          </section>

          </div>
      </section>
        </>
    )
};

export default Valeurs;