import { createLazyFileRoute } from "@tanstack/react-router";
import { Store } from "../components/Store/Store";

export const Route = createLazyFileRoute("/shop")({
  component: Store,
});
