const questions = [
    {
      question: "Hva er et hovedkort (motherboard)",
      "answers": [
        "Et kretskort i en datamaskin der enheter som CPU, RAM, og andre enheter kobles sammen.",
        "En minnekrets som tar vare på systemets innstillinger.",
        "En prosessor for tynne mobiltelefoner.",
        "Bunnplata i et PC kabinett."
      ],
      correctAnswer: 0
    },
    {
      question: "Hva er en pakke (packet) i nettverkssammenheng?",
      "answers": [
        "En datablokk av fast lengde som sendes gjennom nettverket, fra avsender til mottaker.",
        "En datamelding som har ankommet og som står i kø for å bli levert til mottakermaskinen.",
        "Den datamengden som utveksles mellom to datamaskiner som kommuniserer via nettverket.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 0
    },
    {
      question:
        "Hvilken av disse lagringsenhetene er ikke en sekundærlagrings-enhet?",
      "answers": [
        "En harddisk.",
        "En datamaskins hurtigbuffer (cache).",
        "En minnepinne.",
        "Alle alternativene er sekundærlagringsenheter."
      ],
      correctAnswer: 1
    },
    {
      question: "Hva er en protokoll i nettverkssammenheng?",
      "answers": [
        "Et sett kommunikasjonsregler for utveksling av data.",
        "En avtale mellom nettverkseier og en bedrift som bruker nettet.",
        "Et register der all nettverkstrafikk blir lagret i henhold til kravene fra myndighetene.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 0
    },
    {
      question:
        "Hvilket mål brukes vi vanligvis på overføringskapasitet i nettverk?",
      "answers": [
        "Bits pr sekund (bps).",
        "Gigabyte.",
        "Båndbredde.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 0
    },
    {
      question: "Hva definerer et klient/tjener (client/server) forhold?",
      "answers": [
        "Klienter tilbyr data og tjenester til tjenere.",
        "Klienter og tjenere tilbyr data og tjenester til hverandre.",
        "Tjenere tilbyr data og tjenester til klienter.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 2
    },
    {
      question: "Hva definerer et ”peer-to-peer” nettverk?",
      "answers": [
        "En er sjef, de andre er slaver.",
        "En er slave, de andre er sjefer.",
        "Alle er likeverdige.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 2
    },
    {
      question: "Hvordan kan en GPS bestemme en posisjon?",
      "answers": [
        "En GPS beregner sin posisjon ved å lokalisere nærmeste mobile basestasjon.",
        "En GPS beregner sin posisjon ved å bruke lokasjonen til flere satellitter.",
        "En GPS beregner sin posisjon ved å bruke lokasjon til kun en satellitt.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 1
    },
    {
      question: "Hva er Wi-Fi?",
      "answers": [
        "Et sett av standarder for trådløs dataoverføring.",
        "En kvalitetsbetegnelse for trådløse nett.",
        "Et mål på kvaliteten på en bredbåndabonnentslinje inn til huset.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 0
    },
    {
      question: "En device driver er:",
      "answers": [
        "en spesialdatamaskin for kjøretøy.",
        "spesialisert programvare for input/output, slik at utstyr kan kommunisere med resten av systemet.",
        "enheten som holder rede på neste instruksjon som skal utføres av en prosessor.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 1
    },
    {
      question: "Et maskinspråk (machine language) er:",
      "answers": [
        "et programmeringsspråk som oversettes av en kompilator (oversetter) til kjørbar kode.",
        "et binær-type programmeringsspråk bygd inn i prosessoren som datamaskinen kan kjøre direkte.",
        "er programmeringsspråk som er felles for alle datamaskiner slik at de kan kommunisere.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 1
    },
    {
      question: "Ordstørrelse (word size) for en prosessor er:",
      "answers": [
        "antall ord i en tekst som kan sammenlignes i et søk.",
        "antall bokstaver som kan behandles i en tekststreng.",
        "antall bit en prosessor kan prosessere på en gang.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 2
    },
    {
      question: "Ytelse for superdatamaskiner måles i:",
      "answers": [
        "FLOPS.",
        "Gigabytes.",
        "Antall prosessorkjerner.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 0
    },
    {
      question: "Systemklokka i en datamaskin:",
      "answers": [
        "fordeler tiden som brukes på ulike programmer.",
        "bestemmer hvor raskt operasjoner i en mikroprosessor utføres.",
        "sørger for at dato og tid alltid er riktig satt.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 1
    },
    {
      question:
        "Hovedformålet med forstudiefasen (fase 1) i utvikling av informasjonssystemer er:",
      "answers": [
        "Dokumentere krav til systemet.",
        "Programmere systemet.",
        "Gjennomføre en forberedende analyse.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 2
    },
    {
      question: "Hva vil det si å vedlikeholde et informasjonssystem?",
      "answers": [
        "Rette opp eksisterende feil i systemet.",
        "Utføre endringer i systemet basert på nye betingelser.",
        "Oppdatere dokumentasjon.",
        "Alle alternativene er riktig."
      ],
      correctAnswer: 3
    },
    {
      question: "Hva gjør en enhetstest?",
      "answers": [
        "Tester at ulike deler av systemet fungerer sammen på korrekt måte.",
        "Tester at selve datamaskinen (maskinvaren) fungerer.",
        "Tester individuelle deler av programvaren.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 2
    },
    {
      question: "Hva er en algoritme?",
      "answers": [
        "Krav som stilles til et dataprogram.",
        "En test for å finne feil i et dataprogram.",
        "En presis beskrivelse av operasjoner som skal utføres for å løse et problem.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 2
    },
    {
      question: "Hva er et flytskjema?",
      "answers": [
        "Grafisk representasjon av en algoritme.",
        "Et skjema for å fylle inn informasjon på en webside.",
        "Et skjema som dokumenterer sikkerhet i et databasesystem.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 0
    },
    {
      question: "Hva står ACID for innen databaser?",
      "answers": [
        "Appropriate, Cynical, Isolation, Development.",
        "Appropriate, Collaborative, Irrelevant, Driver.",
        "Atomicity, Consistency, Isolation, Durability.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 2
    },
    {
      question: "Hva er en tjener i en klient-/tjenerarkitektur?",
      "answers": [
        "En tjener utfører tjenester på vegne av en klient.",
        "En tjener etterspør tjenester fra klienter.",
        "En tjener er et program som vil ha noe utført på en annen maskin.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 0
    },
    {
      question:
        "En del av et program består av en FOR-løkke, inne i en FOR-løkke, inne i en FOR-løkke. Alle løkkene løper gjennom tallene fra 1 til N. Tidsforbruket for denne programdelen vil være",
      "answers": ["N^3", "3N", "3Nlog(N)"],
      correctAnswer: 0
    },
    {
      question: "Hva er hovedoppgaven til en navnetjener?",
      "answers": [
        "Å oversette domenenavn til IP-adresser.",
        "Å oversette IP-adresser til domenenavn.",
        "Å holde rede på definerte variabelnavn når et program kjører.",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 0
    },
    {
      question:
        "Kari har utviklet et programsystem i den bedriften der hun har vært ansatt. Kan hun ta med seg og videreutvikle denne programvaren hvis hun slutter i bedriften?",
      "answers": [
        "Ja, i følge Åndsverksloven er det programmereren som har rettighetene til programvaren.",
        "Nei, det er bedriften som eier programvaren.",
        "Det er uavklart siden dette er ikke regulert av lovgiving. Rettighetene til programvaren må avtales mellom partene i hvert enkelt tilfelle."
      ],
      correctAnswer: 1
    },
    {
      question: "Svart-boks testing er:",
      "answers": [
        "Testing der man prøver ut systemets eller modulens indre oppbygging.",
        "Testing der man ser bort fra systemets eller modulens indre oppbygning og kun tar i betraktning de ytre egenskapene.",
        "Testing der man ser bort fra systemenes eller modulenes indre oppbygning og prøver ut hvordan de ulike delene i et system fungerer sammen."
      ],
      correctAnswer: 1
    },
    {
      question: "Når kan man ikke benytte seg av binærsøkingsalgoritmen?",
      "answers": [
        "Når datamengden er så stor at det vil ta for lang tid.",
        "Når det er stor sannsynlighet for at det man søker etter ikke finnes i datamengden.",
        "Når datamengden ikke er sortert.",
        "Man kan alltid bruke binærsøkingsalgoritmen."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Hva er riktig rekkefølge når ulike minnetyper sorteres etter synkende hastighet?",
      "answers": [
        "Registre, cache, primærminne, sekundærminne.",
        "Cache, registre, primærminne, sekundærminne.",
        "Primærminne, cache, sekundærminne, registre."
      ],
      correctAnswer: 0
    },
    {
      question:
        "Hva er i lovverket ikke definer som sensitive personopplysninger:",
      "answers": [
        "Etnisk bakgrunn.",
        "Politisk oppfatning.",
        "Filosofisk oppfatning.",
        "Alle alternativene er sensitive personopplysninger."
      ],
      correctAnswer: 3
    },
    {
      question:
        "Vi skal kode tegnene a-å, A-Å, 0-9, mellomrom, spørsmålstegn, utropstegn, punktum, kolon, semikolon og bindestrek. Hvor mange binære siffer (engelsk: bits) er nødvendig i kodene når alle tegn skal representeres med like mange binære siffer?",
      "answers": ["6", "7", "8"],
      correctAnswer: 1
    },
    {
      question: "Hva blir resultatet når 81 kodes binært (i 2-tallsystemet)?",
      "answers": [
        "1011011",
        "1010101",
        "1010001",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Hva tilsvarer ABCD i det heksadesimale tallsystemet (16-tallsystemet) i 10-tallsystemet?",
      "answers": ["42561", "43981", "44981", "Ingen av svarene er riktige."],
      correctAnswer: 1
    },
    {
      question: "QoS er forkortelse for:",
      "answers": [
        "Quantity of Storage.",
        "Quality of Servers.",
        "Quality of Service.",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Vi har en sortert liste med 100 000 000 elementer. Ved binærsøking i denne listen, hvor mange sammenligninger må vi i verste fall gjøre?",
      "answers": ["Omtrent 20.", "Omtrent 27.", "Omtrent 34."],
      correctAnswer: 1
    },
    {
      question: "A or not (B and C) er usant (engelsk: false) når:",
      "answers": [
        "A False, B True, C True",
        "A True, B True, C False",
        "A False, B False, C True",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 0
    },
    {
      question: "Hva er entropi?",
      "answers": [
        "Et mål på informasjonsinnholdet i en melding.",
        "En algoritme for effektiv koding av symboler.",
        "En feiltilstand som gjør at lesehodet på en harddisk ikke klarer å følge sporene nøyaktig og derfor blander data fra flere spor.",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 0
    },
    {
      question: "En URL (Uniform Resource Locator) har følgende format:",
      "answers": [
        "Protokoll, maskin, sti, fil",
        "Protokoll, maskin, sti",
        "Domene, sti, fil",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 0
    },
    {
      question: "En IP-adresse er:",
      "answers": [
        "En numerisk adresse som identifiserer en datamaskin eller annen type enhet i et IP-nettverk.",
        "En mekanisme som gjør det mulig å kontakte en Internett Provider, for eksempel når det oppstår feil i nettet.",
        "Et felt som identifiserer data i en relasjonsdatabase."
      ],
      correctAnswer: 0
    },
    {
      question: "Hva er inspeksjon av programvare?",
      "answers": [
        "Kjøring av programmer for å se om programvaren oppfyller kravene til systemet.",
        "Overvåking av variablenes verdier under programkjøring for å finne årsakene til feil.",
        "Gjennomgang av programmer uten at de blir kjørt, med tanke på å finne feil og å forvisse seg om at de er riktige."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Hva kjennetegner komprimeringsalgoritmer som er tapsløs (lossless)?",
      "answers": [
        "Den opprinnelige datamengden kan gjenskapes nøyaktig.",
        "Den komprimerte datamengden er like stor som utgangspunktet.",
        "Egner seg spesielt godt for multimediedata som bilder, lyd og video.",
        "Fjerner bare informasjonsinnhold som ikke er viktig for menneskers oppfatning av informasjonsmengden, for eksempel i et bilde."
      ],
      correctAnswer: 0
    },
    {
      question: "Hva sier Nyquist-regelen om samplingsfrekvensen?",
      "answers": [
        "Samplingsfrekvensen må være minst halvparten av den høyeste lydfrekvensen.",
        "Samplingsfrekvensen må være minst den samme som den høyeste lydfrekvensen.",
        "Samplingsfrekvensen må være minst dobbelt så rask som den høyeste lydfrekvensen.",
        "Samplingsfrekvensen må alltid være 20KHz."
      ],
      correctAnswer: 2
    },
    {
      question: "Hva er oppgaven til en programteller (program counter):",
      "answers": [
        "Den holder rede på antall kodelinjer i et program.",
        "Den inneholder adressen til neste instruksjon.",
        "Den styrer antall iterasjoner i en FOR-løkke.",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 1
    },
    {
      question: "Hvor mange symboler kan kodes med 10 bit?",
      "answers": ["10", "512", "1024", "ingen"],
      correctAnswer: 2
    },
    {
      question: "Hvorfor digitalisere nettverk?",
      "answers": [
        "Ønske om å kombinere tjenester.",
        "Enklere å utnytte kapasitet bedre med felles nettverk.",
        "Digital koding kan gi bedre feilsjekk og korrigering av feil.",
        "Alle alternativene er riktige."
      ],
      correctAnswer: 3
    },
    {
      question:
        "Hva er fokuset i programvarevalideringsfasen i systemutvikling?",
      "answers": [
        "Beskrive hva systemet skal gjøre.",
        "Designe hvordan systemet skal oppføre seg.",
        "Teste om systemet stemmer med spesifikasjonen og kundekrav.",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 2
    },
    {
      question: "Hva er et Denial of Service–angrep?",
      "answers": [
        "Å sende så mange forespørsler til en tjener (server) at den ikke klarer å utføre oppgavene sine.",
        "Å bryte seg inn på en tjener (server) og sørge for at den nekter å utføre tjenestene sine.",
        "Å nekte å motta meldinger fra en tjener (server) som da blir opptatt med å sende forespørslene på nytt og på nytt.",
        "Å sende en falsk e-post om problemer med en tjeneste, som for eksempel en nettbank, og lure brukeren til å avsløre påloggingsinformasjon for å få løst problemet."
      ],
      correctAnswer: 0
    },
    {
      question:
        "Hva vil det si at vi at vi har “random access” (tilfeldig tilgang) til minnet?",
      "answers": [
        "All data i minnet kan hentes direkte uansett hvor det befinner seg.",
        "Det er tilfeldig hva som hentes ut av minnet.",
        "Vi må hente ut data sekvensielt (byte for byte) for å finne det vi leter etter.",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 0
    },
    {
      question: "Hva vil det si at en datamaskin er deterministisk?",
      "answers": [
        "Den har en pessimistisk livsanskuelse som avviser fri vilje.",
        "Når den skal velge hvilken instruksjon den skal behandle neste gang har den ikke noe valg, men baserer valget på programmet og dataene den gis.",
        "At den har en intuisjon på hva som er lurt å gjøre.",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 1
    },
    {
      question:
        "Hvilke av alternativene under er mulige tolkninger av PandA-mønstre?",
      "answers": [
        "True og False.",
        "Ja og Nei.",
        "+ og –.",
        "Alle alternativene er riktige."
      ],
      correctAnswer: 3
    },
    {
      question:
        "Vi deler inn algoritmer i klasser basert på de funksjoner som beskriver deres utvikling i kjøretid best. Hvilken algoritme er i klassen Θ(log(n)):",
      "answers": [
        "Innstikksortering (Insertion sort).",
        "Binærsøk (binary search).",
        "Sekvensielt søk (sequential search).",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 1
    },
    {
      question:
        "Når vi studerer algoritmers effektivitet, ser vi på hvordan kjøretiden utvikler seg i forhold til mengden av input. Vi gjør analyser av bestefall, verstefall og gjennomsnittstilfellet. Hvorfor er det spesielt interessant å analysere en algoritmes kjøretid i verste fall?",
      "answers": [
        "Det setter en øvre grense for hvor lang tid det tar å kjøre algoritmen.",
        "Programmerere er pessimister.",
        "Det er mer interessant med høye tall.",
        "Det forteller hvor lang tid algoritmen ca. bruker på å kjøre."
      ],
      correctAnswer: 0
    },
    {
      question: "Hva er et datagram?",
      "answers": [
        "Et telegram som er skrevet på data.",
        "Vekten på en dataenhet.",
        "En pakke som sendes over internett som følger IP-protokollen.",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Når vi overfører data over internett oppstår det ofte feil på grunn av forstyrrelser på linjene. For å oppdage slike feil brukes ofte",
      "answers": [
        "NIC (Network Interface Card).",
        "ISP (Internet Service Provider).",
        "CRC (Cyclic Redundancy Check).",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Fargene som vises på en dataskjerm representeres ofte med 24 bits RGB-koding. Fargen blå vil da representeres som:",
      "answers": [
        "0000 0000 0000 0000 0000 0000.",
        "1111 1111 0000 0000 0000 0000.",
        "0000 0000 1111 1111 0000 0000.",
        "0000 0000 0000 0000 1111 1111."
      ],
      correctAnswer: 3
    },
    {
      question:
        "En mikroprosessor utfører de samme fem oppgavene om og om igjen. Hvilken rekkefølge av stegene under beskriver korrekt rekkefølge på dette F/E-kretsløpet (F/E cycle)?",
      "answers": [
        "Instruction Fetch – Data Fetch – Instruction Decode – Instruction Execution – Results Return.",
        "Results Return – Instruction Execution – Instruction Fetch – Data Fetch – Instruction Decode.",
        "Instruction Fetch – Instruction Decode – Data Fetch – Instruction Execution – Results Return.",
        "Instruction Decode – Instruction Execution – Instruction Fetch – Data Fetch – Results Return."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Hvilken bestemt endring har vi sett de siste årene innen systemutvikling?",
      "answers": [
        "Spesifisering av krav er ikke lengre relevant.",
        "Smidig (agile) systemutvikling har overtatt mer og mer for plandrevet systemutvikling.",
        "Vannfallsmodellen har overtatt for inkrementell systemutvikling.",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 1
    },
    {
      question: "Hva er DAC?",
      "answers": [
        "Et program som hjelper med beregninger (data-assisted computing).",
        "En enhet som oversetter analoge signaler til digitale signaler.",
        "En enhet som oversetter digitale signaler til analoge signaler.",
        "Et program som oversetter datakode til programmeringsspråket C (evt. C++)."
      ],
      correctAnswer: 2
    },
    {
      question: "Rekursjon betyr at",
      "answers": [
        "En funksjon kaller seg selv.",
        "Kjøretiden til programmet minsker.",
        "Programmet går i evig løkke.",
        "Ingen av svarene er riktige."
      ],
      correctAnswer: 0
    },
    {
      question:
        "Ranger effektivitetsklassene Θ(n3), Θ(n), Θ(log(n)) og Θ(n2) etter effektivitet, der minst effektiv først og deretter mer og mer effektiv",
      "answers": [
        "Θ(n3), Θ(n2), Θ(n), Θ(log(n)).",
        "Θ(n3), Θ(n), Θ(n2), Θ(log(n)).",
        "Θ(log(n)), Θ(n3), Θ(n2), Θ(n).",
        "Θ(n), Θ(log(n)), Θ(n3), Θ(n2)."
      ],
      correctAnswer: 0
    },
    {
      question:
        "Hva kalles typen datamaskin som typisk brukes til tyngre oppgaver som værberegninger?",
      "answers": [
        "Arbeidsstasjon.",
        "Mikrodatamaskin.",
        "Stormaskin.",
        "Superdatamaskin."
      ],
      correctAnswer: 3
    },
    {
      question:
        "Hvilket av disse alternativene beskriver IKKE et mikrokontroller?",
      "answers": [
        "Kalles også innebygd datamaskin.",
        "Brukes som en del av diverse utstyr og kjøretøyer.",
        "Benytter alltid store sekundærlager.",
        "Finnes i mikrobølgeovn, tastatur, klokker, etc."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Hvilket av disse alternativene beskriver IKKE programvare (software)?",
      "answers": [
        "En CD-plate.",
        "Operativsystemet.",
        "Utstyrsdrivere (device drivers).",
        "Hjelpeprogrammer (utility programs)."
      ],
      correctAnswer: 0
    },
    {
      question: "Hvilket alternativ beskriver sekundærminne?",
      "answers": [
        "Harddisk",
        "CD/DVD",
        "Minnepenn",
        "Alle alternativene er riktig."
      ],
      correctAnswer: 3
    },
    {
      question:
        "Hvilket alternativ beskriver IKKE en utenhet (output) i en datamaskin?",
      "answers": ["Monitor", "CPU", "Høyttaler", "Printer"],
      correctAnswer: 1
    },
    {
      question: "Hvor mange bytes er 1 kilobyte?",
      "answers": [
        "1000 bytes",
        "1024 bytes",
        "1048 bytes",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 1
    },
    {
      question: "Hva er korrekt angående systemprogramvaren i en datamaskin?",
      "answers": [
        "Gjør det mulig for applikasjonsprogramvare å kommunisere med datamaskin.",
        "Hjelper datamaskinen til å håndtere sine egne interne og eksterne ressurser.",
        "Inkluderer utstyrsdrivere (device drivers) og hjelpeprogrammer (utility programs).",
        "Alle alternativene er riktige."
      ],
      correctAnswer: 3
    },
    {
      question: "Hva legges i begrepet ”booting”?",
      "answers": [
        "Prosessen å laste inn operativsystemet i minne til en datamaskin.",
        "Prosessen å laste inn applikasjonsprogramvare i minne til en datamaskin.",
        "Prosessen å skifte mellom to programmer i et operativsystem.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 0
    },
    {
      question:
        "Hvilket alternativ stemmer IKKE angående beskrivelser av et operativsystem?",
      "answers": [
        "Håndterer grunnleggende dataoperasjoner på et lavt nivå.",
        "De fleste applikasjonsprogrammer er skrevet for å kjøre på et spesifikt operativsystem.",
        "Man kan starte programmer direkte utenom operativsystemet på de fleste universelle datamaskiner (PCer).",
        "Operativsystemet tar seg av oppgaver som oppstart, prosessorhåndtering, filhåndtering, oppgavehåndtering og sikkerhetshåndtering."
      ],
      correctAnswer: 2
    },
    {
      question: "Hva står forkortelsen ”BIOS” for?",
      "answers": [
        "Binary Intermediate Operating System.",
        "Basic Input/Output System.",
        "Boot In Open Software.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 1
    },
    {
      question:
        "Hvordan kan datamaskin med en prosessor (CPU) som kun kan kjøre en instruksjon av gangen kjøre flere programmer samtidig (multi-tasking)?",
      "answers": [
        "Det er ikke mulig.",
        "Hvert program får tildelt litt prosesseringstid.",
        "Datamaskinen bruker andre enheter som grafikkort til å utføre programmer.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 1
    },
    {
      question: "Hva er oppgaven til utstyrsdrivere (device drivers)?",
      "answers": [
        "Forenkle kommunikasjon mellom datamaskinen og eksternt utstyr.",
        "Bestemme hvilke programmer som skal kjøres i prosessoren (CPUen).",
        "Sørge for at alle eksterne enheter kan tilkobles ved hjelp av USB.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 0
    },
    {
      question: "Hva betyr begrepet båndbredde (bandwidth)?",
      "answers": [
        "Beskriver hvilke radiofrekvenser et trådløstnettverk kommuniserer over.",
        "Beskriver fysisk bredde på optisk fiber eller nettverkskabler.",
        "Uttrykk for hvilken type data som kan sendes over en kommunikasjonskanal.",
        "Uttrykk for hvor mye data som kan sendes over en kommunikasjonskanal."
      ],
      correctAnswer: 3
    },
    {
      question:
        "Hvilken teknologi har potensielt størst overføringskapasitet?",
      "answers": ["ADSL.", "Optisk fiber.", "Koaksialkabel.", "Wi-Fi."],
      correctAnswer: 1
    },
    {
      question: "Hva er en protokoll når man snakker om nettverk?",
      "answers": [
        "Et sett med regler datamaskiner følger for å overføre data elektronisk.",
        "Et program som sjekker om data kan overføres mellom to datamaskiner.",
        "En standard for å representere websider.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 0
    },
    {
      question:
        "Omtrent hvor mange unike adresser tilbyr IPv4 (Internet Protocol ver. 4)?",
      "answers": [
        "4,29 millioner.",
        "429 millioner.",
        "4,29 milliarder.",
        "429 milliarder."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Hva består den første delen av en Uniform Resource Locator (URL) av?",
      "answers": [
        "Domenenavn.",
        "Protokoll.",
        "Type webdokument (f.eks. HTML, php, asp, jsp).",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 1
    },
    {
      question: "Hva står HTML for?",
      "answers": [
        "Horizontal Text Modelling Language.",
        "Hypertext Modelling Language.",
        "Hypertext Markup Language.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 2
    },
    {
      question: "Hva ligger i begrepet ”spoofing”?",
      "answers": [
        "Bombardere en nettside med stor datatrafikk.",
        "Opprette nettsider som utgir seg for å være noe annet enn de er.",
        "Bryte seg inn i et datasystem.",
        "Sende epost med falsk avsender."
      ],
      correctAnswer: 3
    },
    {
      question:
        "Binærtallet 10110100 tilsvarer hvilken verdi i ti-tallsystemet (desimaltallsystemet)?",
      "answers": ["64", "134", "180"],
      correctAnswer: 2
    },
    {
      question: "Hva definerer et ”peer-to-peer” nettverk?",
      "answers": [
        "En er slave, de andre er sjefer.",
        "En er sjef, de andre er salver.",
        "Alle er likeverdige.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 2
    },
    {
      question:
        "På nettsiden www.ntnu.no/student finner du en lenke til følgende dokument ”info.html”. Hvilken type lenke er dette?",
      "answers": [
        "Absolutt hyperlenke.",
        "Relativ hyperlenke.",
        "Modifiserende hyperlenke.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 1
    },
    {
      question:
        "Hva kalles den siste fasen i livssyklusen til systemutvikling av informasjonssystemer?",
      "answers": [
        "Design.",
        "Utvikling.",
        "Vedlikehold.",
        "Ingen av alternativene er riktig."
      ],
      correctAnswer: 2
    },
    {
      question: "Hva er pseudokode?",
      "answers": [
        "Foreløpig kode som ikke skal brukes i den endelige versjonen av et system",
        "En diagramteknikk for å beskrive algoritmer eller programmer",
        "De delene av et program som kan være årsak til en feil som er avdekket under testing",
        "En måte å beskrive algoritmer som er mindre formell enn regulære programmeringsspråk"
      ],
      correctAnswer: 3
    },
    {
      question:
        "Vi har 43 ulike symboler som vi ønsker å kode digitalt. Hva er det minste antall bits som vi må bruke?",
      "answers": ["5", "6", "7", "8"],
      correctAnswer: 1
    },
    {
      question: "Hvilken av disse aksessteknologiene gir høyest kapasitet ?",
      "answers": ["Edge", "3G/UMTS", "HSDPA", "LTE"],
      correctAnswer: 3
    },
    {
      question:
        "Retningslinjene for algoritmer sier at det lønner seg å skrive en løkke for å utføre en repeterende oppgave hvis oppgaven må utføres",
      "answers": [
        "mer enn l gang",
        "3-5 ganger eller mer",
        "8-10 ganger eller mer",
        "20 ganger eller mer"
      ],
      correctAnswer: 0
    },
    {
      question:
        "Vi skal bruke binærsøking i en datamengde med 1 000 000 sorterte elementer. Hvor mange oppslag må vi vanligvis giøre?",
      "answers": ["10", "20", "30", "50"],
      correctAnswer: 1
    },
    {
      question: "Analog informasjon er",
      "answers": ["Diskret", "Kontinuerlig", "Tilfeldig", "Digital"],
      correctAnswer: 1
    },
    {
      question:
        "Det er grunnleggende aktiviteter som inngår i alle programvareutviklingsprosesser.",
      "answers": [
        "Spesifikasjon, utvikling, validering, evolusjon",
        "Spesifikasjon, analyse, programmering, bruk",
        "Forstudie, implementasjon, testing, bruk",
        "Forstudie, programmering, simulering, vedlikehold"
      ],
      correctAnswer: 0
    },
    {
      question:
        "Hvor mange negative og positive heltall kan vi representere i 2 byte?",
      "answers": ["2048", "32768", "65536", "1048576"],
      correctAnswer: 2
    },
    {
      question:
        "Hvorfor kan et WiFi nettverk påvirke en Bluetooth forbindelse?",
      "answers": [
        "WiFi nettverk har så sterkt signal",
        "Bluetooth og WiFi bruker samme frekvensbånd",
        "Bluetooth og WiFi bruker samme metode for koding",
        "Ved samtidig bruk av WiFi og Bluetooth dannes et fenomen som heter \"stående bølger\""
      ],
      correctAnswer: 1
    },
    {
      question: "Hvor mange instruksjoner er vanlig i en moderne datamaskin?",
      "answers": ["3-7", "10-20", "rundt 100", "tusenvis"],
      correctAnswer: 2
    },
    {
      question: "Hva kjennetegner problemløsning etter top-down prinsippet?",
      "answers": [
        "Vi løser de vanskeligste problemene først",
        "Vi designer før Vi programmerer en løsning",
        "Vi går fra det generelle til det spesielle",
        "Vi løser de enkelte delene av problemet først og bruker disse løsningene som byggeklosser i en generell løsning"
      ],
      correctAnswer: 2
    },
    {
      question:
        "Sortering ved innsetting (insertion sort) bruker omtrent 1 sekund på å sortere 1000 elementer. Hvor lang tid vil det omtrent ta å sortere 10000 elementer?",
      "answers": ["2 s", "10 s", "100 s", "1000 s"],
      correctAnswer: 2
    },
    {
      question: "Hva er pipelining?",
      "answers": [
        "Lignende operasjoner blir utført i rekkefølge",
        "Flere instruksjoner kan være under utførelse samtidig",
        "En effektiv organisering av datamaskinens hukommelse",
        "En mekanisme for å utveksle data mellom programmer"
      ],
      correctAnswer: 1
    },
    {
      question:
        "Hvor mange symboler kan representeres av en sekvens på K bit?",
      "answers": ["K^2", "2^K", "K", "2"],
      correctAnswer: 1
    },
    {
      question:
        "Et nettverk sin evne til å levere uavbrutt / kontinuerlig tjeneste defineres som",
      "answers": ["Skalerbarhet", "Tilgjengelighet", "Pålitelighet", "Ytelse"],
      correctAnswer: 2
    },
    {
      question:
        "Ved digitalisering av lyd, hva oppnår vi med å bruke bit i hver punktprøve (sample)?",
      "answers": [
        "Vi trenger ikke å punktprøve (sample) like",
        "Vi oppfyller kravene i Nyquist-regelen",
        "Vi kan representere stereo-lyd",
        "Vi får en mer nøyaktig digitalisering"
      ],
      correctAnswer: 3
    },
    {
      question: "Det å utgi seg for være noen andre på internett kalles",
      "answers": ["Phishing", "Spoofing", "Phanning", "Aliasing"],
      correctAnswer: 1
    },
    {
      question:
        "Er det horisontale eller vertikale fargebånd som komprimeres bra i GIF-filer",
      "answers": [
        "Vertikale",
        "Horisontale",
        "GIF-filer komprimerer hverken vertikale eller horisontale fargebånd spesielt bra",
        "GIF-filer komprimerer både horisontale og vertikale fargebånd veldig bra"
      ],
      correctAnswer: 1
    },
    {
      question:
        "Hente/Utføre-kretsløpet (Fetch/Execute Cycle) i en moderne datamaskin utføres",
      "answers": [
        "En gang i sekundet",
        "Tusenvis av gangeri sekunder",
        "Hundretusenvis av ganger i sekundet",
        "Ikke oftere enn antall ganger klokken i maskina tikker"
      ],
      correctAnswer: 3
    },
    {
      question: "Hva kjennetegner inkrementell programvareutvikling?",
      "answers": [
        "Utvikler programvaren i de klart avskilte fasene krav, design, implementasjon, testing osv.",
        "Utvikler programvaren uten noen plan eller prosess",
        "Deler opp systemet i mindre deler som blir utviklet del for del",
        "Lager en rask prototype basert på eksisterende krav"
      ],
      correctAnswer: 2
    },
    {
      question:
        "I setningen “På Værnes regnet det forrige uke følgende: 6mm 3mm 12mm 4mm 0mm 8mm 6mm” vil delen ”På Værnes regnet det forrige uke følgende:” være:",
      "answers": ["Informasjon", "Data", "Metadata"],
      correctAnswer: 2
    },
    {
      question:
        "Det finnes flere forskjellige typer lagring av data i en datamaskin. Hvilket av alternativene rangerer disse typene fra raskest til tregest?",
      "answers": [
        "Registre -> cache -> primærminnet -> sekundærminnet",
        "Registre -> primærminnet -> sekundærminnet -> cache",
        "Cache -> registre -> primærminnet -> sekundærminnet"
      ],
      correctAnswer: 0
    },
    {
      question:
        "Når du sitter hjemme og leser nyheter på nettsidene til Adresseavisa så vil din datamaskin typisk være hva når det gjelder datakommunikasjon?",
      "answers": ["Tjener", "Klient", "Bruker"],
      correctAnswer: 1
    },
    {
      question:
        "Hvor mange bits trenger du for å kode de 29 bokstavene i vårt alfabet ved enkel koding der alle bokstavene er representert med samme antall bits?",
      "answers": ["4", "5", "6"],
      correctAnswer: 1
    },
    {
      question:
        "Gitt en sortert liste på 4000 verdier. Hvor mange sammenligninger må vi i verste fall gjøre for å søke etter en verdi som ikke finnes i lista ved bruk av binærsøk?",
      "answers": ["8", "12", "48"],
      correctAnswer: 1
    },
    {
      question:
        "Hvor mange forskjellige verdier kan representeres ved hjelp av 8 bits?",
      "answers": ["128", "255", "256"],
      correctAnswer: 2
    },
    {
      question:
        "Hva får man når man multipliserer binærtallene 1011 og 11001 med hverandre?",
      "answers": ["101111001", "100010011", "110011011"],
      correctAnswer: 1
    },
    {
      question:
        "Hva er fordelen med inkrementell utviklingsmetode sammenliknet med vannfallsmetoden?",
      "answers": [
        "Med inkrementell utvikling fullføres faser som f.eks. kravspesifikasjon helt ferdig før man går videre",
        "Med inkrementell utvikling deles prosjektet opp i mindre deler hvor man utfører flere faser (som kravspesifisering, design, koding) for hver del",
        "Med inkrementell utvikling begynner man å skrive koden først, og deretter dokumenterer man kravene og lager designet"
      ],
      correctAnswer: 1
    },
    {
      question:
        "Hvilken av disse enhetene benytter seg av IP-adresser for å videreformidle informasjon på nettverket?",
      "answers": ["Nav (Hub)", "Svitsj (Switch)", "Ruter (Router)"],
      correctAnswer: 2
    },
    {
      question: "Hvilken av de følgende er en lovlig IP-addresse?",
      "answers": ["116.259.241.13", "8.7.9.2", "12.234.12.104.77"],
      correctAnswer: 1
    },
    {
      question:
        "Hva betyr synbarhet ved programmering av funksjoner/metoder?",
      "answers": [
        "Alle variabler kommer tydelig frem ved listing",
        "Variabler kan nåes fra hovedkoden",
        "Samme navn kan brukes på variabler i forskjellige funksjoner/metoder"
      ],
      correctAnswer: 2
    },
    {
      question: "Hvorfor komprimeres data?",
      "answers": [
        "For at det skal ta mindre plass",
        "For at det skal kunne gjøres tilgjengelig for alle på Internett",
        "For at data ikke skal kunne leses av uvedkommende"
      ],
      correctAnswer: 0
    },
    {
      question: "Hva er en protokoll?",
      "answers": [
        "Et sett av kommunikasjonsregler",
        "Et program som oversetter programmeringskode til kode som kan kjøres på en datamaskin",
        "Hovedkomponenten i en vanlig datamaskin"
      ],
      correctAnswer: 0
    },
    {
      question: "Hva brukes en prosessor hovedsakelig til?",
      "answers": [
        "Direkte kjøre kode skrevet i JSP, Matlab eller andre programmeringsspråk",
        "Utføre regneoperasjoner på og sammenlikninger av registre",
        "Utføre regneoperasjoner på og sammenlikninger direkte på data lagret i primærminnet (RAM"
      ],
      correctAnswer: 1
    },
    {
      question:
        "I hvilket tilfelle kan man IKKE benytte seg av binærsøkalgoritmen?",
      "answers": [
        "Når man har for stor datamengde (tar for lang tid)",
        "Når dataene ikke er sortert",
        "Når man ikke vet om det man søker etter finnes i dataene"
      ],
      correctAnswer: 1
    },
    {
      question: "Hva er tallet 1365 representert som et binært tall?",
      "answers": ["11100101011", "10110101010", "10101010101"],
      correctAnswer: 2
    },
    {
      question: "Hva er hovedoppgaven til kontrollenheten i en prosessor?",
      "answers": [
        "Holde orden på hvor langt prosessoren har kommet i JSP- eller Matlabprogrammet",
        "Kontrollere at regneoperasjonene i ALU er korrekte",
        "Ha kontroll på hvor neste instruksjon ligger i minnet (RAM)"
      ],
      correctAnswer: 2
    },
    {
      question:
        "TCP/IP er en samling av protokoller som inneholder protokollene:",
      "answers": [
        "HTTP, HTML, PHP, TCP, SMTP",
        "HTTP, FTP, TCP, IP, SMTP",
        "Kun TCP og IP"
      ],
      correctAnswer: 1
    },
    {
      question: "Hva er den viktigste oppgaven til en nettverksruter?",
      "answers": [
        "Koble sammen flere nettverkssegmenter av samme type",
        "Forsterke og rense signaler i nettverket",
        "Koble sammen ulike nettverk og nettverkssegmenter"
      ],
      correctAnswer: 2
    },
    {
      question:
        "Minnehierarki i en datamaskin sortert på hastighet er som følger:",
      "answers": [
        "registre, cache, primærminne, sekundærminne",
        "cache, registre, primærminne, sekundærminne",
        "primærminne, cache, registre, sekundærminne"
      ],
      correctAnswer: 0
    },
    {
      question: "Hvor mange bits benyttes i nåværende IP-adresser (IPv4)?",
      "answers": ["32 bits", "16 bits", "48 bits"],
      correctAnswer: 0
    },
    {
      question:
        "01010101 i binærtallsystemet, er det samme som (i titallsystemet)?",
      "answers": ["105", "95", "85"],
      correctAnswer: 2
    },
    {
      question:
        "4095 (i titallsystemet) skal kodes heksadesimalt (16-tallsystemet). Hvor mange siffer blir det i resultatet?",
      "answers": ["5", "4", "3"],
      correctAnswer: 2
    },
    {
      question: "Hva er den viktigste oppgaven til en nettverkssvitsj?",
      "answers": [
        "Sørge for at alle påkoblede maskiner mottar alle datapakker.",
        "Overvåke og stenge ute uønsket nettverkstrafikk.",
        "Fordele datatrafikken slik at datapakkene kommer frem til riktig mottaker."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Vi har en sortert liste med 5 000 000 elementer. Ved binærsøking i denne listen, hvor mange sammenligninger må vi i verste fall gjøre?",
      "answers": ["Omtrent 20", "Omtrent 30", "Omtrent 40"],
      correctAnswer: 0
    },
    {
      question: "Testing av programkode vil si at man:",
      "answers": [
        "Går gjennom programkoden og prøver å finne feil.",
        "Lar noen utvalgte brukere prøve systemet.",
        "Kjører programkoden og sjekker at forholdet mellom inndata og utdata er som forventet."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Hva er fordelen med asymmetrisk kryptering fremfor symmetrisk kryptering?",
      "answers": [
        "Man kan publisere den ene nøkkelen.",
        "Det er vanskeligere å knekke koden fordi man må finne to ulike nøkler.",
        "Man kan være sikker på identiteten til den som har sendt meldingen (autentisering)."
      ],
      correctAnswer: 0
    },
    {
      question: "Hva er nettverkstjenester?",
      "answers": [
        "E-post, filoverføring og trådløst nettverk.",
        "Fildeling, WWW og e-post.",
        "Filoverføring, TCP/IP og WWW."
      ],
      correctAnswer: 1
    },
    {
      question: "CPU er forkortelse for:",
      "answers": [
        "Central Pipelining Unit.",
        "Coordinating Processor Unit.",
        "Central Processing Unit."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Et tall av typen double lagres i 8 byte. Omtrent hvor mange slike tall kan lagres i en gigabyte (GB)?",
      "answers": [
        "Ca. 134 000.",
        "Over 100 millioner.",
        "Omtrent en milliard."
      ],
      correctAnswer: 1
    },
    {
      question: "På hvilken måte skiller harddisk seg fra primærminne (RAM):",
      "answers": [
        "Det tar lengre tid å skrive eller lese.",
        "Dataene er sikre mot strømbrudd.",
        "Begge utsagnene er feil.",
        "Begge utsagnene er riktig."
      ],
      correctAnswer: 3
    },
    {
      question: "A and (B or C) er True (sant) for:",
      "answers": [
        "A True, B True, C False",
        "A True, B False, C False",
        "A False, B True, C True"
      ],
      correctAnswer: 0
    },
    {
      question:
        "Hovedgrunnen til at vi deler opp lengre programmer ved å bruke metoder:",
      "answers": [
        "Det går raskere å kjøre programmet.",
        "Programmet får høyere funksjonalitet.",
        "Det er lettere å forstå programmet."
      ],
      correctAnswer: 2
    },
    {
      question: "Hva stemmer ikke om kommentarer i programkode?",
      "answers": [
        "Programmet tar større plass på harddisken.",
        "De gjør det lettere å forstå koden.",
        "Programmet kjører langsommere."
      ],
      correctAnswer: 2
    },
    {
      question:
        "Hvor mange bit trenger du til å kode det norske alfabetet (29 forskjellige bokstaver) ved enkel koding hvor alle symbolene er representert med samme antall bit.",
      "answers": ["5 bits", "6 bits", "8 bits"],
      correctAnswer: 0
    },
    {
      question:
        "Hvilken type minne har normalt høyest tilgangstid (access time) i en datamaskin?",
      "answers": ["Registre", "Cache", "Primærminne"],
      correctAnswer: 2
    },
    {
      question: "En ulempe med åpen kildekode (open source) er:",
      "answers": [
        "Du kan ikke endre produktet selv",
        "Det er store firma står som regel bak utviklingen",
        "Du har normalt ikke krav på brukerstøtte"
      ],
      correctAnswer: 2
    },
    {
      question: "Hva er svart-boks testing?",
      "answers": [
        "Testing som konsentrerer seg om systemets eller modulens indre oppbygning",
        "Testing som ikke ser på systemets eller modulens indre oppbygning",
        "Testing som konsentrerer seg om hvordan de ulike delene i et system fungerer sammen"
      ],
      correctAnswer: 1
    },
    {
      question: "Hva er kjernen i et operativsystem?",
      "answers": [
        "Den delen som tar i mot input fra brukeren",
        "Den delen som administrerer maskinressurser",
        "Det mediet som operativsystemet installeres fra"
      ],
      correctAnswer: 1
    },
    {
      question: "Hvorfor krypteres data?",
      "answers": [
        "For at data ikke skal kunne leses av uvedkommende",
        "For at det skal ta mindre plass",
        "For at det skal kunne gjøres tilgjengelig for alle på Internett"
      ],
      correctAnswer: 0
    },
    {
      question: "En protokoll er:",
      "answers": [
        "Et program som oversetter kildekode til maskinkode slik at det kan kjøres på en datamaskin",
        "En enhet som gjør beregninger og sammenlikninger i en datamaskin",
        "Et sett av kommunikasjonsregler"
      ],
      correctAnswer: 2
    },
    {
      question: "Er binærsøk alltid raskere enn sekvensielt søk?",
      "answers": [
        "Binærsøk er alltid raskere enn sekvensielt søk uansett",
        "Binærsøk er alltid raskere enn sekvensielt søk på sorterte datamengder",
        "Sekvensielt søk kan være raskere enn binærsøk"
      ],
      correctAnswer: 2
    },
    {
      question:
        "Hva gjør man når man designer et system under systemutvikling?",
      "answers": [
        "Beskriver hva systemet skal gjøre",
        "Beskriver hvordan systemet skal lages",
        "Beskriver kun hvordan systemet skal se ut"
      ],
      correctAnswer: 1
    },
    {
      question: "I det binære tallsystemet, hva er 010 multiplisert med 101?",
      "answers": ["111", "1010", "1111"],
      correctAnswer: 1
    },
    {
      question: "Hva er inspeksjon i systemutvikling?",
      "answers": [
        "Inspeksjon innebærer å finne feil eller forsikre seg om at feil ikke finnes uten å kjøre programmet",
        "Inspeksjon innebærer å undersøke om de som programmerer lager ryddige programmer som er lette å lese",
        "Inspeksjon innebærer å finne feil i koden ved å kjøre programmet"
      ],
      correctAnswer: 0
    },
    {
      question:
        "Hva er en normal konfigurasjon av en klient-tjener arkitektur?",
      "answers": [
        "Få tjenere, mange klienter",
        "Mange tjenere, få klienter",
        "Mange tjenere, mange klienter"
      ],
      correctAnswer: 0
    },
    {
      question:
        "En bit av et program består av ei for-løkke inne i ei for-løkke. Begge løkkene løper igjennom tallverdiene 1:N. Tidsforbruket til denne programbiten vil være proporsjonalt med -",
      "answers": ["N", "N log N", "N^2"],
      correctAnswer: 2
    },
    {
      question:
        "Gitt ei sortert liste av 272 verdier. Vi søker etter en verdi som ikke finnes i lista. Hvor mange sammenligninger må vi i verste fall gjøre ved bruk av binærsøk?",
      "answers": ["136", "8", "9"],
      correctAnswer: 2
    }
  ]
}
