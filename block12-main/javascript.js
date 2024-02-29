function openNav() {
	document.getElementById("open").style.display = "none";
	document.getElementById("nav").style.width = "100%";
}
function closeNav() {
	
	document.getElementById("nav").style.width = "0";
	document.getElementById("open").style.display = "block";
}

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfexecFegYWVg/'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
	.then(response => {
	   alert('Success!', response)
	   submitButton.disabled = false
	  })
	.catch(error => {
	alert('Error!', error.message)
	  submitButton.disabled = false

	}
	)
})