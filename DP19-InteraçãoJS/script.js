function cardGenerate(){
    var card = document.getElementById("card")
    
    // Recuperando valores do primeiro card
    var cardName = document.getElementById("cardName").value
    var description = document.getElementById("description").value
    var hpValue = document.getElementById("hp").value
    var attackValue = document.getElementById("attack").value
    var defValue = document.getElementById("def").value
    var cardClass = document.getElementById("cardClass").value
    var cardElement = document.getElementById("cardElement").value
    
    // Nome
    var heading = document.createElement("h3")
    heading.textContent = cardName
    heading.classList.add("cardName")
    card.appendChild(heading)
    
    var parentClassElement = document.createElement("div");
    parentClassElement.classList.add("parentClassElement");
    
    // Classes
    var charClass = document.createElement("p")
    charClass.textContent = cardClass
    charClass.classList.add("cardClass")
    card.appendChild(charClass)
    
    // Elementos
    var charElement = document.createElement("p")
    charElement.textContent = cardElement
    charElement.classList.add("cardElement")
    card.appendChild(charElement)
    
    parentClassElement.appendChild(charClass);
    parentClassElement.appendChild(charElement);
    card.appendChild(parentClassElement);
    
    // Imagem
    function imageAction(){
        var photoCard = document.getElementById("photoCard")
        var inpCard = document.getElementById("inpCard")
        var file = inpCard.files[0]
        var reader = new FileReader()
        
        reader.onload = function(event){
            photoCard.src = event.target.result
        }
        if(file){
            reader.readAsDataURL(file)
        }
    }
    imageAction()
    
    // HP
    var hp = document.createElement("p")
    hp.textContent = "HP:" + hpValue + " |"
    hp.classList.add("hpValue")
    // HP ícone
    var iconHP = document.createElement("i")
    iconHP.classList.add("fas", "fa-heart")
    hp.prepend(iconHP)
    
    card.appendChild(hp)
    
    // Ataque
    var attack = document.createElement("p")
    attack.textContent = "ATAQUE:" + attackValue + " |"
    attack.classList.add("attackValue")
    // Ataque ícone
    var iconAttack = document.createElement("i")
    iconAttack.classList.add("fas", "fa-fist-raised")
    attack.prepend(iconAttack)
    
    card.appendChild(attack)
    
    // Defesa
    var def = document.createElement("p")
    def.textContent = "DEFESA:" + defValue
    def.classList.add("defValue")
    // Defesa ícone
    var iconDef = document.createElement("i")
    iconDef.classList.add("fas", "fa-shield-halved")
    def.prepend(iconDef)
    
    card.appendChild(def)
    
    // Descrição
    var desc = document.createElement("p")
    desc.textContent = description
    desc.classList.add("description")
    card.appendChild(desc)
    
    card.style.display = "block"
    var cardEnt = document.getElementById("cardEnt");
    cardEnt.replaceWith(card);
}