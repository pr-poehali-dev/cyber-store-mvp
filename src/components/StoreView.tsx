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

export default function StoreView({ 
  apps, 
  searchQuery, 
  setSearchQuery, 
  selectedPlatform, 
  setSelectedPlatform 
}: StoreViewProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12 animate-fade-in">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-cyber-purple/20 via-cyber-pink/20 to-cyber-blue/20 p-8 md:p-12 border border-cyber-purple/30 glow-border">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
              Свободный магазин приложений
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl">
              Публикуй, находи и скачивай приложения без ограничений. Создано для инди-разработчиков.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-cyber-purple hover:bg-cyber-purple/80 text-white">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать приложения
              </Button>
              <Button variant="outline" className="border-cyber-pink text-cyber-pink hover:bg-cyber-pink/20">
                <Icon name="Upload" size={20} className="mr-2" />
                Опубликовать своё
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 animate-slide-up">
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
