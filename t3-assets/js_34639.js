/* 8d.k2.js */

var $K2=jQuery.noConflict();$K2(document).ready(function(){$K2('#comment-form').submit(function(event){event.preventDefault();$K2('#formLog').empty().addClass('formLogLoading');$K2.ajax({url:$K2('#comment-form').attr('action'),type:'post',dataType:'json',data:$K2('#comment-form').serialize(),success:function(response){$K2('#formLog').removeClass('formLogLoading').html(response.message);if(typeof(Recaptcha)!="undefined"){Recaptcha.reload();}
if(response.refresh){window.location.reload();}}});});$K2('.commentRemoveLink').click(function(event){event.preventDefault();var element=$K2(this);$K2(element).parent().addClass('commentToolbarLoading');$K2.ajax({url:$K2(element).attr('href'),type:'post',data:$K2('#comment-form input:last').serialize(),success:function(response){$K2(element).parent().removeClass('commentToolbarLoading');if(response=='true'){$K2(element).parent().parent().remove();}}});});$K2('.commentApproveLink').click(function(event){event.preventDefault();var element=$K2(this);$K2(element).parent().addClass('commentToolbarLoading');$K2.ajax({url:$K2(element).attr('href'),type:'post',data:$K2('#comment-form input:last').serialize(),success:function(response){$K2(element).parent().removeClass('commentToolbarLoading');if(response=='true'){$K2(element).parent().parent().removeClass('unpublishedComment');}}});});$K2('.k2ReportUserButton').click(function(event){event.preventDefault();if(confirm(K2Language[0])){var element=$K2(this);$K2(element).parent().addClass('commentToolbarLoading');$K2.ajax({url:$K2(element).attr('href'),type:'GET',success:function(response){$K2(element).parent().removeClass('commentToolbarLoading');alert(response);}});}});$K2('#k2ReportCommentForm').submit(function(event){event.preventDefault();$K2('#formLog').empty().addClass('formLogLoading');$K2.ajax({url:$K2('#k2ReportCommentForm').attr('action'),type:'post',data:$K2('#k2ReportCommentForm').serialize(),success:function(response){$K2('#formLog').removeClass('formLogLoading').html(response);if(typeof(Recaptcha)!="undefined"){Recaptcha.reload();}}});});$K2('#fontDecrease').click(function(event){event.preventDefault();$K2('.itemFullText').removeClass('largerFontSize');$K2('.itemFullText').addClass('smallerFontSize');});$K2('#fontIncrease').click(function(event){event.preventDefault();$K2('.itemFullText').removeClass('smallerFontSize');$K2('.itemFullText').addClass('largerFontSize');});$K2('.k2Anchor').click(function(event){event.preventDefault();var target=this.hash;$K2('html, body').stop().animate({scrollTop:$K2(target).offset().top},500);});$K2('.itemRatingForm a').click(function(event){event.preventDefault();var itemID=$K2(this).attr('rel');var log=$K2('#itemRatingLog'+itemID).empty().addClass('formLogLoading');var rating=$K2(this).html();$K2.ajax({url:K2SitePath+"index.php?option=com_k2&view=item&task=vote&format=raw&user_rating="+rating+"&itemID="+itemID,type:'get',success:function(response){log.removeClass('formLogLoading');log.html(response);$K2.ajax({url:K2SitePath+"index.php?option=com_k2&view=item&task=getVotesPercentage&format=raw&itemID="+itemID,type:'get',success:function(percentage){$K2('#itemCurrentRating'+itemID).css('width',percentage+"%");setTimeout(function(){$K2.ajax({url:K2SitePath+"index.php?option=com_k2&view=item&task=getVotesNum&format=raw&itemID="+itemID,type:'get',success:function(response){log.html(response);}});},2000);}});}});});$K2('.classicPopup').click(function(event){event.preventDefault();if($K2(this).attr('rel')){var json=$K2(this).attr('rel');json=json.replace(/'/g,'"');var options=$K2.parseJSON(json);}else{var options={x:900,y:600};}
window.open($K2(this).attr('href'),'K2PopUpWindow','width='+options.x+',height='+options.y+',menubar=yes,resizable=yes');});$K2('div.k2LiveSearchBlock form input[name=searchword]').keyup(function(event){var parentElement=$K2(this).parent().parent();if($K2(this).val().length>3&&event.key!='enter'){$K2(this).addClass('k2SearchLoading');parentElement.find('.k2LiveSearchResults').css('display','none').empty();parentElement.find('input[name=t]').val($K2.now());parentElement.find('input[name=format]').val('raw');var url='index.php?option=com_k2&view=itemlist&task=search&'+parentElement.find('form').serialize();parentElement.find('input[name=format]').val('html');$K2.ajax({url:url,type:'get',success:function(response){parentElement.find('.k2LiveSearchResults').html(response);parentElement.find('input[name=searchword]').removeClass('k2SearchLoading');parentElement.find('.k2LiveSearchResults').css('display','block');}});}else{parentElement.find('.k2LiveSearchResults').css('display','none').empty();}});$K2('a.calendarNavLink').live('click',function(event){event.preventDefault();var parentElement=$K2(this).parent().parent().parent().parent();var url=$K2(this).attr('href');parentElement.empty().addClass('k2CalendarLoader');$K2.ajax({url:url,type:'post',success:function(response){parentElement.html(response);parentElement.removeClass('k2CalendarLoader');}});});$K2('.k2Scroller').css('width',($K2('.k2Scroller').find('.k2ScrollerElement:first').outerWidth(true))*$K2('.k2Scroller').children('.k2ScrollerElement').length);});$K2(window).load(function(){var blocks=$K2('.subCategory, .k2EqualHeights');var maxHeight=0;blocks.each(function(){maxHeight=Math.max(maxHeight,parseInt($K2(this).css('height')));});blocks.css('height',maxHeight);});;

/*  */
/**
 * @copyright	Copyright (C) 2005 - 2012 Open Source Matters, Inc. All rights reserved.
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 */

/**
 * JImageManager behavior for media component
 *
 * @package		Joomla.Extensions
 * @subpackage	Media
 * @since		1.5
 */

(function() {
var ImageManager = this.ImageManager = {
	initialize: function()
	{
		o = this._getUriObject(window.self.location.href);
		//console.log(o);
		q = new Hash(this._getQueryObject(o.query));
		this.editor = decodeURIComponent(q.get('e_name'));

		// Setup image manager fields object
		this.fields			= new Object();
		this.fields.url		= document.id("f_url");
		this.fields.alt		= document.id("f_alt");
		this.fields.align	= document.id("f_align");
		this.fields.title	= document.id("f_title");
		this.fields.caption	= document.id("f_caption");

		// Setup image listing objects
		this.folderlist = document.id('folderlist');

		this.frame		= window.frames['imageframe'];
		this.frameurl	= this.frame.location.href;

		// Setup imave listing frame
		this.imageframe = document.id('imageframe');
		this.imageframe.manager = this;
		this.imageframe.addEvent('load', function(){ ImageManager.onloadimageview(); });

		// Setup folder up button
		this.upbutton = document.id('upbutton');
		this.upbutton.removeEvents('click');
		this.upbutton.addEvent('click', function(){ ImageManager.upFolder(); });
	},

	onloadimageview: function()
	{
		// Update the frame url
		this.frameurl = this.frame.location.href;

		var folder = this.getImageFolder();
		for(var i = 0; i < this.folderlist.length; i++)
		{
			if(folder == this.folderlist.options[i].value) {
				this.folderlist.selectedIndex = i;
				break;
			}
		}

		a = this._getUriObject(document.id('uploadForm').getProperty('action'));
		//console.log(a);
		q = new Hash(this._getQueryObject(a.query));
		q.set('folder', folder);
		var query = [];
		q.each(function(v, k){
			if (v !== null) {
				this.push(k+'='+v);
			}
		}, query);
		a.query = query.join('&');
		var portString = '';
		if (typeof(a.port) !== 'undefined' && a.port != 80) {
			portString = ':'+a.port;
		}
		document.id('uploadForm').setProperty('action', a.scheme+'://'+a.domain+portString+a.path+'?'+a.query);
	},

	getImageFolder: function()
	{
		var url 	= this.frame.location.search.substring(1);
		var args	= this.parseQuery(url);

		return args['folder'];
	},

	onok: function()
	{
		extra = '';
		// Get the image tag field information
		var url		= this.fields.url.get('value');
		var alt		= this.fields.alt.get('value');
		var align	= this.fields.align.get('value');
		var title	= this.fields.title.get('value');
		var caption	= this.fields.caption.get('value');

		if (url != '') {
			// Set alt attribute
			if (alt != '') {
				extra = extra + 'alt="'+alt+'" ';
			} else {
				extra = extra + 'alt="" ';
			}
			// Set align attribute
			if (align != '') {
				extra = extra + 'align="'+align+'" ';
			}
			// Set align attribute
			if (title != '') {
				extra = extra + 'title="'+title+'" ';
			}
			// Set align attribute
			if (caption != '') {
				extra = extra + 'class="caption" ';
			}

			var tag = "<img src=\""+url+"\" "+extra+"/>";
		}

		window.parent.jInsertEditorText(tag, this.editor);
		return false;
	},

	setFolder: function(folder,asset,author)
	{
		//this.showMessage('Loading');

		for(var i = 0; i < this.folderlist.length; i++)
		{
			if(folder == this.folderlist.options[i].value) {
				this.folderlist.selectedIndex = i;
				break;
			}
		}
		this.frame.location.href='index.php?option=com_media&view=imagesList&tmpl=component&folder=' + folder + '&asset=' + asset + '&author=' + author;
	},

	getFolder: function() {
		return this.folderlist.get('value');
	},

	upFolder: function()
	{
		var currentFolder = this.getFolder();

		if(currentFolder.length < 2) {
			return false;
		}

		var folders = currentFolder.split('/');
		var search = '';

		for(var i = 0; i < folders.length - 1; i++) {
			search += folders[i];
			search += '/';
		}

		// remove the trailing slash
		search = search.substring(0, search.length - 1);

		for(var i = 0; i < this.folderlist.length; i++)
		{
			var thisFolder = this.folderlist.options[i].value;

			if(thisFolder == search)
			{
				this.folderlist.selectedIndex = i;
				var newFolder = this.folderlist.options[i].value;
				this.setFolder(newFolder);
				break;
			}
		}
	},

	populateFields: function(file)
	{
		document.id("f_url").value = image_base_path+file;
	},

	showMessage: function(text)
	{
		var message  = document.id('message');
		var messages = document.id('messages');

		if(message.firstChild)
			message.removeChild(message.firstChild);

		message.appendChild(document.createTextNode(text));
		messages.style.display = "block";
	},

	parseQuery: function(query)
	{
		var params = new Object();
		if (!query) {
			return params;
		}
		var pairs = query.split(/[;&]/);
		for ( var i = 0; i < pairs.length; i++ )
		{
			var KeyVal = pairs[i].split('=');
			if ( ! KeyVal || KeyVal.length != 2 ) {
				continue;
			}
			var key = unescape( KeyVal[0] );
			var val = unescape( KeyVal[1] ).replace(/\+ /g, ' ');
			params[key] = val;
	   }
	   return params;
	},

	refreshFrame: function()
	{
		this._setFrameUrl();
	},

	_setFrameUrl: function(url)
	{
		if (url != null) {
			this.frameurl = url;
		}
		this.frame.location.href = this.frameurl;
	},

	_getQueryObject: function(q) {
		var vars = q.split(/[&;]/);
		var rs = {};
		if (vars.length) vars.each(function(val) {
			var keys = val.split('=');
			if (keys.length && keys.length == 2) rs[encodeURIComponent(keys[0])] = encodeURIComponent(keys[1]);
		});
		return rs;
	},

	_getUriObject: function(u){
		var bits = u.match(/^(?:([^:\/?#.]+):)?(?:\/\/)?(([^:\/?#]*)(?::(\d*))?)((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[\?#]|$)))*\/?)?([^?#\/]*))?(?:\?([^#]*))?(?:#(.*))?/);
		return (bits)
			? bits.associate(['uri', 'scheme', 'authority', 'domain', 'port', 'path', 'directory', 'file', 'query', 'fragment'])
			: null;
	}
};
})(document.id);

window.addEvent('domready', function(){
	ImageManager.initialize();
});


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

/* b8.mega.js */

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
