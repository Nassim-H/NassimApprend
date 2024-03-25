'use client'
import React, { Suspense } from 'react';
import Head from "next/head"
import Header from "../components/Header"
import MultiLayerParallax from "../components/Parallax"
import Footer from '../components/Footer';


const Spline = React.lazy(() => import('@splinetool/react-spline'));


const Experience = () => { 

    return (
      (
      <>
      <Header />
        <div className="container mx-auto px-4 py-8">
            <section className="mb-12">
                <div className="relative h-screen mb-8">
                <Suspense fallback={<div className='text-center'>Loading...</div>}>
                    <Spline scene="https://prod.spline.design/Wdq0YRxMIhjOO8ct/scene.splinecode" />
                </Suspense>
                </div>
            </section>

            <section className="mb-8">
            <div className=" p-6">
              <h2 className="text-2xl font-bold mb-4">Résumé</h2>
              <p className="text-lg text-justify">Depuis 2023, je suis animateur et enseignant dans l&apos;association <a href="https://www.helloasso.com/associations/apas-bethunois" target="_blank" className="text-blue-700">APAS</a> dans laquelle je me passionne. Avec plus de <b>10 heures</b> de cours donné aux enfants par semaine, je suis devenu un membre <b>actif</b> de la communauté éducative. Ces expériences ont renforcé ma conviction en <b>l&apos;importance</b> de l&apos;éducation et m&apos;ont inspiré à continuer à m&apos;investir dans ce domaine de manière significative. 
              </p>
            </div>
          </section>

          {/* Expérience avec les enfants */}
          <section className="mb-8">
            <div className="bg-secondary shadow-lg rounded-md p-6">
              <h2 className="text-xl font-semibold mb-4">Missions</h2>
              <p className="text-lg">J&apos;ai eu l&apos;opportunité d&apos;enseigner à des enfants âgés de <b>5 à 11 ans</b> dans un environnement associatif. J&apos;ai enseigné la <b>langue arabe</b> à un niveau <b>débutant</b>, de façon personnalisée en fonction de chaque élèvre. J&apos;ai également élaboré différents <b>jeux ludiques</b> afin de combiner l&apos;apprentissage de la langue arabe avec l&apos;amusement.</p>
            </div>
          </section>

          {/* Missions dans le cadre associatif */}
          <section className="mb-8">
            <div className="bg-secondary shadow-md rounded-md p-6">
              <h2 className="text-xl font-semibold mb-4">Expérience avec les enfants</h2>
              <p className="text-lg">Ma plus grande <b>réussite</b> dans ce poste reste la <b>proximité</b> que j&apos;ai développé avec les enfants. Je ne me considère <b>pas</b> comme un professeur, ni même un animateur, mais plutôt comme un <b>grand frère</b> : je prends le temps d&apos;écouter chacun, de jouer avec chacun tout en enseignant. Le but est de leur <b>donner envie</b> d&apos;apprendre la langue arabe, mais pas seulement. J&apos;ai également comme priorité d&apos;aider les enfants en difficulté quelconque qui ont besoin de parler...</p>
            </div>
          </section>

          {/* Impact et résultats */}
          <section className="mb-8">
            <div className="bg-secondary shadow-md rounded-md p-6">
              <h2 className="text-xl font-semibold mb-4">Impact et résultats</h2>
              <p  className="text-lg"> Le plus noble <b>résultat</b> de mon travail fût de voir des enfants qui n&apos;aimaient pas apprendre l&apos;arabe, avec des difficultés de concentration et de motivations, s&apos;épanouir et prendre plaisir à apprendre. J&apos;ai également crée des <b>liens</b> qui leur permettent de s&apos;épanouir pleinement durant les cours.</p>
                </div>
                
            </section>
        </div>
        <Footer />
        </>
    ))
}

export default Experience