import {ExternalLinkIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {/* portfolioItems ,*/ SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

import porfolioImage1 from '../../images/portfolio/portfolio-1.jpg'
import porfolioImage2 from '../../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../../images/portfolio/portfolio-11.jpg';


import { fetchWithoutToken } from '../../helpers/fetch';



const Portfolio: FC = memo(() => {

  const [pfTrabajos, setPfTrabajos]= useState('');

const [pfTitulo1, setPfTitulo1]= useState('');
const [pfDescripcion1, setPfDescripcion1]= useState('');
const [pfUrl1, setPfUrl1]= useState('');

const [pfTitulo2, setPfTitulo2]= useState('');
const [pfDescripcion2, setPfDescripcion2]= useState('');
const [pfUrl2, setPfUrl2]= useState('');

const [pfTitulo3, setPfTitulo3]= useState('');
const [pfDescripcion3, setPfDescripcion3]= useState('');
const [pfUrl3, setPfUrl3]= useState('');

const [pfTitulo4, setPfTitulo4]= useState('');
const [pfDescripcion4, setPfDescripcion4]= useState('');
const [pfUrl4, setPfUrl4]= useState('');

const [pfTitulo5, setPfTitulo5]= useState('');
const [pfDescripcion5, setPfDescripcion5]= useState('');
const [pfUrl5, setPfUrl5]= useState('');

const [pfTitulo6, setPfTitulo6]= useState('');
const [pfDescripcion6, setPfDescripcion6]= useState('');
const [pfUrl6, setPfUrl6]= useState('');

const [pfTitulo7, setPfTitulo7]= useState('');
const [pfDescripcion7, setPfDescripcion7]= useState('');
const [pfUrl7, setPfUrl7]= useState('');

const [pfTitulo8, setPfTitulo8]= useState('');
const [pfDescripcion8, setPfDescripcion8]= useState('');
const [pfUrl8, setPfUrl8]= useState('');

const [pfTitulo9, setPfTitulo9]= useState('');
const [pfDescripcion9, setPfDescripcion9]= useState('');
const [pfUrl9, setPfUrl9]= useState('');

const [pfTitulo10, setPfTitulo10]= useState('');
const [pfDescripcion10, setPfDescripcion10]= useState('');
const [pfUrl10, setPfUrl10]= useState('');

const [pfTitulo11, setPfTitulo11]= useState('');
const [pfDescripcion11, setPfDescripcion11]= useState('');
const [pfUrl11, setPfUrl11]= useState('');


useEffect(() => {


  const ApiCall = async () => {    

    const response = await fetchWithoutToken('section/portfolio/data',0,'GET');
    const body = await response.json();                          

   console.log(body);
  
    if(response.status === 200) {  

      setPfTrabajos(body.pfTrabajos);
      setPfTitulo1(body.pfTitulo1);
      setPfDescripcion1(body.pfDescripcion1);
      setPfUrl1(body.pfUrl1);
      setPfTitulo2(body.pfTitulo2);
      setPfDescripcion2(body.pfDescripcion2);
      setPfUrl2(body.pfUrl2);
      setPfTitulo3(body.pfTitulo3);
      setPfDescripcion3(body.pfDescripcion3);
      setPfUrl3(body.pfUrl3);
      setPfTitulo4(body.pfTitulo4);
      setPfDescripcion4(body.pfDescripcion4);
      setPfUrl4(body.pfUrl4);
      setPfTitulo5(body.pfTitulo5);
      setPfDescripcion5(body.pfDescripcion5);
      setPfUrl5(body.pfUrl5);
      setPfTitulo6(body.pfTitulo6);
      setPfDescripcion6(body.pfDescripcion6);
      setPfUrl6(body.pfUrl6);
      setPfTitulo7(body.pfTitulo7);
      setPfDescripcion7(body.pfDescripcion7);
      setPfUrl7(body.pfUrl7);
      setPfTitulo8(body.pfTitulo8);
      setPfDescripcion8(body.pfDescripcion8);
      setPfUrl8(body.pfUrl8);
      setPfTitulo9(body.pfTitulo9);
      setPfDescripcion9(body.pfDescripcion9);
      setPfUrl9(body.pfUrl9);
      setPfTitulo10(body.pfTitulo10);
      setPfDescripcion10(body.pfDescripcion10);
      setPfUrl10(body.pfUrl10);
      setPfTitulo11(body.pfTitulo11);
      setPfDescripcion11(body.pfDescripcion11);
      setPfUrl11(body.pfUrl11);
      
      

      
     
    } else {
      console.error('error en fetch');
       //Inconsistency in the error messages, it is necessary to reform the return of public List<Users> getUsers in the back
           }    
  }

  ApiCall();   
}, []);


  

  const portfolioItems: PortfolioItem[] = [
    {
      title: pfTitulo1,
      description: pfDescripcion1,
      url: pfUrl1,
      image: porfolioImage1,
    },
    {
      title: pfTitulo2,
      description: pfDescripcion2,
      url: pfUrl2,
      image: porfolioImage2,
    },
    {
      title: pfTitulo3,
      description: pfDescripcion3,
      url: pfUrl3,
      image: porfolioImage3,
    },
    {
      title: pfTitulo4,
      description: pfDescripcion4,
      url: pfUrl4,
      image: porfolioImage4,
    },
    {
      title: pfTitulo5,
      description: pfDescripcion5,
      url: pfUrl5,
      image: porfolioImage5,
    },
    {
      title: pfTitulo6,
      description: pfDescripcion6,
      url: pfUrl6,
      image: porfolioImage6,
    },
    {
      title: pfTitulo7,
      description: pfDescripcion7,
      url: pfUrl7,
      image: porfolioImage7,
    },
    {
      title: pfTitulo8,
      description: pfDescripcion8,
      url: pfUrl8,
      image: porfolioImage8,
    },
    {
      title: pfTitulo9,
      description: pfDescripcion9,
      url: pfUrl9,
      image: porfolioImage9,
    },
    {
      title: pfTitulo10,
      description: pfDescripcion10,
      url: pfUrl10,
      image: porfolioImage10,
    },
    {
      title: pfTitulo11,
      description: pfDescripcion11,
      url: pfUrl11,
      image: porfolioImage11,
    },
  ];
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">{pfTrabajos}</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} layout="responsive" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }

    
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ExternalLinkIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
