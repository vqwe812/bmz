let lang = 'ru';
let currentPage = 'home';

const T = {
ru: {
search_label:'Поиск', nav_home:'Главная', nav_about:'О компании', nav_products:'Продукция',
nav_buyers:'Покупателю', nav_suppliers:'Поставщику', nav_press:'Пресс-центр',
nav_career:'Персонал', nav_exchange:'Биржевые торги', nav_contacts:'Контакты',
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
n1f:'<p>По итогам третьего квартала 2026 года ОАО «БМЗ» продемонстрировал уверенный рост. Выпуск стальной арматуры увеличился на 8% и составил свыше 620 тысяч тонн.</p><p>Основным фактором роста стала модернизация сортопрокатного стана «320».</p>',
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
ab_p4:'Завод занимает территорию более 400 гектаров и располагает собственной железнодорожной инфраструктурой.',
ab_p5:'Электросталеплавильный комплекс включает две печи «Данарк» мощностью 70 и 100 тонн.',
ab_p6:'Метизное производство — одно из крупнейших в СНГ.',
f1t:'Полный цикл', f1d:'От плавки до готовой продукции',
f2t:'Экспорт', f2d:'Поставки в 70+ стран мира',
f3t:'Инновации', f3d:'Современные технологии',
f4t:'Качество', f4d:'ISO 9001, ISO 14001, ISO 45001',
hist_title:'История <span>развития</span>', hist_sub:'Ключевые этапы',
t1y:'1984', t1t:'Запуск стана «320»', t1d:'Ввод в эксплуатацию сортопрокатного стана «320». Начало производства стальной арматуры.',
t2y:'1991', t2t:'Метизное производство', t2d:'Запуск цеха стальных канатов и проволоки.',
t3y:'2003', t3t:'Электросталеплавильный комплекс', t3d:'Ввод печи «Данарк» 70 тонн.',
t4y:'2010', t4t:'Модернизация производства', t4d:'Масштабная модернизация оборудования и расширение ассортимента.',
t5y:'2020', t5t:'Цифровая трансформация', t5d:'Внедрение ERP-систем.',
t6y:'2026', t6t:'Стратегия 2030', t6d:'Программа расширения экспорта.',
prod_title:'Наша <span>продукция</span>', prod_sub:'Широкий ассортимент металлопродукции',
p1t:'Стальная арматура', p1d:'Горячекатаная арматура различных классов прочности.', p1a:'Диаметр 6–40 мм', p1b:'Классы А-I, А-III, А-V', p1c:'ГОСТ 34028-2016',
p2t:'Катанка и проволока', p2d:'Проволока строительная, пружинная, сварочная.', p2a:'Низкоуглеродистая', p2b:'Общего назначения', p2c:'Специальные марки',
p3t:'Метизная продукция', p3d:'Канаты, сетки, гвозди промышленного назначения.', p3a:'Стальные канаты', p3b:'Сетки плетёные', p3c:'Проволока вязальная',
p4t:'Сортовой прокат', p4d:'Круг, квадрат, шестигранник для машиностроения.', p4a:'Круг 12–250 мм', p4b:'Квадрат 14–150 мм', p4c:'Конструкционные марки',
p5t:'Крепёжные изделия', p5d:'Болты, гайки, шпильки для строительства.', p5a:'Болты и гайки', p5b:'Шпильки резьбовые', p5c:'Заклёпки',
p6t:'Фасонный прокат', p6d:'Уголок, швеллер, спецпрофили.', p6a:'Уголок равнополочный', p6b:'Швеллеры', p6c:'Профили по ТУ',
con_title:'Свяжитесь <span>с нами</span>', con_sub:'Мы открыты для сотрудничества',
con_addr_t:'Адрес', con_addr:'247210, Республика Беларусь, Гомельская обл., г. Жлобин, ул. Промышленная, 37',
con_phone_t:'Телефон', con_email_t:'Email',
con_time_t:'Режим работы', con_time:'Пн–Пт: 08:00–17:00. Производство — 24/7.',
con_form_t:'Напишите нам', con_name:'Имя', con_email:'Email', con_subj:'Тема', con_msg:'Сообщение', con_send:'Отправить',
con_route:'Как добраться',
no_results:'Ничего не найдено',
breadcrumb_home:'Главная',
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
cycle1_desc:'Шихта загружается в печь «Данарк» мощностью 70 тонн. Температура плавления достигает 1600°C.',
cycle2_title:'Непрерывная разливка',
cycle2_desc:'Расплавленная сталь разливается в кристаллизаторы, формируя заготовки 150×150 мм.',
cycle3_title:'Горячая прокатка',
cycle3_desc:'Заготовки нагреваются до 1200°C и проходят через стан «320».',
cycle4_title:'Резка и контроль',
cycle4_desc:'Прокат нарезается на длины 6–12 м. Каждая партия проходит контроль ОТК.',
cycle5_title:'Упаковка и отгрузка',
cycle5_desc:'Продукция маркируется, упаковывается и отгружается ж/д или автотранспортом.',
form_success:'✓ Сообщение отправлено! Мы свяжемся с вами в ближайшее время.',
m_about_general:'Общая информация', m_about_leadership:'Руководство', m_about_sustainable:'Устойчивое развитие', m_about_chronology:'Хронология',
m_buyer_quality:'О системе качества', m_buyer_cert:'Сертификаты', m_buyer_credit:'Экспортное кредитование', m_buyer_order:'Порядок оформления', m_buyer_online:'On-line заявка',
m_supplier_contests:'Конкурсы', m_supplier_procurement:'Закупки сырья и материалов', m_supplier_code:'Кодекс поставщика',
m_press_news:'Новости', m_press_photo:'Фотоальбом', m_press_paper:'Газета «Металлург»', m_press_video:'Видео',
m_contacts_info:'Контактная информация', m_contacts_buyer:'Для покупателя', m_contacts_supplier:'Для поставщика', m_contacts_press:'Для прессы', m_contacts_appeals:'Обращения',
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
career_title:'Персонал <span>БМЗ</span>',
career_sub:'Профессиональная команда — основа успеха предприятия',
career_intro:'ОАО «БМЗ» — это более 12 000 сотрудников, объединённых общей целью: производить качественную металлопродукцию. Мы ценим профессионализм, ответственность и стремление к развитию.',
career_intro_p2:'На нашем предприятии работают специалисты различных профессий — от сталеваров и прокатчиков до инженеров и IT-специалистов. Мы предлагаем стабильную работу, конкурентную заработную плату, социальный пакет и возможности для карьерного роста.',
career_profs_title:'Профессии <span>предприятия</span>',
career_profs_sub:'Основные специальности, представленные на БМЗ',
career_vacancies_title:'Вакантные <span>места</span>',
career_vacancies_sub:'Актуальные вакансии предприятия',
career_benefits_title:'Что мы <span>предлагаем</span>',
career_benefits_sub:'Социальный пакет и условия работы',
prof_steelmaker:'Сталевар', prof_steelmaker_desc:'Управление электродуговой печью, контроль процесса плавки',
prof_roller:'Прокатчик', prof_roller_desc:'Обслуживание стана «320», контроль качества проката',
prof_engineer:'Инженер-металлург', prof_engineer_desc:'Разработка технологий, оптимизация процессов',
prof_electrician:'Электрогазосварщик', prof_electrician_desc:'Сварочные работы на оборудовании завода',
prof_qc:'Контролёр ОТК', prof_qc_desc:'Контроль качества металлопродукции',
prof_crane:'Машинист крана', prof_crane_desc:'Управление мостовыми кранами в цехах',
prof_repair:'Слесарь-ремонтник', prof_repair_desc:'Ремонт и обслуживание оборудования',
prof_driver:'Водитель', prof_driver_desc:'Транспортировка продукции и материалов',
prof_it:'Инженер АСУ ТП', prof_it_desc:'Автоматизация и управление производственными процессами',
prof_logist:'Специалист ВЭД', prof_logist_desc:'Внешнеэкономическая деятельность, экспорт',
prof_welder:'Электромонтёр', prof_welder_desc:'Ремонт и обслуживание электрооборудования',
prof_foundry:'Литейщик', prof_foundry_desc:'Работа в сталеплавильном производстве',
prof_chemist:'Химик-аналитик', prof_chemist_desc:'Анализ состава металла и сплавов',
prof_mechanic:'Механик', prof_mechanic_desc:'Обслуживание прокатного оборудования',
prof_gas_cutter:'Газорезчик', prof_gas_cutter_desc:'Кислородная и плазменная резка металла',
prof_turner:'Токарь', prof_turner_desc:'Обработка деталей на токарных станках',
prof_rope_winder:'Машинист по навивке канатов', prof_rope_winder_desc:'Обслуживание канатовьющих машин',
vac_apply:'Откликнуться', vac_location:'Жлобин', vac_fulltime:'Полная занятость', vac_salary:'Зарплата по договорённости',
vac_electro:'Электромонтёр по ремонту и обслуживанию электрооборудования',
vac_electro_desc:'Обслуживание и ремонт электрооборудования металлургического производства. Требования: группа допуска не ниже III.',
vac_smelter:'Плавильщик металла и сплавов',
vac_smelter_desc:'Управление процессом плавки в электродуговых печах. Требования: опыт работы на металлургическом производстве.',
vac_turner:'Токарь',
vac_turner_desc:'Обработка деталей на токарных станках. Требования: разряд не ниже 4-го, чтение чертежей.',
vac_winder:'Машинист по навивке канатов',
vac_winder_desc:'Обслуживание канатовьющих машин. Требования: опыт работы с метизным оборудованием.',
vac_cutter:'Газорезчик',
vac_cutter_desc:'Кислородная и плазменная резка металла. Требования: удостоверение газорезчика.',
vac_crane:'Машинист крана металлургического производства',
vac_crane_desc:'Управление мостовыми кранами в сталеплавильном и прокатном цехах. Требования: удостоверение машиниста крана.',
vac_machinist:'Станочник широкого профиля',
vac_machinist_desc:'Обработка деталей на различных станках. Требования: разряд не ниже 3-го.',
app_title:'Резюме соискателя',
app_photo:'Фотография',
app_photo_hint:'Нажмите для загрузки файла<br>jpg, jpeg, bmp, gif, png (до 1 Мб)',
app_fio:'Фамилия, Имя, Отчество:', app_fio_ph:'Фамилия Имя Отчество',
app_birth:'Дата рождения:',
app_family:'Семейное положение:', app_select:'Выберите', app_single:'Не женат/Не замужем', app_married:'Женат/Замужем', app_divorced:'Разведён/а',
app_military:'Служба в вооружённых силах:', app_served:'Проходил', app_not_served:'Не проходил',
app_phone:'Телефон:', app_phone_ph:'+375 (__) ___-__-__',
app_email:'Email-адрес:', app_email_ph:'Email-адрес',
app_address:'Адрес проживания:', app_address_ph:'Адрес проживания',
app_education:'Образование:', app_education_ph:'год окончания, форма обучения, учреждение образования, специальность по диплому, квалификация по диплому, знание иностранных языков',
app_position:'Должность, на которую претендует кандидат:', app_position_ph:'Должность, на которую претендует кандидат, ожидаемая заработная плата',
app_experience:'Опыт работы:', app_experience_ph:'период работы, место работы, должность',
app_other:'Прочее:', app_other_ph:'Дополнительная информация о себе',
app_captcha:'Введите код с картинки:', app_captcha_ph:'Введите код с картинки',
app_submit:'Отправить анкету', app_success:'✓ Анкета отправлена! Мы свяжемся с вами в ближайшее время.',
benefit_salary:'Стабильная заработная плата', benefit_salary_desc:'Конкурентные условия оплаты труда, своевременные выплаты',
benefit_social:'Социальный пакет', benefit_social_desc:'Медицинское страхование, санаторно-курортное лечение',
benefit_growth:'Карьерный рост', benefit_growth_desc:'Возможности профессионального развития и повышения',
benefit_training:'Обучение', benefit_training_desc:'Корпоративные программы подготовки и переподготовки',
benefit_sport:'Спорт и отдых', benefit_sport_desc:'Корпоративные мероприятия, спортивные секции',
benefit_meals:'Питание', benefit_meals_desc:'Субсидированное питание в заводской столовой',
buy_title:'Информация <span>покупателю</span>',
buy_sub:'Условия сотрудничества, сертификаты и порядок оформления заказов',
buy_quality_title:'О системе <span>качества</span>',
buy_quality_desc:'Международные стандарты качества на всех этапах производства',
buy_cert_title:'Сертификаты на <span>продукцию</span>',
buy_cert_desc:'Сертификаты соответствия международным и национальным стандартам',
buy_credit_title:'Экспортное <span>кредитование</span>',
buy_credit_desc:'Финансовые инструменты для иностранных покупателей',
buy_order_title:'Порядок <span>оформления</span> заказа',
buy_order_desc:'Пошаговая процедура оформления заказа на продукцию',
buy_online_title:'On-line <span>заявка</span>',
buy_online_desc:'Быстрая отправка заявки на продукцию через электронную форму',
sup_title:'Информация <span>поставщику</span>',
sup_sub:'Сотрудничество с ОАО «БМЗ» — это надёжность, прозрачность и взаимная выгода',
sup_intro:'ОАО «Белорусский металлургический завод» заинтересован в долгосрочном сотрудничестве с надёжными поставщиками сырья, материалов, оборудования и услуг.',
sup_intro_p2:'Предприятие закупает металлолом, ферросплавы, огнеупорные материалы и другие материалы для обеспечения бесперебойной работы производства.',
sup_contests_title:'Конкурсы и <span>тендеры</span>',
sup_contests_desc:'БМЗ проводит открытые конкурсные процедуры',
sup_procurement_title:'Перечень сырья и материалов, закупаемых на постоянной основе',
sup_procurement_desc:'Управление снабжения закупает сырьё и материалы на условиях DAP РФ-РБ вагонными партиями',
sup_code_title:'Кодекс <span>поставщика</span>',
sup_code_desc:'Принципы и требования к поставщикам',
sup_how_title:'Как стать <span>поставщиком</span>',
sup_how_desc:'Пошаговая процедура аккредитации',
sup_how_steps:['Подготовьте коммерческое предложение','Направьте на zakupki@bmz.by','Пройдите процедуру аккредитации','Получите уведомление о включении в реестр','Участвуйте в конкурсных процедурах'],
sup_how_email:'E-mail отдела закупок: zakupki@bmz.by',
sup_how_phone:'Телефон: +375 (2334) 2-00-05',
sup_how_time:'Срок рассмотрения заявки — до 14 рабочих дней',
tab_scrap:'Металлолом', tab_ferro:'Ферросплавы', tab_refractory:'Огнеупоры', tab_coolant:'СОЖ', tab_parts:'Запчасти', tab_electrodes:'Электроды',
scrap_title:'Управление снабжения закупает металлолом на условиях DAP РФ - РБ вагонными партиями',
scrap_table_header:['#','Наименование металлолома','НТД'],
scrap_rows:[
['1','Металлы черные вторичные','СТБ 2026-2010<br>ГОСТ 2787-2024'],
['2','Лом и отходы стальные','ТУ BY 400074854.021-2012'],
['3','Лом и отходы стальные с повышенными показателями качества','ТУ BY 400074854.038-2014'],
['4','Чугунный лом','ГОСТ 2787-2024'],
['5','Стальная стружка','ГОСТ 2787-2024']
],
ferro_title:'Управление снабжения закупает ферросплавы для сталеплавильного производства',
ferro_table_header:['#','Наименование','НТД'],
ferro_rows:[
['1','Ферромарганец','ГОСТ 4755-89'],
['2','Ферросилиций','ГОСТ 1415-93'],
['3','Ферросиликомагний','ГОСТ 19232-81'],
['4','Ферросиликобарий','ТУ 14-1-4651-89'],
['5','Ферросиликокальций','ГОСТ 4756-91']
],
refractory_title:'Управление снабжения закупает огнеупорные материалы для футеровки печей',
refractory_table_header:['#','Наименование','НТД'],
refractory_rows:[
['1','Магнезит плавленый периклазовый','ГОСТ 4689-2014'],
['2','Хромомагнезитовые изделия','ГОСТ 390-96'],
['3','Периклазоуглеродистые изделия','ГОСТ Р 53426-2009'],
['4','Алюмосиликатные огнеупоры','ГОСТ 390-96']
],
coolant_title:'Управление снабжения закупает смазочно-охлаждающие жидкости',
coolant_table_header:['#','Наименование','НТД'],
coolant_rows:[
['1','Эмульсолы','ГОСТ 25743-83'],
['2','СОЖ для прокатного производства','ТУ BY 400074854.055-2016'],
['3','Масла индустриальные','ГОСТ 20799-88']
],
parts_title:'Управление снабжения закупает запасные части для оборудования',
parts_table_header:['#','Наименование','НТД'],
parts_rows:[
['1','Валки прокатные','ГОСТ 21120-75'],
['2','Подшипники качения','ГОСТ 520-2011'],
['3','Ремни приводные','ГОСТ 1284.3-96'],
['4','Цепи роликовые','ГОСТ 13568-97']
],
electrodes_title:'Управление снабжения закупает электроды для электродуговых печей',
electrodes_table_header:['#','Наименование','НТД'],
electrodes_rows:[
['1','Электроды графитированные','ГОСТ 19905-74'],
['2','Электроды угольные','ГОСТ 17001-71'],
['3','Электроды специальные','ТУ 1916-001-00212179-97']
],
sup_code_list:['Соблюдение трудового законодательства','Экологическая ответственность','Противодействие коррупции','Конфиденциальность информации','Справедливая конкуренция','Качество продукции','Соблюдение сроков поставок']
},
en: {
search_label:'Search', nav_home:'Home', nav_about:'About', nav_products:'Products',
nav_buyers:'For Buyers', nav_suppliers:'For Suppliers', nav_press:'Press Center',
nav_career:'Careers', nav_exchange:'Exchange Trading', nav_contacts:'Contacts',
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
ab_p4:'The plant occupies over 400 hectares with its own railway infrastructure.',
ab_p5:'Electric steelmaking complex includes two "Danarc" furnaces of 70 and 100 tons.',
ab_p6:'Metalware production is one of the largest in the CIS.',
f1t:'Full Cycle', f1d:'From melting to finished product',
f2t:'Export', f2d:'70+ countries',
f3t:'Innovation', f3d:'Modern technologies',
f4t:'Quality', f4d:'ISO 9001, 14001, 45001',
hist_title:'Development <span>History</span>', hist_sub:'Key milestones',
t1y:'1984', t1t:'Bar Mill "320" Launch', t1d:'Commissioning of bar mill "320".',
t2y:'1991', t2t:'Metalware Production', t2d:'Steel ropes and wire shop launch.',
t3y:'2003', t3t:'Electric Steelmaking', t3d:'Danarc furnace 70t commissioned.',
t4y:'2010', t4t:'Production Modernization', t4d:'Large-scale equipment upgrade.',
t5y:'2020', t5t:'Digital Transformation', t5d:'ERP implementation.',
t6y:'2026', t6t:'Strategy 2030', t6d:'Export expansion program.',
prod_title:'Our <span>Products</span>', prod_sub:'Wide range of metal products',
p1t:'Steel Rebar', p1d:'Hot-rolled rebar.', p1a:'Diameter 6–40 mm', p1b:'Classes A-I, A-III, A-V', p1c:'GOST 34028-2016',
p2t:'Wire Rod & Wire', p2d:'Construction, spring, welding wire.', p2a:'Low-carbon', p2b:'General purpose', p2c:'Special grades',
p3t:'Metalware', p3d:'Ropes, mesh, nails.', p3a:'Steel ropes', p3b:'Woven mesh', p3c:'Binding wire',
p4t:'Long Products', p4d:'Round, square, hex bars.', p4a:'Round 12–250 mm', p4b:'Square 14–150 mm', p4c:'Structural grades',
p5t:'Fasteners', p5d:'Bolts, nuts, studs.', p5a:'Bolts and nuts', p5b:'Threaded studs', p5c:'Rivets',
p6t:'Structural Sections', p6d:'Angles, channels.', p6a:'Equal angles', p6b:'Channels', p6c:'Custom profiles',
con_title:'Contact <span>Us</span>', con_sub:'Open for cooperation',
con_addr_t:'Address', con_addr:'37 Promyshlennaya St, Zhlobin, 247210, Belarus',
con_phone_t:'Phone', con_email_t:'Email',
con_time_t:'Working Hours', con_time:'Mon–Fri: 08:00–17:00. Production 24/7.',
con_form_t:'Write to Us', con_name:'Name', con_email:'Email', con_subj:'Subject', con_msg:'Message', con_send:'Send',
con_route:'Get directions',
no_results:'No results found',
breadcrumb_home:'Home',
live_counter_title:'LIVE PRODUCTION',
counter_steel_label:'Tons of steel since 2026',
counter_rebar_label:'Meters of rebar',
counter_export_label:'Tons for export',
counter_countries_label:'Partner countries',
plant_map_title:'Plant <span>Territory</span>',
plant_map_sub:'Click on an object for details',
export_title:'Export <span>Geography</span>',
export_sub:'Deliveries to 70+ countries',
export_countries:'Countries',
export_continents:'Continents',
export_tons:'Tons/year',
awards_title:'Achievements and <span>Awards</span>',
awards_sub:'International recognition',
award1_title:'CIS Industry Leader',
award1_desc:'Top 10 by export volume, 2025',
award2_title:'ISO 9001:2015',
award2_desc:'Quality management certificate',
award3_title:'Environmental Standard',
award3_desc:'ISO 14001:2015',
award4_title:'Innovation 2024',
award4_desc:'New technologies award',
award5_title:'Best Exporter',
award5_desc:'Ministry of Industry Award, 2023',
cycle_title:'Production <span>Cycle</span>',
cycle_sub:'Click on a stage for details',
cycle1:'Smelting', cycle2:'Casting', cycle3:'Rolling', cycle4:'Cutting', cycle5:'Packing',
cycle1_title:'Electric Arc Smelting',
cycle1_desc:'Charge loaded into "Danarc" furnace, 70 tons. Temperature 1600°C.',
cycle2_title:'Continuous Casting',
cycle2_desc:'Molten steel poured into crystallizers, billets 150×150 mm.',
cycle3_title:'Hot Rolling',
cycle3_desc:'Billets heated to 1200°C, pass through mill "320".',
cycle4_title:'Cutting and Control',
cycle4_desc:'Cut to 6–12 m lengths. QC laboratory control.',
cycle5_title:'Packing and Shipping',
cycle5_desc:'Marked, packed, shipped by rail or road.',
form_success:'✓ Message sent!',
m_about_general:'General Info', m_about_leadership:'Leadership', m_about_sustainable:'Sustainable Dev.', m_about_chronology:'Chronology',
m_buyer_quality:'Quality System', m_buyer_cert:'Certificates', m_buyer_credit:'Export Credit', m_buyer_order:'Ordering', m_buyer_online:'Online App.',
m_supplier_contests:'Contests', m_supplier_procurement:'Raw Material Procurement', m_supplier_code:'Supplier Code',
m_press_news:'News', m_press_photo:'Photo Album', m_press_paper:'Newspaper', m_press_video:'Video',
m_contacts_info:'Contact Info', m_contacts_buyer:'For Buyers', m_contacts_supplier:'For Suppliers', m_contacts_press:'For Press', m_contacts_appeals:'Appeals',
press_title:'Press <span>Center</span>', press_sub:'News, photos, newspaper',
press_tab_all:'All', press_tab_news:'News', press_tab_photo:'Photo Album', press_tab_paper:'Newspaper', press_tab_video:'Video',
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
career_title:'BMZ <span>Personnel</span>',
career_sub:'Professional team is the foundation of success',
career_intro:'JSC "BMZ" is more than 12,000 employees united by a common goal.',
career_intro_p2:'Our enterprise employs specialists of various professions.',
career_profs_title:'Enterprise <span>Professions</span>',
career_profs_sub:'Main specialties',
career_vacancies_title:'Vacant <span>Positions</span>',
career_vacancies_sub:'Current vacancies',
career_benefits_title:'What We <span>Offer</span>',
career_benefits_sub:'Social package and conditions',
prof_steelmaker:'Steelmaker', prof_steelmaker_desc:'Electric arc furnace operation',
prof_roller:'Roller', prof_roller_desc:'Bar mill "320" operation',
prof_engineer:'Metallurgical Engineer', prof_engineer_desc:'Technology development',
prof_electrician:'Welder', prof_electrician_desc:'Welding work',
prof_qc:'QC Inspector', prof_qc_desc:'Quality control',
prof_crane:'Crane Operator', prof_crane_desc:'Overhead crane operation',
prof_repair:'Repair Fitter', prof_repair_desc:'Equipment maintenance',
prof_driver:'Driver', prof_driver_desc:'Transportation',
prof_it:'Automation Engineer', prof_it_desc:'Process automation',
prof_logist:'Foreign Trade Specialist', prof_logist_desc:'Exports',
prof_welder:'Electrician', prof_welder_desc:'Electrical equipment repair',
prof_foundry:'Foundry Worker', prof_foundry_desc:'Work in steelmaking production',
prof_chemist:'Chemical Analyst', prof_chemist_desc:'Metal composition analysis',
prof_mechanic:'Mechanic', prof_mechanic_desc:'Rolling equipment maintenance',
prof_gas_cutter:'Gas Cutter', prof_gas_cutter_desc:'Oxygen and plasma cutting',
prof_turner:'Turner', prof_turner_desc:'Lathe machining',
prof_rope_winder:'Rope Winding Operator', prof_rope_winder_desc:'Rope winding machines operation',
vac_apply:'Apply', vac_location:'Zhlobin', vac_fulltime:'Full-time', vac_salary:'Negotiable',
vac_electro:'Electrician for electrical equipment repair',
vac_electro_desc:'Maintenance and repair of electrical equipment. Requirements: safety group III or higher.',
vac_smelter:'Metal and Alloys Smelter',
vac_smelter_desc:'Electric arc furnace operation. Requirements: experience in metallurgical production.',
vac_turner:'Turner (Lathe Operator)',
vac_turner_desc:'Part machining on lathes. Requirements: grade 4+, blueprint reading.',
vac_winder:'Rope Winding Machine Operator',
vac_winder_desc:'Rope winding machines operation. Requirements: metalware equipment experience.',
vac_cutter:'Gas Cutter',
vac_cutter_desc:'Oxygen and plasma metal cutting. Requirements: gas cutter certificate.',
vac_crane:'Metallurgical Crane Operator',
vac_crane_desc:'Overhead crane operation in steelmaking and rolling shops. Requirements: crane operator certificate.',
vac_machinist:'Multi-Skilled Machine Operator',
vac_machinist_desc:'Part machining on various machines. Requirements: grade 3+.',
app_title:'Applicant Resume',
app_photo:'Photo',
app_photo_hint:'Click to upload<br>jpg, jpeg, bmp, gif, png (up to 1 MB)',
app_fio:'Full Name:', app_fio_ph:'Surname Name Patronymic',
app_birth:'Date of Birth:',
app_family:'Marital Status:', app_select:'Select', app_single:'Single', app_married:'Married', app_divorced:'Divorced',
app_military:'Military Service:', app_served:'Served', app_not_served:'Not served',
app_phone:'Phone:', app_phone_ph:'+375 (__) ___-__-__',
app_email:'Email:', app_email_ph:'Email',
app_address:'Address:', app_address_ph:'Address',
app_education:'Education:', app_education_ph:'graduation year, institution, specialty',
app_position:'Position Applied For:', app_position_ph:'Position, expected salary',
app_experience:'Work Experience:', app_experience_ph:'period, workplace, position',
app_other:'Other:', app_other_ph:'Additional info',
app_captcha:'Enter code:', app_captcha_ph:'Code',
app_submit:'Submit', app_success:'✓ Application sent!',
benefit_salary:'Stable Salary', benefit_salary_desc:'Competitive pay',
benefit_social:'Social Package', benefit_social_desc:'Medical insurance',
benefit_growth:'Career Growth', benefit_growth_desc:'Development opportunities',
benefit_training:'Training', benefit_training_desc:'Corporate programs',
benefit_sport:'Sport & Leisure', benefit_sport_desc:'Corporate events',
benefit_meals:'Meals', benefit_meals_desc:'Subsidized canteen',
buy_title:'Information for <span>Buyers</span>',
buy_sub:'Terms of cooperation, certificates and order processing',
buy_quality_title:'About Quality <span>System</span>',
buy_quality_desc:'International quality standards at all production stages',
buy_cert_title:'Product <span>Certificates</span>',
buy_cert_desc:'Certificates of compliance with international and national standards',
buy_credit_title:'Export <span>Credit</span>',
buy_credit_desc:'Financial instruments for foreign buyers',
buy_order_title:'Order <span>Processing</span>',
buy_order_desc:'Step-by-step procedure for placing an order',
buy_online_title:'Online <span>Application</span>',
buy_online_desc:'Quick submission of a product request via electronic form',
sup_title:'Information for <span>Suppliers</span>',
sup_sub:'Cooperation with BMZ — reliability, transparency and mutual benefit',
sup_intro:'JSC "BMZ" is interested in long-term cooperation with reliable suppliers.',
sup_intro_p2:'The enterprise purchases scrap metal, ferroalloys, refractories and other materials.',
sup_contests_title:'Contests and <span>Tenders</span>',
sup_contests_desc:'Open competitive procedures',
sup_procurement_title:'List of raw materials and materials purchased on a regular basis',
sup_procurement_desc:'The procurement department purchases raw materials and materials on DAP RF-RB terms by wagon loads',
sup_code_title:'Supplier <span>Code</span>',
sup_code_desc:'Principles and requirements',
sup_how_title:'How to Become a <span>Supplier</span>',
sup_how_desc:'Accreditation procedure',
sup_how_steps:['Prepare commercial proposal','Send to zakupki@bmz.by','Pass accreditation','Get register notification','Participate in tenders'],
sup_how_email:'E-mail: zakupki@bmz.by',
sup_how_phone:'Phone: +375 (2334) 2-00-05',
sup_how_time:'Review period — up to 14 business days',
tab_scrap:'Scrap Metal', tab_ferro:'Ferroalloys', tab_refractory:'Refractories', tab_coolant:'Coolants', tab_parts:'Spare Parts', tab_electrodes:'Electrodes',
scrap_title:'The procurement department purchases scrap metal on DAP RF-RB terms by wagon loads',
scrap_table_header:['#','Scrap Metal Name','STD'],
scrap_rows:[
['1','Ferrous secondary metals','STB 2026-2010<br>GOST 2787-2024'],
['2','Steel scrap and waste','TU BY 400074854.021-2012'],
['3','Steel scrap and waste with enhanced quality','TU BY 400074854.038-2014'],
['4','Cast iron scrap','GOST 2787-2024'],
['5','Steel shavings','GOST 2787-2024']
],
ferro_title:'The procurement department purchases ferroalloys for steelmaking production',
ferro_table_header:['#','Name','STD'],
ferro_rows:[
['1','Ferromanganese','GOST 4755-89'],
['2','Ferrosilicon','GOST 1415-93'],
['3','Ferrosilicomagnesium','GOST 19232-81'],
['4','Ferrosilicobarium','TU 14-1-4651-89'],
['5','Ferrosilicocalcium','GOST 4756-91']
],
refractory_title:'The procurement department purchases refractory materials for furnace lining',
refractory_table_header:['#','Name','STD'],
refractory_rows:[
['1','Fused periclase magnesite','GOST 4689-2014'],
['2','Chromomagnesite products','GOST 390-96'],
['3','Periclase-carbon products','GOST R 53426-2009'],
['4','Aluminosilicate refractories','GOST 390-96']
],
coolant_title:'The procurement department purchases coolants and lubricants',
coolant_table_header:['#','Name','STD'],
coolant_rows:[
['1','Emulsols','GOST 25743-83'],
['2','Coolants for rolling production','TU BY 400074854.055-2016'],
['3','Industrial oils','GOST 20799-88']
],
parts_title:'The procurement department purchases spare parts for equipment',
parts_table_header:['#','Name','STD'],
parts_rows:[
['1','Rolling rolls','GOST 21120-75'],
['2','Rolling bearings','GOST 520-2011'],
['3','Drive belts','GOST 1284.3-96'],
['4','Roller chains','GOST 13568-97']
],
electrodes_title:'The procurement department purchases electrodes for electric arc furnaces',
electrodes_table_header:['#','Name','STD'],
electrodes_rows:[
['1','Graphitized electrodes','GOST 19905-74'],
['2','Carbon electrodes','GOST 17001-71'],
['3','Special electrodes','TU 1916-001-00212179-97']
],
sup_code_list:['Labor law compliance','Environmental responsibility','Anti-corruption','Information confidentiality','Fair competition','Product quality','Delivery deadlines']
}
};

