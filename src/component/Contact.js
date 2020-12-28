import React,{useState, useEffect} from 'react'

import emailjs from 'emailjs-com'
import './Contact.css'

 function Contact({titre,input1,input2,input3,textarea,btn}){

     const template_id= 'template_lfqkvxp'
    const user_id='user_JK6JPHXmmiafMjk0qjx3p'


    const [nom,setNom]=useState('');
    const [email,setEmail]=useState('');
    const [objet,setObjet]=useState('');
    const [msg,setMsg]=useState('');
    
    const handleSubmit= (e)=>{
        e.preventDefault();
          if(nom&&email&&msg&&objet){
            sendFeedback(  template_id  ,{
                nom,
                email,
                msg,
                objet
            });
        }else{
            console.log('error 0');
        }
    };

    const sendFeedback =(templateid,variables)=>{
        emailjs
            .send("gmail",templateid,variables, user_id)
            .then((res)=>{
                console.log('sucess !');
                setNom('');
                setEmail('');
                setMsg('');
                setObjet('');
            })
            .catch(
                (err)=>{
                    console.log('error'+err)
                    setNom('');
                    setEmail('');
                    setMsg('');
                    setObjet('');
                }
            )
    }

    useEffect(() => {
    const input=document.querySelectorAll('input');

      for(let i=0;i<input.length;i++){
        let targetInput=input[i];
        targetInput.addEventListener('input',function(e){
            if(e.target.value!==""){
                targetInput.parentNode.classList.add('active');
            }else{
                targetInput.parentNode.classList.remove('active');
            }
        })
      }  


       
      }, []);

    return (
        <div id="contact" className="section-contact">
            <div className="container">
                <h2 ref={titre}>Contactez-moi !</h2>
                <form  onSubmit={handleSubmit}>
                    <div ref={input1} className="formElement">
                        <label htmlFor="nom">Nom</label>
                        <input 
                        type="text"
                        id="nom"
                        value={nom} 
                        onChange={event => setNom(event.target.value) }
                        />
                    </div>
                   
                    <div ref={input2} className="formElement">
                        <label htmlFor="mail">Mail</label>
                        <input 
                        type="email"
                        id="mail"
                        value={email} 
                        onChange={event => setEmail(event.target.value) }
                        />
                    </div>

                    <div ref={input3} className="formElement">
                        <label htmlFor="objet">Objet</label>
                        <input 
                        type="text"
                        id="objet"
                        value={objet} 
                        onChange={event => setObjet(event.target.value) }
                        />
                    </div>

                    <div ref={textarea} className="formElement">
                        <label htmlFor="msg">Votre message</label>
                        <textarea 
                        id="msg"
                        value={msg} 
                        onChange={event => setMsg(event.target.value) }
                        ></textarea>
                    </div>

                    <button ref={btn}
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    )

//     const [name, setName] = useState("");
//     const [company, setCompany] = useState("");
//     const [phone, setPhone] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       sendFeedback(template_id, {
//         name,
//         company,
//         phone,
//         email,
//         message,
//       });
//     };
  
//     const sendFeedback = (templateId, variables) => {
  
//       window.emailjs
//         .send("gmail", templateId, variables)
//         .then((res) => {
//           console.log('success !');
//           setName("");
//           setCompany("");
//           setPhone("");
//           setEmail("");
//           setMessage("");
//         })
//         .catch(
//           (err) =>
//             document.querySelector('.form-message').innerHTML =
//               "Une erreur s'est produite, veuillez réessayer.")
//     };
  
//     return (
//       <form className="contact-form">
//         <h2>Contactez-nous</h2>
//         <div className="form-content">
//           <input
//             type="text"
//             id="name"
//             name="name"
//             onChange={(e) => setName(e.target.value)}
//             placeholder="nom *"
//             value={name}
//             autoComplete="off"
//           />
//           <input
//             type="text"
//             id="company"
//             name="company"
//             onChange={(e) => setCompany(e.target.value)}
//             placeholder="société"
//             value={company}
//           />
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="téléphone"
//             value={phone}
//           />
//           <div className="email-content">
//             <label id="not-mail">Email non valide</label>
//             <input
//               type="mail"
//               id="email"
//               name="email"
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="email *"
//               value={email}
//               autoComplete="off"
//             />
//           </div>
//           <textarea
//             id="message"
//             name="message"
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="message *"
//             value={message}
//           />
//         </div>
//         <input
//           className="button"
//           type="button"
//           value="Envoyer"
//           onClick={handleSubmit}
//         />
//         <div className="form-message"></div>
//       </form>
//     );
  
 }
    

export default  Contact;