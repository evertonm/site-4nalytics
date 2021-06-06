import { Header } from '../components/Header';
import { SimpleDescription } from '../components/SimpleDescription';
import { Skills } from '../components/Skills';

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