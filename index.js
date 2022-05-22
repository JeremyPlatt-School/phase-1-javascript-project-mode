
        let darkButton = document.getElementById('darkMode');
        let rndBtn = document.getElementById('randomBtn');
        let catBtn = document.getElementById('catFact');
        console.log(darkButton);

        darkButton.addEventListener('click', toggleLightMode);
        rndBtn.addEventListener('click', randomButtonMove); 
        catBtn.addEventListener('click', fetchFacts);

        let lightModeOn = true;


        function toggleLightMode(){
            const body = document.querySelector('body');
            console.log("Light Mode Toggle started");
                if(lightModeOn == true){
                    console.log(lightModeOn)
                    lightModeOn = false;
                    body.setAttribute("id","lightModeOff");
                    console.log("LightModeOff");
                    return;
                } else{
                    console.log(lightModeOn)
                    lightModeOn = true;
                    body.setAttribute("id","lightModeOn");
                    console.log("LightModeOn");
                    return;
                }
        }

        function randomButtonMove(){
            let topPx = getRndInteger(0,450);
            let rightPx = getRndInteger(0, 450);
            rightPx = rightPx * -1;
            rndBtn.style.top = topPx + "px";
            console.log("top value: " + rndBtn.style.top)
            rndBtn.style.right = rightPx + "px";
            console.log("right value: " + rndBtn.style.right)
        }

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }


        function fetchFacts() {

            fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2")
            .then((resp) => resp.json())
            .then((json) => renderFacts(json));
            
            }
            
        function renderFacts(facts) {
            const main = document.querySelector('main');
            facts.forEach(fact => {
              const h2 = document.createElement('h2');
              h2.innerHTML = fact.text;
              main.appendChild(h2);
            });
        }
        


