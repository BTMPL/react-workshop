const url = 'http://147.135.192.225:8080';
export default {
  post: (userName, userAvatar, text) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user: { 
          userName,
          userAvatar,
        },
        text
      })
    })
  },

  get: () => {
    return fetch('http://147.135.192.225:8080/').then(d => d.json())
  }
}