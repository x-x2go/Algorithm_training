const nodeinfo = [[5,3],[11,5],[13,3],[3,5],[6,1],[1,3],[8,6],[7,2],[2,2]];

console.log(solution(nodeinfo));
function solution(nodeinfo) {
    let rootNode;
    let preorder = [];
    let postorder = [];

    const Node = class{
        constructor(index, x){
            this.index = index;
            this.x = x;
            this.left = null;
            this.right = null;
        }
    }

    const insert = (index, x) => {
        if(!rootNode){
            rootNode = new Node(index, x);
        }else{
            subInsert(rootNode, index, x);
        }
    }

    const subInsert = (node, index , x) => {
        const side = x < node.x ? 'left' : 'right';
        if(node[side] === null){
            node[side] = new Node(index, x);
        }else{
            subInsert(node[side], index, x);
        }
    }

    const _preorder = node => {
        preorder.push(node.index);
        if(node.left) _preorder(node.left);
        if(node.right) _preorder(node.right);
    }

    const _postorder = node => {
        if(node.left) _postorder(node.left);
        if(node.right) _postorder(node.right);
        postorder.push(node.index);
    }

    const sortednodes = nodeinfo.map(([x, y], i)=>[i + 1, x, y]).sort((a, b)=> b[2] - a[2]);
    sortednodes.forEach(([ index, x,  y])=> insert(index, x));

    _preorder(rootNode);
    _postorder(rootNode);

    return [preorder, postorder];


}