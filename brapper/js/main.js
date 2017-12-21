$(function() {
	//Задаем контроллер
    var controller = new ScrollMagic.Controller();


    //Задаем анимацию для сцены 1
	var blockTween1 = new TweenMax.fromTo('#header', 1,
		{	
			backgroundPosition: 'center 0px'
		},
		{
			backgroundPosition: 'center 300px',
			opacity: 0.1
		});
    //Создаем сцену 1
    var containerScene1 = new ScrollMagic.Scene({
    	triggerElement: $('#header'),
    	duration: $('#header').height() + 500,
    	triggerHook: 0
    })
    .setTween(blockTween1)
    .addIndicators();


    //Задаем анимацию для сцены 2
	var blockTween2 = new TweenMax.fromTo('#img1', .75,
		{
		    transform: 'matrix(1, 0, 0, 1, 0, 750)'
		},
		{
		    transform: 'matrix(1, 0, 0, 1, 0, -250)'
	});
    //Создаем сцену 2
	var containerScene2 = new ScrollMagic.Scene({
	    triggerElement: '#container1',
	    duration: $('#container1').height() + 200
	})
	.setTween(blockTween2)
	.addIndicators();

    //Задаем анимацию для сцены 3
	var blockTween3 = new TweenMax.fromTo('#img2', .75,
		{
		    transform: 'matrix(1, 0, 0, 1, 0, 750)'
		},
		{
		    transform: 'matrix(1, 0, 0, 1, 0, -250)'
	});
    //Создаем сцену 3
	var containerScene3 = new ScrollMagic.Scene({
	    triggerElement: '#container2',
	    duration: $('#container2').height() + 200
	})
	.setTween(blockTween3)
	.addIndicators();

    //Привязываем сцены к контроллеру
	controller.addScene([
		containerScene1,
		containerScene2,
		containerScene3
	]);
});