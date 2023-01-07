class AddAttributes extends HTMLElement {
  constructor() {
    super();
    this.name = 'World';
    const style = document.createElement('style');
    style.innerHTML = `
    button {
      color: red; /* 외부에도 영향 */
    }`;
    const span = document.createElement('span');
    this.appendChild(style);
    this.appendChild(span);
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
    this.lastChild.textContent = `Hello ${this.name}!`;
  }
}

customElements.define('add-attributes', AddAttributes);
