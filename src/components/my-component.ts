import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-component")
export class MyComponent extends LitElement {
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
      asdasdasd small change
      <div class="message">${this.message}</div>
      ich habe hier dann hot reload
    `;
  }
}
