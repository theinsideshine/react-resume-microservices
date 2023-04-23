import {FC, memo, useEffect ,useState} from 'react';

//import {socialLinks} from '../data/data';

import { fetchWithoutToken } from '../helpers/fetch';

import {
 
  Social,
 
} from '../data/dataDef';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import  DribbbleIcon  from '../components/Icon/DribbbleIcon';
import FacebookIcon from '../components/Icon/FacebookIcon';





const Socials: FC = memo(() => {


  const [githubLink, setGithubLink]= useState('');
  const [youtubeLink, setYoutubeLink]= useState('');
  const [linkedinLink, setLinkedinLink]= useState('');
  const [igLink, setIgLink]= useState('');
  const [facebookLink, setFacebookLink]= useState('');


  useEffect(() => {

    const ApiCall = async () => {    

      const response = await fetchWithoutToken('section/hero/data',0,'GET');
   
      const body = await response.json();                          

     console.log(body);
    
      if(response.status === 200) {  
        
        setGithubLink(body.githubLink); 
        setYoutubeLink(body.youtubeLink);
        setLinkedinLink(body.linkedinLink);   
        setIgLink(body.igLink);
        setFacebookLink(body.facebookLink);        
       
      } else {
        console.error('error en fetch');
         //Inconsistency in the error messages, it is necessary to reform the return of public List<Users> getUsers in the back
             }    
    }
    ApiCall();    
},[]);

 const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: githubLink},
  {label: 'Youtube', Icon: DribbbleIcon, href: youtubeLink},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: linkedinLink},
  {label: 'Instagram', Icon: InstagramIcon, href: igLink},
  {label: 'Facebook', Icon: FacebookIcon, href: facebookLink}
  
];

  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500  sm:-m-3 sm:p-3"
          href={href}
          key={label}>
          <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
