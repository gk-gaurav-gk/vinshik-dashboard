// Side navigation component
import { useState } from "react";
import { Home, Calendar, MapPin, Users, Briefcase, FileText, Settings } from "lucide-react";
import { NavItem } from "@/components/atoms/NavItem";
const navigationItems = [{
  icon: Home,
  label: "Home",
  id: "home"
}, {
  icon: Calendar,
  label: "Calendar",
  id: "calendar"
}, {
  icon: MapPin,
  label: "Map",
  id: "map"
}, {
  icon: Users,
  label: "Clients",
  id: "clients"
}, {
  icon: Briefcase,
  label: "Jobs",
  id: "jobs"
}, {
  icon: FileText,
  label: "Quotes",
  id: "quotes"
}, {
  icon: Settings,
  label: "My Services",
  id: "services"
}];
interface SideNavProps {
  activeItem?: string;
}
export const SideNav = ({
  activeItem = "home"
}: SideNavProps) => {
  const [active, setActive] = useState(activeItem);
  return <nav className="fixed left-0 top-0 z-40 h-screen w-64 bg-surface-light border-r border-border">
      <div className="p-6">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="font-bold text-5xl">
            <span className="text-teal">Vin</span>
            <span className="text-foreground">Shik</span>
          </h1>
        </div>
        
        {/* Navigation */}
        <div className="space-y-2">
          {navigationItems.map(item => <NavItem key={item.id} icon={item.icon} label={item.label} isActive={active === item.id} onClick={() => setActive(item.id)} />)}
        </div>
      </div>
    </nav>;
};