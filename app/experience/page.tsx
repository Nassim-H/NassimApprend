'use client'
import React, { Suspense } from 'react';
import Head from "next/head"
import Header from "../components/Header"
import MultiLayerParallax from "../components/Parallax"
import Footer from '../components/Footer';
import Anecdote from '../components/Anecdote';
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { BsChatText } from "react-icons/bs";
import { PiChairLight } from "react-icons/pi";
import { MdOutlineWavingHand } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { GiFamilyTree } from "react-icons/gi";


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
          <section  id="experience" className="mb-8">
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
            <section className='mb-8'>

            <h2 className="text-3xl font-bold text-center mt-10 mb-8">Quelques anecdotes !</h2>

            <Anecdote color='bg-accent' icon={<HiOutlineHandRaised className="h-8 w-8 text-rose-400" />}>
            Afin de me préparer pour mes premiers cours, j'ai été invité par l'association à participer à leurs sorties pendant les vacances afin de rencontrer les enfants. Je me rappelle avoir eu des difficultés à établir mon autorité. C'est ainsi que j'ai appris l'importance d'être ferme quand c'était nécessaire.
            </Anecdote>
            <Anecdote align='right' icon={<BsChatText className='h-8 w-8 text-rose-400'/>}>
              Lors de mes premiers cours avec les maternelles, j'ai été surpris par leur énergie déborante. J'ai dû trouver des moyens de les canaliser. Le meilleur moyen de captiver l'attention des plus petits et des plus grands : <b>raconter des histoires</b>.
            </Anecdote>
            <Anecdote color="bg-primary" icon={<MdOutlineWavingHand className="h-8 w-8 text-rose-400" />}>
              Lors de mes tournées dans les rangs pour aider chacun des élèves, j'entendais très souvent mon prénom dans les rangs, et je me retournais pour voir <b>plusieurs</b> élèves <b>me demander de l'aide</b> ! Cela m'a permis de comprendre l'importance de la <b>proximité</b> avec les élèves.
            </Anecdote>
            <Anecdote align='center' icon={<PiChairLight className="h-8 w-8 text-rose-400" />}>
              Un jour, je me suis rendu compte qu'un élève avait <b>beaucoup de mal</b> à suivre le cours. J'ai pris le temps de m'asseoir à côté de lui et de lui expliquer les choses <b>plus lentement</b>. Il m'a ensuite sollicité durant les cours suivants avec <b>motivation</b>.
            </Anecdote>
            <Anecdote color='bg-accent' align='right' icon={<TbSchool className="h-8 w-8 text-rose-400"  />}>
              Comme dans tout établissement scolaire, il y a des classes plus difficiles à gérer, et j'ai eu ma part. J'ai appris à <b>garder mon calme</b> et à <b>ne pas me laisser déborder</b> par les élèves. Je prenais le temps de comprendre la situation afin de l'apaiser. J'ai notamment appris que certaines frateries ne s'entendent pas du tout. Je me rends compte de l'importance de la <b>vie à la maison</b> dans la réussite scolaire.
            </Anecdote>
            <Anecdote color='bg-primary' icon={<GiFamilyTree className="h-8 w-8 text-rose-400"  />}>
              Je n'ai pas seulement appris des enfants, j'ai également pris conscience de l'importance du <b>travail des parents</b>. C'est en effet les parents les plus <b>investis</b> qui ont les enfants les plus <b>motivés</b>. J'ai donc mis en évidence durant les réunions entre responsables l'importance de <b>l'implication des parents</b>, ne serait-ce que demander à l'enfant ce qu'il a appris durant le cours.
            </Anecdote>
            </section>
        </div>
        <Footer />
        </>
    ))
}

export default Experience