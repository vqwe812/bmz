let lang = 'ru';
const T = {
ru: {
search_label:'Поиск', nav_home:'Главная', nav_about:'О компании', nav_products:'Продукция',
nav_buyers:'Покупателю', nav_suppliers:'Поставщику', nav_press:'Пресс-центр',
nav_exchange:'Биржевые торги', nav_contacts:'Контакты',
search_ph:'Поиск по сайту...',
ftr_desc:'Белорусский металлургический завод — крупнейший производитель стального проката и метизной продукции в Республике Беларусь.',
ftr_nav:'Навигация', ftr_biz:'Бизнесу', ftr_contacts:'Контакты',
ftr_addr:'г. Жлобин, ул. Промышленная, 37', ftr_rights:'Все права защищены.',
ftr_phone:'+375 (2334) 2-00-00', ftr_email:'info@bmz.by',
hero_tag:'ЛИДЕР МЕТАЛЛУРГИЧЕСКОЙ ОТРАСЛИ СНГ',
hero_h1:'Белорусский металлургический', hero_h1s:'завод',
hero_desc:'Крупнейший производитель стального проката и метизной продукции в Республике Беларусь. Более 40 лет надёжности и качества.',
hero_btn1:'Продукция', hero_btn2:'О заводе', scroll_hint:'Прокрутите вниз',
s1:'40+', s1l:'Лет на рынке', s2:'2,3 млн', s2l:'Тонн стали в год', s3:'12 000', s3l:'Сотрудников', s4:'70+', s4l:'Стран-партнёров',
news_title:'Последние <span>новости</span>', news_sub:'Актуальные события и достижения предприятия',
n1c:'Производство', n1t:'БМЗ нарастил выпуск арматуры на 8% в третьем квартале', n1d:'Объём производства стальной арматуры превысил плановые показатели.',
n1f:'<p>По итогам третьего квартала 2026 года ОАО «БМЗ» продемонстрировал уверенный рост. Выпуск стальной арматуры увеличился на 8% и составил свыше 620 тысяч тонн.</p><p>Основным фактором роста стала модернизация сортопрокатного стана «370».</p>',
n2c:'Экспорт', n2t:'Новый контракт на поставку метизов в Юго-Восточную Азию', n2d:'Подписан долгосрочный договор на поставку стальных канатов и проволоки.',
n2f:'<p>ОАО «БМЗ» подписало долгосрочный контракт на поставку метизной продукции в страны Юго-Восточной Азии. Соглашение рассчитано на три года и предусматривает поставку более 15 000 тонн.</p>',
n3c:'Модернизация', n3t:'Запуск новой линии термической обработки проволоки', n3d:'Инвестиции в новое оборудование позволили расширить сортамент.',
n3f:'<p>На метизном производстве БМЗ введена в эксплуатацию новая линия термической обработки проволоки с инвестициями около 12 млн белорусских рублей.</p>',
news_all:'Все новости', news_read:'Читать далее →',
about_title:'О <span>компании</span>', about_sub:'История, миссия и ценности',
about_yr:'1984', about_yr_sub:'Год основания',
ab_h1:'Металл, который строит будущее',
ab_p1:'ОАО «Белорусский металлургический завод» — градообразующее предприятие города Жлобина.',
ab_p2:'Сегодня БМЗ — современный металлургический комплекс полного цикла.',
ab_p3:'Миссия — обеспечение промышленности высококачественным металлопрокатом.',
f1t:'Полный цикл', f1d:'От плавки до готовой продукции',
f2t:'Экспорт', f2d:'Поставки в 70+ стран мира',
f3t:'Инновации', f3d:'Современные технологии',
f4t:'Качество', f4d:'ISO 9001, ISO 14001, ISO 45001',
hist_title:'История <span>развития</span>', hist_sub:'Ключевые этапы',
t1y:'1984', t1t:'Основание завода', t1d:'Ввод в эксплуатацию первой очереди БМЗ.',
t2y:'1991', t2t:'Метизное производство', t2d:'Запуск цеха стальных канатов.',
t3y:'2003', t3t:'Электросталеплавильный комплекс', t3d:'Ввод печи «Данарк» 70 тонн.',
t4y:'2010', t4t:'Сортопрокатный стан 370', t4d:'Модернизация прокатного производства.',
t5y:'2020', t5t:'Цифровая трансформация', t5d:'Внедрение ERP-систем.',
t6y:'2026', t6t:'Стратегия 2030', t6d:'Программа расширения экспорта.',
prod_title:'Наша <span>продукция</span>', prod_sub:'Широкий ассортимент металлопродукции',
p1t:'Стальная арматура', p1d:'Горячекатаная арматура различных классов прочности.', p1a:'Диаметр 6–40 мм', p1b:'Классы А-I, А-III, А-V', p1c:'ГОСТ 34028-2016',
p2t:'Катанка и проволока', p2d:'Проволока строительная, пружинная, сварочная.', p2a:'Низкоуглеродистая', p2b:'Общего назначения', p2c:'Специальные марки',
p3t:'Метизная продукция', p3d:'Канаты, сетки, гвозди промышленного назначения.', p3a:'Стальные канаты', p3b:'Сетки плетёные', p3c:'Проволока вязальная',
p4t:'Сортовой прокат', p4d:'Круг, квадрат, шестигранник для машиностроения.', p4a:'Круг 12–250 мм', p4b:'Квадрат 14–150 мм', p4c:'Конструкционные марки',
p5t:'Крепёжные изделия', p5d:'Болты, гайки, шпильки для строительства.', p5a:'Болты и гайки', p5b:'Шпильки резьбовые', p5c:'Заклёпки',
p6t:'Фасонный прокат', p6d:'Уголок, швеллер, спецпрофили.', p6a:'Уголок равнополочный', p6b:'Швеллеры', p6c:'Профили по ТУ',
buy_title:'Информация <span>покупателю</span>', buy_sub:'Условия сотрудничества и сертификаты',
buy_products_title:'Продукция', buy_products_desc:'Полный каталог продукции БМЗ.',
buy_products_list:['Арматура стальная — диаметр 6–40 мм','Катанка и проволока','Метизная продукция','Сортовой прокат','Крепёжные изделия','Фасонный прокат'],
buy_credit_title:'Экспортное кредитование', buy_credit_desc:'Условия для иностранных покупателей.',
buy_credit_list:['Кредитная линия до 12 месяцев','Работа через уполномоченные банки РБ','Страхование экспортных рисков','Индивидуальные условия'],
buy_quality_title:'Система качества', buy_quality_desc:'Международные стандарты.',
buy_quality_list:['ISO 9001:2015','ISO 14001:2015','ISO 45001:2018','Внутренний аудит'],
buy_cert_title:'Сертификаты', buy_cert_desc:'Сертификаты качества.',
buy_cert_list:['ГОСТ','EN (ЕС)','ASTM (США)','Паспорта плавки'],
buy_order_title:'Порядок оформления', buy_order_desc:'Процедура заказа.',
buy_order_list:['1. Заявка на sales@bmz.by','2. Коммерческое предложение','3. Подписание договора','4. Предоплата','5. Отгрузка 10–15 дней'],
buy_online_title:'On-line заявка', buy_online_desc:'Форма заявки.',
buy_online_list:['Заполните форму','Отправьте на sales@bmz.by','Ответ в течение 1 дня'],
buy_network_title:'Товаропроводящая сеть', buy_network_desc:'Дилеры и представители.',
buy_network_list:['Беларусь — прямые поставки','Россия — 40+ регионов','Украина, Казахстан','Страны ЕС'],
buy_exchange_title:'Биржевые торги', buy_exchange_desc:'Продажа через БУТБ.',
buy_exchange_list:['Арматура — регулярные лоты','Катанка — еженедельно','Проволока — по заявкам','butb.by'],
sup_title:'Информация <span>поставщику</span>', sup_sub:'Требования и закупки',
sup_contests_title:'Конкурсы', sup_contests_desc:'Открытые тендеры.',
sup_contests_list:['Публикация на сайте','Электронная площадка','Срок — от 10 дней','Результаты за 5 дней'],
sup_procurement_title:'Закупки', sup_procurement_desc:'Текущие потребности.',
sup_procurement_list:['Металлолом (3А, 5А, 12А)','Ферросплавы','Огнеупоры','СОЖ','Запчасти','Электроды'],
sup_code_title:'Кодекс поставщика', sup_code_desc:'Принципы работы.',
sup_code_list:['Трудовое законодательство','Экология','Антикоррупция','Конфиденциальность','Честная конкуренция'],
press_title:'Пресс-<span>центр</span>', press_sub:'Новости, фото, газета',
press_tab_all:'Все', press_tab_news:'Новости', press_tab_photo:'Фотоальбом', press_tab_paper:'Газета «Металлург»', press_tab_video:'Видео',
pr1t:'БМЗ вошёл в топ-10 СНГ', pr1d:'Экспорт +12%.',
pr2t:'Итоги полугодия 2026', pr2d:'1,18 млн тонн стали.',
pr3t:'Экологическая модернизация', pr3d:'50 млн рублей.',
pr4t:'Учебный центр', pr4d:'Новые тренажёры.',
pr5t:'День металлурга', pr5d:'Концерт на заводе.',
pr6t:'Производственные мощности', pr6d:'Панорама цеха.',
pr7t:'Продукция БМЗ', pr7d:'Выставка.',
pr8t:'Металлург №47', pr8d:'Октябрь 2026.',
pr9t:'Металлург №46', pr9d:'Сентябрь 2026.',
pr10t:'Металлург №45', pr10d:'Август 2026.',
pr11t:'Видеоэкскурсия', pr11d:'Полный цикл.',
pr12t:'Как делают арматуру', pr12d:'Техпроцесс.',
con_title:'Свяжитесь <span>с нами</span>', con_sub:'Мы открыты для сотрудничества',
con_addr_t:'Адрес', con_addr:'247210, Республика Беларусь, Гомельская обл., г. Жлобин, ул. Промышленная, 37',
con_phone_t:'Телефон', con_email_t:'Email',
con_time_t:'Режим работы', con_time:'Пн–Пт: 08:00–17:00. Производство — 24/7.',
con_form_t:'Напишите нам', con_name:'Имя', con_email:'Email', con_subj:'Тема', con_msg:'Сообщение', con_send:'Отправить',
con_route:'Как добраться',
route_getting:'Определяем местоположение...', route_denied:'Доступ запрещён.', route_error:'Ошибка.', route_success:'Маршрут построен!', route_open:'Яндекс.Карты',
no_results:'Ничего не найдено',
breadcrumb_home:'Главная',
m_about_general:'Общая информация', m_about_leadership:'Руководство', m_about_sustainable:'Устойчивое развитие', m_about_chronology:'Хронология',
m_buyer_products:'Продукция', m_buyer_credit:'Экспортное кредитование', m_buyer_quality:'О системе качества', m_buyer_cert:'Сертификаты', m_buyer_order:'Порядок оформления', m_buyer_online:'On-line заявка', m_buyer_network:'Товаропроводящая сеть', m_buyer_exchange:'Биржевые торги',
m_supplier_contests:'Конкурсы', m_supplier_procurement:'Закупки', m_supplier_code:'Кодекс поставщика',
m_press_news:'Новости', m_press_photo:'Фотоальбом', m_press_paper:'Газета «Металлург»', m_press_video:'Видео',
m_contacts_info:'Контактная информация', m_contacts_buyer:'Для покупателя', m_contacts_supplier:'Для поставщика', m_contacts_press:'Для прессы', m_contacts_appeals:'Обращения',
live_counter_title:'ПРОИЗВОДСТВО В РЕАЛЬНОМ ВРЕМЕНИ',
counter_steel_label:'Тонн стали с 2026 года',
counter_rebar_label:'Метров арматуры',
counter_export_label:'Тонн на экспорт',
counter_countries_label:'Стран-партнёров',
plant_map_title:'Территория <span>завода</span>',
plant_map_sub:'Нажмите на объект, чтобы узнать подробности',
export_title:'География <span>экспорта</span>',
export_sub:'Поставки в более чем 70 стран мира',
export_countries:'Стран',
export_continents:'Континентов',
export_tons:'Тонн/год',
awards_title:'Достижения и <span>награды</span>',
awards_sub:'Признание качества на международном уровне',
award1_title:'Лидер отрасли СНГ',
award1_desc:'Топ-10 металлургических предприятий по объёму экспорта, 2025',
award2_title:'ISO 9001:2015',
award2_desc:'Сертификат системы менеджмента качества',
award3_title:'Экологический стандарт',
award3_desc:'ISO 14001:2015 — экологический менеджмент',
award4_title:'Инновации 2024',
award4_desc:'Премия за внедрение новых технологий производства',
award5_title:'Лучший экспортёр',
award5_desc:'Награда Министерства промышленности РБ, 2023',
cycle_title:'Производственный <span>цикл</span>',
cycle_sub:'Нажмите на этап, чтобы узнать подробности',
cycle1:'Плавка', cycle2:'Разливка', cycle3:'Прокатка', cycle4:'Резка', cycle5:'Упаковка',
cycle1_title:'Электродуговая плавка',
cycle1_desc:'Шихта загружается в печь «Данарк» мощностью 70 тонн. Температура плавления достигает 1600°C. Процесс занимает около 45 минут.',
cycle2_title:'Непрерывная разливка',
cycle2_desc:'Расплавленная сталь разливается в кристаллизаторы, формируя заготовки сечением 150×150 мм. Скорость разливки — до 3 м/мин.',
cycle3_title:'Горячая прокатка',
cycle3_desc:'Заготовки нагреваются до 1200°C и проходят через сортопрокатный стан «370». Формируется готовый профиль нужного сечения.',
cycle4_title:'Резка и контроль',
cycle4_desc:'Прокат нарезается на мерные длины 6–12 м. Каждая партия проходит контроль качества в лаборатории ОТК.',
cycle5_title:'Упаковка и отгрузка',
cycle5_desc:'Готовая продукция маркируется, упаковывается в пачки и отгружается железнодорожным или автомобильным транспортом.',
form_success:'✓ Сообщение отправлено! Мы свяжемся с вами в ближайшее время.',
form_subject_options:['Общий вопрос','Заказ продукции','Сотрудничество','Пресса','Другое']
},
en: {
search_label:'Search', nav_home:'Home', nav_about:'About', nav_products:'Products',
nav_buyers:'For Buyers', nav_suppliers:'For Suppliers', nav_press:'Press Center',
nav_exchange:'Exchange Trading', nav_contacts:'Contacts',
search_ph:'Search the site...',
ftr_desc:'Belarusian Steel Works is the largest manufacturer of steel rolled products in Belarus.',
ftr_nav:'Navigation', ftr_biz:'Business', ftr_contacts:'Contacts',
ftr_addr:'37 Promyshlennaya St, Zhlobin', ftr_rights:'All rights reserved.',
ftr_phone:'+375 (2334) 2-00-00', ftr_email:'info@bmz.by',
hero_tag:'CIS METALLURGY LEADER',
hero_h1:'Belarusian Steel', hero_h1s:'Works',
hero_desc:'The largest manufacturer of steel rolled products in Belarus. Over 40 years of quality.',
hero_btn1:'Products', hero_btn2:'About Us', scroll_hint:'Scroll down',
s1:'40+', s1l:'Years', s2:'2.3M', s2l:'Tons/year', s3:'12,000', s3l:'Employees', s4:'70+', s4l:'Countries',
news_title:'Latest <span>News</span>', news_sub:'Current events',
n1c:'Production', n1t:'BMZ increased rebar output by 8% in Q3', n1d:'Production exceeded targets.',
n1f:'<p>In Q3 2026, BMZ demonstrated confident growth. Rebar output increased by 8%.</p>',
n2c:'Export', n2t:'New metalware contract for Southeast Asia', n2d:'Long-term agreement signed.',
n2f:'<p>BMZ signed a 3-year contract for 15,000+ tons of steel ropes and wire.</p>',
n3c:'Modernization', n3t:'New wire heat treatment line launched', n3d:'Expanded product range.',
n3f:'<p>New heat treatment line commissioned with 12M BYN investment.</p>',
news_all:'All news', news_read:'Read more →',
about_title:'About <span>the Company</span>', about_sub:'History and mission',
about_yr:'1984', about_yr_sub:'Year founded',
ab_h1:'Metal that builds the future',
ab_p1:'JSC "BMZ" is the city-forming enterprise of Zhlobin.',
ab_p2:'Today BMZ is a modern full-cycle metallurgical complex.',
ab_p3:'Mission: providing industry with high-quality metal products.',
f1t:'Full Cycle', f1d:'From melting to finished product',
f2t:'Export', f2d:'70+ countries',
f3t:'Innovation', f3d:'Modern technologies',
f4t:'Quality', f4d:'ISO 9001, 14001, 45001',
hist_title:'Development <span>History</span>', hist_sub:'Key milestones',
t1y:'1984', t1t:'Plant Foundation', t1d:'First phase commissioned.',
t2y:'1991', t2t:'Metalware Production', t2d:'Steel ropes launch.',
t3y:'2003', t3t:'Electric Steelmaking', t3d:'Danarc furnace 70t.',
t4y:'2010', t4t:'Bar Mill 370', t4d:'Rolling modernization.',
t5y:'2020', t5t:'Digital Transformation', t5d:'ERP implementation.',
t6y:'2026', t6t:'Strategy 2030', t6d:'Export expansion.',
prod_title:'Our <span>Products</span>', prod_sub:'Wide range of metal products',
p1t:'Steel Rebar', p1d:'Hot-rolled rebar.', p1a:'Diameter 6–40 mm', p1b:'Classes A-I, A-III, A-V', p1c:'GOST 34028-2016',
p2t:'Wire Rod & Wire', p2d:'Construction, spring, welding wire.', p2a:'Low-carbon', p2b:'General purpose', p2c:'Special grades',
p3t:'Metalware', p3d:'Ropes, mesh, nails.', p3a:'Steel ropes', p3b:'Woven mesh', p3c:'Binding wire',
p4t:'Long Products', p4d:'Round, square, hex bars.', p4a:'Round 12–250 mm', p4b:'Square 14–150 mm', p4c:'Structural grades',
p5t:'Fasteners', p5d:'Bolts, nuts, studs.', p5a:'Bolts and nuts', p5b:'Threaded studs', p5c:'Rivets',
p6t:'Structural Sections', p6d:'Angles, channels.', p6a:'Equal angles', p6b:'Channels', p6c:'Custom profiles',
buy_title:'For <span>Buyers</span>', buy_sub:'Terms and certificates',
buy_products_title:'Products', buy_products_desc:'Full BMZ catalog.',
buy_products_list:['Steel rebar 6–40 mm','Wire rod and wire','Metalware','Long products','Fasteners','Structural sections'],
buy_credit_title:'Export Credit', buy_credit_desc:'Financial instruments.',
buy_credit_list:['Credit line up to 12 months','Authorized banks','Export insurance','Individual terms'],
buy_quality_title:'Quality System', buy_quality_desc:'International standards.',
buy_quality_list:['ISO 9001:2015','ISO 14001:2015','ISO 45001:2018','Internal audit'],
buy_cert_title:'Certificates', buy_cert_desc:'Quality certificates.',
buy_cert_list:['GOST','EN (EU)','ASTM (USA)','Heat passports'],
buy_order_title:'Ordering', buy_order_desc:'Order procedure.',
buy_order_list:['1. Request to sales@bmz.by','2. Commercial offer','3. Contract','4. Prepayment','5. Shipment 10–15 days'],
buy_online_title:'Online Application', buy_online_desc:'Application form.',
buy_online_list:['Fill the form','Send to sales@bmz.by','Reply within 1 day'],
buy_network_title:'Distribution Network', buy_network_desc:'Dealers and reps.',
buy_network_list:['Belarus — direct','Russia — 40+ regions','Ukraine, Kazakhstan','EU countries'],
buy_exchange_title:'Exchange Trading', buy_exchange_desc:'Sales via BUCE.',
buy_exchange_list:['Rebar — regular','Wire rod — weekly','Wire — on request','butb.by'],
sup_title:'For <span>Suppliers</span>', sup_sub:'Requirements and procurement',
sup_contests_title:'Contests', sup_contests_desc:'Open tenders.',
sup_contests_list:['Website publication','Electronic platform','10+ days period','5 days results'],
sup_procurement_title:'Procurement', sup_procurement_desc:'Current needs.',
sup_procurement_list:['Scrap (3A, 5A, 12A)','Ferroalloys','Refractory','Coolants','Spare parts','Electrodes'],
sup_code_title:'Supplier Code', sup_code_desc:'Working principles.',
sup_code_list:['Labor laws','Environment','Anti-corruption','Confidentiality','Fair competition'],
press_title:'Press <span>Center</span>', press_sub:'News, photos, newspaper',
press_tab_all:'All', press_tab_news:'News', press_tab_photo:'Photo Album', press_tab_paper:'Newspaper "Metallurg"', press_tab_video:'Video',
pr1t:'BMZ enters top 10 CIS', pr1d:'Exports +12%.',
pr2t:'H1 2026 results', pr2d:'1.18M tons.',
pr3t:'Environmental investment', pr3d:'50M rubles.',
pr4t:'Training center', pr4d:'New simulators.',
pr5t:'Metallurgist Day', pr5d:'Concert.',
pr6t:'Production facilities', pr6d:'Shop panorama.',
pr7t:'BMZ products', pr7d:'Exhibition.',
pr8t:'Metallurg #47', pr8d:'October 2026.',
pr9t:'Metallurg #46', pr9d:'September 2026.',
pr10t:'Metallurg #45', pr10d:'August 2026.',
pr11t:'Video tour', pr11d:'Full cycle.',
pr12t:'How rebar is made', pr12d:'Tech process.',
con_title:'Contact <span>Us</span>', con_sub:'Open for cooperation',
con_addr_t:'Address', con_addr:'37 Promyshlennaya St, Zhlobin, 247210, Belarus',
con_phone_t:'Phone', con_email_t:'Email',
con_time_t:'Working Hours', con_time:'Mon–Fri: 08:00–17:00. Production 24/7.',
con_form_t:'Write to Us', con_name:'Name', con_email:'Email', con_subj:'Subject', con_msg:'Message', con_send:'Send',
con_route:'Get directions',
route_getting:'Determining location...', route_denied:'Access denied.', route_error:'Error.', route_success:'Route built!', route_open:'Yandex Maps',
no_results:'No results found',
breadcrumb_home:'Home',
m_about_general:'General Info', m_about_leadership:'Leadership', m_about_sustainable:'Sustainable Dev.', m_about_chronology:'Chronology',
m_buyer_products:'Products', m_buyer_credit:'Export Credit', m_buyer_quality:'Quality System', m_buyer_cert:'Certificates', m_buyer_order:'Ordering', m_buyer_online:'Online App.', m_buyer_network:'Distribution', m_buyer_exchange:'Exchange Trading',
m_supplier_contests:'Contests', m_supplier_procurement:'Procurement', m_supplier_code:'Supplier Code',
m_press_news:'News', m_press_photo:'Photo Album', m_press_paper:'Newspaper', m_press_video:'Video',
m_contacts_info:'Contact Info', m_contacts_buyer:'For Buyers', m_contacts_supplier:'For Suppliers', m_contacts_press:'For Press', m_contacts_appeals:'Appeals',
live_counter_title:'LIVE PRODUCTION',
counter_steel_label:'Tons of steel since 2026',
counter_rebar_label:'Meters of rebar',
counter_export_label:'Tons for export',
counter_countries_label:'Partner countries',
plant_map_title:'Plant <span>Territory</span>',
plant_map_sub:'Click on an object for details',
export_title:'Export <span>Geography</span>',
export_sub:'Deliveries to more than 70 countries',
export_countries:'Countries',
export_continents:'Continents',
export_tons:'Tons/year',
awards_title:'Achievements and <span>Awards</span>',
awards_sub:'International quality recognition',
award1_title:'CIS Industry Leader',
award1_desc:'Top 10 metallurgical enterprises by export volume, 2025',
award2_title:'ISO 9001:2015',
award2_desc:'Quality management system certificate',
award3_title:'Environmental Standard',
award3_desc:'ISO 14001:2015 — environmental management',
award4_title:'Innovation 2024',
award4_desc:'Award for new production technologies',
award5_title:'Best Exporter',
award5_desc:'Ministry of Industry of Belarus Award, 2023',
cycle_title:'Production <span>Cycle</span>',
cycle_sub:'Click on a stage for details',
cycle1:'Smelting', cycle2:'Casting', cycle3:'Rolling', cycle4:'Cutting', cycle5:'Packing',
cycle1_title:'Electric Arc Smelting',
cycle1_desc:'Charge is loaded into the "Danarc" furnace with 70 ton capacity. Melting temperature reaches 1600°C. Process takes about 45 minutes.',
cycle2_title:'Continuous Casting',
cycle2_desc:'Molten steel is poured into crystallizers, forming billets 150×150 mm. Casting speed — up to 3 m/min.',
cycle3_title:'Hot Rolling',
cycle3_desc:'Billets are heated to 1200°C and pass through bar mill "370". Final profile of required section is formed.',
cycle4_title:'Cutting and Control',
cycle4_desc:'Rolled products are cut to lengths of 6–12 m. Each batch passes quality control in the QC laboratory.',
cycle5_title:'Packing and Shipping',
cycle5_desc:'Finished products are marked, packed in bundles and shipped by rail or road transport.',
form_success:'✓ Message sent! We will contact you soon.',
form_subject_options:['General question','Product order','Cooperation','Press','Other']
}
};
function t(k){return T[lang][k]||k}

