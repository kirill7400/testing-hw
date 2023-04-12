class Validator {
  constructor() {
    this.submit = this.submit.bind(this)
    this.btn = document.querySelector('.btn-form')
    this.input = document.querySelector('.input-form')

    this.btn && this.btn.addEventListener('click', this.submit)
  }

  submit(e) {
    e.preventDefault()

    this.validation(this.input.value)
  }

  /*inputWatch() {
    this.value = this.input.value
  }*/

  validation(code) {
    if (code === '') {
      alert('Поле номера карты пустое!')
    } else {
      if (this.checkLuhn(code))
        this.validCard(code)
      else alert('Номер карты не прошёл проверку!')
    }
  }

  checkLuhn(card) {
    let s = 0;
    let doubleDigit = false;
    for (let i = card.length - 1; i >= 0; i--) {
      let digit = +card[i];
      if (doubleDigit) {
        digit *= 2;
        if (digit > 9)
          digit -= 9;
      }
      s += digit;
      doubleDigit = !doubleDigit;
    }
    return s % 10 === 0;
  }

  validCard(code) {
    const cards = document.querySelector('.cards')
    cards && Array.from(cards.querySelectorAll('.card')).forEach(card => {
      card.classList.remove('valid-card')
    })

    if (code.slice(0, 1) === '2') {
      cards && cards.querySelector('.mir-card').classList.add('valid-card')
      alert('Это карта системы Мир')

      return 'mir'
    }
    else if (code.slice(0, 2) === '34' || code.slice(0, 2) === '37') {
      cards && cards.querySelector('.amex-card').classList.add('valid-card')
      alert('Это карта системы American Express')

      return 'ae'
    }
    else if (code.slice(0, 2) === '62') {
      cards && cards.querySelector('.up-card').classList.add('valid-card')
      alert('Это карта системы UnionPay')

      return 'up'
    }
    else if (code.slice(0, 1) === '4') {
      cards && cards.querySelector('.visa-card').classList.add('valid-card')
      alert('Это карта системы VISA')

      return 'visa'
    }
    else if (code.slice(0, 2) === '51' || code.slice(0, 2) === '52' || code.slice(0, 2) === '53') {
      cards && cards.querySelector('.mc-card').classList.add('valid-card')
      alert('Это карта системы MasterCard')

      return 'mc'
    }
    else {
      alert('Номер карты валидный, но не удалось определить систему')

      return null
    }
  }

}

export default Validator;