function t(k){ return T[lang] && T[lang][k] ? T[lang][k] : k; }

// ===== ШАБЛОНЫ СТРАНИЦ =====
const PAGES = {
home: function(){
return `<div class="page">
<section class="hero">
<div class="hero-bg"></div>
<div class="hero-ov"></div>
<div class="hero-c">
<div class="hero-tag">${t('hero_tag')}</div>
<h1>${t('hero_h1')} <span>${t('hero_h1s')}</span></h1>
<p class="hero-desc">${t('hero_desc')}</p>
<div class="hero-btns">
<a class="btn btn-p" href="catalog.html">${t('hero_btn1')}</a>
<a class="btn btn-o" href="about.html">${t('hero_btn2')}</a>
</div>
</div>
<div class="scroll-hint">${t('scroll_hint')}</div>
</section>
<section class="sec">
<div class="container">
<div class="stats reveal">
<div class="stat"><div class="stat-n">${t('s1')}</div><div class="stat-l">${t('s1l')}</div></div>
<div class="stat"><div class="stat-n">${t('s2')}</div><div class="stat-l">${t('s2l')}</div></div>
<div class="stat"><div class="stat-n">${t('s3')}</div><div class="stat-l">${t('s3l')}</div></div>
<div class="stat"><div class="stat-n">${t('s4')}</div><div class="stat-l">${t('s4l')}</div></div>
</div>
</div>
</section>
<section class="sec sec-alt">
<div class="container">
<div class="live-counter reveal">
<div class="counter-header"><div class="live-dot"></div><span>${t('live_counter_title')}</span></div>
<div class="counter-grid">
<div class="counter-item"><div class="counter-value" id="counterSteel">0</div><div class="counter-label">${t('counter_steel_label')}</div></div>
<div class="counter-item"><div class="counter-value" id="counterRebar">0</div><div class="counter-label">${t('counter_rebar_label')}</div></div>
<div class="counter-item"><div class="counter-value" id="counterExport">0</div><div class="counter-label">${t('counter_export_label')}</div></div>
<div class="counter-item"><div class="counter-value" id="counterCountries">0</div><div class="counter-label">${t('counter_countries_label')}</div></div>
</div>
</div>
</div>
</section>
<section class="sec">
<div class="container">
<div class="sec-title reveal"><h2>${t('news_title')}</h2><div class="line"></div><p>${t('news_sub')}</p></div>
<div class="news-grid">
<div class="news-card reveal" onclick="openNewsModal(1)"><div class="news-img" style="background:linear-gradient(135deg,#2a1a10,#1a0a05)"><div class="news-date">02.10.2026</div></div><div class="news-body"><div class="news-cat">${t('n1c')}</div><h3>${t('n1t')}</h3><p>${t('n1d')}</p><div class="news-read">${t('news_read')}</div></div></div>
<div class="news-card reveal" onclick="openNewsModal(2)"><div class="news-img" style="background:linear-gradient(135deg,#0a1a2a,#050a15)"><div class="news-date">28.09.2026</div></div><div class="news-body"><div class="news-cat">${t('n2c')}</div><h3>${t('n2t')}</h3><p>${t('n2d')}</p><div class="news-read">${t('news_read')}</div></div></div>
<div class="news-card reveal" onclick="openNewsModal(3)"><div class="news-img" style="background:linear-gradient(135deg,#1a2a1a,#0a150a)"><div class="news-date">19.09.2026</div></div><div class="news-body"><div class="news-cat">${t('n3c')}</div><h3>${t('n3t')}</h3><p>${t('n3d')}</p><div class="news-read">${t('news_read')}</div></div></div>
</div>
<div style="text-align:center;margin-top:36px"><a class="btn btn-o btn-sm" href="news.html">${t('news_all')}</a></div>
</div>
</section>
</div>`;
},

about: function(){
return `<div class="page">
<div class="page-hero">
<div class="page-hero-inner">
<div class="breadcrumbs"><a href="index.html">${t('breadcrumb_home')}</a><span class="sep">/</span><span class="current">${t('nav_about')}</span></div>
<h1>${t('about_title')}</h1>
<p>${t('about_sub')}</p>
</div>
</div>
<section class="sec">
<div class="container">
<div class="about-hero reveal"><div class="about-hero-inner"><div class="big">${t('about_yr')}</div><div class="sub">${t('about_yr_sub')}</div></div></div>
<div class="about-cols reveal">
<div><h3>${t('ab_h1')}</h3><p>${t('ab_p1')}</p><p>${t('ab_p2')}</p><p>${t('ab_p3')}</p></div>
<div><p>${t('ab_p4')}</p><p>${t('ab_p5')}</p><p>${t('ab_p6')}</p></div>
</div>
<div class="feat-grid">
<div class="feat reveal"><div class="feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg></div><h4>${t('f1t')}</h4><p>${t('f1d')}</p></div>
<div class="feat reveal"><div class="feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg></div><h4>${t('f2t')}</h4><p>${t('f2d')}</p></div>
<div class="feat reveal"><div class="feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6v4H9zM12 7v4M8 11h8l2 10H6z"/></svg></div><h4>${t('f3t')}</h4><p>${t('f3d')}</p></div>
<div class="feat reveal"><div class="feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg></div><h4>${t('f4t')}</h4><p>${t('f4d')}</p></div>
</div>
</div>
</section>
<section class="sec sec-alt">
<div class="container">
<div class="sec-title reveal"><h2>${t('hist_title')}</h2><div class="line"></div><p>${t('hist_sub')}</p></div>
<div class="tl">
<div class="tl-item reveal"><div class="tl-yr">${t('t1y')}</div><div class="tl-box"><h4>${t('t1t')}</h4><p>${t('t1d')}</p></div></div>
<div class="tl-item reveal"><div class="tl-yr">${t('t2y')}</div><div class="tl-box"><h4>${t('t2t')}</h4><p>${t('t2d')}</p></div></div>
<div class="tl-item reveal"><div class="tl-yr">${t('t3y')}</div><div class="tl-box"><h4>${t('t3t')}</h4><p>${t('t3d')}</p></div></div>
<div class="tl-item reveal"><div class="tl-yr">${t('t4y')}</div><div class="tl-box"><h4>${t('t4t')}</h4><p>${t('t4d')}</p></div></div>
<div class="tl-item reveal"><div class="tl-yr">${t('t5y')}</div><div class="tl-box"><h4>${t('t5t')}</h4><p>${t('t5d')}</p></div></div>
<div class="tl-item reveal"><div class="tl-yr">${t('t6y')}</div><div class="tl-box"><h4>${t('t6t')}</h4><p>${t('t6d')}</p></div></div>
</div>
</div>
</section>
<section class="sec">
<div class="container">
<div class="sec-title reveal"><h2>${t('plant_map_title')}</h2><div class="line"></div><p>${t('plant_map_sub')}</p></div>
<div class="plant-map reveal">
<svg viewBox="0 0 800 400" class="plant-svg">
<rect width="800" height="400" fill="var(--bg3)" rx="12"/>
<rect x="50" y="50" width="700" height="300" fill="var(--bg4)" stroke="var(--brd)" stroke-width="2" rx="8"/>
<line x1="50" y1="200" x2="750" y2="200" stroke="var(--brd2)" stroke-width="3" stroke-dasharray="10,5"/>
<line x1="400" y1="50" x2="400" y2="350" stroke="var(--brd2)" stroke-width="3" stroke-dasharray="10,5"/>
<rect class="plant-object" data-name="${lang==='ru'?'Сталеплавильный цех':'Steelmaking Shop'}" data-desc="${lang==='ru'?'Печь Данарк, 70 тонн':'Danarc furnace, 70 tons'}" x="100" y="80" width="120" height="80" fill="rgba(212,81,30,0.2)" stroke="var(--pr)" stroke-width="2" rx="4"/>
<text x="160" y="125" fill="var(--wh)" font-size="12" text-anchor="middle">${lang==='ru'?'Сталеплавильный':'Steelmaking'}</text>
<rect class="plant-object" data-name="${lang==='ru'?'Стан 320':'Mill 320'}" data-desc="${lang==='ru'?'Сортопрокатный стан 320':'Bar mill 320'}" x="280" y="80" width="120" height="80" fill="rgba(212,81,30,0.2)" stroke="var(--pr)" stroke-width="2" rx="4"/>
<text x="340" y="125" fill="var(--wh)" font-size="12" text-anchor="middle">${lang==='ru'?'Стан 320':'Mill 320'}</text>
<rect class="plant-object" data-name="${lang==='ru'?'Метизное производство':'Metalware Plant'}" data-desc="${lang==='ru'?'Канаты, проволока':'Ropes, wire'}" x="460" y="80" width="120" height="80" fill="rgba(212,81,30,0.2)" stroke="var(--pr)" stroke-width="2" rx="4"/>
<text x="520" y="125" fill="var(--wh)" font-size="12" text-anchor="middle">${lang==='ru'?'Метизный цех':'Metalware'}</text>
<rect class="plant-object" data-name="${lang==='ru'?'Лаборатория ОТК':'QC Lab'}" data-desc="${lang==='ru'?'Контроль качества':'Quality control'}" x="100" y="240" width="120" height="80" fill="rgba(245,197,24,0.2)" stroke="var(--yl)" stroke-width="2" rx="4"/>
<text x="160" y="285" fill="var(--wh)" font-size="12" text-anchor="middle">${lang==='ru'?'Лаборатория':'Lab'}</text>
<rect class="plant-object" data-name="${lang==='ru'?'Склад':'Warehouse'}" data-desc="${lang==='ru'?'Хранение':'Storage'}" x="280" y="240" width="120" height="80" fill="rgba(245,197,24,0.2)" stroke="var(--yl)" stroke-width="2" rx="4"/>
<text x="340" y="285" fill="var(--wh)" font-size="12" text-anchor="middle">${lang==='ru'?'Склад':'Warehouse'}</text>
<rect class="plant-object" data-name="${lang==='ru'?'Админкорпус':'Admin'}" data-desc="${lang==='ru'?'Офис':'Office'}" x="460" y="240" width="120" height="80" fill="rgba(245,197,24,0.2)" stroke="var(--yl)" stroke-width="2" rx="4"/>
<text x="520" y="285" fill="var(--wh)" font-size="12" text-anchor="middle">${lang==='ru'?'Админкорпус':'Admin'}</text>
<rect x="650" y="80" width="20" height="20" fill="rgba(212,81,30,0.2)" stroke="var(--pr)" stroke-width="2" rx="2"/>
<text x="680" y="95" fill="var(--tx2)" font-size="11">${lang==='ru'?'Производство':'Production'}</text>
<rect x="650" y="110" width="20" height="20" fill="rgba(245,197,24,0.2)" stroke="var(--yl)" stroke-width="2" rx="2"/>
<text x="680" y="125" fill="var(--tx2)" font-size="11">${lang==='ru'?'Инфраструктура':'Infrastructure'}</text>
</svg>
<div class="plant-tooltip" id="plantTooltip"></div>
</div>
</div>
</section>
<section class="sec sec-alt">
<div class="container">
<div class="sec-title reveal"><h2>${t('export_title')}</h2><div class="line"></div><p>${t('export_sub')}</p></div>
<div class="world-map reveal">
<svg viewBox="0 0 1000 500" class="map-svg">
<rect width="1000" height="500" fill="var(--bg3)" rx="12"/>
<g fill="var(--bg4)" stroke="var(--brd2)" stroke-width="1.5">
<path d="M100 80 L150 70 L200 75 L250 90 L280 120 L270 160 L240 190 L200 200 L160 190 L120 170 L90 140 L80 110 Z"/>
<path d="M220 220 L260 210 L290 230 L300 280 L290 340 L270 380 L250 400 L230 380 L220 320 L210 260 Z"/>
<path d="M420 90 L460 85 L490 95 L510 110 L500 130 L480 140 L450 145 L430 135 L415 115 Z"/>
<path d="M440 160 L480 155 L510 170 L520 220 L510 280 L490 330 L470 350 L450 330 L440 270 L430 210 Z"/>
<path d="M520 80 L600 70 L700 75 L800 90 L850 120 L870 160 L850 200 L800 230 L720 240 L640 230 L580 210 L540 180 L520 140 Z"/>
<path d="M780 320 L830 310 L870 320 L890 350 L880 390 L850 410 L810 400 L780 370 Z"/>
</g>
<g class="export-dots">
<circle cx="460" cy="115" r="6" fill="var(--pr)" class="map-dot" data-country="${lang==='ru'?'Германия':'Germany'}"/>
<circle cx="475" cy="125" r="5" fill="var(--pr)" class="map-dot" data-country="${lang==='ru'?'Польша':'Poland'}"/>
<circle cx="720" cy="140" r="6" fill="var(--pr)" class="map-dot" data-country="${lang==='ru'?'Китай':'China'}"/>
<circle cx="780" cy="160" r="5" fill="var(--pr)" class="map-dot" data-country="${lang==='ru'?'Япония':'Japan'}"/>
<circle cx="180" cy="130" r="6" fill="var(--pr)" class="map-dot" data-country="${lang==='ru'?'США':'USA'}"/>
<circle cx="260" cy="300" r="5" fill="var(--pr)" class="map-dot" data-country="${lang==='ru'?'Бразилия':'Brazil'}"/>
<circle cx="840" cy="360" r="5" fill="var(--pr)" class="map-dot" data-country="${lang==='ru'?'Австралия':'Australia'}"/>
<circle cx="470" cy="120" r="8" fill="var(--yl)" class="map-dot-home" data-country="${lang==='ru'?'Беларусь (БМЗ)':'Belarus (BMZ)'}"/>
</g>
</svg>
<div class="map-tooltip" id="mapTooltip"></div>
</div>
<div class="map-stats reveal">
<div class="map-stat"><div class="map-stat-n">70+</div><div class="map-stat-l">${t('export_countries')}</div></div>
<div class="map-stat"><div class="map-stat-n">6</div><div class="map-stat-l">${t('export_continents')}</div></div>
<div class="map-stat"><div class="map-stat-n">2.3М</div><div class="map-stat-l">${t('export_tons')}</div></div>
</div>
</div>
</section>
<section class="sec">
<div class="container">
<div class="sec-title reveal"><h2>${t('awards_title')}</h2><div class="line"></div><p>${t('awards_sub')}</p></div>
<div class="awards-carousel reveal">
<div class="carousel-track" id="carouselTrack">
<div class="award-card"><h4>${t('award1_title')}</h4><p>${t('award1_desc')}</p></div>
<div class="award-card"><h4>${t('award2_title')}</h4><p>${t('award2_desc')}</p></div>
<div class="award-card"><h4>${t('award3_title')}</h4><p>${t('award3_desc')}</p></div>
<div class="award-card"><h4>${t('award4_title')}</h4><p>${t('award4_desc')}</p></div>
<div class="award-card"><h4>${t('award5_title')}</h4><p>${t('award5_desc')}</p></div>
</div>
<div class="carousel-controls">
<button class="carousel-btn prev" onclick="moveCarousel(-1)">←</button>
<button class="carousel-btn next" onclick="moveCarousel(1)">→</button>
</div>
</div>
</div>
</section>
<section class="sec sec-alt">
<div class="container">
<div class="sec-title reveal"><h2>${t('cycle_title')}</h2><div class="line"></div><p>${t('cycle_sub')}</p></div>
<div class="production-cycle reveal">
<div class="cycle-step active" data-step="1"><div class="step-num">01</div><h4>${t('cycle1')}</h4></div>
<div class="cycle-line"></div>
<div class="cycle-step" data-step="2"><div class="step-num">02</div><h4>${t('cycle2')}</h4></div>
<div class="cycle-line"></div>
<div class="cycle-step" data-step="3"><div class="step-num">03</div><h4>${t('cycle3')}</h4></div>
<div class="cycle-line"></div>
<div class="cycle-step" data-step="4"><div class="step-num">04</div><h4>${t('cycle4')}</h4></div>
<div class="cycle-line"></div>
<div class="cycle-step" data-step="5"><div class="step-num">05</div><h4>${t('cycle5')}</h4></div>
</div>
<div class="cycle-detail reveal" id="cycleDetail">
<h3 id="cycleTitle">${t('cycle1_title')}</h3>
<p id="cycleDesc">${t('cycle1_desc')}</p>
</div>
</div>
</section>
</div>`;
},

catalog: function(){
const prodIcons = [
`<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="140" fill="#1a1a1a"/><g stroke="#d4511e" stroke-width="2.5" stroke-linecap="round"><line x1="20" y1="40" x2="180" y2="40"/><line x1="20" y1="70" x2="180" y2="70"/><line x1="20" y1="100" x2="180" y2="100"/><path d="M30 35 L40 45 L30 55 L40 65 L30 75 L40 85 L30 95 L40 105" stroke-width="1.5" stroke="#f07840"/><path d="M70 35 L80 45 L70 55 L80 65 L70 75 L80 85 L70 95 L80 105" stroke-width="1.5" stroke="#f07840"/><path d="M110 35 L120 45 L110 55 L120 65 L110 75 L120 85 L110 95 L120 105" stroke-width="1.5" stroke="#f07840"/><path d="M150 35 L160 45 L150 55 L160 65 L150 75 L160 85 L150 95 L160 105" stroke-width="1.5" stroke="#f07840"/></g></svg>`,
`<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="140" fill="#1a1a1a"/><ellipse cx="100" cy="70" rx="55" ry="45" fill="none" stroke="#d4511e" stroke-width="2.5"/><ellipse cx="100" cy="70" rx="42" ry="34" fill="none" stroke="#d4511e" stroke-width="2"/><ellipse cx="100" cy="70" rx="28" ry="22" fill="none" stroke="#f07840" stroke-width="2"/><ellipse cx="100" cy="70" rx="14" ry="11" fill="none" stroke="#f07840" stroke-width="1.5"/><circle cx="100" cy="70" r="4" fill="#f5c518"/><path d="M100 25 Q130 25 140 50" stroke="#f5c518" stroke-width="1.5" fill="none"/></svg>`,
`<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="140" fill="#1a1a1a"/><g stroke="#d4511e" stroke-width="2"><path d="M30 30 L170 30 L170 110 L30 110 Z"/><path d="M30 30 L170 110" stroke-width="1.5"/><path d="M170 30 L30 110" stroke-width="1.5"/><path d="M100 30 L100 110" stroke-width="1.5"/><path d="M30 70 L170 70" stroke-width="1.5"/><path d="M65 30 L65 110" stroke-width="1" stroke="#f07840"/><path d="M135 30 L135 110" stroke-width="1" stroke="#f07840"/><path d="M30 50 L170 50" stroke-width="1" stroke="#f07840"/><path d="M30 90 L170 90" stroke-width="1" stroke="#f07840"/></g></svg>`,
`<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="140" fill="#1a1a1a"/><circle cx="55" cy="70" r="30" fill="none" stroke="#d4511e" stroke-width="2.5"/><circle cx="55" cy="70" r="18" fill="none" stroke="#f07840" stroke-width="1.5"/><rect x="85" y="45" width="45" height="50" fill="none" stroke="#d4511e" stroke-width="2.5" rx="2"/><rect x="95" y="55" width="25" height="30" fill="none" stroke="#f07840" stroke-width="1.5"/><polygon points="155,40 175,55 175,85 155,100 135,85 135,55" fill="none" stroke="#d4511e" stroke-width="2.5"/><polygon points="155,50 167,59 167,81 155,90 143,81 143,59" fill="none" stroke="#f07840" stroke-width="1.5"/></svg>`,
`<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="140" fill="#1a1a1a"/><g stroke="#d4511e" stroke-width="2.5"><polygon points="50,40 75,40 85,55 75,70 50,70 40,55" fill="none"/><circle cx="62" cy="55" r="10" fill="none" stroke="#f07840" stroke-width="1.5"/><rect x="110" y="35" width="18" height="70" rx="2" fill="none"/><rect x="105" y="30" width="28" height="12" rx="2" fill="none" stroke="#f07840" stroke-width="1.5"/><line x1="113" y1="50" x2="125" y2="50" stroke="#f07840" stroke-width="1"/><line x1="113" y1="58" x2="125" y2="58" stroke="#f07840" stroke-width="1"/><line x1="113" y1="66" x2="125" y2="66" stroke="#f07840" stroke-width="1"/><line x1="113" y1="74" x2="125" y2="74" stroke="#f07840" stroke-width="1"/><line x1="113" y1="82" x2="125" y2="82" stroke="#f07840" stroke-width="1"/><line x1="113" y1="90" x2="125" y2="90" stroke="#f07840" stroke-width="1"/></g></svg>`,
`<svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="140" fill="#1a1a1a"/><g stroke="#d4511e" stroke-width="2.5" fill="none"><path d="M30 30 L30 110 L110 110"/><path d="M45 45 L45 95 L95 95" stroke="#f07840" stroke-width="1.5"/><path d="M130 35 L180 35 L180 50 L145 50 L145 90 L180 90 L180 105 L130 105 Z"/><path d="M140 45 L170 45 L170 52 L150 52 L150 88 L170 88 L170 95 L140 95 Z" stroke="#f07840" stroke-width="1.5"/></g></svg>`
];

return `<div class="page">
<div class="page-hero">
<div class="page-hero-inner">
<div class="breadcrumbs"><a href="index.html">${t('breadcrumb_home')}</a><span class="sep">/</span><span class="current">${t('nav_products')}</span></div>
<h1>${t('prod_title')}</h1>
<p>${t('prod_sub')}</p>
</div>
</div>
<section class="sec">
<div class="container">
<div class="catalog-filters reveal">
<button class="catalog-filter active" data-cat="all">${lang==='ru'?'Все':'All'}</button>
<button class="catalog-filter" data-cat="rebar">${t('p1t')}</button>
<button class="catalog-filter" data-cat="wire">${t('p2t')}</button>
<button class="catalog-filter" data-cat="metalware">${t('p3t')}</button>
<button class="catalog-filter" data-cat="long">${t('p4t')}</button>
<button class="catalog-filter" data-cat="fastener">${t('p5t')}</button>
<button class="catalog-filter" data-cat="structural">${t('p6t')}</button>
</div>
<div class="prod-grid">
${[1,2,3,4,5,6].map(i=>`<div class="prod-card reveal" data-cat="${['rebar','wire','metalware','long','fastener','structural'][i-1]}">
<div class="prod-img">${prodIcons[i-1]}</div>
<div class="prod-card-body"><h3>${t('p'+i+'t')}</h3><p>${t('p'+i+'d')}</p><ul><li>${t('p'+i+'a')}</li><li>${t('p'+i+'b')}</li><li>${t('p'+i+'c')}</li></ul></div>
</div>`).join('')}
</div>
</div>
</section>
</div>`;
},

buyers: function(){
return `<div class="page">
<div class="page-hero">
<div class="page-hero-inner">
<div class="breadcrumbs"><a href="index.html">${t('breadcrumb_home')}</a><span class="sep">/</span><span class="current">${t('nav_buyers')}</span></div>
<h1>${t('buy_title')}</h1>
<p>${t('buy_sub')}</p>
</div>
</div>

<section class="sec sec-alt" id="anchor-quality">
<div class="container">
<div class="sec-title reveal"><h2>${t('buy_quality_title')}</h2><div class="line"></div><p>${t('buy_quality_desc')}</p></div>
<div class="about-cols reveal">
<div>
<h3>${lang==='ru'?'Система менеджмента качества':'Quality Management System'}</h3>
<p>${lang==='ru'?'Качеству на ОАО «БМЗ» всегда уделяется особое внимание, начиная с официального дня рождения завода. Первый опыт по разработке и внедрению системы качества был осуществлён в 1994 году в рамках одного сталедроволочного цеха. А уже в апреле 1997 года заводская система качества была сертифицирована на соответствие требованиям стандарта ISO 9002:1994.':'Quality at BMZ has always been given special attention since the official birthday of the plant. The first experience in developing and implementing a quality system was carried out in 1994. In April 1997, the factory quality system was certified to ISO 9002:1994.'}</p>
<p>${lang==='ru'?'В настоящее время система менеджмента качества завода соответствует требованиям стандартов:':'Currently, the quality management system meets the requirements of:'}</p>
</div>
<div>
<div class="info-block" style="margin:0">
<h3>${lang==='ru'?'Сертификаты СМК':'QMS Certificates'}</h3>
<ul>
<li><strong>ISO 9001</strong> — ${lang==='ru'?'Система менеджмента качества':'Quality management system'}</li>
<li><strong>ISO 14001</strong> — ${lang==='ru'?'Экологический менеджмент':'Environmental management'}</li>
<li><strong>ISO 45001</strong> — ${lang==='ru'?'Охрана труда и пром. безопасность':'Occupational health & safety'}</li>
<li><strong>СТБ ISO 9001</strong> — ${lang==='ru'?'Национальный стандарт РБ':'National standard of RB'}</li>
</ul>
</div>
</div>
</div>
<div class="feat-grid reveal" style="margin-top:40px">
<div class="feat"><div class="feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg></div><h4>ISO 9001</h4><p>${lang==='ru'?'Область: проектирование, разработка и производство непрерывнолитых заготовок, сортового и фасонного проката, катанки, бесшовных труб, металлокорда, проволоки и стальной фибры':'Scope: design, development and production of continuously cast billets, long and structural rolled products, wire rod, seamless tubes, steel cord, wire and steel fiber'}</p></div>
<div class="feat"><div class="feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h4>ISO 14001</h4><p>${lang==='ru'?'Экологический менеджмент — минимизация воздействия на окружающую среду':'Environmental management — minimizing environmental impact'}</p></div>
<div class="feat"><div class="feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div><h4>ISO 45001</h4><p>${lang==='ru'?'Охрана труда и промышленная безопасность':'Occupational health and industrial safety'}</p></div>
<div class="feat"><div class="feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/></svg></div><h4>${lang==='ru'?'Внутренний аудит':'Internal Audit'}</h4><p>${lang==='ru'?'Регулярные проверки на всех этапах производства':'Regular checks at all production stages'}</p></div>
</div>
</div>
</section>

<section class="sec" id="anchor-cert">
<div class="container">
<div class="sec-title reveal"><h2>${t('buy_cert_title')}</h2><div class="line"></div><p>${t('buy_cert_desc')}</p></div>
<div class="info-blocks reveal">
<div class="info-block"><h3>${lang==='ru'?'Национальные сертификаты':'National Certificates'}</h3><ul><li>${lang==='ru'?'Сертификаты соответствия ГОСТ':'GOST compliance certificates'}</li><li>${lang==='ru'?'Сертификаты СТБ':'STB certificates'}</li><li>${lang==='ru'?'Паспорта плавки на каждую партию':'Heat passports for each batch'}</li></ul></div>
<div class="info-block"><h3>${lang==='ru'?'Международные сертификаты':'International Certificates'}</h3><ul><li>${lang==='ru'?'EN (Европейский союз)':'EN (European Union)'}</li><li>${lang==='ru'?'ASTM (США)':'ASTM (USA)'}</li><li>${lang==='ru'?'DIN (Германия)':'DIN (Germany)'}</li></ul></div>
<div class="info-block"><h3>${lang==='ru'?'Отраслевые сертификаты':'Industry Certificates'}</h3><ul><li>${lang==='ru'?'Сертификаты для строительной отрасли':'Construction industry certificates'}</li><li>${lang==='ru'?'Сертификаты для машиностроения':'Mechanical engineering certificates'}</li><li>${lang==='ru'?'Сертификаты для нефтегазовой отрасли':'Oil & gas industry certificates'}</li></ul></div>
</div>
</div>
</section>

<section class="sec sec-alt" id="anchor-credit">
<div class="container">
<div class="sec-title reveal"><h2>${t('buy_credit_title')}</h2><div class="line"></div><p>${t('buy_credit_desc')}</p></div>
<div class="about-cols reveal">
<div>
<h3>${lang==='ru'?'Условия экспортного кредитования':'Export Credit Terms'}</h3>
<p>${lang==='ru'?'При приобретении металлопродукции ОАО «БМЗ» возможно применение механизма экспортного кредитования в соответствии с Указом Президента Республики Беларусь №534 «О содействии развитию экспорта товаров (работ, услуг)».':'When purchasing metal products of JSC "BMZ", it is possible to use the export credit mechanism in accordance with Decree No. 534 of the President of the Republic of Belarus "On promoting the development of exports of goods (works, services)".'}</p>
<p>${lang==='ru'?'На электронном ресурсе ОАО «АСБ Беларусбанк» и ОАО «Банк развития Республики Беларусь» размещена подробная информация об обязательных условиях предоставления экспортного финансирования, схемах поддержания экспорта товаров, способах и механизмах экспортного финансирования, а также предоставлена информация по расчёту графика платежей по экспортному кредиту.':'Detailed information on the mandatory conditions for providing export financing is available on the websites of JSC "ASB Belarusbank" and JSC "Development Bank of the Republic of Belarus".'}</p>
</div>
<div>
<div class="info-block" style="margin:0">
<h3>${lang==='ru'?'Преимущества':'Advantages'}</h3>
<ul>
<li>${lang==='ru'?'Кредитная линия до 12 месяцев':'Credit line up to 12 months'}</li>
<li>${lang==='ru'?'Работа через уполномоченные банки РБ':'Work through authorized banks of RB'}</li>
<li>${lang==='ru'?'Страхование экспортных рисков':'Export risk insurance'}</li>
<li>${lang==='ru'?'Индивидуальные условия для крупных контрактов':'Individual terms for large contracts'}</li>
<li>${lang==='ru'?'Электронный калькулятор расчёта расходов':'Electronic expense calculator'}</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section class="sec" id="anchor-order">
<div class="container">
<div class="sec-title reveal"><h2>${t('buy_order_title')}</h2><div class="line"></div><p>${t('buy_order_desc')}</p></div>
<div class="steps-container reveal">
<div class="step-item"><div class="step-number">1</div><div class="step-content"><h4>${lang==='ru'?'Отправка заявки':'Send Request'}</h4><p>${lang==='ru'?'Покупателям из стран СНГ на нашем сайте при просмотре каталога продукции предоставлена возможность оформления и отправки непосредственно на завод заявки о действующих ценах и о возможности приобретения интересующей продукции.':'CIS buyers can submit a request directly to the plant through the product catalog on our website.'}</p></div></div>
<div class="step-item"><div class="step-number">2</div><div class="step-content"><h4>${lang==='ru'?'Формирование программы':'Program Formation'}</h4><p>${lang==='ru'?'Ежемесячная производственная программа формируется до 15 числа месяца, предшествующего поставке, исходя из полученных запросов на поставку продукции. Поэтому запрос на следующий месяц необходимо отправить до 15 числа.':'The monthly production program is formed by the 15th of the month preceding delivery.'}</p></div></div>
<div class="step-item"><div class="step-number">3</div><div class="step-content"><h4>${lang==='ru'?'Обработка заказа':'Order Processing'}</h4><p>${lang==='ru'?'Результаты проработки направленного заказа будут Вам переданы по контактным телефонам или E-mail, которые Вы укажете в Вашей заявке.':'The results of processing your order will be communicated to you via the contact phones or email specified in your request.'}</p></div></div>
<div class="step-item"><div class="step-number">4</div><div class="step-content"><h4>${lang==='ru'?'Работа с исполнителем':'Working with Executor'}</h4><p>${lang==='ru'?'В случае если Ваш заказ принят, с Вами начинает работать конкретный исполнитель из управления по продажам в СНГ.':'If your order is accepted, a specific executor from the CIS sales department will work with you.'}</p></div></div>
</div>

<div class="info-blocks reveal" style="margin-top:50px">
<div class="info-block">
<h3>${lang==='ru'?'Условия поставки':'Delivery Terms'}</h3>
<ul>
<li>${lang==='ru'?'100% предоплата':'100% prepayment'}</li>
<li>${lang==='ru'?'Минимальный объём на металлопрокат — вагонная норма':'Minimum volume for rolled products — wagon norm'}</li>
<li>${lang==='ru'?'Специфический прокат — 300 т':'Specific rolled products — 300 t'}</li>
<li>${lang==='ru'?'Метизная продукция — машинная норма':'Metalware — machine norm'}</li>
</ul>
</div>
<div class="info-block">
<h3>${lang==='ru'?'Стандартные условия поставки':'Standard Delivery Terms'}</h3>
<ul>
<li>FOB ${lang==='ru'?'порт Санкт-Петербург':'port Saint-Petersburg'}</li>
<li>FOB ${lang==='ru'?'порт Ростов':'port Rostov'}</li>
<li>FOB ${lang==='ru'?'порт Новороссийск':'port Novorossiysk'}</li>
<li>DAP ${lang==='ru'?'граница РБ/граница сопредельного государства':'RB border / neighboring state border'}</li>
<li>FCA ${lang==='ru'?'Жлобин согласно правилам ИНКОТЕРМС 2010':'Zhlobin according to INCOTERMS 2010'}</li>
</ul>
</div>
</div>
</div>
</section>

<section class="sec sec-alt" id="anchor-online">
<div class="container">
<div class="sec-title reveal"><h2>${t('buy_online_title')}</h2><div class="line"></div><p>${t('buy_online_desc')}</p></div>
<div class="c-form reveal" style="max-width:700px;margin:0 auto">
<h3>${lang==='ru'?'Форма заявки на продукцию':'Product Request Form'}</h3>
<form onsubmit="event.preventDefault();alert('${lang==='ru'?'Заявка отправлена!':'Request sent!'}')">
<div class="fg"><label>${lang==='ru'?'Наименование организации':'Organization Name'}</label><input required></div>
<div class="fg"><label>${lang==='ru'?'Контактное лицо':'Contact Person'}</label><input required></div>
<div class="fg"><label>Email</label><input type="email" required></div>
<div class="fg"><label>${lang==='ru'?'Телефон':'Phone'}</label><input type="tel"></div>
<div class="fg"><label>${lang==='ru'?'Интересующая продукция':'Product of Interest'}</label>
<select>
<option>${t('p1t')}</option>
<option>${t('p2t')}</option>
<option>${t('p3t')}</option>
<option>${t('p4t')}</option>
<option>${t('p5t')}</option>
<option>${t('p6t')}</option>
</select>
</div>
<div class="fg"><label>${lang==='ru'?'Объём (тонн)':'Volume (tons)'}</label><input type="number" min="1"></div>
<div class="fg"><label>${lang==='ru'?'Сообщение':'Message'}</label><textarea rows="4"></textarea></div>
<button class="btn btn-p" type="submit">${lang==='ru'?'Отправить заявку':'Send Request'}</button>
</form>
</div>
</div>
</section>

</div>`;
},

suppliers: function(){
const tabs = [
{key:'tab_scrap', titleKey:'scrap_title', headerKey:'scrap_table_header', rowsKey:'scrap_rows'},
{key:'tab_ferro', titleKey:'ferro_title', headerKey:'ferro_table_header', rowsKey:'ferro_rows'},
{key:'tab_refractory', titleKey:'refractory_title', headerKey:'refractory_table_header', rowsKey:'refractory_rows'},
{key:'tab_coolant', titleKey:'coolant_title', headerKey:'coolant_table_header', rowsKey:'coolant_rows'},
{key:'tab_parts', titleKey:'parts_title', headerKey:'parts_table_header', rowsKey:'parts_rows'},
{key:'tab_electrodes', titleKey:'electrodes_title', headerKey:'electrodes_table_header', rowsKey:'electrodes_rows'}
];

return `<div class="page">
<div class="page-hero">
<div class="page-hero-inner">
<div class="breadcrumbs"><a href="index.html">${t('breadcrumb_home')}</a><span class="sep">/</span><span class="current">${t('nav_suppliers')}</span></div>
<h1>${t('sup_title')}</h1>
<p>${t('sup_sub')}</p>
</div>
</div>

<section class="sec">
<div class="container">
<div class="about-cols reveal">
<div><h3>${lang==='ru'?'О сотрудничестве':'About Cooperation'}</h3><p>${t('sup_intro')}</p><p>${t('sup_intro_p2')}</p></div>
<div><div class="info-block" style="margin:0"><h3>${lang==='ru'?'Контакты отдела закупок':'Procurement Contacts'}</h3><p>📧 zakupki@bmz.by</p><p>📞 +375 (2334) 2-00-05</p><p>🕐 ${lang==='ru'?'Пн–Пт: 08:00–17:00':'Mon–Fri: 08:00–17:00'}</p></div></div>
</div>
</div>
</section>

<section class="sec sec-alt" id="anchor-procurement">
<div class="container">
<div class="sec-title reveal"><h2>${t('sup_procurement_title')}</h2><div class="line"></div><p>${t('sup_procurement_desc')}</p></div>

<div class="procurement-tabs reveal">
${tabs.map((tab, idx) => `<button class="procurement-tab ${idx===0?'active':''}" onclick="showProcurementTab('${tab.key}', this)">${t(tab.key)}</button>`).join('')}
</div>

${tabs.map((tab, idx) => `
<div class="procurement-content ${idx===0?'active':''}" id="tab-content-${tab.key}">
<h3 class="procurement-heading">${t(tab.titleKey)}</h3>
<table class="procurement-table">
<thead>
<tr>
${t(tab.headerKey).map(h => `<th>${h}</th>`).join('')}
</tr>
</thead>
<tbody>
${t(tab.rowsKey).map(row => `
<tr>
${row.map(cell => `<td>${cell}</td>`).join('')}
</tr>
`).join('')}
</tbody>
</table>
</div>
`).join('')}
</div>
</section>

<section class="sec" id="anchor-contests">
<div class="container">
<div class="sec-title reveal"><h2>${t('sup_contests_title')}</h2><div class="line"></div><p>${t('sup_contests_desc')}</p></div>
<div class="info-blocks reveal">
<div class="info-block"><h3>${lang==='ru'?'Публикация тендеров':'Tender Publication'}</h3><p>${lang==='ru'?'Все тендеры публикуются на официальном сайте БМЗ и электронной площадке закупок. Информация доступна всем зарегистрированным поставщикам.':'All tenders are published on the official BMZ website and electronic procurement platform. Information is available to all registered suppliers.'}</p></div>
<div class="info-block"><h3>${lang==='ru'?'Сроки проведения':'Timeline'}</h3><p>${lang==='ru'?'Срок подачи заявок — от 10 рабочих дней. Результаты публикуются в течение 5 дней после окончания приёма предложений.':'Application period — from 10 business days. Results published within 5 days after submission deadline.'}</p></div>
<div class="info-block"><h3>${lang==='ru'?'Равные условия':'Equal Conditions'}</h3><p>${lang==='ru'?'Все участники конкурсных процедур имеют равные условия. Оценка предложений проводится по установленным критериям качества и цены.':'All participants have equal conditions. Proposals are evaluated based on established quality and price criteria.'}</p></div>
</div>
</div>
</section>

<section class="sec sec-alt" id="anchor-how">
<div class="container">
<div class="sec-title reveal"><h2>${t('sup_how_title')}</h2><div class="line"></div><p>${t('sup_how_desc')}</p></div>
<div class="steps-container reveal">
<div class="step-item"><div class="step-number">1</div><div class="step-content"><h4>${lang==='ru'?'Подготовка предложения':'Prepare Proposal'}</h4><p>${lang==='ru'?'Подготовьте коммерческое предложение с указанием номенклатуры, объёмов и условий поставки':'Prepare a commercial proposal with product range, volumes and delivery terms'}</p></div></div>
<div class="step-item"><div class="step-number">2</div><div class="step-content"><h4>${lang==='ru'?'Отправка заявки':'Send Application'}</h4><p>${lang==='ru'?'Направьте предложение на zakupki@bmz.by или через электронную площадку':'Send proposal to zakupki@bmz.by or via electronic platform'}</p></div></div>
<div class="step-item"><div class="step-number">3</div><div class="step-content"><h4>${lang==='ru'?'Аккредитация':'Accreditation'}</h4><p>${lang==='ru'?'Пройдите процедуру проверки документов, лицензий и сертификатов':'Pass document, license and certificate verification procedure'}</p></div></div>
<div class="step-item"><div class="step-number">4</div><div class="step-content"><h4>${lang==='ru'?'Включение в реестр':'Register Inclusion'}</h4><p>${lang==='ru'?'Получите уведомление о включении в реестр поставщиков БМЗ':'Receive notification of inclusion in BMZ supplier register'}</p></div></div>
<div class="step-item"><div class="step-number">5</div><div class="step-content"><h4>${lang==='ru'?'Участие в тендерах':'Tender Participation'}</h4><p>${lang==='ru'?'Участвуйте в конкурсных процедурах на общих основаниях':'Participate in competitive procedures on equal terms'}</p></div></div>
</div>
<div class="contact-block reveal">
<div class="contact-info-grid">
<div><strong>📧</strong> ${t('sup_how_email')}</div>
<div><strong>📞</strong> ${t('sup_how_phone')}</div>
<div><strong>🕐</strong> ${t('sup_how_time')}</div>
</div>
</div>
</div>
</section>

<section class="sec" id="anchor-code">
<div class="container">
<div class="sec-title reveal"><h2>${t('sup_code_title')}</h2><div class="line"></div><p>${t('sup_code_desc')}</p></div>
<div class="values-grid reveal">
<div class="value-card"><h4>${lang==='ru'?'Трудовое законодательство':'Labor Laws'}</h4><p>${lang==='ru'?'Соблюдение прав работников и условий труда':'Compliance with workers rights and working conditions'}</p></div>
<div class="value-card"><h4>${lang==='ru'?'Экология':'Ecology'}</h4><p>${lang==='ru'?'Ответственное отношение к окружающей среде':'Responsible attitude to the environment'}</p></div>
<div class="value-card"><h4>${lang==='ru'?'Антикоррупция':'Anti-corruption'}</h4><p>${lang==='ru'?'Нулевая толерантность к коррупционным практикам':'Zero tolerance for corrupt practices'}</p></div>
<div class="value-card"><h4>${lang==='ru'?'Конфиденциальность':'Confidentiality'}</h4><p>${lang==='ru'?'Защита коммерческой информации партнёров':'Protection of partners commercial information'}</p></div>
<div class="value-card"><h4>${lang==='ru'?'Честная конкуренция':'Fair Competition'}</h4><p>${lang==='ru'?'Равные условия для всех участников рынка':'Equal conditions for all market participants'}</p></div>
<div class="value-card"><h4>${lang==='ru'?'Качество':'Quality'}</h4><p>${lang==='ru'?'Высокие стандарты качества поставляемой продукции':'High standards of supplied product quality'}</p></div>
</div>
</div>
</section>
</div>`;
},

news: function(){
return `<div class="page">
<div class="page-hero">
<div class="page-hero-inner">
<div class="breadcrumbs"><a href="index.html">${t('breadcrumb_home')}</a><span class="sep">/</span><span class="current">${t('nav_press')}</span></div>
<h1>${t('press_title')}</h1>
<p>${t('press_sub')}</p>
</div>
</div>
<section class="sec">
<div class="container">
<div class="press-tabs reveal">
<button class="press-tab active" onclick="filterNews('all',this)">${t('press_tab_all')}</button>
<button class="press-tab" onclick="filterNews('news',this)">${t('press_tab_news')}</button>
<button class="press-tab" onclick="filterNews('photo',this)">${t('press_tab_photo')}</button>
<button class="press-tab" onclick="filterNews('paper',this)">${t('press_tab_paper')}</button>
<button class="press-tab" onclick="filterNews('video',this)">${t('press_tab_video')}</button>
</div>
<div id="newsContent"></div>
</div>
</section>
<section class="sec sec-alt">
<div class="container">
<div class="sec-title reveal"><h2>${t('awards_title')}</h2><div class="line"></div><p>${t('awards_sub')}</p></div>
<div class="awards-carousel reveal">
<div class="carousel-track" id="carouselTrack">
<div class="award-card"><h4>${t('award1_title')}</h4><p>${t('award1_desc')}</p></div>
<div class="award-card"><h4>${t('award2_title')}</h4><p>${t('award2_desc')}</p></div>
<div class="award-card"><h4>${t('award3_title')}</h4><p>${t('award3_desc')}</p></div>
<div class="award-card"><h4>${t('award4_title')}</h4><p>${t('award4_desc')}</p></div>
<div class="award-card"><h4>${t('award5_title')}</h4><p>${t('award5_desc')}</p></div>
</div>
<div class="carousel-controls">
<button class="carousel-btn prev" onclick="moveCarousel(-1)">←</button>
<button class="carousel-btn next" onclick="moveCarousel(1)">→</button>
</div>
</div>
</div>
</section>
</div>`;
},

career: function(){
const professions = [
{key:'prof_steelmaker', descKey:'prof_steelmaker_desc'},
{key:'prof_roller', descKey:'prof_roller_desc'},
{key:'prof_engineer', descKey:'prof_engineer_desc'},
{key:'prof_electrician', descKey:'prof_electrician_desc'},
{key:'prof_qc', descKey:'prof_qc_desc'},
{key:'prof_crane', descKey:'prof_crane_desc'},
{key:'prof_repair', descKey:'prof_repair_desc'},
{key:'prof_driver', descKey:'prof_driver_desc'},
{key:'prof_it', descKey:'prof_it_desc'},
{key:'prof_logist', descKey:'prof_logist_desc'},
{key:'prof_welder', descKey:'prof_welder_desc'},
{key:'prof_foundry', descKey:'prof_foundry_desc'},
{key:'prof_chemist', descKey:'prof_chemist_desc'},
{key:'prof_mechanic', descKey:'prof_mechanic_desc'},
{key:'prof_gas_cutter', descKey:'prof_gas_cutter_desc'},
{key:'prof_turner', descKey:'prof_turner_desc'},
{key:'prof_rope_winder', descKey:'prof_rope_winder_desc'}
];

const vacancies = [
{prof:'vac_electro', tag:lang==='ru'?'Энергетика':'Energy'},
{prof:'vac_smelter', tag:lang==='ru'?'Производство':'Production'},
{prof:'vac_turner', tag:lang==='ru'?'Механообработка':'Machining'},
{prof:'vac_winder', tag:lang==='ru'?'Метизное':'Metalware'},
{prof:'vac_cutter', tag:lang==='ru'?'Производство':'Production'},
{prof:'vac_crane', tag:lang==='ru'?'Производство':'Production'},
{prof:'vac_machinist', tag:lang==='ru'?'Механообработка':'Machining'}
];

const benefits = [
{key:'benefit_salary', descKey:'benefit_salary_desc'},
{key:'benefit_social', descKey:'benefit_social_desc'},
{key:'benefit_growth', descKey:'benefit_growth_desc'},
{key:'benefit_training', descKey:'benefit_training_desc'},
{key:'benefit_sport', descKey:'benefit_sport_desc'},
{key:'benefit_meals', descKey:'benefit_meals_desc'}
];

return `<div class="page">
<div class="page-hero">
<div class="page-hero-inner">
<div class="breadcrumbs"><a href="index.html">${t('breadcrumb_home')}</a><span class="sep">/</span><span class="current">${t('nav_career')}</span></div>
<h1>${t('career_title')}</h1>
<p>${t('career_sub')}</p>
</div>
</div>
<section class="sec">
<div class="container">
<div class="about-cols reveal">
<div><h3>${lang==='ru'?'О работе на БМЗ':'About Working at BMZ'}</h3><p>${t('career_intro')}</p><p>${t('career_intro_p2')}</p></div>
<div><div class="info-block" style="margin:0"><h3>${lang==='ru'?'Почему БМЗ?':'Why BMZ?'}</h3><p>✓ ${lang==='ru'?'Стабильность':'Stability'}</p><p>✓ ${lang==='ru'?'Соцпакет':'Social package'}</p><p>✓ ${lang==='ru'?'Карьерный рост':'Career growth'}</p><p>✓ ${lang==='ru'?'Современное производство':'Modern production'}</p></div></div>
</div>
</div>
</section>
<section class="sec sec-alt">
<div class="container">
<div class="sec-title reveal"><h2>${t('career_profs_title')}</h2><div class="line"></div><p>${t('career_profs_sub')}</p></div>
<div class="professions-grid reveal">
${professions.map(p=>`<div class="profession-card"><h4>${t(p.key)}</h4><p>${t(p.descKey)}</p></div>`).join('')}
</div>
</div>
</section>
<section class="sec">
<div class="container">
<div class="sec-title reveal"><h2>${t('career_vacancies_title')}</h2><div class="line"></div><p>${t('career_vacancies_sub')}</p></div>
<div class="vacancies-grid reveal">
${vacancies.map(v=>`<div class="vacancy-card">
<div class="vacancy-header"><span class="vacancy-tag">${v.tag}</span><span class="vacancy-type">${t('vac_fulltime')}</span></div>
<h4>${t(v.prof)}</h4>
<div class="vacancy-meta"><span>📍 ${t('vac_location')}</span><span>💼 ${t('vac_fulltime')}</span></div>
<p>${t(v.prof+'_desc')}</p>
<div class="vacancy-salary">${t('vac_salary')}</div>
<button class="btn btn-p btn-sm" onclick="openApplication('${t(v.prof)}')">${t('vac_apply')}</button>
</div>`).join('')}
</div>
</div>
</section>
<section class="sec sec-alt">
<div class="container">
<div class="sec-title reveal"><h2>${t('career_benefits_title')}</h2><div class="line"></div><p>${t('career_benefits_sub')}</p></div>
<div class="values-grid reveal">
${benefits.map(b=>`<div class="value-card"><h4>${t(b.key)}</h4><p>${t(b.descKey)}</p></div>`).join('')}
</div>
</div>
</section>
</div>`;
},

contacts: function(){
return `<div class="page">
<div class="page-hero">
<div class="page-hero-inner">
<div class="breadcrumbs"><a href="index.html">${t('breadcrumb_home')}</a><span class="sep">/</span><span class="current">${t('nav_contacts')}</span></div>
<h1>${t('con_title')}</h1>
<p>${t('con_sub')}</p>
</div>
</div>
<section class="sec">
<div class="container">
<div class="contact-grid">
<div>
<div class="map-wrap">
<iframe src="https://yandex.ru/map-widget/v1/?um=constructor&source=constructor&ll=30.0120%2C52.8720&z=16&pt=30.0120,52.8720,pm2rdm&text=ул.+Промышленная,+37,+Жлобин" width="100%" height="100%" frameborder="0" allowfullscreen style="border:0;filter:grayscale(0.3) contrast(1.05) brightness(0.9)"></iframe>
</div>
<a class="route-btn" href="https://yandex.ru/maps/?rtext=52.8927,30.0250~52.8720,30.0120&rtt=auto" target="_blank" rel="noopener">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
${t('con_route')}
</a>
</div>
<div class="c-form reveal">
<h3>${t('con_form_t')}</h3>
<form id="contactForm" onsubmit="submitForm(event)">
<div class="fg"><label>${t('con_name')}</label><input required id="formName"></div>
<div class="fg"><label>${t('con_email')}</label><input type="email" required id="formEmail"></div>
<div class="fg"><label>${t('con_subj')}</label>
<select id="formSubject">
<option>${lang==='ru'?'Общий вопрос':'General question'}</option>
<option>${lang==='ru'?'Заказ':'Order'}</option>
<option>${lang==='ru'?'Сотрудничество':'Cooperation'}</option>
<option>${lang==='ru'?'Пресса':'Press'}</option>
<option>${lang==='ru'?'Другое':'Other'}</option>
</select>
</div>
<div class="fg"><label>${t('con_msg')}</label><textarea required id="formMsg"></textarea></div>
<button class="btn btn-p" type="submit">${t('con_send')}</button>
<div class="form-success" id="formSuccess">${t('form_success')}</div>
</form>
</div>
</div>
<div class="c-info reveal" style="margin-top:50px">
<div class="c-item"><div class="c-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div><h4>${t('con_addr_t')}</h4><p>${t('con_addr')}</p></div></div>
<div class="c-item"><div class="c-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0122 16.92z"/></svg></div><div><h4>${t('con_phone_t')}</h4><a href="tel:+375233420000">+375 (2334) 2-00-00</a></div></div>
<div class="c-item"><div class="c-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><h4>${t('con_email_t')}</h4><a href="mailto:info@bmz.by">info@bmz.by</a></div></div>
<div class="c-item"><div class="c-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg></div><div><h4>${t('con_time_t')}</h4><p>${t('con_time')}</p></div></div>
</div>
</div>
</section>
</div>`;
}
};

