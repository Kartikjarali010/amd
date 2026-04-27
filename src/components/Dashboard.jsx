import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Activity, Target, X, Plus, Zap, Droplets } from 'lucide-react';

const weeklyData = [
  { name: 'Mon', calories: 2100 },
  { name: 'Tue', calories: 2400 },
  { name: 'Wed', calories: 2200 },
  { name: 'Thu', calories: 2600 },
  { name: 'Fri', calories: 2300 },
  { name: 'Sat', calories: 2800 },
  { name: 'Sun', calories: 2500 },
];

const monthlyData = [
  { name: 'Week 1', calories: 15400 },
  { name: 'Week 2', calories: 16100 },
  { name: 'Week 3', calories: 14800 },
  { name: 'Week 4', calories: 17200 },
];

const StatCard = ({ title, value, icon: Icon, trend, colorClass }) => (
  <div className="glass-card hover:-translate-y-1 transition-transform duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${colorClass}`}>
        <Icon size={24} />
      </div>
      <span className="flex items-center text-sm font-medium text-emerald-400">
        <TrendingUp size={16} className="mr-1" />
        {trend}
      </span>
    </div>
    <h3 className="text-on-surface-variant text-sm font-medium mb-1">{title}</h3>
    <p className="text-3xl font-manrope font-bold">{value}</p>
  </div>
);

const SmartInsights = () => (
  <div className="glass-card flex flex-col justify-between h-full bg-gradient-to-br from-surface-container to-surface-container-low border-l-4 border-l-tertiary">
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="p-2 rounded-full bg-tertiary/20">
          <Zap className="text-tertiary" size={20} />
        </div>
        <h3 className="text-lg font-manrope font-bold text-on-surface">AI Insights</h3>
      </div>
      <p className="text-sm text-on-surface-variant leading-relaxed">
        You are <span className="text-on-surface font-semibold">15g of protein</span> away from your daily goal. Consider adding a scoop of whey protein or a handful of almonds to your next meal to maintain muscle synthesis.
      </p>
    </div>
    <div className="mt-6 flex space-x-2">
      <button className="text-xs px-3 py-1.5 bg-tertiary/20 text-tertiary rounded-md font-medium hover:bg-tertiary/30 transition-colors">View Suggestions</button>
      <button className="text-xs px-3 py-1.5 border border-outline-variant rounded-md hover:bg-surface-bright transition-colors">Dismiss</button>
    </div>
  </div>
);

