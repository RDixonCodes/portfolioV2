/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { Tilt }  from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className='w-full green-pink-gradient 
      p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max:45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12
        min-h-[280px] flex justify-evenly items-center flex-col shadow-lg shadow-[#7A26C2]'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I'm a skilled software developer with experience in Python, JavaScript, 
      Java and frameworks like React and Three.js. Quick learner 
      who collaborates closely with clients to create efficient, scalable, and user-friendly 
      solutions that solve real-world problems. Let's work together and bring your ideas to life
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, 'about')