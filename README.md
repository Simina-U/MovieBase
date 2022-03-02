# Moviebase

![movie.png](./docs/movie.png)

## Tehnologii folosite

### [next.js](https://nextjs.org/docs/getting-started)

Este serverul nostru și are grijă ca partea de React să se încarce cum trebuie.

### [react](https://reactjs.org/docs/hello-world.html)

Se ocupă de UI. Noi scriem componente care depind de `state`. React are grijă să afișeze în DOM
componentele noastre în dependență de `state`. Matematic vorbind:

```
UI = React(state)
```

Folosim [🪝hooks](https://reactjs.org/docs/hooks-intro.html) pentru cod frumos.

### [chakra-ui](https://chakra-ui.com/docs/principles)

Ne permite să scriem CSS fără să scriem CSS 🤩. Și mai are și multe componente gata făcute. Nu e
nevoie să-l folosiți pentru a scrie cod, CSS-ul poate fi folosit în continuare. Dar, există opțiunea
să o faceți mai simplu, diferit.

### [swr](https://swr.vercel.app/)

Are grijă de operațiile async din React.

### [mongodb](https://docs.mongodb.com/drivers/node/usage-examples)

O bază de date populară.

### [TMDB](https://developers.themoviedb.org/3/search/search-movies)

The Movie Database oferă un API puternic, bogat în funcționalități. De la ei vom lua filmele și tot
ce ne interesează despre filme.

TODO:

✔ 1. Completează aplicația cu mai multe detalii (exemple: adaugă mai multe detalii pe search, schimbă lista cu rezultate, adaugă mai multe detalii pe pagina unui film, schimbă design-ul aplicației, etc...)
✔ 2. Implementează watchlist-ul. Utilizatorul trebuie să poată adăuga ușor un film în watchlist, apoi ar trebui să poată vedea aceste filme într-o listă undeva

✔ 3. Implementează istoricul. Asemănător cu watchlist-ul, dar poți adăuga funcționalități noi. De exemplu, atunci când adaugi un film în istoric, îl ștergi din watchlist dacă era acolo. Sau să poți modifica data când ai privit un anumit film (în caz că ți-ai adus aminte că de fapt ai privit un film acum un an și vrei să-l ai frumos în aplicație)
✔ 4. Implementează recomandările. Pagina cu recomandări ar trebui să includă câteva filme sugerate utilizatorului. Aici poți să te bazezi pe watchlist, istoric și TMDB (care are câteva api-uri utile pentru asta). Poți face mai multe tipuri de recomandări
✔ 5. Combină toate funcționalitățile pentru a crea homepage-ul. Aș pune câte o parte din fiecare funcționalitate, de exemplu 3 filme din istoric, 3 filme din watchlist, 3 recomandări, un search rapid, etc...
X 6. Bonus. Te provoc să adaugi ceva nou, orice consideri interesant
