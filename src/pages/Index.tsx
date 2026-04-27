import { Sprout, Leaf, Sparkles, Users, BookOpen, Map, Plus, Minus, Mail } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Нужен ли опыт садоводства для участия в туре?",
      answer:
        "Совсем нет! Наши туры созданы для начинающих городских садоводов. Опытные гиды объяснят всё с нуля — от выбора контейнеров до построения гидропонной системы. Главное — интерес и желание вырастить первый урожай на балконе.",
    },
    {
      question: "Что входит в стоимость тура?",
      answer:
        "В стоимость включены все экскурсии на городские фермы и теплицы, мастер-классы по созданию мини-огорода, набор семян и рассады на память, доступ к приложению с картой маршрутов и календарём посадок, питание во время экскурсий и трансфер между объектами.",
    },
    {
      question: "Какие города охватывают маршруты?",
      answer:
        "Сейчас работаем по Москве, Санкт-Петербургу и Казани. В каждом городе — уникальные объекты: вертикальные сады в бизнес-центрах, зелёные крыши, общественные огороды и современные гидропонные фермы. Расширяем географию каждый сезон.",
    },
    {
      question: "Как записаться на тур?",
      answer:
        "Оставьте заявку через форму на сайте или напишите нам напрямую. Группы небольшие — до 12 человек, чтобы каждый получил максимум внимания от эксперта. Туры проходят круглый год, часть объектов — крытые теплицы и фермы.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B1A0F] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/4b3b7eda-055f-4515-89b4-bbb3b20c7f34/files/856e07cc-e529-4a89-b18f-dd880aab78b5.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#0B1A0F]/90" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Sprout className="w-5 h-5 text-green-400" />
            <span className="font-medium text-balance">Городской огород</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Программа", "О нас", "Маршруты", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Войти
            </a>
            <Button className="bg-green-500 text-white hover:bg-green-400 rounded-full px-6">Записаться</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-green-500/40 backdrop-blur rounded-full">
            <span className="text-sm font-medium text-green-300">Туры по городскому садоводству</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">От балкона до крыши.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Туры по лучшим примерам городского садоводства — вертикальные сады, зелёные крыши, гидропоника и живые сообщества urban farmers. Вдохновляйтесь и создавайте свой огород.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-400 rounded-full px-8 py-4 text-lg">
              Записаться на тур
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Смотреть программу
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Leaf className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">Экологично · Практично · Вдохновляюще</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Expert Tours */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-500/30 mb-6">
                <Map className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Экскурсии на фермы</h3>
              <p className="text-white/80 leading-relaxed">Городские фермы, теплицы и вертикальные сады — изнутри, с экспертами.</p>
            </div>

            {/* Masterclasses */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-500/30 mb-6">
                <BookOpen className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Мастер-классы</h3>
              <p className="text-white/80 leading-relaxed">Создайте мини-огород на балконе прямо во время тура — забираете с собой.</p>
            </div>

            {/* Hydroponics */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-500/30 mb-6">
                <Sparkles className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Гидро- и аэропоника</h3>
              <p className="text-white/80 leading-relaxed">Знакомство с современными технологиями выращивания без почвы.</p>
            </div>

            {/* Community */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 ring-1 ring-green-500/30 mb-6">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Сообщество</h3>
              <p className="text-white/80 leading-relaxed">Общение с urban farmers и единомышленниками в общественных садах.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ваша программа тура</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Каждый день — новый объект, новые знания и живое вдохновение.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-green-500/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Зелёные крыши</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Посещаем зелёные крыши жилых домов и бизнес-центров — знакомимся с архитекторами и жителями, которые превратили крышу в огород.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-green-500/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Городские фермы</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Экскурсия на вертикальные фермы и теплицы — видим, как выращивают зелень, томаты и микрозелень в самом центре города.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-green-500/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Мастер-класс</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Практикум по созданию мини-огорода на балконе: контейнеры, грунт, полив, первые культуры. Уходите с готовым набором для посадки.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-green-500/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Общественный сад</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Финал в городском общественном саду — знакомство с сообществом, обмен опытом и дегустация свежего урожая прямо с грядки.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-green-500 text-white hover:bg-green-400 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Проверить наличие мест
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать о турах по городскому садоводству — от программы до того, что взять с собой.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Записаться на тур</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Ваше полное имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Что хотите узнать?
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Расскажите о вашем интересе к городскому садоводству..."
                    />
                  </div>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-500 rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Хотите организовать корпоративный тур, партнёрство или просто задать вопрос? Пишите — отвечаем в течение одного рабочего дня.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <Sprout className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Команда «Городской огород»</h4>
                      <p className="text-gray-600">Эксперты по urban farming</p>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-500 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать нам
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Sprout className="w-6 h-6 text-green-400" />
                  <span className="text-xl font-semibold">Городской огород</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Туры по лучшим примерам городского садоводства. Вертикальные сады, зелёные крыши, контейнерное озеленение и гидропоника — от балкона до крыши.
                </p>
              </div>

              {/* Program Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПРОГРАММА</h3>
                <ul className="space-y-3">
                  {["Маршруты", "Цены", "Мастер-классы", "Фотогалерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О НАС</h3>
                <ul className="space-y-3">
                  {["Наша миссия", "Команда", "Приложение", "Сообщество"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Справочный центр", "Контакты", "Вопросы и ответы", "Условия"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Календарь туров и советы по огороду</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-green-500 text-white hover:bg-green-400 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Городской огород: от балкона до крыши</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
