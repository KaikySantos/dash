import { UserDropdownMenu } from "./user-dropdown-menu";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-white border">
      <p>Navbar</p>

      <UserDropdownMenu />
    </nav>
  )
}