import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { toast } from 'sonner';

const ArkhangelskPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    {
      title: 'Установка кондиционеров Архангельск',
      description: 'Профессиональный монтаж сплит-систем в Архангельске любой сложности',
      icon: 'Settings',
      price: 'от 3 500 ₽',
      features: ['Гарантия 1 год', 'Выезд в день заказа', 'Сертифицированные мастера']
    },
    {
      title: 'Сплит-системы Архангельск',
      description: 'Продажа и установка сплит-систем ведущих брендов в Архангельске',
      icon: 'Snowflake',
      price: 'от 25 000 ₽',
      features: ['Daikin, Mitsubishi, LG', 'Гарантия производителя', 'Доставка по городу']
    },
    {
      title: 'Ремонт кондиционеров Архангельск',
      description: 'Восстановление работоспособности климатической техники в Архангельске',
      icon: 'Tool',
      price: 'от 2 500 ₽',
      features: ['Диагностика бесплатно', 'Оригинальные запчасти', 'Гарантия на ремонт']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Установка кондиционеров Архангельск
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Кондиционеры в Архангельске от проверенных производителей. Установка сплит-систем, 
              продажа климатической техники, ремонт и обслуживание
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+79115909175"
                className="inline-flex items-center justify-center h-12 text-base px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors font-medium"
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Заказать звонок
              </a>
              <a 
                href="https://wa.me/79115909175" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 text-base px-8 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-md transition-colors font-medium"
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Кондиционеры и сплит-системы в Архангельске
            </h2>
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
                    <div className="flex gap-2">
                      <a 
                        href="tel:+79115909175"
                        className="flex items-center justify-center flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-md transition-colors text-sm font-medium"
                      >
                        <Icon name="Phone" size={16} className="mr-1" />
                        Звонок
                      </a>
                      <a 
                        href="https://wa.me/79115909175" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center flex-1 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-md transition-colors text-sm font-medium"
                      >
                        <Icon name="MessageCircle" size={16} className="mr-1" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Установка кондиционеров в Архангельске - цены и услуги
            </h2>
            <p className="text-gray-600 mb-6">
              Архангельск - крупнейший город региона, где установка кондиционеров пользуется высоким спросом. 
              Мы предлагаем полный комплекс услуг по кондиционированию в Архангельске: от продажи 
              климатической техники до профессионального монтажа и последующего обслуживания.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Установка кондиционеров в Архангельске - наши преимущества:
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Более 1000 установленных кондиционеров в Архангельске</li>
              <li>Работаем с проверенными брендами: Daikin, Mitsubishi, LG, Samsung, Panasonic</li>
              <li>Сплит-системы для квартир, офисов и коммерческих помещений</li>
              <li>Быстрый монтаж - от 2 часов</li>
              <li>Гарантия 1 год на установку, до 5 лет на оборудование</li>
              <li>Бесплатная консультация и выезд мастера по Архангельску</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Сплит-системы в Архангельске - популярные модели:
            </h3>
            <p className="text-gray-600 mb-6">
              В климатических условиях Архангельска особенно востребованы инверторные сплит-системы, 
              которые эффективно работают при низких температурах. Мы устанавливаем кондиционеры 
              различной мощности: от компактных моделей для небольших комнат до мощных систем 
              для торговых центров и офисных зданий.
            </p>

            <p className="text-gray-600">
              Кондиционеры в Архангельске требуют профессионального подхода к установке и обслуживанию. 
              Наши мастера имеют многолетний опыт работы в условиях северного климата и гарантируют 
              качественный монтаж с учетом всех технических требований.
            </p>
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Заказать в Архангельске</h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsFormOpen(false)}
                className="p-2 h-8 w-8"
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (!formData.name || !formData.phone) {
                  toast.error('Заполните обязательные поля');
                  return;
                }
                toast.success('Заявка отправлена! Мы свяжемся с вами в течение 15 минут.');
                setFormData({ name: '', phone: '', service: '', message: '' });
                setIsFormOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <input 
                  type="text" 
                  placeholder="Ваше имя*"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Телефон*"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <textarea 
                  placeholder="Дополнительная информация"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>
              <Button type="submit" className="w-full py-3 bg-primary hover:bg-primary/90">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить заявку
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArkhangelskPage;