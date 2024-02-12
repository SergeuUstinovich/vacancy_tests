export function apiClient(data) {

  const name = document.getElementById('idName')
  const email = document.getElementById('idEmail')
  const phone = document.getElementById('idPhone')
  const mess = document.getElementById('idMess')
  const err = document.getElementById('idError')

  return fetch('http://localhost:9090/api/registration', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    if(data.status === 'success') {
      name.value = '';
      email.value = '';
      phone.value = '';
      mess.value = '';
      err.textContent = `${data.message}`
      err.style.color = 'green'
    } else {
      err.textContent = `${data.message}`
      err.style.color = 'red'
    }
  })
  .catch(error => {
    console.error('Error:', error)
  })
}
