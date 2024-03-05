import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { soft } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Software = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My workspace</p>
        <h2 className={styles.sectionHeadTextLight}>Softwares I Use.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {soft.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Software, '');
