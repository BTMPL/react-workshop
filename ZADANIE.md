# #15 Przekazywanie danych do rodzica

## Wprowadzenie

- nasze dane są tylko w komponencie TweetForm - co jeżeli chcemy dodać je do listy?
- przekazywanie danych do rodziców za pomocą callbacków!

## Zadanie

- dodaj do TweetForm callback `onSubmit`, który wywołasz, jeżeli podano tekst i wciśnięto klawisz (jeżeli tekst jest pusty, nie wywołuj funkcji)

- niech to rodzic `TweetForm` - `App` - wyświetli wartość pola (metodą `handleSubmit`)

- użyj props by wymusić przekazanie `onSubmit`, lub `defaultProps` by dodać pustą funkcję