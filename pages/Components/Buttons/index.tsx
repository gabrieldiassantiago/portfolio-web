import styles from './index.module.css'
import facebooklogo from '../../assets/facebook.svg';
import Image from 'next/image'
import seta from '../../assets/seta.svg';
import instagram from '../../assets/instagram.svg'
import whats from '../../assets/whats.svg'
import github from '../../assets/github.svg'


export default function Botoes () {
    return (
        <div className={styles.container}>
           <div className={styles.caixas}>
            <a href=""> <Image className={styles.iconredesocial} src={facebooklogo} alt="seta" />Facebook 
            <Image className={styles.iconseta} src={seta} alt="seta" /></a>
            <a href=""> <Image className={styles.iconredesocial} src={instagram} alt="seta" />Instagram 
            <Image className={styles.iconseta} src={seta} alt="seta" /></a>
            <a href=""> <Image className={styles.iconredesocial} src={whats} alt="seta" />WhatsApp 
            <Image className={styles.iconseta} src={seta} alt="seta" /></a>
            <a href=""> <Image className={styles.iconredesocial} src={github} alt="seta" />Github 
            <Image className={styles.iconseta} src={seta} alt="seta" /></a>
           </div>
            </div>
    )
}