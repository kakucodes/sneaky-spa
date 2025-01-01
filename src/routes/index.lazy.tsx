import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

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
  );
}
