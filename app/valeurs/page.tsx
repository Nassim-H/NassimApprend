import Header from "../components/Header";
import MultiLayerParallax from "../components/Parallax";


const Valeurs = () => {
    return (
        <>
        <Header />
            <MultiLayerParallax />
            <section className="bg-mountain py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-secondary">Quelles sont mes valeurs ?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Je souhaite à travers la licence Education devenir un <b>éducateur accompli</b>. Mon objectif est de contribuer positivement à la société en formant les futures générations. Je crois fermement en une approche éducative centrée sur l&apos;apprenant, qui valorise l&apos;autonomie, la créativité et l&apos;inclusion.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Mon expérience en tant qu&apos;animateur et enseignant dans l&apos;association <a href="https://www.helloasso.com/associations/apas-bethunois" target="_blank" className="text-blue-700">APAS</a> m&apos;a permis de renforcer ma conviction en l&apos;importance de l&apos;éducation. J&apos;ai en effet la convistion que l&apos;éducation n&apos;est pas seulement un <b>levier</b> pour l&apos;épanouissement personnel et le développement de l&apos;individu, mais c&apos;est <b>le</b> levier pour le développement de la société.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Mes ambitions sont donc multiples à travers ce parcours d&apos;enseignant, je ne souhaite pas seulement transmettre des connaissances. Je souhaite concevoir et collaborer dans des projets éducatifs qui améliorent la qualité de l&apos;éducation de tous.
          </p>
          
          </div>
      </section>
        </>
    )
};

export default Valeurs;