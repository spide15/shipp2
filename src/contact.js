import React, { useRef, useState, useEffect } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [popup, setPopup] = useState({ show: false, message: '', type: '' });

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("Sending Data:", {
            user_name: form.current.name.value,
            user_email: form.current.email.value,
            message: form.current.message.value
        });
        emailjs.sendForm('service_slqmiw4', 'template_1u4sz1m', form.current, 'cAmYYTpaEChEh48sz')
            .then(() => {
                window.scrollTo(0, 0);
                showPopup("✅ Enquiry submitted! Check your email for confirmation.", "success");
                form.current.reset(); // Clear form fields
            })
            .catch(() => {
                window.scrollTo(0, 0);
                showPopup('❌ Failed to send email. Please try again.', 'error');
            });
    };

    const showPopup = (message, type) => {
        setPopup({ show: true, message, type });

        // Hide popup after 3 seconds
        setTimeout(() => {
            setPopup({ show: false, message: '', type: '' });
        }, 3000);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when the page loads
    }, []);

    return (
        <>
            {/* Popup Notification */}
            {popup.show && (
                <div className={`popup ${popup.type}`}>
                    {popup.message}
                </div>
            )}

            <div className="container ">
                <h1 className="pt-5 mt-5 text-center">Know Us</h1>
                <hr className="mx-auto" />
            </div>

            <div className="container">
                <form ref={form} className="form-container" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" required />

                    <label>Email</label>
                    <input type="email" name="email" required />

                    <label>Phone Number</label>
                    <input type="tel" name="phone" pattern="[0-9]{10}" required placeholder="Enter 10-digit number" />

                    <label>Message</label>
                    <textarea name="message" required />

                    <input type="submit" value="Send" />
                </form>
            </div>

            <div className="col-lg-12 col-md-12 col-12">
                <div className="post-img">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6595559054854!2d72.8558526092061!3d19.253663446299033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e482e6c5fb%3A0xf05f1fcfd1f9d533!2sAvani%20Jumbo%20Xerox!5e0!3m2!1sen!2sin!4v1682943226876!5m2!1sen!2sin"
                        width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </>
    );
};

export default Contact;
