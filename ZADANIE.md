# #23 Wiele reducerów

## Wprowadzenie

- w naszej aplikacji mamy więcej danych niż tylko tweety
- wyświetlmy listę użytkowników

## Zadanie

- stwórz nowy reducer - `usersReducer`, który przetrzymywać będzie stan:

```
{
  users: Array<string>,
}
```

- niech ten reducer również reaguje na akcję `TWEETS_ADDED`
- przekaż dane do aplikacji i wyrenderuj listę użytkowników tweetera (musisz utworzyć nowy komponent)

## Wskazówki

- na potrzeby tego zadania, nasza funkcja `get()` zwraca wszystkie tweety
- użyto funkcji `combineReducers` z `react-redux` w celu dodania reducera do aplikacji
- zwróć uwagę, że ogólny kształt naszego store zmienił się na:

```
reduxStore = {
  usersReducer: {
    users: Array<string>
  },
  tweetsReducer: {
    items: Array<Tweet>,
    count: Number
  }
}
```

musisz uwzględnić to w `mapStateToProps`