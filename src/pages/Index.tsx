import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 1,
    title: "Введение в Python",
    description: "Фундаментальный курс программирования на Python для начинающих. Изучите основы синтаксиса, структуры данных и алгоритмы.",
    category: "Программирование",
    duration: "8 недель",
    level: "Начальный",
    enrolled: 1240
  },
  {
    id: 2,
    title: "Алгоритмы и структуры данных",
    description: "Углубленное изучение классических алгоритмов, методов оптимизации и эффективных структур данных.",
    category: "Информатика",
    duration: "12 недель",
    level: "Продвинутый",
    enrolled: 856
  },
  {
    id: 3,
    title: "Машинное обучение",
    description: "Освойте методы машинного обучения: регрессия, классификация, кластеризация и нейронные сети.",
    category: "ИИ и ML",
    duration: "10 недель",
    level: "Средний",
    enrolled: 2103
  },
  {
    id: 4,
    title: "Базы данных и SQL",
    description: "Проектирование реляционных баз данных, язык SQL, оптимизация запросов и индексирование.",
    category: "Базы данных",
    duration: "6 недель",
    level: "Средний",
    enrolled: 1567
  },
  {
    id: 5,
    title: "Веб-разработка",
    description: "Современные технологии веб-разработки: HTML, CSS, JavaScript, React и серверная разработка.",
    category: "Программирование",
    duration: "14 недель",
    level: "Средний",
    enrolled: 3421
  },
  {
    id: 6,
    title: "Информационная безопасность",
    description: "Основы криптографии, сетевой безопасности, анализ уязвимостей и защита систем.",
    category: "Безопасность",
    duration: "8 недель",
    level: "Продвинутый",
    enrolled: 945
  }
];

const categories = ["Все курсы", "Программирование", "Информатика", "ИИ и ML", "Базы данных", "Безопасность"];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("Все курсы");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Все курсы" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">EDUCATIONAL COURSES</h1>
                <p className="text-xs text-muted-foreground">Академическая библиотека курсов</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Курсы</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Библиотека образовательных курсов
          </h2>
          <p className="text-lg text-muted-foreground">
            Академические программы высшего качества для профессионального развития
          </p>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Поиск курсов..."
              className="pl-10 py-6 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="Все курсы" className="mb-8" onValueChange={setSelectedCategory}>
          <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {course.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Icon name="Users" size={14} />
                    <span>{course.enrolled}</span>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="BarChart" size={16} />
                    <span>{course.level}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  Записаться на курс
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">
              Курсы не найдены. Попробуйте изменить параметры поиска.
            </p>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="GraduationCap" size={32} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Академическое качество</h3>
            <p className="text-sm text-muted-foreground">
              Программы разработаны ведущими специалистами в своих областях
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={32} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Сертификация</h3>
            <p className="text-sm text-muted-foreground">
              Получите официальный сертификат о прохождении курса
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Building2" size={32} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Институциональный подход</h3>
            <p className="text-sm text-muted-foreground">
              Строгая методология и структурированное обучение
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Educational Courses. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
