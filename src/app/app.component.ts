import { Component } from "@angular/core";
import { Model, TodoItem } from "./model";

@Component({
    selector: "todo-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    model = new Model();
    todaysDate = new Date();
    Item=new TodoItem("","","","")

    getName() {
        return this.model.user;
    }

    orderItems(){
    	return this.model.items.sort((a, b) => {
    		return <any>new Date(a.date)-<any>new Date(b.date);
    	})
    }

    getUrgentItems(){
    	return this.orderItems().filter(item=>new Date(item.date)<this.todaysDate)
    }

    getTodoItems() {
        return this.orderItems().filter(item => !item.done);
    }

    getHighPriority()　{
    	return this.getTodoItems().filter(item => item.priority === "alta" && new Date(item.date)>this.todaysDate)
    }

    getMediumPriority()　{
    	return this.getTodoItems().filter(item => item.priority === "média" && new Date(item.date)>this.todaysDate)
    }

    getLowPriority()　{
    	return this.getTodoItems().filter(item => item.priority === "baixa" && new Date(item.date)>this.todaysDate)
    }

    getDoneItems() {
    	return this.model.items.filter(item => item.done);
    }

    addItem(){
    if(this.Item.action!=""&&this.Item.date!=""&&this.Item.priority!=""){
      if(this.model.items==""){
        this.model.items.push(this.Item);
        this.Item=new TodoItem("","","","")
      }
      else{
        let aux= this.getTodoItems().filter(a=>a.action==this.Item.action)
        if(aux==""){
          this.model.items.push(this.Item);
          this.Item=new TodoItem("","","","")
        }
      }
      
    }
  }
  correctTask(wrongItem){
    wrongItem.done="";
  }
  removeTask(itemToRemove){
    this.model.items.splice(this.model.items.indexOf(itemToRemove),1)
  }
  editTask(itemToEdit){
    this.model.items.splice(this.model.items.indexOf(itemToEdit),1)
    this.Item.action=itemToEdit.action
    this.Item.priority=itemToEdit.priority
    this.Item.date=itemToEdit.date
  }

}





