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

  get: (start = 0) => {
    return fetch(`http://147.135.192.225:8080/?count=99999&start=${start}`).then(d => d.json())
  }
}