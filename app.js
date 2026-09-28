const rooms = [
  {
    id: "outer",
    title: "Пространство",
    kicker: "Снаружи",
    whisper: "Сначала — немного воздуха",
    intro: "Посмотрим не на идеальный интерьер, а на то, как ваш дом обращается с вами каждый день.",
    questions: [
      {
        id: "outerFeeling",
        text: "Что вы чаще всего чувствуете дома?",
        type: "choice",
        options: [
          ["calm", "Здесь мне спокойно"],
          ["noise", "Слишком много визуального шума"],
          ["duties", "Дом сразу выдаёт список дел"],
          ["stranger", "Красиво, но будто не совсем моё"]
        ]
      },
      {
        id: "outerWish",
        text: "Какой маленький уголок хочется вернуть себе?",
        type: "text",
        placeholder: "Например: кресло у окна, стол без чужих бумаг…"
      }
    ]
  },
  {
    id: "inner",
    title: "Пространство",
    kicker: "Внутри",
    whisper: "Мыслям тоже нужен гардероб",
    intro: "Теперь заглянем туда, где одновременно живут планы, тревоги и мысль «надо было ответить ещё вчера».",
    questions: [
      {
        id: "innerNoise",
        text: "Что занимает больше всего места внутри?",
        type: "choice",
        options: [
          ["worry", "Тревоги о будущем"],
          ["others", "Заботы о других"],
          ["unfinished", "Незавершённые дела"],
          ["control", "Попытка всё удержать под контролем"]
        ]
      },
      {
        id: "innerRelease",
        text: "Что можно хотя бы на сутки перестать держать в голове?",
        type: "text",
        placeholder: "Одно дело, один разговор или одна чужая ответственность…"
      }
    ]
  },
  {
    id: "truth",
    title: "Правда",
    kicker: "Без грима",
    whisper: "Она вам идёт",
    intro: "Никакой суровой исповеди. Только одна честная встреча с тем, что вы уже знаете, но красиво обходили стороной.",
    questions: [
      {
        id: "truthState",
        text: "Какая фраза сейчас ближе всего?",
        type: "choice",
        options: [
          ["tired", "Я устала быть сильной без выходных"],
          ["bored", "Мне скучно в собственной жизни"],
          ["waiting", "Я всё ещё жду, что кто-то изменится"],
          ["ready", "Я готова выбирать себя по-настоящему"]
        ]
      },
      {
        id: "truthSentence",
        text: "Если без «всё нормально», то чего вам сейчас не хватает?",
        type: "text",
        placeholder: "Напишите первое, что пришло. Оно обычно самое честное."
      }
    ]
  },
  {
    id: "body",
    title: "Тело",
    kicker: "Не проект, а союзница",
    whisper: "Оно всё это время было с вами",
    intro: "Тело не обязано сначала стать идеальным, чтобы получить заботу. Да, такой дерзкий поворот сюжета.",
    questions: [
      {
        id: "bodySignal",
        text: "Какой сигнал тело подаёт громче других?",
        type: "choice",
        options: [
          ["sleep", "Мне нужен сон"],
          ["movement", "Мне хочется движения"],
          ["tension", "Пора отпустить напряжение"],
          ["pleasure", "Мне не хватает приятных ощущений"]
        ]
      },
      {
        id: "bodyCare",
        text: "Какую заботу вы готовы дать телу на этой неделе?",
        type: "text",
        placeholder: "Прогулка, бассейн, ранний сон, красивый крем…"
      }
    ]
  },
  {
    id: "boundary",
    title: "Граница",
    kicker: "Дверь есть дверь",
    whisper: "И ручка с вашей стороны",
    intro: "Граница — не крепостная стена. Это вежливая дверь: вы решаете, кого впустить, а кому пора записаться заранее.",
    questions: [
      {
        id: "boundaryLeak",
        text: "Где ваше «да» чаще всего означает «вообще-то нет»?",
        type: "choice",
        options: [
          ["family", "В просьбах близких"],
          ["work", "В работе и обязательствах"],
          ["availability", "Когда от меня ждут постоянной доступности"],
          ["peace", "Когда проще согласиться, чем объяснять"]
        ]
      },
      {
        id: "boundaryPhrase",
        text: "Какое спокойное «нет» вам пора произнести?",
        type: "text",
        placeholder: "Например: сегодня не смогу, вернусь к этому завтра…"
      }
    ]
  },
  {
    id: "desire",
    title: "Живое желание",
    kicker: "Не полезное. Ваше",
    whisper: "Можно без делового обоснования",
    intro: "Желанию не нужна презентация на двенадцать слайдов. Достаточно, чтобы при мысли о нём внутри стало чуть светлее.",
    questions: [
      {
        id: "desireArea",
        text: "Куда вас сейчас тянет больше всего?",
        type: "choice",
        options: [
          ["beauty", "Красота и новый образ"],
          ["adventure", "Впечатления и маленькие приключения"],
          ["closeness", "Близость, тепло и флирт"],
          ["creation", "Своё дело и творческая смелость"]
        ]
      },
      {
        id: "desireWish",
        text: "Чего вы хотите — без слова «надо»?",
        type: "text",
        placeholder: "Пишите смелее. Внутренний бухгалтер сегодня отдыхает."
      }
    ]
  },
  {
    id: "supports",
    title: "Опоры",
    kicker: "То, что держит",
    whisper: "Не обязательно держаться одной",
    intro: "Опора — это не только сила воли. Иногда это человек, привычка, чашка в тишине или вовремя выключенный телефон.",
    questions: [
      {
        id: "supportSource",
        text: "Что возвращает вас к себе быстрее всего?",
        type: "choice",
        options: [
          ["people", "Тёплый разговор"],
          ["silence", "Тишина и время наедине"],
          ["nature", "Природа и движение"],
          ["ritual", "Красивый личный ритуал"]
        ]
      },
      {
        id: "supportName",
        text: "К кому или к чему вы можете обратиться уже сейчас?",
        type: "text",
        placeholder: "Имя человека, место, занятие или добрая привычка…"
      }
    ]
  },
  {
    id: "step",
    title: "Первый шаг",
    kicker: "Без откладывания",
    whisper: "Красиво — не значит сложно",
    intro: "Большая жизнь возвращается маленькими действиями. Выберите одно — настолько реальное, чтобы завтра не пришлось устраивать переговоры с собой.",
    questions: [
      {
        id: "stepTime",
        text: "Когда вы готовы сделать первый шаг?",
        type: "choice",
        options: [
          ["today", "Сегодня — пока настрой тёплый"],
          ["tomorrow", "Завтра утром"],
          ["three", "В ближайшие три дня"],
          ["week", "На этой неделе"]
        ]
      },
      {
        id: "firstStep",
        text: "Что именно вы сделаете?",
        type: "text",
        placeholder: "Одно действие, которое можно увидеть в календаре…"
      }
    ]
  }
];

