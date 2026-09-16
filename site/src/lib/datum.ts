/** Eén plek voor de datumnotatie, zodat overzicht en artikel gelijk lopen. */
const maanden = [
  "januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "oktober", "november", "december",
];

export function datumNL(iso: string): string {
  const [jaar, maand] = iso.split("-");
  return `${maanden[Number(maand) - 1]} ${jaar}`;
}
