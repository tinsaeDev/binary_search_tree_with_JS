/**
 * A simple BST node class 
 */
class BSTNode {
    
/**
 * 
 * @param {String|Number} index  attribute will be used for sorting 
 * @param {Object} data , aribtrary data
 */
  constructor(data) {
    this.data =  data;

  }

  getData() {
    return this.data;
  }

  /**
   * Set node data
   * @param { BSTNode }
   */
  setData(data){
    this.data = data;
  }

  /**
   * Returns the left node of the current node
   * @returns {BSTNode}
   */
  left() {
    return this.leftNode;
  }

  /**
   * Returns the right node of the current node
   * @returns {BSTNode}
   */
  right() {
    return this.rightNode;
  }

  /**
   * Sets the right  node of the current node
   * @param { BSTNode }
   */
  setRight(node) {
    this.rightNode = node;
  }
  /**
   * Sets the left  node of the current node
   * @param { BSTNode }
   */
  setLeft(node) {
    this.leftNode = node;
  }

  increment() {
    this.count++;
  }
}


/**
 * A Binary search tree, utility class , helps to insert, search 
 */
class BSTDataStructure{

    constructor(index){
        /**
         * This is a an index , similar to database index,
         * this is the name of object's attribute which will be used to compare and search objects.
         * 
         */
        this.index = index ;
    }

    /**
     * Inserts a new node to the BST tree, the 
     * @param {Number} data 
     * @param {BSTNode} parent 
     * @returns 
     */
     insert( data , parent) {

        
        if( parent==null ){
            if(  this.rootNode==null){
                this.rootNode = new BSTNode( data );
            } 
            parent = this.rootNode;
        }

        


        let parentValue = parent.getData()[ this.index ];
        let newNodeValue = data[ this.index ];

        
        
        if ( parentValue  < newNodeValue ) {
          // if the node's right node is not null
          if (parent.right()) {
            this.insert( data, parent.right());
          } else {
            parent.setRight(new BSTNode(data));
          }
        } else if ( parentValue  > newNodeValue) {
          if (parent.left()) {
            this.insert( data , parent.left());
          } else {
            parent.setLeft(new BSTNode(data));
          }
        } else if ( parentValue == newNodeValue) {
          parent.increment();
        } else {
        //   code should not  reach here 
        }
      }
      

    /**
     * Searches for an object from the BST   value in the BST,
     * The: the index is used be used to compare the the objects 
     * @param {Number} key 
     * @param {BSTNode} parent 
     * @returns {BSTNode}
     */
     search( key , parent=this.rootNode){
         if (parent.getData()[ this.index ] == key) {
            return parent;
          } else if (parent.getData()[ this.index ] > key) {
            return this.search(key,parent.left());
          } else if (parent.getData()[ this.index ] < key) {
            return this.search(key, parent.right());
          }
        
    };       

}



// Initialize a new Binary Search Tree 
let bst = new BSTDataStructure();

/**
 * Data insertion examples
 */

bst.insert( {
    name : "Tinsae Belay",
    age: 25,
    height : 180
} );
bst.insert( {
    name : "Abebe Kebede ",
    age: 52,
    height : 164
});
bst.insert( {
    name : "Chalachew Mengiste",
    age: 25,
    height : 180
});
bst.insert( {
    name : "Adisu Tamrat ",
    age: 42,
    height : 190
});
bst.insert( {
    name : "Chaltu Hailu",
    age: 18,
    height : 188
});


/**
 * Seach the from the BST
 * Note, see the index attribute 
 */
console.log( bst.search( "Chaltu Hailu" ) );

