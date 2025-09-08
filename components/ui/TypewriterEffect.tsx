"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

type WordProps = {
  text: string;
  subtext?: string; // 👈 added support for subtext
  className?: string;
  subtextClassName?: string; // 👈 style subtext individually
};

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: WordProps[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text into characters for animation
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(" "),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      <motion.div ref={scope} className="inline-block">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="mb-6">
            {/* animated text */}
            <div className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}&nbsp;
                </motion.span>
              ))}
            </div>

            {/* optional subtext */}
            {word.subtext && (
              <p
                className={cn(
                  "mt-2 text-sm md:text-lg text-white",
                  word.subtextClassName
                )}
              >
                {word.subtext}
              </p>
            )}
          </div>
        ))}
      </motion.div>

      {/* blinking cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
