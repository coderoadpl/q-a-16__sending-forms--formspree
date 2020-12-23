(() => {

  const container = document.querySelector('.form-container')
  const nameInput = document.querySelector('.contact-form__input--name')
  const emailInput = document.querySelector('.contact-form__input--email')
  const messageInput = document.querySelector('.contact-form__input--message')
  const submitButton = document.querySelector('.contact-form__button--submit')

  const onStart = () => {
    container.innerText = 'Loading...'
  }

  const onSuccess = () => {
    container.innerText = 'Message successfully sent...'
  }

  const onError = () => {
    container.innerText = 'Error ocurred!'
  }

  const sendMessage = () => {

    const name = nameInput.value
    const email = emailInput.value
    const message = messageInput.value

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)

    onStart()

    fetch('https://formspree.io/f/mdoppgyy', {
      method: 'POST',
      body: formData,
      redirect: 'manual'
    })
      .then(() => {
        onSuccess()
      })
      .catch((error) => {
        console.error(error)
        onError()
      })

  }

  submitButton.addEventListener(
    'click',
    (event) => {
      event.preventDefault()
      sendMessage()
    }
  )

})()