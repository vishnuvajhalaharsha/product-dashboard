import React from "react";
import Dashboard from "./components/features/dashboard/dashboard";
import ResponsiveDrawer from "./components/layout/layout";

export function App() {
  return (
    <ResponsiveDrawer>
      <Dashboard />
    </ResponsiveDrawer>
  );
}

export default App;
