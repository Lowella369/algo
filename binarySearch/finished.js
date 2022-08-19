class BinarySearchTree {
  
    constructor (value) {
      // stores argument value as root of tree
      this.value = value;
      // left connects to lesser value root node
      this.left = null;
      // right connect to greater value root node
      this.right = null;
  
    }
  
    insert(value){
      // if new value < root value, create new left node
      if(value<this.value){
        // if root has left branch, insert on that node
        if(this.left){
          //this is recursive because we are calling a method inside itself
          this.left.insert(value);
        } else {
          //else create a new left branch node
          let node = new BinarySearchTree(value);
          this.left = node; 
        }
      } else {
        // else, create new right node
        //if root has right brach, insert on that node
        if(this.right){
          this.right.insert(value);
        } else {
          // else create a new right branch node
          let node = new BinarySearchTree(value);
          this.right = node; 
        }
      }
    }
  
    contains(value){
      console.log("Searching for: ", value)
      // return true if a given value exists in the tree
      // first, check to see if value matches node
      if(value == this.value){
         //if it does return true
         console.log(`${value} == ${this.value}`)
         return true;
      } else if(value<this.value){
        console.log(`${value} < ${this.value}`)
        //else, if its smaller -> check if there is a left branch
        if(this.left !=null){
          // if there is, recursively search the left branch
          return this.left.contains(value);
        } else {
          // else return false
          return false;
        }
      } else {
        console.log(`${value} >= ${this.value}`)
        //else if its larger -> check if there is a right branch
        if(this.right != null){
          // if there is, recursively search the right branch
          return this.right.contains(value);
        } else {
          //else, return false
          return false
        }
      }
    }
  
  }
  
  module.exports = BinarySearchTree