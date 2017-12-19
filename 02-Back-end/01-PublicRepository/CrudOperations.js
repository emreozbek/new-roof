class Crud {
  constructor() {}
  GetAll() {
    return this.model.find({});
  }
}

export default Crud;
