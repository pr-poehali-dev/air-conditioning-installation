import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { toast } from 'sonner';

const SeverodvinskPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    {
      title: 'Установка кондиционеров в Северодвинске',
      description: 'Монтаж настенных, кассетных и канальных сплит-систем в Северодвинске любой сложности',
      icon: 'Settings',
      price: 'от 3 500 ₽',
      features: ['Гарантия 1 год', 'Выезд в день заказа', 'Сертифицированные мастера']
    },
    {
      title: 'Обслуживание кондиционеров',
      description: 'Техническое обслуживание и чистка кондиционеров в Северодвинске',
      icon: 'Wrench',
      price: 'от 1 800 ₽',
      features: ['Диагностика системы', 'Чистка внутреннего блока', 'Проверка утечек']
    },
    {
      title: 'Ремонт кондиционеров в Северодвинске',
      description: 'Устранение неисправностей кондиционеров любой сложности в городе',
      icon: 'Tool',
      price: 'от 2 500 ₽',
      features: ['Быстрая диагностика', 'Оригинальные запчасти', 'Гарантия на ремонт']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Кондиционеры в Северодвинске
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональная установка кондиционеров в Северодвинске. Сплит-системы, 
              монтаж, ремонт и обслуживание климатического оборудования
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-base px-8 bg-primary hover:bg-primary/90"
                onClick={() => setIsFormOpen(true)}
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Заказать установку
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => setIsFormOpen(true)}
              >
                <Icon name="Calculator" size={18} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Услуги по кондиционированию в Северодвинске
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
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => setIsFormOpen(true)}
                    >
                      Заказать услугу
                    </Button>
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
              Кондиционеры в Северодвинске - профессиональная установка
            </h2>
            <p className="text-gray-600 mb-6">
              Северодвинск - город с особыми климатическими условиями, где качественная система кондиционирования 
              особенно важна. Наша компания предлагает полный спектр услуг по установке кондиционеров в Северодвинске, 
              включая монтаж сплит-систем, техническое обслуживание и ремонт климатического оборудования.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Почему выбирают нас для установки кондиционеров в Северодвинске:
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Работаем в Северодвинске более 8 лет</li>
              <li>Установили более 500 кондиционеров в городе</li>
              <li>Гарантия 1 год на все монтажные работы</li>
              <li>Выезд мастера в день заказа</li>
              <li>Работаем с ведущими брендами: Daikin, Mitsubishi, LG, Samsung</li>
            </ul>

            <p className="text-gray-600">
              Кондиционеры в Северодвинске требуют особого подхода к установке из-за климатических особенностей региона. 
              Наши специалисты учитывают все нюансы при монтаже сплит-систем, обеспечивая надежную работу 
              оборудования круглый год.
            </p>
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Заказать в Северодвинске</h3>
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

export default SeverodvinskPage;