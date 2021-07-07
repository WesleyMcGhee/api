const btn = document.querySelector('button')

const btnClicked = () => {
    axios.get('https://swapi.dev/api/planets/?search=alderaan').then((res) => {
        let residents = res.data.results[0].residents;
        
        
        for (let i in residents){
            
            axios.get(residents[i]).then((res) =>{
                let h2 = document.createElement('h2');
                let div = document.createElement('div');
                document.body.appendChild(div);
                div.appendChild(h2).textContent = res.data.name;
                // console.log(res.data.name);
            })
        }
    })
}

btn.addEventListener('click', btnClicked);