// ===== ПРИМЕНИТЬ ЯЗЫК КО ВСЕМУ КОНТЕНТУ =====
function applyLang(){
document.querySelectorAll('[data-i18n]').forEach(el=>{
const k=el.getAttribute('data-i18n');
if(T[lang][k]) el.innerHTML=T[lang][k];
});
document.querySelectorAll('[data-i18n-text]').forEach(el=>{
const k=el.getAttribute('data-i18n-text');
if(T[lang][k]) el.textContent=T[lang][k];
});
document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
const k=el.getAttribute('data-i18n-ph');
if(T[lang][k]) el.placeholder=T[lang][k];
});
document.getElementById('langCur').textContent=lang.toUpperCase();
document.getElementById('langAlt').textContent=(lang==='ru'?'en':'ru').toUpperCase();
document.documentElement.lang=lang;
renderHeader();
renderFooter();
}

// ===== HEADER =====
function renderHeader(){
const hdr=document.getElementById('hdr');
if(!hdr) return;
const currentPage=document.body.dataset.page||'home';
const navStructure=[
{key:'home',label:'nav_home',href:'index.html'},
{key:'about',label:'nav_about',href:'about.html',children:[['m_about_general','about.html'],['m_about_leadership','about.html'],['m_about_sustainable','about.html'],['m_about_chronology','about.html']]},
{key:'products',label:'nav_products',href:'catalog.html'},
{key:'buyers',label:'nav_buyers',href:'catalog.html',children:[['m_buyer_products','catalog.html'],['m_buyer_credit','catalog.html'],['m_buyer_quality','catalog.html'],['m_buyer_cert','catalog.html'],['m_buyer_order','catalog.html'],['m_buyer_online','contacts.html'],['m_buyer_network','catalog.html'],['m_buyer_exchange','catalog.html']]},
{key:'suppliers',label:'nav_suppliers',href:'catalog.html',children:[['m_supplier_contests','catalog.html'],['m_supplier_procurement','catalog.html'],['m_supplier_code','catalog.html']]},
{key:'press',label:'nav_press',href:'news.html',children:[['m_press_news','news.html'],['m_press_photo','news.html'],['m_press_paper','news.html'],['m_press_video','news.html']]},
{key:'exchange',label:'nav_exchange',href:'https://www.butb.by/shedule/metalloproduktsiya/',external:true},
{key:'contacts',label:'nav_contacts',href:'contacts.html',children:[['m_contacts_info','contacts.html'],['m_contacts_buyer','contacts.html'],['m_contacts_supplier','contacts.html'],['m_contacts_press','contacts.html'],['m_contacts_appeals','contacts.html']]}
];
let navHTML='';
navStructure.forEach(item=>{
const isActive=item.key===currentPage;
const targetAttr=item.external?' target="_blank" rel="noopener"':'';
navHTML+='<div class="nav-item">';
navHTML+='<a class="nav-link'+(isActive?' active':'')+'" href="'+item.href+'"'+targetAttr+'>'+t(item.label)+(item.children?' <span class="arrow">▼</span>':'')+'</a>';
if(item.children){
navHTML+='<div class="nav-dropdown">';
item.children.forEach(([ck,hk])=>{
navHTML+='<a href="'+hk+'">'+t(ck)+'</a>';
});
navHTML+='</div>';
}
navHTML+='</div>';
});
hdr.innerHTML='<div class="hdr-in"><div class="logo" onclick="location.href=\'index.html\'"><img class="logo-svg" src="images/bmz-logo.png" alt="БМЗ"><div class="logo-text">ОАО <em>«БМЗ»</em></div></div><nav class="nav-bar" id="nav">'+navHTML+'</nav><div class="burger-menu" id="burgerMenu" onclick="toggleMobileMenu()"><span></span><span></span><span></span></div><div class="hdr-acts"><div class="search-wrap"><button class="hdr-btn search-btn" onclick="toggleSearch()" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></button><div class="search-dropdown" id="searchDropdown"><div class="search-dropdown-header">'+t('search_label')+'</div><div class="search-inline-wrap"><input id="searchInput" type="text" placeholder="'+t('search_ph')+'" oninput="doSearch(this.value)"><button type="button" onclick="doSearch(document.getElementById(\'searchInput\').value)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></button></div><div class="search-results" id="searchResults"></div></div></div><button class="hdr-btn lang-sw" onclick="toggleLang()"><span class="cur" id="langCur">'+lang.toUpperCase()+'</span><span style="color:var(--tx3)">/</span><span class="alt" id="langAlt">'+(lang==='ru'?'en':'ru').toUpperCase()+'</span></button></div></div>';
}

