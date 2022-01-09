  let birdSummary = (specie) => {
      let finalUrl = `https://es.wikipedia.org/api/rest_v1/page/summary/${specie}?redirect=false`
      var myHeaders = new Headers();
      myHeaders.append("Accept-Language", "es-es");

      var requestOptions = {
          method: 'GET',
          headers: myHeaders,
      };

      fetch(finalUrl, requestOptions)
          .then(response => response.json())
          .then(result => {
              document.querySelector(".aboutBird").textContent = result.extract;
          })

          .catch(error => console.log('error', error));
  }

  export {
      birdSummary
  };