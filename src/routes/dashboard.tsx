import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from '../components/Dashboard/Dashboard'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
  head: () => ({
    meta: [
      {
        title: 'Sneaky Dash',
        description:
          "Sneaky Productions Dashboard - All your Sneaky Productions' assets in one place.",
        // image: `${process.env.PUBLIC_URL}/wenmoon.png`,
      },
    ],
  }),
})
