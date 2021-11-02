let tabs = [
    {
        header: 'Баал',
        class: 'active',
        body: 'baal.jpg',
        target: 'tab1'
    },
    {
        header: 'Чайльд',
        body: 'childe.jpg',
        target: 'tab2'
    },
    {
        header: 'Кадзуха',
        body: 'kadzuha.jpg',
        target: 'tab3'
    },
    {
        header: 'Скарамучи',
        body: 'scara.jpg',
        target: 'tab4'
    },
]

const tabBody = document.querySelector('.tab-Body');
const tabHeader = document.querySelector('.tab-Header');

tabs.forEach(tabItem => {
let div_Head = document.createElement('div');
div_Head.classList.add('tab-header_Item');
div_Head.dataset.target = tabItem.target;
div_Head.innerHTML = `<span>${tabItem.header}</span>`;
div_Head.addEventListener('click', doActiveTab);
tabHeader.append(div_Head);

let div_Body = document.createElement('div');
div_Body.classList.add('tab-body_Item');
div_Body.innerHTML = `<img src="${tabItem.body}">`;
div_Body.id = tabItem.target;
tabBody.append(div_Body);

})
tabHeader.children[0].classList.add('act');
tabBody.children[0].classList.add('act')
function doActiveTab(e) {
    clearTab();
    let currentHeader = e.target.closest('div.tab-header_Item')
    currentHeader.classList.add('act')
    
    let currentBody = document.querySelector(`#${currentHeader.dataset.target}`)
    currentBody.classList.add('act')
}
function clearTab() {
    [...tabHeader.children].forEach(item => item.classList.remove('act'));
    [...tabBody.children].forEach(item => item.classList.remove('act'));
}