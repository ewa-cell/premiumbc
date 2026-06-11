/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ProblemCard,
  SystemElement,
  WorkStep,
  ServiceItem,
  ClientFitItem,
  EditorialInsight,
  ExperienceLogo
} from './types';

export const HERO_CONTENT = {
  headlineEn: "I help business owners identify the relationships that influence growth and profitability.",
  headlinePl: "Skuteczny marketing nie zaczyna się od kampanii.\nZaczyna się od zrozumienia biznesu.",
  subheadlineEn: "Marketing, communication, customer insight and data only create value when they support better decisions and real business results.",
  subheadlinePl: "Marketing, komunikacja, wiedza o kliencie i dane tworzą wartość tylko wtedy, gdy wspierają lepsze decyzje i realne wyniki biznesowe.",
  ctaPrimaryEn: "Let's talk about what is currently limiting your company's growth.",
  ctaPrimaryPl: "Porozmawiajmy o tym, co obecnie ogranicza wzrost Twojej firmy.",
  ctaSecondaryEn: "LinkedIn Profile",
  ctaSecondaryPl: "Profil LinkedIn",
  brandStatementEn: "Marketing is the starting point. Business results are the goal.",
  brandStatementPl: "Marketing to punkt wyjścia. Wyniki biznesowe to cel!"
};

export const problemCards: ProblemCard[] = [
  {
    id: "unclear-profit",
    number: "01",
    titleEn: "A missing marketing strategy",
    titlePl: "Brak strategii marketingowej",
    descriptionEn: "Lack of clear objectives and strategic direction; actions are taken on an ad hoc basis, without KPIs, performance measurement, or data-driven decision-making",
    descriptionPl: "Działanie bez określonego celu, z dużą przypadkowością, punktowo, bez KPI, mierzenia efektów i wyciągania wniosków",
    diagnosticMetric: "Do you calculate the net margin of every product/service after fully loading operational overhead?"
  },
  {
    id: "marketing-impact",
    number: "02",
    titleEn: "Marketing activities without measurable impact",
    titlePl: "Działania marketingowe bez mierzalnego wpływu",
    descriptionEn: "High visitor volume or vanity metrics do not automatically equate to bottom-line results. Marketing must be designed as a business investment aligned with target profitability.",
    descriptionPl: "Wysoki ruch na stronie i wskaźniki zaangażowania (vanity metrics) nie przekładają się automatycznie na zysk. Marketing musi być zaprojektowany jako inwestycja powiązana z marżą.",
    diagnosticMetric: "Does your marketing team report in terms of pageviews or actual customer lifetime value vs acquisition cost?"
  },
  {
    id: "inconsistent-comms",
    number: "03",
    titleEn: "Inconsistent communication across channels",
    titlePl: "Niespójna komunikacja w różnych kanałach",
    descriptionEn: "Vague positioning and inconsistent messaging confuse prospective clients and erode pricing authority. Market authority demands absolute alignment across physical and digital touchpoints.",
    descriptionPl: "Niejasna komunikacja i niespójne komunikaty dezorientują rynek i niszczą siłę cenową. Budowanie autorytetu wymaga spójności przekazu we wszystkich punktach styku.",
    diagnosticMetric: "Will a stranger see the exact same value proposition on your LinkedIn, sales pitch deck, and website?"
  },
  {
    id: "automation-lack",
    number: "04",
    titleEn: "No automation or operational structure",
    titlePl: "Brak automatyzacji lub struktury operacyjnej",
    descriptionEn: "Repetitive manual work and unstructured workflows breed human errors and limit scalability. Standardized operating procedures combined with tech triggers unlock growth capacity.",
    descriptionPl: "Ręczna obróbka danych i niespójne przepływy pracy generują błędy oraz uniemożliwiają skalowanie. Przejrzyste procedury i mądra automatyzacja to warunki wzrostu.",
    diagnosticMetric: "What proportion of onboarding, reporting, and fulfillment in your company is still executed manually?"
  },
  {
    id: "prioritization-lack",
    number: "05",
    titleEn: "Lack of prioritization in business decisions",
    titlePl: "Brak priorytetyzacji w decyzjach biznesowych",
    descriptionEn: "Attempting to optimize everything simultaneously dilutes focus and capital. Sustainable scaling requires identifying and lifting the single binding constraint inside your model.",
    descriptionPl: "Próba jednoczesnej optymalizacji wszystkiego rozprasza kapitał i uwagę. Zrównoważone skalowanie wymaga zidentyfikowania i usunięcia jednego kluczowego wąskiego gardła.",
    diagnosticMetric: "Are major strategic objectives chosen based on high-impact bottlenecks, or intuitive reactions to daily crises?"
  },
  {
    id: "customer-segments",
    number: "06",
    titleEn: "Poor understanding of customer segments",
    titlePl: "Niewystarczające zrozumienie segmentów klientów",
    descriptionEn: "Treating all accounts with the same weight drains resources. Growth stems from acquiring segments with high lifetime values, clear expectations, and low cost-to-serve.",
    descriptionPl: "Traktowanie wszystkich klientów w ten sam sposób marnuje zasoby. Wzrost wynika z pozyskiwania segmentów o wysokiej wartości (LTV), jasnych oczekiwaniach i niskim koszcie obsługi.",
    diagnosticMetric: "Can you list the exact psychological and data-driven criteria that separate your top 15% clients from the rest?"
  },
  {
    id: "founder-bottleneck",
    number: "07",
    titleEn: "Founder becoming a bottleneck in the company",
    titlePl: "Założyciel stający się wąskim gardłem w firmie",
    descriptionEn: "When key business operations and deal closures depend purely on the founder's daily presence, the organization cannot scale, and its equity valuation stays capped.",
    descriptionPl: "Gdy kluczowe operacje, decyzje i pozyskiwanie ofert zależą wyłącznie od obecności założyciela, organizacja nie może rosnąć, a jej wycena rynkowa pozostaje niska.",
    diagnosticMetric: "Could you step away from your company for 30 days without critical operations stalling or client retention dropping?"
  },
  {
    id: "data-decision-lack",
    number: "08",
    titleEn: "Lack of data-driven decision making",
    titlePl: "Brak podejmowania decyzji w oparciu o dane",
    descriptionEn: "Relying purely on instinct introduces dangerous blind spots. Without structural data capture and dashboard synthesis, leaders act on lag indicators or incomplete narratives.",
    descriptionPl: "Poleganie wyłącznie na instynkcie rodzi niebezpieczne martwe punkty. Bez strukturyzowanego gromadzenia danych i syntezy wskaźników, liderzy działają po omacku.",
    diagnosticMetric: "Are major capital allocations backed by historical unit economics, or by emotional assumptions?"
  }
];

