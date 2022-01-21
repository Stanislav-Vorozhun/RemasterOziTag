let searchField = document.querySelector('.searchField'),
    select = document.querySelector('select'),
    optionInSelect = document.querySelectorAll('option'),
    сhoiceCountTitle = document.querySelector('.сhoiceCountTitle'),
    optionsDataText = [],
    optionDataLevel = [],
    isChosen = []

searchField.setAttribute('placeholder', "Код ОКРБ или наименование закупаемой продукции")


//Вытягиваем data-level и содержимое из html options 
let catchOptionsData = () => {
    for (let i = 0; i < optionInSelect.length; i++) {
        optionsDataText.push(optionInSelect[i].text)
        optionDataLevel.push(optionInSelect[i].dataset.level)
    }
}
//Динамически отрисовываем подменные Options
let generateCustomOptions = (items) => {
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

// Приводим к общему виду html options с атрибутом selected
let isSelected = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].selected) {
            var a = i
            for (var j = 0; j < arr2.length; j++) {
                if (a === j) {
                    arr2[j].classList.toggle('selected')
                    checkChosen(arr2[j])
                    var child = arr2[j].querySelector('input')
                    if (isChosen.length > 0) {
                        сhoiceCountTitle.innerHTML = `Показать выбранное (${isChosen.length})`
                        document.querySelector('.categorieTitle').innerHTML = 'Тендеры в роли Заказчика'

                    }
                    else {
                        сhoiceCountTitle.innerHTML = null
                        document.querySelector('.categorieTitle').innerHTML = 'Тендеры в роли Поставщика'
                    }
                }
                if (arr2[j].classList.contains('selected')) {
                    child.checked = true
                }
            }
        }
    }
}
searchField.addEventListener('click', () => {
    document.querySelector('.wrapperDropDown ').classList.remove('hidden')
    document.querySelector('.wrapperHeader').classList.add('oppened')
    document.querySelector('.categorieTitle').innerHTML = 'Реализуемые товары'

})

document.querySelector('.acceptButton').addEventListener('click', () => {
    if (isChosen.length > 0) {
        document.querySelector('.categorieTitle').innerHTML = 'Тендеры в роли Заказчика'
    }
    else {
        сhoiceCountTitle.innerHTML = null
        document.querySelector('.categorieTitle').innerHTML = 'Тендеры в роли Поставщика'
    }
    document.querySelector('.wrapperDropDown ').classList.add('hidden')
    document.querySelector('.wrapperHeader').classList.remove('oppened')
})

сhoiceCountTitle.addEventListener('click', () => {
    document.querySelector('.wrapperDropDown ').classList.remove('hidden')
    document.querySelector('.wrapperHeader').classList.add('oppened')
})

//Реализация поиска
searchField.addEventListener("keyup", () => {
    reg = new RegExp(searchField.value, 'ig')
    document.querySelectorAll(".customOption").forEach(function (p) {
        if (!p.textContent.match(reg)) {
            p.style["display"] = "none";
        } else {
            p.style["display"] = "flex";
        }
    });
});

// Записываем кол-во выбранных позиций
let checkChosen = (item) => {
    let searchElement = isChosen.indexOf(item, 0)
    if (searchElement === -1)
        isChosen.push(item)
    else
        isChosen.splice(searchElement, 1)
}

// Добавляем чекеры на наши кастомные checkboxes
let addChecker = (items) => {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', () => {
            child = items[i].querySelector('input')
            if (!items[i].classList.contains('selected')) {
                items[i].classList.toggle('selected')
                checkChosen(items[i])
                child.checked = true
                isChosen.length > 0 ? сhoiceCountTitle.innerHTML = `Показать выбранное (${isChosen.length})` : сhoiceCountTitle.innerHTML = null
            } else {
                child.checked = false
                items[i].classList.toggle('selected')
                checkChosen(items[i])
                isChosen.length > 0 ? сhoiceCountTitle.innerHTML = `Показать выбранное (${isChosen.length})` : сhoiceCountTitle.innerHTML = null
            }
        })
    }
}

catchOptionsData(optionsDataText, optionInSelect)
generateCustomOptions(optionsDataText)
newCustomOptions = document.querySelectorAll('.customOption')
isSelected(optionInSelect, newCustomOptions)
allCustomOptions = document.querySelectorAll('.customOption')
addChecker(allCustomOptions)
