import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
        <section id='contact' className='mx-[10%] my-[10%] md:mx-[12%] md:my-[12%] lg:mx-[20%] lg:my-[20%] pt-8 pr-0 pb-16 pl-0 h-screen'>
            <div className='w-full mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-24'>
              <h2 className="text-4xl mt-10 mr-0 mb-4 ml-0">Contact</h2>
              <div className="contact">
                <form className='grid gap-3.5' ref={form} onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 gap-3.5">
                    <label>
                      <span className="text-xl inline-block mb-1.5">Name</span>
                      <input required placeholder="Your name" type="text" name="name"/>
                    </label>
                    <label>
                      <span className="text-xl inline-block mb-1.5">Email</span>
                      <input required placeholder="you@example.com" type="email" name="user_email"/>
                    </label>
                  </div>
                  <label>
                    <span className="text-xl inline-block mb-1.5">Message</span>
                    <textarea className='min-h-36 resize-x' name='message' required placeholder=""></textarea>
                  </label>
                  <button className="btn text-xl inline-flex gap-2 justify-center pt-2.5 pb-2.5 pl-4 pr-1 rounded-4xl font-semibold hover:[box-shadow:var(--ring)]" type="submit" value="Send">Send message</button>
                </form>
              </div>
            </div>
        </section>
    </>
  )

  
}

export default Contact
