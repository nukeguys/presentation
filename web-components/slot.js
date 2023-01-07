class TemplateSlot extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    // cloneNode를 통해 template의 내용을 복제해서 사용
    shadowRoot.appendChild(
      document.querySelector('template').content.cloneNode(true)
    );

    // slot의 element를 접근할 때는 assignedNodes를 사용
    shadowRoot.querySelector('slot.title').assignedNodes()[0].textContent =
      'Real Title';
  }
}

customElements.define('template-slot', TemplateSlot);
