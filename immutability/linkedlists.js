// IMMUTABILITY IN LINKED LISTS
// we can make linked lists immutable
// by rebuilding only the affected nodes

// immutable insert example:
// 1 - creates a new list
// 2 - shared unaffected nodes 
// 3 - original list remains intact

class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const insertBetween = (head, value, afterVal) => {
    if (!head) return null;

    return new ListNode(
        head.value,
        head.value === afterVal
            ? new ListNode(value, head.next)
            : insertBetween(head.next, value, afterVal)
    );
};