// ===== FOOTER =====
function renderFooter(){
const ftr=document.getElementById('footer');
if(!ftr) return;
ftr.innerHTML='<div class="container"><div class="ftr-grid"><div class="ftr-col"><div class="ftr-brand" onclick="location.href=\'index.html\'"><img src="images/bmz-logo.png" alt="БМЗ"><div class="ftr-brand-name">ОАО <em>«БМЗ»</em></div></div><p class="ftr-desc" data-i18n="ftr_desc">'+t('ftr_desc')+'</p></div><div class="ftr-col"><h4 data-i18n-text="ftr_nav">'+t('ftr_nav')+'</h4><a href="index.html" data-i18n-text="nav_home">'+t('nav_home')+'</a><a href="about.html" data-i18n-text="nav_about">'+t('nav_about')+'</a><a href="catalog.html" data-i18n-text="nav_products">'+t('nav_products')+'</a><a href="news.html" data-i18n-text="nav_press">'+t('nav_press')+'</a></div><div class="ftr-col"><h4 data-i18n-text="ftr_biz">'+t('ftr_biz')+'</h4><a href="catalog.html" data-i18n-text="nav_buyers">'+t('nav_buyers')+'</a><a href="catalog.html" data-i18n-text="nav_suppliers">'+t('nav_suppliers')+'</a><a href="https://www.butb.by/shedule/metalloproduktsiya/" target="_blank" rel="noopener" data-i18n-text="nav_exchange">'+t('nav_exchange')+'</a></div><div class="ftr-col"><h4 data-i18n-text="ftr_contacts">'+t('ftr_contacts')+'</h4><p data-i18n-text="ftr_addr">'+t('ftr_addr')+'</p><p><a href="tel:+375233420000">'+t('ftr_phone')+'</a></p><p><a href="mailto:info@bmz.by">'+t('ftr_email')+'</a></p></div></div><div class="ftr-bot">© 2026 ОАО «Белорусский металлургический завод». <span data-i18n-text="ftr_rights">'+t('ftr_rights')+'</span></div></div>';
}

