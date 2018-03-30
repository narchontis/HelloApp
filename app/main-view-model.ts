

import { Observable } from "data/observable";

class HelloAppModel extends Observable {
  counter: number;
  message: string;

  constructor(){
      super();

      this.counter = 42;
      this.set("message", this.counter + " taps left");
  }

  tapAction() {
    this.counter--;
    if (this.counter <= 0) {
        this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
    } else {
        this.set("message", this.counter + " taps left");
    }
  }
}

export default HelloAppModel;
