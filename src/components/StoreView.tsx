import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface App {
  id: number;
  name: string;
  developer: string;
  icon: string;
  platform: string;
  downloads: number;
  rating: number;
  category: string;
  description: string;
}

interface StoreViewProps {
  apps: App[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedPlatform: string;
  setSelectedPlatform: (platform: string) => void;
}

const categories = [
  { name: 'Игры', icon: 'Gamepad2', color: 'from-orange-500 to-red-500' },
  { name: 'Инструменты', icon: 'Wrench', color: 'from-purple-500 to-pink-500' },
  { name: 'Музыка', icon: 'Music', color: 'from-green-500 to-emerald-500' },
  { name: 'Финансы', icon: 'Wallet', color: 'from-blue-500 to-cyan-500' },
  { name: 'Графика', icon: 'Palette', color: 'from-pink-500 to-rose-500' },
  { name: 'Образование', icon: 'GraduationCap', color: 'from-indigo-500 to-violet-500' },
];

const featuredApps = [
  { icon: '🎮', name: 'Neon Runner' },
  { icon: '💻', name: 'Code Editor Pro' },
  { icon: '🎵', name: 'Synth Wave' },
  { icon: '💎', name: 'Crypto Wallet' },
  { icon: '📱', name: 'AR Scanner' },
  { icon: '🎨', name: 'Pixel Art Studio' },
  { icon: '🚀', name: 'Space Explorer' },
  { icon: '🎯', name: 'Target Master' },
];

export default function StoreView({ 
  apps, 
  searchQuery, 
  setSearchQuery, 
  selectedPlatform, 
  setSelectedPlatform 
}: StoreViewProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 animate-fade-in">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-cyber-purple/20 via-cyber-pink/20 to-cyber-blue/20 p-8 md:p-16 border border-cyber-purple/30 glow-border">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
              Официальный магазин приложений для Android
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Скачивайте любимые приложения и игры в киберпанк стиле. Безопасно. Быстро. Свободно.
            </p>
            <Button className="bg-cyber-purple hover:bg-cyber-purple/80 text-white text-lg px-8 py-6 h-auto">
              <Icon name="Download" size={24} className="mr-2" />
              Скачать CYBER-STORE
            </Button>
          </div>
        </div>
      </section>

      {/* Animated App Logos */}
      <section className="mb-12 overflow-hidden">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...featuredApps, ...featuredApps].map((app, i) => (
            <div key={i} className="inline-flex items-center gap-3 px-6 py-4 bg-cyber-dark/50 border border-cyber-purple/30 rounded-xl">
              <span className="text-3xl">{app.icon}</span>
              <span className="text-gray-300 font-medium">{app.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Категории</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="group relative p-6 rounded-xl bg-cyber-dark border border-cyber-purple/30 hover:border-cyber-purple transition-all hover:shadow-lg hover:shadow-cyber-purple/20"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon name={cat.icon as any} size={24} className="text-white" />
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{cat.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Games Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Игры на любой вкус</h3>
          <Button variant="ghost" className="text-cyber-purple hover:text-cyber-purple/80">
            Все игры
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {apps.filter(app => app.category === 'Games').map((app) => (
            <div
              key={app.id}
              className="flex-none w-48 group cursor-pointer"
            >
              <div className="relative mb-3 aspect-square rounded-xl bg-gradient-to-br from-cyber-purple/20 to-cyber-pink/20 border border-cyber-purple/30 flex items-center justify-center group-hover:border-cyber-purple transition-all">
                <span className="text-6xl group-hover:scale-110 transition-transform">{app.icon}</span>
              </div>
              <h4 className="font-semibold text-white mb-1 truncate group-hover:text-cyber-purple transition-colors">{app.name}</h4>
              <p className="text-sm text-gray-400 mb-2">{app.developer}</p>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                <span>{app.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apps Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white">Популярные приложения</h3>
          <Button variant="ghost" className="text-cyber-purple hover:text-cyber-purple/80">
            Все приложения
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {apps.filter(app => app.category !== 'Games').slice(0, 6).map((app) => (
            <div
              key={app.id}
              className="flex-none w-48 group cursor-pointer"
            >
              <div className="relative mb-3 aspect-square rounded-xl bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 border border-cyber-purple/30 flex items-center justify-center group-hover:border-cyber-purple transition-all">
                <span className="text-6xl group-hover:scale-110 transition-transform">{app.icon}</span>
              </div>
              <h4 className="font-semibold text-white mb-1 truncate group-hover:text-cyber-purple transition-colors">{app.name}</h4>
              <p className="text-sm text-gray-400 mb-2">{app.developer}</p>
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                <span>{app.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Search & Filter */}
      <section className="mb-8 animate-slide-up">
        <h3 className="text-2xl font-bold text-white mb-6">Найти приложение</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Поиск приложений..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-cyber-dark border-cyber-purple/30 focus:border-cyber-purple"
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={selectedPlatform === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedPlatform('all')}
              className={selectedPlatform === 'all' ? 'bg-cyber-purple' : 'border-cyber-purple/30'}
            >
              Все
            </Button>
            <Button
              variant={selectedPlatform === 'Android' ? 'default' : 'outline'}
              onClick={() => setSelectedPlatform('Android')}
              className={selectedPlatform === 'Android' ? 'bg-cyber-purple' : 'border-cyber-purple/30'}
            >
              <Icon name="Smartphone" size={16} className="mr-2" />
              Android
            </Button>
            <Button
              variant={selectedPlatform === 'iOS' ? 'default' : 'outline'}
              onClick={() => setSelectedPlatform('iOS')}
              className={selectedPlatform === 'iOS' ? 'bg-cyber-purple' : 'border-cyber-purple/30'}
            >
              <Icon name="Apple" size={16} className="mr-2" />
              iOS
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <Card 
              key={app.id} 
              className="bg-cyber-dark border-cyber-purple/30 hover:border-cyber-purple transition-all hover:shadow-lg hover:shadow-cyber-purple/20 cursor-pointer group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-5xl group-hover:scale-110 transition-transform">{app.icon}</div>
                  <Badge variant="secondary" className="bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30">
                    {app.platform}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-cyber-purple transition-colors">{app.name}</CardTitle>
                <CardDescription className="text-gray-400">{app.developer}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-4">{app.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Icon name="Download" size={14} className="text-cyber-blue" />
                    <span className="text-gray-400">{app.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-400">{app.rating}</span>
                  </div>
                  <Badge variant="outline" className="border-cyber-pink/30 text-cyber-pink text-xs">
                    {app.category}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-cyber-purple to-cyber-pink hover:opacity-90">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
