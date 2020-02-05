class Node {
  constructor(data, next, back) {
    this.data = data;
    this.next = next || null;
    this.back = back || null;
  }
}

class stack {
  constructor() {
    this.head = null;
    this.size = 0;
    this.current = null;
}

    insertLast(data) {
      let node = new Node(data);

      if (!this.head) {
        this.current = this.head = node;
      } else {
        let temp = this.head;
        this.head = node;
        temp.next = node;
        node.back = temp;
        }
      this.size++;
    }



    moveNext() {
        if (this.current && this.current.next)
            this.current = this.current.next;
    }
    moveBack() {
        if (this.current && this.current.back)
            this.current = this.current.back;
    }

    printListData() {
      if (this.current)
      return this.current.data;
      else{
        return "Empty List";
        }

      }



}




  let list = new stack();

  list.insertLast('<img src="img/1.jfif" width="300px;"><br><p>Frank Sinatra</p><br><audio controls autoplay><source src="songs/Frank Sinatra Fly Me To The Moon.mp3" type="audio/mpeg"></audio>')
  list.insertLast('<img src="img/2.jfif" width="300px;"><br><p>Queen</p><br><audio controls autoplay><source src="songs/QueenBohemian Rhapsody.mp3" type="audio/mpeg"></audio>')
  list.insertLast('<img src="img/3.jfif" width="300px;"><br><p>Coldplay</p><br><audio controls autoplay><source src="songs/Coldplay - Orphans.mp3" type="audio/mpeg"></audio>')
  list.insertLast('<img src="img/4.jfif" width="300px;"><br><p>Johnny Cash</p><br><audio controls autoplay><source src="songs/A Boy Named Sue Johnny Cash.mp3" type="audio/mpeg"></audio>')



  function next() {
      list.moveNext();
      document.getElementById('data').innerHTML = list.printListData();
  }

  function back() {
      list.moveBack();
      document.getElementById('data').innerHTML = list.printListData();
  }
