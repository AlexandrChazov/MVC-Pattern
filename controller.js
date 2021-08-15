class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  initialize() {
    this.view.onClickGetPerson = this.onClickGetPerson.bind(this);
  };

  onClickGetPerson(e) {
    const target = e.currentTarget;
    const index = parseInt(target.dataset.personIndex, 10);

    this.model.getPerson(index, this.showPerson.bind(this));
  };

  showPerson(personModelData) {
    const personViewModel = {
      name: personModelData.name,
      phone: personModelData.phone,
      website: personModelData.website,
    };

    personViewModel.previousIndex = personModelData.index - 1;
    personViewModel.nextIndex = personModelData.index + 1;

    if (personModelData.index === 0) {
      personViewModel.previousIndex = personModelData.count - 1
    };

    if (personModelData.index === personModelData.count - 1) {
      personViewModel.nextIndex = 0;
    };

    this.view.render(personViewModel);
  };
};


export default Controller;