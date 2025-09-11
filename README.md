# REUQ-Brain (Working name)
Interní nástroj pro správu IoT zařízení a zákazníků.

## Instalace:
Důležité je samozřejmě stáhnout repositář, poté je nutné ve website složce zadat klasicky:
````
npm i
````

Poté je to ready-to-go

## Spuštění
Je nastaven v rootu projektu package.json tudíž i v kořenu lze do terminálu zadat:
````
npm run dev
````

## Rules:
- ukládat soubory ve formátu camel-case např.: **hero-section.tsx**
- udržovat konzistenci kódu
- používat typescript
- změny pushovat na vlastní branch => poté udělat pull-request (vzájemná kontrola)

## Použité Balíčky:
- SCSS (Styling) : https://sass-lang.com/documentation/
- MUI (Styling + PreDone components) : https://mui.com/
- Axios (Data Fetching) : https://axios-http.com/docs/intro
- React-Redux (State Managment) : https://react-redux.js.org/introduction/getting-started

## Hierarchie:
```
Reuq_Brain/
├──api/ (Backend => předběžně vytvořeno)
├── website/ (Frontend)
│   ├── public/
│   ├── src/
│   │   ├── assets/ (Složka pro obrázky a videa)
│   │   ├── pages/ (Složka pro stránky)
│   │   ├── schema/ (Složka pro ukládání type a interface)
│   │   ├── ui-components/ (Složka pro tvorbu komponentů)
│   │   ├── store/ (Složka pro setup Reduxu)
│   │   ├── styles/ (Složka pro ukládání Scss)
│   │   └── App.jsx
│   ├── index.html
│   └── vite.config.js
├── package.json (Globální package.json)
└── README.md
```