// ===== РЕНДЕР =====
function renderPage(page){
currentPage = page;
const app = document.getElementById('app');
if(!app) return;
if(PAGES[page]) app.innerHTML = PAGES[page]();
renderHeader();
renderFooter();
setTimeout(() => {
initReveal();
initCycle();
initPlantMap();
initWorldMap();
initGlow();
initLiveCounter();
initSparks();
initMagnetic();
initCatalogFilters();
initStatCounters();
initProcurementTabs();
if(page === 'news') renderNews('all');
}, 50);
}

// ===== HEADER =====
function renderHeader(){
const hdr = document.getElementById('hdr');
if(!hdr) return;
const navStructure = [
{key:'home',label:'nav_home',href:'index.html'},
{key:'about',label:'nav_about',href:'about.html',children:[['m_about_general','about.html'],['m_about_leadership','about.html'],['m_about_sustainable','about.html'],['m_about_chronology','about.html']]},
{key:'products',label:'nav_products',href:'catalog.html'},
{key:'buyers',label:'nav_buyers',href:'buyers.html',children:[
['m_buyer_quality','buyers.html#anchor-quality'],
['m_buyer_cert','buyers.html#anchor-cert'],
['m_buyer_credit','buyers.html#anchor-credit'],
['m_buyer_order','buyers.html#anchor-order'],
['m_buyer_online','buyers.html#anchor-online']
]},
{key:'suppliers',label:'nav_suppliers',href:'suppliers.html',children:[
['m_supplier_procurement','suppliers.html#anchor-procurement'],
['m_supplier_contests','suppliers.html#anchor-contests'],
['m_supplier_code','suppliers.html#anchor-code']
]},
{key:'press',label:'nav_press',href:'news.html',children:[['m_press_news','news.html'],['m_press_photo','news.html'],['m_press_paper','news.html'],['m_press_video','news.html']]},
{key:'career',label:'nav_career',href:'career.html'},
{key:'exchange',label:'nav_exchange',href:'https://www.butb.by/shedule/metalloproduktsiya/',external:true},
{key:'contacts',label:'nav_contacts',href:'contacts.html',children:[['m_contacts_info','contacts.html'],['m_contacts_buyer','contacts.html'],['m_contacts_supplier','contacts.html'],['m_contacts_press','contacts.html'],['m_contacts_appeals','contacts.html']]}
];
let navHTML = '';
navStructure.forEach(item => {
const isActive = item.key === currentPage;
const targetAttr = item.external ? ' target="_blank" rel="noopener"' : '';
navHTML += '<div class="nav-item">';
navHTML += '<a class="nav-link'+(isActive?' active':'')+'" href="'+item.href+'"'+targetAttr+'>'+t(item.label)+(item.children?' <span class="arrow">▼</span>':'')+'</a>';
if(item.children){
navHTML += '<div class="nav-dropdown">';
item.children.forEach(([ck,hk]) => { navHTML += '<a href="'+hk+'">'+t(ck)+'</a>'; });
navHTML += '</div>';
}
navHTML += '</div>';
});
hdr.innerHTML = '<div class="hdr-in"><div class="logo" onclick="location.href=\'index.html\'"><img class="logo-svg" src="images/bmz-logo.png" alt="БМЗ"><div class="logo-text">ОАО <em>«БМЗ»</em></div></div><nav class="nav-bar" id="nav">'+navHTML+'</nav><div class="burger-menu" id="burgerMenu" onclick="toggleMobileMenu()"><span></span><span></span><span></span></div><div class="hdr-acts"><div class="search-wrap"><button class="hdr-btn search-btn" onclick="toggleSearch()" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></button><div class="search-dropdown" id="searchDropdown"><div class="search-dropdown-header">'+t('search_label')+'</div><div class="search-inline-wrap"><input id="searchInput" type="text" placeholder="'+t('search_ph')+'" oninput="doSearch(this.value)"><button type="button" onclick="doSearch(document.getElementById(\'searchInput\').value)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></button></div><div class="search-results" id="searchResults"></div></div></div><button class="hdr-btn lang-sw" onclick="toggleLang()"><span class="cur" id="langCur">'+lang.toUpperCase()+'</span><span style="color:var(--tx3)">/</span><span class="alt" id="langAlt">'+(lang==='ru'?'en':'ru').toUpperCase()+'</span></button></div></div>';
}

