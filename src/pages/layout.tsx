import { Link, Outlet } from "react-router";

import { NavLink } from "../components/nav-link";
import { Button } from "../components/button";

import Logo from "../assets/images/logo.svg?react";

export function Layout() {
  return (
    <main className="pt-10 pb-14 px-2 space-y-10">
      <header className="flex justify-between gap-10 max-w-296.25 mx-auto">
        <Logo />

        <div className="flex items-center gap-4">
          <NavLink to="/">Solicitações de reembolso</NavLink>
          <Button>
            <Link to="/new-refund">Nova solicitação</Link>
          </Button>
        </div>
      </header>
      <Outlet />
    </main>
  );
}
