import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const cities = ['Северодвинск', 'Архангельск', 'Новодвинск'];
  
  const services = [
    {
      title: 'Монтаж любой сложности',
      description: 'Профессиональная установка бытовых и промышленных кондиционеров',
      icon: 'Settings',
      price: 'от 3 000 ₽'
    },
    {
      title: 'Техническое обслуживание',
      description: 'Чистка, заправка и диагностика систем кондиционирования',
      icon: 'Wrench',
      price: 'от 1 500 ₽'
    },
    {
      title: 'Ремонт и замена',
      description: 'Быстрое устранение неисправностей любой сложности',
      icon: 'Tool',
      price: 'от 2 000 ₽'
    }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      text: 'Быстро и качественно установили кондиционер. Ребята профессионалы своего дела!',
      rating: 5
    },
    {
      name: 'Марина К.',
      text: 'Отличный сервис! Приехали точно в срок, работу выполнили аккуратно.',
      rating: 5
    },
    {
      name: 'Владимир С.',
      text: 'Рекомендую! Адекватные цены и гарантия на работы.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="text-lg font-semibold text-gray-900">КлиматСервис</div>
              <div className="hidden md:flex items-center gap-4">
                {cities.map((city) => (
                  <Badge key={city} variant="outline" className="text-sm">
                    {city}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-lg font-semibold text-gray-900">+7 (8182) 123-45-67</div>
                <div className="text-sm text-gray-600">Круглосуточно</div>
              </div>
              <Button size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Установка кондиционеров
                <span className="block text-primary">любой сложности</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональный монтаж, техническое обслуживание и ремонт 
                систем кондиционирования в Архангельской области
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} />
                  Гарантия 3 года
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Выезд в день заказа
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/e172981c-27cd-4ccf-814b-e11ccee6c17b.jpg" 
                alt="Установка кондиционера" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">500+ установок</div>
                    <div className="text-sm text-gray-600">за последний год</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по монтажу и обслуживанию климатического оборудования
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                    <Button variant="outline" className="w-full">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нашей работе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">"{review.text}"</p>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={40} className="text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Гарантия качества</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Мы даем 3 года гарантии на все виды монтажных работ и 1 год на техническое обслуживание. 
                Используем только сертифицированные материалы и современное оборудование.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3 года</div>
                  <div className="text-gray-600">гарантия на монтаж</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">техподдержка</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-600">качество работ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-300 mb-8">
                Получите бесплатную консультацию и расчет стоимости установки
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold">+7 (8182) 123-45-67</div>
                    <div className="text-gray-400">Круглосуточно</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold">info@klimat-service.ru</div>
                    <div className="text-gray-400">Ответим в течение часа</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold">Архангельская область</div>
                    <div className="text-gray-400">Выезжаем во все города области</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Заказать звонок</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Услуга</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                    <option>Установка кондиционера</option>
                    <option>Техническое обслуживание</option>
                    <option>Ремонт</option>
                    <option>Консультация</option>
                  </select>
                </div>
                <Button className="w-full py-3 text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;