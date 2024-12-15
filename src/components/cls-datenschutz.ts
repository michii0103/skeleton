import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cls-datenschutz")
export class CLSDatenschutz extends LitElement {
  static styles = css`
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      max-width: 800px;
    }
    h1,
    h2,
    h3 {
      color: #333;
    }
  `;

  render() {
    return html`
      <body>
        <h1>Datenschutzerklärung</h1>
        <p>
          Wir freuen uns, dass Sie unsere Website nutzen. Der Schutz Ihrer
          personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend
          informieren wir Sie über die Verarbeitung Ihrer Daten im Zusammenhang
          mit der Login-Funktion.
        </p>

        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
          ist:<br />
          <strong>Michael Holmes</strong><br />
          Lechauer Weg 4<br />
          84186 Vilsheim<br />
          E-Mail:
          <a href="mailto:info@codelabspace.de">info@codelabspace.de</a><br />
          Telefon: +49 123 456789
        </p>

        <h2>2. Verarbeitete Daten</h2>
        <p>
          Im Rahmen des Logins verarbeiten wir folgende personenbezogene Daten:
        </p>
        <ul>
          <li>Benutzername</li>
          <li>Passwort (gespeichert in gehashter Form)</li>
          <li>E-Mail-Adresse (falls erforderlich)</li>
          <li>IP-Adresse des Geräts, von dem aus der Login erfolgt</li>
          <li>Datum und Uhrzeit des Logins</li>
        </ul>

        <h2>3. Zweck der Verarbeitung</h2>
        <p>
          Die Verarbeitung der oben genannten Daten erfolgt ausschließlich zu
          folgenden Zwecken:
        </p>
        <ul>
          <li>Authentifizierung und Verwaltung des Benutzerkontos</li>
          <li>Sicherstellung der Funktionalität der Login-Funktion</li>
          <li>
            Protokollierung zur Verhinderung und Nachverfolgung unberechtigter
            Zugriffe
          </li>
        </ul>

        <h2>4. Rechtsgrundlage</h2>
        <p>
          Die Verarbeitung der Daten erfolgt auf Basis von Art. 6 Abs. 1 lit. b
          DSGVO (Erfüllung eines Vertrags oder Durchführung vorvertraglicher
          Maßnahmen).
        </p>

        <h2>5. Speicherdauer</h2>
        <p>
          Die personenbezogenen Daten werden nur solange gespeichert, wie es für
          die Erfüllung des Zwecks erforderlich ist:
        </p>
        <ul>
          <li>
            Benutzerdaten (z. B. Benutzername, E-Mail-Adresse) werden solange
            gespeichert, wie Ihr Konto aktiv ist.
          </li>
          <li>
            Login-Protokolle (IP-Adresse, Datum und Uhrzeit) werden für maximal
            6 Monate gespeichert.
          </li>
        </ul>

        <h2>6. Weitergabe von Daten</h2>
        <p>Ihre Daten werden nicht an Dritte weitergegeben, es sei denn:</p>
        <ul>
          <li>
            Sie haben ausdrücklich zugestimmt (Art. 6 Abs. 1 lit. a DSGVO).
          </li>
          <li>
            Es besteht eine gesetzliche Verpflichtung (Art. 6 Abs. 1 lit. c
            DSGVO).
          </li>
          <li>
            Die Weitergabe ist zur Geltendmachung, Ausübung oder Verteidigung
            von Rechtsansprüchen erforderlich (Art. 6 Abs. 1 lit. f DSGVO).
          </li>
        </ul>

        <h2>7. Ihre Rechte</h2>
        <p>Sie haben im Rahmen der DSGVO folgende Rechte:</p>
        <ul>
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>Übertragbarkeit Ihrer Daten (Art. 20 DSGVO)</li>
        </ul>
        <p>
          Um eines dieser Rechte geltend zu machen, wenden Sie sich bitte an die
          oben angegebene Kontaktadresse.
        </p>

        <h2>8. Sicherheit</h2>
        <p>
          Wir treffen angemessene technische und organisatorische Maßnahmen, um
          Ihre Daten vor Verlust, Manipulation und unberechtigtem Zugriff zu
          schützen. Passwörter werden ausschließlich in gehashter Form
          gespeichert.
        </p>

        <h2>9. Änderungen der Datenschutzerklärung</h2>
        <p>
          Diese Datenschutzerklärung hat den Stand [Datum]. Änderungen behalten
          wir uns vor, um sie an rechtliche oder technische Änderungen
          anzupassen.
        </p>
      </body>
    `;
  }
}
