import Header from './Components/Header';
import Hero from './Components/Hero';
import Apresentacao  from './Components/Apresentacao';
import Footer from './Components/Footer';
import Convite from './Components/Convite';
import Beneficios from './Components/beneficios';
import Empresas from "./Components/Empresas";

export default function Home() {
  return (
    <div >
     <Header/>
     <Hero/>
     <Apresentacao/>
     <Empresas/>
     <Beneficios/>
     
      <Convite/>
     <Footer/>
    </div>
  );
}
