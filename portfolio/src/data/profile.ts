import type { Activity, Certification, Competition, Education, Experience, Language, Project, Skill } from "./profileTypes"

import brt from '../assets/experience/brt.png'
import futura from '../assets/experience/futura.png'
import campusStore from '../assets/experience/campustore.webp'
import scuolaFutura from '../assets/experience/scuolaFutura.svg'
import scuolaDiRobotica from '../assets/experience/scuolaDiRobotica.png'
import glovo from '../assets/experience/glovo.png'
import educoSummerCamp from '../assets/experience/educo.png'
import unibo from '../assets/experience/unibo.svg'
import iisVolta from '../assets/experience/iisvolta.jpg'
import poliCollege from '../assets/experience/poliCollege.jpeg'
import cambridge from '../assets/experience/cambridge.jpg'
import luiss from '../assets/experience/luiss.png'
import oii from '../assets/experience/oii.png'
import robocup from '../assets/experience/robocup.png'
import nao from '../assets/experience/nao.png'
import wro from '../assets/experience/wro.png'
import amadeus from '../assets/experience/amadeus.jpg'
import conservatorio from '../assets/experience/conservatorio.jpg'
import trinity from '../assets/experience/trinity.png'
import foto from '../assets/michael.jpeg'

export const profile = {
    name: "Michael Usai",
    age: 22,
    title: "Programmatore",
    email: "usai.michael265@.com",
    summary: "",    //TODO 
    links: {
        linkedin: "https://www.linkedin.com/in/michael-usai-321626260",   
        github: "https://github.com/usaimic", 
        cv: import.meta.env.BASE_URL + "michael_usai_cv.pdf",
    },
    photo: foto,
    photoAlt: "Foto di Michael Usai",
    openToWork: true,
    actuallyWorking: true,
}

export const experiences: Experience[] = [
  {
    role: 'Operatore di trasporto',
    company: 'Bartolini BRT',
    location: 'Pescara, Italia',
    period: 'Set 2026 – oggi',
    highlights: [
      'Carico e scarico dei mezzi',
      'Controllo integrità pacchi',
      'Stoccaggio della merce',
      'Smistamento pacchi',
      'Gestione magazzino',
    ],
    technologies: [],
    image: brt,
    imageAlt: 'Logo di Bartolini BRT',
    imageFit: 'contain',
    current: true
  },
  {
    role: 'Tirocinio universitario – Sviluppo software',
    company: 'Futura',
    location: 'Pescara, Italia',
    period: 'Ott 2025 - Nov 2025',
    description:
      'Tirocinio da 150 ore con un progetto individuale sviluppato seguendo lo stack tecnologico adottato dall\'azienda.',
    technologies: [ 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'NestJS' , 'mongodb' ], 
    featured: true,
    image: futura,
    imageAlt: 'Logo di Futura',
    imageFit: 'contain',
  },
  {
    role: 'Docente/Formatore',
    company: 'Campus Store',
    location: 'Altamura (BA), Italia',
    period: '22 – 24 set 2025',
    description: 'Corso di robotica per la scuola primaria.',
    technologies: [],
    featured: true,
    image: campusStore,
    imageAlt: 'Logo di Campus Store',
    imageFit: 'contain',
  },
  {
    role: 'Staff Robocup Nazionale 2025',
    company: 'Evento Scuola Futura – Ministero dell\'Istruzione',
    location: 'Pescara, Italia',
    period: '11–14 apr 2025', 
    highlights: [
      'Aiuto coordinamento della sede di svolgimento',
      'Formazione e coordinamento degli arbitri',
      'Responsabile punteggi',
      'Realizzazione del sito con tabella punteggi in tempo reale',
      'Realizzazione del sito con informazioni sull\'evento e sulle squadre partecipanti',
      'Gestione strumenti di rilevamento punteggi e gestione delle partite',
    ],
    technologies: ['HTML', 'JavaScript', 'Tailwind CSS'],
    link: {
      label: 'Pagina dell\'evento',
      url: 'https://scuolafutura.pubblica.istruzione.it/scuola-futura-campus/pescara',
    },
    featured: true,
    image: scuolaFutura,
    imageAlt: 'Logo di Scuola Futura',
    imageFit: 'contain',
  },
  {
    role: 'Docente/Formatore',
    company: 'Scuola di Robotica',
    location: 'Torre dei Passeri (PE), Italia',
    period: '26 mar 2025',
    description: 'Corso di robotica per la scuola primaria.',
    technologies: [],
    featured: true,
    image: scuolaDiRobotica,
    imageAlt: 'Logo di Scuola di Robotica',
    imageFit: 'contain',
  },
  {
    role: 'Docente/Formatore',
    company: 'Scuola di Robotica',
    location: 'Spoltore (PE), Italia',
    period: '3 – 15 feb 2025',
    description: 'Corso di robotica per la scuola primaria.',
    technologies: [],
    featured: true,
    image: scuolaDiRobotica,
    imageAlt: 'Logo di Scuola di Robotica',
    imageFit: 'contain',
  },
  {
    role: 'Consegne a domicilio',
    company: 'Glovo',
    location: 'Pescara, Italia',
    period: 'Giu 2023 – oggi',
    highlights: [
      'Consegne a domicilio motomunito a Pescara',
      'Gestione del tempo e delle priorità tra più ordini',
      'Contatto diretto con clienti e ristoratori',
      'Attività svolta in parallelo agli studi universitari',
    ],
    technologies: [],
    image: glovo,
    imageAlt: 'Logo di Glovo',
    imageFit: 'contain',
    current: true
  },
  {
    role: 'Tutor scolastico',
    company: 'Educo SummerCamp',
    period: '10 – 17 lug 2022',
    highlights: [
      'Tutoring',
      'Helper',
      'Aiuto generale allo staff di Educo',
      'Figura di riferimento per i ragazzi',
    ],
    technologies: [],
    image: educoSummerCamp,
    imageAlt: 'Logo di Educo SummerCamp',
    imageFit: 'contain',
  },
  {
    role: 'Cameriere',
    company: 'Bar', 
    period: 'Giu 2020 – Ago 2021',
    description: 'Prima esperienza lavorativa: servizio ai clienti.',
    technologies: [],
  },
]

