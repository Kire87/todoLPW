export class Model {
	user;
	items;
	constructor() {
		this.user = "Erik";
		this.items = [];
	}
}
export class TodoItem {
	action;
	done;
	priority;
	date;
	constructor(action, done, priority, date) {
		this.action = action;
		this.done = done;
		this.priority = priority;
		this.date = date;
	}
}