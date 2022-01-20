let searchField = document.querySelector('.searchField'),
    select = document.querySelector('select'),
    optionInSelect = document.querySelectorAll('option'),
    optionsDataText = []


searchField.setAttribute('placeholder', "Код ОКРБ или наименование закупаемой продукции")
searchField.addEventListener('click', () => {
    console.log('clck')

})


function isSelected(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].selected) {
            var a = i
            console.log(arr1[i])
            for (var j = 0; j < arr2.length; j++) {
                if(a === j){
                    arr2[i].classList.toggle('selected')
                    console.log( j + ' add cls')
                }
                    
                }
        }
            
    }
        
    return

}

function catchOptionsData(arr) {

    for (let i = 0; i < optionInSelect.length; i++) {
        arr.push(optionInSelect[i].text)

    }
    return

}

function generateCustomOptions(items) {
    items.map((text) => (
        customOption = document.createElement('div'),
        customOption.className = 'customOption',


        customCheckBoxInput = document.createElement('input'),
        customCheckBoxInput.setAttribute('type', 'checkbox'),
        customCheckBoxInput.className = 'customChexboxInput',
        customCheckBoxInput.id = 'customChexboxInput' + Math.floor(Math.random() * 999),

        customCheckBoxLabel = document.createElement('label'),
        customCheckBoxLabel.className = 'customCheckBoxLabel',
        customCheckBoxLabel.setAttribute('for', `${customCheckBoxInput.id}`),

        customOptionTitle = document.createElement('p'),
        customOptionTitle.className = 'customChexboxTitle',
        customOptionTitle.innerHTML = text,


        document.querySelector('.dropDown').append(customOption),
        customOption.append(customCheckBoxInput, customCheckBoxLabel, customOptionTitle)

    ))
}


catchOptionsData(optionsDataText)
generateCustomOptions(optionsDataText)

newCustomOptions = document.querySelectorAll('.customOption')

isSelected(optionInSelect, newCustomOptions)