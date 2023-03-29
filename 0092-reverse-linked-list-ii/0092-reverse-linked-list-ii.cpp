/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
// class Solution {
//  public:
//   ListNode* reverseBetween(ListNode* head, int left, int right) {
//     if (left == 1)
//       return reverseN(head, right);

//     head->next = reverseBetween(head->next, left - 1, right - 1);

//     return head;
//   }

//  private:
//   ListNode* reverseN(ListNode* head, int n) {
//     if (n == 1)
//       return head;

//     ListNode* newHead = reverseN(head->next, n - 1);
//     ListNode* headNext = head->next;
//     head->next = headNext->next;
//     headNext->next = head;

//     return newHead;
//   }
// };
                // ANOTHER SOLUTION

class Solution {
 public:
  ListNode* reverseBetween(ListNode* head, int m, int n) {
    if (!head || m == n)
      return head;

    ListNode dummy(0, head);
    ListNode* prev = &dummy;

    for (int i = 0; i < m - 1; ++i)
      prev = prev->next;  // Point to the node before the sublist [m, n]

    ListNode* tail = prev->next;  // Will be the tail of the sublist [m, n]

    // Reverse the sublist [m, n] one by one
    for (int i = 0; i < n - m; ++i) {
      ListNode* cache = tail->next;
      tail->next = cache->next;
      cache->next = prev->next;
      prev->next = cache;
    }

    return dummy.next;
  }
};
