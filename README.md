# Moviebase

## Tehnologii folosite

### [next.js](https://nextjs.org/docs/getting-started)

Este serverul nostru și are grijă ca partea de React să se încarce cum trebuie.

### [react](https://reactjs.org/docs/hello-world.html)

Se ocupă de UI. Noi scriem componente care depind de `state`. React are grijă să afișeze în DOM
componentele noastre în dependență de `state`. Matematic vorbind:

```
UI = React(state)
```

Folosesc [🪝hooks](https://reactjs.org/docs/hooks-intro.html) pentru cod frumos.

### [chakra-ui](https://chakra-ui.com/docs/principles)

Ne permite să scriem CSS fără să scriem CSS 🤩. Și mai are și multe componente gata făcute. Nu e
nevoie să-l folosiți pentru a scrie cod, CSS-ul poate fi folosit în continuare. Dar, există opțiunea
să o facem mai simplu, diferit.

### [swr](https://swr.vercel.app/)

Are grijă de operațiile async din React.

### [mongodb](https://docs.mongodb.com/drivers/node/usage-examples)

O bază de date populară.

### [TMDB](https://developers.themoviedb.org/3/search/search-movies)

The Movie Database oferă un API puternic, bogat în funcționalități. De la ei vom lua filmele și tot
ce ne interesează despre filme.
