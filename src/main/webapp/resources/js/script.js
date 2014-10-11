$(document).ready(function(){
	$.ajax({
		   "url":"https://www.kimonolabs.com/api/aci6r9cq?apikey=jDZFw9FU8zZph5RS853YIxYh4GVkMXVC",
		   "crossDomain":true,
		   "dataType":"jsonp",
		   success : function (data){
		   	completePage(data);
		   }
		});
		function completePage(data){
			var collections = data.results.collection1;
			for(var i = 0 ;i<collections.length;i++)
				{
					var html = "<li ><div style='text-decoration:none;'><span class='trend-icon' style=\"background-image:url('"+collections[i].image.src+"')\">"+
							    "</span><a href='"+ collections[i].trend_name.href+"' target='_blank' class='trend-name'>"+collections[i].trend_name.text +"</a>"+
								"<span class='trend-text' >"+collections[i].text.text+"</span><span class='trend-count'>"+ collections[i].no_of_searches+"Searches</span></div></li>"
				    
					$("#trending-now .trend-menu").append(html);			
				}
		}
	
});