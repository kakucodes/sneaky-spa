import { Dashboard } from "@/components/Dashboard/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sneaky Dashboard",
  description: "All your Sneaky Assets in one place.",
};

export default function Dash() {
  return <Dashboard />;
}
