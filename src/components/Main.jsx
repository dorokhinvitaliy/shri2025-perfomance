import React, { useRef, useEffect, useState } from 'react';
import Event from './Event';

// Данные TABS вынесены отдельно
const TABS = {
  all: {
    title: 'Все',
    items: [
      {
        icon: 'light2',
        iconLabel: 'Освещение',
        title: 'Xiaomi Yeelight LED Smart Bulb',
        subtitle: 'Включено',
      },
      {
        icon: 'light',
        iconLabel: 'Освещение',
        title: 'D-Link Omna 180 Cam',
        subtitle: 'Включится в 17:00',
      },
      {
        icon: 'temp',
        iconLabel: 'Температура',
        title: 'Elgato Eve Degree Connected',
        subtitle: 'Выключено до 17:00',
      },
      {
        icon: 'light',
        iconLabel: 'Освещение',
        title: 'LIFX Mini Day & Dusk A60 E27',
        subtitle: 'Включится в 17:00',
      },
      {
        icon: 'light2',
        iconLabel: 'Освещение',
        title: 'Xiaomi Mi Air Purifier 2S',
        subtitle: 'Включено',
      },
      {
        icon: 'light',
        iconLabel: 'Освещение',
        title: 'Philips Zhirui',
        subtitle: 'Включено',
      },
    ],
  },
  kitchen: {
    title: 'Кухня',
    items: [
      {
        icon: 'light2',
        iconLabel: 'Освещение',
        title: 'Xiaomi Yeelight LED Smart Bulb',
        subtitle: 'Включено',
      },
      {
        icon: 'temp',
        iconLabel: 'Температура',
        title: 'Elgato Eve Degree Connected',
        subtitle: 'Выключено до 17:00',
      },
    ],
  },
  hall: {
    title: 'Зал',
    items: [
      {
        icon: 'light',
        iconLabel: 'Освещение',
        title: 'Philips Zhirui',
        subtitle: 'Выключено',
      },
      {
        icon: 'light2',
        iconLabel: 'Освещение',
        title: 'Xiaomi Mi Air Purifier 2S',
        subtitle: 'Выключено',
      },
    ],
  },
};

for (let i = 0; i < 6; ++i) {
  TABS.all.items = [...TABS.all.items, ...TABS.all.items];
}

const TABS_KEYS = Object.keys(TABS);

export default function Main() {
  const ref = useRef();
  const initedRef = useRef(false);
  const [activeTab, setActiveTab] = useState('');
  const [hasRightScroll, setHasRightScroll] = useState(false);

  useEffect(() => {
    if (!activeTab && !initedRef.current) {
      initedRef.current = true;
      setActiveTab(new URLSearchParams(window.location.search).get('tab') || 'all');
    }
  }, [activeTab]);

  const onSelectInput = (e) => {
    setActiveTab(e.target.value);
  };

  useEffect(() => {
    const scroller = ref.current?.querySelector('.section__panel:not(.section__panel_hidden)');
    const checkScroll = () => {
      if (!scroller) return;
      const newHasRightScroll = scroller.scrollWidth > scroller.offsetWidth;
      if (newHasRightScroll !== hasRightScroll) {
        setHasRightScroll(newHasRightScroll);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [activeTab]);

  const onArrowClick = () => {
    const scroller = ref.current?.querySelector('.section__panel:not(.section__panel_hidden)');
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="main">
      {/* Здесь можно добавить секции, как в оригинале */}
      <section className="section main__general">
        <h2 className="section__title section__title-header section__main-title">Главное</h2>
        <div className="hero-dashboard">
          <div className="hero-dashboard__primary">
            <h3 className="hero-dashboard__title">Привет, Геннадий!</h3>
            <p className="hero-dashboard__subtitle">Двери и окна закрыты, сигнализация включена.</p>
            <ul className="hero-dashboard__info">
              <li className="hero-dashboard__item">
                <div>Дома</div>
                <div className="hero-dashboard__item-details">+23°</div>
              </li>
              <li className="hero-dashboard__item">
                <div>За окном</div>
                <div className="hero-dashboard__item-details">
                  +19°
                  <div className="hero-dashboard__icon hero-dashboard__icon_rain" role="img" aria-label="Дождь"></div>
                </div>
              </li>
            </ul>
          </div>
          <ul className="hero-dashboard__schedule">
            <Event icon="temp" iconLabel="Температура" title="Philips Cooler" subtitle="Начнет охлаждать в 16:30" />
            <Event icon="light" iconLabel="Освещение" title="Xiaomi Yeelight LED Smart Bulb" subtitle="Включится в 17:00" />
            <Event icon="light" iconLabel="Освещение" title="Xiaomi Yeelight LED Smart Bulb" subtitle="Включится в 17:00" />
          </ul>
        </div>
      </section>

      <section className="section main__scripts">
        <h2 className="section__title section__title-header">Избранные сценарии</h2>
        <ul className="event-grid">
          <Event slim icon="light2" iconLabel="Освещение" title="Выключить весь свет в доме и во дворе" />
          <Event slim icon="schedule" iconLabel="Расписание" title="Я ухожу" />
          <Event slim icon="light2" iconLabel="Освещение" title="Включить свет в коридоре" />
          <Event slim icon="temp2" iconLabel="Температура" title="Набрать горячую ванну" subtitle="Начнётся в 18:00" />
          <Event slim icon="temp2" iconLabel="Температура" title="Сделать пол тёплым во всей квартире" />
        </ul>
      </section>

      <section className="section main__devices">
        <div className="section__title">
          <h2 className="section__title-header">Избранные устройства</h2>
          <select className="section__select" defaultValue="all" onChange={onSelectInput}>
            {TABS_KEYS.map((key) => (
              <option key={key} value={key}>
                {TABS[key].title}
              </option>
            ))}
          </select>
          <ul role="tablist" className="section__tabs">
            {TABS_KEYS.map((key) => (
              <li
                key={key}
                role="tab"
                aria-selected={key === activeTab ? 'true' : 'false'}
                tabIndex={key === activeTab ? 0 : undefined}
                className={'section__tab' + (key === activeTab ? ' section__tab_active' : '')}
                id={`tab_${key}`}
                aria-controls={`panel_${key}`}
                onClick={() => setActiveTab(key)}
              >
                {TABS[key].title}
              </li>
            ))}
          </ul>
        </div>
        <div className="section__panel-wrapper" ref={ref}>
          {TABS_KEYS.map((key) => (
            <div
              key={key}
              role="tabpanel"
              className={'section__panel' + (key === activeTab ? '' : ' section__panel_hidden')}
              aria-hidden={key === activeTab ? 'false' : 'true'}
              id={`panel_${key}`}
              aria-labelledby={`tab_${key}`}
            >
              <ul className="section__panel-list">
                {TABS[key].items.map((item, index) => (
                  <Event key={index} {...item} />
                ))}
              </ul>
            </div>
          ))}
          {hasRightScroll && <div className="section__arrow" onClick={onArrowClick}></div>}
        </div>
      </section>
    </main>
  );
}