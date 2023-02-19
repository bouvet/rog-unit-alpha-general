customElements.define(
  'language-details',
  class extends HTMLElement {
    constructor() {
      super()
      readAndDomInsertTemplate()
    }

    async readAndDomInsertTemplate() {
      var templates = document.createElement('language-template')
      templates.innerHTML = await (
        await fetch('language.details.template.html')
      ).text()
    }
  },
)
