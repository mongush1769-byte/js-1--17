let arr = ['Belarus', 'Belgium', 'Bulgaria', 'Germany', 'France', 'Italy', 'Spain',
     'Portugal', 'Netherlands', 'Sweden', 'Norway', 'Poland', 'Hungary', 'Romania', 
     'Greece', 'Austria', 'Switzerland', 'Denmark', 'Finland', 'Ireland'];
        let input = document.getElementById('elem');
        let list = document.getElementById('list');
        input.oninput = function() {
            let text = input.value;
            list.innerHTML = '';
            if (text === '') return;
            for (let i = 0; i < arr.length; i++) {
                let country = arr[i];
                if (country.toLowerCase().startsWith(text.toLowerCase())) {
                    let li = document.createElement('li');
                    li.innerHTML = country;
                    li.onclick = function() {
                        input.value = country;
                        list.innerHTML = '';
                    };
                    list.appendChild(li);
                }
            }
        };