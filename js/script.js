var next_section = (location.hash) ? location.hash.substr(1) : 'main';
$('nav .link[href="#' + location.hash.substr(1) + '"]').addClass('active');
$('.' + next_section).removeClass('hidden');

$(window).on('hashchange', function (e) {
	next_section = (location.hash) ? location.hash.substr(1) : 'main';
	$('nav .link.active').removeClass('active');
	$('nav .link[href="#' + next_section + '"]').addClass('active');
	$('main > :not(.hidden)').addClass('hidden');
	$('.' + next_section).removeClass('hidden');
});



var bj = {
	jp: "この歌は心に傷を負った人のためのものなんかじゃない\n信念を失った人への静かな祈りでもない\n俺は人混みの中のなかにまぎれたくないんだ\nお前は俺の声を聞くだろう\n俺が心から叫ぶ時\nこれが俺の人生だ\n今しかないんだよ\n俺は永遠に生きるわけじゃない\n今このときを生きたいだけなんだ\n（これが俺の人生だ）\n俺の心は空いた高速道路のようだ\nフランキーが言ってたみたいに\n俺は俺の道を進んできた\n今このときを生きたいだけなんだ\nこれが俺の人生だ\nこれは自分の道を歩んできた人達への歌\nトミーとジーナのように決してあきらめなかった人達への歌\n明日は今日よりも困難になるだろう\n「運」なんて「運」でしかない\n自分の力でつかみ取るしかないんだ\nこれが俺の人生だ\n今しかないんだよ\n永遠に生きるわけじゃない\n今このときを生きたいだけなんだ\n（これが俺の人生だ）\n俺の心は空いた高速道路のようだ\nフランキーが言ってたみたいに\n俺は俺の道を進んできた\n今このときを生きたいだけなんだ\nこれが俺の人生だ\n誰かに呼ばれる時には勇気を持って立ち向かうんだ\n信念を曲げるな、まけるな、そして諦めるな\nこれが俺の人生だ\n今しかないんだよ\n永遠に生きるわけじゃない\n今このときを生きたいだけなんだ\n（これが俺の人生だ）\n俺の心は空いた高速道路のようだ\nフランキーが言ってたみたいに\n俺は俺の道を進んできた\n今このときを生きたいだけなんだ\nこれが俺の人生だ\n今しかないんだよ\n永遠に生きるわけじゃない\n今このときを生きたいだけなんだ\n（これが俺の人生だ）\n俺の心は空いた高速道路のようだ\nフランキーが言ってたみたいに\n俺は俺の道を進んできた\n今この瞬間を　生きたいだけなんだ\nこれが俺の人生だ！".split('\n'),
	en: "This ain't a song for the broken-hearted\nNo silent prayer for the faith-departed\nI ain't gonna be just a face in the crowd\nYou're gonna hear my voice\nWhen I shout it out loud\nIt's my life\nIt's now or never\nI ain't gonna live forever\nI just want to live while I'm alive\n(It's my life)\nMy heart is like an open highway\nLike Frankie said\nI did it my way\nI just wanna live while I'm alive\nIt's my life\nThis is for the ones who stood their ground\nFor Tommy and Gina who never backed down\nTomorrow's getting harder make no mistake\nLuck ain't even lucky\nGot to make your own breaks\nIt's my life\nAnd it's now or never\nI ain't gonna live forever\nI just want to live while I'm alive\n(It's my life)\nMy heart is like an open highway\nLike Frankie said\nI did it my way\nI just want to live while I'm alive\n'Cause it's my life\nYou better stand tall when they're calling you out\nDon't bend, don't break, baby, don't back down\nIt's my life\nAnd it's now or never\n'Cause I ain't gonna live forever\nI just want to live while I'm alive\n(It's my life)\nMy heart is like an open highway\nLike Frankie said\nI did it my way\nI just want to live while I'm alive\nIt's my life\nAnd it's now or never\nI ain't gonna live forever\nI just want to live while I'm alive\n(It's my life)\nMy heart is like an open highway\nLike Frankie said\nI did it my way\nI just want to live while I'm alive\nIt's my life".split('\n'),
	ru: "Это песня не для разбитых сердец,\nНе безмолвная молитва для падших духом.\nЯ не собираюсь быть просто лицом в толпе,\nТы услышишь мой голос,\nКогда я громко прокричу.\nЭто моя жизнь,\nСейчас или никогда,\nЯ не собираюсь жить вечно,\nЯ просто хочу жить, пока жив.\n(Это моя жизнь)\nМоё сердце, как открытая дорога.\nКак сказал Фрэнки:\n«Я сделал по-своему».\nЯ просто хочу жить, пока я жив,\nЭто моя жизнь.\nЭто для тех, кто стоял на своём,\nДля Томи и Джина, которые никогда не сдавались.\nЗавтрашний день дастся с большим трудом, не сделай ошибок.\nСудьба не всегда удачлива,\nТы сам должен сделать рывок.\nЭто моя жизнь,\nСейчас или никогда,\nЯ не собираюсь жить вечно,\nЯ просто хочу жить, пока жив.\n(Это моя жизнь)\nМоё сердце, как открытая дорога.\nКак сказал Фрэнки:\n«Я сделал по-своему».\nЯ просто хочу жить, пока я жив,\nЭто мой мир.\nЛучше держаться мужественно, когда тебя вызывают на бой.\nНе сгибайся, не ломайся, детка, не отступай!\nЭто моя жизнь,\nСейчас или никогда,\nЯ не собираюсь жить вечно,\nЯ просто хочу жить, пока жив.\n(Это моя жизнь)\nМоё сердце, как открытая дорога.\nКак сказал Фрэнки:\n«Я сделал по-своему».\nЯ просто хочу жить, пока я жив...\nЭто моя жизнь,\nСейчас или никогда,\nЯ не собираюсь жить вечно,\nЯ просто хочу жить, пока жив.\n(Это моя жизнь)\nМоё сердце, как открытая дорога.\nКак сказал Фрэнки:\n«Я сделал по-своему».\nЯ просто хочу жить, пока я жив,\nПотому что это моя жизнь...".split('\n')
}