// ===== LANGUAGE TOGGLE =====
function toggleLang(){
lang=lang==='ru'?'en':'ru';
applyLang();
}

// ===== MOBILE MENU =====
function toggleMobileMenu(){
const nav=document.getElementById('nav');
const burger=document.getElementById('burgerMenu');
if(nav&&burger){
nav.classList.toggle('mobile-open');
burger.classList.toggle('active');
}
}

// ===== SEARCH =====
function toggleSearch(){
const dd=document.getElementById('searchDropdown');
if(!dd) return;
dd.classList.toggle('open');
if(dd.classList.contains('open')){
setTimeout(()=>{const i=document.getElementById('searchInput');if(i){i.focus();i.value=''}},100);
const r=document.getElementById('searchResults');if(r) r.innerHTML='';
} else {
const i=document.getElementById('searchInput');if(i) i.value='';
const r=document.getElementById('searchResults');if(r) r.innerHTML='';
}
}
document.addEventListener('click',e=>{
const dd=document.getElementById('searchDropdown');
const sw=e.target.closest('.search-wrap');
if(!sw&&dd&&dd.classList.contains('open')) dd.classList.remove('open');
});

function doSearch(q){
const res=document.getElementById('searchResults');
if(!res) return;
res.innerHTML='';
if(!q||!q.trim()) return;
const ql=q.toLowerCase().trim();
const items=[];
const seen=new Set();
Object.keys(T[lang]).forEach(k=>{
const v=T[lang][k];
if(typeof v==='string'&&v.toLowerCase().includes(ql)&&k.length>3){
let pg='index.html';
if(k.startsWith('nav_')){
const page=k.replace('nav_','');
if(page==='home') pg='index.html';
else if(page==='about') pg='about.html';
else if(page==='products') pg='catalog.html';
else if(page==='buyers') pg='catalog.html';
else if(page==='suppliers') pg='catalog.html';
else if(page==='press') pg='news.html';
else if(page==='exchange') pg='https://www.butb.by/shedule/metalloproduktsiya/';
else if(page==='contacts') pg='contacts.html';
}
else if(k.match(/^n[1-3][tfd]/)) pg='index.html';
else if(k.match(/^[pt]\d/)) pg='catalog.html';
else if(k.startsWith('buy_')) pg='catalog.html';
else if(k.startsWith('sup_')) pg='catalog.html';
else if(k.startsWith('v')) pg='news.html';
else if(k.startsWith('pr')) pg='news.html';
else if(k.match(/^[tf]\d|^ab_/)) pg='about.html';
else if(k.startsWith('con_')) pg='contacts.html';
else if(k.startsWith('m_')){
const m=k.split('_')[1];
if(m==='about') pg='about.html';
else if(m==='buyer') pg='catalog.html';
else if(m==='supplier') pg='catalog.html';
else if(m==='press') pg='news.html';
else if(m==='contact') pg='contacts.html';
}
const cleanTitle=v.replace(/<[^>]*>/g,'').substring(0,100);
const key=cleanTitle+'|'+pg;
if(!seen.has(key)){
seen.add(key);
items.push({page:pg,title:cleanTitle,pageName:t('nav_'+k.split('_')[0])||pg});
}
}
});
const unique=items.slice(0,8);
if(!unique.length){res.innerHTML='<div class="search-empty">'+t('no_results')+'</div>';return}
res.innerHTML=unique.map(i=>{
const isExternal=i.page.startsWith('http');
const targetAttr=isExternal?' target="_blank" rel="noopener"':'';
return '<a href="'+i.page+'"'+targetAttr+'><div class="sr-page">'+i.pageName+'</div><div class="sr-title">'+i.title+'</div></a>';
}).join('');
}