const STORAGE_KEY = "quiet-support-eight-rooms-v1";
const state = loadState();

const introScreen = document.querySelector("#introScreen");
const journeyScreen = document.querySelector("#journeyScreen");
const resultScreen = document.querySelector("#resultScreen");
const roomForm = document.querySelector("#roomForm");
const questionsContainer = document.querySelector("#questionsContainer");
const formMessage = document.querySelector("#formMessage");
const restartTop = document.querySelector("#restartTop");

document.querySelector("#startButton").addEventListener("click", startJourney);
document.querySelector("#backButton").addEventListener("click", goBack);
document.querySelector("#restartButton").addEventListener("click", restart);
restartTop.addEventListener("click", restart);
document.querySelector("#brandLink").addEventListener("click", (event) => {
  event.preventDefault();
  showScreen("intro");
});
document.querySelector("#printButton").addEventListener("click", () => window.print());
roomForm.addEventListener("submit", goNext);

if (state.started && !state.completed) {
  document.querySelector("#startButton span:first-child").textContent = "Продолжить путешествие";
  restartTop.classList.remove("hidden");
} else if (state.completed) {
  renderResult();
  showScreen("result");
}

function loadState() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === "object") {
      return { current: 0, answers: {}, started: false, completed: false, ...saved };
    }
  } catch (_) {}
  return { current: 0, answers: {}, started: false, completed: false };
}

