import { Store } from "@/components/Store/Store";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sneaky Bazaar",
  description: "Where sneaky dreams come true.",
};

export default function Shop() {
  return <Store />;
}
