class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // DOM에 추가될 때 호출 (#3)
    this.textContent = 'Hello World!';
  }

  disconnectedCallback() {
    // DOM에서 제거될 때 호출
  }

  static get observedAttributes() {
    // 변경을 모니터링할 attribute이름의 배열 (#1)
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // observedAttributes로 등록한 attribute들이 변경될 때 호출 (#2)
  }

  adoptedCallback() {
    // document.adoptNode로 다른 document로 이동했을 때 호출 (거의 사용되지 않음)
  }
}

customElements.define('hello-world', HelloWorld);