var flag = true;
do {
	var current_lang_index = Object.keys(bj)[ Math.floor(Math.random() * Object.keys(bj).length) ];
	var current_lang = bj[current_lang_index];
	var current_str_index = Math.floor(Math.random() * current_lang.length);
	var current_str = current_lang[current_str_index];
	if (current_lang_index == "jp") {
		current_str = '<span class="bold">' + current_str + '</span>';
	}		
	$('.bj-container').prepend(current_str + ' / ');
	current_lang.splice(current_str_index, 1);
	if (current_lang.length <= 0) {
		delete bj[current_lang_index];
		if (Object.keys(bj).length <= 0) {
			flag = false;
		}
	}
} while(flag)

var bj_str = $('.bj-container').html();
for (var i = 0; i < 3; i++) {
	$('.bj-container').prepend(bj_str);
}



function prepare_img($work, img) {
	var new_img = new Image();
	new_img.onload = function() {
		$work.find('.loader').addClass('hidden');
		$work.find('.work-img').css('background-image', 'url(' + this.src + ')');
		$work.find('.work').removeClass('hidden');
		VanillaTilt.init($work.find('.work')[0], {
			max: 10,
			speed: 200,
			glare: true,
			'max-glare': .5
		});

		$(window).on('hashchange', function (e) {
			if (location.hash.substr(1) == 'progress') {
				$work.find('.work')[0].vanillaTilt.destroy();
				VanillaTilt.init($work.find('.work')[0], {
					max: 10,
					speed: 200,
					glare: true,
					'max-glare': .5
				});
			}
		});
	};
	new_img.src = img;
}



