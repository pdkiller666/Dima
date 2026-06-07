# REPO_MAP — pdkiller666/Dima
> Стек: HTML, CSS, JavaScript | Тип: Фронтенд-приложение (статический сайт)

## Структура
```
/
├── .github/
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
- `ci.yml` — конфигурация непрерывной интеграции (GitHub Actions)
- `deploy.yml` — конфигурация деплоя (GitHub Actions)
- `AGENT_INSTRUCTIONS.md` — инструкции для агента (документация)
- `README.md` — описание репозитория
- `.gitignore` — правила игнорирования файлов Git

## Точки входа
- **Основная**: `index.html` — открывается в браузере
- **CI/CD**: `.github/workflows/ci.yml` и `.github/workflows/deploy.yml` — запускаются при пушах/PR

## Инварианты (что нельзя менять)
- `index.html` должен оставаться корневой точкой входа
- `script.js` и `style.css` — единственные ресурсы, подключаемые к `index.html`
- Структура `.github/workflows/` не должна нарушаться для корректной работы CI/CD