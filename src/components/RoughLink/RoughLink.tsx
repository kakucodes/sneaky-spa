import React, { useRef, useEffect, useState } from "react";
import { annotate } from "rough-notation";
import { RoughAnnotation } from "rough-notation/lib/model";

export const RoughLink = ({
  href,
  children,
}: {
  href: string;
  children: JSX.Element;
}) => {
  const linkRef = useRef(null);
  const [annotation, setAnnotation] = useState<RoughAnnotation>();

  useEffect(() => {
    if (linkRef.current && !annotation) {
      const roughNotation = annotate(linkRef.current, {
        type: "circle",
        color: "#3048c1",
        animationDuration: 400,
        padding: 8,
        iterations: 1.5,
        strokeWidth: 3,
      });
      setAnnotation(roughNotation);
    }

    return () => {
      if (annotation) {
        annotation.remove();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (annotation) {
      annotation.show();
    }
  };

  const handleMouseLeave = () => {
    if (annotation) {
      annotation.hide();
    }
  };

  return (
    <a
      ref={linkRef}
      className="inline-block link-offset-2 link-dark link-underline-opacity-0"
      target="_blank"
      referrerPolicy="no-referrer"
      rel="noreferrer"
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
};