function saveState() {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showScreen(name) {
  introScreen.classList.toggle("hidden", name !== "intro");
  journeyScreen.classList.toggle("hidden", name !== "journey");
  resultScreen.classList.toggle("hidden", name !== "result");
  restartTop.classList.toggle("hidden", !state.started || name === "result");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startJourney() {
  state.started = true;
  saveState();
  renderRoom();
  showScreen("journey");
}

function renderRoom() {
  const room = rooms[state.current];
  document.querySelector("#progressLabel").textContent = `Комната ${state.current + 1} из ${rooms.length}`;
  document.querySelector("#progressPercent").textContent = `${Math.round(((state.current + 1) / rooms.length) * 100)}%`;
  document.querySelector("#progressFill").style.width = `${((state.current + 1) / rooms.length) * 100}%`;
  document.querySelector("#roomIndex").textContent = String(state.current + 1).padStart(2, "0");
  document.querySelector("#roomWhisper").textContent = room.whisper;
  document.querySelector("#roomKicker").textContent = room.kicker;
  document.querySelector("#roomTitle").textContent = room.title;
  document.querySelector("#roomIntro").textContent = room.intro;
  document.querySelector("#backButton").style.visibility = state.current === 0 ? "hidden" : "visible";
  document.querySelector("#nextButton span:first-child").textContent = state.current === rooms.length - 1 ? "Собрать мою карту" : "Дальше";
  formMessage.textContent = "";
  renderDots();

  questionsContainer.innerHTML = room.questions.map((question) => {
    const currentValue = state.answers[question.id] || "";
    if (question.type === "choice") {
      return `
        <fieldset class="question-group">
          <legend><h3>${question.text}</h3></legend>
          <div class="choices">
            ${question.options.map(([value, label]) => `
              <div class="choice">
                <input type="radio" id="${question.id}-${value}" name="${question.id}" value="${value}" ${currentValue === value ? "checked" : ""}>
                <label for="${question.id}-${value}">${label}</label>
              </div>
            `).join("")}
          </div>
        </fieldset>`;
    }
    return `
      <div class="question-group">
        <h3>${question.text} <span class="optional">коротко, своими словами</span></h3>
        <textarea id="${question.id}" name="${question.id}" maxlength="240" placeholder="${question.placeholder}">${escapeHtml(currentValue)}</textarea>
      </div>`;
  }).join("");

  questionsContainer.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("change", collectCurrentAnswers);
    field.addEventListener("input", collectCurrentAnswers);
  });

  const card = document.querySelector("#roomCard");
  card.style.animation = "none";
  requestAnimationFrame(() => { card.style.animation = ""; });
}

