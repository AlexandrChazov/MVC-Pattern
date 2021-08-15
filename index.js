import Model from './model.js';
import View from './view.js';
import Controller from "./controller.js";

const personModel = new Model();

const targetElement = document.getElementById('listOfPersons');
const personView = new View(targetElement);

const personController = new Controller(personView, personModel);

personController.initialize();

personController.onClickGetPerson({
    currentTarget: { 
        dataset: { 
            personIndex: 0
        }
    }
});
