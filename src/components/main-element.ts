import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./prosemirror-editor";
import "./x-button";

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
      Successfully deployed!
      <div class="message">${this.message}</div>
      <prosemirror-editor></prosemirror-editor>
      <x-button> Mein Custom Button </x-button>
    `;
  }
}
