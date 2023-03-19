import styles from './Inicio.module.css'
import gabriel from '../assets/gab.jpg';
import Image from 'next/image'
import Botoes from '../Components/Buttons';
import figma from '../assets/figma.svg';
import linkdin from '../assets/linkdin.svg';
import twitter from '../assets/twitter.svg';
import React, { useState } from 'react';
import DarkModeToggle from '../Components/darkmode/DarkModeToggle';
import '../Components/darkmode/DarkModeToggle.module.css'
import {FiFacebook, FiFigma, FiInstagram} from 'react-icons/fi'
import {BsFacebook, BsWhatsapp} from 'react-icons/bs'
import CustomHead from '../../head';

export const handleGithubClick = () => {
  window.open('https://www.facebook.com/gabrieldiassantiago09/', '_blank');
};

export const handleInstagramClick = () => {
  window.open('https://www.instagram.com/_dias17y/')
}

export const handleWhatsClick = () => {
  window.open('https://api.whatsapp.com/send?phone=5512991663075')
}



export default function Inicio () {
    return (
       <div className={styles.container}>
          <CustomHead />
        <Image className={styles.imagem} src={gabriel} alt="imagem" />
       <div className={styles.topo}>
        <span className={styles.text}>Um designer e programador que ama ilustrar, codar e criar coisas incríveis através do código</span>
       </div>
        <div className={styles.redesosociais}>
        <FiFacebook color='black' size={25} style={{cursor: 'pointer'}} onClick={handleGithubClick} />
        <FiInstagram color='black' size={25} onClick={handleInstagramClick} style={{cursor: 'pointer'}} />
        <BsWhatsapp  color='black' size={25} onClick={handleWhatsClick} style={{cursor: 'pointer'}}/>
        </div>
        <h2 className={styles.acessarlinks}>Acesse meus links</h2>

        <Botoes />
       </div>
    )
}