import '../styles/global.css';


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
