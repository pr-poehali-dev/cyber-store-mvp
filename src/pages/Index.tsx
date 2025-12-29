import { useState } from 'react';
import Header from '@/components/Header';
import StoreView from '@/components/StoreView';
import DeveloperPanel from '@/components/DeveloperPanel';
import Footer from '@/components/Footer';

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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [view, setView] = useState<'store' | 'developer'>('store');

  const filteredApps = mockApps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.developer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = selectedPlatform === 'all' || app.platform === selectedPlatform;
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    return matchesSearch && matchesPlatform && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-cyber-darker">
      <Header view={view} onViewChange={setView} />
      
      {view === 'store' ? (
        <StoreView 
          apps={filteredApps}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ) : (
        <DeveloperPanel mockApps={mockApps} />
      )}

      <Footer />
    </div>
  );
}