// ===== FOOTER =====
function renderFooter(){
const ftr = document.getElementById('footer');
if(!ftr) return;
ftr.innerHTML = '<div class="container"><div class="ftr-grid"><div class="ftr-col"><div class="ftr-brand" onclick="location.href=\'index.html\'"><img src="images/bmz-logo.png" alt="БМЗ"><div class="ftr-brand-name">ОАО <em>«БМЗ»</em></div></div><p class="ftr-desc">'+t('ftr_desc')+'</p></div><div class="ftr-col"><h4>'+t('ftr_nav')+'</h4><a href="index.html">'+t('nav_home')+'</a><a href="about.html">'+t('nav_about')+'</a><a href="catalog.html">'+t('nav_products')+'</a><a href="news.html">'+t('nav_press')+'</a></div><div class="ftr-col"><h4>'+t('ftr_biz')+'</h4><a href="buyers.html">'+t('nav_buyers')+'</a><a href="suppliers.html">'+t('nav_suppliers')+'</a><a href="career.html">'+t('nav_career')+'</a></div><div class="ftr-col"><h4>'+t('ftr_contacts')+'</h4><p>'+t('ftr_addr')+'</p><p><a href="tel:+375233420000">'+t('ftr_phone')+'</a></p><p><a href="mailto:info@bmz.by">'+t('ftr_email')+'</a></p></div></div><div class="ftr-bot">© 2026 ОАО «Белорусский металлургический завод». '+t('ftr_rights')+'</div></div>';
}

