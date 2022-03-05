function submit(){
  try {
    let url = document.getElementById('url').value
    let data = JSON.parse(document.getElementById('data').value)
    axios({
      method: 'post',
      url: url,
      data: data,
      timeout: 4000,
    }).then((r)=>{
      if (r.status==204){
        document.getElementById('result').innerHTML = 'Success!</br>'
      } else {
        document.getElementById('result').innerHTML = `${r}</br>`
      }
    }).catch((error)=>{
      if (error.response!=undefined){
        if (error.response.status==400){
          document.getElementById('result').innerHTML = `${error}</br>(Probably malformed JSON)`
        } else if (error.response.status==400){
          document.getElementById('result').innerHTML = `${error}</br>(Probably invalid url)`
        } else {
          document.getElementById('result').innerHTML = `${error}</br>`
        }
      } else {
        document.getElementById('result').innerHTML = `${error}</br>(Probably invalid URL)`
      }
    });
  } catch (error){
    document.getElementById('result').innerHTML = `${error}<br>`
  }
}