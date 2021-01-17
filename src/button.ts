import { css, customElement, html, LitElement } from 'lit-element';
import { general } from './general';

@customElement('app-button')
export class Button extends LitElement {
  static get styles() {
    return [
      general,
      css`
        .btn-primary {
          margin-top: 1rem;
          padding: 0.35rem 0.55rem;
          border: 2px solid #f0141f;
          background-color: #000;
          color: #fff;
        }
        .btn-primary:active,
        .btn-primary:hover,
        .btn-primary:focus,
        .btn-primary:visited {
          background-color: #f0141f;
          border-color: #f0141f;
          color: #fff;
        }
      `,
    ];
  }
  render() {
    return html`<button class="btn-primary"><slot></slot></button>`;
  }
}
