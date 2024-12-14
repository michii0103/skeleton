import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { context, socket } from "../main";

@customElement("x-button")
export class XButton extends LitElement {
  @property({ attribute: "mode", type: String }) mode:
    | "outline"
    | "text"
    | "icon"
    | "action" = "outline";

  render() {
    return html`
      <button
        class=${this.mode}
        @click=${() => {
          socket.send(
            JSON.stringify({
              message: "Whatafuckkk",
              context,
              browser: navigator.userAgent,
            })
          );
        }}
      >
        <slot> </slot>
      </button>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    button.action {
      background: lightgrey;
    }
    button.action:hover {
      background: #333;
      color: lightgrey;
    }
    button.outline {
      color: lightgrey;
      border: 2px solid lightgrey;
      background: transparent;
    }
    button.outline:hover {
      border: 2px solid lightgrey;
      background: lightgrey;
      color: #fff;
    }
  `;
}
