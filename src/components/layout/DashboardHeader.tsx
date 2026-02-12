import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { MobileMenuTrigger } from './DashboardSidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

export function DashboardHeader() {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-card border-b border-border px-4 md:px-6 flex items-center justify-between gap-4">
      {/* Mobile menu + Search */}
      <div className="flex items-center gap-2 flex-1">
        <MobileMenuTrigger />
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search patients, appointments..."
              className="pl-10 bg-secondary border-0"
            />
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-auto">
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="flex items-center gap-2 w-full">
                  <Badge variant="soft-info" className="text-xs">Appointment</Badge>
                  <span className="text-xs text-muted-foreground ml-auto">5 min ago</span>
                </div>
                <p className="text-sm">New appointment request from Amit Patel</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="flex items-center gap-2 w-full">
                  <Badge variant="soft-success" className="text-xs">Payment</Badge>
                  <span className="text-xs text-muted-foreground ml-auto">1 hour ago</span>
                </div>
                <p className="text-sm">Payment received for Bill #BILL-2024-042</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1 p-3">
                <div className="flex items-center gap-2 w-full">
                  <Badge variant="soft-warning" className="text-xs">Reminder</Badge>
                  <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
                </div>
                <p className="text-sm">3 appointments scheduled for today</p>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-primary font-medium">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Date & Time */}
        <div className="hidden md:block text-right">
          <p className="text-sm font-medium">{new Date().toLocaleDateString('en-IN', { weekday: 'long' })}</p>
          <p className="text-xs text-muted-foreground">
            {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>
        </div>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-sm font-semibold text-primary-foreground">
            {user?.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
      </div>
    </header>
  );
}