var ref = firebase.database().ref("/");
moment.locale('ru');
ref.once('value', function (data) {	
	data = data.val();

	/* Заполнение вкладки «Прогресс» */
	var $work = $('.progress .work-container');
	$('.progress > .loader').addClass('hidden');
	$(data.progress).each(function () {
		var $new_work = $work.clone();
		$new_work.removeClass('hidden');

		$new_work.find('.work-name').html(this.head);
		$new_work.find('.work-descr').html(this.descr);
		$new_work.find('.work-date').html( moment( Number(this.date) ).format('D MMM YYYY') );

		prepare_img($new_work, this.img);

		$('.progress .works-list').prepend($new_work);
	});

	/* Заполнение вкладки «Достижения» */
	var $achievement = $('.achievements .achievement');
	$('.achievements > .loader').addClass('hidden');
	$(data.achievements).each(function (i, value) {
		var $new_achievement = $achievement.clone();
		$new_achievement.removeClass('hidden');

		$( Object.keys(value) ).each(function() {
			$new_achievement.find('.a-icon').html(value['icon']);
			$new_achievement.find('.a-name').html(value['name']);

			if (value['work'] != '')
				$new_achievement.find('.a-work').html(value['work']);

			if (value['descr'] != '') {
				$new_achievement.find('.a-descr').html('<p>' + value['descr'].replace(/(\n)+/g, '</p><p>') + '</p>');
			} else {
				$new_achievement.find('.a-work').css({
				  'margin-bottom': 0,
				  'padding-bottom': 0,
				  'border-bottom': 'none'
				});
			}

			if (value['link'] != '') 
				$new_achievement.find('.a-work').attr('href', value['link']);
		});
		
		$('.achievements .achievements-list').append($new_achievement);
	});

	/* Заполнение вкладки «Опросы» */
	var vk_icon = new Image;
	var $polls_list = $('.polls-list');
	vk_icon.onload = function () {
		$(data.polls).each(function(index) {
			$polls_list.prepend( $('<div id="vk-poll' + (index + 1) + '" class="vk-poll  inline-block"></div>') );
			VK.Widgets.Poll('vk-poll' + (index + 1), {}, this);
		});
	}
	vk_icon.onerror = function () {
		$polls_list.addClass('hidden');
		$('.polls-load-failed').removeClass('hidden');
	}
	vk_icon.src = 'https://vk.com/images/icons/favicons/fav_logo.ico';

	/* Заполнение вкладки «Галлерея» */
	class Gallery_Loader {

		constructor(name, length) {
			this.name = name;
			this.counter = 0;
			this.length = length;
		}

		inc_and_check() {
			this.counter++;
			if (this.counter >= this.length) {
				var $gallery_list = $('.gallery-list[data-gallery-name="' + this.name + '"]');
				$gallery_list.Mosaic({
					maxRowHeight: 350,
					innerGap: 16,
					maxRowHeightPolicy: 'tail',
					showTailWhenNotEnoughItemsForEvenOneRow: true
				});
				$gallery_list.next('.loader').addClass('hidden');
				$gallery_list.removeClass('hidden');
			}
		}

	}

	var $gallery = $('.gallery-lists');
	var gallery_index = 0;
	$('.spoiler-alert').on('click', 'button', function() {
		$('.spoiler-alert').addClass('hidden');
		$('.gallery-lists').removeClass('hidden');

		$(data.gallery).each(function() {
			var gallery_loader = new Gallery_Loader(this.name, this.list.length);
			var $new_gallery = $('<div>', {
				class: 'gallery-list  hidden',
				'data-gallery-name': this.name,
				append: $(this.list).map(function() {
					var img = new Image;
					img.onload = function () {
						gallery_loader.inc_and_check();
						$(this).attr({
							height: this.height,
							width: this.width
						});
					}
					img.onclick = function () {
						$('.gallery-back').removeClass('hidden');
						$('.img-container').attr('src', $(this).data('source'));
					}
					img.src = this.low;
					$(img).attr('data-source', this.source);
					return img;
				})
			});
			$gallery.prepend($('<div>', {class: 'loader  ma'}));
			$gallery.prepend($new_gallery);
			$gallery.prepend($('<div>', {
				class: 'gallery-header  bt bold',
				append: this.name
			}));
		});
	});
});

$('.gallery-back').on('click', function(e) {
	if( !$(e.target).hasClass('img-container') ) {
		$('.img-container').removeClass('zoomed');
		$(this).addClass('hidden');
	}
});

$('.img-container').on('click', function() {
	$('.img-container').toggleClass('zoomed');
});



window.onload = function() {
	$('.main').addClass( (next_section == 'main') ? 'ready' : 'done');
}



String.prototype.hashCode = function() {
  return this.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
};

var pressed_keys = [];
$(window).on('keyup', function(event) {
	pressed_keys.push(event.key);
	if (pressed_keys.join('').length > 72) pressed_keys.splice(0, 1);
	if ( pressed_keys.join('').hashCode() == -355809473) {
		$('.bj-container').css({
			'mask-image': 'url(imgs/gif-maker.gif)',
			'-webkit-mask-image': 'url(imgs/gif-maker.gif)'
		});;
	}
});