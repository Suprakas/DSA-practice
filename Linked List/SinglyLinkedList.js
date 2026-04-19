class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
     const newNode = new Node(data);

     if(this.head === null){
        this.head = newNode;
        return;
     }

     let current = this.head;
     while(current.next !== null){
        current = current.next;
     };
     current.next = newNode;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    delete(value) {
        if(this.head === null) return;

        if(this.head.data === value){
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while(current.next !== null && current.next.data !== value){
            current = current.next;
        }
        if(current.next !== null){
            current.next = current.next.next;
        }
    }

    insertAt(index, data) {
        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        let count = 0;
        while (current !== null && count < index - 1) {
            current = current.next;
            count++;
        }
        if (current === null) {
            console.log("Index out of bounds");
            return;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    print() {
        let current = this.head;
        let result = "";
        while (current !== null) { 
            result += current.data + "->";
            current = current.next;
        }
        console.log(result + "null");
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.prepend(5);
list.delete(20);
list.insertAt(1, 15);
list.print();
// Output: 5->15->10->30->40->50->null