import { UserDropdownMenu } from "./user-dropdown-menu";

export function Navbar() {
  return (
    <nav className="flex justify-end px-6 py-2 bg-background border-b">
      <UserDropdownMenu />
    </nav>
  )
}