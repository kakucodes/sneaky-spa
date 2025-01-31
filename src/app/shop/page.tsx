import { Metadata } from "next";
import Store from "@/components/Store/Store";

export const metadata: Metadata = {
  title: "Sneaky Bazaar",
  description: "Where sneaky dreams come true.",
};

export default function ShopPage() {
  return <Store />;
}
