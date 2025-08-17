// Main dashboard page
import { HeaderBar } from "@/components/molecules/HeaderBar";
import { SideNav } from "@/components/molecules/SideNav";
import { StatCard } from "@/components/molecules/StatCard";

const stats = [
  { 
    title: "Active Jobs", 
    deltaPct: 12.2, 
    value: "43.7k", 
    accent: "blue" as const, 
    bars: [10, 16, 22, 28, 22] 
  },
  { 
    title: "Jobs In Progress", 
    deltaPct: -31.1, 
    value: "92.3k", 
    accent: "orange" as const, 
    bars: [8, 12, 18, 24, 18] 
  },
  { 
    title: "Finished Jobs", 
    deltaPct: 3.3, 
    value: "66.3k", 
    accent: "green" as const, 
    bars: [6, 10, 16, 26, 20] 
  },
  { 
    title: "New Leads", 
    deltaPct: 31.1, 
    value: "92.3k", 
    accent: "purple" as const, 
    bars: [4, 8, 14, 28, 16] 
  },
];

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <SideNav />
      
      <div className="ml-64">
        <HeaderBar />
        
        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-foreground mb-2">
              Welcome back, Julie 👋
            </h1>
            <p className="text-sm text-muted-foreground">
              Here's what you need to focus on today
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                deltaPct={stat.deltaPct}
                bars={stat.bars}
                accent={stat.accent}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};