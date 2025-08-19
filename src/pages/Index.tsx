import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const cities = ['Северодвинск', 'Архангельск', 'Новодвинск'];
  
  const services = [
    {
      title: 'Установка сплит-систем',
      description: 'Монтаж настенных, кассетных и канальных кондиционеров любой сложности',
      icon: 'Settings',
      price: 'от 3 500 ₽',
      features: ['Гарантия 1 год', 'Выезд в день заказа', 'Сертифицированные мастера']
    },
    {
      title: 'Обслуживание и чистка',
      description: 'Профилактическое обслуживание, чистка фильтров и заправка фреоном',
      icon: 'Wrench',
      price: 'от 1 800 ₽',
      features: ['Диагностика системы', 'Чистка внутреннего блока', 'Проверка утечек']
    },
    {
      title: 'Ремонт кондиционеров',
      description: 'Устранение неисправностей, замена компрессоров и электронных плат',
      icon: 'Tool',
      price: 'от 2 500 ₽',
      features: ['Быстрая диагностика', 'Оригинальные запчасти', 'Гарантия на ремонт']
    }
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: '1 год гарантии на монтажные работы'
    },
    {
      icon: 'Clock',
      title: 'Быстрый выезд',
      description: 'Приезжаем в течение 2 часов после заявки'
    },
    {
      icon: 'Award',
      title: 'Опыт работы',
      description: 'Более 8 лет на рынке климатических услуг'
    },
    {
      icon: 'Users',
      title: 'Довольные клиенты',
      description: 'Более 2000 выполненных установок'
    }
  ];

  const brands = [
    'Daikin', 'Mitsubishi', 'Panasonic', 'LG', 'Samsung', 'Gree', 'Haier', 'Cooper&Hunter'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 text-center">
            <div className="flex items-center gap-3">
              <Icon name="MapPin" size={14} />
              <span className="text-sm">{cities.join(' • ')}</span>
            </div>
            <div className="hidden lg:block text-white/50">|</div>
            <div className="flex items-center gap-4">
              <a href="tel:+79115909175" className="flex items-center gap-1 text-sm hover:underline">
                <Icon name="Phone" size={14} />
                +7 (911) 590-91-75
              </a>
              <a href="https://wa.me/79115909175" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:underline">
                <Icon name="MessageCircle" size={14} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold text-primary">Климат29</div>
              <nav className="hidden lg:flex items-center gap-8">
                <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
                <a href="#advantages" className="text-gray-600 hover:text-primary transition-colors">Преимущества</a>
                <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
                <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-lg font-bold text-gray-900">+7 (8182) 123-45-67</div>
                <div className="text-sm text-gray-500">{cities.join(' • ')}</div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Установка и обслуживание
                <span className="block text-primary">кондиционеров</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональный монтаж, обслуживание и ремонт 
                систем кондиционирования в Северодвинске, Архангельске и Новодвинске
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                  <Icon name="Shield" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold text-gray-900">Гарантия 1 год</div>
                    <div className="text-sm text-gray-600">На все виды работ</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <div>
                    <div className="font-semibold text-gray-900">Выезд в день заказа</div>
                    <div className="text-sm text-gray-600">Без выходных</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="text-base px-6 bg-primary hover:bg-primary/90">
                  <Icon name="Calculator" size={18} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg" className="text-base px-6 border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Вызвать мастера
                </Button>
                <Button variant="outline" size="lg" className="text-base px-6 border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="MessageSquare" size={18} className="mr-2" />
                  Заказать консультацию
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <img 
                  src="/img/e172981c-27cd-4ccf-814b-e11ccee6c17b.jpg" 
                  alt="Установка кондиционера" 
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-lg p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">2000+</div>
                    <div className="text-sm">установок</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный комплекс услуг по установке, обслуживанию и ремонту климатического оборудования
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{service.price}</div>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Icon name="Check" size={16} className="text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Заказать услугу
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Работаем с ведущими брендами</h2>
            <p className="text-lg text-gray-600">Устанавливаем и обслуживаем оборудование любых производителей</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-sm border text-gray-700 font-semibold">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Профессиональный подход к каждому проекту</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={advantage.icon} size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-blue-100 mb-8">
                Получите бесплатную консультацию и точный расчет стоимости
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">+7 (911) 590-91-75</div>
                    <div className="text-blue-100">Работаем круглосуточно</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">WhatsApp</div>
                    <div className="text-blue-100">
                      <a href="https://wa.me/79115909175" target="_blank" rel="noopener noreferrer" className="hover:underline">+7 (911) 590-91-75</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">info@klimat29.ru</div>
                    <div className="text-blue-100">Ответим в течение 30 минут</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Города обслуживания</div>
                    <div className="text-blue-100">{cities.join(', ')}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6 text-center">Заказать консультацию</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                    <option>Выберите услугу</option>
                    <option>Установка кондиционера</option>
                    <option>Техническое обслуживание</option>
                    <option>Ремонт кондиционера</option>
                    <option>Консультация специалиста</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Дополнительная информация"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                  ></textarea>
                </div>
                <Button className="w-full py-3 text-lg bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Климат29</div>
              <p className="text-gray-400 mb-4">
                Профессиональные услуги по установке и обслуживанию кондиционеров в Архангельской области
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white">
                  <Icon name="Phone" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white">
                  <Icon name="Mail" size={16} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Установка сплит-систем</li>
                <li>Техническое обслуживание</li>
                <li>Ремонт кондиционеров</li>
                <li>Диагностика систем</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (911) 590-91-75</li>
                <li>WhatsApp: +7 (911) 590-91-75</li>
                <li>info@klimat29.ru</li>
                <li>Северодвинск, Архангельск, Новодвинск</li>
                <li>Работаем круглосуточно</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Климат29. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;