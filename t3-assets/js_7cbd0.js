/* 41.k2.js */

var $K2=jQuery.noConflict();$K2(document).ready(function(){$K2('#comment-form').submit(function(event){event.preventDefault();$K2('#formLog').empty().addClass('formLogLoading');$K2.ajax({url:$K2('#comment-form').attr('action'),type:'post',dataType:'json',data:$K2('#comment-form').serialize(),success:function(response){$K2('#formLog').removeClass('formLogLoading').html(response.message);if(typeof(Recaptcha)!="undefined"){Recaptcha.reload();}
if(response.refresh){window.location.reload();}}});});$K2('.commentRemoveLink').click(function(event){event.preventDefault();var element=$K2(this);$K2(element).parent().addClass('commentToolbarLoading');$K2.ajax({url:$K2(element).attr('href'),type:'post',data:$K2('#comment-form input:last').serialize(),success:function(response){$K2(element).parent().removeClass('commentToolbarLoading');if(response=='true'){$K2(element).parent().parent().remove();}}});});$K2('.commentApproveLink').click(function(event){event.preventDefault();var element=$K2(this);$K2(element).parent().addClass('commentToolbarLoading');$K2.ajax({url:$K2(element).attr('href'),type:'post',data:$K2('#comment-form input:last').serialize(),success:function(response){$K2(element).parent().removeClass('commentToolbarLoading');if(response=='true'){$K2(element).parent().parent().removeClass('unpublishedComment');}}});});$K2('.k2ReportUserButton').click(function(event){event.preventDefault();if(confirm(K2Language[0])){var element=$K2(this);$K2(element).parent().addClass('commentToolbarLoading');$K2.ajax({url:$K2(element).attr('href'),type:'GET',success:function(response){$K2(element).parent().removeClass('commentToolbarLoading');alert(response);}});}});$K2('#k2ReportCommentForm').submit(function(event){event.preventDefault();$K2('#formLog').empty().addClass('formLogLoading');$K2.ajax({url:$K2('#k2ReportCommentForm').attr('action'),type:'post',data:$K2('#k2ReportCommentForm').serialize(),success:function(response){$K2('#formLog').removeClass('formLogLoading').html(response);if(typeof(Recaptcha)!="undefined"){Recaptcha.reload();}}});});$K2('#fontDecrease').click(function(event){event.preventDefault();$K2('.itemFullText').removeClass('largerFontSize');$K2('.itemFullText').addClass('smallerFontSize');});$K2('#fontIncrease').click(function(event){event.preventDefault();$K2('.itemFullText').removeClass('smallerFontSize');$K2('.itemFullText').addClass('largerFontSize');});$K2('.k2Anchor').click(function(event){event.preventDefault();var target=this.hash;$K2('html, body').stop().animate({scrollTop:$K2(target).offset().top},500);});$K2('.itemRatingForm a').click(function(event){event.preventDefault();var itemID=$K2(this).attr('rel');var log=$K2('#itemRatingLog'+itemID).empty().addClass('formLogLoading');var rating=$K2(this).html();$K2.ajax({url:K2SitePath+"index.php?option=com_k2&view=item&task=vote&format=raw&user_rating="+rating+"&itemID="+itemID,type:'get',success:function(response){log.removeClass('formLogLoading');log.html(response);$K2.ajax({url:K2SitePath+"index.php?option=com_k2&view=item&task=getVotesPercentage&format=raw&itemID="+itemID,type:'get',success:function(percentage){$K2('#itemCurrentRating'+itemID).css('width',percentage+"%");setTimeout(function(){$K2.ajax({url:K2SitePath+"index.php?option=com_k2&view=item&task=getVotesNum&format=raw&itemID="+itemID,type:'get',success:function(response){log.html(response);}});},2000);}});}});});$K2('.classicPopup').click(function(event){event.preventDefault();if($K2(this).attr('rel')){var json=$K2(this).attr('rel');json=json.replace(/'/g,'"');var options=$K2.parseJSON(json);}else{var options={x:900,y:600};}
window.open($K2(this).attr('href'),'K2PopUpWindow','width='+options.x+',height='+options.y+',menubar=yes,resizable=yes');});$K2('div.k2LiveSearchBlock form input[name=searchword]').keyup(function(event){var parentElement=$K2(this).parent().parent();if($K2(this).val().length>3&&event.key!='enter'){$K2(this).addClass('k2SearchLoading');parentElement.find('.k2LiveSearchResults').css('display','none').empty();parentElement.find('input[name=t]').val($K2.now());parentElement.find('input[name=format]').val('raw');var url='index.php?option=com_k2&view=itemlist&task=search&'+parentElement.find('form').serialize();parentElement.find('input[name=format]').val('html');$K2.ajax({url:url,type:'get',success:function(response){parentElement.find('.k2LiveSearchResults').html(response);parentElement.find('input[name=searchword]').removeClass('k2SearchLoading');parentElement.find('.k2LiveSearchResults').css('display','block');}});}else{parentElement.find('.k2LiveSearchResults').css('display','none').empty();}});$K2('a.calendarNavLink').live('click',function(event){event.preventDefault();var parentElement=$K2(this).parent().parent().parent().parent();var url=$K2(this).attr('href');parentElement.empty().addClass('k2CalendarLoader');$K2.ajax({url:url,type:'post',success:function(response){parentElement.html(response);parentElement.removeClass('k2CalendarLoader');}});});$K2('.k2Scroller').css('width',($K2('.k2Scroller').find('.k2ScrollerElement:first').outerWidth(true))*$K2('.k2Scroller').children('.k2ScrollerElement').length);});$K2(window).load(function(){var blocks=$K2('.subCategory, .k2EqualHeights');var maxHeight=0;blocks.each(function(){maxHeight=Math.max(maxHeight,parseInt($K2(this).css('height')));});blocks.css('height',maxHeight);});;

/*  */
/*
		GNU General Public License version 2 or later; see LICENSE.txt
*/
var JCaption=new Class({initialize:function(a){this.selector=a;$$(a).each(function(a){this.createCaption(a)},this)},createCaption:function(a){var f=document.createTextNode(a.title),c=document.createElement("div"),d=document.createElement("p"),e=a.getAttribute("width"),b=a.getAttribute("align");if(!e)e=a.width;b||(b=a.getStyle("float"));if(!b)b=a.style.styleFloat;if(b==""||!b)b="none";d.appendChild(f);d.className=this.selector.replace(".","_");a.parentNode.insertBefore(c,a);c.appendChild(a);a.title!=
""&&c.appendChild(d);c.className=this.selector.replace(".","_");c.className=c.className+" "+b;c.setAttribute("style","float:"+b);c.style.width=e+"px"}});

/* d5.core.js */

function switchFontSize(ckname,val){var bd=document.getElementsByTagName('body');if(!bd||!bd.length)return;bd=bd[0];switch(val){case'inc':if(CurrentFontSize+1<7){CurrentFontSize++;}
break;case'dec':if(CurrentFontSize-1>0){CurrentFontSize--;}
break;case'reset':default:CurrentFontSize=DefaultFontSize;}
var newclass='fs'+CurrentFontSize;bd.className=bd.className.replace(new RegExp('fs.?','g'),'');bd.className=trim(bd.className);bd.className+=(bd.className?' ':'')+newclass;createCookie(ckname,CurrentFontSize,365);}
function switchTool(ckname,val){createCookie(ckname,val,365);window.location.reload();}
function cpanel_reset(){var matches=document.cookie.match(new RegExp('(?:^|;)\\s*'+tmpl_name.escapeRegExp()+'_([^=]*)=([^;]*)','g'));if(!matches)return;for(var i=0;i<matches.length;i++){var ck=matches[i].match(new RegExp('(?:^|;)\\s*'+tmpl_name.escapeRegExp()+'_([^=]*)=([^;]*)'));if(ck){createCookie(tmpl_name+'_'+ck[1],'',-1);}}
if(window.location.href.indexOf('?')>-1){window.location.href=window.location.href.substr(0,window.location.href.indexOf('?'));}else{window.location.reload(true);}}
function cpanel_apply(){var elems=document.getElementById('ja-cpanel-main').getElementsByTagName('*');var usersetting={};for(var i=0;i<elems.length;i++){var el=elems[i];if(el.name&&(match=el.name.match(/^user_(.*)$/))){var name=match[1];var value='';if(el.tagName.toLowerCase()=='input'&&(el.type.toLowerCase()=='radio'||el.type.toLowerCase()=='checkbox')){if(el.checked)value=el.value;}else{value=el.value;}
if(usersetting[name]){if(value)usersetting[name]=value+','+usersetting[name];}else{usersetting[name]=value;}}}
for(var k in usersetting){name=tmpl_name+'_'+k;value=usersetting[k].trim();if(value.length>0){createCookie(name,value,365);}}
if(window.location.href.indexOf('?')>-1){window.location.href=window.location.href.substr(0,window.location.href.indexOf('?'));}else{window.location.reload(true);}}
function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}else{expires="";}
document.cookie=name+"="+value+expires+"; path=/";}
function trim(str,chars){return ltrim(rtrim(str,chars),chars);}
function ltrim(str,chars){chars=chars||"\\s";return str.replace(new RegExp("^["+chars+"]+","g"),"");}
function rtrim(str,chars){chars=chars||"\\s";return str.replace(new RegExp("["+chars+"]+$","g"),"");}
function getScreenWidth(){var x=0;if(self.innerHeight){x=self.innerWidth;}else if(document.documentElement&&document.documentElement.clientHeight){x=document.documentElement.clientWidth;}else if(document.body){x=document.body.clientWidth;}
return x;}
function equalHeight(els){els=$$_(els);if(!els||els.length<2)return;var maxh=0;var els_=[];els.each(function(el,i){if(!el)return;els_[i]=el;var ch=els_[i].getCoordinates().height;maxh=(maxh<ch)?ch:maxh;},this);els_.each(function(el,i){if(!el)return;if(el.getStyle('padding-top')!=null&&el.getStyle('padding-bottom')!=null){if(maxh-el.getStyle('padding-top').toInt()-el.getStyle('padding-bottom').toInt()>0){el.setStyle('min-height',maxh-el.getStyle('padding-top').toInt()-el.getStyle('padding-bottom').toInt());}}else{if(maxh>0)el.setStyle('min-height',maxh);}},this);}
function getDeepestWrapper(el){while(el.getChildren().length==1){el=el.getChildren()[0];}
return el;}
function fixHeight(els,group1,group2){els=$$_(els);group1=$$_(group1);group2=$$_(group2);if(!els||!group1)return;var height=0;group1.each(function(el){if(!el)return;height+=el.getCoordinates().height;});if(group2){group2.each(function(el){if(!el)return;height-=el.getCoordinates().height;});}
els.each(function(el,i){if(!el)return;if(el.getStyle('padding-top')!=null&&el.getStyle('padding-bottom')!=null){if(height-el.getStyle('padding-top').toInt()-el.getStyle('padding-bottom').toInt()>0){el.setStyle('min-height',height-el.getStyle('padding-top').toInt()-el.getStyle('padding-bottom').toInt());}}else{if(height>0){el.setStyle('min-height',height);}}});}
function addFirstLastItem(el){el=$(el);if(!el||!el.getChildren()||!el.getChildren().length)return;el.getChildren()[0].addClass('first-item');el.getChildren()[el.getChildren().length-1].addClass('last-item');}
function $$_(els){if($type(els)=='string')return $$(els);var els_=[];els.each(function(el){el=$(el);if(el)els_.push(el);});return els_;};

