import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Package, PlusCircle, Home, LogOut, ArrowLeft, Menu, X, Eye } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode } = useTheme();

  const navItems = [
    { name: 'All Products', path: '/admin_gopu', icon: Package },
    { name: 'Add Product', path: '/admin_gopu/new', icon: PlusCircle },
  ];

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'dark bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-transform duration-300 md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Admin Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800 shrink-0">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-rose-500">
            Zarqaa Admin
          </span>
          <button 
            className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-2 -mr-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={20} />
          </button>
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
                onClick={() => setIsSidebarOpen(false)}
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
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden md:ml-0">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 sm:px-6 shrink-0 z-10">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-3 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <span className="text-lg font-bold md:hidden">Admin Dashboard</span>
          </div>

          <div className="flex items-center ml-auto">
            <Link
              to="/products"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-sm font-medium text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-500/10 hover:bg-amber-100 dark:hover:bg-amber-500/20 rounded-lg transition-colors border border-amber-200 dark:border-amber-500/20 shadow-sm"
              title="View products in store (opens in new tab)"
            >
              <Eye className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">View Products on Web</span>
            </Link>
          </div>
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