// ===== NEWS MODAL =====
function openNewsModal(id){
const data={
1:{cat:t('n1c'),date:lang==='ru'?'02 октября 2026':'October 02, 2026',title:t('n1t'),text:t('n1f'),bg:'linear-gradient(135deg,#2a1a10,#1a0a05)'},
2:{cat:t('n2c'),date:lang==='ru'?'28 сентября 2026':'September 28, 2026',title:t('n2t'),text:t('n2f'),bg:'linear-gradient(135deg,#0a1a2a,#050a15)'},
3:{cat:t('n3c'),date:lang==='ru'?'19 сентября 2026':'September 19, 2026',title:t('n3t'),text:t('n3f'),bg:'linear-gradient(135deg,#1a2a1a,#0a150a)'}
};
const n=data[id];if(!n) return;
document.getElementById('newsModalImg').style.background=n.bg;
document.getElementById('newsModalCat').textContent=n.cat;
document.getElementById('newsModalDate').textContent=n.date;
document.getElementById('newsModalTitle').textContent=n.title;
document.getElementById('newsModalText').innerHTML=n.text;
document.getElementById('newsModal').classList.add('open');
document.body.style.overflow='hidden';
}
function closeNewsModal(){document.getElementById('newsModal').classList.remove('open');document.body.style.overflow=''}
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeNewsModal()});

