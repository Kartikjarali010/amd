import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const weeklyMacros = [
  { day: 'Mon', protein: 120, carbs: 200, fat: 60 },
  { day: 'Tue', protein: 140, carbs: 220, fat: 65 },
  { day: 'Wed', protein: 130, carbs: 190, fat: 55 },
  { day: 'Thu', protein: 150, carbs: 240, fat: 70 },
  { day: 'Fri', protein: 145, carbs: 210, fat: 60 },
  { day: 'Sat', protein: 160, carbs: 250, fat: 75 },
  { day: 'Sun', protein: 135, carbs: 200, fat: 58 },
];

const macroDistribution = [
  { name: 'Protein', value: 30, color: '#f472b6' },
  { name: 'Carbs', value: 45, color: '#10b981' },
  { name: 'Fat', value: 25, color: '#adc6ff' },
];

const Analytics = () => {
  return (
    <div className="max-w-[1100px] mx-auto w-full animate-in fade-in duration-500">
      <header className="mb-10">
        <h2 className="text-3xl font-manrope font-bold mb-2">Detailed Analytics</h2>
        <p className="text-on-surface-variant">Deep dive into your nutritional breakdown</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 glass-card min-h-[400px]">
          <h3 className="text-xl font-manrope font-semibold mb-6">Weekly Macronutrients (g)</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyMacros} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#494454" vertical={false} />
                <XAxis dataKey="day" stroke="#958ea0" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#958ea0" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#201f21', border: '1px solid #494454', borderRadius: '12px' }}
                  itemStyle={{ color: '#e5e1e4', fontWeight: 'bold' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="protein" name="Protein" stackId="a" fill="#f472b6" radius={[0, 0, 4, 4]} />
                <Bar dataKey="carbs" name="Carbs" stackId="a" fill="#10b981" />
                <Bar dataKey="fat" name="Fat" stackId="a" fill="#adc6ff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card flex flex-col items-center justify-center">
          <h3 className="text-xl font-manrope font-semibold mb-2 w-full text-left">Current Split</h3>
          <div className="h-[250px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={macroDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {macroDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#201f21', border: '1px solid #494454', borderRadius: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xl font-bold font-manrope text-on-surface">Target</span>
            </div>
          </div>
          <div className="w-full space-y-2 mt-4">
            {macroDistribution.map(item => (
              <div key={item.name} className="flex justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                  <span className="text-on-surface-variant">{item.name}</span>
                </div>
                <span className="font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
