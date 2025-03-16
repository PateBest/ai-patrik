# AI Patrik - Tekoälypalveluiden Asiantuntija

AI Patrik on verkkosivusto, joka tarjoaa tietoa, oppaita ja työkaluja tekoälyn hyödyntämiseen. Sivusto on suunniteltu auttamaan käyttäjiä ymmärtämään ja hyödyntämään tekoälyteknologioita tehokkaasti.

## Sivuston Rakenne

Sivusto koostuu seuraavista osioista:

- **Etusivu**: Yleiskatsaus AI Patrikin palveluihin ja viikon suositeltu työkalu
- **Työkalut**: Kattava kokoelma tekoälytyökaluja eri käyttötarkoituksiin
- **Oppaat**: Yksityiskohtaisia ohjeita tekoälyn hyödyntämiseen
- **Blogi**: Ajankohtaisia artikkeleita tekoälyyn liittyen
- **Arvostelut**: Käyttäjien kokemuksia ja arvioita eri tekoälytyökaluista
- **Yhteystiedot**: Yhteydenottolomake ja yhteystiedot

## Tekninen Toteutus

Sivusto on rakennettu käyttäen seuraavia teknologioita:

- HTML5
- CSS3 (mukautetut tyylit)
- JavaScript (vanilla JS)
- Font Awesome -ikonit
- Responsiivinen suunnittelu kaikille laitteille
- Formspree integraatio yhteydenottolomaketta varten

## Ominaisuudet

- **Moderni käyttöliittymä**: Tyylikäs ja käyttäjäystävällinen design
- **Responsiivisuus**: Toimii saumattomasti kaikilla laitteilla
- **Yhteydenottolomake**: Formspree-integraatio viestien vastaanottamiseen
- **Sosiaalisen median integraatio**: Linkit sosiaalisen median kanaviin
- **Kielivalinta**: Tuki useille kielille (tulossa pian)

## GitHub-versio

Tämä on optimoitu GitHub-versio AI Patrik -sivustosta. Tämä versio sisältää vain välttämättömät tiedostot sivuston toiminnan kannalta, mikä tekee siitä kevyemmän ja helpomman ylläpitää.

### Välttämättömät tiedostot

Tämä versio sisältää seuraavat välttämättömät tiedostot:

1. **HTML-tiedostot:**
   - `index.html` (pääsivu)
   - Kaikki tiedostot `pages/`-kansiossa (alasivut)

2. **CSS-tiedostot:**
   - `css/styles.css` (päätyylit)
   - `css/mobile-nav.css` (mobiilinavigaatio)
   - `css/ai-character.css` (AI-hahmon tyylit)
   - `css/active-nav.css` (aktiivisen navigaation tyylit)
   - `css/cookie-consent.css` (evästeiden suostumuspalkin tyylit)

3. **JavaScript-tiedostot:**
   - `js/main.js` (päätoiminnallisuudet)
   - `js/ai-character.js` (AI-hahmon toiminnallisuus)
   - `js/active-nav.js` (aktiivisen navigaation toiminnallisuus)
   - `js/cookie-consent-loader.js` (evästeiden suostumuspalkin lataus)
   - `js/cookie-consent.js` (evästeiden suostumuspalkin toiminnallisuus)
   - `js/config.js` (konfiguraatiotiedosto)
   - `js/contact-form.js` (yhteydenottolomakkeen toiminnallisuus)
   - `js/lib/three-basic.js` (Three.js-kirjaston paikallinen kopio)

4. **Kuvat:**
   - `images/favicon.svg` (sivuston favicon)

5. **Konfiguraatiotiedostot:**
   - `.gitignore` (määrittää, mitä tiedostoja ei viedä GitHubiin)
   - `CNAME` (GitHub Pages -domainin määritys)
   - `.github/workflows/deploy.yml` (GitHub Actions -työnkulku)

### Päivitysprosessi

Tämän GitHub-version päivittämiseen on kolme vaihtoehtoa:

1. **Automaattinen päivitys skripteillä**:
   - Käytä `update_minimal_repo.ps1` (PowerShell) tai `update_minimal_repo.bat` (CMD) -skriptiä
   - Nämä skriptit päivittävät automaattisesti kaikki välttämättömät tiedostot