// ===== SCROLL =====
window.addEventListener('scroll',()=>{
const hdr=document.getElementById('hdr');
if(hdr) hdr.classList.toggle('solid',window.scrollY>60);
const btn=document.getElementById('backTop');
if(btn) btn.classList.toggle('visible',window.scrollY>400);
const bar=document.getElementById('scrollProgress');
if(bar){
const winScroll=document.body.scrollTop||document.documentElement.scrollTop;
const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
bar.style.width=(winScroll/height)*100+'%';
}
});
function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'})}

// ===== REVEAL =====
function initReveal(){
const observer=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible')});
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}

// ===== COUNTERS =====
function animateCounters(){
document.querySelectorAll('.stat-n').forEach(el=>{
const text=el.textContent;
const num=parseFloat(text.replace(/[^0-9.]/g,''));
if(isNaN(num)) return;
const suffix=text.replace(/[0-9.,]/g,'');
const duration=2000;
const start=performance.now();
const animate=(now)=>{
const progress=Math.min((now-start)/duration,1);
const eased=1-Math.pow(1-progress,3);
const current=num*eased;
if(text.includes(',')){
el.textContent=current.toFixed(1).replace('.',',')+suffix;
} else {
el.textContent=Math.round(current).toLocaleString()+suffix;
}
if(progress<1) requestAnimationFrame(animate);
else el.textContent=text;
};
requestAnimationFrame(animate);
});
}

