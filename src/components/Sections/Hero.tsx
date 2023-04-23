import {ChevronDownIcon, DownloadIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useEffect ,useState} from 'react';

import {/* heroData, */ SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';


import heroImage from '../../images/header-background.webp';
import { Hero } from '../../data/dataDef';
import { fetchWithoutToken } from '../../helpers/fetch';




const Hero: FC = memo(() => {

  const [nombre, setNombre]= useState('');
  const [descripcion1, setDescripcion1]= useState('');
  const [descripcion2, setDescripcion2]= useState('');
  const [descripcion3, setDescripcion3]= useState('');
  const [descripcion4, setDescripcion4]= useState('');
  const [descripcion5, setDescripcion5]= useState('');
  const [descripcion6, setDescripcion6]= useState('');
  const [descripcion7, setDescripcion7]= useState('');
  const [descripcion8, setDescripcion8]= useState('');
  const [descripcion9, setDescripcion9]= useState('');

  useEffect(() => {

    const ApiCall = async () => {    

      const response = await fetchWithoutToken('section/hero/data',0,'GET');
      //const response = await fetchWithoutToken('hero',0,'GET');
      const body = await response.json();                          

     console.log(body);
    
      if(response.status === 200) {  
        
        setNombre(body.nombre);       
        setDescripcion1(body.descripcion1);
        setDescripcion2(body.descripcion2);
        setDescripcion3(body.descripcion3);
        setDescripcion4(body.descripcion4);
        setDescripcion5(body.descripcion5);
        setDescripcion6(body.descripcion6);
        setDescripcion7(body.descripcion7);
        setDescripcion8(body.descripcion8);
        setDescripcion9(body.descripcion9);

        
       
      } else {
        console.error('error en fetch');
         //Inconsistency in the error messages, it is necessary to reform the return of public List<Users> getUsers in the back
             }    
    }
    ApiCall();    
},[]);


  

  const heroData: Hero = {
    imageSrc: heroImage,
    name: nombre,
    description: (
      <>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
          {descripcion1}<strong className="text-stone-100">{descripcion2}</strong>{descripcion3} <strong className="text-stone-100">{descripcion4}</strong>{descripcion5}
        </p>
        <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">{descripcion6}
           <strong className="text-stone-100">{descripcion7}</strong>,
          <strong className="text-stone-100">{descripcion8}</strong>{descripcion9}{' '}
          <strong className="text-stone-100"></strong>
        </p>
      </>
    ),
    actions: [
      {
        href: '/assets/resume_ptavolaro.pdf',
        text: 'Resume-en',
        primary: true,
        Icon: DownloadIcon,
      },
      {
        href: '/assets/cv_ptavolaro.pdf',
        text: 'Resume-sp',
        primary: true,
        Icon: DownloadIcon,
      },
      {
        href: `#${SectionId.Contact}`,
        text: 'Contact',
        primary: true,
      }, 
    
    ],
  };
  const {imageSrc, name, description, actions} = heroData;


 
  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-screen items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>   
       
         
        
      </div>
      
      
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
