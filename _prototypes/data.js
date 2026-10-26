// Wspólne dane dla wszystkich prototypów. Teksty PL, linki do App Store z *-public.
window.IDEA = {
  email: "marcin.polak@ideaapps.io",
  projects: [
    { id: "kierbud", name: "Kierbud", cat: "Budownictwo", tag: "Notatnik kierownika budowy",
      desc: "Wizyty ze zdjęciami i pinezkami na rysunku, zalecenia, kalendarz i raporty PDF dla inwestora. Działa offline.",
      platforms: "iPhone · iPad · Mac", color: "#E8A33D", icon: "img/kierbud-icon.png", shot: "img/kierbud.jpg", shot2: "img/kierbud2.jpg",
      url: "https://apps.apple.com/app/id6823995056", web: "https://haker.dev/kierbud-public/" },
    { id: "mounda", name: "Mounda", cat: "Narzędzia", tag: "Objętość i waga hałdy ze zdjęcia",
      desc: "Zrób zdjęcie hałdy piasku, żwiru lub ziemi i dostań objętość, wagę i liczbę kursów. Oferty w PDF.",
      platforms: "iPhone", color: "#2F5D46", icon: "img/mounda-icon.png", shot: "img/mounda.jpg", shot2: "img/mounda2.jpg",
      url: "https://apps.apple.com/app/id6821906262", web: "https://haker.dev/mounda-public/" },
    { id: "stanlokalu", name: "Stan Lokalu", cat: "Nieruchomości", tag: "Protokół zdawczo-odbiorczy najmu",
      desc: "Zdjęcia, stany liczników, klucze i podpisy na ekranie. Gotowy PDF do wysłania najemcy.",
      platforms: "iPhone · iPad", color: "#4D7CFE", icon: "img/stanlokalu-icon.png", shot: "img/stanlokalu.jpg", shot2: "img/stanlokalu2.jpg",
      url: "https://apps.apple.com/app/id6823101110", web: "https://haker.dev/stanlokalu-public/" },
    { id: "kajet", name: "Kajet", cat: "Edukacja", tag: "Planer ucznia i studenta",
      desc: "Plan lekcji z tygodniami A/B, oceny i średnie, zadania, sprawdziany, timer nauki, widżet i Siri. Bez konta i reklam.",
      platforms: "iPhone · iPad · 13 języków", color: "#7C5CFF", icon: "img/kajet-icon.png", shot: "img/kajet.jpg", shot2: "img/kajet2.jpg",
      url: "https://apps.apple.com/app/id6814474214", web: "https://haker.dev/kajet-public/" },
    { id: "boxes", name: "Boxes", cat: "Organizacja", tag: "Spis rzeczy w kartonach z kodami QR",
      desc: "Dodawaj rzeczy głosem, tekstem lub zdjęciem, drukuj etykiety QR i znajdź rzecz, zanim zaczniesz szukać.",
      platforms: "iPhone · iPad · Mac · 8 języków", color: "#F2A65A", icon: "img/boxes-icon.png", shot: "img/boxes.jpg", shot2: "img/boxes2.jpg",
      url: "https://apps.apple.com/app/id6825208997", web: "https://haker.dev/boxes-public/" },
    { id: "kwity", name: "Kwity", cat: "Finanse domowe", tag: "Paragony i gwarancje",
      desc: "Gwarancje, terminy zwrotów, kaucje, bilety parkingowe. Zrób zdjęcie paragonu i dostań przypomnienie, zanim będzie za późno.",
      platforms: "iPhone · 10 języków", color: "#00B894", icon: "img/kwity-icon.png", shot: "img/kwity.jpg", shot2: "img/kwity2.jpg",
      url: "https://apps.apple.com/app/id6820909795", web: "https://haker.dev/kwity-public/" },
    { id: "obiadki", name: "Obiadki", cat: "Rodzina", tag: "Rozliczenia szkolnych obiadów",
      desc: "Liczy, ile przelać za obiady, odlicza nieobecności i pomija święta. Dla wielu dzieci naraz.",
      platforms: "iPhone", color: "#18C28A", icon: "img/obiadki-icon.png", shot: "img/obiadki.jpg", shot2: "img/obiadki2.jpg",
      url: "https://apps.apple.com/app/id6818998861", web: "https://haker.dev/obiadki-public/" },
    { id: "50groszy", name: "50Groszy", cat: "Lifestyle", tag: "Stoper do butelkomatu",
      desc: "Liczy, ile czasu stoisz w kolejce do butelkomatu i ile naprawdę zarabiasz na kaucji na godzinę. Z przymrużeniem oka.",
      platforms: "iPhone", color: "#FFC833", icon: "img/50groszy-icon.png", shot: "img/50groszy.jpg", shot2: "img/50groszy2.jpg",
      url: "https://apps.apple.com/app/id6821369029", web: "https://haker.dev/50Groszy-public/" }
  ],
  services: [
    { t: "Aplikacje iOS", d: "Natywny Swift i SwiftUI od pomysłu do App Store. Projekt, kod, publikacja, utrzymanie." },
    { t: "iPad i Mac", d: "Aplikacje wieloplatformowe: iPadOS i macOS ze wspólnym kodem tam, gdzie się opłaca, i układem dopasowanym do dużego ekranu i klawiatury." },
    { t: "AI w produkcie", d: "Modele na urządzeniu i w chmurze, Foundation Models, Claude API. Funkcje AI, które mają sens dla użytkownika." },
    { t: "MVP i audyt", d: "Szybki prototyp do walidacji pomysłu albo przegląd istniejącego kodu: architektura, wydajność, dług techniczny." }
  ],
  // generuje kafelek ikony (gdy brak pliku): inicjał na kolorze
  iconHTML(p, cls) {
    cls = cls || "";
    if (p.icon) return `<img class="ico ${cls}" src="${p.icon}" alt="${p.name}">`;
    return `<span class="ico ${cls} ico-fallback" style="background:${p.color}">${p.name[0]}</span>`;
  }
};

