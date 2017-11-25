#8 Przekazywanie danych do komponentu

- dostęp do danych globalnych nie jest bezpieczny ani wydajny
- przekaż dane (userName, userAvatar) do komponentu Tweet jako parametry
- komponent Tweet powinien przekazać je dalej do UserDetails
  - pamiętaj, że do "przełączenia się w tryb JS" używamy znaczników {}
  - parametry będą dostępne jako pierwszy parametr (Obiekt) przekazany do komponentu

- przekaż treść tweetu jako parametr (text) do komponentu Tweet