export const systemElements: SystemElement[] = [
  {
    id: "marketing",
    labelEn: "Marketing",
    labelPl: "Marketing",
    roleEn: "The demand generation engine that sparks awareness.",
    rolePl: "Generowanie popytu i budowanie świadomości na rynku.",
    dependencyEn: "Marketing is merely an expensive exercise unless governed by customer lifetime metrics and clear target profits.",
    dependencyPl: "Marketing to tylko kosztowne ćwiczenie, dopóki nie zostanie podporządkowany marżowości i profilom najbardziej zyskownych klientów.",
    connectedTo: ["results", "communication", "customers"],
    color: "#A68966"
  },
  {
    id: "communication",
    labelEn: "Communication",
    labelPl: "Komunikacja",
    roleEn: "The systematic expression of positioning and premium authority.",
    rolePl: "Systemowa ekspresja pozycjonowania i budowanie marki premium.",
    dependencyEn: "If communication is weak, price resistance rises. Clear messaging aligns pre-sales expectation with operational delivery.",
    dependencyPl: "Gdy komunikacja jest słaba, pojawia się opór cenowy. Spójny przekaz harmonizuje oczekiwania klienta z możliwościami operacyjnymi.",
    connectedTo: ["results", "marketing", "customers"],
    color: "#C0A98F"
  },
  {
    id: "customers",
    labelEn: "Customers",
    labelPl: "Klienci",
    roleEn: "The epicenter of unit economics: purchase volume and retention.",
    rolePl: "Epicentrum jednostkowej ekonomii: powtarzalność zakupów i retencja.",
    dependencyEn: "Understanding psychological buying triggers informs both marketing direction and strategic operational priority.",
    dependencyPl: "Zrozumienie psychologicznych motywacji zakupowych leży u podstaw zarówno marketingu, jak i priorytetów operacyjnych.",
    connectedTo: ["results", "marketing", "communication", "data"],
    color: "#8C704F"
  },
  {
    id: "data",
    labelEn: "Data",
    labelPl: "Dane",
    roleEn: "The structural capture of operational and financial reality.",
    rolePl: "Strukturalny zapis finansowej i operacyjnej rzeczywistości.",
    dependencyEn: "Raw numbers are noise. Data must resolve as a clean feedback loop informing structural leadership allocation decisions.",
    dependencyPl: "Surowe liczby to szum. Dane muszą przekładać się na czysty system wskaźników służących do podejmowania decyzji zarządczych.",
    connectedTo: ["results", "customers", "leadership"],
    color: "#8C704F"
  },
  {
    id: "processes",
    labelEn: "Processes",
    labelPl: "Procesy",
    roleEn: "Standard operating workflows that protect margins.",
    rolePl: "Standardowe procedury chroniące marże przed chaosem.",
    dependencyEn: "Without sound workflows, high-volume customer acquisition results in operational strain and service failure.",
    dependencyPl: "Bez stabilnych procedur, zwiększenie sprzedaży prowadzi do chaosu operacyjnego i utraty obiecanej jakości.",
    connectedTo: ["results", "technology", "leadership"],
    color: "#A68966"
  },
  {
    id: "technology",
    labelEn: "Technology",
    labelPl: "Technologia",
    roleEn: "The automation layers that multiply operating leverage.",
    rolePl: "Warstwy automatyzacji zwiększające dźwignię operacyjną.",
    dependencyEn: "Applying systems over broken, manual workflows only accelerates operational friction. Prioritize structure first, then automate.",
    dependencyPl: "Narzędzia nałożone na chaotyczne procesy jedynie przyspieszają marnotrawstwo. Najpierw zbuduj strukturę, potem wdrażaj soft.",
    connectedTo: ["results", "processes"],
    color: "#C0A98F"
  },
  {
    id: "leadership",
    labelEn: "Leadership Decisions",
    labelPl: "Decyzje Lidera",
    roleEn: "High-leverage choices of resource and focus allocation.",
    rolePl: "Decyzje o wysokiej strefie wpływu dotyczące alokacji kapitału.",
    dependencyEn: "The company scales only as fast as the owner can decouple their personal time from basic everyday fulfillment.",
    dependencyPl: "Firma rozwija się tylko tak szybko, jak lider potrafi odseparować swój osobisty czas od bieżącej wiedzy operacyjnej.",
    connectedTo: ["results", "data", "processes"],
    color: "#A68966"
  },
  {
    id: "results",
    labelEn: "Business Results",
    labelPl: "Wyniki Biznesowe",
    roleEn: "The ultimate yardstick: margin expansion and capital efficiency.",
    rolePl: "Ostateczny sprawdzian: wzrost marży i stabilna dochodowość.",
    dependencyEn: "The center of the spiderweb. This is the output toward which all peripheral strategic efforts must converge.",
    dependencyPl: "Centrum całego ekosystemu. To wynik końcowy, ku któremu muszą zbiegać się wszystkie wysiłki strategiczne.",
    connectedTo: ["marketing", "communication", "customers", "data", "processes", "technology", "leadership"],
    color: "#FDFBF7"
  }
];

