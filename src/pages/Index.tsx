import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const mockApps = [
  {
    id: 1,
    name: 'Neon Runner',
    developer: 'CyberDev Studio',
    icon: '🎮',
    platform: 'Android',
    downloads: 15420,
    rating: 4.7,
    category: 'Games',
    description: 'Быстрый киберпанк раннер с потрясающей графикой',
  },
  {
    id: 2,
    name: 'Code Editor Pro',
    developer: 'DevTools Inc',
    icon: '💻',
    platform: 'Android',
    downloads: 8932,
    rating: 4.9,
    category: 'Tools',
    description: 'Мощный редактор кода для мобильной разработки',
  },
  {
    id: 3,
    name: 'Synth Wave',
    developer: 'AudioWorks',
    icon: '🎵',
    platform: 'iOS',
    downloads: 23100,
    rating: 4.8,
    category: 'Music',
    description: 'Создавайте синтвейв музыку прямо на телефоне',
  },
  {
    id: 4,
    name: 'Crypto Wallet',
    developer: 'BlockChain Labs',
    icon: '💎',
    platform: 'Android',
    downloads: 45620,
    rating: 4.6,
    category: 'Finance',
    description: 'Безопасный криптокошелек нового поколения',
  },
  {
    id: 5,
    name: 'AR Scanner',
    developer: 'FutureTech',
    icon: '📱',
    platform: 'iOS',
    downloads: 12890,
    rating: 4.5,
    category: 'Tools',
    description: 'Дополненная реальность для повседневных задач',
  },
  {
    id: 6,
    name: 'Pixel Art Studio',
    developer: 'PixelMasters',
    icon: '🎨',
    platform: 'Android',
    downloads: 19450,
    rating: 4.8,
    category: 'Graphics',
    description: 'Профессиональный редактор пиксель-арта',
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [view, setView] = useState<'store' | 'developer'>('store');

  const filteredApps = mockApps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.developer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = selectedPlatform === 'all' || app.platform === selectedPlatform;
    return matchesSearch && matchesPlatform;
  });

  return (
    <div className="min-h-screen bg-cyber-darker">
      <header className="border-b border-cyber-purple/30 bg-cyber-dark/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-purple to-cyber-pink flex items-center justify-center animate-glow-pulse">
                <Icon name="Zap" className="text-cyber-dark" size={24} />
              </div>
              <h1 className="text-2xl font-bold glow-text">CYBER-STORE</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setView('store')}
                className={`text-sm font-medium transition-colors ${view === 'store' ? 'text-cyber-purple' : 'text-gray-400 hover:text-white'}`}
              >
                Магазин
              </button>
              <button 
                onClick={() => setView('developer')}
                className={`text-sm font-medium transition-colors ${view === 'developer' ? 'text-cyber-purple' : 'text-gray-400 hover:text-white'}`}
              >
                Для разработчиков
              </button>
              <Button variant="outline" className="border-cyber-purple/50 hover:bg-cyber-purple/20">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {view === 'store' ? (
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
              {filteredApps.map((app) => (
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
      ) : (
        <main className="container mx-auto px-4 py-8">
          <section className="max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 glow-text">Панель разработчика</h2>
              <p className="text-gray-400">Управляйте своими приложениями и анализируйте статистику</p>
            </div>

            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-cyber-dark border border-cyber-purple/30">
                <TabsTrigger value="upload" className="data-[state=active]:bg-cyber-purple">
                  <Icon name="Upload" size={16} className="mr-2" />
                  Загрузить
                </TabsTrigger>
                <TabsTrigger value="apps" className="data-[state=active]:bg-cyber-purple">
                  <Icon name="Package" size={16} className="mr-2" />
                  Мои приложения
                </TabsTrigger>
                <TabsTrigger value="analytics" className="data-[state=active]:bg-cyber-purple">
                  <Icon name="BarChart3" size={16} className="mr-2" />
                  Аналитика
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upload" className="mt-6">
                <Card className="bg-cyber-dark border-cyber-purple/30">
                  <CardHeader>
                    <CardTitle>Загрузить приложение</CardTitle>
                    <CardDescription>Опубликуйте ваше приложение в CYBER-STORE</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Название приложения</label>
                      <Input placeholder="Введите название" className="bg-cyber-darker border-cyber-purple/30" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Описание</label>
                      <textarea 
                        placeholder="Опишите ваше приложение"
                        className="w-full min-h-[100px] p-3 rounded-md bg-cyber-darker border border-cyber-purple/30 focus:border-cyber-purple outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Платформа</label>
                        <select className="w-full p-2 rounded-md bg-cyber-darker border border-cyber-purple/30">
                          <option>Android (.apk/.aab)</option>
                          <option>iOS (.ipa)</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Категория</label>
                        <select className="w-full p-2 rounded-md bg-cyber-darker border border-cyber-purple/30">
                          <option>Games</option>
                          <option>Tools</option>
                          <option>Music</option>
                          <option>Finance</option>
                          <option>Graphics</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Файл приложения</label>
                      <div className="border-2 border-dashed border-cyber-purple/30 rounded-lg p-8 text-center hover:border-cyber-purple transition-colors cursor-pointer">
                        <Icon name="Upload" size={48} className="mx-auto mb-3 text-cyber-purple" />
                        <p className="text-sm text-gray-400">Перетащите файл или нажмите для выбора</p>
                        <p className="text-xs text-gray-500 mt-1">APK, AAB или IPA (макс. 200 МБ)</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gradient-to-r from-cyber-purple to-cyber-pink">
                      <Icon name="Upload" size={16} className="mr-2" />
                      Опубликовать приложение
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="apps" className="mt-6">
                <Card className="bg-cyber-dark border-cyber-purple/30">
                  <CardHeader>
                    <CardTitle>Мои приложения</CardTitle>
                    <CardDescription>Управление версиями и настройками</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockApps.slice(0, 3).map((app) => (
                        <div key={app.id} className="flex items-center justify-between p-4 rounded-lg bg-cyber-darker border border-cyber-purple/20">
                          <div className="flex items-center gap-4">
                            <div className="text-3xl">{app.icon}</div>
                            <div>
                              <h4 className="font-medium">{app.name}</h4>
                              <p className="text-sm text-gray-400">v1.0.0 • {app.platform}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="border-cyber-purple/30">
                              <Icon name="Edit" size={14} className="mr-1" />
                              Редактировать
                            </Button>
                            <Button variant="outline" size="sm" className="border-cyber-pink/30 text-cyber-pink">
                              <Icon name="Trash2" size={14} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="bg-cyber-dark border-cyber-purple/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-gray-400">Всего загрузок</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold">43,802</p>
                        <Icon name="Download" className="text-cyber-purple" size={32} />
                      </div>
                      <p className="text-xs text-green-400 mt-2">↑ 12% за неделю</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-cyber-dark border-cyber-purple/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-gray-400">Просмотров</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold">128,453</p>
                        <Icon name="Eye" className="text-cyber-blue" size={32} />
                      </div>
                      <p className="text-xs text-green-400 mt-2">↑ 8% за неделю</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-cyber-dark border-cyber-purple/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium text-gray-400">Средний рейтинг</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-bold">4.7</p>
                        <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={32} />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Из 892 отзывов</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-cyber-dark border-cyber-purple/30">
                  <CardHeader>
                    <CardTitle>Статистика по приложениям</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockApps.slice(0, 3).map((app) => (
                        <div key={app.id} className="flex items-center justify-between p-4 rounded-lg bg-cyber-darker border border-cyber-purple/20">
                          <div className="flex items-center gap-4">
                            <div className="text-2xl">{app.icon}</div>
                            <div>
                              <h4 className="font-medium">{app.name}</h4>
                              <p className="text-sm text-gray-400">{app.downloads.toLocaleString()} загрузок</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6 text-sm">
                            <div className="text-center">
                              <p className="text-gray-400">Просмотры</p>
                              <p className="font-medium">{(app.downloads * 3.2).toFixed(0)}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-gray-400">Рейтинг</p>
                              <p className="font-medium">{app.rating}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        </main>
      )}

      <footer className="border-t border-cyber-purple/30 bg-cyber-dark/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-cyber-purple">О проекте</h3>
              <p className="text-sm text-gray-400">
                CYBER-STORE — свободный магазин приложений с философией открытости и доступности для всех разработчиков.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-cyber-purple">Разработчикам</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Документация API</li>
                <li>Правила публикации</li>
                <li>Поддержка</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-cyber-purple">Пользователям</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Как установить</li>
                <li>Частые вопросы</li>
                <li>Безопасность</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-cyber-purple">Связаться</h3>
              <div className="flex gap-4">
                <Icon name="Github" size={20} className="text-gray-400 hover:text-cyber-purple cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-cyber-purple cursor-pointer transition-colors" />
                <Icon name="Mail" size={20} className="text-gray-400 hover:text-cyber-purple cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-cyber-purple/20 text-center text-sm text-gray-400">
            <p>© 2024 CYBER-STORE. Свободный магазин приложений для всех.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
