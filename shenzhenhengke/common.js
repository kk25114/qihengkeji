$(function() {
	/*=============================================
		=    		Button Effect  	         =
	=============================================*/
	// 幻灯按钮特效
	$('.btn').hover(function(e) {
		var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
		$(this).find('span').css({ top: relY, left: relX })
	}, function(e) {
		var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
		$(this).find('span').css({ top: relY, left: relX })
	});
	// 移动导航特效
	// 打开
	$('.navbar').click(function (e) {
		$('header').addClass('show');
	});
	// 关闭
	$('.close').click(function (e) {
		$('header').removeClass('show');
	});
	// 向下滚动导航加背景颜色
	$(window).scroll(function() {
		var _top = $(window).scrollTop();
		if (_top < 200) {
			$('header').removeClass('scroll');
		} else {
			$('header').addClass('scroll');
		}
	});
	// 大波浪背景
	const setBackgroundImageSize = () => {
		let elements = document.querySelectorAll('.background_loop');
		if (elements.length < 1) return; 
		Array.from(elements).forEach((element, index) => {
			let imageSrc = element
			.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2')
			.split(',')[0];
			// I just broke it up on newlines for readability
			let image = new Image();
			image.src = imageSrc;
			image.addEventListener('load', () => {
				let width = image.width,
				height = image.height;    
				element.dataset.width = width;
				element.dataset.height = height;
			})
		});
	}
	const animateBackgrounds = () => {
		const loop_elements = $('.background_loop');
		if (loop_elements.length > 0) {
			Array.from(loop_elements).forEach((element, index) => {
				let tl = new TimelineMax({ repeat: -1 })
				tl.to(element, 20, { backgroundPosition: `-${element.dataset.width}px center`, ease: Linear.easeNone })
			})
		}
	}
	//执行函数
	setBackgroundImageSize();
	setTimeout(() => {
		animateBackgrounds();
	})
	//动画特效
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: true,
		live: true
	});
	wow.init();
	
	// 子页面大图文字特效

});
