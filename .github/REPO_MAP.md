# REPO_MAP — pdkiller666/Dima
> Стек: HTML, CSS, JavaScript | Тип: Веб-приложение (фронтенд)

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
- `index.html` — основной HTML-документ, точка входа приложения
- `script.js` — клиентская логика на JavaScript
- `style.css` — стили и оформление страницы
- `.github/workflows/ci.yml` — конфигурация непрерывной интеграции
- `.github/workflows/deploy.yml` — конфигурация развертывания
- `AGENT_INSTRUCTIONS.md` — инструкции для агента/разработчика
- `README.md` — описание проекта
- `.gitignore` — список игнорируемых файлов Git

## Точки входа
- **Основная точка входа**: `index.html` — открывается в браузере
- **Запуск**: просто открыть `index.html` в любом современном браузере

## Инварианты (что нельзя менять)
- `index.html` — основной файл приложения, должен оставаться точкой входа
- `script.js` — вся клиентская логика должна быть в этом файле
- `style.css` — все стили должны быть в этом файле
- `.github/workflows/` — конфигурации CI/CD не должны удаляться