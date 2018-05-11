For each of the methods associated with each data structure, classify it based on its runtime, using Big O notation.

## Linked List

1.  What is the runtime complexity of `addToTail`?
    * O(1). just tail.next = new and then tail = new

* a. What if our list implementation didn't have a reference to the tail of the list in its constructor? What would be the runtime of the `addToTail` method?
  * O(n) n being the number of items currently in the list. You would have to start at the head and go through till .next was null.

2.  What is the runtime complexity of `removeHead`?
    * O(1) just need to make head = head.next
3.  What is the runtime complexity of `contains`?
    * worst case O(n) -- have to check each number for the target number. best case O(1) -- target is the head (or head is null)
4.  What is the runtime complexity of `getMax`?
    * O(n) -- have to check every number.

## Queue

1.  What is the runtime complexity of `enqueue`?
    * O(1) -- same function as addToTail
2.  What is the runtime complexity of `dequeue`?
    * O(1) -- same function as removeHead
3.  What is the runtime complexity of `isEmpty`?
    * O(1) -- just checks length === 0
4.  What is the runtime complexity of `length`?
    * O(1) -- just returns length

## Doubly Linked List

1.  What is the runtime complexity of `ListNode.insertAfter`?

    * O(1)

2)  What is the runtime complexity of `ListNode.insertBefore`?

    * O(1)

3)  What is the runtime complexity of `ListNode.delete`?

    * O(1)

4)  What is the runtime complexity of `DoublyLinkedList.addToHead`?

    * O(1)

5)  What is the runtime complexity of `DoublyLinkedList.removeFromHead`?

    * O(1)

6)  What is the runtime complexity of `DoublyLinkedList.addToTail`?

    * O(1)

7)  What is the runtime complexity of `DoublyLinkedList.removeFromTail`?

    * O(1)

8)  What is the runtime complexity of `DoublyLinkedList.moveToFront`?

    * O(1)

9)  What is the runtime complexity of `DoublyLinkedList.moveToBack`?

    * O(1)

10) What is the runtime complexity of `DoublyLinkedList.delete`?

    * O(1)

    a. Compare the runtime of the doubly linked list's `delete` method with the worst-case runtime of the `Array.splice` method. Which method generally performs better?

    * Splice would have to shift all items in the array after removing the unwanted item.

## Binary Search Tree

1.  What is the runtime complexity of `insert`?

* O(log n)

2.  What is the runtime complexity of `contains`?

* O(log n)

3.  What is the runtime complexity of `getMax`?

* O(log n)

4.  What is the runtime complexity of `depthFirstForEach`?

* O(n)

5.  What is the runtime complexity of `breadthFirstForEach`?

* O(n)

6.  [Stretch Question] What is the runtime complexity of your `checkBalanced` function?

## Heap

1.  What is the runtime complexity of your `heapsort` function?

* O(n)

2.  What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?

3.  What is the runtime complexity of `bubbleUp`?

* O(log n)

4.  What is the runtime complexity of `siftDown`?

* O(log n)

5.  What is the runtime complexity of `insert`?

6.  What is the runtime complexity of `delete`?

7.  What is the runtime complexity of `getMax`?
