import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  variant?: 'default' | 'primary' | 'accent';
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  variant = 'default',
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        'stat-card',
        variant === 'primary' && 'stat-card-primary',
        variant === 'accent' && 'stat-card-accent',
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className={cn(
            'text-sm font-medium',
            variant === 'default' ? 'text-muted-foreground' : 'opacity-90'
          )}>
            {title}
          </p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          {change && (
            <p className={cn(
              'text-sm mt-2 flex items-center gap-1',
              variant === 'default' && changeType === 'positive' && 'text-success',
              variant === 'default' && changeType === 'negative' && 'text-destructive',
              variant === 'default' && changeType === 'neutral' && 'text-muted-foreground',
              variant !== 'default' && 'opacity-80'
            )}>
              {changeType === 'positive' && '↑'}
              {changeType === 'negative' && '↓'}
              {change}
            </p>
          )}
        </div>
        <div className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center',
          variant === 'default' ? 'bg-primary/10' : 'bg-white/20'
        )}>
          <Icon className={cn(
            'w-6 h-6',
            variant === 'default' ? 'text-primary' : 'text-current'
          )} />
        </div>
      </div>
    </div>
  );
}