const WaterTracker = ({ glasses, setGlasses }) => (
  <div className="glass-card flex flex-col h-full">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center space-x-2">
        <div className="p-2 rounded-full bg-secondary/20">
          <Droplets className="text-secondary" size={20} />
        </div>
        <h3 className="text-lg font-manrope font-bold">Hydration</h3>
      </div>
      <span className="text-sm font-medium text-secondary">{glasses} / 8 glasses</span>
    </div>
    
    <div className="flex-1 flex flex-col justify-end">
      <div className="flex justify-between space-x-2 mb-6">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            onClick={() => setGlasses(i + 1)}
            className={`h-16 flex-1 rounded-sm cursor-pointer transition-colors duration-300 ${
              i < glasses ? 'bg-secondary' : 'bg-surface-bright hover:bg-secondary/30'
            }`}
          />
        ))}
      </div>
      <button 
        onClick={() => setGlasses(Math.min(8, glasses + 1))}
        className="w-full py-2 border border-secondary text-secondary rounded-button hover:bg-secondary/10 transition-colors flex items-center justify-center font-medium text-sm"
      >
        <Plus size={16} className="mr-1" /> Add a Glass
      </button>
    </div>
  </div>
);

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState('Weekly');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dailyCalories, setDailyCalories] = useState(2450);
  const [goalProgress, setGoalProgress] = useState(70);
  const [newMealCalories, setNewMealCalories] = useState('');
  const [glasses, setGlasses] = useState(3);

  const chartData = timeframe === 'Weekly' ? weeklyData : monthlyData;

  const handleLogMeal = (e) => {
    e.preventDefault();
    if (newMealCalories && !isNaN(newMealCalories)) {
      const added = parseInt(newMealCalories);
      setDailyCalories(prev => prev + added);
      setGoalProgress(prev => Math.min(100, prev + Math.floor(added / 35)));
      setIsModalOpen(false);
      setNewMealCalories('');
    }
  };

  const circumference = 2 * Math.PI * 88;
  const strokeDashoffset = circumference - (goalProgress / 100) * circumference;

  return (
    <div className="max-w-[1100px] mx-auto w-full relative">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-manrope font-bold mb-2">Welcome back, Alex</h2>
          <p className="text-on-surface-variant">Here is your daily health summary</p>
        </div>
        <button className="btn-primary flex items-center" onClick={() => setIsModalOpen(true)}>
          <Plus size={20} className="mr-2" />
          Log Meal
        </button>
      </header>

      {/* Grid: 3 columns - Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Daily Calories" value={`${dailyCalories.toLocaleString()} kcal`} icon={Activity} trend="+5%" colorClass="bg-primary/20 text-primary" />
        <StatCard title="Protein Intake" value="145g" icon={Target} trend="+12%" colorClass="bg-secondary/20 text-secondary" />
        <StatCard title="Active Minutes" value="84 min" icon={Activity} trend="+2%" colorClass="bg-tertiary/20 text-tertiary" />
      </div>

      {/* Main Chart Area & Goal Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 glass-card min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-manrope font-semibold">Caloric Intake</h3>
            <div className="flex space-x-2 bg-surface p-1 rounded-lg">
              <button 
                className={`px-4 py-1.5 text-sm rounded-md transition-colors ${timeframe === 'Weekly' ? 'bg-surface-bright text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
                onClick={() => setTimeframe('Weekly')}
              >
                Weekly
              </button>
              <button 
                className={`px-4 py-1.5 text-sm rounded-md transition-colors ${timeframe === 'Monthly' ? 'bg-surface-bright text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
                onClick={() => setTimeframe('Monthly')}
              >
                Monthly
              </button>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#958ea0" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#958ea0" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#201f21', border: '1px solid #494454', borderRadius: '12px', color: '#e5e1e4' }}
                  itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="calories" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorCalories)" activeDot={{ r: 6, fill: '#f472b6', stroke: '#131315', strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card flex flex-col items-center">
          <h3 className="text-xl font-manrope font-semibold mb-6 w-full text-left">Goal Progress</h3>
          <div className="flex-1 flex flex-col justify-center items-center w-full">
            <div className="relative w-48 h-48 mb-8">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-surface-bright" />
                <circle 
                  cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" 
                  strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round"
                  className="text-primary transition-all duration-1000 ease-out" 
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold font-manrope">{goalProgress}%</span>
                <span className="text-sm text-on-surface-variant">Daily Goal</span>
              </div>
            </div>
            
            <div className="w-full space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Carbs</span>
                <span className="font-medium">{(210 + (goalProgress-70)*3).toFixed(0)}g / 300g</span>
              </div>
              <div className="w-full bg-surface-bright rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full transition-all duration-1000" style={{ width: `${goalProgress}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Features Row: AI Insights & Hydration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SmartInsights />
        <WaterTracker glasses={glasses} setGlasses={setGlasses} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-card w-full max-w-md animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-manrope font-semibold">Log a Meal</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-on-surface-variant hover:text-on-surface transition-colors">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleLogMeal} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Meal Name</label>
                <input type="text" placeholder="e.g. Avocado Toast" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Calories (kcal)</label>
                <input type="number" required value={newMealCalories} onChange={(e) => setNewMealCalories(e.target.value)} placeholder="e.g. 450" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              </div>
              <button type="submit" className="w-full btn-primary">
                Add to Diary
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
