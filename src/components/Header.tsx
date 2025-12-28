import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface HeaderProps {
  view: 'store' | 'developer';
  onViewChange: (view: 'store' | 'developer') => void;
}

export default function Header({ view, onViewChange }: HeaderProps) {
  const [registerType, setRegisterType] = useState<'user' | 'developer'>('user');

  return (
    <header className="border-b border-cyber-purple/30 bg-cyber-dark/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/IMG_4821.png" 
              alt="CYBER-STORE" 
              className="w-12 h-12 rounded-full animate-glow-pulse"
            />
            <h1 className="text-2xl font-bold glow-text">CYBER-STORE</h1>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <button 
              onClick={() => onViewChange('store')}
              className={`text-sm font-medium transition-colors ${view === 'store' ? 'text-cyber-purple' : 'text-gray-400 hover:text-white'}`}
            >
              Приложения
            </button>
            <button 
              onClick={() => onViewChange('store')}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Игры
            </button>
            <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Блог
            </button>
            <button 
              onClick={() => onViewChange('developer')}
              className={`text-sm font-medium transition-colors ${view === 'developer' ? 'text-cyber-purple' : 'text-gray-400 hover:text-white'}`}
            >
              Разработчикам
            </button>
            <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Помощь
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Icon name="Search" size={20} />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-cyber-purple hover:bg-cyber-purple/80 hidden md:flex">
                  Регистрация
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-cyber-dark border-cyber-purple/50">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold glow-text">Регистрация</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Выберите, как вы хотите зарегистрироваться
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setRegisterType('user')}
                      className={`p-6 rounded-lg border-2 transition-all ${
                        registerType === 'user'
                          ? 'border-cyber-purple bg-cyber-purple/10 glow-border'
                          : 'border-cyber-purple/30 hover:border-cyber-purple/50'
                      }`}
                    >
                      <Icon name="User" size={40} className="mx-auto mb-3 text-cyber-purple" />
                      <p className="font-bold text-lg">Как потребитель</p>
                      <p className="text-xs text-gray-400 mt-2">Скачивайте и используйте приложения</p>
                    </button>
                    <button
                      onClick={() => setRegisterType('developer')}
                      className={`p-6 rounded-lg border-2 transition-all ${
                        registerType === 'developer'
                          ? 'border-cyber-pink bg-cyber-pink/10 glow-border'
                          : 'border-cyber-purple/30 hover:border-cyber-purple/50'
                      }`}
                    >
                      <Icon name="Code" size={40} className="mx-auto mb-3 text-cyber-pink" />
                      <p className="font-bold text-lg">Как разработчик</p>
                      <p className="text-xs text-gray-400 mt-2">Публикуйте свои приложения</p>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="bg-cyber-darker border-cyber-purple/30" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя пользователя</label>
                      <Input 
                        placeholder="username" 
                        className="bg-cyber-darker border-cyber-purple/30" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Пароль</label>
                      <Input 
                        type="password" 
                        placeholder="••••••••" 
                        className="bg-cyber-darker border-cyber-purple/30" 
                      />
                    </div>
                    {registerType === 'developer' && (
                      <div>
                        <label className="text-sm font-medium mb-2 block">Название студии (опционально)</label>
                        <Input 
                          placeholder="Your Studio Name" 
                          className="bg-cyber-darker border-cyber-purple/30" 
                        />
                      </div>
                    )}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-cyber-purple to-cyber-pink hover:opacity-90">
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Зарегистрироваться
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}