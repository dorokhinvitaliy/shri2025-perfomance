import "./styles.css";
import "./reset.css";
document.getElementById("app").innerHTML =
  '<header class="header"><a href="/" class="header__logo" aria-label="Яндекс.Дом"></a><button class="header__menu" aria-expanded="false"><span class="header__menu-text a11y-hidden">Открыть меню</span></button><ul class="header__links"><li class="header__item"><a class="header__link header__link_current" href="/" aria-current="page">Сводка</a></li><li class="header__item"><a class="header__link" href="/devices">Устройства</a></li><li class="header__item"><a class="header__link" href="/scripts">Сценарии</a></li></ul></header><main class="main"><section class="section main__general"><h2 class="section__title section__title-header section__main-title">Главное</h2><div class="hero-dashboard"><div class="hero-dashboard__primary"><h3 class="hero-dashboard__title">Привет, Геннадий!</h3><p class="hero-dashboard__subtitle">Двери и окна закрыты, сигнализация включена.</p><ul class="hero-dashboard__info"><li class="hero-dashboard__item"><div class="hero-dashboard__item-title">Дома</div><div class="hero-dashboard__item-details">+23<span class="a11y-hidden">°</span></div></li><li class="hero-dashboard__item"><div class="hero-dashboard__item-title">За окном</div><div class="hero-dashboard__item-details">+19<span class="a11y-hidden">°</span><div class="hero-dashboard__icon hero-dashboard__icon_rain" role="img" aria-label="Дождь"></div></div></li></ul></div><ul class="hero-dashboard__schedule"><li class="event"><button class="event__button"><span class="event__icon event__icon_temp" role="img" aria-label="Температура"></span><h4 class="event__title">Philips Cooler</h4><span class="event__subtitle">Начнет охлаждать в 16:30</span></button></li><li class="event"><button class="event__button"><span class="event__icon event__icon_light" role="img" aria-label="Освещение"></span><h4 class="event__title">Xiaomi Yeelight LED Smart Bulb</h4><span class="event__subtitle">Включится в 17:00</span></button></li><li class="event"><button class="event__button"><span class="event__icon event__icon_light" role="img" aria-label="Освещение"></span><h4 class="event__title">Xiaomi Yeelight LED Smart Bulb</h4><span class="event__subtitle">Включится в 17:00</span></button></li></ul></div></section><section class="section main__scripts"><h2 class="section__title section__title-header">Избранные сценарии</h2><ul class="event-grid"><li class="event event_slim"><button class="event__button"><span class="event__icon event__icon_light2" role="img" aria-label="Освещение"></span><h4 class="event__title">Выключить весь свет в доме и во дворе</h4></button></li><li class="event event_slim"><button class="event__button"><span class="event__icon event__icon_schedule" role="img" aria-label="Расписание"></span><h4 class="event__title">Я ухожу</h4></button></li><li class="event event_slim"><button class="event__button"><span class="event__icon event__icon_light2" role="img" aria-label="Освещение"></span><h4 class="event__title">Включить свет в коридоре</h4></button></li><li class="event event_slim"><button class="event__button"><span class="event__icon event__icon_temp2" role="img" aria-label="Температура"></span><h4 class="event__title">Набрать горячую ванну</h4><span class="event__subtitle">Начнётся в 18:00</span></button></li><li class="event event_slim"><button class="event__button"><span class="event__icon event__icon_temp2" role="img" aria-label="Температура"></span><h4 class="event__title">Сделать пол тёплым во всей квартире</h4></button></li></ul></section><section class="section main__devices"><div class="section__title"><h2 class="section__title-header">Избранные устройства</h2><select class="section__select"><option value="all">Все</option><option value="kitchen">Кухня</option><option value="hall">Зал</option><option value="lights">Лампочки</option><option value="cameras">Камеры</option></select><ul role="tablist" class="section__tabs"><li role="tab" aria-selected="true" tabindex="0" class="section__tab section__tab_active" id="tab_all" aria-controls="panel_all">Все</li><li role="tab" aria-selected="false" class="section__tab" id="tab_kitchen" aria-controls="panel_kitchen">Кухня</li><li role="tab" aria-selected="false" class="section__tab" id="tab_hall" aria-controls="panel_hall">Зал</li><li role="tab" aria-selected="false" class="section__tab" id="tab_lights" aria-controls="panel_lights">Лампочки</li><li role="tab" aria-selected="false" class="section__tab" id="tab_cameras" aria-controls="panel_cameras">Камеры</li></ul></div><div class="section__panel-wrapper"><div role="tabpanel" aria-hidden="false" id="panel_all" aria-labelledby="tab_all" class="section__panel"><ul class="section__panel-list"></ul></div><div role="tabpanel" aria-hidden="true" id="panel_kitchen" aria-labelledby="tab_kitchen" class="section__panel section__panel_hidden"><ul class="section__panel-list"></ul></div><div role="tabpanel" aria-hidden="true" id="panel_hall" aria-labelledby="tab_hall" class="section__panel section__panel_hidden"><ul class="section__panel-list"></ul></div><div role="tabpanel" aria-hidden="true" id="panel_lights" aria-labelledby="tab_lights" class="section__panel section__panel_hidden"><ul class="section__panel-list"></ul></div><div role="tabpanel" aria-hidden="true" id="panel_cameras" aria-labelledby="tab_cameras" class="section__panel section__panel_hidden"><ul class="section__panel-list"></ul></div></div></section></main>';
