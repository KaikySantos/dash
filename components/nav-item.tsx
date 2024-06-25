import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

interface NavItemProps {
  title: string
  icon: React.FC<LucideProps>
  selected?: boolean
  notifications?: number
}

export const NavItem = ({
  title,
  icon: Icon,
  selected,
  notifications
}: NavItemProps) => {
  return (
    <div
      className={cn(
        "flex items-center text-muted-foreground justify-start gap-2 px-4 py-3 cursor-pointer rounded-md hover:bg-accent/80",
        selected && "bg-accent text-primary font-medium cursor-default"
      )}
    >
      <Icon size={20} className={selected ? "fill-current" : ""} />
      {title}

      {notifications && (
        <div className="ml-auto bg-primary rounded-full w-8 h-6 flex items-center justify-center">
          <span className="text-xs text-primary-foreground">
            {notifications}
          </span>
        </div>
      )}
    </div>
  )
}