export const workSteps: WorkStep[] = [
  {
    step: 1,
    titleEn: "Diagnosis",
    titlePl: "Diagnoza",
    focusEn: "Auditing business model, customers, data & communication.",
    focusPl: "Audyt modelu biznesowego, rentowności, klientów i przekazu.",
    detailsEn: [
      "Deep audit of unit economics and margin contribution.",
      "Analysis of customer acquisition channels and lifetime value.",
      "Review of internal data visibility and management metrics.",
      "Mapping the current communication channels for message fragmentation."
    ],
    detailsPl: [
      "Prześwietlenie ekonomiki jednostkowej (unit economics) i marży.",
      "Szczegółowa ocena kanałów pozyskiwania i profilu klientów (LTV).",
      "Audyt systemów zbierania danych i stopnia zaufania do raportów.",
      "Ocena spójności komunikacji we wszystkich punktach kontaktu z rynkiem."
    ]
  },
  {
    step: 2,
    titleEn: "Priorities",
    titlePl: "Priorytety",
    focusEn: "Isolating high-impact leverage points for profitability.",
    focusPl: "Izolacja punktów o największym wpływie na dochodowość.",
    detailsEn: [
      "Identifying the single binding constraint slowing company scalability.",
      "Synthesizing findings into 3 core strategic focuses.",
      "Calculating financial impact projections of proposed shifts.",
      "Structuring timeline to protect capital while aiming for fast growth."
    ],
    detailsPl: [
      "Wskazanie jednej, kluczowej blokady (systemic bottleneck) w biznesie.",
      "Wyznaczenie 3 głównych, kluczowych celów o najwyższym ROI.",
      "Przeliczenie prognoz finansowych i symulacji skutków działań.",
      "Stworzenie harmonogramu chroniącego kapitał przy maksymalnym tempie."
    ]
  },
  {
    step: 3,
    titleEn: "Strategy",
    titlePl: "Strategia",
    focusEn: "Aligning marketing, positioning, and decisions.",
    focusPl: "Harmonizacja marketingu, pozycjonowania i decyzji.",
    detailsEn: [
      "Formulating clear, high-contrast customer positioning.",
      "Defining message discipline and premium communication guidelines.",
      "Aligning marketing acquisition investment with margin contribution.",
      "Designing operational framework for founder independence."
    ],
    detailsPl: [
      "Opracowanie wyrazistego pozycjonowania odrzucającego konkurowanie ceną.",
      "Zdefiniowanie dyscypliny przekazu i reguł komunikacji premium.",
      "Powiązanie kierunku wydatków marketingowych ze strukturą rentowności.",
      "Projektowanie ram operacyjnych uniezależniających firmę od właściciela."
    ]
  },
  {
    step: 4,
    titleEn: "Implementation",
    titlePl: "Wdrożenie",
    focusEn: "Restructuring processes, operational rules, and automation.",
    focusPl: "Przebudowa procesów, procedur i wdrożenie automatyzacji.",
    detailsEn: [
      "Documenting high-impact operational standard operating procedures.",
      "Integrating measurement tracking dashboards (CRM, financial models).",
      "Automating manual overhead processes to build space for scaling.",
      "Embedding communications playbook directly into sales operations."
    ],
    detailsPl: [
      "Uproszczenie i skodyfikowanie procedur chroniących jakość.",
      "Wdrożenie pulpitów analitycznych (CRM, tabele rentowności).",
      "Automatyzacja powtarzalnych zadań w celu uwolnienia zasobów ludzi.",
      "Przełożenie nowej narracji na codzienne skrypty i materiały sprzedaży."
    ]
  },
  {
    step: 5,
    titleEn: "Optimization",
    titlePl: "Optymalizacja",
    focusEn: "Continuous iteration via strict data loop metrics.",
    focusPl: "Ciągła iteracja oparta o rygorystyczną pętlę danych.",
    detailsEn: [
      "Weekly structural review of pipeline conversions and customer acquisition costs.",
      "Fine-tuning operational bottlenecks as they migrate.",
      "Iterating communication based on verified client feedback.",
      "Securing profitability run-rate while driving founder exit from delivery."
    ],
    detailsPl: [
      "Cykliczne (tygodniowe) przeglądy konwersji i kosztu pozyskania klienta (CAC).",
      "Dostrajanie wąskich gardeł w miarę ich naturalnego przesuwania się.",
      "Optymalizacja komunikacji w oparciu o zbierany feedback od rynku.",
      "Utrwalenie nowej rentowności przy dalszym wycofywaniu się założyciela z operacji."
    ]
  }
];

