import { LightningElement, api } from "lwc";

export default class Speeddial extends LightningElement {
  @api options = [];
  showOptions;

  handleShowOptions() {
    const dial = this.template.querySelector(".dial");
    dial.classList.add("rotate");
    this.showOptions = true;
  }

  handleHideOptions() {
    const dial = this.template.querySelector(".dial");
    dial.classList.remove("rotate");
    this.showOptions = false;
  }

  handleToggleOptions() {
    this.showOptions = !this.showOptions;

    const dial = this.template.querySelector(".dial");
    if (this.showOptions) {
      dial.classList.add("rotate");
    } else {
      dial.classList.remove("rotate");
    }
  }

  handleClick(event) {
    const evt = new CustomEvent("buttonclick", {
      detail: event.target.dataset.name
    });
    this.dispatchEvent(evt);
  }
}
