import { Bell, FileText, ShoppingCart, User } from 'lucide-react';
export const ActivityFeed = () => {
  const activities = [
    {
      icon: User,
      title: 'New user registered',
      description: 'Sarah Johnson joined the platform',
      time: '2 minutes ago',
      color: 'bg-blue-500',
    },
    {
      icon: ShoppingCart,
      title: 'New order received',
      description: 'Order #12847 worth $299.99',
      time: '5 minutes ago',
      color: 'bg-green-500',
    },
    {
      icon: FileText,
      title: 'Report generated',
      description: 'Monthly sales report is ready',
      time: '15 minutes ago',
      color: 'bg-purple-500',
    },
    {
      icon: Bell,
      title: 'System notification',
      description: 'Server maintenance scheduled',
      time: '1 hour ago',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-start space-x-3">
              <div className={`rounded-lg p-2 ${activity.color}`}>
                <Icon size={16} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <p className="mt-1 text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="mt-4 w-full text-sm font-medium text-blue-600 hover:text-blue-700">
        View all activities
      </button>
    </div>
  );
};
