let searchField = document.querySelector('.searchField'),
    select = document.querySelector('select'),
    optionInSelect = document.querySelectorAll('option'),

    optionsData = []


// const products = {
//     "A": "[A] - Продукция сельского хозяйства, лесного хозяйства рыбоводства и рыболовства",
//     "О": "[О] - Услуги в области государственного управления и обороны, предоставляемые обществу в целом; услуги по обязательному социальному страхованию",
//     "84": {
//         "84": "[84] - Услуги в области государственного управления и обороны, предоставляемые обществу в целом; услуги по обязательному социальному страхованию",
//         "84.1": {
//             "84.1": "[84.1] - Услуги в области государственного управления общего характера и социально-экономической сфере",
//             "84.11": {
//                 "84.11": "[84.11] - Услуги в области государственного управления общего характера",
//                 "84.11.11": {
//                     "84.11.11": "[84.11.11] - Услуги в области исполнительной и законодательной деятельности",
//                     "84.11.11.100": {
//                         "84.11.11.100": "[84.11.11.100] - Услуги центральных органов исполнительной и законодательной власти",
//                         "84.11.11.200": "[84.11.11.200] - Услуги органов управления и самоуправления областного территориального уровня",
//                         "84.11.11.300": "[84.11.11.300] - Услуги органов управления и самоуправления базового территориального уровня"
//                     }
//                 },
//                 "84.11.12": "[84.11.12] - Услуги в области государственного управления общего характера"
//             }
//         }
//     }
// }




// document.querySelector('select').remove()
searchField.setAttribute('placeholder', "Код ОКРБ или наименование закупаемой продукции")
searchField.addEventListener('click', () => {
    console.log('clck')

})

function optionIsSelected() {
    for (let i = 0; i < optionInSelect.length; i++) {
        if (optionInSelect[i].selected)
            console.log(optionInSelect[i])
    }
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

        customChexbox = document.createElement('input'),
        customChexbox.setAttribute('type', 'checkbox'),
        customChexbox.className = 'customChexbox',

        customOptionTitle = document.createElement('p'),
        customOptionTitle.className = 'customChexboxTitle',
        customOptionTitle.innerHTML = text,


        document.querySelector('.dropDown').append(customOption),
        customOption.append(customChexbox, customOptionTitle)

    ))
}

optionIsSelected()
catchOptionsData(optionsData)
generateCustomOptions(optionsData)