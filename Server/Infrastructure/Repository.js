class Repository {
  GetAll() {
    return this.model.find({});
  }
}

export default Repository;
