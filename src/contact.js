import React, { useRef,useEffect } from 'react'
import './contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_slqmiw4', 'template_1u4sz1m', form.current, 'cAmYYTpaEChEh48sz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    useEffect(() => {
        // Scroll to top when the page loads
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div className="container pt-5  my-5 ">
                <h1 className="pt-5 mt-5" >Know Us</h1>
                <hr className="mx-auto" />
            </div>
            <div className='container'>
                <form ref={form} className='form-container' onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>


            <div className=" col-lg-12 col-md-12 col-12 ">
                <div className="post-img">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6595559054854!2d72.8558526092061!3d19.253663446299033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e482e6c5fb%3A0xf05f1fcfd1f9d533!2sAvani%20Jumbo%20Xerox!5e0!3m2!1sen!2sin!4v1682943226876!5m2!1sen!2sin"
                        width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}

export default Contact