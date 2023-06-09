
let fixedlogo = document.getElementById ("fixedLogoID");
fixedlogo.onclick = function () {
	window.scrollTo ( {
		top: 0, behavior: "smooth",
	});
}
let fixedlogobut = document.getElementById ("fixedLogoBut");
fixedlogobut.onclick = function () {
	window.scrollTo ( {
		top: 0, behavior: "smooth",
	});
}

let contactUsNav = document.getElementById ("Contact_Us_kpm");
contactUsNav.onclick = function () {
	window.scrollTo ( {
		top: 5000, behavior: "smooth",
	});
}
let contactUsButt = document.getElementById ("contactUsBut");
contactUsButt.onclick = function () {
	window.scrollTo ( {
		top: 5000, behavior: "smooth",
	});
}

/*our services */

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i=0; i<list.length; i++){
	list[i].addEventListener('click', function(){
		for(let j=0; j<list.length; j++){
			list[j].classList.remove('active');
		}
		this.classList.add('active');

		let dataFilter = this.getAttribute('data-filter');

		for( let k=0; k<itemBox.length; k++){
			itemBox[k].classList.remove('active');
			itemBox[k].classList.add('hide');

			if(itemBox[k].getAttribute('data-item')== dataFilter || 
			dataFilter == "all") {
				itemBox[k].classList.remove('hide');
				itemBox[k].classList.add('active');
			}
		}
	})
}
/* swiper careds*/
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 60,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });

  /* Contact form
  function sendEmail(){
	Email.send({
		Host : "smtp.gmail.com",
		Username : "ah.lv.do@gmail.com",
		Password : "AHMED!barca0110",
		To : 'supportp@jad-ltd.com',
		From : document.getElementById("email").value,
		Subject : "New Contact Form Enquiry",
		Body : "And this is the body"
	}).then(
	  message => alert(message)
	);

  }
*/