2. **Git-pohjainen päivitys**:
   - Käytä Git-haaroja (branches) päivitysten hallintaan
   - Katso tarkemmat ohjeet `GIT_PAIVITYSOHJE.md`-tiedostosta

3. **Manuaalinen päivitys**:
   - Kopioi muutetut tiedostot manuaalisesti
   - Katso tarkemmat ohjeet `PAIVITYSOHJE.md`-tiedostosta

## Asennus ja Käyttöönotto

### Paikallinen Kehitys

1. Kloonaa repositorio:
   ```
   git clone https://github.com/yourusername/ai-patrik.git
   cd ai-patrik
   ```

2. Avaa `index.html` selaimessa tai käytä paikallista palvelinta:
   ```
   # Python 3
   python -m http.server
   
   # Python 2
   python -m SimpleHTTPServer
   ```

3. Sivusto on nyt käytettävissä osoitteessa `http://localhost:8000`

Katso tarkemmat ohjeet paikallisen kehitysympäristön pystyttämiseen `PAIKALLINEN_KEHITYS.md`-tiedostosta.

### GitHub Pages -julkaisu

Tämä versio on optimoitu GitHub Pages -julkaisua varten:

1. Työnnä tämä repositorio GitHubiin:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ai-patrik.git
   git push -u origin main
   ```

2. Mene GitHub-repositoriosi asetuksiin ja valitse "Pages" vasemmasta valikosta.

3. Valitse "Source"-kohdassa "Branch: main" ja klikkaa "Save".

4. Sivusto on nyt julkaistu GitHub Pages -palvelussa.

## Hakemistorakenne

```
ai-patrik/
├── index.html              # Etusivu
├── css/                    # CSS-tiedostot
│   ├── styles.css          # Päätyylit
│   ├── mobile-nav.css      # Mobiilinavigaation tyylit
│   ├── ai-character.css    # AI-hahmon tyylit
│   ├── active-nav.css      # Aktiivisen navigaation tyylit
│   └── cookie-consent.css  # Evästeiden suostumuspalkin tyylit
├── js/                     # JavaScript-tiedostot
│   ├── main.js             # Päätoiminnallisuudet
│   ├── ai-character.js     # AI-hahmon toiminnallisuus
│   ├── active-nav.js       # Aktiivisen navigaation toiminnallisuus
│   ├── cookie-consent-loader.js # Evästeiden suostumuspalkin lataus
│   ├── cookie-consent.js   # Evästeiden suostumuspalkin toiminnallisuus
│   ├── config.js           # Konfiguraatiotiedosto
│   ├── contact-form.js     # Yhteydenottolomakkeen toiminnallisuus
│   └── lib/                # JavaScript-kirjastot
│       └── three-basic.js  # Three.js-kirjaston paikallinen kopio
├── images/                 # Kuvat ja ikonit
│   └── favicon.svg         # Sivuston favicon
├── pages/                  # Alasivut
│   ├── tyokalut.html       # Työkalut-sivu
│   ├── oppaat.html         # Oppaat-sivu
│   ├── blogi.html          # Blogi-sivu
│   ├── arvostelut.html     # Arvostelut-sivu
│   ├── yhteystiedot.html   # Yhteystiedot-sivu
│   ├── kiitos.html         # Kiitossivu lomakkeen lähetyksen jälkeen
│   └── virhe.html          # Virhesivu lomakkeen lähetyksen epäonnistuessa
├── .github/                # GitHub-konfiguraatio
│   └── workflows/          # GitHub Actions -työnkulut
│       └── deploy.yml      # Julkaisutyönkulku
├── .gitignore              # Git-konfiguraatio
├── CNAME                   # GitHub Pages -domain
├── PAIVITYSOHJE.md         # Ohjeet päivitysprosessiin
├── GIT_PAIVITYSOHJE.md     # Ohjeet Git-pohjaiseen päivitykseen
└── README.md               # Tämä tiedosto
```

## Yhteystiedot

Jos sinulla on kysyttävää tai ehdotuksia sivustoon liittyen, ota yhteyttä:

- Sähköposti: aipatrik@outlook.com
- Verkkosivusto: [www.aipatrik.com](https://www.aipatrik.com)

## Lisenssi

Tämä projekti on lisensoitu [MIT-lisenssin](LICENSE) alaisuudessa. 