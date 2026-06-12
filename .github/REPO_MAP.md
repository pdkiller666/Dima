# REPO_MAP — pdkiller666/Dima
> Стек: HTML, CSS, JavaScript | Тип: Веб-приложение (статический сайт)

## Структура
```
/
├── .github/
│   ├── REPO_MAP.md
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── .gitignore
├── AGENT_INSTRUCTIONS.md
├── README.md
├── index.html
├── script.js
└── style.css
```

## Ключевые файлы
- `index.html` — основной HTML-документ, точка входа приложения
- `script.js` — клиентская логика на JavaScript
- `style.css` — стилизация интерфейса
- `AGENT_INSTRUCTIONS.md` — инструкции для агента/разработчика
- `README.md` — описание проекта
- `.github/workflows/ci.yml` — конфигурация непрерывной интеграции
- `.github/workflows/deploy.yml` — конфигурация развертывания
- `.gitignore` — список игнорируемых файлов Git

## Точки входа
- **Основная**: `index.html` — открывается в браузере
- **CI/CD**: `.github/workflows/ci.yml` и `.github/workflows/deploy.yml` — запускаются при пушах/PR

## Инварианты (что нельзя менять)
- `index.html` должен оставаться корневым файлом приложения
- `script.js` и `style.css` должны быть в корне и подключаться из `index.html`
- `.github/workflows/` — структура пайплайнов CI/CD
- `AGENT_INSTRUCTIONS.md` — обязательный файл для контекста разработки