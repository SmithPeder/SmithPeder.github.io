const questions = [
  {
    question: "Hva er et hovedkort (motherboard)",
    answer1:
      "Et kretskort i en datamaskin der enheter som CPU, RAM, og andre enheter kobles sammen.",
    answer2: "En minnekrets som tar vare på systemets innstillinger.",
    answer3: "En prosessor for tynne mobiltelefoner.",
    answer4: "Bunnplata i et PC kabinett.",
    correctAnswer: 0
  },
  {
    question: "Hva er en pakke (packet) i nettverkssammenheng?",
    answer1:
      "En datablokk av fast lengde som sendes gjennom nettverket, fra avsender til mottaker.",
    answer2:
      "En datamelding som har ankommet og som står i kø for å bli levert til mottakermaskinen.",
    answer3:
      "Den datamengden som utveksles mellom to datamaskiner som kommuniserer via nettverket.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 0
  },
  {
    question:
      "Hvilken av disse lagringsenhetene er ikke en sekundærlagrings-enhet?",
    answer1: "En harddisk.",
    answer2: "En datamaskins hurtigbuffer (cache).",
    answer3: "En minnepinne.",
    answer4: "Alle alternativene er sekundærlagringsenheter.",
    correctAnswer: 1
  },
  {
    question: "Hva er en protokoll i nettverkssammenheng?",
    answer1: "Et sett kommunikasjonsregler for utveksling av data.",
    answer2: "En avtale mellom nettverkseier og en bedrift som bruker nettet.",
    answer3:
      "Et register der all nettverkstrafikk blir lagret i henhold til kravene fra myndighetene.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 0
  },
  {
    question:
      "Hvilket mål brukes vi vanligvis på overføringskapasitet i nettverk?",
    answer1: "Bits pr sekund (bps).",
    answer2: "Gigabyte.",
    answer3: "Båndbredde.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 0
  },
  {
    question: "Hva definerer et klient/tjener (client/server) forhold?",
    answer1: "Klienter tilbyr data og tjenester til tjenere.",
    answer2: "Klienter og tjenere tilbyr data og tjenester til hverandre.",
    answer3: "Tjenere tilbyr data og tjenester til klienter.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Hva definerer et ”peer-to-peer” nettverk?",
    answer1: "En er sjef, de andre er slaver.",
    answer2: "En er slave, de andre er sjefer.",
    answer3: "Alle er likeverdige.",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 2
  },
  {
    question: "Hvordan kan en GPS bestemme en posisjon?",
    answer1:
      "En GPS beregner sin posisjon ved å lokalisere nærmeste mobile basestasjon.",
    answer2:
      "En GPS beregner sin posisjon ved å bruke lokasjonen til flere satellitter.",
    answer3:
      "En GPS beregner sin posisjon ved å bruke lokasjon til kun en satellitt.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question: "Hva er Wi-Fi?",
    answer1: "Et sett av standarder for trådløs dataoverføring.",
    answer2: "En kvalitetsbetegnelse for trådløse nett.",
    answer3: "Et mål på kvaliteten på en bredbåndabonnentslinje inn til huset.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 0
  },
  {
    question: "En device driver er:",
    answer1: "en spesialdatamaskin for kjøretøy.",
    answer2:
      "spesialisert programvare for input/output, slik at utstyr kan kommunisere med resten av systemet.",
    answer3:
      "enheten som holder rede på neste instruksjon som skal utføres av en prosessor.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question: "Et maskinspråk (machine language) er:",
    answer1:
      "et programmeringsspråk som oversettes av en kompilator (oversetter) til kjørbar kode.",
    answer2:
      "et binær-type programmeringsspråk bygd inn i prosessoren som datamaskinen kan kjøre direkte.",
    answer3:
      "er programmeringsspråk som er felles for alle datamaskiner slik at de kan kommunisere.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question: "Ordstørrelse (word size) for en prosessor er:",
    answer1: "antall ord i en tekst som kan sammenlignes i et søk.",
    answer2: "antall bokstaver som kan behandles i en tekststreng.",
    answer3: "antall bit en prosessor kan prosessere på en gang.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Ytelse for superdatamaskiner måles i:",
    answer1: "FLOPS.",
    answer2: "Gigabytes.",
    answer3: "Antall prosessorkjerner.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 0
  },
  {
    question: "Systemklokka i en datamaskin:",
    answer1: "fordeler tiden som brukes på ulike programmer.",
    answer2: "bestemmer hvor raskt operasjoner i en mikroprosessor utføres.",
    answer3: "sørger for at dato og tid alltid er riktig satt.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question:
      "Hovedformålet med forstudiefasen (fase 1) i utvikling av informasjonssystemer er:",
    answer1: "Dokumentere krav til systemet.",
    answer2: "Programmere systemet.",
    answer3: "Gjennomføre en forberedende analyse.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Hva vil det si å vedlikeholde et informasjonssystem?",
    answer1: "Rette opp eksisterende feil i systemet.",
    answer2: "Utføre endringer i systemet basert på nye betingelser.",
    answer3: "Oppdatere dokumentasjon.",
    answer4: "Alle alternativene er riktig.",
    correctAnswer: 3
  },
  {
    question: "Hva gjør en enhetstest?",
    answer1:
      "Tester at ulike deler av systemet fungerer sammen på korrekt måte.",
    answer2: "Tester at selve datamaskinen (maskinvaren) fungerer.",
    answer3: "Tester individuelle deler av programvaren.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Hva er en algoritme?",
    answer1: "Krav som stilles til et dataprogram.",
    answer2: "En test for å finne feil i et dataprogram.",
    answer3:
      "En presis beskrivelse av operasjoner som skal utføres for å løse et problem.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Hva er et flytskjema?",
    answer1: "Grafisk representasjon av en algoritme.",
    answer2: "Et skjema for å fylle inn informasjon på en webside.",
    answer3: "Et skjema som dokumenterer sikkerhet i et databasesystem.",
    answer4: "Ingen av alternativene er riktig",
    correctAnswer: 0
  },
  {
    question: "Hva står ACID for innen databaser?",
    answer1: "Appropriate, Cynical, Isolation, Development.",
    answer2: "Appropriate, Collaborative, Irrelevant, Driver.",
    answer3: "Atomicity, Consistency, Isolation, Durability.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Hva er en tjener i en klient-/tjenerarkitektur?",
    answer1: "En tjener utfører tjenester på vegne av en klient.",
    answer2: "En tjener etterspør tjenester fra klienter.",
    answer3:
      "En tjener er et program som vil ha noe utført på en annen maskin.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 0
  },
  {
    question:
      "En del av et program består av en FOR-løkke, inne i en FOR-løkke, inne i en FOR-løkke. Alle løkkene løper gjennom tallene fra 1 til N. Tidsforbruket for denne programdelen vil være",
    answer1: "N^3",
    answer2: "3N",
    answer3: "3Nlog(N)",
    answer4: "N^2log(n)",
    correctAnswer: 0
  },
  {
    question: "Hva er hovedoppgaven til en navnetjener?",
    answer1: "Å oversette domenenavn til IP-adresser.",
    answer2: "Å oversette IP-adresser til domenenavn.",
    answer3: "Å holde rede på definerte variabelnavn når et program kjører.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 0
  },
  {
    question: "Når kan man ikke benytte seg av binærsøkingsalgoritmen?",
    answer1: "Når datamengden er så stor at det vil ta for lang tid.",
    answer2:
      "Når det er stor sannsynlighet for at det man søker etter ikke finnes i datamengden.",
    answer3: "Når datamengden ikke er sortert.",
    answer4: "Man kan alltid bruke binærsøkingsalgoritmen.",
    correctAnswer: 2
  },
  {
    question:
      "Hva er riktig rekkefølge når ulike minnetyper sorteres etter synkende hastighet?",
    answer1: "Registre, cache, primærminne, sekundærminne.",
    answer2: "Cache, registre, primærminne, sekundærminne.",
    answer3: "Primærminne, cache, sekundærminne, registre.",
    answer4: "Primærminne, registre, cache, sekundærminne.",
    correctAnswer: 0
  },
  {
    question:
      "Hva er i lovverket ikke definer som sensitive personopplysninger:",
    answer1: "Etnisk bakgrunn.",
    answer2: "Politisk oppfatning.",
    answer3: "Filosofisk oppfatning.",
    answer4: "Alle alternativene er sensitive personopplysninger.",
    correctAnswer: 3
  },
  {
    question:
      "Vi skal kode tegnene a-å, A-Å, 0-9, mellomrom, spørsmålstegn, utropstegn, punktum, kolon, semikolon og bindestrek. Hvor mange binære siffer (engelsk: bits) er nødvendig i kodene når alle tegn skal representeres med like mange binære siffer?",
    answer1: "6",
    answer2: "7",
    answer3: "8",
    answer4: "9",
    correctAnswer: 1
  },
  {
    question: "Hva blir resultatet når 81 kodes binært (i 2-tallsystemet)?",
    answer1: "1011011",
    answer2: "1010101",
    answer3: "1010001",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 2
  },
  {
    question:
      "Hva tilsvarer ABCD i det heksadesimale tallsystemet (16-tallsystemet) i 10-tallsystemet?",
    answer1: "42561",
    answer2: "43981",
    answer3: "44981",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 1
  },
  {
    question: "QoS er forkortelse for:",
    answer1: "Quantity of Storage.",
    answer2: "Quality of Servers.",
    answer3: "Quality of Service.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 2
  },
  {
    question:
      "Vi har en sortert liste med 100 000 000 elementer. Ved binærsøking i denne listen, hvor mange sammenligninger må vi i verste fall gjøre?",
    answer1: "Omtrent 20",
    answer2: "Omtrent 27",
    answer3: "Omtrent 34",
    answer4: "Omtrent 40",
    correctAnswer: 1
  },
  {
    question: "A or not (B and C) er usant (engelsk: false) når:",
    answer1: "A False, B True, C True",
    answer2: "A True, B True, C False",
    answer3: "A False, B False, C True",
    answer4: "Ingen av svarene er riktige",
    correctAnswer: 0
  },
  {
    question: "Hva er entropi?",
    answer1: "Et mål på informasjonsinnholdet i en melding.",
    answer2: "En algoritme for effektiv koding av symboler.",
    answer3:
      "En feiltilstand som gjør at lesehodet på en harddisk ikke klarer å følge sporene nøyaktig og derfor blander data fra flere spor.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 0
  },
  {
    question: "En URL (Uniform Resource Locator) har følgende format:",
    answer1: "Protokoll, maskin, sti, fil",
    answer2: "Protokoll, maskin, sti",
    answer3: "Domene, sti, fil",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 0
  },
  {
    question: "En IP-adresse er:",
    answer1:
      "En numerisk adresse som identifiserer en datamaskin eller annen type enhet i et IP-nettverk.",
    answer2:
      "En mekanisme som gjør det mulig å kontakte en Internett Provider, for eksempel når det oppstår feil i nettet.",
    answer3: "Et felt som identifiserer data i en relasjonsdatabase.",
    answer4: "Ingen av de",
    correctAnswer: 0
  },
  {
    question: "Hva er inspeksjon av programvare?",
    answer1:
      "Kjøring av programmer for å se om programvaren oppfyller kravene til systemet.",
    answer2:
      "Overvåking av variablenes verdier under programkjøring for å finne årsakene til feil.",
    answer3:
      "Gjennomgang av programmer uten at de blir kjørt, med tanke på å finne feil og å forvisse seg om at de er riktige.",
    answer4: "Ingen av de",
    correctAnswer: 2
  },
  {
    question:
      "Hva kjennetegner komprimeringsalgoritmer som er tapsløs (lossless)?",
    answer1: "Den opprinnelige datamengden kan gjenskapes nøyaktig.",
    answer2: "Den komprimerte datamengden er like stor som utgangspunktet.",
    answer3:
      "Egner seg spesielt godt for multimediedata som bilder, lyd og video.",
    answer4:
      "Fjerner bare informasjonsinnhold som ikke er viktig for menneskers oppfatning av informasjonsmengden, for eksempel i et bilde.",
    correctAnswer: 0
  },
  {
    question: "Hva sier Nyquist-regelen om samplingsfrekvensen?",
    answer1:
      "Samplingsfrekvensen må være minst halvparten av den høyeste lydfrekvensen.",
    answer2:
      "Samplingsfrekvensen må være minst den samme som den høyeste lydfrekvensen.",
    answer3:
      "Samplingsfrekvensen må være minst dobbelt så rask som den høyeste lydfrekvensen.",
    answer4: "Samplingsfrekvensen må alltid være 20KHz.",
    correctAnswer: 2
  },
  {
    question: "Hva er oppgaven til en programteller (program counter):",
    answer1: "Den holder rede på antall kodelinjer i et program.",
    answer2: "Den inneholder adressen til neste instruksjon.",
    answer3: "Den styrer antall iterasjoner i en FOR-løkke.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 1
  },
  {
    question: "Hvor mange symboler kan kodes med 10 bit?",
    answer1: "10",
    answer2: "512",
    answer3: "1024",
    answer4: "Ingen av de",
    correctAnswer: 2
  },
  {
    question: "Hvorfor digitalisere nettverk?",
    answer1: "Ønske om å kombinere tjenester.",
    answer2: "Enklere å utnytte kapasitet bedre med felles nettverk.",
    answer3: "Digital koding kan gi bedre feilsjekk og korrigering av feil.",
    answer4: "Alle alternativene er riktige.",
    correctAnswer: 3
  },
  {
    question: "Hva er fokuset i programvarevalideringsfasen i systemutvikling?",
    answer1: "Beskrive hva systemet skal gjøre.",
    answer2: "Designe hvordan systemet skal oppføre seg.",
    answer3: "Teste om systemet stemmer med spesifikasjonen og kundekrav.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 2
  },
  {
    question: "Hva er et Denial of Service–angrep?",
    answer1:
      "Å sende så mange forespørsler til en tjener (server) at den ikke klarer å utføre oppgavene sine.",
    answer2:
      "Å bryte seg inn på en tjener (server) og sørge for at den nekter å utføre tjenestene sine.",
    answer3:
      "Å nekte å motta meldinger fra en tjener (server) som da blir opptatt med å sende forespørslene på nytt og på nytt.",
    answer4:
      "Å sende en falsk e-post om problemer med en tjeneste, som for eksempel en nettbank, og lure brukeren til å avsløre påloggingsinformasjon for å få løst problemet.",
    correctAnswer: 0
  },
  {
    question:
      "Hva vil det si at vi at vi har “random access” (tilfeldig tilgang) til minnet?",
    answer1:
      "All data i minnet kan hentes direkte uansett hvor det befinner seg.",
    answer2: "Det er tilfeldig hva som hentes ut av minnet.",
    answer3:
      "Vi må hente ut data sekvensielt (byte for byte) for å finne det vi leter etter.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 0
  },
  {
    question: "Hva vil det si at en datamaskin er deterministisk?",
    answer1: "Den har en pessimistisk livsanskuelse som avviser fri vilje.",
    answer2:
      "Når den skal velge hvilken instruksjon den skal behandle neste gang har den ikke noe valg, men baserer valget på programmet og dataene den gis.",
    answer3: "At den har en intuisjon på hva som er lurt å gjøre.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 1
  },
  {
    question:
      "Hvilke av alternativene under er mulige tolkninger av PandA-mønstre?",
    answer1: "True og False.",
    answer2: "Ja og Nei.",
    answer3: "+ og –.",
    answer4: "Alle alternativene er riktige.",
    correctAnswer: 3
  },
  {
    question:
      "Vi deler inn algoritmer i klasser basert på de funksjoner som beskriver deres utvikling i kjøretid best. Hvilken algoritme er i klassen Θ(log(n)):",
    answer1: "Innstikksortering (Insertion sort).",
    answer2: "Binærsøk (binary search).",
    answer3: "Sekvensielt søk (sequential search).",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 1
  },
  {
    question:
      "Når vi studerer algoritmers effektivitet, ser vi på hvordan kjøretiden utvikler seg i forhold til mengden av input. Vi gjør analyser av bestefall, verstefall og gjennomsnittstilfellet. Hvorfor er det spesielt interessant å analysere en algoritmes kjøretid i verste fall?",
    answer1:
      "Det setter en øvre grense for hvor lang tid det tar å kjøre algoritmen.",
    answer2: "Programmerere er pessimister.",
    answer3: "Det er mer interessant med høye tall.",
    answer4: "Det forteller hvor lang tid algoritmen ca. bruker på å kjøre.",
    correctAnswer: 0
  },
  {
    question: "Hva er et datagram?",

    answer1: "Et telegram som er skrevet på data.",
    answer2: "Vekten på en dataenhet.",
    answer3: "En pakke som sendes over internett som følger IP-protokollen.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 2
  },
  {
    question:
      "Når vi overfører data over internett oppstår det ofte feil på grunn av forstyrrelser på linjene. For å oppdage slike feil brukes ofte",

    answer1: "NIC (Network Interface Card).",
    answer2: "ISP (Internet Service Provider).",
    answer3: "CRC (Cyclic Redundancy Check).",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 2
  },
  {
    question:
      "Fargene som vises på en dataskjerm representeres ofte med 24 bits RGB-koding. Fargen blå vil da representeres som:",

    answer1: "0000 0000 0000 0000 0000 0000.",
    answer2: "1111 1111 0000 0000 0000 0000.",
    answer3: "0000 0000 1111 1111 0000 0000.",
    answer4: "0000 0000 0000 0000 1111 1111.",
    correctAnswer: 3
  },
  {
    question:
      "En mikroprosessor utfører de samme fem oppgavene om og om igjen. Hvilken rekkefølge av stegene under beskriver korrekt rekkefølge på dette F/E-kretsløpet (F/E cycle)?",

    answer1:
      "Instruction Fetch – Data Fetch – Instruction Decode – Instruction Execution – Results Return.",
    answer2:
      "Results Return – Instruction Execution – Instruction Fetch – Data Fetch – Instruction Decode.",
    answer3:
      "Instruction Fetch – Instruction Decode – Data Fetch – Instruction Execution – Results Return.",
    answer4:
      "Instruction Decode – Instruction Execution – Instruction Fetch – Data Fetch – Results Return.",
    correctAnswer: 2
  },
  {
    question:
      "Hvilken bestemt endring har vi sett de siste årene innen systemutvikling?",

    answer1: "Spesifisering av krav er ikke lengre relevant.",
    answer2:
      "Smidig (agile) systemutvikling har overtatt mer og mer for plandrevet systemutvikling.",
    answer3: "Vannfallsmodellen har overtatt for inkrementell systemutvikling.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 1
  },
  {
    question: "Hva er DAC?",

    answer1:
      "Et program som hjelper med beregninger (data-assisted computing).",
    answer2: "En enhet som oversetter analoge signaler til digitale signaler.",
    answer3: "En enhet som oversetter digitale signaler til analoge signaler.",
    answer4:
      "Et program som oversetter datakode til programmeringsspråket C (evt. C++).",
    correctAnswer: 2
  },
  {
    question: "Rekursjon betyr at",

    answer1: "En funksjon kaller seg selv.",
    answer2: "Kjøretiden til programmet minsker.",
    answer3: "Programmet går i evig løkke.",
    answer4: "Ingen av svarene er riktige.",
    correctAnswer: 0
  },
  {
    question:
      "Ranger effektivitetsklassene Θ(n3), Θ(n), Θ(log(n)) og Θ(n2) etter effektivitet, der minst effektiv først og deretter mer og mer effektiv",

    answer1: "Θ(n3), Θ(n2), Θ(n), Θ(log(n)).",
    answer2: "Θ(n3), Θ(n), Θ(n2), Θ(log(n)).",
    answer3: "Θ(log(n)), Θ(n3), Θ(n2), Θ(n).",
    answer4: "Θ(n), Θ(log(n)), Θ(n3), Θ(n2).",
    correctAnswer: 0
  },
  {
    question:
      "Hva kalles typen datamaskin som typisk brukes til tyngre oppgaver som værberegninger?",

    answer1: "Arbeidsstasjon.",
    answer2: "Mikrodatamaskin.",
    answer3: "Stormaskin.",
    answer4: "Superdatamaskin.",
    correctAnswer: 3
  },
  {
    question:
      "Hvilket av disse alternativene beskriver IKKE et mikrokontroller?",

    answer1: "Kalles også innebygd datamaskin.",
    answer2: "Brukes som en del av diverse utstyr og kjøretøyer.",
    answer3: "Benytter alltid store sekundærlager.",
    answer4: "Finnes i mikrobølgeovn, tastatur, klokker, etc.",
    correctAnswer: 2
  },
  {
    question:
      "Hvilket av disse alternativene beskriver IKKE programvare (software)?",

    answer1: "En CD-plate.",
    answer2: "Operativsystemet.",
    answer3: "Utstyrsdrivere (device drivers).",
    answer4: "Hjelpeprogrammer (utility programs).",
    correctAnswer: 0
  },
  {
    question: "Hvilket alternativ beskriver sekundærminne?",

    answer1: "Harddisk",
    answer2: "CD/DVD",
    answer3: "Minnepenn",
    answer4: "Alle alternativene er riktig.",
    correctAnswer: 3
  },
  {
    question:
      "Hvilket alternativ beskriver IKKE en utenhet (output) i en datamaskin?",

    answer1: "Monitor",
    answer2: "CPU",
    answer3: "Høyttaler",
    answer4: "Printer",
    correctAnswer: 1
  },
  {
    question: "Hvor mange bytes er 1 kilobyte?",

    answer1: "1000 bytes",
    answer2: "1024 bytes",
    answer3: "1048 bytes",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question: "Hva er korrekt angående systemprogramvaren i en datamaskin?",

    answer1:
      "Gjør det mulig for applikasjonsprogramvare å kommunisere med datamaskin.",
    answer2:
      "Hjelper datamaskinen til å håndtere sine egne interne og eksterne ressurser.",
    answer3:
      "Inkluderer utstyrsdrivere (device drivers) og hjelpeprogrammer (utility programs).",
    answer4: "Alle alternativene er riktige.",
    correctAnswer: 3
  },
  {
    question: "Hva legges i begrepet ”booting”?",

    answer1:
      "Prosessen å laste inn operativsystemet i minne til en datamaskin.",
    answer2:
      "Prosessen å laste inn applikasjonsprogramvare i minne til en datamaskin.",
    answer3: "Prosessen å skifte mellom to programmer i et operativsystem.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 0
  },
  {
    question:
      "Hvilket alternativ stemmer IKKE angående beskrivelser av et operativsystem?",

    answer1: "Håndterer grunnleggende dataoperasjoner på et lavt nivå.",
    answer2:
      "De fleste applikasjonsprogrammer er skrevet for å kjøre på et spesifikt operativsystem.",
    answer3:
      "Man kan starte programmer direkte utenom operativsystemet på de fleste universelle datamaskiner (PCer).",
    answer4:
      "Operativsystemet tar seg av oppgaver som oppstart, prosessorhåndtering, filhåndtering, oppgavehåndtering og sikkerhetshåndtering.",
    correctAnswer: 2
  },
  {
    question: "Hva står forkortelsen ”BIOS” for?",

    answer1: "Binary Intermediate Operating System.",
    answer2: "Basic Input/Output System.",
    answer3: "Boot In Open Software.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question:
      "Hvordan kan datamaskin med en prosessor (CPU) som kun kan kjøre en instruksjon av gangen kjøre flere programmer samtidig (multi-tasking)?",

    answer1: "Det er ikke mulig.",
    answer2: "Hvert program får tildelt litt prosesseringstid.",
    answer3:
      "Datamaskinen bruker andre enheter som grafikkort til å utføre programmer.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question: "Hva er oppgaven til utstyrsdrivere (device drivers)?",

    answer1: "Forenkle kommunikasjon mellom datamaskinen og eksternt utstyr.",
    answer2:
      "Bestemme hvilke programmer som skal kjøres i prosessoren (CPUen).",
    answer3:
      "Sørge for at alle eksterne enheter kan tilkobles ved hjelp av USB.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 0
  },
  {
    question: "Hva betyr begrepet båndbredde (bandwidth)?",

    answer1:
      "Beskriver hvilke radiofrekvenser et trådløstnettverk kommuniserer over.",
    answer2: "Beskriver fysisk bredde på optisk fiber eller nettverkskabler.",
    answer3:
      "Uttrykk for hvilken type data som kan sendes over en kommunikasjonskanal.",
    answer4:
      "Uttrykk for hvor mye data som kan sendes over en kommunikasjonskanal.",
    correctAnswer: 3
  },
  {
    question: "Hvilken teknologi har potensielt størst overføringskapasitet?",

    answer1: "ADSL.",
    answer2: "Optisk fiber.",
    answer3: "Koaksialkabel.",
    answer4: "Wi-Fi.",
    correctAnswer: 1
  },
  {
    question: "Hva er en protokoll når man snakker om nettverk?",

    answer1:
      "Et sett med regler datamaskiner følger for å overføre data elektronisk.",
    answer2:
      "Et program som sjekker om data kan overføres mellom to datamaskiner.",
    answer3: "En standard for å representere websider.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 0
  },
  {
    question:
      "Omtrent hvor mange unike adresser tilbyr IPv4 (Internet Protocol ver. 4)?",

    answer1: "4,29 millioner.",
    answer2: "429 millioner.",
    answer3: "4,29 milliarder.",
    answer4: "429 milliarder.",
    correctAnswer: 2
  },
  {
    question:
      "Hva består den første delen av en Uniform Resource Locator (URL) av?",

    answer1: "Domenenavn.",
    answer2: "Protokoll.",
    answer3: "Type webdokument (f.eks. HTML, php, asp, jsp).",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question: "Hva står HTML for?",

    answer1: "Horizontal Text Modelling Language.",
    answer2: "Hypertext Modelling Language.",
    answer3: "Hypertext Markup Language.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Hva ligger i begrepet ”spoofing”?",

    answer1: "Bombardere en nettside med stor datatrafikk.",
    answer2: "Opprette nettsider som utgir seg for å være noe annet enn de er.",
    answer3: "Bryte seg inn i et datasystem.",
    answer4: "Sende epost med falsk avsender.",
    correctAnswer: 3
  },
  {
    question:
      "Binærtallet 10110100 tilsvarer hvilken verdi i ti-tallsystemet (desimaltallsystemet)?",

    answer1: "64",
    answer2: "134",
    answer3: "180",
    answer4: "190",
    correctAnswer: 2
  },
  {
    question: "Hva definerer et ”peer-to-peer” nettverk?",

    answer1: "En er slave, de andre er sjefer.",
    answer2: "En er sjef, de andre er salver.",
    answer3: "Alle er likeverdige.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question:
      "På nettsiden www.ntnu.no/student finner du en lenke til følgende dokument ”info.html”. Hvilken type lenke er dette?",

    answer1: "Absolutt hyperlenke.",
    answer2: "Relativ hyperlenke.",
    answer3: "Modifiserende hyperlenke.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 1
  },
  {
    question:
      "Hva kalles den siste fasen i livssyklusen til systemutvikling av informasjonssystemer?",

    answer1: "Design.",
    answer2: "Utvikling.",
    answer3: "Vedlikehold.",
    answer4: "Ingen av alternativene er riktig.",
    correctAnswer: 2
  },
  {
    question: "Hva er pseudokode?",

    answer1:
      "Foreløpig kode som ikke skal brukes i den endelige versjonen av et system",
    answer2: "En diagramteknikk for å beskrive algoritmer eller programmer",
    answer3:
      "De delene av et program som kan være årsak til en feil som er avdekket under testing",
    answer4:
      "En måte å beskrive algoritmer som er mindre formell enn regulære programmeringsspråk",
    correctAnswer: 3
  },
  {
    question:
      "Vi har 43 ulike symboler som vi ønsker å kode digitalt. Hva er det minste antall bits som vi må bruke?",

    answer1: "5",
    answer2: "6",
    answer3: "7",
    answer4: "8",
    correctAnswer: 1
  },
  {
    question: "Hvilken av disse aksessteknologiene gir høyest kapasitet ?",

    answer1: "Edge",
    answer2: "3G/UMTS",
    answer3: "HSDPA",
    answer4: "LTE",
    correctAnswer: 3
  },
  {
    question:
      "Retningslinjene for algoritmer sier at det lønner seg å skrive en løkke for å utføre en repeterende oppgave hvis oppgaven må utføres",

    answer1: "mer enn l gang",
    answer2: "3-5 ganger eller mer",
    answer3: "8-10 ganger eller mer",
    answer4: "20 ganger eller mer",
    correctAnswer: 0
  },
  {
    question:
      "Vi skal bruke binærsøking i en datamengde med 1 000 000 sorterte elementer. Hvor mange oppslag må vi vanligvis giøre?",

    answer1: "10",
    answer2: "20",
    answer3: "30",
    answer4: "50",
    correctAnswer: 1
  },
  {
    question: "Analog informasjon er",

    answer1: "Diskret",
    answer2: "Kontinuerlig",
    answer3: "Tilfeldig",
    answer4: "Digital",
    correctAnswer: 1
  },
  {
    question:
      "Det er grunnleggende aktiviteter som inngår i alle programvareutviklingsprosesser.",

    answer1: "Spesifikasjon, utvikling, validering, evolusjon",
    answer2: "Spesifikasjon, analyse, programmering, bruk",
    answer3: "Forstudie, implementasjon, testing, bruk",
    answer4: "Forstudie, programmering, simulering, vedlikehold",
    correctAnswer: 0
  },
  {
    question:
      "Hvor mange negative og positive heltall kan vi representere i 2 byte?",

    answer1: "2048",
    answer2: "32768",
    answer3: "65536",
    answer4: "1048576",
    correctAnswer: 2
  },
  {
    question: "Hvorfor kan et WiFi nettverk påvirke en Bluetooth forbindelse?",

    answer1: "WiFi nettverk har så sterkt signal",
    answer2: "Bluetooth og WiFi bruker samme frekvensbånd",
    answer3: "Bluetooth og WiFi bruker samme metode for koding",
    answer4:
      'Ved samtidig bruk av WiFi og Bluetooth dannes et fenomen som heter "stående bølger"',
    correctAnswer: 1
  },
  {
    question: "Hvor mange instruksjoner er vanlig i en moderne datamaskin?",

    answer1: "3-7",
    answer2: "10-20",
    answer3: "rundt 100",
    answer4: "tusenvis",
    correctAnswer: 2
  },
  {
    question: "Hva kjennetegner problemløsning etter top-down prinsippet?",

    answer1: "Vi løser de vanskeligste problemene først",
    answer2: "Vi designer før Vi programmerer en løsning",
    answer3: "Vi går fra det generelle til det spesielle",
    answer4:
      "Vi løser de enkelte delene av problemet først og bruker disse løsningene som byggeklosser i en generell løsning",
    correctAnswer: 2
  },
  {
    question:
      "Sortering ved innsetting (insertion sort) bruker omtrent 1 sekund på å sortere 1000 elementer. Hvor lang tid vil det omtrent ta å sortere 10000 elementer?",

    answer1: "2 s",
    answer2: "10 s",
    answer3: "100 s",
    answer4: "1000 s",
    correctAnswer: 2
  },
  {
    question: "Hva er pipelining?",

    answer1: "Lignende operasjoner blir utført i rekkefølge",
    answer2: "Flere instruksjoner kan være under utførelse samtidig",
    answer3: "En effektiv organisering av datamaskinens hukommelse",
    answer4: "En mekanisme for å utveksle data mellom programmer",
    correctAnswer: 1
  },
  {
    question: "Hvor mange symboler kan representeres av en sekvens på K bit?",

    answer1: "K^2",
    answer2: "2^K",
    answer3: "K",
    answer4: "2",
    correctAnswer: 1
  },
  {
    question:
      "Et nettverk sin evne til å levere uavbrutt / kontinuerlig tjeneste defineres som",

    answer1: "Skalerbarhet",
    answer2: "Tilgjengelighet",
    answer3: "Pålitelighet",
    answer4: "Ytelse",
    correctAnswer: 2
  },
  {
    question:
      "Ved digitalisering av lyd, hva oppnår vi med å bruke bit i hver punktprøve (sample)?",

    answer1: "Vi trenger ikke å punktprøve (sample) like",
    answer2: "Vi oppfyller kravene i Nyquist-regelen",
    answer3: "Vi kan representere stereo-lyd",
    answer4: "Vi får en mer nøyaktig digitalisering",
    correctAnswer: 3
  },
  {
    question: "Det å utgi seg for være noen andre på internett kalles",

    answer1: "Phishing",
    answer2: "Spoofing",
    answer3: "Phanning",
    answer4: "Aliasing",
    correctAnswer: 1
  },
  {
    question:
      "Er det horisontale eller vertikale fargebånd som komprimeres bra i GIF-filer",

    answer1: "Vertikale",
    answer2: "Horisontale",
    answer3:
      "GIF-filer komprimerer hverken vertikale eller horisontale fargebånd spesielt bra",
    answer4:
      "GIF-filer komprimerer både horisontale og vertikale fargebånd veldig bra",
    correctAnswer: 1
  },
  {
    question:
      "Hente/Utføre-kretsløpet (Fetch/Execute Cycle) i en moderne datamaskin utføres",

    answer1: "En gang i sekundet",
    answer2: "Tusenvis av gangeri sekunder",
    answer3: "Hundretusenvis av ganger i sekundet",
    answer4: "Ikke oftere enn antall ganger klokken i maskina tikker",
    correctAnswer: 3
  },
  {
    question: "Hva kjennetegner inkrementell programvareutvikling?",

    answer1:
      "Utvikler programvaren i de klart avskilte fasene krav, design, implementasjon, testing osv.",
    answer2: "Utvikler programvaren uten noen plan eller prosess",
    answer3: "Deler opp systemet i mindre deler som blir utviklet del for del",
    answer4: "Lager en rask prototype basert på eksisterende krav",
    correctAnswer: 2
  },
  {
    question:
      "I setningen “På Værnes regnet det forrige uke følgende: 6mm 3mm 12mm 4mm 0mm 8mm 6mm” vil delen ”På Værnes regnet det forrige uke følgende:” være:",

    answer1: "Informasjon",
    answer2: "Data",
    answer3: "Metadata",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question:
      "Det finnes flere forskjellige typer lagring av data i en datamaskin. Hvilket av alternativene rangerer disse typene fra raskest til tregest?",

    answer1: "Registre -> cache -> primærminnet -> sekundærminnet",
    answer2: "Registre -> primærminnet -> sekundærminnet -> cache",
    answer3: "Cache -> registre -> primærminnet -> sekundærminnet",
    answer4: "Ingen av delene",
    correctAnswer: 0
  },
  {
    question:
      "Når du sitter hjemme og leser nyheter på nettsidene til Adresseavisa så vil din datamaskin typisk være hva når det gjelder datakommunikasjon?",

    answer1: "Tjener",
    answer2: "Klient",
    answer3: "Bruker",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question:
      "Hvor mange bits trenger du for å kode de 29 bokstavene i vårt alfabet ved enkel koding der alle bokstavene er representert med samme antall bits?",

    answer1: "4",
    answer2: "5",
    answer3: "6",
    answer4: "7",
    correctAnswer: 1
  },
  {
    question:
      "Gitt en sortert liste på 4000 verdier. Hvor mange sammenligninger må vi i verste fall gjøre for å søke etter en verdi som ikke finnes i lista ved bruk av binærsøk?",

    answer1: "8",
    answer2: "12",
    answer3: "48",
    answer4: "64",
    correctAnswer: 1
  },
  {
    question:
      "Hvor mange forskjellige verdier kan representeres ved hjelp av 8 bits?",

    answer1: "128",
    answer2: "255",
    answer3: "256",
    answer4: "64",
    correctAnswer: 2
  },
  {
    question:
      "Hva får man når man multipliserer binærtallene 1011 og 11001 med hverandre?",

    answer1: "101111001",
    answer2: "100010011",
    answer3: "110011011",
    answer4: "11110000",
    correctAnswer: 1
  },
  {
    question:
      "Hva er fordelen med inkrementell utviklingsmetode sammenliknet med vannfallsmetoden?",

    answer1:
      "Med inkrementell utvikling fullføres faser som f.eks. kravspesifikasjon helt ferdig før man går videre",
    answer2:
      "Med inkrementell utvikling deles prosjektet opp i mindre deler hvor man utfører flere faser (som kravspesifisering, design, koding) for hver del",
    answer3:
      "Med inkrementell utvikling begynner man å skrive koden først, og deretter dokumenterer man kravene og lager designet",
    answer4: "Ingen av delene",

    correctAnswer: 1
  },
  {
    question:
      "Hvilken av disse enhetene benytter seg av IP-adresser for å videreformidle informasjon på nettverket?",

    answer1: "Nav (Hub)",
    answer2: "Svitsj (Switch)",
    answer3: "Ruter (Router)",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question: "Hvilken av de følgende er en lovlig IP-addresse?",

    answer1: "116.259.241.13",
    answer2: "8.7.9.2",
    answer3: "12.234.12.104.77",
    answer4: "Ingen av de",
    correctAnswer: 1
  },
  {
    question: "Hva betyr synbarhet ved programmering av funksjoner/metoder?",

    answer1: "Alle variabler kommer tydelig frem ved listing",
    answer2: "Variabler kan nåes fra hovedkoden",
    answer3:
      "Samme navn kan brukes på variabler i forskjellige funksjoner/metoder",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question: "Hvorfor komprimeres data?",

    answer1: "For at det skal ta mindre plass",
    answer2: "For at det skal kunne gjøres tilgjengelig for alle på Internett",
    answer3: "For at data ikke skal kunne leses av uvedkommende",
    answer4: "Ingen av delene",
    correctAnswer: 0
  },
  {
    question: "Hva er en protokoll?",

    answer1: "Et sett av kommunikasjonsregler",
    answer2:
      "Et program som oversetter programmeringskode til kode som kan kjøres på en datamaskin",
    answer3: "Hovedkomponenten i en vanlig datamaskin",
    answer4: "Ingen av delene",
    correctAnswer: 0
  },
  {
    question: "Hva brukes en prosessor hovedsakelig til?",

    answer1:
      "Direkte kjøre kode skrevet i JSP, Matlab eller andre programmeringsspråk",
    answer2: "Utføre regneoperasjoner på og sammenlikninger av registre",
    answer3:
      "Utføre regneoperasjoner på og sammenlikninger direkte på data lagret i primærminnet (RAM",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question:
      "I hvilket tilfelle kan man IKKE benytte seg av binærsøkalgoritmen?",

    answer1: "Når man har for stor datamengde (tar for lang tid)",
    answer2: "Når dataene ikke er sortert",
    answer3: "Når man ikke vet om det man søker etter finnes i dataene",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question: "Hva er tallet 1365 representert som et binært tall?",
    answer1: "11100101011",
    answer2: "10110101010",
    answer3: "10101010101",
    answer4: "10100110100",
    correctAnswer: 2
  },
  {
    question: "Hva er hovedoppgaven til kontrollenheten i en prosessor?",

    answer1:
      "Holde orden på hvor langt prosessoren har kommet i JSP- eller Matlabprogrammet",
    answer2: "Kontrollere at regneoperasjonene i ALU er korrekte",
    answer3: "Ha kontroll på hvor neste instruksjon ligger i minnet (RAM)",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question:
      "TCP/IP er en samling av protokoller som inneholder protokollene:",

    answer1: "HTTP, HTML, PHP, TCP, SMTP",
    answer2: "HTTP, FTP, TCP, IP, SMTP",
    answer3: "Kun TCP og IP",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question: "Hva er den viktigste oppgaven til en nettverksruter?",

    answer1: "Koble sammen flere nettverkssegmenter av samme type",
    answer2: "Forsterke og rense signaler i nettverket",
    answer3: "Koble sammen ulike nettverk og nettverkssegmenter",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question:
      "Minnehierarki i en datamaskin sortert på hastighet er som følger:",

    answer1: "registre, cache, primærminne, sekundærminne",
    answer2: "cache, registre, primærminne, sekundærminne",
    answer3: "primærminne, cache, registre, sekundærminne",
    answer4: "Ingen av delene",
    correctAnswer: 0
  },
  {
    question: "Hvor mange bits benyttes i nåværende IP-adresser (IPv4)?",
    answer1: "32 bits",
    answer2: "16 bits",
    answer3: "48 bits",
    answer4: "64 bits",
    correctAnswer: 0
  },
  {
    question:
      "01010101 i binærtallsystemet, er det samme som (i titallsystemet)?",
    answer1: "105",
    answer2: "95",
    answer3: "85",
    answer4: "75",
    correctAnswer: 2
  },
  {
    question:
      "4095 (i titallsystemet) skal kodes heksadesimalt (16-tallsystemet). Hvor mange siffer blir det i resultatet?",
    answer1: "5",
    answer2: "4",
    answer3: "3",
    answer4: "2",
    correctAnswer: 2
  },
  {
    question: "Hva er den viktigste oppgaven til en nettverkssvitsj?",

    answer1: "Sørge for at alle påkoblede maskiner mottar alle datapakker.",
    answer2: "Overvåke og stenge ute uønsket nettverkstrafikk.",
    answer3:
      "Fordele datatrafikken slik at datapakkene kommer frem til riktig mottaker.",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question:
      "Vi har en sortert liste med 5 000 000 elementer. Ved binærsøking i denne listen, hvor mange sammenligninger må vi i verste fall gjøre?",
    answer1: "Omtrent 20",
    answer2: "Omtrent 30",
    answer3: "Omtrent 40",
    answer4: "Omtrent 50",
    correctAnswer: 0
  },
  {
    question: "Testing av programkode vil si at man:",

    answer1: "Går gjennom programkoden og prøver å finne feil.",
    answer2: "Lar noen utvalgte brukere prøve systemet.",
    answer3:
      "Kjører programkoden og sjekker at forholdet mellom inndata og utdata er som forventet.",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question:
      "Hva er fordelen med asymmetrisk kryptering fremfor symmetrisk kryptering?",

    answer1: "Man kan publisere den ene nøkkelen.",
    answer2:
      "Det er vanskeligere å knekke koden fordi man må finne to ulike nøkler.",
    answer3:
      "Man kan være sikker på identiteten til den som har sendt meldingen (autentisering).",
    answer4: "Ingen av delene",
    correctAnswer: 0
  },
  {
    question: "Hva er nettverkstjenester?",

    answer1: "E-post, filoverføring og trådløst nettverk.",
    answer2: "Fildeling, WWW og e-post.",
    answer3: "Filoverføring, TCP/IP og WWW.",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question: "CPU er forkortelse for:",

    answer1: "Central Pipelining Unit.",
    answer2: "Coordinating Processor Unit.",
    answer3: "Central Processing Unit.",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question:
      "Et tall av typen double lagres i 8 byte. Omtrent hvor mange slike tall kan lagres i en gigabyte (GB)?",

    answer1: "Ca. 134 000.",
    answer2: "Over 100 millioner.",
    answer3: "Omtrent en milliard.",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question: "På hvilken måte skiller harddisk seg fra primærminne (RAM):",

    answer1: "Det tar lengre tid å skrive eller lese.",
    answer2: "Dataene er sikre mot strømbrudd.",
    answer3: "Begge utsagnene er feil.",
    answer4: "Begge utsagnene er riktig.",
    correctAnswer: 3
  },
  {
    question: "A and (B or C) er True (sant) for:",

    answer1: "A True, B True, C False",
    answer2: "A True, B False, C False",
    answer3: "A False, B True, C True",
    answer4: "A False, B False, C True",
    correctAnswer: 0
  },
  {
    question:
      "Hovedgrunnen til at vi deler opp lengre programmer ved å bruke metoder:",

    answer1: "Det går raskere å kjøre programmet.",
    answer2: "Programmet får høyere funksjonalitet.",
    answer3: "Det er lettere å forstå programmet.",
    answer4: "Det ser bedre ut",
    correctAnswer: 2
  },
  {
    question: "Hva stemmer ikke om kommentarer i programkode?",

    answer1: "Programmet tar større plass på harddisken.",
    answer2: "De gjør det lettere å forstå koden.",
    answer3: "Programmet kjører langsommere.",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question:
      "Hvor mange bit trenger du til å kode det norske alfabetet (29 forskjellige bokstaver) ved enkel koding hvor alle symbolene er representert med samme antall bit.",

    answer1: "5 bits",
    answer2: "6 bits",
    answer3: "8 bits",
    answer4: "10 bits",
    correctAnswer: 0
  },
  {
    question:
      "Hvilken type minne har normalt høyest tilgangstid (access time) i en datamaskin?",

    answer1: "Registre",
    answer2: "Cache",
    answer3: "Primærminne",
    answer4: "Sekundærminne",
    correctAnswer: 2
  },
  {
    question: "En ulempe med åpen kildekode (open source) er:",

    answer1: "Du kan ikke endre produktet selv",
    answer2: "Det er store firma står som regel bak utviklingen",
    answer3: "Du har normalt ikke krav på brukerstøtte",
    answer4: "Folk kan stjele alt du har skrevet",
    correctAnswer: 2
  },
  {
    question: "Hva er svart-boks testing?",

    answer1:
      "Testing som konsentrerer seg om systemets eller modulens indre oppbygning",
    answer2:
      "Testing som ikke ser på systemets eller modulens indre oppbygning",
    answer3:
      "Testing som konsentrerer seg om hvordan de ulike delene i et system fungerer sammen",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question: "Hva er kjernen i et operativsystem?",

    answer1: "Den delen som tar i mot input fra brukeren",
    answer2: "Den delen som administrerer maskinressurser",
    answer3: "Det mediet som operativsystemet installeres fra",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question: "Hvorfor krypteres data?",

    answer1: "For at data ikke skal kunne leses av uvedkommende",
    answer2: "For at det skal ta mindre plass",
    answer3: "For at det skal kunne gjøres tilgjengelig for alle på Internett",
    answer4: "FOr at det kan krypteres",
    correctAnswer: 0
  },
  {
    question: "En protokoll er:",

    answer1:
      "Et program som oversetter kildekode til maskinkode slik at det kan kjøres på en datamaskin",
    answer2: "En enhet som gjør beregninger og sammenlikninger i en datamaskin",
    answer3: "Et sett av kommunikasjonsregler",
    answer4: "Et type filsystem",
    correctAnswer: 2
  },
  {
    question: "Er binærsøk alltid raskere enn sekvensielt søk?",

    answer1: "Binærsøk er alltid raskere enn sekvensielt søk uansett",
    answer2:
      "Binærsøk er alltid raskere enn sekvensielt søk på sorterte datamengder",
    answer3: "Sekvensielt søk kan være raskere enn binærsøk",
    answer4: "Ingen av delene",
    correctAnswer: 2
  },
  {
    question: "Hva gjør man når man designer et system under systemutvikling?",

    answer1: "Beskriver hva systemet skal gjøre",
    answer2: "Beskriver hvordan systemet skal lages",
    answer3: "Beskriver kun hvordan systemet skal se ut",
    answer4: "Ingen av delene",
    correctAnswer: 1
  },
  {
    question: "I det binære tallsystemet, hva er 010 multiplisert med 101?",
    answer1: "111",
    answer2: "1010",
    answer3: "1111",
    answer4: "0011",
    correctAnswer: 1
  },
  {
    question: "Hva er inspeksjon i systemutvikling?",

    answer1:
      "Inspeksjon innebærer å finne feil eller forsikre seg om at feil ikke finnes uten å kjøre programmet",
    answer2:
      "Inspeksjon innebærer å undersøke om de som programmerer lager ryddige programmer som er lette å lese",
    answer3: "Inspeksjon innebærer å finne feil i koden ved å kjøre programmet",
    answer4: "Ingen av delene",
    correctAnswer: 0
  },
  {
    question: "Hva er en normal konfigurasjon av en klient-tjener arkitektur?",

    answer1: "Få tjenere, mange klienter",
    answer2: "Mange tjenere, få klienter",
    answer3: "Mange tjenere, mange klienter",
    answer4: "Få tjenere, få klienter",
    correctAnswer: 0
  },
  {
    question:
      "En bit av et program består av ei for-løkke inne i ei for-løkke. Begge løkkene løper igjennom tallverdiene 1:N. Tidsforbruket til denne programbiten vil være proporsjonalt med -",

    answer1: "N",
    answer2: "N log N",
    answer3: "N^2",
    answer4: "N^3",
    correctAnswer: 2
  },
  {
    question:
      "Gitt ei sortert liste av 272 verdier. Vi søker etter en verdi som ikke finnes i lista. Hvor mange sammenligninger må vi i verste fall gjøre ved bruk av binærsøk?",

    answer1: "136",
    answer2: "8",
    answer3: "9",
    answer4: "18",
    correctAnswer: 2
  }
];
