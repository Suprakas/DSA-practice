// ─── NODE ───────────────────────────────────────────
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// ─── CIRCULAR DOUBLY LINKED LIST ( Not needed, rarely asked ) ────────────────────
class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
    }

    // ADD TO END
    append(data) {
        const newNode = new Node(data);

        // list is empty
        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head; // point to itself
            newNode.prev = this.head; // point to itself
            return;
        }

        // tail is always head.prev in circular doubly!
        const tail = this.head.prev;

        tail.next = newNode;      // old tail → new node
        newNode.prev = tail;      // new node ← old tail
        newNode.next = this.head; // new node → head
        this.head.prev = newNode; // head ← new node
    }

    // ADD TO FRONT
    prepend(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head;
            newNode.prev = this.head;
            return;
        }

        const tail = this.head.prev;

        newNode.next = this.head; // new node → old head
        newNode.prev = tail;      // new node ← tail
        this.head.prev = newNode; // old head ← new node
        tail.next = newNode;      // tail → new node
        this.head = newNode;      // update head
    }

    // DELETE BY VALUE
    delete(value) {
        if (this.head === null) return;

        let current = this.head;

        do {
            if (current.data === value) {

                // only one node in list
                if (current.next === this.head && current === this.head) {
                    this.head = null;
                    return;
                }

                // fix neighbours
                current.prev.next = current.next;
                current.next.prev = current.prev;

                // if deleting head, update head
                if (current === this.head) {
                    this.head = current.next;
                }

                return;
            }
            current = current.next;
        } while (current !== this.head);
    }

    // PRINT FORWARD
    printForward() {
        if (this.head === null) return;

        let current = this.head;
        let result = "";

        do {
            result += current.data + " <-> ";
            current = current.next;
        } while (current !== this.head);

        console.log(result + "(back to head)");
    }

    // PRINT BACKWARD
    printBackward() {
        if (this.head === null) return;

        let current = this.head.prev; // start from tail
        let result = "";

        do {
            result += current.data + " <-> ";
            current = current.prev;
        } while (current !== this.head.prev);

        console.log(result + "(back to tail)");
    }
}

// ─── USAGE ──────────────────────────────────────────
const list = new CircularDoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.delete(20);
list.printForward();  // 5 <-> 10 <-> 30 <-> (back to head)
list.printBackward(); // 30 <-> 10 <-> 5 <-> (back to tail)