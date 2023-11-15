import { makeObservable, observable } from "mobx";
import { fetchFacts } from "../../api/fact";

class FactStore {
  constructor() {
    makeObservable(this, {
      fact: observable,
    });
  }

  fact: string = "";

  async changeFact() {
    const newFact: string = await fetchFacts();
    this.fact = newFact;
  }
}

const factStore = new FactStore();
export default factStore;
