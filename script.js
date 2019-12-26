document.querySelectorAll('a[href^="#"]').forEach(el => {
	el.onclick = e => {
		e.preventDefault();
		document.querySelector(e.target.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	};
});

document.querySelectorAll('.linkAccount').forEach(el => {
	el.onclick = e => {
		const w = open(location, '_blank', 'centerscreen,chrome,dialog');
		w.close();
		const account = e.target.innerHTML.replace('Link ', '');
		switch (account) {
			case 'PayPal':
			case 'BitPay':
				e.target.innerHTML = `${account} linked and $100 transfered!`
				break;
			case 'Patreon':
			case 'Ko-fi':
			case 'Liberapay':
			case 'Subscribestar':
				e.target.innerHTML = `${account} linked and subscribed to $100 tier!`
				break;
			default:
				e.target.innerHTML = `${account} linked!`
				break;
		}
		el.onclick = null;
	};
});

document.querySelector('#submit').onclick = e => {
	if(!e.target.parentElement.reportValidity()) {
		e.preventDefault();
		return;
	}
	const el = e.target.parentElement.parentElement;
	e.target.parentElement.remove();
	el.innerHTML = `Your surgeon will be with you within 48 hours.<br>
	They will provide your account confirmation link after the procedure.`;
};
