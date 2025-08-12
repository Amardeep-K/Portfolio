import { useForm} from "react-hook-form"
import React,{useState} from 'react'
import {motion} from "framer-motion"

import "./form.css"
import emailjs from '@emailjs/browser';
const Contactform = () => {
 const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm()
  const [isSent, setIsSent] = useState(false);
  const onSubmit = async (data) =>{
  
    
 
    try {
    const result = await emailjs.send(
      'service_8eqw5p5',
      'template_oyjdxab',
      {
        from_name: data.Name,
        from_email: data.Email,
        title:data.Subject,
        message: data.Message,
      },
      'LvXfHHCeGDmPHzKyq'
    );
    console.log("Success:", result.text);
    setIsSent(true)
   
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send message 😢"); 
  }
};
if (isSent) {
  setTimeout(() => setIsSent(false), 5000);
}

  
   
  // watch input value by passing the name of it
  return (
  <>
  <motion.h2     
  initial={{scale:0.5,opacity:0}}
  animate={{scale:1,opacity:1}}
  transition={{duration:0.6, ease:"anticipate"}}
  className="text-center font-bold m-3">
  Hire Me
  </motion.h2>
  <div id="contact" className="Contactform lg:flex  lg:flex-row md:flex md:flex-col  justify-between lg:w-[90%] w-[100%] overflow-hidden" >
    <div className="contact-banner  flex-col border-2 border-[hsla(210,100%,60%,0.8)]  lg:rounded-tl-lg lg:rounded-bl-lg lg:border-r-0 border-b-0  flex gap-5  w-full lg:text-left lg:border-b-2 rounded-t-lg  text-center lg:rounded-tr-none">
     <h2 className="lg:text-4xl md:text-3xl text-2xl  font-bold">Let’s Work Together</h2>
     <p>Have an idea, project, or collaboration in mind? Whether you’re a hiring manager looking for a dedicated team player or a client seeking a creative partner, I’m always excited to take on new challenges  from Full Stack development and UI design to custom WordPress solutions. Drop me a message and I’ll get back to you as soon as possible.</p> 
    <p>Email: <a href="mailto:amardeepkumar072004@gmail.com">amardeepkumar072004@gmail.com</a></p>
    </div>
    <div className="contact-form flex flex-col w-full border-2 border-[hsla(210,100%,60%,0.8)]  lg:rounded-tr-lg rounded-b-lg lg:rounded-br-lg border-t-0 lg:border-t-2 lg:border-l-0 lg:rounded-bl-none">
    <form className="  text-white flex flex-col gap-2 " onSubmit={handleSubmit(onSubmit)}>
      
  
      <input className={errors.Name?"input-error":"input-field"} placeholder="Name" type="text" {...register("Name", {
         required: true , 
         minLength:3,
         maxLength:20,


      })} />
      {errors.Name && <p className="error-msg">Minimum length of the name should be 3.</p>}
      <input className={errors.Email?"input-error ":"input-field"} placeholder="Email" type="email" {...register("Email",{
        required:true,
        minLength:10,
        maxLength:30
        })}/>
        {errors.Email?.type === "required" && <span className="error-msg">Required</span>}
        <input className={errors.Subject?"input-error ":"input-field"} placeholder="Subject" type="text" {...register("Subject",{
        required:true,
        minLength:10,
        maxLength:30
        })}/>
        {errors.Subject?.type === "required" && <span className="error-msg">Required</span>}
        
      <textarea className={errors.Message?"input-error":"msg"} placeholder="Message" {...register("Message",{
        required:true ,
        maxLength:2000
        })}/>
        {errors.Message && <span className="error-msg">Invalid</span>}
      

      <input className="rounded-3xl bg-transparent sbmit-btn  text-[1rem] p-5 w-sm " type="submit"  disabled={isSubmitting} value={isSent
            ? "Sent ✅"
            : isSubmitting
            ? "Sending . . ."
            : "Send"}/>
     
      
    </form>
    </div>
    </div>
    </>
  )
}

export default Contactform