/* a1.mega.js */

var jaMegaMenuMoo=new Class({Implements:Options,options:{slide:0,duration:300,fading:0,bgopacity:0.9,delayHide:500,direction:'down',action:'mouseenter',hidestyle:'normal',offset:5,fixArrow:false},toElement:function(){return this.menu;},initialize:function(menu,options){this.menu=$(menu);if(!this.menu){return;}
this.setOptions(options);if(!this.options.slide&&!this.options.fading){this.options.delayHide=10;}
this.childopen=[];this.imgloaded=false;this.loaded=false;this.prepare();},prepare:function(){var imgElms=this.menu.getElements('img');if(imgElms.length&&!this.imgloaded){var imgSrcs=[];imgElms.each(function(image){imgSrcs.push(image.src)});new Asset.images(imgSrcs,{onComplete:function(){this.start();}.bind(this)});this.imgloaded=true;this.start.delay(3000,this);}else{this.start();}},start:function(){if(this.loaded){return;}
this.loaded=true;this.zindex=1000;var pw=this.menu;while(pw=pw.getParent()){if(pw.hasClass('main')||pw.hasClass('wrap')){this.wrapper=pw;break;}}
this.items=this.menu.getElements('li.mega');this.items.each(function(li){var link=li.getChildren('a.mega')[0],child=li.getChildren('.childcontent')[0],level0=li.getParent().hasClass('level0'),parent=this.getParent(li),item={stimer:null,direction:((level0&&this.options.direction=='up')?0:1)};if(child){var childwrap=child.getElement('.childcontent-inner-wrap'),childinner=child.getElement('.childcontent-inner'),width=childinner.getWidth(),height=childinner.getHeight(),padding=childwrap.getStyle('padding-left').toInt()+childwrap.getStyle('padding-right').toInt(),overflow=false;child.setStyles({width:width+20,height:height+20});childwrap.setStyle('width',width);if(['auto','scroll'].contains(childinner.getStyle('overflow'))){overflow=true;if(Browser.ie){if(Browser.version<=7){childinner.setStyle('position','relative');}
if(Browser.version==6){childinner.setStyle('height',childinner.getStyle('max-height')||400);}}}
if(this.options.direction=='up'){if(level0){child.setStyle('top',-child.getHeight());}else{child.setStyle('bottom',0);}}}
if(child&&this.options.bgopacity){new Element('div',{'class':'childcontent-bg',styles:{width:'100%',height:height,opacity:this.options.bgopacity,position:'absolute',top:0,left:0,zIndex:1,background:child.getStyle('background'),backgroundImage:child.getStyle('background-image'),backgroundRepeat:child.getStyle('background-repeat'),backgroundColor:child.getStyle('background-color')}}).inject(childwrap,'top');child.setStyle('background','none');childwrap.setStyles({position:'relative',zIndex:2});}
if(child&&(this.options.slide||this.options.fading)){if(child.hasClass('right')){child.setStyle('right',0);}
var fx=new Fx.Morph(childwrap,{duration:this.options.duration,transition:Fx.Transitions.linear,onComplete:this.itemAnimDone.bind(this,item),link:'cancel'}),stylesOn={};if(this.options.slide){if(level0){stylesOn[item.direction==1?'margin-top':'bottom']=0;}else{stylesOn[window.isRTL?'margin-right':'margin-left']=0;}}
if(this.options.fading){stylesOn['opacity']=1;}}
if(child&&this.options.action=='click'){li.addEvent('click',function(e){e.stopPropagation();if(li.hasClass('group')){return;}
if(item.status=='open'){if(this.cursorIn(li,e)){this.itemHide(item);}else{this.hideOthers(li);}}else{this.itemShow(item);}}.bind(this));}
if(this.options.action=='mouseover'||this.options.action=='mouseenter'){li.addEvent('mouseover',function(e){if(li.hasClass('group')){return;}
e.stop();clearTimeout(item.stimer);clearTimeout(this.atimer);this.intent(item,'open');this.itemShow(item);}.bind(this)).addEvent('mouseleave',function(e){if(li.hasClass('group')){return;}
clearTimeout(item.stimer);this.intent(item,'close');if(child){item.stimer=this.itemHide.delay(this.options.delayHide,this,[item]);}else{this.itemHide(item);}}.bind(this));if(link&&child){link.addEvent('click',function(e){if(!item.clickable){e.stop();}});}
li.addEvent('click',function(e){e.stopPropagation()});if(child){child.addEvent('mouseover',function(){clearTimeout(item.stimer);clearTimeout(this.atimer);this.intent(item,'open');this.itemShow(item);}.bind(this)).addEvent('mouseleave',function(e){e.stop();this.intent(item,'close');clearTimeout(item.stimer);if(!this.cursorIn(item.el,e)){this.atimer=this.hideAlls.delay(this.options.delayHide,this);}}.bind(this))}}
if(link&&!child){link.addEvent('click',function(e){e.stopPropagation();this.hideOthers(null);this.menu.getElements('.active').removeClass('active');var p=li;while(p){var idata=p.retrieve('item');p.addClass('active');idata.link.addClass('active');p=idata.parent;}}.bind(this));}
Object.append(item,{el:li,parent:parent,link:link,child:child,childwrap:childwrap,childinner:childinner,width:width,height:height,padding:padding,level0:level0,fx:fx,stylesOn:stylesOn,overflow:overflow,clickable:!(link&&child)});li.store('item',item);},this);var container=$('ja-wrapper');if(!container){container=document.body;}
container.addEvent('click',function(e){this.hideAlls();}.bind(this));this.menu.getElements('.childcontent').setStyle('display','none');},getParent:function(el){var p=el;while((p=p.getParent())){if(this.items.contains(p)&&!p.hasClass('group')){return p;}
if(!p||p==this.menu){return null;}}},intent:function(item,action){item.intent=action;while(item.parent&&(item=item.parent.retrieve('item'))){item.intent=action;}},cursorIn:function(el,event){if(!el||!event){return false;}
var pos=el.getPosition(),cursor=event.page;return(cursor.x>pos.x&&cursor.x<pos.x+el.getWidth()&&cursor.y>pos.y&&cursor.y<pos.y+el.getHeight());},itemOver:function(item){item.el.addClass('over');if(item.el.hasClass('haschild')){item.el.removeClass('haschild').addClass('haschild-over');}
if(item.link){item.link.addClass('over');}},itemOut:function(item){item.el.removeClass('over');if(item.el.hasClass('haschild-over')){item.el.removeClass('haschild-over').addClass('haschild');}
if(item.link){item.link.removeClass('over');}},itemShow:function(item){if(this.childopen.indexOf(item)<this.childopen.length-1){this.hideOthers(item.el);}
if(item.status=='open'){return;}
this.itemOver(item);if(item.level0){this.childopen.length=0;}
if(item.child){this.childopen.push(item);}
item.intent='open';item.status='open';this.enableclick.delay(100,this,item);if(item.child){this.positionSubmenu(item);if(item.fx&&!item.stylesOff){item.stylesOff={};if(this.options.slide){if(item.level0){item.stylesOff[item.direction==1?'margin-top':'bottom']=-item.height;}else{item.stylesOff[window.isRTL?'margin-right':'margin-left']=(item.direction==1?-item.width:item.width);}}
if(this.options.fading){item.stylesOff['opacity']=0;}
item.fx.set(item.stylesOff);}
item.child.setStyles({display:'block',zIndex:this.zindex++});}
if(!item.fx||!item.child){return;}
item.child.setStyle('overflow','hidden');if(item.overflow){item.childinner.setStyle('overflow','hidden');}
item.fx.start(item.stylesOn);},itemHide:function(item){clearTimeout(item.stimer);item.status='close';item.intent='close';this.itemOut(item);this.childopen.erase(item);if(!item.fx&&item.child){item.child.setStyle('display','none');}
if(!item.fx||!item.child||item.child.getStyle('opacity')=='0'){return;}
item.child.setStyle('overflow','hidden');if(item.overflow){item.childinner.setStyle('overflow','hidden');}
switch(this.options.hidestyle){case'fast':item.fx.options.duration=100;item.fx.start(item.stylesOff);break;case'fastwhenshow':item.fx.start(Object.merge(item.stylesOff,{'opacity':0}));break;case'normal':default:item.fx.start(item.stylesOff);break;}},itemAnimDone:function(item){if(item.status=='close'){if(this.options.hidestyle.test(/fast/)){item.fx.options.duration=this.options.duration;if(!this.options.fading){item.childwrap.setStyle('opacity',1);}}
item.child.setStyle('display','none');this.disableclick.delay(100,this,item);var pitem=item.parent?item.parent.retrieve('item'):null;if(pitem&&pitem.intent=='close'){this.itemHide(pitem);}}
if(item.status=='open'){item.child.setStyle('overflow','');if(item.overflow){item.childinner.setStyle('overflow-y','auto');}
item.childwrap.setStyle('opacity',1);item.child.setStyle('display','block');}},hideOthers:function(el){this.childopen.each(function(item){if(!el||(item.el!=el&&!item.el.contains(el))){item.intent='close';}});var last=this.childopen.getLast();if(last&&last.intent=='close'){this.itemHide(last);}},hideAlls:function(el){this.childopen.flatten().each(function(item){if(!item.fx){this.itemHide(item);}else{item.intent='close';}},this);if(this.options.slide||this.options.fading){var last=this.childopen.getLast();if(last&&last.intent=='close'){this.itemHide(last);}}},enableclick:function(item){if(item.link&&item.child){item.clickable=true;}},disableclick:function(item){item.clickable=false;},positionSubmenu:function(item){var options=this.options,offsleft,offstop,left,top,stylesOff={},icoord=item.el.getCoordinates(),bodySize=$(document.body).getScrollSize(),winRect={top:window.getScrollTop(),left:window.getScrollLeft(),width:window.getWidth(),height:window.getHeight()},wrapRect=this.wrapper?this.wrapper.getCoordinates():{top:0,left:0,width:winRect.width,height:winRect.height};winRect.top=Math.max(winRect.top,wrapRect.top);winRect.left=Math.max(winRect.left,wrapRect.left);winRect.width=Math.min(winRect.width,wrapRect.width);winRect.height=Math.min(winRect.height,$(document.body).getScrollHeight());winRect.right=winRect.left+winRect.width;winRect.bottom=winRect.top+winRect.height;if(!item.level0){var pitem=item.parent.retrieve('item'),offsety=parseFloat(pitem.child.getFirst().getStyle('margin-top')),offsetx=parseFloat(pitem.child.getFirst().getStyle(window.isRTL?'margin-right':'margin-left'));item.direction=pitem.direction;window.isRTL&&(offsetx=0-offsetx);icoord.top-=offsety;icoord.bottom-=offsety;icoord.left-=offsetx;icoord.right-=offsetx;}
if(item.level0){if(window.isRTL){offsleft=Math.max(winRect.left,icoord.right-item.width-20);left=Math.max(0,offsleft-winRect.left);}else{offsleft=Math.max(winRect.left,Math.min(winRect.right-item.width,icoord.left));left=Math.max(0,Math.min(winRect.right-item.width,icoord.left)-winRect.left);}}else{if(window.isRTL){if(item.direction==1){offsleft=icoord.left-item.width-20+options.offset;left=-icoord.width-20;if(offsleft<winRect.left){item.direction=0;offsleft=Math.min(winRect.right,Math.max(winRect.left,icoord.right+item.padding-20-options.offset));left=icoord.width-20;stylesOff['margin-right']=item.width;}}else{offsleft=icoord.right+item.padding-20;left=icoord.width-20;if(offsleft+item.width>winRect.right){item.direction=1;offsleft=Math.max(winRect.left,icoord.left-item.width-20);left=-icoord.width-20;stylesOff['margin-right']=-item.width;}}}else{if(item.direction==1){offsleft=icoord.right-options.offset;left=icoord.width;if(offsleft+item.width>winRect.right){item.direction=0;offsleft=Math.max(winRect.left,icoord.left-item.width-item.padding+options.offset);left=-icoord.width;stylesOff['margin-left']=item.width;}}else{offsleft=icoord.left-item.width-item.padding+options.offset;left=-icoord.width;if(offsleft<winRect.left){item.direction=1;offsleft=Math.max(winRect.left,Math.min(winRect.right-item.width,icoord.right-options.offset));left=icoord.width;stylesOff['margin-left']=-item.width;}}}}
if(options.slide&&item.fx&&Object.getLength(stylesOff)){item.fx.set(stylesOff);}
if(options.fixArrow&&item.childinner){item.childinner.setStyle('background-position',(icoord.left-offsleft+(icoord.width/2-4.5))+'px top');}
var oldp=item.child.getStyle('display');item.child.setStyle('display','block');if(item.child.getOffsetParent()){left=offsleft-item.child.getOffsetParent().getCoordinates().left;}
item.child.setStyles({'margin-left':0,'left':left,'display':oldp});}});;

