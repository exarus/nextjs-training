"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="absolute m-8">
      <Hamburger toggled={isOpen} toggle={setOpen} rounded label="Show menu" />
    </nav>
  );
};
