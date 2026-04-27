import { User, Mail, Shield, Bell, Zap, Activity, Heart } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-[1100px] mx-auto w-full animate-in fade-in duration-500">
      <header className="mb-10">
        <h2 className="text-3xl font-manrope font-bold mb-2">Profile & Settings</h2>
        <p className="text-on-surface-variant">Manage your account and preferences</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-secondary p-1 mb-4">
              <img 
                src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=transparent" 
                alt="Profile Avatar" 
                className="w-full h-full rounded-full bg-surface"
              />
            </div>
            <h3 className="text-xl font-manrope font-bold">Alex Mercer</h3>
            <p className="text-sm text-on-surface-variant mb-6">alex.mercer@example.com</p>
            <button className="btn-secondary w-full text-sm">Edit Profile</button>
          </div>
          
          <div className="glass-card p-0 overflow-hidden">
            <div className="p-4 border-b border-white/5 hover:bg-surface-bright/30 cursor-pointer flex items-center transition-colors">
              <User size={18} className="text-primary mr-3" />
              <span className="font-medium text-sm">Personal Info</span>
            </div>
            <div className="p-4 border-b border-white/5 hover:bg-surface-bright/30 cursor-pointer flex items-center transition-colors">
              <Bell size={18} className="text-secondary mr-3" />
              <span className="font-medium text-sm">Notifications</span>
            </div>
            <div className="p-4 border-b border-white/5 hover:bg-surface-bright/30 cursor-pointer flex items-center transition-colors">
              <Shield size={18} className="text-tertiary mr-3" />
              <span className="font-medium text-sm">Security & Privacy</span>
            </div>
            <div className="p-4 hover:bg-surface-bright/30 cursor-pointer flex items-center transition-colors">
              <Zap size={18} className="text-error mr-3" />
              <span className="font-medium text-sm">Subscription</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card">
            <h3 className="text-lg font-manrope font-bold mb-6">Goal Settings</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-on-surface-variant">Daily Calorie Target</label>
                  <span className="text-sm text-primary font-bold">2,500 kcal</span>
                </div>
                <input type="range" min="1500" max="4000" defaultValue="2500" className="w-full accent-primary" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-on-surface-variant">Protein Target</label>
                  <span className="text-sm text-secondary font-bold">160g</span>
                </div>
                <input type="range" min="50" max="250" defaultValue="160" className="w-full accent-secondary" />
              </div>
              <div className="pt-4 border-t border-white/5">
                <button className="btn-primary">Save Targets</button>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h3 className="text-lg font-manrope font-bold mb-4">Integrations</h3>
            <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl mb-3 border border-transparent hover:border-outline-variant transition-colors">
              <div className="flex items-center">
                <Activity size={20} className="text-emerald-400 mr-3" />
                <div>
                  <p className="font-medium text-sm">Apple Health</p>
                  <p className="text-xs text-on-surface-variant">Syncs steps and workouts</p>
                </div>
              </div>
              <button className="text-xs bg-emerald-400/20 text-emerald-400 px-3 py-1 rounded-full font-medium">Connected</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl border border-transparent hover:border-outline-variant transition-colors">
              <div className="flex items-center">
                <Heart size={20} className="text-primary mr-3" />
                <div>
                  <p className="font-medium text-sm">Google Fit</p>
                  <p className="text-xs text-on-surface-variant">Not connected</p>
                </div>
              </div>
              <button className="text-xs border border-outline px-3 py-1 rounded-full font-medium hover:bg-surface-bright transition-colors">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
