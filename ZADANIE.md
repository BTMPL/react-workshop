# #22 Redux

## Wprowadzenie

- nasza aplikacja będzie z czasem co raz większa, a zarządzanie stanem będzie bardziej skomplikowane
- Redux pomoże nam nieco zapanować nad magazynem danych

## Zadanie

- wykorzystaj utworzoną infrastrukturę
- stwórz reducer `tweetsReducer`, który przetrzymywać będzie stan:

```
{
  items: Array<Tweet>,
  count: Number
}
```

- stwórz stałą `TWEETS_ADDED`

- przechowuj dane w Redux, na razie bez wykorzystania action creatorów (całą logikę zawrzyj w komponencie)

## Wskazówki

- `<Provider />` i `connect()` są nazwanymi eksportami pakietu `react-redux`
- utwórz container:

```
const mapStateToProps = (state) => {
  return {
    items: ???,
    count: ???
  }
}
const AppConnected = connect(mapStateToProps)(App);
```

- jeżeli nie utworzysz `mapDispatchToProps`, Twój komponent otrzyma `this.props.dispatch()` który możesz użyć do wysłania akcji