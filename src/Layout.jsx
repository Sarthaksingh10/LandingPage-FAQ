import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* We create a Layout component to render the routes outlet means dynamically calling the components on routing */}
      <Outlet />
    </div>
  );
}
