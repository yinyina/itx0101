$(function(){
	//初始
	var StrPath = location.href;
	var bool = StrPath.indexOf("http");

	var bMenu = true;
	var iMax = 0;
	var kcjsarra = new Array();
	var kcjsarrb = new Array();

	$( "#coursetitle" ).html( sCourseTitle );
	loadlist();
	loaddowmlist();

	var oldLi = $("#list ul li[indexc=1]").eq(0);

	if(arrkcjsli1[0]){
		showswf(kcjsarrb[0]+1);	
	}else{
		showswf(kcjsarrb[0]);
	}
		
	var sfilename1 = arrList[oldLi.index()].filename;
	var sfilenamelocal1 = arrList[oldLi.index()].localpath;
	oldLi.css({"background":"#ed0c00 url(img/level3-"+ arrList[oldLi.index()].filetype +"-c.png) no-repeat left center","color":"#ffffff"});
	showvideo(sfilename1);
		if (bool<0){
			showvideo(sfilenamelocal1);
		}
	$("#kcjs_ul li:first").css({"background":"url(img/d2.png)","color":"#ffffff"});
	
	document.title = sCourseTitle;
	
	
	/*加载下方栏目*/
	function loaddowmlist(){
		var downlistli = null;
		var downlist = null;
		var downdiv = document.getElementById("kcjs_ul");

		for(var i=0; i<arrkcjs.length; i++){
			var kcjsa = arrkcjs[i].split("-")[0];
			var kcjsb = arrkcjs[i].split("-")[1];
			kcjsarra.push(kcjsa);
			kcjsarrb.push(kcjsb);
		}
		for(var i=0; i<arrkcjs.length; i++){
			this.index = i;
			if(kcjsarra[this.index]=="授课PPT"){
				downlistli = '<li name="cllippt">' +  kcjsarra[this.index] + '</li>'
			}else{
				downlistli = '<li>' +  kcjsarra[this.index] + '</li>'	
			}
			downlist = downlistli;
			downdiv.innerHTML += downlist;
		}
	}
	
	var downdivul = document.getElementById("kcjs_ul");	
	var downdivli = downdivul.getElementsByTagName("li");
		
	var arrkcjsliarrnum;
	var arrkcjsliarr;
	
	for(var i=0; i<downdivli.length; i++){
		downdivli[i].index = i;

		var downlilistli = '';
		var downullist = '';
		var downullists = '';
				
		arrkcjsliarrnum = downdivli[i].index+1;
		arrkcjsliarr = eval("arrkcjsli"+arrkcjsliarrnum)
		
		for(j=0;j<arrkcjsliarr.length;j++){
			this.num = j;
			downlilistli='<span>'+ arrkcjsliarr[this.num] +'</span>'
			downullist += downlilistli;
			
		}	
		downullists = '<p>'+downullist+'</p>';
		$(downdivli[i]).append(downullists);
	}

	/*鼠标滑过下方栏目，显示隐藏二级*/
	$("#kcjs_ul li").hover(function(){
		$("#kcjs_ul li p").hide();
		$(this).children().show();
		var valuecz = $(this).children().children().length
		if( valuecz !== 0 ){
			$(this).css("cursor","default");
		}	
	},function(){
		$("#kcjs_ul li p").hide();
	});

	/*鼠标点击下方栏目，切换显示文本*/
	$("#kcjs_ul li").click(function(){
		
		
		var valuecz = $(this).children().children().length
		
		if( valuecz == 0 ){
			
			if($(this).attr("name")=="cllippt"){
				$( "#wbox" ).css({ "width":($("#wbox").height()-37)*16/9})
			}else if($(this).attr("name")!=="cllippt"){
				$( "#wbox" ).css({ "width":829});
			}

			var down1 = $(this).index();

			showswf(kcjsarrb[down1])
			
			$("#kcjs_ul li").css("background","url(img/d1.png)");
			$("#kcjs_ul li").css("color","#000000");
			$(this).css("color","#ffffff");
			$("#kcjs_ul li p span").removeClass("current");
			$(this).css("background","url(img/d2.png)");
		}else{
			$("#kcjs_ul li p span").click(function(){

				if($(this).parent().parent().attr("name")=="cllippt"){
					$( "#wbox" ).css({ "width":($("#wbox").height()-37)*16/9})
				}else if($(this).attr("name")!=="cllippt"){
					$( "#wbox" ).css({ "width":829});
				}

				$("#kcjs_ul li p span").removeClass("current");
				$(this).addClass("current");
				$("#kcjs_ul li").css("background","url(img/d1.png)");
				$("#kcjs_ul li").css("color","#000000");
				$(this).parents("li").css("color","#ffffff");
				$(this).parents("li").css("background","url(img/d2.png)");

				var down1 = $(this).parents("li").index();
				var down2 = $(this).index()+1;
				
				var ifxz = $(this).html()
				
				if( ifxz.indexOf("下载")>0){
					showdownload(kcjsarrb[down1] + down2)
				}else{
					showswf(kcjsarrb[down1] + down2);
				}

			});
		}
		
		$("html,body").animate({ scrollTop: $(document).height() },1000);

	});	
		
	
	//视频播放函数
	function showvideo(vid){
		jsqplay()
		if (bool>=0){
			var sPlayer = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="100%" height="100%" id="cc_'+vid+'"><param name="movie" value="http://p.bokecc.com/flash/single/039C1380CF417F50_'+vid+'_true_9223C66477962A2F_1/player.swf" /><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param value="transparent" name="wmode" /><embed src="http://p.bokecc.com/flash/single/039C1380CF417F50_'+vid+'_true_9223C66477962A2F_1/player.swf" width="100%" height="100%" name="cc_'+vid+'" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/></object>'
			$("#cnt").html(sPlayer);
			
		}else{
			var mp4path = "video/" + CourseCode + vid;
			var imgpath = "img/beforevideo";

			var mstr = "<table width='711' height='400' cellpadding='0' cellspacing='1' bgcolor='#eceaea'>";
			mstr = mstr + "<tr>";
			mstr = mstr + "<td bgcolor=#ffffff valign=top><EMBED width=711 height=400 id=objF type=application/x-shockwave-flash src=player.swf flashvars='file="+mp4path+".mp4&amp;type=http&amp;image="+imgpath+".jpg&amp;repeat=list&amp;bufferlength=1&amp;volume=100&amp;autostart=0&amp;controlbar=bottom&amp;displayclick=play&amp;logo.position=top-left' allowfullscreen='true' allowscriptaccess='always' bgcolor='#000000' wmode='transparent'></EMBED></td>";
			mstr = mstr + "  </tr>";
			mstr = mstr + "</table>";
			$("#cnt").html(mstr);
		}
	}
	
	//右侧文档显示函数
	function showswf1(tid){
		jsqplay()
		tpath = "swf/"+tid+".swf";
		var ptr = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width=100% height=100% id='123'  align='middle'><param name='allowScriptAccess' value='always' /><param name='movie' value="+tpath+"><param name='quality' value='high'><param name='wmode' value='transparent' /><param name='wmode' value='opaque'><embed src="+tpath+" name='123' quality='high' allowScriptAccess='always'  swLiveConnect='true' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'  width=100% height=100% wmode='transparent'></embed></object>";
		$("#cnt").html(ptr);
	}
	
	//下边文档显示函数
	function showswf(tid){
		jsqplay()
		tpath = "swf/"+tid+".swf";
		var ptr = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width=100% height=100% id='123'  align='middle'><param name='allowScriptAccess' value='always' /><param name='movie' value="+tpath+"><param name='quality' value='high'><param name='wmode' value='transparent' /><param name='wmode' value='opaque'><embed src="+tpath+" name='123' quality='high' allowScriptAccess='always'  swLiveConnect='true' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'  width=100% height=100% wmode='transparent'></embed></object>";
		$("#wbox").html(ptr);
	}
	
	//下载函数
	function showdownload(tid){
		jsqplay()
		tpath = "download/"+tid+".zip";
		var dtr = "<table width='100%' height='100%' bgcolor='#ffffff'><tr><td valign='middle' align='center'><a href="+tpath+" target=_blank style='color:#000000; font-size:12px;'><img src=img/down.png width=180px height=180px style='margin-bottom:10px;'><br/>点击下载</a></td></tr></table>";
		$("#wbox").html(dtr);
	}

	//载入栏目
	function loadlist(){
		var onewLi = null;
		var $Ul = $( "#list ul" );
		var numa = 0;
		var numb = 0;
		var numc = 0;

		$.each( arrList,function( i,elem ){
			switch(elem.level){
				case "1":
					numa++;
					numb=0;
					onewLi = $( "<li>"+elem.coursename+"</li>" ).appendTo($Ul).css({"background":"url(img/level1-"+numa+".png) no-repeat left center","font-weight":"bold","font-size":"17px","padding-left":"40px","padding-right":"10px"}).attr({"indexa":numa,"level":"1"})
				break;
				case "2":
					numb++;
					numc=0;
					onewLi = $( "<li>"+elem.coursename+"</li>" ).appendTo($Ul).css({"background":"url(img/level2-"+numb+".png) no-repeat left center","font-weight":"bold","padding-left":"45px","padding-right":"10px"}).attr({"indexa":numa,"indexb":numb})
				break;
				case "3":
					numc++;
					onewLi = $( "<li>"+elem.coursename+"</li>" ).appendTo($Ul).css({"background":"url(img/level3-"+ elem.filetype +"-n.png) no-repeat left center","cursor":"pointer","padding-left":"60px","padding-right":"10px"}).attr({"indexa":numa,"indexb":numb,"indexc":numc,"title":elem.coursename}).click(function(){
							if(elem.filetype=="v"){
								showvideo(elem.filename);
									if (bool<0){
										showvideo(elem.localpath);
									}
								$(this).css({"background":"#ed0c00 url(img/level3-v-c.png) no-repeat left center","color":"#ffffff"})
							}else if(elem.filetype=="t"){
								showswf1(elem.filename);
								$(this).css({"background":"#ed0c00 url(img/level3-t-c.png) no-repeat left center","color":"#ffffff"})
							}
							
							if(arrList[oldLi.index()].filetype=="v"){
								if($(this).index()==oldLi.index()){
									oldLi.css({"background":"#ed0c00 url(img/level3-v-c.png) no-repeat left center","color":"#ffffff"})
								}else{
									oldLi.css({"background":"#bcbec6 url(img/level3-v-n.png) no-repeat left center","color":"#000000"})
								}
							}else if(arrList[oldLi.index()].filetype=="t"){
								if($(this).index()==oldLi.index()){
									oldLi.css({"background":"#ed0c00 url(img/level3-t-c.png) no-repeat left center","color":"#ffffff"})
								}else{
									oldLi.css({"background":"#bcbec6 url(img/level3-t-n.png) no-repeat left center","color":"#000000"})
								}
							}

							oldLi = $(this);
						}
					)
				break;
				default:
				break;
			}
		})
	}
		
	
	
});




