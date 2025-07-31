import { motion } from 'motion/react';

export const Button = ({ isMotion, text, ...props }) => {
  return (
    <>
      {isMotion ? (
        <motion.button {...props}>{text}</motion.button>
      ) : (
        <button {...props}>{text}</button>
      )}
    </>
  );
};
