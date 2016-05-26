$(function(){
	function dictionary(){
		var items={};
		this.has=function(key){
			return key in items;
		};
		this.set=function(key,val){
			items[key]=val;
		};
		this.remove=function(key){
			if(this.has(key)){
				delete items[key];
				return true;
			};
			return false;
		};
		this.get=function(key){
			return this.has(key)?items[key]:undefined;
		};
		this.values=function(){
			var values=[];
			for(var k in items){
				if(this.has(k)){
					values.push(items[k])
				}
			}
			return values;
		};
		this.clear=function(){
			items={};
		};
		this.size=function(){
			return Object.keys(items).length;
		};
		this.getitems=function(){
			return items;
		};
	};
	
	var test=new dictionary();
	console.log(test.getitems());
	test.set(1,"shinyy")
	test.set(2,"何小杨")
	test.set(3,"赵若语")
	test.set(4,"陈小宝")
	console.log(test.getitems());
	test.remove(1)
	console.log(test.getitems());
	console.log(test.has(4));
	console.log(test.get(4));
	console.log(test.values());
	console.log(test.size());
	console.log(test.getitems());
	
	
})
	
