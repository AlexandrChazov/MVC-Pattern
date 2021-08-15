class View {
  constructor(element) {
    this.element = element
  }

  render(viewModel) {
    this.element.innerHTML = `
      <h3>${viewModel.name}</h3>
      <p><b>Phone:</b> ${viewModel.phone}</p>
      <p><b>Website:</b> ${viewModel.website}</p>
      <a id="previousPerson" class="previous button" href="javascript:void(0);" data-person-index="${viewModel.previousIndex}">Previous</a>
      <a id="nextPerson" class="next button" href="javascript:void(0);" data-person-index="${viewModel.nextIndex}">Next</a>
    `;

    // Подключение обработчиков событий щелчков по кнопкам и передача задачи обработки событий контроллеру
    const previousPerson = this.element.querySelector('#previousPerson');
    previousPerson.addEventListener('click', this.onClickGetPerson);

    const nextPerson = this.element.querySelector('#nextPerson');
    nextPerson.addEventListener('click', this.onClickGetPerson);
  }
};

export default View;