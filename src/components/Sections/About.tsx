import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useEffect ,useState} from 'react';

import {/* aboutData ,*/ SectionId} from '../../data/data';
import Section from '../Layout/Section';


import profilepic from '../../images/profilepic.jpg';
import { About } from '../../data/dataDef';
import { fetchWithoutToken } from '../../helpers/fetch';
import {
  AcademicCapIcon,
  CalendarIcon,  
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

const About: FC = memo(() => {

  const [sobreMi, setSobreMi]= useState('');
  const [descripcion, setDescripcion]= useState('');
  const [label1, setLabel1]= useState('');
  const [text1, setText1]= useState('');
  const [label2, setLabel2]= useState('');
  const [text2, setText2]= useState('');
  const [label3, setLabel3]= useState('');
  const [text3, setText3]= useState('');
  const [label4, setLabel4]= useState('');
  const [text4, setText4]= useState('');
  const [label5, setLabel5]= useState('');
  const [text5, setText5]= useState('');
  const [label6, setLabel6]= useState('');
  const [text6, setText6]= useState('');

 

  useEffect(() => {

    const ApiCall = async () => {    

      const response = await fetchWithoutToken('section/about/data',0,'GET');
      const body = await response.json();                          

     console.log(body);
    
      if(response.status === 200) {  
        
        setSobreMi(body.sobreMi);
        setDescripcion(body.descripcion);
        setLabel1(body.label1);
        setText1(body.text1);
        setLabel2(body.label2);
        setText2(body.text2);
        setLabel3(body.label3);
        setText3(body.text3);
        setLabel4(body.label4);
        setText4(body.text4);
        setLabel5(body.label5);
        setText5(body.text5);
        setLabel6(body.label6);
        setText6(body.text6);  
        
       
      } else {
        console.error('error en fetch');
         //Inconsistency in the error messages, it is necessary to reform the return of public List<Users> getUsers in the back
             }    
    }
    ApiCall();    
},[]);


  const aboutData: About = {
    profileImageSrc: profilepic,
    description:descripcion,
    aboutItems: [
      {label: label1, text: text1, Icon: MapIcon},
      {label: label2, text: text2, Icon: CalendarIcon},
      {label: label3, text: text3, Icon: FlagIcon},
      {label: label4, text: text4, Icon: SparklesIcon},
      {label: label5, text: text5, Icon: AcademicCapIcon},
      {label: label6, text: text6, Icon: OfficeBuildingIcon},
    ],
  };

  const {profileImageSrc, description, aboutItems} = aboutData;

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" layout="fill" objectFit="cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">{sobreMi}</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className=" text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
