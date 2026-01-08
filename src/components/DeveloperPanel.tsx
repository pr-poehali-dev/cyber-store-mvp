import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

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

interface DeveloperPanelProps {
  mockApps: App[];
}

export default function DeveloperPanel({ mockApps }: DeveloperPanelProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 200 * 1024 * 1024) {
        toast({
          title: 'Ошибка',
          description: 'Файл слишком большой (макс. 200 МБ)',
          variant: 'destructive',
        });
        return;
      }
      setSelectedFile(file);
      toast({
        title: 'Файл загружен',
        description: `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} МБ)`,
      });
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 200 * 1024 * 1024) {
        toast({
          title: 'Ошибка',
          description: 'Файл слишком большой (макс. 200 МБ)',
          variant: 'destructive',
        });
        return;
      }
      setSelectedFile(file);
      toast({
        title: 'Файл загружен',
        description: `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} МБ)`,
      });
    }
  };

  return (
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
                  <input
                    type="file"
                    id="file-upload"
                    accept=".apk,.aab,.ipa"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`block border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                      isDragging ? 'border-cyber-purple bg-cyber-purple/10' : 'border-cyber-purple/30 hover:border-cyber-purple'
                    }`}
                  >
                    <Icon name="Upload" size={48} className="mx-auto mb-3 text-cyber-purple" />
                    {selectedFile ? (
                      <>
                        <p className="text-sm text-cyber-purple font-medium">{selectedFile.name}</p>
                        <p className="text-xs text-gray-400 mt-1">{(selectedFile.size / 1024 / 1024).toFixed(2)} МБ</p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-gray-400">Перетащите файл или нажмите для выбора</p>
                        <p className="text-xs text-gray-500 mt-1">APK, AAB или IPA (макс. 200 МБ)</p>
                      </>
                    )}
                  </label>
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
  );
}