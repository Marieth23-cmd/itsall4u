import Header from './Components/Header';
import Hero from './Components/Hero';
import Apresentacao  from './Components/Apresentacao';
import Visao from './Components/Visao';
import Empresas from './Components/Empresas';
import Footer from './Components/Footer';
import Convite from './Components/Convite';

export default function Home() {
  return (
    <div >
     <Header/>
     <Hero/>
     <Apresentacao/>
      <Empresas/>
     <Visao/>
    
      <Convite/>
     <Footer/>
    </div>
  );
}
