import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Heart, Moon, Droplets } from 'lucide-react';

const heartRateData = [
  { time: '6am', bpm: 62 },
  { time: '9am', bpm: 75 },
  { time: '12pm', bpm: 85 },
  { time: '3pm', bpm: 82 },
  { time: '6pm', bpm: 110 },
  { time: '9pm', bpm: 72 },
  { time: '12am', bpm: 60 },
];

const MetricCard = ({ title, value, unit, icon: Icon, colorClass }) => (
  <div className="glass-card flex items-center space-x-4 hover:-translate-y-1 transition-transform duration-300">
    <div className={`p-4 rounded-2xl ${colorClass}`}>
      <Icon size={28} />
    </div>
    <div>
      <p className="text-on-surface-variant text-sm font-medium">{title}</p>
      <p className="text-2xl font-manrope font-bold">
        {value} <span className="text-sm font-normal text-on-surface-variant">{unit}</span>
      </p>
    </div>
  </div>
);

const HealthMetrics = () => {
  return (
    <div className="max-w-[1100px] mx-auto w-full animate-in fade-in duration-500">
      <header className="mb-10">
        <h2 className="text-3xl font-manrope font-bold mb-2">Health Metrics</h2>
        <p className="text-on-surface-variant">Track your vitals and body statistics</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard title="Resting HR" value="62" unit="bpm" icon={Heart} colorClass="bg-error/20 text-error" />
        <MetricCard title="Sleep Duration" value="7.5" unit="hrs" icon={Moon} colorClass="bg-primary/20 text-primary" />
        <MetricCard title="Hydration" value="2.4" unit="L" icon={Droplets} colorClass="bg-tertiary/20 text-tertiary" />
        <MetricCard title="Steps" value="8,432" unit="steps" icon={Activity} colorClass="bg-secondary/20 text-secondary" />
      </div>

      <div className="glass-card min-h-[400px]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-manrope font-semibold flex items-center">
            <Heart className="text-error mr-2" size={20} /> Today's Heart Rate
          </h3>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={heartRateData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#494454" vertical={false} />
              <XAxis dataKey="time" stroke="#958ea0" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#958ea0" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#201f21', border: '1px solid #494454', borderRadius: '12px' }}
                itemStyle={{ color: '#ffb4ab', fontWeight: 'bold' }}
              />
              <Line 
                type="monotone" 
                dataKey="bpm" 
                stroke="#ffb4ab" 
                strokeWidth={3}
                dot={{ r: 4, fill: '#131315', stroke: '#ffb4ab', strokeWidth: 2 }}
                activeDot={{ r: 8, fill: '#ffb4ab', stroke: '#131315', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HealthMetrics;
