import { motion } from 'motion/react';

export const Button = ({ isMotion, children, ...props }) => {
  return (
    <>
      {isMotion ? (
        <motion.button {...props}>{children}</motion.button>
      ) : (
        <button {...props}>{children}</button>
      )}
    </>
  );
};
