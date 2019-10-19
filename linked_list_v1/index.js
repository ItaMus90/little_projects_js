class Node{

    constructor(data, next = null){
    
        this.data = data;
        this.next = next;

    }

}


class LinkedList{

    constructor(){

        this.head = null;
        this.size = 0;

    }

    //Insert first node
    insertFirst(data){

        this.head = new Node(data, this.head);
        this.size++;

    }

    //Insert last node

    insertLast(data){

        let node = new Node(data);
        let current;

        //If empty , make head
        if(!this.head){

            this.head = node;

        }else{

            current = this.head;

            while (current.next) {
                
                current = current.next;

            }

            current.next = node;

        }

        this.size++;

    }

    //Inesrt at index
    insertAt(data, index){

        if(index > 0 && index > this.size)
            return;
        
        //If first index
        if(index === 0){

            this.insertFirst(data);
            return;

        }

        const node = new Node(data);
        let current, previous;

        //Set current to first
        current =this.head;
        let count = 0;

        while (count < index) {
            
            //Node before index
            previous = current;
            count++;
            current = current.next;

        }

        node.next = current;
        previous.next = node;

        this.size++;

    }

    //Get at index
    getAt(index){

        let current = this.head;
        let count = 0;

        while(current){

            if(count == index){

               console.log(current.data); 

            }

            count++;
            current = current.next;

        }

        return null;

    }

    //Remove at index
    removeAt(index){

        if(index > 0 && index > this.size)
            return;

        let current = this.head;
        let previous;
        let count = 0;

        //Remove first
        if(index === 0){

            this.head = current.next;

        }else{

            while(count < index){

                count++;
                previous = current;
                current = current.next;

            }

            previous.next = current.next;

        }
        
        this.size--;

    }

    //Clear list
    clearList(){

        this.head = null;

    }
    
    //Print list data
    printListData(){

        let current = this.head;

        while(current){

            console.log(current.data);
            current = current.next;

        }

    }

}



const li = new LinkedList();
li.insertFirst(100);
li.insertFirst(200);
li.insertFirst(300);

li.insertLast(400);
li.insertAt(444,0);

li.printListData();
li.removeAt(2);
li.printListData();