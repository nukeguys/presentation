class HostSelector extends HTMLElement {
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

    /* host root 선택 */
    :host {
      text-decoration: underline
    }

    /* host(), host-context()는 미지원이 더 많음 */
    `;
    const span = document.createElement('span');
    const h1 = document.createElement('h1');
    // part attribute 추가 (외부에서 ::part 셀렉터로 스타일링)
    h1.setAttribute('part', 'title');
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(span);
    shadowRoot.appendChild(h1);
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
    spanEl.classList.add(this.name);
    spanEl.textContent = `Hello ${this.name}!`;
    this.shadowRoot.querySelector('h1').textContent = 'Heading';
  }
}

customElements.define('host-selector', HostSelector);
