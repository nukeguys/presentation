const template = document.createElement('template');
template.innerHTML = `
  <style>
  div {
    background-color: blue;
    height: 100px;
    padding: 10px;
  }
  p {
    background-color: yellow;
    padding: 10px;
  }

  </style>
  <div>
    <p>
      this is content.
      <button id='bubble'> bubble </button>
      <button id='stop'> stop propagation </button>
    </p>
  </div>
`;

class Event extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.getElementById('bubble').addEventListener('click', (e) => {
      console.log('Button clicked');
    });

    this.shadowRoot.getElementById('stop').addEventListener('click', (e) => {
      console.log('Button clicked');
      // 동일하게 stopPropagation으로 이벤트 전파 막기
      e.stopPropagation();
    });

    this.shadowRoot.addEventListener('click', (e) => {
      console.log('Shadow DOM 안에서는 실제 target');
      console.log(e.target);
    });
  }
}

customElements.define('nested-event', Event);