const TABS = {
  all: {
    title: "Все",
    items: [
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Yeelight LED Smart Bulb",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "D-Link Omna 180 Cam",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "temp",
        iconLabel: "Температура",
        title: "Elgato Eve Degree Connected",
        subtitle: "Выключено до 17:00",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "LIFX Mini Day & Dusk A60 E27",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Включено",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
    ],
  },
  kitchen: {
    title: "Кухня",
    items: [
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Yeelight LED Smart Bulb",
        subtitle: "Включено",
      },
      {
        icon: "temp",
        iconLabel: "Температура",
        title: "Elgato Eve Degree Connected",
        subtitle: "Выключено до 17:00",
      },
    ],
  },
  hall: {
    title: "Зал",
    items: [
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Выключено",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Выключено",
      },
    ],
  },
  lights: {
    title: "Лампочки",
    items: [
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "D-Link Omna 180 Cam",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "LIFX Mini Day & Dusk A60 E27",
        subtitle: "Включится в 17:00",
      },
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
      {
        icon: "light",
        iconLabel: "Освещение",
        title: "Philips Zhirui",
        subtitle: "Включено",
      },
    ],
  },
  cameras: {
    title: "Камеры",
    items: [
      {
        icon: "light2",
        iconLabel: "Освещение",
        title: "Xiaomi Mi Air Purifier 2S",
        subtitle: "Включено",
      },
    ],
  },
};
for (let i = 0; i < 6; ++i)
  TABS.all.items = [...TABS.all.items, ...TABS.all.items];
const TABS_KEYS = Object.keys(TABS);
const headerMenu = document.querySelector(".header__menu");
const headerLinks = document.querySelector(".header__links");
let headerExpanded = false;
let headerToggled = false;
headerMenu.addEventListener("click", () => {
  if (!headerToggled) headerToggled = true;
  headerExpanded = !headerExpanded;
  headerMenu.setAttribute("aria-expanded", headerExpanded ? "true" : "false");
  headerMenu.querySelector(".header__menu-text").textContent = headerExpanded
    ? "Закрыть меню"
    : "Открыть меню";
  headerLinks.className =
    "header__links" +
    (headerExpanded ? " header__links_opened" : "") +
    (headerToggled ? " header__links-toggled" : "");
});
const tabSelect = document.querySelector(".section__select");
const tabPanels = document.querySelectorAll(".section__panel");
const tabList = document.querySelector(".section__tabs");
const panelWrapper = document.querySelector(".section__panel-wrapper");
const sectionArrow = document.createElement("div");
sectionArrow.className = "section__arrow";
sectionArrow.style.display = "none";
panelWrapper.appendChild(sectionArrow);
function updateEventPanels() {
  tabPanels.forEach((panel) => {
    const panelId = panel.id.replace("panel_", "");
    const items = TABS[panelId].items;
    const list = panel.querySelector(".section__panel-list");
    list.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.className = "event";
      if (item.slim) li.classList.add("event_slim");
      const button = document.createElement("button");
      button.className = "event__button";
      const icon = document.createElement("span");
      icon.className = `event__icon event__icon_${item.icon}`;
      icon.setAttribute("role", "img");
      icon.setAttribute("aria-label", item.iconLabel);
      button.appendChild(icon);
      const title = document.createElement("h4");
      title.className = "event__title";
      title.textContent = item.title;
      button.appendChild(title);
      if (item.subtitle) {
        const subtitle = document.createElement("span");
        subtitle.className = "event__subtitle";
        subtitle.textContent = item.subtitle;
        button.appendChild(subtitle);
      }
      li.appendChild(button);
      list.appendChild(li);
    });
  });
}
updateEventPanels();
function updateActiveTab(tabKey) {
  const activeTab =
    tabKey || new URLSearchParams(location.search).get("tab") || "all";
  tabSelect.value = activeTab;
  document.querySelectorAll(".section__tab").forEach((tab) => {
    const tabId = tab.id.replace("tab_", "");
    const isActive = tabId === activeTab;
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
    tab.classList.toggle("section__tab_active", isActive);
    if (isActive) tab.tabIndex = 0;
    else tab.removeAttribute("tabindex");
  });
  tabPanels.forEach((panel) => {
    const panelId = panel.id.replace("panel_", "");
    const isActive = panelId === activeTab;
    panel.classList.toggle("section__panel_hidden", !isActive);
    panel.setAttribute("aria-hidden", !isActive ? "true" : "false");
  });
  const activePanel = document.querySelector(`#panel_${activeTab}`);
  if (activePanel) {
    const itemsWidth = Array.from(
      activePanel.querySelectorAll(".event")
    ).reduce((acc, item) => acc + item.offsetWidth, 0);
    sectionArrow.style.display =
      itemsWidth > panelWrapper.offsetWidth ? "block" : "none";
  }
}
updateActiveTab();
tabSelect.addEventListener("change", (e) => {
  updateActiveTab(e.target.value);
});
tabList.addEventListener("click", (e) => {
  const tab = e.target.closest(".section__tab");
  if (tab) {
    const tabId = tab.id.replace("tab_", "");
    updateActiveTab(tabId);
  }
});
sectionArrow.addEventListener("click", () => {
  const activePanel = panelWrapper.querySelector(
    ".section__panel:not(.section__panel_hidden)"
  );
  if (activePanel) activePanel.scrollBy({ left: 400, behavior: "smooth" });
});