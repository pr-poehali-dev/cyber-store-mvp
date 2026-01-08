import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
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
              <a href="https://x.com/aidarmiftav1e?s=21" target="_blank" rel="noopener noreferrer">
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-cyber-purple cursor-pointer transition-colors" />
              </a>
              <a href="mailto:aidarchik.maa@gmail.com">
                <Icon name="Mail" size={20} className="text-gray-400 hover:text-cyber-purple cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cyber-purple/20 text-center text-sm text-gray-400">
          <p>© 2024 CYBER-STORE. Свободный магазин приложений для всех.</p>
        </div>
      </div>
    </footer>
  );
}