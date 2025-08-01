import {motion} from 'framer-motion'
import Star from './Star';


const Portfolio = () => {
  return (
    <div className='absolute -top-2 right-0 text-teal-600'>
      <motion.div
        className="star"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
      >
        <Star w='30px' h='30px' />
      </motion.div>
    </div>
  );
};

export default Portfolio;
