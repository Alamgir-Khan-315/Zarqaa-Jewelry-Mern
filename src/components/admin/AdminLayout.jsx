import { Link, Outlet, useLocation } from 'react-router-dom';
import { Package, PlusCircle, Home, LogOut, ArrowLeft } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function AdminLayout() {
  const location = useLocation();
  const { isDarkMode } = useTheme();

  const navItems = [
    { name: 'All Products', path: '/admin_gopu', icon: Package },
    { name: 'Add Product', path: '/admin_gopu/new', icon: PlusCircle },
  ];

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'dark bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-colors duration-300">
        
        {/* Admin Header */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-rose-500">
            Zarqaa Admin
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-amber-600 dark:text-amber-500' : 'text-gray-400 dark:text-gray-500'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <Link
            to="/"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="mr-3 h-5 w-5 text-gray-400" />
            Back to Store
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header (Hidden on large screens) */}
        <header className="md:hidden h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center px-4 shrink-0">
          <span className="text-lg font-bold">Admin Dashboard</span>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-950 p-6 md:p-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>

    </div>
  );
}