export const education: Education[] = [
  {
    title: 'Laurea in Informatica - L31',
    institution: 'Alma Mater Studiorum – Università di Bologna',
    location: 'Bologna, Italia',
    period: 'Set 2023 – Ott 2026',
    grade: 'In corso',
    url: 'https://www.unibo.it/it',
    image: unibo,
    imageAlt: 'Logo di Alma Mater Studiorum – Università di Bologna',
    imageFit: 'contain',
  },
  {
    title: 'Diploma in Informatica',
    institution: 'I.I.S. Alessandro Volta',
    location: 'Pescara, Italia',
    period: 'Set 2018 – Lug 2023',
    grade: '100/100 con lode',
    url: 'https://iisvoltapescara.edu.it',
    image: iisVolta,
    imageAlt: 'Logo di I.I.S. Alessandro Volta',
    imageFit: 'contain',
  },
]

export const certifications: Certification[] = [
  {
    name: 'Badge Digitale – Programmare con Python',
    issuer: 'Politecnico di Milano – PoliCollege',
    date: '17 feb – 15 mar 2023',
    description:
      'Corso su Python avanzato: librerie per l\'analisi e la visualizzazione dei dati e animazioni interattive.',
    url: 'https://app.myopenbadge.com/receive/USnyXLdHYjF-3916ba9ead2cf7d853dd9a7ba26e4313-S36YqwF-91686663553/WVYgxbQvP-ed92af8f46d8a4d55ee524538090e7d7-w5CL0Ul-2/public',
    issuerUrl: 'https://www.policollege.polimi.it/2022/10/10/programmare-con-python/',
    image: poliCollege,
    imageAlt: 'Logo di Politecnico di Milano – PoliCollege',
    imageFit: 'contain',
  },
  {
    name: 'Certificato di inglese B1',
    issuer: 'Cambridge English',
    date: '15 giu 2022',
    issuerUrl: 'https://www.cambridgeenglish.org/',
    image: cambridge,
    imageAlt: 'Logo di Cambridge English',
    imageFit: 'contain',
  },
  {
    name: 'Badge Digitale – Facciamo un\'app',
    issuer: 'Politecnico di Milano – PoliCollege',
    date: '18 feb – 11 mar 2022',
    description:
      'Progettazione e sviluppo di app cross-platform per Android e iOS con Flutter.',
    url: 'https://app.myopenbadge.com/receive/USnyXLdHYjF-3916ba9ead2cf7d853dd9a7ba26e4313-S36YqwF-91686663553/etX2aw34d1vmKJznFRNpbrsy/public',
    issuerUrl: 'https://www.policollege.polimi.it/2022/01/17/facciamo-unapp/',
    image: poliCollege,
    imageAlt: 'Logo di Politecnico di Milano – PoliCollege',
    imageFit: 'contain',
  },
  {
    name: 'Corso di preparazione alle selezioni territoriali OII 2021',
    issuer: 'Università LUISS',
    date: '1 – 13 mag 2021',
    highlights: ['Algoritmi', 'Tecniche di programmazione', 'Ottimizzazione del codice'],
    issuerUrl:
      'https://www.luiss.it/studenti/digital-skills/loft/preparazione-alle-olimpiadi-di-informatica',
    image: luiss,
    imageAlt: 'Logo di Università LUISS',
    imageFit: 'contain',
  },
  {
    name: 'Formazione in tecnologie didattiche innovative',
    issuer: 'Campus Store – Scuola di Robotica',
    image: campusStore,
    imageAlt: 'Logo di Campus Store – Scuola di Robotica',
    imageFit: 'contain',
  },
]

