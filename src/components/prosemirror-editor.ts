import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("prosemirror-editor")
export class ProsemirrorEditor extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html` prosemirror editor `;
  }
}
