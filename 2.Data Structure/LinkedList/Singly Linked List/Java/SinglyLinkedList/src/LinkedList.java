
public class LinkedList {
    private Node head; // Head of the linked list
    private Node tail; // Tail of the linked list
    // Constructor to initialize an empty linked list
    public LinkedList() {
        this.head = null;
    }

    // Method to insert a new node at the head of the linked list
    public void insertAtHead(int data) {
        Node newNode = new Node(data);
        newNode.next = head; // New node points to the current head
        head = newNode; // Update the head to the new node
    }

    // Method to display the elements in the linked list
    public void display() {
        // Create a temporary reference to iterate through the list
        Node temp = this.head;
        while (temp != null) {
            System.out.print("[data : "+temp.getData()+" | next : "+temp.next+"] --->"); // Print the data of the current node
            temp = temp.next; // Move to the next node
        }
    }
}
