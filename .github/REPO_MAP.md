# REPO_MAP — pdkiller666/Dima
> Стек: HTML, CSS, JavaScript | Тип: Веб-приложение (статический сайт)

## Структура
```
.github/
├── REPO_MAP.md
└── workflows/
    ├── ci.yml
    └── deploy.yml
.gitignore
AGENT_INSTRUCTIONS.md
README.md
index.html
script.js
style.css
```

## Ключевые файлы
- **index.html** — основной HTML-документ, структура страницы
- **script.js** — клиентская логика на JavaScript
- **style.css** — стили и оформление
- **AGENT_INSTRUCTIONS.md** — инструкции для агента/разработчика
- **README.md** — описание проекта
- **.gitignore** — правила игнорирования файлов Git
- **.github/workflows/ci.yml** — CI-пайплайн (проверки)
- **.github/workflows/deploy.yml** — пайплайн деплоя

## Точки входа
- **index.html** — единственная точка входа (открывается в браузере)
- Запуск: открыть `index.html` в любом современном браузере

## Инварианты (что нельзя менять)
- **index.html** — корневой файл, точка входа приложения
- **.github/workflows/** — конфигурация CI/CD (изменять только при необходимости)
- **AGENT_INSTRUCTIONS.md** — инструкции для автоматизации