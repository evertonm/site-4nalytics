import '../styles/global.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBoxOpen, faHeadset, faMouse } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faBoxOpen, faMouse, faHeadset)


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
   return (
        <Component {...pageProps} />
  );
}

export default MyApp