export const CLIENT_FIT_CONTENT = {
  idealTitleEn: "Ideal Engagement Fit",
  idealTitlePl: "Profil idealnego klienta",
  notFitTitleEn: "Outside Our Scope",
  notFitTitlePl: "Poza zakresem współpracy",
  
  idealClients: [
    {
      id: "revenue",
      textEn: "Already generate stable revenue & validation",
      textPl: "Generują stabilne przychody, potrzebują weryfikacji i struktury dla najbardziej efektywnych",
      strategicExplanationEn: "You have verified your market-fit. Our job is not survival, but structuring systems to scale profitability and predictability.",
      strategicExplanationPl: "Masz już produkt i płacących klientów. Naszym zadaniem nie jest walka o przetrwanie, lecz budowa systemu zyskownego wzrostu."
    },
    {
      id: "sustainable",
      textEn: "Want predictability over raw, chaotic spikes",
      textPl: "Dążą do powtarzalnego wzrostu, nie chaotycznych skoków",
      strategicExplanationEn: "Strategic advisory targets high-conviction architecture. We optimize unit economics so growth becomes a controlled capital choice.",
      strategicExplanationPl: "Doradztwo strategiczne ukierunkowane jest na trwałą architekturę biznesu. Optymalizujemy marże, by wzrost był kontrolowany."
    },
    {
      id: "data-driven",
      textEn: "Are receptive to analysis and objective data",
      textPl: "Są otwarci na analizę i obiektywne dane liczbowe",
      strategicExplanationEn: "Instinct gets you from zero to one. Data and structural feedback are required to scale from one into market authority.",
      strategicExplanationPl: "Intuicja działa na starcie. Aby urosnąć dalej i zbudować autorytet, niezbędne jest oparcie się na faktach i liczbach."
    },
    {
      id: "structural-change",
      textEn: "Are prepared to make deep structural decisions",
      textPl: "Są gotowi podjąć trudne decyzje strukturalne",
      strategicExplanationEn: "Scaling requires structural pruning. Willingness to adjust services, teams, and founder dependencies determines overall velocity.",
      strategicExplanationPl: "Skalowanie wymaga uporządkowania organizacji. Gotowość do modyfikacji usług czy ról przesądza o sukcesie."
    },
    {
      id: "profit-focus",
      textEn: "Prioritize bottom-line profitability over topline size",
      textPl: "Stawiają zysk i rentowność ponad samą wielkość przychodów",
      strategicExplanationEn: "Revenue is vanity, profit is sanity. We focus on building equity value, predictable cashflow, and high cash conversion ratios.",
      strategicExplanationPl: "Przychód to statystyka, zysk to rzeczywistość. Skupiamy się na budowie wartości biznesu i płynności finansowej."
    }
  ] as ClientFitItem[],

  notFit: [
    {
      id: "quick-tricks",
      textEn: "Searching for quick viral tricks or hacks",
      textPl: "Szukają szybkich trików marketingowych",
      strategicExplanationEn: "Ad-hoc tactics without fundamental business structures only bleed capital. We do not design shallow, short-term trends.",
      strategicExplanationPl: "Doraźne sztuczki bez fundamentu biznesowego marnują kapitał. Nie zajmujemy się powierzchownymi, chwilowymi modami."
    },
    {
      id: "execution-only",
      textEn: "Need pure hands-on labor (running social ads, post creation)",
      textPl: "Potrzebują wyłącznie rąk do pracy (prowadzenie social media, reklamy)",
      strategicExplanationEn: "I guide business owners as an advisor and strategic partner, bridging strategy and processes rather than acting as a outsourced copywriter.",
      strategicExplanationPl: "Wspieram liderów jako doradca i partner strategiczny. Od zlecenia postów lub reklam są agencje wykonawcze i freelancerzy."
    },
    {
      id: "resist-change",
      textEn: "Resist adapting model parameters and owner dependency",
      textPl: "Stawiają opór zmianom organizacyjnym i delegowaniu powiązań",
      strategicExplanationEn: "If you want different results but insist on micromanaging every single contract, advisor leverage remains capped.",
      strategicExplanationPl: "Jeśli chcesz innych wyników, ale upierasz się przy kontrolowaniu każdego maila, ramy doradcze pozostaną bezużyteczne."
    },
    {
      id: "instant-magic",
      textEn: "Expect overnight magic without structural adaptation time",
      textPl: "Oczekują natychmiastowych cudów bez czasu na wdrożenie zmian",
      strategicExplanationEn: "Strategic adjustments require operational cycles to compound. Sustainable equity changes require a horizon of patience and consistency.",
      strategicExplanationPl: "Zmiany strategiczne potrzebują czasu operacyjnego, by przynieść owoce. Budowanie trwałego zysku wymaga konsekwencji."
    }
  ] as ClientFitItem[]
};

