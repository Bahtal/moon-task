import './icon-customImage.js'
import './index.html'
import './main.sass'

document.addEventListener("DOMContentLoaded", function() {
	const form = document.getElementById('section-form');
	const username = document.getElementById('section-username');
	const phone = document.getElementById('section-phone');
	const message = document.getElementById('section-message');
	const label = document.querySelectorAll('.section-form__label')
	const checkbox = document.getElementById("main__policy-form")

	form.addEventListener('submit', function(e) {
		e.preventDefault();
		let isValid = true;

		if (username.value.trim() === '') {
			username.classList.add('error');
			label[0].style.opacity = "1";
			isValid = false;
		} else {
			username.classList.remove('error');
			label[0].style.opacity = "0";
		}

		if (phone.value.includes('_')) {
			phone.classList.add('error');
			label[1].style.opacity = "1";
			isValid = false;
		} else {
			phone.classList.remove('error');
			label[1].style.opacity = "0";
		}

		if (message.value.trim() === '') {
			message.classList.add('error');
			label[2].style.opacity = "1";
			isValid = false;
		} else {
			message.classList.remove('error');
			label[2].style.opacity = "0";
		}

		if (!checkbox.checked) {
			alert("Пожалуйста, подтвердите свое согласие с условиями.");
			isValid = false;
	}

		if (isValid) {
			alert("Форма успешно отправлена");
		}
	});

	IMask(phone, {
		mask: '+{7}(000)000-00-00',
		lazy: false,
		placeholderChar: '_' 
	});
});