function renderDots() {
  const dots = document.querySelector("#roomDots");
  dots.innerHTML = rooms.map((room, index) => {
    const canVisit = index <= highestCompletedRoom() + 1;
    const isDone = room.questions.every((q) => Boolean(String(state.answers[q.id] || "").trim()));
    return `
      <button class="room-dot ${index === state.current ? "active" : ""} ${isDone ? "done" : ""}"
        type="button" data-room="${index}" ${canVisit ? "" : "disabled"}
        aria-label="Комната ${index + 1}: ${room.title}" ${index === state.current ? 'aria-current="step"' : ""}>
        <span>${isDone ? "✓" : index + 1}</span><span>${room.title}${index < 2 ? ` · ${room.kicker.toLowerCase()}` : ""}</span>
      </button>`;
  }).join("");
  dots.querySelectorAll("button:not(:disabled)").forEach((button) => {
    button.addEventListener("click", () => {
      collectCurrentAnswers();
      state.current = Number(button.dataset.room);
      saveState();
      renderRoom();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function highestCompletedRoom() {
  let highest = -1;
  rooms.forEach((room, index) => {
    const complete = room.questions.every((q) => Boolean(String(state.answers[q.id] || "").trim()));
    if (complete && index === highest + 1) highest = index;
  });
  return highest;
}

function collectCurrentAnswers() {
  const room = rooms[state.current];
  const data = new FormData(roomForm);
  room.questions.forEach((q) => {
    const value = data.get(q.id);
    if (value !== null) state.answers[q.id] = String(value).trim();
  });
  saveState();
}

function goNext(event) {
  event.preventDefault();
  collectCurrentAnswers();
  const room = rooms[state.current];
  const missing = room.questions.find((q) => !String(state.answers[q.id] || "").trim());
  if (missing) {
    formMessage.textContent = "Здесь остался один незакрытый вопрос. Ответьте — и пойдём дальше.";
    const target = roomForm.elements[missing.id];
    if (target && typeof target.focus === "function") target.focus();
    return;
  }
  if (state.current < rooms.length - 1) {
    state.current += 1;
    saveState();
    renderRoom();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    state.completed = true;
    saveState();
    renderResult();
    showScreen("result");
  }
}

function goBack() {
  collectCurrentAnswers();
  if (state.current > 0) {
    state.current -= 1;
    saveState();
    renderRoom();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function restart() {
  if (!window.confirm("Начать путь заново? Ответы в этой вкладке будут очищены.")) return;
  sessionStorage.removeItem(STORAGE_KEY);
  state.current = 0;
  state.answers = {};
  state.started = false;
  state.completed = false;
  document.querySelector("#startButton span:first-child").textContent = "Войти в первую комнату";
  showScreen("intro");
}

function renderResult() {
  const a = state.answers;
  const date = new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long", year: "numeric" }).format(new Date());
  document.querySelector("#mapDate").textContent = date;
  document.querySelector("#mapName").textContent = makeMapTitle(a.desireArea);

  const summaries = [
    ["Пространство", "Место, которое зовёт", a.outerWish],
    ["Внутри", "То, что можно отпустить", a.innerRelease],
    ["Правда", "Чего мне не хватает", a.truthSentence],
    ["Тело", "Забота на эту неделю", a.bodyCare],
    ["Граница", "Моё спокойное «нет»", a.boundaryPhrase],
    ["Желание", "Я действительно хочу", a.desireWish],
    ["Опоры", "Я могу обратиться", a.supportName],
    ["Первый шаг", timingLabel(a.stepTime), a.firstStep]
  ];

  document.querySelector("#mapSummary").innerHTML = summaries.map(([label, title, value]) => `
    <div class="summary-item">
      <span>${escapeHtml(label)}</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(value || "—")}</p>
    </div>
  `).join("");

  const steps = buildSteps(a);
  document.querySelector("#personalSteps").innerHTML = steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("");
  document.querySelector("#closingPhrase").textContent = closingPhrase(a.truthState, a.stepTime);
}

function makeMapTitle(area) {
  return ({
    beauty: "Вернуть себе красоту и интерес",
    adventure: "Добавить жизни движения и вкуса",
    closeness: "Стать ближе к теплу и близости",
    creation: "Дать место своему смелому делу"
  })[area] || "Мой путь к себе";
}

function timingLabel(value) {
  return ({ today: "Сделаю сегодня", tomorrow: "Сделаю завтра утром", three: "Сделаю в ближайшие три дня", week: "Сделаю на этой неделе" })[value] || "Мой первый шаг";
}

function buildSteps(a) {
  const steps = [];
  const clean = (value) => String(value || "").replace(/[.!?]+$/, "").trim();
  if (a.outerWish) steps.push(`Освободить для себя место: ${clean(a.outerWish)}.`);

  const innerSteps = {
    worry: "Записать тревоги на лист и выбрать одну вещь, на которую вы действительно влияете.",
    others: "Вернуть хотя бы одну чужую задачу её законному владельцу — спокойно, без фанфар.",
    unfinished: "Выбрать одно незавершённое дело: закончить, перенести в календарь или честно отменить.",
    control: "На сутки ослабить контроль в одном безопасном деле и посмотреть, не рухнула ли планета."
  };
  if (innerSteps[a.innerNoise]) steps.push(innerSteps[a.innerNoise]);

  const bodySteps = {
    sleep: "Назначить себе один вечер с ранним сном и защищать его как важную встречу.",
    movement: "Подарить телу 20 минут движения, которое не похоже на наказание.",
    tension: "Сделать десятиминутную паузу на тепло, дыхание и расслабление плеч.",
    pleasure: "Добавить одно приятное телесное ощущение: аромат, воду, ткань, прикосновение или уход."
  };
  if (bodySteps[a.bodySignal]) steps.push(bodySteps[a.bodySignal]);

  if (a.boundaryPhrase) steps.push(`Произнести или написать: «${clean(a.boundaryPhrase)}». Без длинной защиты диссертации.`);

  const desireSteps = {
    beauty: "Выбрать одну деталь нового образа и примерить её не для случая, а для себя.",
    adventure: "Поставить в календарь маленькое событие, которого приятно ждать.",
    closeness: "Сделать тёплое приглашение к близости — взглядом, словом или совместным планом.",
    creation: "Выделить 30 минут на своё дело до того, как мир выдаст вам следующий список поручений."
  };
  if (desireSteps[a.desireArea]) steps.push(desireSteps[a.desireArea]);

  if (a.supportName) steps.push(`Обратиться к своей опоре: ${clean(a.supportName)}.`);
  if (a.firstStep) steps.push(`${timingLabel(a.stepTime)}: ${clean(a.firstStep)}.`);
  return steps.slice(0, 6);
}

function closingPhrase(truth, time) {
  const openings = {
    tired: "Сила — не в том, чтобы всё вынести.",
    bored: "Жизнь не обязана ждать особого повода, чтобы снова стать интересной.",
    waiting: "Чужие перемены можно не караулить у окна.",
    ready: "Вы уже начали выбирать себя — спокойно и без разрешения."
  };
  const endings = time === "today"
    ? " Сегодня у вас свидание с первым шагом."
    : " Первый шаг уже знает своё время.";
  return (openings[truth] || "Возвращение к себе начинается не громко.") + endings;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