export const services: ServiceItem[] = [
  {
    id: "mentoring",
    titleEn: "Owner Mentoring",
    titlePl: "Mentoring dla Właścicieli",
    taglineEn: "Strategic clarity, structural alignment, and decision-making architecture.",
    taglinePl: "Klarowność strategiczna, struktura i architektura decyzji lidera.",
    descriptionEn: "1-on-1 sparring partnership for business founders. Together, we analyze core dependencies, evaluate capital investments, design organizational structures, and implement workflows to systematically decouple your hours from daily tactical operations.",
    descriptionPl: "Indywidualne partnerstwo dla założycieli firm. Wspólnie analizujemy kluczowe powiązania, oceniamy inwestycje, projektujemy schematy organizacyjne i wdrażamy procesy, które trwale uwalniają Twój czas od bieżących pożarów operacyjnych.",
    scopeEn: [
      "Defining the founder's high-leverage role map",
      "Strategic evaluation of ongoing capital allocation paths",
      "Mentoring through critical transitions (scale-ups, structural reorganization)",
      "Systematic delegation framework design"
    ],
    scopePl: [
      "Określenie mapy zadań założyciela o najwyższej strefie wpływu",
      "Ocena opłacalności planowanych inwestycji kapitałowych",
      "Wsparcie w okresach transformacji (skalowanie, reorganizacja struktur)",
      "Zaprojektowanie ramy systemowego delegowania zadań"
    ]
  },
  {
    id: "fractional-cmo",
    titleEn: "Fractional CMO / Growth Advisor",
    titlePl: "Fractional CMO / Doradca ds. Wzrostu",
    taglineEn: "Linking commercial outputs directly to structural business margin priorities.",
    taglinePl: "Powiązanie działań rynkowych bezpośrednio z rentownością biznesu.",
    descriptionEn: "Injecting heavy-weight marketing and business architecture into your company without the overhead of a full-time executive. We establish commercial metrics discipline and bridge the traditional gap between creative agency expenditure and actual bottom-line results.",
    descriptionPl: "Wprowadzenie kompetencji executive w obszarze marketingu i architektury wzrostu, bez kosztów pełnoetatowego dyrektora. Narzucamy dyscyplinę wskaźników i eliminujemy przepaść między wydatkami na agencje a zyskiem netto.",
    scopeEn: [
      "Designing high-converting sales pipelines",
      "Structuring agency briefs and auditing ongoing performance",
      "Re-aligning marketing spend metrics exclusively to bottom-line profitability",
      "Customer segment optimization and targeting strategy"
    ],
    scopePl: [
      "Projektowanie rentownych lejków i rurociągów sprzedażowych",
      "Audyt działań agencji zewnętrznych i budowanie założeń przetargowych",
      "Powiązanie budżetów marketingowych bezpośrednio z marżą operacyjną",
      "Segmentacja bazy klientów i dopasowanie oferty do grup o wysokim LTV"
    ]
  },
  {
    id: "transformation",
    titleEn: "Business Transformation",
    titlePl: "Transformacja Biznesowa",
    taglineEn: "Comprehensive operational overhaul targeting bottle-necks and owner dependence.",
    taglinePl: "Kompleksowa przebudowa operacyjna celująca w wąskie gardła i samodzielność firmy.",
    descriptionEn: "Deep systemic intervention designed to prepare your company for scalable capacity. We reconstruct internal communication systems, optimize service value ladders, configure dashboards for data clarity, and establish repeatable operational standards.",
    descriptionPl: "Głęboka interwencja systemowa przygotowująca firmę na skalowanie bez chaosu. Przebudowujemy obieg informacji, optymalizujemy drabinę wartości usług, wdrażamy pulpity analityczne i tworzymy powtarzalne standardy pracy.",
    scopeEn: [
      "Mapping and simplifying high-drag operation processes",
      "Building unified data dashboards and diagnostic scorecards",
      "Optimizing the service value matrix for peak profit yield",
      "Re-structuring communications flow to eliminate management friction"
    ],
    scopePl: [
      "Mapowanie i upraszczanie krytycznych procesów wewnątrz firmy",
      "Budowa zintegrowanych pulpitów zarządczych i kart wskaźników",
      "Optymalizacja portfolio usług pod kątem maksymalizacji zysku",
      "Uporządkowanie przepływu informacji eliminujące szumy komunikacyjne"
    ]
  },
  {
    id: "projects",
    titleEn: "Implementation Projects",
    titlePl: "Projekty Wdrożeniowe",
    taglineEn: "Precision architecture for targeted system growth segments and automations.",
    taglinePl: "Precyzyjne wdrożenia systemowe, automatyzacja i projekty celowane.",
    descriptionEn: "Surgical execution of specific growth infrastructure. This includes implementing diagnostic customer feedback mechanisms, standardizing channel communications, deploying core tool stacks, or establishing standardized operating playbooks.",
    descriptionPl: "Precyzyjne, celowane wdrożenia konkretnych elementów infrastruktury wzrostu. Obejmuje m.in. wdrożenie analityki opinii klientów (NPS/feedback loops), skodyfikowanie standardów komunikacji czy wdrożenie dedykowanych technologii.",
    scopeEn: [
      "Designing and embedding deep customer insight feedback loops",
      "Creating channel-agnostic communication guideline playbooks",
      "Deploying and fine-tuning targeted process automations",
      "Audit and cleanup of active digital technology stacks"
    ],
    scopePl: [
      "Zaprojektowanie i wdrożenie mechanizmów zbierania głosu klienta (customer loop)",
      "Stworzenie księgi standardów spójnej komunikacji wielokanałowej",
      "Architektura i konfiguracja automatyzacji konkretnych procesów",
      "Audyt wykorzystywanych licencji i narzędzi cyfrowych"
    ]
  }
];

export const ABOUT_CONTENT = {
  titleEn: "Private Strategic Growth Advisor",
  titlePl: "Strateg i doradca marketingowy",
  positionEn: "Senior business advisor bridging strategy, marketing, customer insights, and structured leadership decisions.",
  positionPl: "Dostrzegam i rozumiem zależności między strategią, projektem a efektem. Pozwala mi to skutecznie przekładać komunikację na sprzedaż i wzrost.",
  
  paragraphsEn: [
    "I combine 20+ years of high-stakes cross-industry consultative experience and real-world business ownership to guide mature founders and business leaders through structural bottlenecks.",
    "I do not sell superficial marketing shortcuts, social media execution packages, or motivational templates. My focus is entirely surgical: revealing the hidden, systemic relationships between your data, your communications, your target client profiles, and your capital allocation.",
    "Having run enterprises myself, I deeply understand the silent friction of founder-dependency, margin dilution, and fragmented operational processes. Together, we analyze your metrics with radical candor and re-architect your business so growth becomes a controlled, predictable, and highly profitable machine."
  ],
  paragraphsPl: [
    "Projektuję marketingowe strategie wzrostu - układam procesy sprzedaży tak, aby marketing przestał być kosztem, a stał się przewidywalną inwestycją zwiększającą zyski.",
    "Mierzę i optymalizuję rentowność - audytuję inwestycje marketingowe i dbam o to, aby każda wydana złotówka budowała realną wartość i wynik finansowy firmy.",
    "Analizuję dane rynkowe - bez zgadywania i gotowych szablonów wskazuję te segmenty i profil klientów, którzy przynoszą Twojemu biznesowi najwyższy zysk.",
    "Stosuję AI i marketing wizualny - wykorzystuję narzędzia sztucznej inteligencji do wspierania trafnych decyzji biznesowych oraz tworzenia nowoczesnej, przyciągającej oko oprawy graficznej.",
    "Przekładam megatrendy na sprzedaż - dostrzegam wnioski płynące z otoczenia rynkowego oraz najnowszych megatrendów i uwzględniam je w strategiach marketingowych wspierających skuteczną sprzedaż."
  ],
  
  stats: [
    { value: "20+", labelEn: "Years Experience", labelPl: "Lat doświadczenia" },
    { value: "Multi-Ind.", labelEn: "Cross-Industry Expertise", labelPl: "Branżowa wszechstronność" },
    { value: "Profit-First", labelEn: "Focus Metric", labelPl: "Główny parametr" },
    { value: "Zero-B.S.", labelEn: "Advisory Vibe", labelPl: "Model doradztwa" }
  ]
};