//--------------------视频暂停与恢复播放------------------

function getSWF( swfID ) {
if (window.document[ swfID ]) {
	return window.document[ swfID ];
} else if (navigator.appName.indexOf("Microsoft") == -1) {
	if (document.embeds && document.embeds[ swfID ]) {
	return document.embeds[ swfID ];
	}
} else {
	return document.getElementById( swfID );
	}
	
}

var videovid;
var objectid;
var videoifplay=true;

//播放器界面元素初始化时
function on_cc_player_init( vid, objectID ){
	videovid=vid;
	objectid=objectID;
	var ccplayer = getSWF( objectID );
	var config = {};
	ccplayer.setConfig(config);
}

//暂停播放
function on_spark_player_pause(){
	//var player = getSWF(objectid);
	//player.pause();
	videoifplay = false;
	if(platformDomain=="teacheredu.cn"){
		if(parent.callParentVideoifplay){
			parent.callParentVideoifplay(videoifplay);
		}
	}
}

//恢复播放
function on_spark_player_resume(){
	//var player = getSWF(objectid);
	//player.resume();
	videoifplay = true;
	if(platformDomain=="teacheredu.cn"){
		if(parent.callParentVideoifplay){
			parent.callParentVideoifplay(videoifplay);
		}
	}
}

//结束播放
function on_spark_player_stop(){
	videoifplay = false;
	if(platformDomain=="teacheredu.cn"){
		if(parent.callParentVideoifplay){
			parent.callParentVideoifplay(videoifplay);
		}
	}
}


//告诉计时器计时调用函数，传值true
function jsqplay(){
	videoifplay = true;
	if(platformDomain=="teacheredu.cn"){
		if(parent.callParentVideoifplay){
			parent.callParentVideoifplay(videoifplay);
		}
	}
}


//获取url中的domain参数
function getUrlParam(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) return unescape(r[2]); return null;
} 

var platformDomain;
platformDomain = getUrlParam('domain');


if(platformDomain=="teacheredu.cn"){
	document.domain = platformDomain;	
}






