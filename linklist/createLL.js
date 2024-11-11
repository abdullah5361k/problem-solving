// In JS we have to implement LinkList manually

class Node {
    constructor(data) {
        this.data =  data;
        this.next = null;
    }
}


class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = null;
    }

    addLast(data) {
        const newNode = new Node(data);
        if(this.head === null) { // FirstNode of LL
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }


    addFirst(data) {
        const newNode = new Node(data);
        if(this.head === null)  {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }


    add(idx, data) {
        if(idx === 0) {
            this.addFirst(data);
            return;
        };
        const newNode = new Node(data);
        let temp = this.head;
        let i = 0;
        while(i < idx-1) {
            temp = temp.next;
        }
        // Add node
        const nextNode = temp.next;
        temp.next = newNode;
        newNode.next = nextNode;
        this.size++;
    }

    removeFirst() {
        if(this.size === 0) {
            return;
        }
       this.head = this.head.next;
       this.size--;
    }

    removeLast() {
        if(this.size === 0) {
            return;
        }
        if(this.size === 1) {
            this.tail = null;
            this.head = null;
            this.size = 0;
            return;
        }
        let temp = this.head;
        while(temp.next != this.tail) {
            temp = temp.next;
        }
        temp.next = null;
        tail = temp;
        this.size--;
    }

    search(key) {
        let temp = this.head;
        let idx = 0;
        while(temp != null) {
            if(temp.data === key) {
                return idx;
            }
            temp =  temp.next;
            idx++;
        }
        return -1;
    }

    reverseLL() {
        let temp = this.head;
        let prev = null;
        let next = null;
        while(temp != null) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        this.head = prev;
    }


    removeNthNodeFromLast(n) {
        if(n === this.size) {
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        let num = this.size - n;
        let i = 1;
        while(i < num) {
            temp = temp.next;
            i++;
        }

        temp.next = temp.next.next;
    }

    findMiddle() {
        let fast = this.head; // Hare
        let slow = this.head; // Turtle
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    reverseSecondHalfOfLL(node) {
        let prev = null;
        let curr = node;
        let next = null;
        while(curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    isPalindrome() {
        // Find middle
        let middle = this.findMiddle();

        // Reverse second half
        let secondHalf = this.reverseSecondHalfOfLL(middle);

        // Compare both half of LL
        let left = this.head;
        while(secondHalf != null) {
            if(left.data != secondHalf.data) return false;
            left = left.next;
            secondHalf = secondHalf.next;
        }
        return true;
    }

    print() {
        let temp = this.head;
        while(temp != null) {
            process.stdout.write(`${temp.data} `);
            // console.log({data: temp.data, next: temp.next});
            // console.log(temp.data);
            temp = temp.next;
        }
        console.log();
    }

}

const LL = new LinkList(); // Instance of LL
LL.addLast(1);
LL.addLast(3);
LL.addLast(1);
LL.addLast(3);
LL.addLast(1);
// LL.add(1, 4);
LL.print(); //null 1->4->3->5 === 
// LL.removeFirst();
// LL.removeLast();
// LL.print();
// console.log(LL.search(9));
// console.log(LL.size);
// LL.reverseLL();
// LL.print();
// LL.removeNthNodeFromLast(5);
// LL.print();
console.log(LL.isPalindrome());