import { createLazyFileRoute } from "@tanstack/react-router";
import { Store } from "../components/Store/Store";

export const Route = createLazyFileRoute("/shop")({
  component: Store,
  // head: () => ({
  //   meta: [
  //     {
  //       title: 'Sneaky Shop',
  //       description: 'Sneaky Productions Shop',
  //       // image: `${process.env.PUBLIC_URL}/wenmoon.png`,
  //     },
  //   ],
  // }),
});
