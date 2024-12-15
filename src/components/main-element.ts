import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./prosemirror-editor";
import "./x-button";
import { socket } from "../main";

@customElement("main-element")
export class MainElement extends LitElement {
  @property({ type: String }) message = "Hello World";

  static styles = css`
    :host {
      display: block;
      font-family: sans-serif;
      padding: 20px;
    }
    .message {
      color: blue;
      font-size: 20px;
    }
  `;

  render() {
    return html`
      asdasdasdsad
      <div class="message">${this.message}</div>
      <x-button
        @click=${() => {
          socket.send(
            JSON.stringify({ event: "hello", data: "Custom button press!" })
          );
        }}
      >
        Mein Custom Button
      </x-button>
      asdasdasd asd
    `;
  }
}

// Erzwingt einen vollständigen Reload, wenn HMR fehlschlägt
// if (import.meta.env.DEV && import.meta.hot) {
//   import.meta.hot.accept(() => {
//     console.log("Reloading due to changes in main-element.ts");
//     window.location.reload();
//   });
// }
