import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox';
import { Header } from '../components/Header';
import { SimpleDescription } from '../components/SimpleDescription';
import { Skills } from '../components/Skills';


import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengeContext';


import { GetServerSideProps } from 'next';

interface HomeProps {
  level: number
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  return (
    <>
      <Header />
      <main>
        <SimpleDescription />
        <Skills />
      </main>
    </>
  );
}

//Chamadas API, Chamadas externas, Executa no servidor node e não no browser
/* export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
} */