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
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-purple to-cyber-pink flex items-center justify-center animate-glow-pulse">
              <Icon name="Zap" className="text-cyber-dark" size={24} />
            </div>
            <h1 className="text-2xl font-bold glow-text">CYBER-STORE</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onViewChange('store')}
              className={`text-sm font-medium transition-colors ${view === 'store' ? 'text-cyber-purple' : 'text-gray-400 hover:text-white'}`}
            >
              Магазин
            </button>
            <button 
              onClick={() => onViewChange('developer')}
              className={`text-sm font-medium transition-colors ${view === 'developer' ? 'text-cyber-purple' : 'text-gray-400 hover:text-white'}`}
            >
              Для разработчиков
            </button>
            <Button variant="outline" className="border-cyber-purple/50 hover:bg-cyber-purple/20">
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-cyber-purple to-cyber-pink hover:opacity-90">
                  <Icon name="UserPlus" size={16} className="mr-2" />
                  Регистрация
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-cyber-dark border-cyber-purple/50">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold glow-text">Регистрация</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Выберите тип аккаунта и заполните данные
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setRegisterType('user')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        registerType === 'user'
                          ? 'border-cyber-purple bg-cyber-purple/10'
                          : 'border-cyber-purple/30 hover:border-cyber-purple/50'
                      }`}
                    >
                      <Icon name="User" size={32} className="mx-auto mb-2 text-cyber-purple" />
                      <p className="font-medium">Обычная</p>
                      <p className="text-xs text-gray-400 mt-1">Для скачивания приложений</p>
                    </button>
                    <button
                      onClick={() => setRegisterType('developer')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        registerType === 'developer'
                          ? 'border-cyber-pink bg-cyber-pink/10'
                          : 'border-cyber-purple/30 hover:border-cyber-purple/50'
                      }`}
                    >
                      <Icon name="Code" size={32} className="mx-auto mb-2 text-cyber-pink" />
                      <p className="font-medium">Для разработчиков</p>
                      <p className="text-xs text-gray-400 mt-1">Публикация приложений</p>
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
          </nav>
        </div>
      </div>
    </header>
  );
}
