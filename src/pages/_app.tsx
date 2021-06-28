import '../styles/global.css';
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBoxOpen, faHeadset, faMouse, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { useState } from 'react';

library.add(fab, faBoxOpen, faMouse, faHeadset, faBars, faTimes)


function MyApp({ Component, pageProps }) {
  /*

  Contexto x que depende de contexto Y, deve sempre ser filho do contexto  Y, logo fica dentro do contexto Y.
  Nesse caso, uso o Contexto Y dentro do Contexto X.
  Exemplo:
  <ProviderY>
    <ProviderX>
    </ProviderX>
  </ProviderY>

  */

  const phrase = encodeURI('Olá, quero saber como tomar as melhores decisões para o meu negócio! Poderia me ajudar?');
  const [urlWhatsapp, setUrlWhatsapp] = useState(`https://wa.me/5548998083531/?text=${phrase}`);
  return (
    <>
      <div className="whatsapp">
        <Link href={urlWhatsapp}>
          <a target="_blank"> 
            <img src="/whatsapp.png" alt="Logo" />
          </a>
        </Link>
      </div>




      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
