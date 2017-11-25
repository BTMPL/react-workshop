#10 Sprzątanie propTypes

- nasze props (dla komponentu Tweet) rozrastają się - jeżeli dodamy jeszcze kilka 
zarządzanie nimi będzie utrudnione - zmieńmy je wszystkie w obiekt i jeden parametr - tweet
  - obiekt wciąż powinien zawierać w sobie:
    - user
      - userName
      - userAvatar
    - date
    - text
  - zdefiniuj propTypes dla tego obiektu, defaultProps nie będzie nam tutaj potrzebny
    - można go oczywiście zdefiniować, ale będzie zbyt rozbudowany na potrzeby warsztatu :)

- utwórz tablicę obiektów o powyższym kształcie i użyj jej w App jako źródła listy

Bonus: 

jeżeli chcesz przekazać wiele propów do komponentu, możesz zamiast

  <Component prop1={object.prop1} prop2={object.prop2} props3={object.prop3} />

użyć notacji

  <Component {...object} />

"Rozwinie" to obiekt na jego klucze i przekaże pary klucz i wartość. Przekazuje to WSZYSTKIE
klucze z obiektu więc nie zawsze może być pożądane