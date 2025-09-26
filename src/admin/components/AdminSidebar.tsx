import { CustomLogo } from '@/components';
import {
  Home,
  Users,
  BarChart3,
  Settings,
  FileText,
  ShoppingCart,
  Bell,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Link, useLocation } from 'react-router';

interface Props {
  isCollapsed: boolean;
  onToggle: () => void;
}
export const AdminSidebar = ({ isCollapsed, onToggle }: Props) => {
  const { pathname } = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', to: '/admin' },
    { icon: BarChart3, label: 'Productos', to: '/admin/products' },
    { icon: Users, label: 'Usuarios', to: '/admin/users' },
    { icon: ShoppingCart, label: 'Ordenes', to: '/admin/orders' },
    { icon: FileText, label: 'Reportes', to: '/admin/reports' },
    { icon: Bell, label: 'Notificaciones', to: '/admin/notifications' },
    { icon: Settings, label: 'Ajustes', to: '/admin/settings' },
    { icon: HelpCircle, label: 'ayuda', to: '/admin/help' },
  ];

  const isActiveRoute = (to: string) => {
    if (pathname.includes('/admin/products') && to === '/admin/products') {
      return true;
    }

    return pathname === to;
  };

  return (
    <div
      className={`border-r border-gray-200 bg-white transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-64'
      } flex flex-col`}
    >
      {/* Header */}
      <div className="flex h-18 items-center justify-between border-b border-gray-200 p-4">
        {!isCollapsed && <CustomLogo />}
        <button
          onClick={onToggle}
          className="rounded-lg p-2 transition-colors hover:bg-gray-100"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <Link
                  to={item.to || '/admin'}
                  className={`group flex items-center space-x-3 rounded-lg px-3 py-2 transition-all duration-200 ${
                    isActiveRoute(item.to)
                      ? 'border-r-2 border-blue-600 bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      {!isCollapsed && (
        <div className="border-t border-gray-200 p-4">
          <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-3 transition-colors hover:bg-gray-50">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 font-semibold text-white">
              JD
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900">
                John Doe
              </p>
              <p className="truncate text-xs text-gray-500">john@company.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
