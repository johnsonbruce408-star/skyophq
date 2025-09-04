import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }
  return;
};