import { Clock, Coffee, Utensils, Apple } from 'lucide-react';

const meals = [
  { id: 1, type: 'Breakfast', time: '08:30 AM', name: 'Oatmeal & Berries', calories: 320, protein: 12, carbs: 45, fat: 8, icon: Coffee },
  { id: 2, type: 'Snack', time: '11:15 AM', name: 'Greek Yogurt', calories: 150, protein: 15, carbs: 10, fat: 4, icon: Apple },
  { id: 3, type: 'Lunch', time: '01:45 PM', name: 'Grilled Chicken Salad', calories: 450, protein: 40, carbs: 25, fat: 18, icon: Utensils },
];

const Diary = () => {
  return (
    <div className="max-w-[1100px] mx-auto w-full animate-in fade-in duration-500">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-manrope font-bold mb-2">Food Diary</h2>
          <p className="text-on-surface-variant">Review your daily nutritional intake</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-primary">920 kcal</p>
          <p className="text-sm text-on-surface-variant">Consumed Today</p>
        </div>
      </header>

      <div className="space-y-4">
        {meals.map((meal) => (
          <div key={meal.id} className="glass-card !p-5 flex items-center justify-between hover:bg-surface-bright/20 transition-colors cursor-pointer group">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <meal.icon size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{meal.name}</h4>
                <div className="flex items-center text-sm text-on-surface-variant space-x-3 mt-1">
                  <span className="flex items-center"><Clock size={14} className="mr-1" /> {meal.time}</span>
                  <span className="px-2 py-0.5 bg-surface-bright rounded-md text-xs">{meal.type}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-4 text-sm text-on-surface-variant text-right">
                <div><span className="block font-medium text-on-surface">{meal.protein}g</span>Protein</div>
                <div><span className="block font-medium text-on-surface">{meal.carbs}g</span>Carbs</div>
                <div><span className="block font-medium text-on-surface">{meal.fat}g</span>Fat</div>
              </div>
              <div className="text-right border-l border-outline-variant pl-6">
                <span className="block text-xl font-bold font-manrope">{meal.calories}</span>
                <span className="text-xs text-on-surface-variant">kcal</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diary;
