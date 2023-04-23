import {FC, memo, useCallback, useMemo, useState, useEffect} from 'react';


import { fetchWithoutToken } from '../../../helpers/fetch';
import  Swal from 'sweetalert2';






interface FormData {
  name: string;
  email: string;
  message: string;
}



const ContactForm: FC = memo(() => {


 
  

  const [contactoNombre, setContactoNombre]= useState('');
  const [contactoMail, setContactoMail]= useState('');
  const [contactoMensaje, setContactoMensaje]= useState('');
  const [contactoEnviarMensaje, setContactoEnviarMensaje]= useState('');
  const [contactoMsjSwalSuccess, setContactoMsjSwalSuccess] =  useState('');
  const [contactoMsjSwalError, setContactoMsjSwalError] =  useState('');


  useEffect(() => {
    
    const ApiCall = async () => {    

      const response = await fetchWithoutToken('section/contact/data',0,'GET');
      const body = await response.json();                          

    console.log(body);
    
      if(response.status === 200) {  
        
        setContactoNombre(body.contactoNombre); 
        setContactoMail(body.contactoMail);   
        setContactoMensaje(body.contactoMensaje); 
        setContactoEnviarMensaje(body.contactoEnviarMensaje);
        setContactoMsjSwalSuccess(body.contactoMsjSwallSuccess);
        setContactoMsjSwalError(body.contactoMsjSwallError);


        

        
      
      } else {
        console.error('error en fetch');
        //Inconsistency in the error messages, it is necessary to reform the return of public List<Users> getUsers in the back
            }    
    }
    ApiCall();    
  },[]);
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();   
    

 
      console.log('Data to send: ', data);
      const response = await fetchWithoutToken('sendEmail',data,'PUT');             
              //const body = await response.json(); 

              if(response.status === 200) {             


                
                Swal.fire({  icon: 'success',  title: contactoMsjSwalSuccess, text: ''});
                console.log(response);                       
                                   
              } else {
               
                Swal.fire({  icon: 'error',  title: contactoMsjSwalError, text: ''});
                console.log(response ); 
              } 

    },
    [data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder={contactoNombre} required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder={contactoMail}
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder={contactoMensaje}
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
       {contactoEnviarMensaje}
      </button>     
    </form>
    
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