export const experienceLogos: ExperienceLogo[] = [
  {
    name: "Philipiak Milano",
    roleEn: "Strategic advisory & business growth execution steering premium positioning and high-end sales models.",
    rolePl: "Doradztwo strategiczne i wdrażanie struktur premium wspierających elitarne modele sprzedaży."
  },
  {
    name: "WP2 Investments",
    roleEn: "Business architecture, investment audit, process diagnostics, and commercial modeling across portfolio ventures.",
    rolePl: "Architektura biznesu, audyt inwestycyjny, diagnoza procesów oraz modelowanie komercyjne spółek portfelowych."
  },
  {
    name: "Centrum Zmian",
    roleEn: "Communications design, customer insight structures, and strategic alignment programs for growth transformation.",
    rolePl: "Projektowanie komunikacji, struktury insightów klienckich oraz programy wyrównania strategicznego na rzecz zmiany."
  }
];

export const insights: EditorialInsight[] = [
  {
    id: "profitability-drivers",
    categoryEn: "Business Architecture",
    categoryPl: "Architektura Biznesu",
    titleEn: "The Silent Profit Drains: Why Scale Frequently Erode Your Actual Unit Margin",
    titlePl: "Ciche wycieki zysków: Dlaczego wzrost skali tak często niszczy marżę jednostkową",
    date: "May 2026",
    readTime: "7 min read",
    excerptEn: "As organizations expand, operational drag and service complexity compound exponentially. Learn how to diagnose and prune high-cost, low-yield client behaviors before scaling.",
    excerptPl: "W miarę rozwoju firmy, chaos operacyjny i złożoność rosną wykładniczo. Dowiedz się, jak zdiagnozować i wyeliminować kosztowne nawyki przed wejściem w fazę ekspansji.",
    contentEn: `Many founders mistakenly assume that a 30% increase in topline revenue naturally translates into a proportional leap in profit. In reality, scaling without strict system mapping often causes the opposite: a precipitous drop in net profit margins.

This phenomenon is driven by three covert operational factors:
1. **The Cost-to-Serve Spiral**: As you onboard more diverse customers, you introduce customized workflow exceptions. Without standardization, your team spends disproportionate hours rescuing irregular deliveries.
2. **Margin Dilution from Complex Portfolios**: Adding secondary services to appease demanding new clients dilutes operational focus. You end up subsidizing low-yield, hand-held contracts using margins from your healthy core product.
3. **Internal Friction and Communication Noise**: As headcount grows linearly, communication coordination points expand geometrically. Without structural procedures, managers spend more time in alignment briefings than acting on customer outcomes.

To protect your profits, you must institute a regular unit-contribution audit. Prune clients who fall below your required margin threshold, establish strict service constraints, and build repeatable operational sequences before pulling the marketing demand lever.`,
    contentPl: `Wielu przedsiębiorców błędnie zakłada, że 30-procentowy wzrost przychodów przełoży się automatycznie na wyższy zysk netto. W rzeczywistości skalowanie bez twardego ustrukturyzowania procesów często przynosi efekt odwrotny: nagły spadek rentowności.

Zjawisko to jest napędzane przez trzy procesy:
1. **Spirala kosztów obsługi (Cost-to-Serve)**: Pozyskiwanie różnorodnych klientów rodzi wyjątki operacyjne. Bez sztywnych ram, zespół poświęca godziny na ratowanie nietypowych zamówień, co drenuje marżę.
2. **Erozja marży przez rozrost oferty**: Tworzenie nowych, pobocznych usług pod dyktando trudnych klientów rozmywa specjalizację. Dochodzi do sytuacji, w której zyski z rdzenia biznesu finansują deficytowe, szyte na miarę projekty.
3. **Szum koordynacyjny**: W miarę wzrostu zatrudnienia, liczba punktów styku w organizacji rośnie geometrycznie. Menedżerowie spędzają dnie na spotkaniach uzgadniających zamiast na pracy przynoszącej realną wartość.

Aby zabezpieczyć swoje marże, musisz regularnie audytować wkład jednostkowy. Eliminuj nierentownych klientów, ustanawiaj jasne ograniczenia i buduj powtarzalne ścieżki operacyjne, zanim zwiększysz wydatki na marketing.`
  },
  {
    id: "marketing-without-strategy",
    categoryEn: "Strategic Alignment",
    categoryPl: "Dopasowanie Strategiczne",
    titleEn: "The Expensive Illusion: Why Generative Ad Spend Fails to Fix an Undefined Positioning",
    titlePl: "Kosztowna iluzja: Dlaczego budżety reklamowe nie naprawią niejasnego pozycjonowania",
    date: "April 2026",
    readTime: "5 min read",
    excerptEn: "Shoveling capital into digital ads without a sharp, high-contrast positioning is merely subsidizing market networks. Explore why message discipline determines your pricing authority.",
    excerptPl: "Wpłacanie kapitału na konta reklamowe bez wyrazistego pozycjonowania to po prostu dotowanie platform. Zobacz, jak dyscyplina przekazu decyduje o Twojej sile cenowej.",
    contentEn: `When growth plateaus, the default corporate reaction is usually: 'We need to spend more on Google/Facebook ads' or 'Hire a different digital agency'. This assumes the bottleneck is visibility. In most premium consulting niches, the bottleneck is actually *comprehension* and *trust*.

When your customer positioning is vague, you look identical to dozens of lower-priced competitors. No amount of ad optimization can fix a value proposition that reads: 'We offer broad strategic assistance'.

Here is why strategy must precede advertising expenditure:
- **Advertising Multiplies Reality**: If your messaging is weak, ads simply show more people that your company lacks distinct value.
- **The Premium Positioning Premium**: High-end buyers do not buy from agencies. They buy from authoritative specialists who intimately understand their specific operational headaches.
- **Agency Incentives vs Your Bottom Line**: Most execution agencies earn fees based on spend volume or clicks, not your actual net profit. They are structurally disincentivized from advising you to cut budgets and clarify parameters first.

Before authorizing another lead campaign, audit your core message. Does your website articulate a high-contrast point of view that commands pricing power, or are you hoping customers will do the synthesis work for you?`,
    contentPl: `Gdy dynamika sprzedaży spada, najczęstszą reakcją liderów jest: „Musimy zwiększyć budżet na reklamy” albo „Zmieńmy agencję”. To zakłada, że głównym problemem jest brak widoczności. W niszach B2B i rynkach premium barierą jest jednak zazwyczaj brak zrozumienia wartości i zaufania.

Jeśli pozycjonowanie Twojej firmy jest mdłe, wtapiasz się w tłum tańszych konkurentów. Żadne triki reklamowe nie uratują oferty brzmiącej: „Świadczymy kompleksowe usługi doradcze dla każdego”.

Oto dlaczego strategia musi zawsze wyprzedzać budżet reklamowy:
- **Reklama to wzmacniacz**: Jeżeli Twój przekaz jest słaby, reklama jedynie uświadomi większą grupę odbiorców o nijakości Twojej marki.
- **Premia za pozycję premium**: Klienci o wysokich budżetach nie kupują od ogólnych agencji. Wybierają ekspertów, którzy precyzyjnie rozumieją ich konkretne bóle i wyzwania.
- **Rozbieżne cele**: Większość agencji rozlicza się z generowanego ruchu lub wydanego budżetu, a nie z Twojego realnego zysku netto. Nie leży w ich interesie zalecenie wstrzymania kampanii i uporządkowania podstaw.

Zanim zatwierdzisz kolejny budżet na kampanię, przetestuj swój przekaz. Czy Twoja strona mówi jasnym językiem korzyści biznesowych, czy jest tylko zestawem korporacyjnych frazesów?`
  },
  {
    id: "decision-making",
    categoryEn: "Leadership Systems",
    categoryPl: "Systemy Przywództwa",
    titleEn: "Instinct vs System: Reconstructing the Executive Decision Architecture for Growth",
    titlePl: "Instynkt kontra system: Odbudowa struktury podejmowania decyzji u liderów",
    date: "March 2026",
    readTime: "6 min read",
    excerptEn: "Instinct drives early entrepreneurial breakthrough, but becomes a toxic liability as organizational complexity rises. How to transition toward predictable, metrics-led operations.",
    excerptPl: "Instynkt pozwala wystartować, ale staje się obciążeniem, gdy organizacja rośnie. Dowiedz się, jak przejść na ustrukturyzowany model oparty o twarde kryteria.",
    contentEn: `In the early phase of a business, the founder's intuition is the company's greatest asset. Decisions are made fast, based on raw feedback, gut-feeling, and constant customer proximity. This responsive agility is how startups disrupt established giants.

However, as headcount crosses critical levels, relying purely on the founder's immediate, reactive instinct becomes a dangerous liability.

Why?
- **Cognitive Overload**: The founder cannot process a hundred operational anomalies a day without experiencing decision fatigue.
- **Lag Indicator Traps**: Intuitive decision-making tends to react directly to immediate inputs (e.g. yesterday's bad customer email) rather than systemic data anomalies.
- **Organizational Paralysis**: If team member actions require intuitive check-ins with 'the boss' before final approval, your execution speed drops to zero.

To sustain profitable growth, you must install an executive decision architecture. This means building a minimal dashboard of leading indicators, setting clear guidelines for operational thresholds, and training key hires to manage processes rather than seeking permission. Your role must shift from being the chief firefighter to the network system designer.`,
    contentPl: `Na początku biznesu intuicja założyciela to największy kapitał firmy. Decyzje zapadają natychmiast, na podstawie bezpośrednich obserwacji i ciągłego kontaktu z rynkiem.

Gdy jednak organizacja przekracza krytyczną wielkość zatrudnienia, poleganie wyłącznie na instynkcie założyciela staje się zagrożeniem.

Dlaczego?
- **Przeciążenie poznawcze**: Lider nie może filtrować setek operacyjnych anomalii dziennie bez popadania w skrajne zmęczenie decyzyjne.
- **Pułapka wskaźników opóźnionych**: Instynktowne decyzje reagują na to, co głośne (np. wczorajsza reklamacja), a nie na to, co systemowo krytyczne.
- **Paraliż decyzyjny**: Jeśli każde działanie zespołu wymaga osobistej akceptacji szefa, tempo egzekucji w firmie drastycznie spada.

Aby utrzymać rentowny wzrost, musisz wdrożyć architekturę decyzji menedżerskich. Oznacza to stworzenie pulpitu kluczowych wskaźników, określenie procedur delegowania uprawnień i delegowanie odpowiedzialności na zespół. Twoja rola musi zmienić się z szefa strażaków w architekta całego systemu.`
  },
  {
    id: "customer-insight-value",
    categoryEn: "Customer Insights",
    categoryPl: "Wiedza o Kliencie",
    titleEn: "The Customer Value Disconnect: Mapping the Buying Triggers That Drive High-Margin Lifetime Value",
    titlePl: "Rozbieżność wartości klienta: Mapowanie motywacji, które generują zyski w długim terminie",
    date: "February 2026",
    readTime: "6 min read",
    excerptEn: "Most feedback surveys yield generic polite reviews. We examine how to conduct methodical customer inquiry that uncovers real reasons and high pricing thresholds.",
    excerptPl: "Większość ankiet daje jedynie powierzchowne, grzecznościowe opinie. Zobacz, jak prowadzić rozmowy z klientami, by odkryć prawdziwe motywatory zakupowe.",
    contentEn: `Most business owners believe they understand why their customers buy. They reference quality, customer service, or price. But when you perform diagnostic customer interviews behind a veil of objectivity, you discover a massive disconnect between why you think they buy and the actual psychological levers driving their purchase.

For example, high-end clients rarely buy a 'consulting program' because of its modular curriculum or the number of modules. They purchase because they are terrified of a silent competitor overtaking their category, or because they need a credible advisor to back their strategic reorganization before a board vote.

To bridge this disconnect:
1. **Ditch the Standard Survey**: Quantitative rating surveys yield polite, useless averages. Use qualitative inquiry focusing on the transition period immediately preceding their booking.
2. **Isolate the Transition Anchor**: What occurred on the exact day they decided to call? That anchor is your real value catalyst.
3. **Map Cost-to-Serve to Client Types**: Cross-reference customer types against actual operational margins. Often, your quietest, most appreciative clients are the most profitable, while the most vocal accounts consume all support overhead.

By aligning your customer insight loops directly with your marketing and pricing structures, you command authority and filter out high-maintenance, low-yield client relationships before onboarding.`,
    contentPl: `Wielu właścicieli firm sądzi, że doskonale wie, dlaczego klienci wybierają ich markę. Wskazują na jakość, obsługę lub cenę. Jednak obiektywnie przeprowadzone wywiady badawcze ujawniają ogromny rozdźwięk między wyobrażeniami firmy a rzeczywistymi bodźcami psychologicznymi odbiorców.

Klienci premium rzadko kupują np. usłygi doradcze ze względu na rozbudowane slajdy. Kupują, ponieważ odczuwają lęk przed utratą pozycji lidera rynku przez konkurenta, albo potrzebują autorytetu trzeciej strony, aby uwiarygodnić zmiany strukturalne przed radą nadzorczą.

Jak zlikwidować tę rozbieżność:
1. **Bądź bliżej klienta. Rozmawiaj z nim. Przeprowadź pogłębione wywiady jakościowe skupione na okresie bezpośrednio przed podjęciem decyzji o współpracy.
2. **Zidentyfikuj moment zwrotny**: 
3. **Połącz marżę z profilem klienta**: Zestaw typy klientów z rzeczywistym kosztem ich obsługi. Często najcichsi i najbardziej lojalni klienci dają najwyższy zysk, podczas gdy ci głośni konsumują całą marżę. 

Dopasowując wiedzę o potrzebach klientów bezpośrednio do marketingu i cen, budujesz trwały autorytet i eliminujesz trudne relacje, zanim jeszcze powstaną.`
  },
  {
    id: "founder-dependency",
    categoryEn: "Operational Scale",
    categoryPl: "Skalowanie Operacyjne",
    titleEn: "The Founder Dilemma: Designing Processes That Transition Your Business from a Persona into a Scalable Asset",
    titlePl: "Dylemat Założyciela: Projektowanie procesów, które zmieniają firmę z teatru jednego aktora w dochodowe aktywo",
    date: "January 2026",
    readTime: "5 min read",
    excerptEn: "If your firm's value depends completely on your unique face and daily delivery hours, you do not own a scalable asset - you own a stressful high-paying job.",
    excerptPl: "Jeśli wartość Twojej firmy zależy wyłącznie od Twojej twarzy i Twojego czasu pracy, nie posiadasz skalowalnego biznesu – jesteś po prostu samozatrudnionym.",
    contentEn: `The ultimate goal of business architecture is simple: to build a company that can run, scale, and generate healthy margins completely independent of the founder's daily physical execution.

Yet, most medium sized owners find themselves trapped inside their own creation. The business operates like a cult of personality, where clients demand to speak exclusively with 'the owner' and employees check in with 'the boss' on basic tactical actions.

To break free from this persona trap and build a scalable asset, you must enact three absolute structural shifts:
- **Productize Your Delivery Matrix**: Define your custom client service as a step-by-step methodology with clear inputs, operations, and checkpoints. When the delivery is a defined system, clients feel secure being guided by trained managers instead of you.
- **Implement Message Anchors**: Frame your client communications around your proprietary company model rather than your individual charisma. Stop pitching yourself; pitch your proprietary growth map.
- **Systematize Decision Playbooks**: Build detailed operational criteria so team members can handle support issues or contract revisions autonomously. When a problem occurs, do not solve it directly. Review why your playbook allowed the confusion, fix the playbook, and let the team execute.

Transitioning from a persona-driven company to an institutional system expands your personal freedom, protects your margins from operational fatigue, and exponentially increases your company's equity valuation.`,
    contentPl: `Ostateczny cel architektury biznesu jest prosty: zbudowanie firmy, która działa, rośnie i generuje wysokie marże bez ciągłego, osobistego zaangażowania założyciela.

Tymczasem większość właścicieli firm tkwi we własnej pułapce. Biznes funkcjonuje jako teatr jednego aktora, w którym klient życzy sobie rozmowy wyłącznie z szefem, a pracownicy konsultują z nim podstawowe sprawy operacyjne.

Jak wyjść z tej pułapki i zbudować samodzielne aktywo:
1. **Sproduktuj proces dostarczania wartości**: Zamień swoje indywidualne usługi w ustrukturyzowaną metodologię krok po kroku. Gdy dostarczanie wartości przebiega według jasnego schematu, klienci zyskują poczucie bezpieczeństwa z zespołem menedżerskim.
2. **Oprzyj markę na autorskim modelu**: Przenieś ciężar komunikacji z własnej charyzmy na firmowy schemat działania. 
3. **Stwórz scenariusze decyzyjne**: Zbierz jasne kryteria, które pozwalają zespołowi samodzielnie rozstrzygać wątpliwości czy reklamacje. Gdy pojawia się problem, nie rozwiązuj go sam. Popraw procedurę i pozwól zespołowi działać.

Przejście od firmy opartej na osobie do systemowej struktury uwalnia Twój czas, chroni marże i drastycznie podnosi wartość rynkową Twojego przedsiębiorstwa.`
  }
];

export const CONTACT_INFO = {
  name: "Ewa Pysiewicz",
  company: "Premium Business Consulting",
  phone: "608 370 742",
  phoneFormatted: "+48 608 370 742",
  email: "e.pysiewicz@premiumbc.pl",
  linkedin: "https://www.linkedin.com/in/ewa-pysiewicz/",
  city: "Wrocław, Poland"
};
