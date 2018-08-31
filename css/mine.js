$("#options i").click(function(){
	$(".color-options").toggle();
})

var lis= $("#options ul li ");
lis.eq(0).css("backgroundColor","teal")
lis.eq(1).css("backgroundColor","tan")
lis.eq(2).css("backgroundColor","red")
lis.eq(3).css("backgroundColor","#09c")
lis.eq(4).css("backgroundColor","pink")

lis.click(function(){

var color = $(this).css("backgroundColor")
$("p,i,h1").css("color",color)
})