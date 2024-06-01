const moduleData = {
  1: {
    title: 'Модуль №1. ChatGPT. Технологічна Грамотність',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу',
    bullet3: 'Приклади використання людьми з різних сфер',
    bullet4: 'Best practices',
    resultTitle: 'В результаті:',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних випадках навчимось працювати з ChatGPT, як експерти І надихнемось можливостями АІ в 2024',
    link: '#',
  },
  2: {
    title: 'Модуль №2. Art generation. Технологічна Грамотність',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу 2',
    bullet3: 'Приклади використання людьми з різних сфер 2',
    bullet4: 'Best practices 2',
    resultTitle: 'В результаті: 2',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних випадках навчимось працювати з ChatGPT, як експерти І надихнемось можливостями АІ в 2024',
    link: '#',
  },
  3: {
    title: 'Модуль №3. База. Інтро в АІ. Основи напряму. Що так штучний інтелект.',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу 3',
    bullet3: 'Приклади використання людьми з різних сфер 3',
    bullet4: 'Best practices 3',
    resultTitle: 'В результаті 3:',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних випадках навчимось працювати з ChatGPT, як експерти І надихнемось можливостями АІ в 2024',
    link: '#',
  },
  4: {
    title: 'Модуль №4. Гроші та ROI. Розумніння профітабільності з АІ. Як рахувати профіт проектів з АІ та довгострокові нюанси',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу 4',
    bullet3: 'Приклади використання людьми з різних сфер 4',
    bullet4: 'Best practices 4',
    resultTitle: 'В результаті 4:',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних випадках навчимось працювати з ChatGPT, як експерти І надихнемось можливостями АІ в 2024',
    link: '#',
  },
  5: {
    title: 'Модуль №5. Інтеграція 1. Знайти місця застосування АІ. Як люди заробляють з АІ сервіси',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу 5',
    bullet3: 'Приклади використання людьми з різних сфер 5',
    bullet4: 'Best practices 5',
    resultTitle: 'В результаті 5:',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних випадках навчимось працювати з ChatGPT, як експерти І надихнемось можливостями АІ в 2024',
    link: '#',
  },
  6: {
    title: 'Модуль №6. Інтеграція 2. Зони використання АІ для великих компаній: Як великі компанії використовують АІ для ліпшого ROI',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу 6',
    bullet3: 'Приклади використання людьми з різних сфер 6',
    bullet4: 'Best practices 6',
    resultTitle: 'В результаті 6:',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних',
  },
  7: {
    title: 'Модуль №7. Розуміння Даних. Бути готовим до Штучного інтелекту. Приклади задач які вирішуються тільки машинним навчанням. Види Візуалізації даних. Маніпуляції за рахунок візуалізації даних',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу 7',
    bullet3: 'Приклади використання людьми з різних сфер 7',
    bullet4: 'Best practices 7',
    resultTitle: 'В результаті 7:',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних',
  },
}

const moduleItems = document.querySelectorAll('.module');
const modulesContainer = document.querySelector('.modules__container');
const moduleDetailsDesktop = modulesContainer.querySelector('.module-details');
let currentModule = null;

const loadModuleDetails = (event) => {
  const item = event ? event.currentTarget : moduleItems[0];
  const moduleId = item.getAttribute('data-module-id');
  console.log(`Loading details for module ID: ${moduleId}`);

  if (currentModule && currentModule !== item) {
    const moduleContainer = currentModule.querySelector('.module__container');
    moduleContainer.classList.remove('module__container--active');
    const moduleDetails = currentModule.querySelector('.module-details');
    if (moduleDetails) {
      moduleDetails.remove();
    }
  }

  if (currentModule !== item) {
    const currentModuleContainer = item.querySelector('.module__container');

    currentModuleContainer.classList.add('module__container--active');
    currentModule = item;
  
    if (window.innerWidth <= 1200) {
    loadMobileModuleDetails(moduleId, item);
    } else {
      loadDesktopModuleDetails(moduleId);
    }
  }
};

const loadMobileModuleDetails = (moduleId, moduleItem) => {
  const details = document.createElement('div');
  details.className = 'module-details module-details--mobile';

  const moduleDetails = moduleData[moduleId];

  if (!moduleDetails) {
    console.error(`Module data not found for module ID: ${moduleId}`);
    return;
  }

  details.innerHTML = `
    <h2 class="module-details__title">
      ${moduleDetails.title}
    </h2>

    <div class="module-details__points">
      <div class="module-details__point">
        <div class="module-details__point-bullet"></div>
        <p class="module-details__point-title">${moduleDetails.bullet1}</p>
      </div>

      <div class="module-details__point">
        <div class="module-details__point-bullet"></div>
        <p class="module-details__point-title">${moduleDetails.bullet2}</p>
      </div>

      <div class="module-details__point">
        <div class="module-details__point-bullet"></div>
        <p class="module-details__point-title">${moduleDetails.bullet3}</p>
      </div>

      <div class="module-details__point">
        <div class="module-details__point-bullet"></div>
        <p class="module-details__point-title">${moduleDetails.bullet4}</p>
      </div>
    </div>

    <div class="module-details__results">
      <h4 class="module-details__results-title">${moduleDetails.resultTitle}</h4>
      <p class="module-details__results-description">
        ${moduleDetails.resultDescription}
      </p>
    </div>

    <button class="module-details__button">Записатися на курс</button>
  `;

  moduleItem.appendChild(details);
};

const loadDesktopModuleDetails = (moduleId) => {
  const moduleDetails = moduleData[moduleId]; 

  if (!moduleDetails) {
    console.error(`Module data not found for module ID: ${moduleId}`);
    return;
  }

  moduleDetailsDesktop.innerHTML = `
    <h2 class="module-details__title">
      ${moduleDetails.title}
    </h2>

    <div class="module-details__points">
      <div class="module-details__point">
        <div class="module-details__point-bullet"></div>
        <p class="module-details__point-title">${moduleDetails.bullet1}</p>
      </div>

      <div class="module-details__point">
        <div class="module-details__point-bullet"></div>
        <p class="module-details__point-title">${moduleDetails.bullet2}</p>
      </div>

      <div class="module-details__point">
        <div class="module-details__point-bullet"></div>
        <p class="module-details__point-title">${moduleDetails.bullet3}</p>
      </div>

      <div class="module-details__point">
        <div class="module-details__point-bullet"></div>
        <p class="module-details__point-title">${moduleDetails.bullet4}</p>
      </div>
    </div>

    <div class="module-details__results">
      <h4 class="module-details__results-title">${moduleDetails.resultTitle}</h4>
      <p class="module-details__results-description">
        ${moduleDetails.resultDescription}
      </p>
    </div>

    <button class="module-details__button">Записатися на курс</button>
  `;
};

moduleItems.forEach((item) => {
  item.addEventListener('click', loadModuleDetails);
});

loadModuleDetails();