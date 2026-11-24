// Echte Google-reviews van Assurman (Beernem), letterlijk overgenomen van het Google-bedrijfsprofiel.
// Opgehaald 24/11/2026: 5,0 op 104 reviews. Reviews met alleen sterren (zonder tekst) staan hier niet in.
// Namen ingekort tot voornaam + initiaal (bedrijven en verenigingen voluit); de volledige review staat op Google.
// Vervangt de verzonnen, anonieme getuigenissen (beslissing Dennis 24/11/2026: geen fake, wel echte reviews,
// klikbaar om te verifiëren). Bijwerken: nieuwe reviews toevoegen, score en aantal aanpassen.

export const GOOGLE_SCORE = '5,0';
export const GOOGLE_AANTAL = 104;
export const GOOGLE_REVIEWS_URL = 'https://search.google.com/local/reviews?placeid=ChIJTQ37U6lEw0cRpxSRr5Nlc88';

export interface GoogleReview {
  quote: string;
  name: string;
}

// Volgorde = voorkeur: eerst de reviews over advies, opvolging en schadegevallen (het sterkst voor ondernemers).
export const googleReviews: GoogleReview[] = [
  { name: 'Jan D.', quote: 'Zeer scherpe prijzen. Goede dienstverlening. Bij een schadegeval met een moeilijke tegenpartij werd ik heel goed bijgestaan door Benoit en zijn team. Zeker een aanrader.' },
  { name: 'Hans D.', quote: 'Grootste troeven zijn beschikbaarheid, flexibiliteit, bereikbaarheid, kennis van producten en informele sfeer. Daarnaast weet men perfect klanten te profilen en gericht gewild en ongewild advies geven. Met ongewild bedoel ik aanbieden van opportuniteiten waar je zelf niet bij stilstaat.' },
  { name: 'Perspectief Vastgoed', quote: 'Zeer tevreden over de service en opvolging. Alles werd duidelijk uitgelegd en correct afgehandeld. Aanrader!' },
  { name: 'Moose Productions', quote: 'Klant bij Benoit since day one. Verzekeraar met charisma, een goede dosis humor, maar vooral, met verstand van zaken. Verzekeringen op maat, met een ongeëvenaarde dienstverlening en een persoonlijke aanpak. Iemand die je niet gewoon verzekeringspakketten probeert te verkopen maar meedenkt met je leven, je zaak en je doelen, altijd met oprechte interesse.' },
  { name: 'Leen D.', quote: 'Top verzekeringskantoor! Van krassen tot een huisbrand, we werden steeds snel en persoonlijk geholpen! Ik wens iedereen zo een makelaar toe!' },
  { name: 'Sabine B.', quote: 'Zeker 5 sterren waard! Van in het begin helder advies ontvangen en een polis die perfect aansluit. Vriendelijke en eerlijke medewerkers, absolute aanrader!' },
  { name: 'Isabelle L.', quote: 'Goede verzekeringen en een zéér sympathiek team. Altijd beschikbaar om onze vragen en bezorgdheden snel te beantwoorden. En heb je al eens een schadegeval dan geven ze uitleg en bijstand waar nodig. Zeker een aanrader!' },
  { name: 'Olivier D.', quote: 'Zeer tevreden van Assurman. Communicatie verloopt altijd zeer vlot. Als het er op aankomt schakelen ze zeer hoog om u verder te helpen. Alleen maar lof voor Benoit en zijn team.' },
  { name: 'Andy C.', quote: 'Top service! Helpen wanneer nodig en met persoonlijke aanpak, geen internetverzekeraar waar je van pier naar pol gestuurd wordt.' },
  { name: 'Tarik B.', quote: 'Sinds de overstap ben ik echt aangenaam verrast. De communicatie is snel en helder, en de prijzen zijn meer dan scherp. Ik ben er zelfs zo tevreden over dat ik intussen al mijn verzekeringen heb overgezet.' },
  { name: 'Dick V.', quote: 'Ik ben ontzettend tevreden over Assurman. Vanaf het moment van afsluiten tot aan de schadeafhandeling is alles vlot en professioneel verlopen. De klantenservice is vriendelijk en behulpzaam, en ik kreeg snel duidelijkheid over mijn dossier.' },
  { name: 'Yoni B.', quote: 'Zeer vlotte en aangename communicatie. Zijn steeds zeer behulpzaam en volgen goed dossiers op. Je bent in goede handen bij Assurman!' },
  { name: 'Marc V.', quote: 'Meer dan efficiënt, kennis van het vak, kort bij de mens. Wel verdiende vijf sterren.' },
  { name: 'Robrecht V.', quote: 'We zijn al meer dan 10 jaar lang klant bij Benoit en hebben ons dat nooit beklaagd. Persoonlijke service & altijd zeer duidelijk in de communicatie.' },
  { name: 'Gudrun T.', quote: 'Zeer tevreden over dit kantoor. Altijd bereikbaar en bij vragen binnen de 24 uur antwoord. TOP!' },
  { name: 'Kristof M.', quote: 'Na jaren verzekerd te zijn bij "grootbanken" is het een verademing om verzekerd te zijn bij Assurman, waar het kennen van je naam geen \'mirakel\' is maar eigenlijk doodgewoon en normaal.' },
  { name: 'Thibault W.', quote: 'Vlug, duidelijk, no nonsense, behulpzaam en steeds de beste oplossing in jouw belang als klant, ik ben heel tevreden!' },
  { name: 'Anouchka D.', quote: 'Snelle opstart en afhandeling van dossiers. Vriendelijk en duidelijke communicatie.' },
  { name: 'Eric D.', quote: 'Na een fietsongeval, een zaak die voor ons verloren leek, heeft Assurman alles in orde kunnen brengen. Een echte ondersteuning.' },
  { name: 'Simon G.', quote: 'Heel aangename ploeg die tijd maakt voor de klant en een persoonlijke aanpak biedt. Topservice!' },
  { name: 'Ronny T.', quote: 'Staan voor hun klanten, directe aanpak van problemen.' },
  { name: 'Groepsleiding Scouts Beernem', quote: 'Ook voor onze tent- en eventverzekeringen hebben we bij hen de juiste partner gevonden. We kregen advies op maat van onze activiteiten, en de dekking sluit perfect aan bij wat we nodig hebben.' },
  { name: 'Eric O.', quote: 'Eerlijk, gemotiveerd en bekommerd om z\'n klanten. Supercontent over Benoit en zijn team!' },
  { name: 'Paul P.', quote: 'Men kan vlot overleg plegen en de informatie die verstrekt wordt is volledig. Er bestaat nog een persoonlijke aanpak.' },
  { name: 'Frederic V.', quote: 'Al enkele jaren tevreden klant. Snelle en persoonlijke service, Benoit heeft een topteam!' },
  { name: 'Ingrid D.', quote: 'Heel vriendelijk en betrouwbaar team. Relevante informatie en ze zijn er als je ze nodig hebt.' },
  { name: 'Calis V.', quote: 'Heel behulpzaam, vriendelijk, eerlijk en gemakkelijk te bereiken in geval van nood.' },
  { name: 'Tamara D.', quote: 'Super service!! Betrouwbaar en staan altijd klaar om te helpen, ook voor de kleine dingen.' },
  { name: 'Faye F.', quote: 'Heel tevreden, vriendelijke bediening, duidelijke uitleg. Steeds tot je dienst. Top team.' },
  { name: 'Hans D.', quote: 'Snel en persoonlijk contact. Goud waard.' },
];

/** Drie verschillende reviews per pagina; `seed` (0, 1, 2 ...) laat elke pagina met andere reviews beginnen. */
export function reviewsVoor(seed: number, aantal = 3): GoogleReview[] {
  const n = googleReviews.length;
  return Array.from({ length: aantal }, (_, i) => googleReviews[(seed * aantal + i) % n]);
}
