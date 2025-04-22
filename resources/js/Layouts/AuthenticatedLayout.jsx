import logo from '../../../public/OCP.png';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
  const user = usePage().props.auth.user;
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <img src={logo} alt="Logo" className="h-8 w-auto mr-2 sm:h-10 sm:mr-10" />
              </Link>

              <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                <NavLink href={route('dashboard')} active={route().current('dashboard')}>Dashboard</NavLink>
                <NavLink href={route('equipments.index')} active={route().current('equipments.index')}>Equipments</NavLink>
                <NavLink href={route('tickets.index')} active={route().current('tickets.index')}>Tickets</NavLink>
                <NavLink href={route('requests.index')} active={route().current('requests.index')}>Requests</NavLink>
                <NavLink href={route('users.index')} active={route().current('users.index')}>Utilisateurs</NavLink>
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <Dropdown>
                <Dropdown.Trigger>
                  <span className="inline-flex rounded-md">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {user.name}
                      <svg className="-me-0.5 ms-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                </Dropdown.Trigger>

                <Dropdown.Content>
                  <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                  <Dropdown.Link href={route('logout')} method="post" as="button">Log Out</Dropdown.Link>
                </Dropdown.Content>
              </Dropdown>
            </div>

            <div className="sm:hidden">
              <button
                onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {showingNavigationDropdown ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {showingNavigationDropdown && (
          <div className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>Dashboard</ResponsiveNavLink>
              <ResponsiveNavLink href={route('equipments.index')} active={route().current('equipments.index')}>Equipments</ResponsiveNavLink>
              <ResponsiveNavLink href={route('tickets.index')} active={route().current('tickets.index')}>Tickets</ResponsiveNavLink>
              <ResponsiveNavLink href={route('requests.index')} active={route().current('requests.index')}>Requests</ResponsiveNavLink>
              <ResponsiveNavLink href={route('users.index')} active={route().current('users.index')}>Utilisateurs</ResponsiveNavLink>
            </div>

            <div className="border-t border-gray-200 pb-1 pt-4">
              <div className="px-4">
                <div className="text-base font-medium text-gray-800">{user.name}</div>
                <div className="text-sm font-medium text-gray-500">{user.email}</div>
              </div>

              <div className="mt-3 space-y-1">
                <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                <ResponsiveNavLink method="post" href={route('logout')} as="button">Log Out</ResponsiveNavLink>
              </div>
            </div>
          </div>
        )}
      </nav>

      {header && (
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{header}</div>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}