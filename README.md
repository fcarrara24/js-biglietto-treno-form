# consegna

Scrivere un programma che chieda all’utente:

- Il numero di chilometri da percorrere
- Età del passeggero
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

### milestone 1

Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

- innanzi tutto imbastisco la struttura grezza dell'html con gli input, con i 3 campi di testo e i bottoni per inviare o annullare

- imbastisco una struttura di output di controllo per i vari campi

- creo una funzione che si attiva al click su genera e prende tutti i valori in entrata, controllando che siano compilati correttamente

- dopo aver controllato che la distanza e nome e cognome siano sia validi, applico lo sconto alle categorie protette e mostro il messaggio all'utente

- creiamo una funzione randomica aggiuntiva per il controllo delle variabili carrozza e codice operativo

- creiamo una variabile di reset sia per i valori che per la visibilita degli altri contenuti

### MILESTONE 2:

Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

- aggiustiamo il css per mostrare il lavoro
