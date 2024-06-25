import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

import { Button, ButtonProps } from './ui/button';

interface NavItemProps extends ButtonProps {
  title: string
  icon: React.FC<LucideProps>
  selected?: boolean
  notifications?: number
}

export const NavItem = ({
  title,
  icon: Icon,
  selected,
  notifications,
  ...props
}: NavItemProps) => {
  return (
    <Button
      className={cn(
        "bg-transparent h-12 flex items-center text-muted justify-start gap-2 px-4 py-3 cursor-pointer rounded-md hover:bg-accent/10",
        selected && "bg-accent/80 text-primary font-medium cursor-default hover:bg-accent/80"
      )}
      {...props}
    >
      <Icon size={20} className={selected ? "fill-current" : ""} />
      {title}

      {notifications && (
        <div className="ml-auto bg-accent rounded-full w-8 h-6 flex items-center justify-center">
          <span className="text-xs text-accent-foreground font-bold">
            {notifications}
          </span>
        </div>
      )}
    </Button>
  )
}