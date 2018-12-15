# to-do-list app

## Kroki tworzenia projektu:

### Kroki w HTML

* tworzę sobie, najprostrzy formularz `<form></form?`,
* dodaje w nim `input` oraz przycisk `button`, który będzie służył do wysyłania (to będzie mój `submit`),
*tworzę pustą listę `ul`. Elementy `li` będą dodawane do niej dynamicznie.

### Kroki w JavaScript

* nasłuchujęna każdy element tj. `$form`, `$input` oraz `$button`,
* tworzę zmienną (task), w której będą przechowywane wartości (`value`), które zostają wpisane do `$input`,
* tworzę elementy `li`,
* następnie do mojego `li` (task) przypisuję wartość pobraną z `$input`,
* ostatni krok, to wykorzystuję metodę `Node.appendChild()`, gdzie moje `li` lub inaczej moją zmienną `task` dodaje do listy `ul`,
* zeruję wartości w `input`