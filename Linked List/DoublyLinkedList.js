// ─── NODE ───────────────────────────────────────────
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null; // points to previous node
        this.next = null; // points to next node
    }
}

// ─── DOUBLY LINKED LIST ─────────────────────────────
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // we track BOTH ends now
    }

    // ADD TO END
    append(data) {
        const newNode = new Node(data);

        // list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // wire new node backward to tail
        newNode.prev = this.tail;
        // wire old tail forward to new node
        this.tail.next = newNode;
        // update tail
        this.tail = newNode;
    }

    // ADD TO FRONT
    prepend(data) {
        const newNode = new Node(data);

        // list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // wire new node forward to old head
        newNode.next = this.head;
        // wire old head backward to new node
        this.head.prev = newNode;
        // update head
        this.head = newNode;
    }

    // DELETE BY VALUE
    delete(value) {
        if (this.head === null) return;

        let current = this.head;

        while (current !== null) {
            if (current.data === value) {

                // fix the PREVIOUS node's next pointer
                if (current.prev !== null) {
                    current.prev.next = current.next;
                } else {
                    // deleting head
                    this.head = current.next;
                }

                // fix the NEXT node's prev pointer
                if (current.next !== null) {
                    current.next.prev = current.prev;
                } else {
                    // deleting tail
                    this.tail = current.prev;
                }

                return;
            }
            current = current.next;
        }
    }

    // PRINT FORWARD
    printForward() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.data + " <-> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    // PRINT BACKWARD (only possible in doubly!)
    printBackward() {
        let current = this.tail;
        let result = "";
        while (current !== null) {
            result += current.data + " <-> ";
            current = current.prev;
        }
        console.log(result + "null");
    }
}

// ─── USAGE ──────────────────────────────────────────
const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.delete(20);
list.printForward();  // 5 <-> 10 <-> 30 <-> null
list.printBackward(); // 30 <-> 10 <-> 5 <-> null