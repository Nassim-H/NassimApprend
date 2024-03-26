'use client'
import Head from "next/head"
import Header from "../components/Header"

import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
  import 'react-vertical-timeline-component/style.min.css';
import React, { Suspense } from "react";


  const Spline = React.lazy(() => import('@splinetool/react-spline'));

  const WorkIcon = () => <></>;

const Experience = () => { 



    return (
      (
      <div>
      <Header />
        <div className="container mx-auto px-4 py-8">
            <section className="mb-12">
                <div className="relative h-screen mb-8">
                  <Suspense fallback={<div className='text-center'>Loading...</div>}>
                      <Spline scene="https://prod.spline.design/2bPLhD4t3yIY84bo/scene.splinecode"/>
                  </Suspense>
                </div>
            </section>

            <section className="mb-8">
            <div className=" p-6">
              <h2 className="text-2xl font-bold mb-4">Résumé</h2>
              <p className="text-lg">Avec un parcours unique, je me suis formé à l&apos;informatique en <b>autodidacte</b>. J&apos;ai ensuite fais mes études dans le domaine. Mais je continue à apprendre en autodidacte sur <b>internet</b> car <b>j&apos;aime</b> cette façon de me former (informatique, 3D, design..). Je la trouve plus efficace que l&apos;enseignement à présentiel qui est souvent <b>lente</b> et <b>moins stimulante</b> pour mon cas. 
              </p>
            </div>
          </section>

          <h1 className="text-3xl font-bold m-4 text-center">Voici mon parcours !</h1>
         </div>
        
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(126, 200, 227)' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(126, 200, 227)' }}
                date="2016 - 2018"
                iconStyle={{ background: 'rgb(162, 209, 73)', color: '#fff' }}
                icon={<WorkIcon />}
                visible={true}
                        >
                <h3 className="vertical-timeline-element-title text-green-900 text-xl">Auto apprentissage de l&apos;informatique</h3>
                <h4 className="vertical-timeline-element-subtitle ">Les débuts en autodidacte</h4>
                <p>
                Je découvre l&apos;informatique et <b>l&apos;auto apprentissage</b> sur internet durant mes années de <b>collège et de lycée</b>. J&apos;apprends notamment sur <em>le site du 0</em> qui devient ensuite <a href="https://openclassrooms.com/fr/" target="_blank" className="text-blue-700">openclassroom</a>.
                </p>
            </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - 2021"
        iconStyle={{ background: 'rgb(126, 200, 227)', color: '#fff' }}
        icon={<WorkIcon />}
        visible={true}

      >
        <h3 className="vertical-timeline-element-title text-green-900 text-xl">Baccaleauréat Général</h3>
        <h4 className="vertical-timeline-element-subtitle">Option Numérique et Sciences informatiques et mathématiques</h4>
        <p>
          Je continue ma formation dans l&apos;informatique en choisissant l&apos;option <b>NSI</b> au <a href="https://www.lyceecarnot.fr" target="_blank" className="text-blue-700">lycée</a>. J&apos;obtiens mon <b>baccaleauréat</b> avec mention <b>bien</b>. Ayant précédemment appris les bases de l&apos;informatique, je trouve les cours simples et intéressants.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021 - 2024"
        iconStyle={{ background: 'rgb(126, 200, 227)', color: '#fff' }}
        icon={<WorkIcon />}
        visible={true}

      >
        <h3 className="vertical-timeline-element-title text-green-900 text-xl">B.U.T Informatique</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Universitaire de Technologie</h4>
        <p>
          C&apos;est donc naturellement que je m&apos;oriente vers un <b><a href="http://www.iut-lens.univ-artois.fr/formations/but-informatique/" target="_blank" className="text-blue-700">B.U.T Informatique</a></b> à l&apos;I.U.T. de Lens J&apos;y réapprends les bases de l&apos;informatique et me spécialise dans le <b>développement Web</b>. Je découvre également le <b>monde professionnel</b> durant deux stages...
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2023"
        iconStyle={{ background: 'rgb(126, 200, 227)', color: '#fff' }}
        visible={true}

      >
        <h3 className="vertical-timeline-element-title text-green-900 text-xl">Stage dans un organisme public</h3>
        <h4 className="vertical-timeline-element-subtitle"><a href="https://www.metarisc.fr/posts/2023-01-01-lancement-metarisc/" target="_blank" className="text-blue-700">SDIS 62</a></h4>
        <p>
          Durant ce stage, je découvre non seulement le monde professionnel mais surtout affirme mon envie <b>d&apos;aider les autres</b>. En effet, rien ne me motive plus que de me sentir <b>utile</b> et de rendre service.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 - 2024"
        iconStyle={{ background: 'rgb(162, 209, 73)', color: '#fff' }}
        icon={<WorkIcon />}
        visible={true}

      >
        <h3 className="vertical-timeline-element-title text-green-900 text-xl">Enseignant et animateur</h3>
        <h4 className="vertical-timeline-element-subtitle">Association <a href="https://www.helloasso.com/associations/apas-bethunois" target="_blank" className="text-blue-700">APAS</a></h4>
        <p>
          Dès Octobre 2023, je deviens <b>animateur</b> et <b>enseignant</b> dans l&apos;association <b>APAS</b>. Je donne plus de <b>10 heures</b> de cours par semaine aux enfants de tout âge. Je découvre ce monde qui m&apos;était nouveau et me <b>passionne</b> pour <b>l&apos;enseignement</b>. Les enfants sont <b>attentionnés</b> et <b>curieux</b>, ce qui me pousse à continuer dans cette voie.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2024"
        iconStyle={{ background: 'rgb(162, 209, 73)', color: '#fff' }}
        visible={true}

      >
        <h3 className="vertical-timeline-element-title text-green-900 text-xl">Diplôme d&apos;Animateur Fédéral</h3>
        <h4 className="vertical-timeline-element-subtitle">Karaté</h4>
        <p>
          A côté de mes études, je continue après <b>10 ans</b> de pratique, à m&apos;investir dans le <b>karaté</b>. Je suis en train de passer mon <b><a href="https://www.ffkarate.fr/espace-licencies/formations/diplome-animateur-federal-daf/" target="_blank" className="text-blue-700" >diplôme d&apos;animateur fédéral</a></b> tout en <b>enseignant</b> avec le professeur dans mon club. 
        </p>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Aujourd'hui"
        iconStyle={{ background: 'rgb(162, 209, 73)', color: '#fff' }}
        visible={true}

      >
        <h3 className="vertical-timeline-element-title text-green-900 text-xl">Candidature à la Licence 3 en éducation</h3>
        <h4 className="vertical-timeline-element-subtitle">Licence éducation à distance</h4>
        <p>
          Suite à mon <b>parcours formateur</b> dans l&apos;enseignement, je souhaite continuer dans cette voie. Je postule donc pour une <b>licence 3 en éducation</b> à distance. J&apos;espère ainsi continuer à <b>m&apos;investir</b> dans l&apos;éducation et à aider les enfants à grandir. Au-délà de ma passion pour l&apos;enseignement, c&apos;est également les méthodes d&apos;apprentissage qui m&apos;intéressent. Curieux et ambitieux, j&apos;aime <b>comprendre</b> comment la société évolue afin d&apos;être un acteur de son amélioration.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        visible={true}

      />
    </VerticalTimeline>
    </div>
    ))
}

export default Experience