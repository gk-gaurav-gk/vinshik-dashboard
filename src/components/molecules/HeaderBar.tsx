// Header bar with search and user controls
import { Search, Mail, Settings } from "lucide-react";
import { IconButton } from "@/components/atoms/IconButton";
import ladyAvatar from "@/assets/lady-avatar.jpg";

interface HeaderBarProps {
  onMenuClick?: () => void;
}

export const HeaderBar = ({ onMenuClick }: HeaderBarProps) => {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors"
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1">
              <div className="w-full h-0.5 bg-foreground rounded"></div>
              <div className="w-full h-0.5 bg-foreground rounded"></div>
              <div className="w-full h-0.5 bg-foreground rounded"></div>
            </div>
          </button>
        </div>
        
        <div className="hidden md:flex items-center bg-muted/30 rounded-lg px-4 py-2 w-96">
          <Search className="h-4 w-4 text-muted-foreground mr-3" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-sm flex-1 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <IconButton icon={Mail} hasNotification />
          <IconButton icon={Settings} />
          <div className="relative">
            <div className="h-10 w-10 rounded-lg bg-surface border border-border overflow-hidden">
              <img 
                src={ladyAvatar} 
                alt="User avatar" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-chart-green rounded-full border-2 border-surface" />
          </div>
        </div>
      </div>
    </header>
  );
};