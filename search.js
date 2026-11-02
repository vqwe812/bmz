// Extended search
const searchData = [
{title:'Стальная арматура', page:'catalog.html', cat:'Продукция'},
{title:'Катанка и проволока', page:'catalog.html', cat:'Продукция'},
{title:'Метизная продукция', page:'catalog.html', cat:'Продукция'},
{title:'Сортовой прокат', page:'catalog.html', cat:'Продукция'},
{title:'Крепёжные изделия', page:'catalog.html', cat:'Продукция'},
{title:'Фасонный прокат', page:'catalog.html', cat:'Продукция'},
{title:'Экспортное кредитование', page:'catalog.html', cat:'Покупателю'},
{title:'Сертификаты качества', page:'catalog.html', cat:'Покупателю'},
{title:'Биржевые торги', page:'catalog.html', cat:'Покупателю'},
{title:'Конкурсы и тендеры', page:'catalog.html', cat:'Поставщику'},
{title:'Закупки сырья', page:'catalog.html', cat:'Поставщику'},
{title:'Кодекс поставщика', page:'catalog.html', cat:'Поставщику'},
{title:'О компании', page:'about.html', cat:'О заводе'},
{title:'Руководство', page:'about.html', cat:'О заводе'},
{title:'Устойчивое развитие', page:'about.html', cat:'О заводе'},
{title:'История завода', page:'about.html', cat:'О заводе'},
{title:'Контакты', page:'contacts.html', cat:'Контакты'},
{title:'Как добраться', page:'contacts.html', cat:'Контакты'},
{title:'Обратная связь', page:'contacts.html', cat:'Контакты'}
];

function doExtendedSearch(q){
const res = document.getElementById('searchResults');
if(!res) return;
if(!q.trim()){res.innerHTML='';return}
const ql = q.toLowerCase();
const results = searchData.filter(i => i.title.toLowerCase().includes(ql)).slice(0,8);
if(!results.length){res.innerHTML='<div class="search-empty">'+t('no_results')+'</div>';return}
res.innerHTML = results.map(i => '<a href="'+i.page+'"><div class="sr-page">'+i.cat+'</div><div class="sr-title">'+i.title+'</div></a>').join('');
}