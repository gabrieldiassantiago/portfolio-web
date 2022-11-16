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
            <a href="https://www.facebook.com/gabrieldiassantiago09/"> <Image className={styles.iconredesocial} src={facebooklogo} alt="seta" />Facebook 
            <Image className={styles.iconseta} src={seta} alt="seta" /></a>
            <a href="https://www.instagram.com/_dias17y/"> <Image className={styles.iconredesocial} src={instagram} alt="seta" />Instagram 
            <Image className={styles.iconseta} src={seta} alt="seta" /></a>
            <a href="https://wa.me/5512981668260"> <Image className={styles.iconredesocial} src={whats} alt="seta" />WhatsApp 
            <Image className={styles.iconseta} src={seta} alt="seta" /></a>
            <a href="https://github.com/gabrieldiassantiago"> <Image className={styles.iconredesocial} src={github} alt="seta" />Github 
            <Image className={styles.iconseta} src={seta} alt="seta" /></a>
           </div>
            </div>
    )
}