// ===== LANGUAGE =====
function toggleLang(){
lang = lang === 'ru' ? 'en' : 'ru';
renderPage(currentPage);
}

// ===== MOBILE MENU =====
function toggleMobileMenu(){
const nav = document.getElementById('nav');
const burger = document.getElementById('burgerMenu');
if(nav && burger){ nav.classList.toggle('mobile-open'); burger.classList.toggle('active'); }
}

// ===== SEARCH =====
function toggleSearch(){
const dd = document.getElementById('searchDropdown');
if(!dd) return;
dd.classList.toggle('open');
if(dd.classList.contains('open')){
setTimeout(() => { const i = document.getElementById('searchInput'); if(i){ i.focus(); i.value = ''; } }, 100);
const r = document.getElementById('searchResults'); if(r) r.innerHTML = '';
} else {
const i = document.getElementById('searchInput'); if(i) i.value = '';
const r = document.getElementById('searchResults'); if(r) r.innerHTML = '';
}
}
document.addEventListener('click', e => {
const dd = document.getElementById('searchDropdown');
const sw = e.target.closest('.search-wrap');
if(!sw && dd && dd.classList.contains('open')) dd.classList.remove('open');
});

function doSearch(q){
const res = document.getElementById('searchResults');
if(!res) return;
res.innerHTML = '';
if(!q || !q.trim()) return;
const ql = q.toLowerCase().trim();
const items = [];
const seen = new Set();
Object.keys(T[lang]).forEach(k => {
const v = T[lang][k];
if(typeof v === 'string' && v.toLowerCase().includes(ql) && k.length > 3 && !k.startsWith('m_')){
let pg = 'index.html';
if(k === 'nav_home') pg = 'index.html';
else if(k === 'nav_about') pg = 'about.html';
else if(k === 'nav_products') pg = 'catalog.html';
else if(k === 'nav_buyers') pg = 'buyers.html';
else if(k === 'nav_suppliers') pg = 'suppliers.html';
else if(k === 'nav_press') pg = 'news.html';
else if(k === 'nav_career') pg = 'career.html';
else if(k === 'nav_exchange') pg = 'https://www.butb.by/shedule/metalloproduktsiya/';
else if(k === 'nav_contacts') pg = 'contacts.html';
else if(k.match(/^n[1-3][tfd]/)) pg = 'index.html';
else if(k.match(/^[pt]\d/)) pg = 'catalog.html';
else if(k.startsWith('buy_')) pg = 'buyers.html';
else if(k.startsWith('sup_')) pg = 'suppliers.html';
else if(k.startsWith('v')) pg = 'news.html';
else if(k.startsWith('pr')) pg = 'news.html';
else if(k.match(/^[tf]\d|^ab_/)) pg = 'about.html';
else if(k.startsWith('con_')) pg = 'contacts.html';
else if(k.startsWith('cycle') || k.startsWith('award') || k.startsWith('export') || k.startsWith('plant') || k.startsWith('live') || k.startsWith('counter') || k.startsWith('about') || k.startsWith('stat') || k.startsWith('value') || k.startsWith('struct') || k.startsWith('faq') || k.startsWith('calc') || k.startsWith('career') || k.startsWith('prof') || k.startsWith('vac') || k.startsWith('benefit')) pg = 'about.html';
else if(k.startsWith('form')) pg = 'contacts.html';
const cleanTitle = v.replace(/<[^>]*>/g,'').substring(0,100);
const key = cleanTitle + '|' + pg;
if(!seen.has(key)){ seen.add(key); items.push({page:pg, title:cleanTitle}); }
}
});
const unique = items.slice(0,8);
if(!unique.length){ res.innerHTML = '<div class="search-empty">'+t('no_results')+'</div>'; return; }
res.innerHTML = unique.map(i => {
const isExternal = i.page.startsWith('http');
const targetAttr = isExternal ? ' target="_blank" rel="noopener"' : '';
return '<a href="'+i.page+'"'+targetAttr+'><div class="sr-title">'+i.title+'</div></a>';
}).join('');
}

