# 📘 Дневник тренера – клиентская часть

Этот проект — клиентская часть приложения **"Дневник тренера"**, разработанная с использованием **Nuxt**, **Vue.js** и **TypeScript**.


## 🛠️ Стек технологий

- Nuxt 4
- Vue.js 3
- TypeScript
- Pinia 
- Vuetify
- CSS/SCSS

## 🚀 Запуск проекта локально

Для запуска следуйте инструкции ниже.

### 1. Клонируйте репозиторий и перейдите в директорию проекта:

```bash
git clone https://github.com/darkselia/coachdiary_nuxt.git
cd coachdiary_nuxt
```

### 2. Установите зависимости:

```bash
npm install
# или
yarn install
```

### 3. Создайте файл .env в корне проекта по примеру:

```env
VITE_API_URL=http://localhost:5173
VITE_DEBUG=(TRUE|FALSE)
```

### 4. Запустите проект в режиме разработки:

```bash
npm run dev
# или
yarn dev
```

Теперь проект доступен по адресу: http://localhost:5173

### 5. Для сборки проекта:

```bash
npm run generate
# или
yarn generate
```

## 📱 Функциональность

- Регистрация и авторизация
- Управление аккаунтом
- Управление нормативами
- Управление классами и учениками
- Управление результатами нормативов


## 🔧 Требования

- Node.js 16+
- npm или yarn
- Современный браузер с поддержкой ES6+

## 🤝 Связанные проекты

Серверная часть приложения доступна в репозитории [CoachDiary-backend](https://github.com/screenviolence/CoachDiary-backend)

## 📦 Структура проекта

```
coachdiary_nuxt/
├── app/                          # Основная директория приложения
│   ├── app.vue                   # Корневой компонент приложения
│   ├── components/               # Vue компоненты│   
│   ├── middleware/               # Nuxt middleware
│   ├── pages/                    # Страницы приложения (маршрутизация)
│   │   ├── app/                  # Защищённые страницы приложения
│   ├── stores/                   # Pinia хранилища состояния
│   ├── types/                    # TypeScript типы
│   └── utils/                    # Утилиты
├── public/                       # Статические файлы
├── eslint.config.mjs             # Конфигурация ESLint
├── nuxt.config.ts                # Конфигурация Nuxt
├── package.json                  # Зависимости проекта
├── tsconfig.json                 # Конфигурация TypeScript
└── README.md                     # Документация проекта
```

## 🔨 Скрипты

- `npm run dev` — Запуск сервера разработки
- `npm run build` — Сборка приложения для production
- `npm run generate` — Генерация статического сайта (SSG)
- `npm run preview` — Предпросмотр собранного проекта
- `npm run postinstall` — Подготовка Nuxt окружения (выполняется автоматически после установки)
- `npm run lint` — Проверка кода с помощью ESLint
- `npm run lint:fix` — Автоматическое исправление ошибок ESLint