// ---- Rozszerzone treści (round 7): dla kogo, co potrafi, jak pracuję ----
(function () {
  const extra = {
    kierbud: { who: "Kierownicy budowy", feats: ["Wizyty na budowie ze zdjęciami i pinezkami na rysunku", "Zalecenia, kalendarz i terminy w jednym miejscu", "Raport PDF dla inwestora jednym dotknięciem", "Działa offline, także tam, gdzie nie ma zasięgu"] },
    mounda: { who: "Wykonawcy robót ziemnych i dostawcy kruszyw", feats: ["Zdjęcie hałdy daje objętość i wagę", "Piasek, żwir i ziemia z przeliczeniem na liczbę kursów", "Plan warstw i zapisane zlecenia", "Oferty w PDF do wysłania klientowi"] },
    stanlokalu: { who: "Wynajmujący mieszkania i lokale", feats: ["Zdjęcia, stany liczników i lista kluczy", "Podpisy najemcy i wynajmującego na ekranie", "Protokół zdawczo-odbiorczy jako gotowy PDF", "Przy zwrocie porównujesz stan z dniem przekazania"] },
    kajet: { who: "Uczniowie i studenci", feats: ["Plan lekcji z tygodniami A/B", "Oceny, średnie i statystyki", "Zadania i sprawdziany z przypomnieniami", "Timer nauki, widżet i Siri. Bez konta i reklam"] },
    boxes: { who: "Każdy, kto się przeprowadza albo porządkuje dom", feats: ["Dodawanie rzeczy głosem, tekstem lub zdjęciem", "Etykiety z kodem QR do wydruku i naklejenia", "Znajdziesz rzecz, zanim zaczniesz szukać", "iPhone, iPad i Mac, 8 języków"] },
    kwity: { who: "Każdy, kto robi zakupy", feats: ["Gwarancje i terminy zwrotów w jednym miejscu", "Kaucje, bilety parkingowe i numerki w kolejce", "Zdjęcie paragonu i przypomnienie, zanim będzie za późno", "10 języków"] },
    obiadki: { who: "Rodzice dzieci w szkole", feats: ["Liczy, ile przelać za szkolne obiady", "Odlicza nieobecności dziecka", "Pomija dni wolne i święta", "Obsługuje wiele dzieci naraz"] },
    "50groszy": { who: "Wszyscy, którzy oddają butelki", feats: ["Stoper kolejki do butelkomatu", "Liczy, ile naprawdę zarabiasz na kaucji na godzinę", "Mała aplikacja z przymrużeniem oka"] }
  };
  IDEA.projects.forEach(p => Object.assign(p, extra[p.id] || {}));
  IDEA.process = [
    { t: "Rozmowa", d: "Opowiadasz, co chcesz zbudować i dla kogo. Dopytuję o to, czego nie powiedziałeś: kto tego użyje, co już istnieje i co jest naprawdę potrzebne w pierwszej wersji. Wychodzisz z jednostronicowym zakresem prac." },
    { t: "Prototyp w ręku", d: "Zamiast makiet w PDF dostajesz działający prototyp na własnym iPhonie. Dzięki AI buduję go w dni, a nie w tygodnie, więc zmiany robimy od razu, a nie w długich mailach." },
    { t: "Budowa", d: "Piszę natywnie w Swift i SwiftUI. Regularnie wysyłam nowe wersje przez TestFlight, więc widzisz postęp na swoim telefonie i możesz zmienić kierunek, zanim zrobi się drogo." },
    { t: "AI przy pracy", d: "Agentów kodujących używam do rutyny: szkielety ekranów, testy, warianty, tłumaczenia. Każdą linijkę czytam i odpowiadam za nią ja. Dzięki temu mój czas idzie na decyzje i dopracowanie, a nie na przepisywanie." },
    { t: "Publikacja", d: "Opis, zrzuty ekranu, prywatność i wymogi recenzji Apple. Osiem własnych aplikacji w sklepie oznacza, że znam pułapki i omijam je od początku." },
    { t: "Po premierze", d: "Poprawki, nowe wersje systemu, reakcja na opinie i kolejne funkcje. Aplikacja żyje po premierze, a Ty wiesz, do kogo dzwonić." }
  ];
  IDEA.ai = {
    t: "AI w Twoim produkcie",
    d: "Funkcje AI są dobierane pod użytkownika, a nie pod marketing: asystent w aplikacji, rozpoznawanie ze zdjęcia lub głosu, podsumowania, mądrzejsze wyszukiwanie. Model działa na urządzeniu (prywatnie i offline) albo w chmurze, zależnie od potrzeby i kosztów."
  };
  IDEA.about = "ideaapps to niezależna pracownia aplikacji Apple: iOS, iPadOS i macOS. Ponad 10 lat doświadczenia z platformami Apple, wcześniej Android. Własne aplikacje w App Store, projekty na zlecenie i rozwiązania z AI.";
})();
