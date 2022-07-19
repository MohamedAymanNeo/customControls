import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customControls';
  inpTypesDDL = [
    {name: 'textbox', value: 'textbox'},
    {name: 'textarea', value: 'textarea'},
    {name: 'attachment', value: 'attachment'},
    {name: 'DDL', value: 'DDL'},
  ]
  isTextBox: boolean = false;
  isTextArea: boolean = false;
  isDDL: boolean = false;
  isAttachment: boolean = false;
  disableRequired: boolean = true;
  
  constructor() {}
  /**
   * Function Name: ChooseType
   * params: event value
   * Usage: get select value and pass it as argument to checkers functions
   * Author: Mohamed Ayman
   */
  chooseType(event: any) {
    let value = event.target.value
    this.checkDefaultValue(value);
    this.checkSelectValue(value);
  }

  /**
   * Function Name: checkDefaultValue
   * params: Defaultvalue
   * Usage: check the default value to disable or enable required checkbox
   * Author: Mohamed Ayman
   */
  checkDefaultValue(defaultValue: string) {
    defaultValue == 'default' ? (this.disableRequired = true) : (this.disableRequired = false)
  }

  /**
   * Function Name: checkSelectValue
   * params: selectValue
   * Usage: check the value to show type constraints
   * Author: Mohamed Ayman
   */
  checkSelectValue(selectValue: string) {
    switch (selectValue) {
      case 'textbox':
        this.isTextBox = true;
        this.isAttachment = false;
        this.isTextArea = false;
        this.isDDL = false;
        break;
      case 'textarea':
        this.isTextArea = true;
        this.isTextBox = false;
        this.isAttachment = false;
        this.isDDL = false;
        break;
      case 'attachment':
        this.isAttachment = true;
        this.isTextBox = false;
        this.isTextArea = false;
        this.isDDL = false;
        break;
      case 'DDL':
        this.isDDL = true;
        this.isTextBox = false;
        this.isAttachment = false;
        this.isTextArea = false;
        break;
    
      default:
        this.isTextBox = false;
        this.isAttachment = false;
        this.isTextArea = false;
        this.isDDL = false;
        break;
    }
  }


  checkBoxValue(event: any) {
    console.log(event.target.checked);
    
  }

  getValues() {
    console.log('hi');
    
  }
}
