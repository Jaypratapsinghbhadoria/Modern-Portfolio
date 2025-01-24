import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/profile.webp";

// Import Font Awesome icons
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";



const Hero = () => {

  const AnimatedWords = ({ title=" ", style= " "}) => {
    return <h1 className={style}>{title}</h1>;
  };
  

  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://cal.com/jay-pratap-singh-bhadoria-2mqj2p/30min"
            target="_blank"
            aria-label="BOOK A CALL"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              BOOK A CALL
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-6 text-[#e4ded7] sm:gap-8 md:gap-10 lg:gap-12">
          {/* GitHub Icon */}
          <Link
            href="https://github.com/Jaypratapsinghbhadoria"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.div
              className="text-[20px] md:text-[24px] hover:text-gray-400"
              variants={bodyAnimation}
            >
              <FaGithub />
            </motion.div>
          </Link>

          {/* LinkedIn Icon */}
          <Link
            href="https://www.linkedin.com/in/jay-pratap-singh-bhadoria-561796295/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.div
              className="text-[20px] md:text-[24px] hover:text-gray-400"
              variants={bodyAnimation}
            >
              <FaLinkedin />
            </motion.div>
          </Link>

          {/* LeetCode Icon */}
          <Link
            href="https://leetcode.com/u/Jaypratap-123/"
            target="_blank"
            aria-label="View LeetCode Profile"
          >
            <motion.div
              className="text-[20px] md:text-[24px] hover:text-gray-400"
              variants={bodyAnimation}
            >
              <FaCode />
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center sm:mt-10 lg:my-40 lg:py-40">
  <div
    className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
  >
    <AnimatedWords
      title="JAY PRATAP"
      style="inline-block overflow-hidden pt-1 mb-1 text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
    />
    <AnimatedWords
      title="SINGH BHADORIA"
      style="inline-block overflow-hidden pt-1 -mb-16 text-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
    />
    <motion.div
      className="relative mx-auto mt-8"
      variants={imageAnimation}
    >
      <Image
        src={profile}
        priority
        alt="Jay's headshot"
        data-blobity-tooltip="Giga Chad"
        data-blobity-invert="false"
        className="w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
      />
    </motion.div>
  </div>
</div>




      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Frontend Developer and Web Designer,
            currently available for work.
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Focused on interfaces and experiences, working remotely from Gwalior,
            India.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
