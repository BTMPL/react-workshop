# #20 Komunikacja ze światem

## Wprowadzenie

- jedno-osobowy tweeter jest słaby - czas na komunikację ze światem!
- w Twoim projekcie pojawił się nowy plik - `api/tweeter.js`

## Zadanie

- użyj funkcji `get()` w celu pobrania danych z serwera i wyświetl je w swojej aplikacji
  ```
    get().then(response => {
      /**
       * response = {
       *  items: Array<Tweet>,
       *  count: Number
       * }
       */
    })
  ```
- użyj funkcji `create(userName, userAvatar, text)` w celu wysłania tweetu na serwer

### Inne

- ponieważ pobieramy teraz tweety innych użytkowników, oraz dodajemy swoje, nie powinniśmy używać indeksu jako `key` - zamiast tego użyj pola `id` stanowiącego część odpowiedzi z serwera
- czym różni się pesymistyczne i optymistyczne pobieranie danych?