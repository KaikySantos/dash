import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

interface NavItemProps {
  title: string
  icon: React.FC<LucideProps>
  selected?: boolean
}

export const NavItem = ({
  title,
  icon: Icon,
  selected
}: NavItemProps) => {
  return (
    <div
      className={cn(
        "flex items-center text-muted-foreground justify-start gap-2 px-4 py-3 cursor-pointer rounded-md",
        selected && "bg-accent text-primary font-medium cursor-default"
      )}
    >
      <Icon size={20} />
      {title}
    </div>
  )
}