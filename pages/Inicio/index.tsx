import styles from './Inicio.module.css'
import gabriel from '../assets/gabriel.jpg';
import Image from 'next/image'
import Botoes from '../Components/Buttons';
import figma from '../assets/figma.svg';
import linkdin from '../assets/linkdin.svg';
import twitter from '../assets/twitter.svg';



    
const greetingMessage = () => {
    let h = new Date().getHours();
    switch (true) {
      case h < 5: return 'Boa madrugada';
      case h < 12: return 'Bom dia';
      case h < 18: return 'Boa tarde';
      default: return 'Boa noite';
    }      
  }
  


export default function Inicio () {
    return (
       <div className={styles.container}>
        <Image className={styles.imagem} src={gabriel} alt="imagem" />
        <h1 className={styles.saudacoes}>Olá, {greetingMessage()}</h1>
        <span>Um designer e programador que ama ilustrar, codar e criar coisas incríveis através do código</span>
        <div className={styles.redesosociais}>
          <Image className={styles.iconredes} src={figma} alt="figma" />
          <Image className={styles.iconredes} src={linkdin} alt="figma" />
          <Image className={styles.iconredes} src={twitter} alt="figma" /> <br></br>
          <h2 className={styles.acessarlinks}>Acesse meus links</h2>
        </div>
        <Botoes />
       </div>
    )
}