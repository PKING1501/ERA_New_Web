import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-30 h-30 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Us</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        We are a team of undergraduates spanning from various majors and dedicated towards developing intelligent solutions for implementing autonomous robotics. 
<br/>What We <b>Offer</b>:<br/>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <br/><br/><br/>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
1.  <b>Innovative R&D Hub</b>: Dive into an exceptional pool of talent. Immerse yourself in our team's expertise, fostering dynamic collaborations to pioneer groundbreaking solutions and drive mutual growth.<br/>
2.  <b>Branding Brilliance</b>: Flaunt your brand on robots, banners, and uniforms, capturing attention through thrilling competitions, widespread media coverage, and the power of word-of-mouth buzz.<br/>
3.  <b>Empowering Future Leaders</b>: Empower gifted students through invaluable guidance and mentorship, all while increasing your company's visibility among budding professionals.<br/>
4.  <b>Digital Dominance</b>: Amplify your online presence across our website and social media channels, magnifying your outreach and forging connections with a broader audience, all through the influential network of Team ERA.
      </motion.p>

    </div>
  );
};

export default SectionWrapper(About, 'about');
