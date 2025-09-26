import type { DivideIcon as LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: typeof LucideIcon;
  color: string;
}

export const StatCard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color,
}: Props) => {
  const changeColor = {
    positive: 'text-green-600 bg-green-50',
    negative: 'text-red-600 bg-red-50',
    neutral: 'text-gray-600 bg-gray-50',
  }[changeType];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <div
            className={`mt-2 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${changeColor}`}
          >
            {change}
          </div>
        </div>
        <div className={`rounded-lg p-3 ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};
