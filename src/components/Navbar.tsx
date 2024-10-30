import { Bell, Home, MessageSquare, Search, User } from 'lucide-react';
import { Link } from './Link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            Connect
          </Link>
          
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <NavIcon icon={Home} label="Home" />
            <NavIcon icon={MessageSquare} label="Messages" />
            <NavIcon icon={Bell} label="Notifications" />
            <NavIcon icon={User} label="Profile" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavIcon({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title={label}>
      <Icon className="h-6 w-6 text-gray-600" />
    </button>
  );
}