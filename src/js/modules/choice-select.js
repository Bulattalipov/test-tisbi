import Choices from "choices.js";

export default function choicesSelector() {
  const forms = document.querySelectorAll('.application form');

  forms.forEach(form => {
    const elements = form.querySelectorAll('.application__form-select-elem');

    elements.forEach(elem => {
      const select = new Choices(elem, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        placeholder: true
      });
    })
  });
}