// ===== NEWS MODAL =====
function openNewsModal(id){
const data = {
1:{cat:t('n1c'), date:lang==='ru'?'02 октября 2026':'October 02, 2026', title:t('n1t'), text:t('n1f'), bg:'linear-gradient(135deg,#2a1a10,#1a0a05)'},
2:{cat:t('n2c'), date:lang==='ru'?'28 сентября 2026':'September 28, 2026', title:t('n2t'), text:t('n2f'), bg:'linear-gradient(135deg,#0a1a2a,#050a15)'},
3:{cat:t('n3c'), date:lang==='ru'?'19 сентября 2026':'September 19, 2026', title:t('n3t'), text:t('n3f'), bg:'linear-gradient(135deg,#1a2a1a,#0a150a)'}
};
const n = data[id]; if(!n) return;
document.getElementById('newsModalImg').style.background = n.bg;
document.getElementById('newsModalCat').textContent = n.cat;
document.getElementById('newsModalDate').textContent = n.date;
document.getElementById('newsModalTitle').textContent = n.title;
document.getElementById('newsModalText').innerHTML = n.text;
document.getElementById('newsModal').classList.add('open');
document.body.style.overflow = 'hidden';
}
function closeNewsModal(){document.getElementById('newsModal').classList.remove('open');document.body.style.overflow=''}
document.addEventListener('keydown', e => {if(e.key==='Escape') closeNewsModal()});

