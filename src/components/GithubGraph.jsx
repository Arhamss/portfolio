import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import GitHubCalendar from 'react-github-calendar';

const GithubGraph = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My Github Contributions</p>
        <h2 className={styles.sectionHeadTextLight}>Days I Code</h2>
      </motion.div>
        <br></br>
        <br></br>
      <GitHubCalendar className="bg-center bg-no-repeat" username="arhamss" blockMargin={6} blockSize={16} colorScheme='dark' fontSize={14} col/>
    </>
  );
};

export default SectionWrapper(GithubGraph, '');
