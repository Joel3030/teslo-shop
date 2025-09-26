import { Bell, MessageSquare, Search, Settings } from 'lucide-react';

export const AdminHeader = () => {
  return (
    <header className="h-18 border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="max-w-md flex-1">
          <div className="relative">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="relative rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
          </button>

          <button className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100">
            <MessageSquare size={20} />
          </button>

          <button className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100">
            <Settings size={20} />
          </button>

          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-semibold text-white transition-shadow hover:shadow-lg">
            JD
          </div>
        </div>
      </div>
    </header>
  );
};
