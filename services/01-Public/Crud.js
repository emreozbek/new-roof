class Crud {
  GetAll() {
    return this.model.find({});
  }
}

export default Crud;
