public class Node {
    private int data;
    Node next;

    // Constructor to create a new Node with the provided data
    Node(int d) {
        this.data = d;
        this.next = null; // Initially, there is no next node
    }

    // Getter for retrieving the data in this node
    public int getData() {
        return data;
    }

    // Setter for updating the data in this node
    public void setData(int data) {
        this.data = data;
    }
}
