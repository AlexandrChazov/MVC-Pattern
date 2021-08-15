class Model {
  async getPerson(index, fn) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const persons = await response.json();
    const person = persons[index];
    person.index = index;
    person.count = persons.length;
    fn(person);
  };
};

export default Model;