// ===== APPLICATION MODAL =====
function openApplication(position){
document.getElementById('applicationPosition').textContent = position;
document.getElementById('applicationModal').classList.add('open');
document.body.style.overflow = 'hidden';
}
function closeApplication(){
document.getElementById('applicationModal').classList.remove('open');
document.body.style.overflow = '';
}
function handlePhoto(input){
if(input.files && input.files[0]) document.getElementById('photoLabel').textContent = input.files[0].name;
}
function refreshCaptcha(){
const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
let code = '';
for(let i=0;i<4;i++) code += chars.charAt(Math.floor(Math.random()*chars.length));
document.querySelector('.captcha-image').textContent = code;
document.getElementById('captchaInput').value = '';
}
function submitApplication(e){
e.preventDefault();
document.getElementById('applicationSuccess').classList.add('show');
document.getElementById('applicationForm').reset();
document.getElementById('photoLabel').innerHTML = t('app_photo_hint');
setTimeout(() => { document.getElementById('applicationSuccess').classList.remove('show'); closeApplication(); }, 3000);
}

// ===== SCROLL =====
window.addEventListener('scroll', () => {
const hdr = document.getElementById('hdr');
if(hdr) hdr.classList.toggle('solid', window.scrollY > 60);
const btn = document.getElementById('backTop');
if(btn) btn.classList.toggle('visible', window.scrollY > 400);
const bar = document.getElementById('scrollProgress');
if(bar){
const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
bar.style.width = (winScroll/height)*100 + '%';
}
});
function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'})}

