let images = document.querySelector('#images');
let reset_btn = document.querySelector("#reset");
let btn_btn = document.querySelector("#btn");

reset_btn.style.display = 'none';
btn_btn.style.display = 'none';

let array = ['img1', 'img2', 'img3', 'img4', 'img5'];
let random_img = array[Math.floor(Math.random() * array.length)];
array.push(random_img);


function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}

shuffle(array);

array.forEach((img_class) => {
	let new_img = document.createElement('img');
	new_img.classList.add(img_class);
	console.log(new_img);
	// new_img.data-ns-test("1")
	new_img.setAttribute( "data-ns-test" , `${img_class}`)
	images.append(new_img);
})

let img_blocks = document.querySelectorAll('img');

img_blocks.forEach((image) => {
	image.addEventListener('click', imgClicked);
})

let btn_arr = [];
let click_count = 0;

function imgClicked(e) {
	if (e.target.classList.contains('selected')) {
		click_count -= 1
	}
	e.target.classList.toggle('selected');
	btn_arr.push(e.target.classList[0]);
	click_count += 1;
	if (click_count >= 1) {
		reset_btn.style.display = 'block';
	}
	else {
		reset_btn.style.display = 'none';
	}
	if (click_count == 2) {
		btn_btn.style.display = 'block';
	}
	else {
		btn_btn.style.display = 'none';
	}
	if (e.target.classList.contains('selected')) {
		console.log('break');
	}
	else {
		click_count -= 1;
		btn_arr.pop(e.target.classList[0]);
	}

}

btn_btn.addEventListener('click', () => {
	let para = document.querySelector('#para');
	if (btn_arr[0] == btn_arr[1]) {
		para.innerHTML = "You are a human. Congratulations!";
	}
	else {
		para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
	}

})

reset_btn.addEventListener('click', () => {
	reset_btn.style.display = 'none';
	btn_btn.style.display = 'none';
	click_count = 0;
	btn_arr = [];
	img_blocks.forEach((image) => {
		image.classList.remove('selected');
	})
})