"use client";

import { useEffect } from "react";

const CursorRing: React.FC = () => {
  useEffect(() => {
    const cursorRing = document.createElement("div");
    cursorRing.className = "cursor-ring";
    document.body.appendChild(cursorRing);

    const moveRing = (e: MouseEvent) => {
      cursorRing.style.top = `${e.clientY}px`;
      cursorRing.style.left = `${e.clientX}px`;
    };

    // When hovering/focusing on links or buttons, enlarge the ring
    const addHoverEffect = () => cursorRing.classList.add("cursor-ring--hover");
    const removeHoverEffect = () =>
      cursorRing.classList.remove("cursor-ring--hover");

    document.addEventListener("mousemove", moveRing);

    // watch all interactive elements
    const interactiveEls = document.querySelectorAll("a, button, input, textarea");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
      el.addEventListener("focus", addHoverEffect);
      el.addEventListener("blur", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveRing);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
        el.removeEventListener("focus", addHoverEffect);
        el.removeEventListener("blur", removeHoverEffect);
      });
      cursorRing.remove();
    };
  }, []);

  return null;
};

export default CursorRing;
