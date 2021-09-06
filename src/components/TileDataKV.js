const https = require('https')

const optionsGetList = {
    hostname: 'https://api.cloudflare.com/client/v4/accounts/db696a0810a566bdbe051227e4dd8bfc/storage/kv/namespaces/f0a718263a5f492392c6d4a783086951/keys',
    method: 'GET',
    headers: {
      'X-Auth-Key': 'e27abcb42b6ad4716ea3499ee874ab7782045',
      'X-Auth-Email': 'stevengraden@gmail.com'
    }
  }

// const optionsGetKey = {
//   hostname: 'https://api.cloudflare.com/client/v4/accounts/db696a0810a566bdbe051227e4dd8bfc/storage/kv/namespaces/f0a718263a5f492392c6d4a783086951/values/asset-manifest.1360dc5c28.json',
//   method: 'GET',
//   headers: {
//     'X-Auth-Key': 'e27abcb42b6ad4716ea3499ee874ab7782045',
//     'X-Auth-Email': 'stevengraden@gmail.com'
//   }
// }

const req = https.request(optionsGetList, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
    console.log(d)

  })
})

req.on('error', error => {
  console.error(error)
})
req.end()

