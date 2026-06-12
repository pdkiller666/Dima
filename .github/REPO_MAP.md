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
- `index.html` — основной HTML-документ, структура страницы
- `script.js` — клиентская логика на JavaScript
- `style.css` — стили и оформление
- `AGENT_INSTRUCTIONS.md` — инструкции для агента/разработчика
- `README.md` — описание проекта
- `.gitignore` — правила игнорирования файлов Git
- `.github/workflows/ci.yml` — конфигурация CI (непрерывная интеграция)
- `.github/workflows/deploy.yml` — конфигурация деплоя

## Точки входа
- **Запуск**: открыть `index.html` в браузере (статический сайт)
- **Основной файл**: `index.html` — точка входа приложения
- **CI/CD**: триггеры через GitHub Actions (`.github/workflows/`)

## Инварианты (что нельзя менять)
- `index.html` — должен оставаться главной точкой входа
- `script.js` и `style.css` — обязательные зависимости `index.html`
- `.github/workflows/` — конфигурация CI/CD не должна нарушаться
- `AGENT_INSTRUCTIONS.md` — инструкции для агента должны быть актуальны