// ===== LIVE COUNTER =====
function initLiveCounter(){
const steelEl=document.getElementById('counterSteel');
const rebarEl=document.getElementById('counterRebar');
const exportEl=document.getElementById('counterExport');
const countriesEl=document.getElementById('counterCountries');
if(!steelEl) return;

let steel=1847523;
let rebar=2847392000;
let exp=623847;
const countries=73;

steelEl.textContent=Math.floor(steel).toLocaleString('ru-RU');
rebarEl.textContent=Math.floor(rebar).toLocaleString('ru-RU');
exportEl.textContent=Math.floor(exp).toLocaleString('ru-RU');
countriesEl.textContent=countries;

function update(){
steel+=Math.random()*2.5+0.5;
rebar+=Math.random()*4000+1000;
exp+=Math.random()*0.8+0.2;
steelEl.textContent=Math.floor(steel).toLocaleString('ru-RU');
rebarEl.textContent=Math.floor(rebar).toLocaleString('ru-RU');
exportEl.textContent=Math.floor(exp).toLocaleString('ru-RU');
countriesEl.textContent=countries;
}
setInterval(update,100);
}

// ===== SPARKS =====
function initSparks(){
const hero=document.querySelector('.hero');
if(!hero) return;
const canvas=document.createElement('canvas');
canvas.style.cssText='position:absolute;inset:0;z-index:1;pointer-events:none;opacity:0.6';
hero.appendChild(canvas);
const ctx=canvas.getContext('2d');
let w,h,sparks=[];
function resize(){w=canvas.width=hero.offsetWidth;h=canvas.height=hero.offsetHeight}
resize();
window.addEventListener('resize',resize);
class Spark{
constructor(){this.reset()}
reset(){this.x=Math.random()*w;this.y=h+10;this.vx=(Math.random()-0.5)*2;this.vy=-(Math.random()*3+2);this.life=1;this.decay=Math.random()*0.02+0.01;this.size=Math.random()*2+1;this.color=Math.random()>0.5?'#f07840':'#f5c518'}
update(){this.x+=this.vx;this.y+=this.vy;this.vy+=0.05;this.life-=this.decay;if(this.life<=0) this.reset()}
draw(){ctx.globalAlpha=this.life;ctx.fillStyle=this.color;ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fill();ctx.shadowBlur=10;ctx.shadowColor=this.color}
}
for(let i=0;i<40;i++) sparks.push(new Spark());
function animate(){ctx.clearRect(0,0,w,h);ctx.shadowBlur=0;sparks.forEach(s=>{s.update();s.draw()});requestAnimationFrame(animate)}
animate();
}

