// Pełny cykl pracy. Tekst bezosobowy, bez widełek czasowych (zależą od pomysłu i złożoności).
(function () {
  const I = window.IDEA;
  I.flow = [
    { k: 'wymagania', t: 'Wymagania', sub: 'Rozmowa i zakres', c: '#f5a524', time: 'zależnie od zakresu',
      d: 'Pierwszym krokiem jest rozmowa: co powstaje, dla kogo i po co. Pomysł jest przycinany do wersji, którą można szybko sprawdzić z prawdziwymi użytkownikami.',
      you: 'Opowiada o pomyśle, użytkownikach i celu.', me: 'Dopytuje o to, co nie padło, przycina zakres i ustala kryteria „gotowe”.', ai: 'Porządkuje notatki z rozmowy, wypisuje luki i pytania bez odpowiedzi.',
      get: 'Zakres prac, lista ekranów i kryteria akceptacji.' },
    { k: 'prototyp', t: 'Prototyp', sub: 'Design i prototyp z AI', c: '#ff6b9a', time: 'zależnie od zakresu',
      d: 'Zamiast makiet w PDF powstaje działający prototyp, który można wziąć do ręki na własnym iPhonie. AI generuje ekrany i warianty bardzo szybko, a developer wybiera to, co pasuje do wytycznych Apple i do użytkowników.',
      you: 'Sprawdza prototyp na swoim telefonie i mówi, co czuje.', me: 'Dobiera układ i zachowania zgodne z wytycznymi Apple.', ai: 'Generuje ekrany i warianty znacznie szybciej niż ręczne rysowanie.',
      get: 'Działający, klikalny prototyp zamiast statycznych makiet.' },
    { k: 'budowa', t: 'Budowa', sub: 'Kodowanie z agentami', c: '#8a7bff', time: 'zależnie od zakresu',
      d: 'Kod powstaje natywnie w Swift i SwiftUI. Agenci kodujący przejmują rutynę: ekrany, testy, tłumaczenia. Każda zmiana jest czytana i zatwierdzana przez developera, więc odpowiedzialność za kod jest taka sama jak bez AI.',
      you: 'Odpowiada na pytania o szczegóły, gdy się pojawią.', me: 'Projektuje architekturę, czyta i zatwierdza każdą zmianę.', ai: 'Pisze ekrany, testy i tłumaczenia według instrukcji.',
      get: 'Natywna aplikacja w Swift i SwiftUI oraz czysty kod w repozytorium zamawiającego.' },
    { k: 'iteracje', t: 'Iteracje', sub: 'Regularne wersje', c: '#2dd4bf', time: 'zależnie od zakresu',
      d: 'Kolejne wersje trafiają do zamawiającego regularnie przez TestFlight. Postęp widać na własnym telefonie, a kierunek można zmienić, zanim zrobi się drogo. Uwagi zamieniają się w zadania.',
      you: 'Testuje kolejne wersje i zgłasza uwagi.', me: 'Zamienia uwagi na zadania i ustala kolejność.', ai: 'Szybko wdraża poprawki i warianty do porównania.',
      get: 'Regularne wersje do wypróbowania i możliwość zmiany kierunku.' },
    { k: 'jakosc', t: 'Jakość', sub: 'Testy i prywatność', c: '#4da3ff', time: 'zależnie od zakresu',
      d: 'Testy na prawdziwych urządzeniach, dostępność, wydajność i prywatność danych. Automatyczne testy powstają z pomocą AI, a scenariusze kluczowe dla produktu są sprawdzane ręcznie.',
      you: 'Zatwierdza, że działa tak, jak miało.', me: 'Testuje na urządzeniach, pilnuje dostępności i prywatności.', ai: 'Pisze testy automatyczne i szuka błędów w przypadkach brzegowych.',
      get: 'Stabilna wersja i lista sprawdzonych scenariuszy.' },
    { k: 'premiera', t: 'Premiera', sub: 'App Store', c: '#34d17a', time: 'zależnie od zakresu',
      d: 'Opis, zrzuty ekranu, polityka prywatności, zgodność z wymogami i recenzja Apple. Osiem własnych publikacji oznacza, że pułapki sklepu są znane i omijane od początku.',
      you: 'Decyduje o nazwie, cenie i dacie premiery.', me: 'Przygotowuje materiały sklepowe, prywatność i wysyła do recenzji.', ai: 'Pomaga w opisach i tłumaczeniach sklepowych.',
      get: 'Aplikacja opublikowana w App Store.' },
    { k: 'rozwoj', t: 'Rozwój', sub: 'Po premierze', c: '#ffcf3a', time: 'ciągle',
      d: 'Aplikacja żyje po premierze: poprawki, nowe wersje systemu, reakcja na opinie i kolejne funkcje. Za całość odpowiada ta sama osoba, więc nie ma przekazywania wiedzy.',
      you: 'Zbiera opinie i decyduje, co dalej.', me: 'Poprawki, nowe wersje systemu i kolejne funkcje.', ai: 'Przyspiesza drobne zmiany i pomaga analizować zgłoszenia.',
      get: 'Aktualizacje i jeden stały kontakt.' }
  ];
  I.process = I.flow.map(f => ({ t: f.t, d: f.d }));
  I.R = Object.assign(I.R || {}, { out: I.flow.map(f => f.get) });
  I.who = { you: { n: 'Zamawiający', c: '#f5a524' }, me: { n: 'Developer', c: '#4da3ff' }, ai: { n: 'Agent AI', c: '#a78bfa' } };
  I.trio = f => `<div class="trio"><div><b>${I.who.you.n}</b><span>${f.you}</span></div><div><b>${I.who.me.n}</b><span>${f.me}</span></div><div><b>${I.who.ai.n}</b><span>${f.ai}</span></div></div>`;
})();
