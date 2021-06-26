 ///first i fectch my data 
 fetch('https://jsonplaceholder.typicode.com/users') //fetch is a promise
 .then((reponse)=>reponse.json()) 
 ///i get my data
 .then((data)=>usercard(data))

// i declerd one var and pass the data in that variabe
 var usercard=(data)=>{
     //crate my card in dom
      console.log('data',data)
     data.map((user)=>{
        const card =document.createElement('div')  
        card.classList.add('card')
        const name=document.createElement('p')
        name.innerHTML=user.name
        const email=document.createElement('p')
         email.innerHTML=user.email
         const phone=document.createElement('p')
         phone.innerHTML=user.phone
        const website =document.createElement('a')
         website.setAttribute('href','https://${user.website}')
         website.innerHTML=user.website
         card.appendChild(name)
         card.appendChild(phone)
         card.appendChild(email)
         card.appendChild(website)
         
         document.getElementById('container').appendChild(card)

     })
 }
    