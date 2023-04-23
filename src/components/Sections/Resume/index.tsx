import {FC, memo, useEffect ,useState} from 'react';

import { /* education, experience, */  SectionId/* , skills */} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup as SkillGroups}  from './Skills';


import TimelineItems from './TimelineItem';

import {TimelineItem, SkillGroup} from '../../../data/dataDef'


import { fetchWithoutToken } from '../../../helpers/fetch';

const Resume: FC = memo(() => {

  const [resumenTitulo1, setResumenTitulo1]= useState('');
  const [resumenTitulo2, setResumenTitulo2]= useState('');
  const [resumenTitulo3, setResumenTitulo3]= useState('');
  
  const [fecha1, setFecha1]= useState('');
  const [lugar1, setLugar1]= useState('');
  const [titulo1, setTitulo1]= useState('');
  const [contenido1, setContenido1]= useState('');

  const [fecha2, setFecha2]= useState('');
  const [lugar2, setLugar2]= useState('');
  const [titulo2, setTitulo2]= useState('');
  const [contenido2, setContenido2]= useState('');


  const [fecha3, setFecha3]= useState('');
  const [lugar3, setLugar3]= useState('');
  const [titulo3, setTitulo3]= useState('');
  const [contenido3, setContenido3]= useState('');

  const [fecha4, setFecha4]= useState('');
  const [lugar4, setLugar4]= useState('');
  const [titulo4, setTitulo4]= useState('');
  const [contenido4, setContenido4]= useState('');

  const [fecha5, setFecha5]= useState('');
  const [lugar5, setLugar5]= useState('');
  const [titulo5, setTitulo5]= useState('');
  const [contenido5, setContenido5]= useState('');

  const [skillTitulo1, setSkillTitulo1]= useState('');
  const [skill1Nombre1, setSkill1Nombre1]= useState('');
  const [skill1Nivel1, setSkill1Nivel1]= useState(0);
  const [skill1Nombre2, setSkill1Nombre2]= useState('');
  const [skill1Nivel2, setSkill1Nivel2]= useState(0);


  const [skillTitulo2, setSkillTitulo2]= useState('');
  const [skill2Nombre1, setSkill2Nombre1]= useState('');
  const [skill2Nivel1, setSkill2Nivel1]= useState(0);
  const [skill2Nombre2, setSkill2Nombre2]= useState('');
  const [skill2Nivel2, setSkill2Nivel2]= useState(0);
  const [skill2Nombre3, setSkill2Nombre3]= useState('');
  const [skill2Nivel3, setSkill2Nivel3]= useState(0);
  const [skill2Nombre4, setSkill2Nombre4]= useState('');
  const [skill2Nivel4, setSkill2Nivel4]= useState(0);


  const [skillTitulo3, setSkillTitulo3]= useState('');
  const [skill3Nombre1, setSkill3Nombre1]= useState('');
  const [skill3Nivel1, setSkill3Nivel1]= useState(0);
  const [skill3Nombre2, setSkill3Nombre2]= useState('');
  const [skill3Nivel2, setSkill3Nivel2]= useState(0);
  const [skill3Nombre3, setSkill3Nombre3]= useState('');
  const [skill3Nivel3, setSkill3Nivel3]= useState(0);
  const [skill3Nombre4, setSkill3Nombre4]= useState('');
  const [skill3Nivel4, setSkill3Nivel4]= useState(0);


  const [skillTitulo4, setSkillTitulo4]= useState('');
  const [skill4Nombre1, setSkill4Nombre1]= useState('');
  const [skill4Nivel1, setSkill4Nivel1]= useState(0);
  const [skill4Nombre2, setSkill4Nombre2]= useState('');
  const [skill4Nivel2, setSkill4Nivel2]= useState(0);
  const [skill4Nombre3, setSkill4Nombre3]= useState('');
  const [skill4Nivel3, setSkill4Nivel3]= useState(0);

  const [skillTitulo5, setSkillTitulo5]= useState('');
  const [skill5Nombre1, setSkill5Nombre1]= useState('');
  const [skill5Nivel1, setSkill5Nivel1]= useState(0);
  const [skill5Nombre2, setSkill5Nombre2]= useState('');
  const [skill5Nivel2, setSkill5Nivel2]= useState(0);
  const [skill5Nombre3, setSkill5Nombre3]= useState('');
  const [skill5Nivel3, setSkill5Nivel3]= useState(0);


  const [skillTitulo6, setSkillTitulo6]= useState('');
  const [skill6Nombre1, setSkill6Nombre1]= useState('');
  const [skill6Nivel1, setSkill6Nivel1]= useState(0);
  const [skill6Nombre2, setSkill6Nombre2]= useState('');
  const [skill6Nivel2, setSkill6Nivel2]= useState(0);
  const [skill6Nombre3, setSkill6Nombre3]= useState('');
  const [skill6Nivel3, setSkill6Nivel3]= useState(0);






 

  useEffect(() => {

    const ApiCall = async () => {    

      const response = await fetchWithoutToken('section/resume/data',0,'GET');
      const body = await response.json();                          

     console.log(body);
    
      if(response.status === 200) {  

        setResumenTitulo1(body.resumenTitulo1);
        setResumenTitulo2(body.resumenTitulo2);
        setResumenTitulo3(body.resumenTitulo3);
        
        setFecha1(body.fecha1);
        setLugar1(body.lugar1);
        setTitulo1(body.titulo1);
        setContenido1(body.contenido1);

         
        setFecha2(body.fecha2);
        setLugar2(body.lugar2);
        setTitulo2(body.titulo2);
        setContenido2(body.contenido2);

         
        setFecha3(body.fecha3);
        setLugar3(body.lugar3);
        setTitulo3(body.titulo3);
        setContenido3(body.contenido3);

         
        setFecha4(body.fecha4);
        setLugar4(body.lugar4);
        setTitulo4(body.titulo4);
        setContenido4(body.contenido4);

         
        setFecha5(body.fecha5);
        setLugar5(body.lugar5);
        setTitulo5(body.titulo5);
        setContenido5(body.contenido5);


        setSkillTitulo1(body.skillTitulo1);
        setSkill1Nombre1(body.skill1Nombre1);
        setSkill1Nivel1(body.skill1Nivel1);
        setSkill1Nombre2(body.skill1Nombre2);
        setSkill1Nivel2(body.skill1Nivel2);

        setSkillTitulo2(body.skillTitulo2);
        setSkill2Nombre1(body.skill2Nombre1);
        setSkill2Nivel1(body.skill2Nivel1);
        setSkill2Nombre2(body.skill2Nombre2);
        setSkill2Nivel2(body.skill2Nivel2);
        setSkill2Nombre3(body.skill2Nombre3);
        setSkill2Nivel3(body.skill2Nivel3);
        setSkill2Nombre4(body.skill2Nombre4);
        setSkill2Nivel4(body.skill2Nivel4);


        setSkillTitulo3(body.skillTitulo3);
        setSkill3Nombre1(body.skill3Nombre1);
        setSkill3Nivel1(body.skill3Nivel1);
        setSkill3Nombre2(body.skill3Nombre2);
        setSkill3Nivel2(body.skill3Nivel2);
        setSkill3Nombre3(body.skill3Nombre3);
        setSkill3Nivel3(body.skill3Nivel3);
        setSkill3Nombre4(body.skill3Nombre4);
        setSkill3Nivel4(body.skill3Nivel4);


        setSkillTitulo4(body.skillTitulo4);
        setSkill4Nombre1(body.skill4Nombre1);
        setSkill4Nivel1(body.skill4Nivel1);
        setSkill4Nombre2(body.skill4Nombre2);
        setSkill4Nivel2(body.skill4Nivel2);
        setSkill4Nombre3(body.skill4Nombre3);
        setSkill4Nivel3(body.skill4Nivel3)

        setSkillTitulo5(body.skillTitulo5);
        setSkill5Nombre1(body.skill5Nombre1);
        setSkill5Nivel1(body.skill5Nivel1);
        setSkill5Nombre2(body.skill5Nombre2);
        setSkill5Nivel2(body.skill5Nivel2);
        setSkill5Nombre3(body.skill5Nombre3);
        setSkill5Nivel3(body.skill5Nivel3)


        setSkillTitulo6(body.skillTitulo6);
        setSkill6Nombre1(body.skill6Nombre1);
        setSkill6Nivel1(body.skill6Nivel1);
        setSkill6Nombre2(body.skill6Nombre2);
        setSkill6Nivel2(body.skill6Nivel2);
        setSkill6Nombre3(body.skill6Nombre3);
        setSkill6Nivel3(body.skill6Nivel3)


      
          
        
        
       
      } else {
        console.error('error en fetch');
         //Inconsistency in the error messages, it is necessary to reform the return of public List<Users> getUsers in the back
             }    
    }
    ApiCall();    
},[]);




  const education:  TimelineItem[] = [
    {
      date: fecha1,
      location: lugar1,
      title: titulo1,
      content: <p>{contenido1}</p>,
    },
    {
      date: fecha2,
      location: lugar2,
      title: titulo2,
      content: <p>{contenido2}</p>,
    },
  ];
  
   const experience: TimelineItem[] = [
    {
      date: fecha3,
      location: lugar3,
      title: titulo3,
      content: (
        <p>
          {contenido3}
        </p>
      ),
    },
    {
      date: fecha4,
      location: lugar4,
      title: titulo4,
      content: (
        <p>
         {contenido4}
        </p>
      ),
    },
    {
      date: fecha5,
      location: lugar5,
      title: titulo5,
      content: (
        <p>
          {contenido5}
        </p>
      ),
    },
  ];

  const skills: SkillGroup[] = [
    {
      name: skillTitulo1,
      skills: [
        {
          name: skill1Nombre1,
          level: skill1Nivel1,
        },
       
        {
          name: skill1Nombre2,
          level: skill1Nivel2,
        },
      ],
    },
    {
      name: skillTitulo2,
      skills: [
        {
          name: skill2Nombre1,
          level: skill2Nivel1,
        },
        {
          name: skill2Nombre2,
          level: skill2Nivel2,
        },
  
        {
          name: skill2Nombre3,
          level: skill2Nivel3,
        },
        {
          name: skill2Nombre4,
          level: skill2Nivel4,
        },
        
       
      ],
    },
    {
      name: skillTitulo3,
      skills: [
        {
          name: skill3Nombre1,
          level: skill3Nivel1,
        },
        {
          name: skill3Nombre2,
          level: skill3Nivel2,
        },
        {
          name: skill3Nombre3,
          level: skill3Nivel3,
        },
        {
          name: skill3Nombre4,
          level: skill3Nivel4,
        },
      ],
    },
    {
      name: skillTitulo4,
      skills: [
        {
          name: skill4Nombre1,
          level: skill4Nivel1,
        },
        {
          name: skill4Nombre2,
          level: skill4Nivel2,
        },
        {
          name: skill4Nombre3,
          level: skill4Nivel3,
        },
      ],
    },
    {
      name: skillTitulo5,
      skills: [
        {
          name: skill5Nombre1,
          level: skill5Nivel1,
        },
        {
          name: skill5Nombre2,
          level: skill5Nivel2,
        },
        {
          name: skill5Nombre3,
          level: skill5Nivel3,
        },
      ],
    },
    {
      name: skillTitulo6,
      skills: [
        {
          name: skill6Nombre1,
          level: skill6Nivel1,
        },
        {
          name: skill6Nombre2,
          level: skill6Nivel2,
        },
        {
          name: skill6Nombre3,
          level: skill6Nivel3,
        },
      ],
    }
  ];


  
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title={resumenTitulo1}>
          {education.map((item, index) => (
            <TimelineItems item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={resumenTitulo2}>
          {experience.map((item, index) => (
            <TimelineItems item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={resumenTitulo3}>
          <p className="pb-8"></p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroups key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
