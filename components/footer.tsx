'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-neon-purple/20 bg-card/30 backdrop-blur-sm overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-neon-gold/20 to-neon-cyan/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="text-neon-gold glow-gold">Gadjimi</span>
              <br />
              <span className="text-neon-purple">Technologies</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Licensed fintech and IT solutions provider, empowering businesses with cutting-edge technology and innovation.
            </p>
            <p className="text-xs text-muted-foreground italic">
              Licencié par le Gouvernement du Niger
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-neon-cyan">Services</h4>
            <ul className="space-y-2">
              {[
                'IT Solutions',
                'Identity Verification',
                'KYC Services',
                'Fintech Consulting',
                'Blockchain Development',
                'Cybersecurity',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-neon-gold transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-neon-blue">Company</h4>
            <ul className="space-y-2">
              {[
                'About Us',
                'Careers',
                'Blog',
                'Case Studies',
                'Partners',
                'Contact',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-neon-gold transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-neon-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+22791156465"
                  className="text-sm text-muted-foreground hover:text-neon-gold transition-colors duration-200"
                >
                  +227 91 15 64 65
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info.spectrumsmart@gmail.com"
                  className="text-sm text-muted-foreground hover:text-neon-gold transition-colors duration-200 break-all"
                >
                  info.spectrumsmart@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Niamey, Niger Republic
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Github, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-neon-gold hover:bg-neon-gold/10 border border-transparent hover:border-neon-gold/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-neon-purple/20" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>
            &copy; {currentYear} Gadjimi Technologies SARL. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon-gold transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neon-gold transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-neon-gold transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-neon-gold/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
    </footer>
  )
}