// ===== REVEAL =====
function initReveal(){
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
}, {threshold: 0.1});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== STAT COUNTERS =====
function initStatCounters(){
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
const el = entry.target;
const target = parseFloat(el.dataset.target);
if(isNaN(target)) return;
const duration = 2000;
const start = performance.now();
const animate = (now) => {
const progress = Math.min((now-start)/duration, 1);
const eased = 1 - Math.pow(1-progress, 3);
const current = target * eased;
if(target % 1 !== 0) el.textContent = current.toFixed(1);
else el.textContent = Math.round(current).toLocaleString();
if(progress < 1) requestAnimationFrame(animate);
else el.textContent = target % 1 !== 0 ? target.toFixed(1) : target.toLocaleString();
};
requestAnimationFrame(animate);
observer.unobserve(el);
}
});
}, {threshold: 0.3});
document.querySelectorAll('.stat-number[data-target]').forEach(el => observer.observe(el));
}

// ===== LIVE COUNTER =====
function initLiveCounter(){
const steelEl = document.getElementById('counterSteel');
const rebarEl = document.getElementById('counterRebar');
const exportEl = document.getElementById('counterExport');
const countriesEl = document.getElementById('counterCountries');
if(!steelEl) return;
let steel = 1847523, rebar = 2847392000, exp = 623847, countries = 73;
steelEl.textContent = Math.floor(steel).toLocaleString('ru-RU');
rebarEl.textContent = Math.floor(rebar).toLocaleString('ru-RU');
exportEl.textContent = Math.floor(exp).toLocaleString('ru-RU');
countriesEl.textContent = countries;
function update(){
steel += Math.random()*2.5+0.5;
rebar += Math.random()*4000+1000;
exp += Math.random()*0.8+0.2;
steelEl.textContent = Math.floor(steel).toLocaleString('ru-RU');
rebarEl.textContent = Math.floor(rebar).toLocaleString('ru-RU');
exportEl.textContent = Math.floor(exp).toLocaleString('ru-RU');
countriesEl.textContent = countries;
}
setInterval(update, 100);
}

// ===== SPARKS =====
function initSparks(){
const hero = document.querySelector('.hero');
if(!hero) return;
const canvas = document.createElement('canvas');
canvas.style.cssText = 'position:absolute;inset:0;z-index:1;pointer-events:none;opacity:0.6';
hero.appendChild(canvas);
const ctx = canvas.getContext('2d');
let w, h, sparks = [];
function resize(){w = canvas.width = hero.offsetWidth; h = canvas.height = hero.offsetHeight}
resize();
window.addEventListener('resize', resize);
class Spark {
constructor(){this.reset()}
reset(){this.x = Math.random()*w; this.y = h+10; this.vx = (Math.random()-0.5)*2; this.vy = -(Math.random()*3+2); this.life = 1; this.decay = Math.random()*0.02+0.01; this.size = Math.random()*2+1; this.color = Math.random()>0.5?'#f07840':'#f5c518'}
update(){this.x += this.vx; this.y += this.vy; this.vy += 0.05; this.life -= this.decay; if(this.life <= 0) this.reset()}
draw(){ctx.globalAlpha = this.life; ctx.fillStyle = this.color; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); ctx.fill(); ctx.shadowBlur = 10; ctx.shadowColor = this.color}
}
for(let i = 0; i < 40; i++) sparks.push(new Spark());
function animate(){ctx.clearRect(0,0,w,h); ctx.shadowBlur = 0; sparks.forEach(s => {s.update(); s.draw()}); requestAnimationFrame(animate)}
animate();
}

// ===== MAGNETIC =====
function initMagnetic(){
document.querySelectorAll('.btn-p,.btn-yl,.route-btn').forEach(btn => {
btn.addEventListener('mousemove', e => {
const rect = btn.getBoundingClientRect();
btn.style.transform = `translate(${(e.clientX-rect.left-rect.width/2)*0.2}px,${(e.clientY-rect.top-rect.height/2)*0.2}px)`;
});
btn.addEventListener('mouseleave', () => {btn.style.transform = 'translate(0,0)'});
});
}

// ===== CYCLE =====
function initCycle(){
const steps = document.querySelectorAll('.cycle-step');
const detail = document.getElementById('cycleDetail');
if(!steps.length || !detail) return;
const data = {
1:{title:t('cycle1_title'), desc:t('cycle1_desc')},
2:{title:t('cycle2_title'), desc:t('cycle2_desc')},
3:{title:t('cycle3_title'), desc:t('cycle3_desc')},
4:{title:t('cycle4_title'), desc:t('cycle4_desc')},
5:{title:t('cycle5_title'), desc:t('cycle5_desc')}
};
steps.forEach(step => {
step.addEventListener('click', () => {
steps.forEach(s => s.classList.remove('active'));
step.classList.add('active');
const id = step.dataset.step;
document.getElementById('cycleTitle').textContent = data[id].title;
document.getElementById('cycleDesc').textContent = data[id].desc;
detail.style.animation = 'none';
detail.offsetHeight;
detail.style.animation = 'fadeUp 0.4s ease';
});
});
}

// ===== GLOW =====
function initGlow(){
document.querySelectorAll('.prod-card,.news-card,.info-block,.stat-card-interactive,.value-card,.structure-card,.profession-card,.vacancy-card').forEach(card => {
card.addEventListener('mousemove', e => {
const rect = card.getBoundingClientRect();
card.style.setProperty('--mouse-x', ((e.clientX-rect.left)/rect.width)*100+'%');
card.style.setProperty('--mouse-y', ((e.clientY-rect.top)/rect.height)*100+'%');
});
});
}

// ===== PLANT MAP =====
function initPlantMap(){
const objects = document.querySelectorAll('.plant-object');
const tooltip = document.getElementById('plantTooltip');
const mapContainer = document.querySelector('.plant-map');
if(!objects.length || !tooltip || !mapContainer) return;
objects.forEach(obj => {
obj.addEventListener('mouseenter', () => {
tooltip.innerHTML = '<strong>'+obj.getAttribute('data-name')+'</strong>'+obj.getAttribute('data-desc');
tooltip.classList.add('show');
});
obj.addEventListener('mousemove', e => {
const rect = mapContainer.getBoundingClientRect();
tooltip.style.left = (e.clientX-rect.left+15)+'px';
tooltip.style.top = (e.clientY-rect.top-30)+'px';
});
obj.addEventListener('mouseleave', () => {tooltip.classList.remove('show')});
});
}

// ===== WORLD MAP =====
function initWorldMap(){
const dots = document.querySelectorAll('.map-dot,.map-dot-home');
const tooltip = document.getElementById('mapTooltip');
const mapContainer = document.querySelector('.world-map');
if(!dots.length || !tooltip || !mapContainer) return;
dots.forEach(dot => {
dot.addEventListener('mouseenter', () => {
tooltip.textContent = dot.getAttribute('data-country');
tooltip.classList.add('show');
});
dot.addEventListener('mousemove', e => {
const rect = mapContainer.getBoundingClientRect();
tooltip.style.left = (e.clientX-rect.left+15)+'px';
tooltip.style.top = (e.clientY-rect.top-30)+'px';
});
dot.addEventListener('mouseleave', () => {tooltip.classList.remove('show')});
});
}

// ===== CAROUSEL =====
let carouselPos = 0;
function moveCarousel(dir){
const track = document.getElementById('carouselTrack');
if(!track) return;
const cardWidth = 324;
const maxPos = track.children.length - Math.floor(track.parentElement.offsetWidth/cardWidth);
carouselPos = Math.max(0, Math.min(carouselPos+dir, maxPos));
track.style.transform = `translateX(-${carouselPos*cardWidth}px)`;
}

// ===== CATALOG FILTERS =====
function initCatalogFilters(){
document.querySelectorAll('.catalog-filter').forEach(btn => {
btn.addEventListener('click', () => {
document.querySelectorAll('.catalog-filter').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
const cat = btn.dataset.cat;
document.querySelectorAll('.prod-card').forEach(card => {
if(cat === 'all' || card.dataset.cat === cat){
card.classList.remove('hidden');
card.classList.add('fade-in');
setTimeout(() => card.classList.remove('fade-in'), 400);
} else { card.classList.add('hidden'); }
});
});
});
}

// ===== PROCUREMENT TABS =====
function initProcurementTabs(){
const tabs = document.querySelectorAll('.procurement-tab');
if(!tabs.length) return;
tabs.forEach(tab => {
tab.addEventListener('click', () => {
const target = tab.getAttribute('data-target');
tabs.forEach(t => t.classList.remove('active'));
tab.classList.add('active');
document.querySelectorAll('.procurement-content').forEach(c => c.classList.remove('active'));
document.getElementById('tab-content-'+target).classList.add('active');
});
});
}

function showProcurementTab(tabKey, btn){
document.querySelectorAll('.procurement-tab').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
document.querySelectorAll('.procurement-content').forEach(c => c.classList.remove('active'));
document.getElementById('tab-content-'+tabKey).classList.add('active');
}

// ===== NEWS =====
const pressItems = [
{id:1,type:'news',catKey:'n1c',date:'02.10.2026',titleKey:'pr1t',descKey:'pr1d',full:'<p>По итогам 2025 года завод увеличил экспортные поставки на 12%.</p>'},
{id:2,type:'news',catKey:'n2c',date:'28.09.2026',titleKey:'pr2t',descKey:'pr2d',full:'<p>Выпуск стали составил 1,18 млн тонн.</p>'},
{id:3,type:'news',catKey:'n3c',date:'19.09.2026',titleKey:'pr3t',descKey:'pr3d',full:'<p>Проект включает установку новых газоочистных сооружений.</p>'},
{id:4,type:'news',catKey:'n1c',date:'10.09.2026',titleKey:'pr4t',descKey:'pr4d',full:'<p>Центр оснащён современными тренажёрами.</p>'},
{id:5,type:'photo',catKey:'n1c',date:'05.09.2026',titleKey:'pr5t',descKey:'pr5d'},
{id:6,type:'photo',catKey:'n1c',date:'01.09.2026',titleKey:'pr6t',descKey:'pr6d'},
{id:7,type:'photo',catKey:'n1c',date:'25.08.2026',titleKey:'pr7t',descKey:'pr7d'},
{id:8,type:'paper',catKey:'n1c',date:'15.10.2026',titleKey:'pr8t',descKey:'pr8d'},
{id:9,type:'paper',catKey:'n1c',date:'15.09.2026',titleKey:'pr9t',descKey:'pr9d'},
{id:10,type:'paper',catKey:'n1c',date:'15.08.2026',titleKey:'pr10t',descKey:'pr10d'},
{id:11,type:'video',catKey:'n1c',date:'01.10.2026',titleKey:'pr11t',descKey:'pr11d'},
{id:12,type:'video',catKey:'n1c',date:'20.09.2026',titleKey:'pr12t',descKey:'pr12d'}
];

function renderNews(filter){
const container = document.getElementById('newsContent');
if(!container) return;
const filtered = filter === 'all' ? pressItems : pressItems.filter(i => i.type === filter);
if(filter === 'photo'){
container.innerHTML = '<div class="gallery-grid">'+filtered.map((i,idx)=>{
const colors = ['#2a1a10','#0a1a2a','#1a2a1a','#2a2a1a','#1a1a2a','#2a1a2a'];
return '<div class="gallery-item reveal" style="background:linear-gradient(135deg,'+colors[idx%6]+',#0a0a0a)"><div class="gallery-item-label">'+t(i.titleKey)+'<br><small style="color:var(--tx3);font-size:.75rem">'+i.date+'</small></div></div>';
}).join('')+'</div>';
} else if(filter === 'paper'){
container.innerHTML = '<div class="newspaper-grid">'+filtered.map((i,idx)=>{
const grads = ['linear-gradient(135deg,#2a1a10,#1a0a05)','linear-gradient(135deg,#1a1a2a,#0a0a15)','linear-gradient(135deg,#2a2a1a,#15150a)'];
return '<div class="newspaper-card reveal"><div class="newspaper-cover" style="background:'+grads[idx%3]+'"><div class="newspaper-cover-text">МЕТАЛЛУРГ<small>'+i.date+'</small></div></div><div class="newspaper-body"><h4>'+t(i.titleKey)+'</h4><p>'+t(i.descKey)+'</p></div></div>';
}).join('')+'</div>';
} else if(filter === 'video'){
container.innerHTML = '<div class="gallery-grid">'+filtered.map(i=>'<div class="gallery-item reveal" style="background:linear-gradient(135deg,#1a0a1a,#0a0a0a);display:flex;align-items:center;justify-content:center"><div style="width:60px;height:60px;border:3px solid var(--pr);border-radius:50%;display:flex;align-items:center;justify-content:center"><svg width="24" height="24" viewBox="0 0 24 24" fill="var(--pr)"><polygon points="8,5 19,12 8,19"/></svg></div><div class="gallery-item-label">'+t(i.titleKey)+'<br><small style="color:var(--tx3);font-size:.75rem">'+i.date+'</small></div></div>').join('')+'</div>';
} else {
container.innerHTML = '<div class="press-list">'+filtered.map(i=>{
const day = i.date.split('.')[0];
return '<div class="press-item reveal" onclick="openNewsModal('+i.id+')"><div class="press-item-date"><div class="day">'+day+'</div><div class="mon">'+(lang==='ru'?'нов':'news')+'</div></div><div><div class="item-type">'+t(i.catKey)+'</div><h4>'+t(i.titleKey)+'</h4><p>'+t(i.descKey)+'</p></div></div>';
}).join('')+'</div>';
}
setTimeout(() => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
}, {threshold: 0.1});
container.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}, 50);
}

function filterNews(filter, btn){
document.querySelectorAll('.press-tab').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
renderNews(filter);
}

// ===== FORM =====
function submitForm(e){
e.preventDefault();
const name = document.getElementById('formName').value;
const email = document.getElementById('formEmail').value;
const msg = document.getElementById('formMsg').value;
if(!name || !email || !msg) return;
document.getElementById('formSuccess').classList.add('show');
document.getElementById('contactForm').reset();
setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 5000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
const bodyPage = document.body.dataset.page || 'home';
renderPage(bodyPage);
setTimeout(() => {
const preloader = document.querySelector('.preloader');
if(preloader) preloader.classList.add('hidden');
}, 500);
const statsObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){ initStatCounters(); statsObserver.disconnect(); }
});
}, {threshold: 0.3});
const statsEl = document.querySelector('.stats');
if(statsEl) statsObserver.observe(statsEl);
});