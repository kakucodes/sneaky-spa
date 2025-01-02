import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({
    meta: [
      {
        title: 'Sneaky Productions',
        description: 'All things sneaky',
        // image: `${process.env.PUBLIC_URL}/wenmoon.png`,
      },
    ],
  }),
  //   context: {
  //     headerTitle: "Sneaky Prods",
  //     meta: {
  //       title: "Sneaky Productions",
  //       description: "Sneaky Productions",
  //       image: `${process.env.PUBLIC_URL}/wenmoon.png`,
  //     },
  //   },
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Link to="/dashboard" className="btn btn-primary">
        Dashboard
      </Link>

      <Link to="/shop" className="btn btn-primary">
        Shop
      </Link>
    </div>
  )
}
