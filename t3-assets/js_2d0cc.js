/* 8d.k2.js */

var $K2=jQuery.noConflict();$K2(document).ready(function(){$K2('#comment-form').submit(function(event){event.preventDefault();$K2('#formLog').empty().addClass('formLogLoading');$K2.ajax({url:$K2('#comment-form').attr('action'),type:'post',dataType:'json',data:$K2('#comment-form').serialize(),success:function(response){$K2('#formLog').removeClass('formLogLoading').html(response.message);if(typeof(Recaptcha)!="undefined"){Recaptcha.reload();}
if(response.refresh){window.location.reload();}}});});$K2('.commentRemoveLink').click(function(event){event.preventDefault();var element=$K2(this);$K2(element).parent().addClass('commentToolbarLoading');$K2.ajax({url:$K2(element).attr('href'),type:'post',data:$K2('#comment-form input:last').serialize(),success:function(response){$K2(element).parent().removeClass('commentToolbarLoading');if(response=='true'){$K2(element).parent().parent().remove();}}});});$K2('.commentApproveLink').click(function(event){event.preventDefault();var element=$K2(this);$K2(element).parent().addClass('commentToolbarLoading');$K2.ajax({url:$K2(element).attr('href'),type:'post',data:$K2('#comment-form input:last').serialize(),success:function(response){$K2(element).parent().removeClass('commentToolbarLoading');if(response=='true'){$K2(element).parent().parent().removeClass('unpublishedComment');}}});});$K2('.k2ReportUserButton').click(function(event){event.preventDefault();if(confirm(K2Language[0])){var element=$K2(this);$K2(element).parent().addClass('commentToolbarLoading');$K2.ajax({url:$K2(element).attr('href'),type:'GET',success:function(response){$K2(element).parent().removeClass('commentToolbarLoading');alert(response);}});}});$K2('#k2ReportCommentForm').submit(function(event){event.preventDefault();$K2('#formLog').empty().addClass('formLogLoading');$K2.ajax({url:$K2('#k2ReportCommentForm').attr('action'),type:'post',data:$K2('#k2ReportCommentForm').serialize(),success:function(response){$K2('#formLog').removeClass('formLogLoading').html(response);if(typeof(Recaptcha)!="undefined"){Recaptcha.reload();}}});});$K2('#fontDecrease').click(function(event){event.preventDefault();$K2('.itemFullText').removeClass('largerFontSize');$K2('.itemFullText').addClass('smallerFontSize');});$K2('#fontIncrease').click(function(event){event.preventDefault();$K2('.itemFullText').removeClass('smallerFontSize');$K2('.itemFullText').addClass('largerFontSize');});$K2('.k2Anchor').click(function(event){event.preventDefault();var target=this.hash;$K2('html, body').stop().animate({scrollTop:$K2(target).offset().top},500);});$K2('.itemRatingForm a').click(function(event){event.preventDefault();var itemID=$K2(this).attr('rel');var log=$K2('#itemRatingLog'+itemID).empty().addClass('formLogLoading');var rating=$K2(this).html();$K2.ajax({url:K2SitePath+"index.php?option=com_k2&view=item&task=vote&format=raw&user_rating="+rating+"&itemID="+itemID,type:'get',success:function(response){log.removeClass('formLogLoading');log.html(response);$K2.ajax({url:K2SitePath+"index.php?option=com_k2&view=item&task=getVotesPercentage&format=raw&itemID="+itemID,type:'get',success:function(percentage){$K2('#itemCurrentRating'+itemID).css('width',percentage+"%");setTimeout(function(){$K2.ajax({url:K2SitePath+"index.php?option=com_k2&view=item&task=getVotesNum&format=raw&itemID="+itemID,type:'get',success:function(response){log.html(response);}});},2000);}});}});});$K2('.classicPopup').click(function(event){event.preventDefault();if($K2(this).attr('rel')){var json=$K2(this).attr('rel');json=json.replace(/'/g,'"');var options=$K2.parseJSON(json);}else{var options={x:900,y:600};}
window.open($K2(this).attr('href'),'K2PopUpWindow','width='+options.x+',height='+options.y+',menubar=yes,resizable=yes');});$K2('div.k2LiveSearchBlock form input[name=searchword]').keyup(function(event){var parentElement=$K2(this).parent().parent();if($K2(this).val().length>3&&event.key!='enter'){$K2(this).addClass('k2SearchLoading');parentElement.find('.k2LiveSearchResults').css('display','none').empty();parentElement.find('input[name=t]').val($K2.now());parentElement.find('input[name=format]').val('raw');var url='index.php?option=com_k2&view=itemlist&task=search&'+parentElement.find('form').serialize();parentElement.find('input[name=format]').val('html');$K2.ajax({url:url,type:'get',success:function(response){parentElement.find('.k2LiveSearchResults').html(response);parentElement.find('input[name=searchword]').removeClass('k2SearchLoading');parentElement.find('.k2LiveSearchResults').css('display','block');}});}else{parentElement.find('.k2LiveSearchResults').css('display','none').empty();}});$K2('a.calendarNavLink').live('click',function(event){event.preventDefault();var parentElement=$K2(this).parent().parent().parent().parent();var url=$K2(this).attr('href');parentElement.empty().addClass('k2CalendarLoader');$K2.ajax({url:url,type:'post',success:function(response){parentElement.html(response);parentElement.removeClass('k2CalendarLoader');}});});$K2('.k2Scroller').css('width',($K2('.k2Scroller').find('.k2ScrollerElement:first').outerWidth(true))*$K2('.k2Scroller').children('.k2ScrollerElement').length);});$K2(window).load(function(){var blocks=$K2('.subCategory, .k2EqualHeights');var maxHeight=0;blocks.each(function(){maxHeight=Math.max(maxHeight,parseInt($K2(this).css('height')));});blocks.css('height',maxHeight);});;

/*  */
/*
		GNU General Public License version 2 or later; see LICENSE.txt
*/
Object.append(Browser.Features,{inputemail:function(){var a=document.createElement("input");a.setAttribute("type","email");return a.type!=="text"}()});
var JFormValidator=new Class({initialize:function(){this.handlers={};this.custom={};this.setHandler("username",function(a){regex=/[<|>|"|'|%|;|(|)|&]/i;return!regex.test(a)});this.setHandler("password",function(a){regex=/^\S[\S ]{2,98}\S$/;return regex.test(a)});this.setHandler("numeric",function(a){regex=/^(\d|-)?(\d|,)*\.?\d*$/;return regex.test(a)});this.setHandler("email",function(a){regex=/^[a-zA-Z0-9._-]+(\+[a-zA-Z0-9._-]+)*@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;return regex.test(a)});$$("form.form-validate").each(function(a){this.attachToForm(a)},
this)},setHandler:function(a,b,c){this.handlers[a]={enabled:c==""?!0:c,exec:b}},attachToForm:function(a){a.getElements("input,textarea,select,button").each(function(a){a.hasClass("required")&&(a.set("aria-required","true"),a.set("required","required"));if((document.id(a).get("tag")=="input"||document.id(a).get("tag")=="button")&&document.id(a).get("type")=="submit"){if(a.hasClass("validate"))a.onclick=function(){return document.formvalidator.isValid(this.form)}}else if(a.addEvent("blur",function(){return document.formvalidator.validate(this)}),
a.hasClass("validate-email")&&Browser.Features.inputemail)a.type="email"})},validate:function(a){a=document.id(a);if(a.get("disabled"))return this.handleResponse(!0,a),!0;if(a.hasClass("required"))if(a.get("tag")=="fieldset"&&(a.hasClass("radio")||a.hasClass("checkboxes")))for(var b=0;;b++)if(document.id(a.get("id")+b)){if(document.id(a.get("id")+b).checked)break}else return this.handleResponse(!1,a),!1;else if(!a.get("value"))return this.handleResponse(!1,a),!1;b=a.className&&a.className.search(/validate-([a-zA-Z0-9\_\-]+)/)!=
-1?a.className.match(/validate-([a-zA-Z0-9\_\-]+)/)[1]:"";if(b=="")return this.handleResponse(!0,a),!0;if(b&&b!="none"&&this.handlers[b]&&a.get("value")&&this.handlers[b].exec(a.get("value"))!=!0)return this.handleResponse(!1,a),!1;this.handleResponse(!0,a);return!0},isValid:function(a){for(var b=!0,a=a.getElements("fieldset").concat(Array.from(a.elements)),c=0;c<a.length;c++)this.validate(a[c])==!1&&(b=!1);(new Hash(this.custom)).each(function(a){a.exec()!=!0&&(b=!1)});return b},handleResponse:function(a,
b){b.labelref||$$("label").each(function(a){if(a.get("for")==b.get("id"))b.labelref=a});a==!1?(b.addClass("invalid"),b.set("aria-invalid","true"),b.labelref&&(document.id(b.labelref).addClass("invalid"),document.id(b.labelref).set("aria-invalid","true"))):(b.removeClass("invalid"),b.set("aria-invalid","false"),b.labelref&&(document.id(b.labelref).removeClass("invalid"),document.id(b.labelref).set("aria-invalid","false")))}});document.formvalidator=null;
window.addEvent("domready",function(){document.formvalidator=new JFormValidator});

/* 40.core.js */

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

/* 53.iphone.js */

var JAIToolbox=new Class({initialize:function(options){this.options=$extend({animOn:false,axis:'x',slideInterval:0,slideSpeed:20},options||{});window.addEvent('domready',this.start.bind(this));},start:function(){this._backs=[];this._currenttoggle=null;this._last=null;this._links=$$('a');this._back=$('toolbar-back');this._close=$('toolbar-close');this._title=$('toolbar-title');this._boxes=$$('.toolbox');this._boxes2=$$('.toolbox');if(!this._boxes||!this._boxes.length)return;this._overlay=$('ja-overlay');this._mainbox=$('ja-toolbar-main');if(this.options.animOn){this._boxes.setStyle('opacity',0);this._overlay.setStyle('opacity',0);this._boxes.push($('ja-toolbar-main'));this._boxes.push(this._overlay);this._fx=new Fx.Elements(this._boxes,{'onComplete':this.slidedone.bind(this)});}
var top=(this._boxes&&this._boxes.length)?this._boxes[0].getCoordinates().top:0;this._links.each(function(link){if(link.href&&link.hash&&link.hash!="#"){link._box=$(link.hash.substr(1));if(!link._box||!link._box.hasClass('toolbox'))return;link._box._link=link;link._h=top+link._box.getCoordinates().height;if(link.hasClass('ip-button')){link.addEvent('click',function(e){new Event(e).stop();this.togglebox(link);return false;}.bind(this));}else{link.addEvent('click',function(e){new Event(e).stop();this.showbox(link,true);return false;}.bind(this));}}},this);if(this._back){this._back.addEvent('click',function(e){new Event(e).stop();this.back();return false;}.bind(this));}
if(this._close){this._close.addEvent('click',function(e){new Event(e).stop();this.close();return false;}.bind(this));}
this._overlay.addEvent('click',function(e){this.close();return false;}.bind(this));},slidedone:function(){if(this._currenttoggle==null){this._overlay.setStyle('display','none');}},togglebox:function(link){if(this._currenttoggle==link){this.close();}
if(this._currenttoggle==null){this._overlay.setStyles({'display':'block','height':$('ja-wrapper').offsetHeight});}
this.showbox(link,true);this._currenttoggle=link;},showbox:function(link,addback){if(this.options.animOn)this.showbox2(link,addback);else this.showbox1(link,addback);},close:function(){if(this.options.animOn)this.close2();else this.close1();},showbox1:function(link,addback){this._boxes2.setStyle('display','none');link._box.setStyle('display','block');this._mainbox.setStyle('height',link._h);if(addback&&this._last){this._backs.push(this._last);}
this._last=link;this.updatestatus(link);},close1:function(){this._boxes2.setStyle('display','none');this._mainbox.setStyle('height',0);this._overlay.setStyle('display','none');this._backs=[];this._currenttoggle=null;this._last=null;},showbox2:function(link,addback){this._fx.stop();objs={};for(i=0;i<this._boxes.length-2;i++){if(this._boxes[i]!=link._box){objs[i]={'opacity':0};}else{objs[i]={'opacity':1};}}
objs[this._boxes.length-2]={'height':link._h};if(this._currenttoggle==null){objs[this._boxes.length-1]={'opacity':0.7};}
this._fx.start(objs);if(addback&&this._last){this._backs.push(this._last);}
this._last=link;this.updatestatus(link);},close2:function(){this._fx.stop();objs={};for(i=0;i<this._boxes.length-2;i++){objs[i]={'opacity':0};}
objs[this._boxes.length-2]={'height':0};objs[this._boxes.length-1]={'opacity':0};this._fx.start(objs);this._backs=[];this._currenttoggle=null;this._last=null;},updatestatus:function(link){this._title.innerHTML=link.title;if((lastlink=this._backs.getLast())){this._back.innerHTML=lastlink.title;this._back.setStyle('display','block');}else{this._back.innerHTML='';this._back.setStyle('display','none');}},back:function(){if((link=this._backs.pop())){this.showbox(link);}}})
new JAIToolbox();;

