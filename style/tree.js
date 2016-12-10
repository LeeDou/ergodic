
window.onload=function(){
	var root=document.getElementsByClassName('one')[0];
	// var bt1=document.getElementById('pre');
	// var bt2=document.getElementById('in');
	// var bt3=document.getElementById('post');
	var button=document.getElementsByClassName('button')[0];
	// console.log(button);

	var showQueue=new Array();//要显示的节点的队列
	var showNode;//要显示的节点
	var timer;

	//先序遍历
	function preOrder(node){
		if(node!=null){
			showQueue.push(node);
			arguments.callee(node.firstElementChild);
			arguments.callee(node.lastElementChild);
		}
	}

	//中序遍历
	function inOrder(node){
		if(node!=null){	
			arguments.callee(node.firstElementChild);
			showQueue.push(node);
			arguments.callee(node.lastElementChild);
		}
	}

	//后序遍历
	function postOrder(node){
		if(node!=null){
			arguments.callee(node.firstElementChild);
			arguments.callee(node.lastElementChild);
			showQueue.push(node);
		}	
	}

	// bt1.onclick = function(){
	// 	preOrder(root);
	// 	if(showQueue.length>0){//队列非空，即正在遍历
	// 		console.log(showQueue);
	// 		// showNode.style.backgroundColor="#fff";
	// 		// showQueue=[];//清空队列
	// 		clearTimeout(timer);
	// 	}
	// 	show();//所有节点入栈完成开始显示
	// }

	// bt2.onclick=function(){
	// 	inOrder(root);
	// 	if(showQueue.length>0){//队列非空，即正在遍历
	// 		// showNode.style.backgroundColor="#fff";
	// 		// showQueue=[];//清空队列
	// 		// clearTimeout(timer);
	// 		show();
	// 	}
	// 	console.log(showQueue);
	// 	showQueue=[];
	// 	console.log(showQueue);
		
	// }

	// bt3.onclick=function(){
	// 	postOrder(root);
	// 	if(showQueue.length>0){//队列非空，即正在遍历
	// 		showNode.style.backgroundColor="#fff";
	// 		showQueue=[];//清空队列
	// 		clearTimeout(timer);
	// 	}
	// 	show();
	// }
	button.onclick=function(e){
		// if(showQueue.length>0){//队列非空，即正在遍历
		// 	// showNode.style.backgroundColor="#fff";
		// 	// showQueue=[];//清空队列
		// 	// clearTimeOut(timer);
		// }
		// 选择按钮
		// console.log("d");
		switch(e.target.id){
			case "pre" :
			preOrder(root);
			break;
			case "in" :
			inOrder(root);
			break;
			case "post" :
			postOrder(root);
			break; 
	    }
	    // if(showQueue.length>0){//队列非空，即正在遍历
			// showNode.style.backgroundColor="#fff";
			// showQueue=[];//清空队列
			clearTimeout(timer);
			show();
			// console.log(showQueue);
		
		// }
	    
	}

	function show(){
		showNode=showQueue.shift();//出队列
		// console.log(showNode);
		if (showNode) {
			showNode.style.backgroundColor="#000fff";//设置颜色为蓝
			timer=setTimeout(function(){
				showNode.style.backgroundColor="#fff";//1秒后颜色变为白
				show();//递归调用
			},1000)

		}
		// console.log(showNode.style.backgroundColor);
	}

}