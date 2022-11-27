function show(){

    /* API to get Fact */

    fetch('https://catfact.ninja/fact')

    .then((response) => {

        return response.json();

    })

    .then((facts) => {

        const { fact } = facts;

        document.querySelector(".margin").innerHTML=fact;

    });

    

    /* API to fetch Image */

    fetch('https://api.thecatapi.com/v1/images/search')    

   .then((image) => {

        return image.json();

    })

    .then((img) => {

        const { url } = img[0];

       document.querySelector("body").style.backgroundImage = "url('"+url +"')";

    });

}

show()

