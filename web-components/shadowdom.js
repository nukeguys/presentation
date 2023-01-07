class ShadowDom extends HTMLElement {
  constructor() {
    super();
    this.name = 'World';
    // mode: javascript(Element.shadowRoot)로 Shadow DOM 접근 가능 여부
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.innerHTML = `
    button {
      color: red; /* 외부에 영향 없음 */
    }
    `;
    const span = document.createElement('span');
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(span);
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['name'];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
    this.render();
  }

  render() {
    // mode가 'open'인 경우 shadowRoot로 접근 가능
    const spanEl = this.shadowRoot.querySelector('span');
    spanEl.textContent = `Hello ${this.name}!`;
  }
}

customElements.define('shadow-dom', ShadowDom);
