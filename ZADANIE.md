# #21 Stronicowanie

## Wprowadzenie

- nasze API zwraca 10 ostatnich wpisów - ale w tym momencie pewnie jest ich już więcej
- musimy dodać mechanizm pozwalający na pobieranie starszych informacji

## Zadanie

- dodaj komponent `Next` (`./src/components/Next.js`, z eksportem domyślnym), który przyjmie 1 props `onNext` 
  - komponent powinien renderować guzik - `<button>`, który po kliknięciu wywoła `onNext`
- to komponent `App` powinien decydować czy pokazać `<Next />` i którą stronę wyników załadować po kliknięciu
- nowo załadowane wyniki dodaj na koniec listy