For each of the methods associated with each data structure, classify it based on its runtime, using Big O notation.

## Linked List

1.  What is the runtime complexity of `addToTail`?
    O(1). just tail.next = new and then tail = new
    a. What if our list implementation didn't have a reference to the tail of the list in its constructor? What would be the runtime of the `addToTail` method?
    O(n) n being the number of items currently in the list. You would have to start at the head and go through till .next was null.
2.  What is the runtime complexity of `removeHead`?
    O(1) just need to make head = head.next
3.  What is the runtime complexity of `contains`?
    worst case O(n) -- have to check each number for the target number. best case O(1) -- target is the head (or head is null)
4.  What is the runtime complexity of `getMax`?
    O(n) -- have to check every number.

## Queue

1.  What is the runtime complexity of `enqueue`?
    O(1) -- same function as addToTail
2.  What is the runtime complexity of `dequeue`?
    O(1) -- same function as removeHead
3.  What is the runtime complexity of `isEmpty`?
    O(1) -- just checks length === 0
4.  What is the runtime complexity of `length`?
    O(1) -- just returns length

## Doubly Linked List

1.  What is the runtime complexity of `ListNode.insertAfter`?

2.  What is the runtime complexity of `ListNode.insertBefore`?

3.  What is the runtime complexity of `ListNode.delete`?

4.  What is the runtime complexity of `DoublyLinkedList.addToHead`?

5.  What is the runtime complexity of `DoublyLinkedList.removeFromHead`?

6.  What is the runtime complexity of `DoublyLinkedList.addToTail`?

7.  What is the runtime complexity of `DoublyLinkedList.removeFromTail`?

8.  What is the runtime complexity of `DoublyLinkedList.moveToFront`?

9.  What is the runtime complexity of `DoublyLinkedList.moveToBack`?

10. What is the runtime complexity of `DoublyLinkedList.delete`?

    a. Compare the runtime of the doubly linked list's `delete` method with the worst-case runtime of the `Array.splice` method. Which method generally performs better?

## Binary Search Tree

1.  What is the runtime complexity of `insert`?

2.  What is the runtime complexity of `contains`?

3.  What is the runtime complexity of `getMax`?

4.  What is the runtime complexity of `depthFirstForEach`?

5.  What is the runtime complexity of `breadthFirstForEach`?

6.  [Stretch Question] What is the runtime complexity of your `checkBalanced` function?

## Heap

1.  What is the runtime complexity of your `heapsort` function?

2.  What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?

3.  What is the runtime complexity of `bubbleUp`?

4.  What is the runtime complexity of `siftDown`?

5.  What is the runtime complexity of `insert`?

6.  What is the runtime complexity of `delete`?

7.  What is the runtime complexity of `getMax`?
