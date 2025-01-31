"use client";

import { useState, useEffect } from "react";
// import { Store } from "@/components/Store/Store";

export default function StoreWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <p>Loading...</p>;
  }

  return <></>;
}
