import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ii9zl0c', 'template_cjkeyt7', form.current, {
        publicKey: 'HPbDxya-ywEYzd9uE',
      })
      .then(
        () => {
          Swal.fire({
            title: 'Message sent!',
            text: 'Thanks for reaching out, I’ll get back to you soon.',
            icon: 'success',
            confirmButtonColor: '#0ea5e9', 
            cancelButtonColor: '#6b7280',   
            background: 'var(--panel)',      
            color: 'var(--text)',           
          }).then((e) => {
             if(e.isConfirmed){
              // $('#name').val('');
              // form.reset();
              document.getElementById('contact_form').reset();
            }
          })

        },
        () => {
          Swal.fire({
            title: 'Oops!',
            text: 'Something went wrong while sending your message. Please try again later.',
            icon: 'error',
            background: 'var(--panel)',
            color: 'var(--text)',
            confirmButtonColor: 'var(--brand)',
          })

        },
      );
  };

  return (
    <>
        <section id='contact' className='mx-[5%] md:mx-[12%] lg:mx-[20%] pt-8 pr-0 pb-16 pl-0 h-screen'>
            <div className='w-full mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-24'>
              <h2 className="md:text-3xl lg:text-4xl mt-10 mr-0 mb-4 ml-0">Contact</h2>
              <div className="contact">
                <form className='grid gap-3.5' id='contact_form' ref={form} onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 gap-3.5">
                    <label>
                      <span className="md:text-xl lg:text-2xl inline-block mb-1.5">Name</span>
                      <input required placeholder="Your name" className='md:text-xl lg:text-xl' id='name' type="text" name="name"/>
                    </label>
                    <label>
                      <span className="md:text-xl lg:text-2xl inline-block mb-1.5">Email</span>
                      <input required placeholder="you@example.com" className='md:text-xl lg:text-xl' id='user_email' type="email" name="user_email"/>
                    </label>
                  </div>
                  <label>
                    <span className="md:text-xl lg:text-2xl inline-block mb-1.5">Message</span>
                    <textarea className='min-h-36 resize-x md:text-xl lg:text-xl' id='message' name='message' required placeholder=""></textarea>
                  </label>
                  <button className="btn md:text-[18px] lg:text-xl inline-flex gap-2 justify-center pt-2.5 pb-2.5 pl-4 pr-1 rounded-4xl font-semibold hover:[box-shadow:var(--ring)]" type="submit" value="Send">Send message</button>
                </form>
              </div>
            </div>
        </section>
    </>
  )

  
}

export default Contact