/* 6c.acymailing_module.js */

function submitacymailingform(task,formName){var varform=eval('document.'+formName);var filterEmail=/^([a-z0-9_'&\.\-\+=])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,10})+$/i;if(!varform.elements){if(varform[0].elements['user[email]']&&varform[0].elements['user[email]'].value&&filterEmail.test(varform[0].elements['user[email]'].value)){varform=varform[0];}else{varform=varform[varform.length-1];}}
if(task!='optout'){nameField=varform.elements['user[name]'];if(nameField&&((typeof acymailing!='undefined'&&nameField.value==acymailing['NAMECAPTION'])||nameField.value.length<2)){if(typeof acymailing!='undefined'){alert(acymailing['NAME_MISSING']);}
nameField.className=nameField.className+' invalid';return false;}}
var emailField=varform.elements['user[email]'];if(emailField){if(typeof acymailing=='undefined'||emailField.value!=acymailing['EMAILCAPTION'])emailField.value=emailField.value.replace(/ /g,"");if(!emailField||(typeof acymailing!='undefined'&&emailField.value==acymailing['EMAILCAPTION'])||!filterEmail.test(emailField.value)){if(typeof acymailing!='undefined'){alert(acymailing['VALID_EMAIL']);}
emailField.className=emailField.className+' invalid';return false;}}
if(varform.elements['hiddenlists'].value.length<1){var listschecked=false;var alllists=varform.elements['subscription[]'];if(alllists&&typeof alllists.value=='undefined'){for(b=0;b<alllists.length;b++){if(alllists[b].checked)listschecked=true;}
if(!listschecked){alert(acymailing['NO_LIST_SELECTED']);return false;}}}
if(task!='optout'&&typeof acymailing!='undefined'&&typeof acymailing['reqFields'+formName]!='undefined'&&acymailing['reqFields'+formName].length>0){for(var i=0;i<acymailing['reqFields'+formName].length;i++){elementName='user['+acymailing['reqFields'+formName][i]+']';elementToCheck=varform.elements[elementName];if(elementToCheck){var isValid=false;if(typeof elementToCheck.value!='undefined'){if(elementToCheck.value==' '&&typeof varform[elementName+'[]']!='undefined'){if(varform[elementName+'[]'].checked){isValid=true;}else{for(var a=0;a<varform[elementName+'[]'].length;a++){if((varform[elementName+'[]'][a].checked||varform[elementName+'[]'][a].selected)&&varform[elementName+'[]'][a].value.length>0)isValid=true;}}}else{if(elementToCheck.value.length>0){if(typeof acymailing['excludeValues'+formName]=='undefined'||typeof acymailing['excludeValues'+formName][acymailing['reqFields'+formName][i]]=='undefined'||acymailing['excludeValues'+formName][acymailing['reqFields'+formName][i]]!=elementToCheck.value)isValid=true;}}}else{for(var a=0;a<elementToCheck.length;a++){if(elementToCheck[a].checked&&elementToCheck[a].value.length>0)isValid=true;}}
if(!isValid){elementToCheck.className=elementToCheck.className+' invalid';alert(acymailing['validFields'+formName][i]);return false;}}else{if((varform.elements[elementName+'[day]']&&varform.elements[elementName+'[day]'].value<1)||(varform.elements[elementName+'[month]']&&varform.elements[elementName+'[month]'].value<1)||(varform.elements[elementName+'[year]']&&varform.elements[elementName+'[year]'].value<1902)){if(varform.elements[elementName+'[day]']&&varform.elements[elementName+'[day]'].value<1)varform.elements[elementName+'[day]'].className=varform.elements[elementName+'[day]'].className+' invalid';if(varform.elements[elementName+'[month]']&&varform.elements[elementName+'[month]'].value<1)varform.elements[elementName+'[month]'].className=varform.elements[elementName+'[month]'].className+' invalid';if(varform.elements[elementName+'[year]']&&varform.elements[elementName+'[year]'].value<1902)varform.elements[elementName+'[year]'].className=varform.elements[elementName+'[year]'].className+' invalid';alert(acymailing['validFields'+formName][i]);return false;}}}}
var captchaField=varform.elements['acycaptcha'];if(captchaField){if(captchaField.value.length<1){if(typeof acymailing!='undefined'){alert(acymailing['CAPTCHA_MISSING']);}
captchaField.className=captchaField.className+' invalid';return false;}}
if(task!='optout'){var termsandconditions=varform.terms;if(termsandconditions&&!termsandconditions.checked){if(typeof acymailing!='undefined'){alert(acymailing['ACCEPT_TERMS']);}
termsandconditions.className=termsandconditions.className+' invalid';return false;}}
taskField=varform.task;taskField.value=task;if(!varform.elements['ajax']||!varform.elements['ajax'].value||varform.elements['ajax'].value=='0'){varform.submit();return false;}
var form=$(formName);data=form.toQueryString();if(typeof Ajax=='function'){new Ajax(form.action,{data:data,method:'post',onRequest:function()
{form.addClass('acymailing_module_loading');form.setStyle("filter:","alpha(opacity=50)");form.setStyle("-moz-opacity","0.5");form.setStyle("-khtml-opacity","0.5");form.setStyle("opacity","0.5");},onSuccess:function(response)
{response=Json.evaluate(response);acymailingDisplayAjaxResponse(unescape(response.message),response.type,formName);},onFailure:function(){acymailingDisplayAjaxResponse('Ajax Request Failure','error',formName);}}).request();}else{new Request.JSON({url:$(formName).action,data:data,method:'post',onRequest:function()
{form.addClass('acymailing_module_loading');form.setStyle("filter:","alpha(opacity=50)");form.setStyle("-moz-opacity","0.5");form.setStyle("-khtml-opacity","0.5");form.setStyle("opacity","0.5");},onSuccess:function(response)
{acymailingDisplayAjaxResponse(unescape(response.message),response.type,formName);},onFailure:function(){acymailingDisplayAjaxResponse('Ajax Request Failure','error',formName);}}).send();}
return false;}
function acymailingDisplayAjaxResponse(message,type,formName)
{var toggleButton=$('acymailing_togglemodule_'+formName);if(toggleButton&&toggleButton.hasClass('acyactive')){var wrapper=toggleButton.getParent().getParent().getChildren()[1];wrapper.setStyle('height','');};var responseContainer=$$('#acymailing_fulldiv_'+formName+' .responseContainer')[0];if(typeof responseContainer=='undefined'){responseContainer=new Element('div');responseContainer.inject($('acymailing_fulldiv_'+formName),'top');oldContainerHeight='0px';}else{oldContainerHeight=responseContainer.getStyle('height');}
responseContainer.className='responseContainer';$(formName).removeClass('acymailing_module_loading');responseContainer.innerHTML=message;var form=$(formName);if(type=='success'){responseContainer.addClass('acymailing_module_success');}else{responseContainer.addClass('acymailing_module_error');form.setStyle("filter:","alpha(opacity=100)");form.setStyle("-moz-opacity","1");form.setStyle("-khtml-opacity","1");form.setStyle("opacity","1");}
newContainerHeight=responseContainer.getStyle('height');if(typeof Ajax=='function')
{if(type=='success'){var myEffect=new Fx.Styles(form,{duration:500,transition:Fx.Transitions.linear});myEffect.start({'height':[form.getSize().size.y,0],'opacity':[1,0]});}
try{responseContainer.setStyle('height',oldContainerHeight+'px');responseContainer.setStyle("filter:","alpha(opacity=0)");responseContainer.setStyle("-moz-opacity","0");responseContainer.setStyle("-khtml-opacity","0");responseContainer.setStyle("opacity","0");}
catch(e){}
var myEffect2=new Fx.Styles(responseContainer,{duration:500,transition:Fx.Transitions.linear});myEffect2.start({'height':[oldContainerHeight,newContainerHeight],'opacity':[0,1]});}
else
{if(type=='success'){form.set('morph');form.morph({'height':'0px','opacity':0});}
responseContainer.setStyles({'height':oldContainerHeight,'opacity':0});responseContainer.set('morph');responseContainer.morph({'height':newContainerHeight,'opacity':1});}};

/* 5a.script.js */

var JASliderCSS=new Class({Implements:Options,options:{interval:5000,duration:2000,repeat:true,autoplay:true,navigation:false,thumbnail:false,urls:null,targets:null},initialize:function(element,options){var jslider=$(element);if(!jslider){return false;}
this.setOptions(options);var options=this.options,jmain=jslider.getElement('.ja-ss-items'),jitems=jslider.getElements('.ja-ss-item'),vars={jslider:jslider,jmain:jmain,jitems:jitems,total:jitems.length,curIdx:-1,nextIdx:-1,curImg:null,retain:0,touch:'ontouchstart'in window&&!(/hp-tablet/gi).test(navigator.appVersion),running:0,stop:0,timer:0,animFinished:this.animFinished.bind(this)};jitems[0].clone().setStyles({'position':'relative','visibility':'hidden','z-index':1}).addClass('ja-ss-item-ghost').injectTop(jmain);jitems.each(function(item){item._className=item.className;});this.vars=vars;this.initItemAction();this.initThumbAction();this.initControlAction();this.initKbNav();if(vars.touch){this.initTouchDevice();}
vars.direct='next';jslider.setStyle('visibility','visible');this.prepare(vars.curIdx+1);this.animFinished();},stop:function(){clearTimeout(this.vars.timer);this.vars.stop=1;},prev:function(){var vars=this.vars;if(vars.running){return false;}
this.prepare(vars.curIdx-1);},next:function(){var vars=this.vars;if(vars.running){return false;}
this.prepare(vars.curIdx+1);},playback:function(){this.vars.direct='prev';this.vars.stop=0;this.prev();},play:function(){this.vars.direct='next';this.vars.stop=0;this.next();},start:function(){var vars=this.vars;clearTimeout(vars.timer);vars.timer=setTimeout(this[this.vars.direct].bind(this),this.options.interval)},load:function(img,idx){img.store('loaded',1);var vars=this.vars;vars.retain=Math.max(0,vars.retain-1);if(vars.nextIdx==idx){this.run(idx);}else if(vars.nextIdx==-1){if(vars.retain==0){vars.jslider.removeClass('ja-ss-loading');}}},prepare:function(idx){var vars=this.vars,options=this.options;if(idx>=vars.total){idx=0;}
if(idx<0){idx=vars.total-1;}
var curImg=vars.jitems[idx];if(curImg.get('tag')!='img'){curImg=curImg.getElement('img');}
if(!curImg){return this.run(idx);}
vars.nextIdx=idx;if(curImg.retrieve('loaded')){return this.run(idx);}else{vars.running=true;vars.retain++;vars.jslider.addClass('ja-ss-loading');Asset.image(curImg.src,{onLoad:this.load.bind(this,[curImg,idx])});}},run:function(idx){var vars=this.vars,options=this.options;vars.retain=0;vars.jslider.removeClass('ja-ss-loading');if(vars.curIdx==idx){return false;}
vars.running=true;this.slide(idx);if(vars.jthumbitems){vars.jthumbitems.removeClass('active')[idx].addClass('active');}
vars.jslider.removeClass('ja-ss-progress');},slide:function(idx){var options=this.options,vars=this.vars;vars.jitems.each(function(item,index){var cls=(idx==index)?'curr active':(index<idx&&(index!=0||idx!=vars.jitems.length-1))?'prev':(index>idx&&(idx!=0||index!=vars.jitems.length-1))?'next':(idx==0)?'prev':'next';if(item.hasClass('curr')||cls.match(/curr/))cls='animate '+cls;item.className=item._className+' '+cls;});clearTimeout(vars.timer);vars.timer=setTimeout(vars.animFinished,this.options.duration);vars.curIdx=idx;},animFinished:function(){var options=this.options,vars=this.vars;vars.running=false;if(!vars.stop&&(options.autoplay&&(vars.curIdx<vars.total-1||options.repeat))){this.start();vars.jslider.addClass('ja-ss-progress');}},initThumbAction:function(){var options=this.options;if(options.thumbnail){var vars=this.vars,jslider=vars.jslider,jthumbs=vars.jslider.getElement('.ja-ss-thumbs'),jthumbitems=vars.jslider.getElements('.ja-ss-thumb');if(jthumbitems.length){jthumbitems.removeClass('active');for(var i=0,il=jthumbitems.length;i<il;i++){jthumbitems[i].addEvent('click',this.prepare.bind(this,[i]));}
jthumbs.addEvent('mousewheel',function(e){if(e.wheel<0){e.stop();this.next(true);}else{e.stop();this.prev(true);}}.bind(this));Object.append(vars,{jthumbitems:jthumbitems});}}},initControlAction:function(){var btnarr,options=this.options;if(options.navigation){var jslider=this.vars.jslider,controls=['prev','play','stop','playback','next'];for(var j=0,jl=controls.length;j<jl;j++){if(this[controls[j]]){btnarr=jslider.getElements('.ja-ss-'+controls[j]);for(var i=0,il=btnarr.length;i<il;i++){btnarr[i].addEvent('click',this[controls[j]].bind(this,true));}}}}},initItemAction:function(){var options=this.options;if(options.urls){var vars=this.vars,handle=function(e){var index=vars.jitems.indexOf(this);if(index==-1){index=vars.curIdx;}
var url=options.urls[index],target=options.targets[index];if(url){e.stop();if(target=='_blank'){window.open(url,'JAWindow');}else{window.location.href=url;}}
return false;};vars.jmain.addEvent('click',handle);vars.jitems.addEvent('click',handle);}},initTouchDevice:function(){var inst=this,vars=this.vars,start=function(e){e.stop();var point=e.touches[0];vars.moved=false;vars.px=point.pageX;vars.tm=e.timeStamp||new Date().getTime();document.addEvent('touchmove',move);vars.jslider.addEvent('touchend',end);},move=function(e){e.stop();var tm=e.timeStamp||new Date().getTime();if(tm-vars.tm>300){vars.tm=tm;vars.px=e.touches[0].pageX;}
vars.moved=true;},end=function(e){if(e.touches.length!=0){return;}
document.removeEvent('touchmove',move);vars.jslider.removeEvent('touchend',end);var point=e.changedTouches[0];if(!vars.moved){var target=point.target;while(target.nodeType!=1){target=target.parentNode;}
if(target.tagName!='SELECT'&&target.tagName!='INPUT'&&target.tagName!='TEXTAREA'){var ev=document.createEvent('MouseEvents');ev.initMouseEvent('click',true,true,e.view,1,point.screenX,point.screenY,point.clientX,point.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);ev._fake=true;target.dispatchEvent(ev);}}else if(((e.timeStamp||new Date().getTime())-vars.tm)<300){if(point.pageX-vars.px>30){inst.prev(true);}else if(point.pageX-vars.px<-30){inst.next(true);}}};vars.jslider.addEvent('touchstart',start);},initKbNav:function(){document.addEvent('keydown',function(e){if(e.code==39||e.code==40){this.next();}else if(e.code==37||e.code==38){this.prev();}}.bind(this));}});;

