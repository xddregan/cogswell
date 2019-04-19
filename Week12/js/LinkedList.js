function ListNode(data) {
	this.data = data;
	this.next = null;
	this.previous = null;
}
ListNode.prototype = {
	toString: function() { return "" + this.data; }
};
function LinkedList(type) {
	this._type = typeof type;
	this._length = 0;
	this._head = null;
	this._tail = null;
}
LinkedList.prototype = {
	size: function() { return this._length; },
	
	addLast: function(data) {
		var node = new ListNode(data);
		if (this._head === null) {
			this._head = node;
			this._tail = this._head;
		} else {
			this._tail.next = node;
			node.previous = this._tail;
			this._tail = node;
		}
		this._length++;
	},
	
	addFirst: function(data) {
		var node = new ListNode(data);
		if (this._head === null) {
			this._head = node;
			this._tail = this._head;
		} else {
			node.next = this._head;
			this._head.previous = node;
			this._head = node;
		}
		this._length++;
	},
	
	removeLast: function() {
		var node = this._tail;
		this._tail = this._tail.previous;
		this._tail.next = null;
		this._length--;
		return node;
	},
	
	removeFirst: function() {
		var node = this._head;
		this._head = this._head.next;
		this._head.previous = null;
		this._length--;
		return node;
	},
	
	// Some aliases of the above:
	append: function(data) { this.addLast(data); },
	prepend: function(data) { this.addFirst(data); },
	add: function(data) { this.addLast(data); },
	remove: function(data) { this.removeLast(); },
	push: function(data) { this.addFirst(data); },
	pop: function() { return this.removeFirst(); },
	enqueue: function(data) { this.addLast(data); },
	dequeue: function() { return this.removeFirst(); },
	
	peek: function() { return this._head; },
	
	get: function(index) {
		if (index == 0) { return this._head; }
		if (index == this._length-1) { return this._tail; }
		var current = this._head;
		i = 0;
		while (current) {
			if (i == index) { return current; }
			current = current.next;
			i++;
		}
	},
	
	toArray: function() {
		a = [];
		i = 0;
		var current = this._head;
		while (current) {
			a[i] = current;
			current = current.next;
			i++;
		}
		return a;
	},
	
	printList: function() {
		var current = this._head;
		document.write("HEAD: ");
		while (current) {
			document.write(current.data);
			if (current.next !== null) { document.write(" -> "); }
			current = current.next;
		}
		document.write(" :TAIL<br />");
	},
	
	printListBackwards: function() {
		var current = this._tail;
		document.write("TAIL: ");
		while (current) {
			document.write(current.data);
			if (current.previous !== null) { document.write(" <- "); }
			current = current.previous;
		}
		document.write(" :HEAD<br />");
	},
};
