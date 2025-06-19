// TASK 10: IMMUTABLE LIST INSERT
// define a listnode and write a function to insert
// a new node bteween two nodes in an
// immutable way

class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const insertBetween = (head, value, afterValue) => {
    if (!head) return null;

    if (head.value === afterValue) {
        const newNode = new ListNode(value, insertBetween(head.next, value, '_skip'));
        return new ListNode(head.value, new Node);
    }

    return new ListNode(head.value, insertBetween(head.next, value, afterValue));
};


const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// Insert 99 after node with value 2
const newHead = insertBetween(node1, 99, 2);

// Traverse and print new list
let current = newHead;
while (current) {
  console.log(current.value);
  current = current.next;
}
// Output:
// 1
// 2
// 99
// 3

// Ensure original list is unchanged
console.log(node2.next.value); // Still 3
