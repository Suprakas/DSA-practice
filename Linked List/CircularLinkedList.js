// ─── NODE (same as singly) ───────────────────────────
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// ─── CIRCULAR LINKED LIST ───────────────────────────
class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    // ADD TO END
    append(data) {
        const newNode = new Node(data);

        // list is empty
        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head; // point to itself!
            return;
        }

        // walk to the last node
        let current = this.head;
        while (current.next !== this.head) { // stop when we loop back
            current = current.next;
        }

        // attach new node
        current.next = newNode;
        newNode.next = this.head; // circle back to head
    }

    // ADD TO FRONT
    prepend(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        // walk to last node (we need it to update its next)
        let last = this.head;
        while (last.next !== this.head) {
            last = last.next;
        }

        newNode.next = this.head; // new node → old head
        last.next = newNode;      // last node → new node
        this.head = newNode;      // update head
    }

    // DELETE BY VALUE
    delete(value) {
        if (this.head === null) return;

        // deleting head
        if (this.head.data === value) {
            // walk to last node to update its next
            let last = this.head;
            while (last.next !== this.head) {
                last = last.next;
            }
            this.head = this.head.next;
            last.next = this.head; // last node → new head
            return;
        }

        // deleting middle or last node
        let current = this.head;
        while (current.next !== this.head) {
            if (current.next.data === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // PRINT (be careful — no null to stop at!)
    print() {
        if (this.head === null) return;

        let current = this.head;
        let result = "";

        do {
            result += current.data + " -> ";
            current = current.next;
        } while (current !== this.head); // stop when we reach head again

        console.log(result + "(back to head)");
    }
}

// ─── USAGE ──────────────────────────────────────────
const list = new CircularLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.delete(20);
list.print(); // 5 -> 10 -> 30 -> (back to head)