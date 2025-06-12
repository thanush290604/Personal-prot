import React, { useRef, useState } from 'react';
import { Mail, Download, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setMessageSent(false);
    setError('');

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessageSent(true);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            setError('Failed to send message. Please try again.');
          }
        )
        .finally(() => setSending(false));
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/thanush29", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/thanush29/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/Thanush_29", label: "Twitter" }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-purple-900/10"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/5 via-purple-600/5 to-pink-500/5 animate-gradient-x"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on innovative AI solutions? Let's build something amazing together 
              and create technology that makes a difference.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a
                href="mailto:thanushkannan.ai@gmail.com"
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <Mail size={20} className="text-cyan-400" />
                <span className="text-gray-300">thanushkannan.ai@gmail.com</span>
              </a>
              <a
                href="tel:+919840650939"
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                <Phone size={20} className="text-purple-400" />
                <span className="text-gray-300">+91 9840650939</span>
              </a>
            </div>

            {/* Resume Download Button */}
            <div className="mb-12">
              <a
                href="https://drive.google.com/uc?export=download&id=1en9909HlIUC6GWNgsiYBQCx6-7-6rHWv"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Download size={24} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12 animate-fade-in-up animation-delay-200">
            <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Send Me a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
              ></textarea>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={sending}
                  className={`bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    sending ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-cyan-500/25'
                  }`}
                >
                  <Mail className="inline mr-2" size={20} />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {messageSent && (
                <p className="text-green-400 text-center mt-4 animate-fade-in-up">
                  ✅ Message sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-400 text-center mt-4 animate-fade-in-up">
                  ❌ {error}
                </p>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="text-center animate-fade-in-up animation-delay-400">
            <h3 className="text-xl font-semibold mb-6 text-gray-300">Connect with me on social media</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-2 hover:scale-110"
                  >
                    <IconComponent 
                      size={32} 
                      className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;