export const competitions: Competition[] = [
  {
    name: 'Olimpiadi di Informatica a Squadre',
    period: '2019 – 2023',
    description:
      'Gara di problem solving e programmazione in team di massimo 4 persone.',
    result: '2° posto nella classifica regionale',
    featured: true,
    image: oii,
    imageAlt: 'Logo delle Olimpiadi di Informatica',
    imageFit: 'contain',
  },
  {
    name: 'Olimpiadi di Informatica (individuale)',
    period: '2019 – 2022',
    description:
      'Gara basata sulla scrittura di algoritmi in pseudocodice e in un linguaggio di programmazione.',
    highlights: ['Superamento della fase regionale', 'Partecipazione alla fase nazionale'],
    featured: true,
    image: oii,
    imageAlt: 'Logo delle Olimpiadi di Informatica',
    imageFit: 'contain',
  },
  {
    name: 'Robocup Regionale – Organizzazione',
    period: '2022 – 2024',
    role: 'Vice coordinatore e arbitro',
    highlights: [
      'Organizzazione e preparazione dell\'evento',
      'Sviluppo della piattaforma web per registrazione e gestione dei punteggi',
      'Vice coordinatore',
      'Arbitraggio',
    ],
    tech: ['LEGO Mindstorm'], 
    featured: true,
    image: robocup,
    imageAlt: 'Logo della Robocup',
    imageFit: 'contain',
  },
  {
    name: 'Hackathon #Brain',
    period: '29 mag – 1 giu 2022',
    description:
      'Hackathon organizzato dalla rete #Brain e coordinato dal mio istituto: due giorni di progettazione e un terzo dedicato alle premiazioni.',
    role: 'Mentor',
    result: 'Premio coerenza alla squadra',
    links: [
      {
        label: 'Articolo sul sito della scuola',
        url: 'https://iisvoltapescara.edu.it/evento/evento-di-rete-brain/',
      },
      { label: 'Video espositivo realizzato da me', 
        url: 'https://youtu.be/TVvKEQBE9YU'
      },
    ],
    featured: true,
  },
  {
    name: 'Future Class – Think global and act for a sustainable world',
    period: 'Set 2020 – Giu 2023',
    description:
      'Progetto triennale del mio istituto, parte delle azioni MIUR per potenziare le competenze digitali. Un team di studenti selezionati ha progettato prototipi industriali ad alta sostenibilità insieme a due aziende partner, il gruppo Pirelli e il centro di Biotecnologie dell\'Ospedale Cardarelli di Napoli.',
    links: [{ label: 'Sito del progetto', url: 'https://www.voltafutureclass.eu/' }],
    featured: true,
  },
  {
    name: 'New Future Class – Tutoring',
    period: 'Set 2022 – Giu 2023',
    description:
      'Tutoring verso il nuovo team di studenti che ha proseguito il progetto Future Class.',
    highlights: [
      'Trasmissione delle competenze acquisite',
      'Insegnamento e mentoring',
      'Supporto nell\'uso di Pepper (robot umanoide) e ZSpace',
    ],
  },
  {
    name: 'Nao Challenge',
    period: 'Set 2021 – Giu 2022',
    description:
      'Programmazione del robot umanoide Nao.',
    result: 'Fase nazionale',
    image: nao,
    imageAlt: 'Logo della Nao Challenge',
    imageFit: 'contain',
  },
  {
    name: 'WRO Robotica',
    period: 'Set – Dic 2021',
    description:
      'Progettazione di un robot programmabile in grado di eseguire istruzioni in autonomia rispettando le regole di gara.',
    result: 'Fase nazionale',
    image: wro,
    imageAlt: 'Logo della WRO',
    imageFit: 'contain',
  },
  {
    name: 'Olimpiadi di Robotica',
    period: 'Gen – Giu 2022',
    description:
      'Progettazione teorica e pratica di un robot umanoide di supporto didattico o ospedaliero.',
  },
  {
    name: 'Robocup Regionale – Partecipante',
    period: '2020 – 2022',
    description:
      'Progettazione di un robot programmabile capace di eseguire istruzioni in maniera autonoma.',
    result: 'Fase regionale',
    image: robocup,
    imageAlt: 'Logo della Robocup',
    imageFit: 'contain',
  },
  {
    name: 'Olimpiadi di Matematica',
    period: '2017 – 2019',
    description: 'Competizione di logica e quesiti matematici (livello scuola media).',
    result: '7° posto alla fase regionale (accedevano i primi 6)',
  },
]