// ===== MAGNETIC BUTTONS =====
function initMagnetic(){
document.querySelectorAll('.btn-p,.btn-yl,.route-btn').forEach(btn=>{
btn.addEventListener('mousemove',e=>{
const rect=btn.getBoundingClientRect();
const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;
btn.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;
});
btn.addEventListener('mouseleave',()=>{btn.style.transform='translate(0,0)'});
});
}

// ===== CYCLE =====
function initCycle(){
const steps=document.querySelectorAll('.cycle-step');
const detail=document.getElementById('cycleDetail');
if(!steps.length||!detail) return;
const data={
1:{title:t('cycle1_title'),desc:t('cycle1_desc')},
2:{title:t('cycle2_title'),desc:t('cycle2_desc')},
3:{title:t('cycle3_title'),desc:t('cycle3_desc')},
4:{title:t('cycle4_title'),desc:t('cycle4_desc')},
5:{title:t('cycle5_title'),desc:t('cycle5_desc')}
};
steps.forEach(step=>{
step.addEventListener('click',()=>{
steps.forEach(s=>s.classList.remove('active'));
step.classList.add('active');
const id=step.dataset.step;
document.getElementById('cycleTitle').textContent=data[id].title;
document.getElementById('cycleDesc').textContent=data[id].desc;
detail.style.animation='none';
detail.offsetHeight;
detail.style.animation='fadeUp 0.4s ease';
});
});
}

// ===== GLOW =====
function initGlow(){
document.querySelectorAll('.prod-card,.news-card,.info-block').forEach(card=>{
card.addEventListener('mousemove',e=>{
const rect=card.getBoundingClientRect();
card.style.setProperty('--mouse-x',((e.clientX-rect.left)/rect.width)*100+'%');
card.style.setProperty('--mouse-y',((e.clientY-rect.top)/rect.height)*100+'%');
});
});
}

// ===== PLANT MAP =====
function initPlantMap(){
const objects=document.querySelectorAll('.plant-object');
const tooltip=document.getElementById('plantTooltip');
const mapContainer=document.querySelector('.plant-map');
if(!objects.length||!tooltip||!mapContainer) return;
objects.forEach(obj=>{
obj.addEventListener('mouseenter',()=>{
tooltip.innerHTML='<strong>'+obj.getAttribute('data-name')+'</strong>'+obj.getAttribute('data-desc');
tooltip.classList.add('show');
});
obj.addEventListener('mousemove',e=>{
const rect=mapContainer.getBoundingClientRect();
tooltip.style.left=(e.clientX-rect.left+15)+'px';
tooltip.style.top=(e.clientY-rect.top-30)+'px';
});
obj.addEventListener('mouseleave',()=>{tooltip.classList.remove('show')});
});
}

// ===== WORLD MAP =====
function initWorldMap(){
const dots=document.querySelectorAll('.map-dot,.map-dot-home');
const tooltip=document.getElementById('mapTooltip');
const mapContainer=document.querySelector('.world-map');
if(!dots.length||!tooltip||!mapContainer) return;
dots.forEach(dot=>{
dot.addEventListener('mouseenter',()=>{
tooltip.textContent=dot.getAttribute('data-country');
tooltip.classList.add('show');
});
dot.addEventListener('mousemove',e=>{
const rect=mapContainer.getBoundingClientRect();
tooltip.style.left=(e.clientX-rect.left+15)+'px';
tooltip.style.top=(e.clientY-rect.top-30)+'px';
});
dot.addEventListener('mouseleave',()=>{tooltip.classList.remove('show')});
});
}

// ===== CAROUSEL =====
let carouselPos=0;
function moveCarousel(dir){
const track=document.getElementById('carouselTrack');
if(!track) return;
const cardWidth=324;
const maxPos=track.children.length-Math.floor(track.parentElement.offsetWidth/cardWidth);
carouselPos=Math.max(0,Math.min(carouselPos+dir,maxPos));
track.style.transform=`translateX(-${carouselPos*cardWidth}px)`;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded',()=>{
applyLang();
initReveal();
initSparks();
initMagnetic();
initCycle();
initGlow();
initPlantMap();
initWorldMap();
initLiveCounter();

setTimeout(()=>{
const preloader=document.querySelector('.preloader');
if(preloader) preloader.classList.add('hidden');
},500);

const statsObserver=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){animateCounters();statsObserver.disconnect()}
});
},{threshold:0.3});
const statsEl=document.querySelector('.stats');
if(statsEl) statsObserver.observe(statsEl);
});