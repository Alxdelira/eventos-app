import { useRouter } from 'next/router';
import AppBar from '@/components/Appbar';
import '@/styles/globals.css';
import Head from 'next/head';
import routes from '../services/routes'; 

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  let page = router.query.page
  const pageTitle = routes[currentRoute] || 'Página não encontrada'; 

  

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />        
        <title>{pageTitle}</title>         
      </Head>
      <div>
        <AppBar />
      </div>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