export const music: Activity[] = [
  {
    title: 'Orchestra Giovanile Amadeus',
    period: 'Set 2017 – Set 2024',
    description:
      'Orchestra culturale e musicale che porta la musica al pubblico nei concerti.',
    image: amadeus,
    imageAlt: 'Logo dell\'Orchestra Giovanile Amadeus',
    imageFit: 'contain',
  },
  {
    title: 'Conservatorio Luisa D\'Annunzio',
    subtitle: 'Flauto traverso · 5° anno pre-accademico',
    period: 'Set 2017 – Lug 2022',
    image: conservatorio,
    imageAlt: 'Logo del Conservatorio Luisa D\'Annunzio',
    imageFit: 'contain',
  },
  {
    title: 'Concorso Musicale Nazionale di Ortona',
    subtitle: 'Flauto traverso',
    period: '1 – 3 giu 2018',
    result: '2° premio · 93/100',
  },
  {
    title: 'Concorso Musicale di Penne',
    subtitle: 'Flauto traverso',
    period: '1 - 25 giu 2017',
    result: '2° premio · 92/100',
  },
  {
    title: 'Certificato Trinity College',
    subtitle: 'Flauto traverso',
    period: '20 giu 2017',
    result: '93/100',
    url: 'https://www.trinitycollege.it/',
    image: trinity,
    imageAlt: 'Logo del Trinity College',
    imageFit: 'contain',
  },
]

export const languages: Language[] = [
  { language: 'Italiano', level: 'Madrelingua' },
  { language: 'Inglese', level: 'B1', note: 'Certificato Cambridge English' },
]

export const skills: Skill[] = [
  {
    category: 'Linguaggi',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'PHP'],
  },
  {
    category: 'Web e mobile',
    items: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Robotica e hardware',
    items: ['LEGO Mindstorms', 'Robot Nao', 'Pepper'],
  },
]

export const projects: Project[] = [
    {
        name: 'Calendario multifunzione - UniBo 2° anno',
        description: 'Progetto universitario di gruppo per la creazione di un calendario multifunzione.',
        technologies: ['React', 'Html', 'Tailwind', 'TypeScript', 'Node.js', 'API'],
        repo: 'https://github.com/usaimic/progettotw'
    },
    {
        name: 'Tetris - UniBo 1° anno',
        description: 'Progetto universitario di gruppo per la creazione di una versione del gioco Tetris su C++, con libreria grafica Ncurses.',
        technologies: ['C++', 'Ncurses'],
        repo: 'https://github.com/usaimic/Tetris_ncurses'
    },
    {
        name: 'BlackJack - I.I.S. Alessandro Volta 5° anno',
        description: 'Progetto scolastico per la creazione di una versione del gioco BlackJack, con lobby di giocatori locale, su Java, senza librerie grafiche.',
        technologies: ['Java'],
        repo: 'https://github.com/usaimic/LocalGame-BlackJack',
        todo: ['Aggiungere interfaccia grafica', 'Aggiungere lobby di giocatori online']
    },
    {
        name: 'Battaglia navale - Tirocinio universitario',
        description: 'Progetto del tirocinio individuale per la creazione di una versione del gioco Battaglia navale, con lobby di giocatori online, su React e TypeScript, basato su database online. Il progetto era incentrato sulla logica di backEnd, con alcuni giorni impiegati nello sviluppo frontEnd. Progetto non terminato',
        technologies: ['React', 'TypeScript', 'Nest.js', 'Docker', 'PostgreSQL', 'tailwindcss'],
        repo: 'https://github.com/usaimic/navalBattle',
        todo: ['Completare interfaccia grafica', 'Verificare logica di gioco', 'Assemblare frontEnd - backEnd']
    },
    {
        name: 'Portfolio personale',
        description: 'Sito web personale per mostrare il mio curriculum, le mie esperienze e i miei progetti.',
        technologies: ['TypeScript', 'React', 'Tailwind CSS'],
    }
]