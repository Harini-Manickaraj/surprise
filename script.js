// =========================================================
// EDITABLE: Scene 3 Gallery Photos (208 unique browser-compatible photos from assets/photos/)
// Renders all unique photos in Scene 3; switches to compact mega-collage when > 100 photos.
// =========================================================
const GALLERY_PHOTOS = [
  "assets/photos/146731433326.jpg",
  "assets/photos/146791413529.jpg",
  "assets/photos/4f4868e8-afb3-473c-abd3-774dff43038d.jpg",
  "assets/photos/60.jpeg",
  "assets/photos/61.jpeg",
  "assets/photos/62.jpeg",
  "assets/photos/63.jpeg",
  "assets/photos/64.jpeg",
  "assets/photos/65.jpeg",
  "assets/photos/66.jpeg",
  "assets/photos/67.jpeg",
  "assets/photos/68.jpeg",
  "assets/photos/69.jpeg",
  "assets/photos/95b40676-3ac6-43b8-b696-e1c8db1cad77.JPG",
  "assets/photos/9a32409b-29f1-4297-b11b-c29005e019eb.JPG",
  "assets/photos/IMG_1162.JPG",
  "assets/photos/IMG_1164.JPG",
  "assets/photos/IMG_1168.JPG",
  "assets/photos/IMG_1182.JPG",
  "assets/photos/IMG_1183.JPG",
  "assets/photos/IMG_1184.JPG",
  "assets/photos/IMG_1185.JPG",
  "assets/photos/IMG_1186.JPG",
  "assets/photos/IMG_1187.JPG",
  "assets/photos/IMG_1188.JPG",
  "assets/photos/IMG_1189.JPG",
  "assets/photos/IMG_1190.JPG",
  "assets/photos/IMG_1191.JPG",
  "assets/photos/IMG_1192.JPG",
  "assets/photos/IMG_1193.JPG",
  "assets/photos/IMG_1194.JPG",
  "assets/photos/IMG_1195.JPG",
  "assets/photos/IMG_1196.JPG",
  "assets/photos/IMG_1197.JPG",
  "assets/photos/IMG_1201.JPG",
  "assets/photos/IMG_1202.JPG",
  "assets/photos/IMG_1203.JPG",
  "assets/photos/IMG_1204.JPG",
  "assets/photos/IMG_1205.JPG",
  "assets/photos/IMG_1251.JPG",
  "assets/photos/IMG_1252.JPG",
  "assets/photos/IMG_1253.JPG",
  "assets/photos/IMG_1254.JPG",
  "assets/photos/IMG_1255.JPG",
  "assets/photos/IMG_1256.JPG",
  "assets/photos/IMG_1257.JPG",
  "assets/photos/IMG_1258.JPG",
  "assets/photos/IMG_1259.JPG",
  "assets/photos/IMG_1260.JPG",
  "assets/photos/IMG_1261.JPG",
  "assets/photos/IMG_1262.JPG",
  "assets/photos/IMG_1263.JPG",
  "assets/photos/IMG_1264.JPG",
  "assets/photos/IMG_1265.JPG",
  "assets/photos/IMG_1266.JPG",
  "assets/photos/IMG_1326.jpg",
  "assets/photos/IMG_1327.jpg",
  "assets/photos/IMG_1328.jpg",
  "assets/photos/IMG_1464.JPG",
  "assets/photos/IMG_1465.JPG",
  "assets/photos/IMG_1466.JPG",
  "assets/photos/IMG_1467.JPG",
  "assets/photos/IMG_1468.JPG",
  "assets/photos/IMG_1469.JPG",
  "assets/photos/IMG_1470.JPG",
  "assets/photos/IMG_1483.JPG",
  "assets/photos/IMG_1484.JPG",
  "assets/photos/IMG_1485.JPG",
  "assets/photos/IMG_1486.JPG",
  "assets/photos/IMG_1487.JPG",
  "assets/photos/IMG_1488.JPG",
  "assets/photos/IMG_1489.JPG",
  "assets/photos/IMG_1490.JPG",
  "assets/photos/IMG_1491.JPG",
  "assets/photos/IMG_1492.JPG",
  "assets/photos/IMG_1517.JPG",
  "assets/photos/IMG_1518.JPG",
  "assets/photos/IMG_1519.JPG",
  "assets/photos/IMG_1520.JPG",
  "assets/photos/IMG_1521.JPG",
  "assets/photos/IMG_1522.JPG",
  "assets/photos/IMG_1523.JPG",
  "assets/photos/IMG_1524.JPG",
  "assets/photos/IMG_1525.JPG",
  "assets/photos/IMG_1526.JPG",
  "assets/photos/IMG_1527.JPG",
  "assets/photos/IMG_1528.JPG",
  "assets/photos/IMG_1529.JPG",
  "assets/photos/IMG_1530.JPG",
  "assets/photos/IMG_1531.JPG",
  "assets/photos/IMG_1532.JPG",
  "assets/photos/IMG_1579.JPG",
  "assets/photos/IMG_1580.JPG",
  "assets/photos/IMG_1581.jpg",
  "assets/photos/IMG_1582.jpg",
  "assets/photos/IMG_1583.jpg",
  "assets/photos/IMG_1584.jpg",
  "assets/photos/IMG_1585.jpg",
  "assets/photos/IMG_1586.jpg",
  "assets/photos/IMG_1587.jpg",
  "assets/photos/IMG_1588.jpg",
  "assets/photos/IMG_1589.jpg",
  "assets/photos/IMG_1590.jpg",
  "assets/photos/IMG_1591.jpg",
  "assets/photos/IMG_1592.jpg",
  "assets/photos/IMG_1593.jpg",
  "assets/photos/IMG_1594.jpg",
  "assets/photos/IMG_1595.jpg",
  "assets/photos/IMG_1596.jpg",
  "assets/photos/IMG_1597.jpg",
  "assets/photos/IMG_1598.jpg",
  "assets/photos/IMG_1599.jpg",
  "assets/photos/IMG_1600.jpg",
  "assets/photos/IMG_1601.jpg",
  "assets/photos/IMG_1602.jpg",
  "assets/photos/IMG_1603.jpg",
  "assets/photos/IMG_1604.jpg",
  "assets/photos/IMG_1605.jpg",
  "assets/photos/IMG_1606.jpg",
  "assets/photos/IMG_1607.jpg",
  "assets/photos/IMG_1608.jpg",
  "assets/photos/IMG_1609.jpg",
  "assets/photos/IMG_1610.JPG",
  "assets/photos/IMG_1611.JPG",
  "assets/photos/IMG_1612.JPG",
  "assets/photos/IMG_1613.JPG",
  "assets/photos/IMG_1621.jpg",
  "assets/photos/IMG_1622.JPG",
  "assets/photos/IMG_1623.JPG",
  "assets/photos/IMG_1624.JPG",
  "assets/photos/IMG_1625.JPG",
  "assets/photos/IMG_1626.JPG",
  "assets/photos/IMG_1627.JPG",
  "assets/photos/IMG_1628.JPG",
  "assets/photos/IMG_1629.JPG",
  "assets/photos/IMG_1630.JPG",
  "assets/photos/IMG_1631.JPG",
  "assets/photos/IMG_1632.JPG",
  "assets/photos/IMG_1633.JPG",
  "assets/photos/IMG_1634.JPG",
  "assets/photos/IMG_1635.JPG",
  "assets/photos/IMG_1636.JPG",
  "assets/photos/IMG_1637.JPG",
  "assets/photos/IMG_1638.JPG",
  "assets/photos/IMG_1639.JPG",
  "assets/photos/IMG_1640.JPG",
  "assets/photos/IMG_1641.JPG",
  "assets/photos/IMG_1642.JPG",
  "assets/photos/IMG_1643.JPG",
  "assets/photos/IMG_1644.JPG",
  "assets/photos/IMG_1645.JPG",
  "assets/photos/IMG_1646.JPG",
  "assets/photos/IMG_3947.JPG",
  "assets/photos/IMG_3948.JPG",
  "assets/photos/IMG-20251020-WA0001(1).jpg",
  "assets/photos/IMG-20251023-WA0096.jpg",
  "assets/photos/IMG-20251023-WA0400.jpg",
  "assets/photos/IMG-20251025-WA0005.jpg",
  "assets/photos/IMG-20251030-WA0019(1).jpg",
  "assets/photos/IMG-20251114-WA0089.jpg",
  "assets/photos/IMG-20251114-WA0097.jpg",
  "assets/photos/IMG-20251119-WA0040.jpg",
  "assets/photos/IMG-20251127-WA0000.jpg",
  "assets/photos/IMG-20251217-WA0016.jpg",
  "assets/photos/IMG-20260207-WA0000.jpg",
  "assets/photos/IMG-20261008-WA0091.jpg",
  "assets/photos/IMG-20261008-WA0099.jpg",
  "assets/photos/IMG-20261008-WA0100.jpg",
  "assets/photos/IMG-20261010-WA0019.jpg",
  "assets/photos/IMG-20261010-WA0023.jpg",
  "assets/photos/IMG-20261010-WA0028.jpg",
  "assets/photos/IMG-20261012-WA0013.jpg",
  "assets/photos/IMG-20261012-WA0018.jpg",
  "assets/photos/IMG-20261118-WA0000.jpg",
  "assets/photos/IMG-20261125-WA0001.jpg",
  "assets/photos/IMG-20261125-WA0002.jpg",
  "assets/photos/IMG-20261125-WA0003.jpg",
  "assets/photos/IMG-20261125-WA0004.jpg",
  "assets/photos/IMG-20261125-WA0005.jpg",
  "assets/photos/IMG-20261125-WA0007.jpg",
  "assets/photos/IMG-20261125-WA0008.jpg",
  "assets/photos/IMG-20261125-WA0009.jpg",
  "assets/photos/IMG-20261125-WA0010.jpg",
  "assets/photos/IMG-20261125-WA0012.jpg",
  "assets/photos/IMG-20261125-WA0013.jpg",
  "assets/photos/IMG-20261125-WA0014.jpg",
  "assets/photos/IMG-20261125-WA0015.jpg",
  "assets/photos/IMG-20261125-WA0016.jpg",
  "assets/photos/IMG-20261125-WA0017.jpg",
  "assets/photos/IMG-20261125-WA0019.jpg",
  "assets/photos/IMG-20261125-WA0020.jpg",
  "assets/photos/IMG-20261125-WA0021.jpg",
  "assets/photos/IMG-20261125-WA0022.jpg",
  "assets/photos/IMG-20261125-WA0023.jpg",
  "assets/photos/IMG-20261125-WA0024.jpg",
  "assets/photos/IMG-20261125-WA0025.jpg",
  "assets/photos/IMG-20261125-WA0026.jpg",
  "assets/photos/IMG-20261125-WA0027.jpg",
  "assets/photos/IMG-20261125-WA0028.jpg",
  "assets/photos/IMG-20261125-WA0029.jpg",
  "assets/photos/IMG-20261125-WA0030.jpg",
  "assets/photos/IMG-20261125-WA0031.jpg",
  "assets/photos/IMG-20261125-WA0032.jpg",
  "assets/photos/IMG-20261125-WA0033.jpg",
  "assets/photos/IMG-20261125-WA0034.jpg",
  "assets/photos/IMG-20261125-WA0035.jpg",
  "assets/photos/IMG-20261125-WA0036.jpg",
  "assets/photos/WhatsApp Image 2026-11-26 at 9.51.20 AM.jpeg"
];
const TOTAL_GALLERY_FRAMES = 55;

// =========================================================
// EDITABLE: Scene 6 Polaroid Memories (10 Emotional Cards from assets/poloroids/)
// =========================================================
const POLAROID_MEMORIES = [
  {
    image: "assets/poloroids/1.jpg", // EDITABLE: Replace filename if needed
    tilt: "-2.5deg",
    caption: "Before We Grew Up",
    story: "We didn't realise we were making memories back then—we were just laughing, fighting, and thinking we'd have forever like this."
  },
  {
    image: "assets/poloroids/2.jpg", // EDITABLE: Replace filename if needed
    tilt: "2.2deg",
    caption: "My Quiet Protector",
    story: "You never make a big show of caring, yet somehow you're always the first person standing in my corner when things get tough."
  },
  {
    image: "assets/poloroids/3.jpg", // EDITABLE: Replace filename if needed
    tilt: "-1.8deg",
    caption: "If I Could Pause Time",
    story: "Life gets busier every year, and we don't talk as much as we used to—so I hold onto days like this a little tighter."
  },
  {
    image: "assets/poloroids/4.jpeg", // EDITABLE: Replace filename if needed
    tilt: "2.7deg",
    caption: "The Person I Look Up To",
    story: "I roast you every chance I get because if I told you how proud I actually am of you, I'd start crying."
  },
  {
    image: "assets/poloroids/5.jpg", // EDITABLE: Replace filename if needed
    tilt: "-2.1deg",
    caption: "Always My First Call",
    story: "No matter how old we get or where life takes us, you're still the first person I look for in every room."
  },
  {
    image: "assets/poloroids/6.jpg", // EDITABLE: Replace filename if needed
    tilt: "1.6deg",
    caption: "Thank You For Everything",
    story: "For every time you let me win, every time you covered for me, and every silent sacrifice I pretended not to notice."
  },
  {
    image: "assets/poloroids/7.jpeg", // EDITABLE: Replace filename if needed
    tilt: "-2.6deg",
    caption: "My Safe Place",
    story: "No matter how loud or chaotic the world gets outside, standing beside you always feels like coming home."
  },
  {
    image: "assets/poloroids/8.jpg", // EDITABLE: Replace filename if needed
    tilt: "2.1deg",
    caption: "Unfiltered Smiles",
    story: "Some of my favourite memories don't even have a big reason behind them—just us laughing until it hurts."
  },
  {
    image: "assets/poloroids/9.jpg", // EDITABLE: Replace filename if needed
    tilt: "-1.5deg",
    caption: "Always My Backup",
    story: "Even when we disagree on everything, I never once have to wonder if you'll show up when I really need you."
  },
  {
    image: "assets/poloroids/10.jpg", // EDITABLE: Replace filename if needed
    tilt: "2.4deg",
    caption: "Built-in Best Friend",
    story: "Before I even knew what friendship meant, I already had someone walking beside me through everything."
  }
];

// =========================================================
// Shared Helpers & Global Scene Navigation
// =========================================================
const globalBackBtn = document.getElementById("global-back-btn");

let currentSceneId = "scene-1";
let isSceneTransitioning = false;
let introSessionId = 0;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setCurrentScene(sceneId) {
  currentSceneId = sceneId;
  globalBackBtn.hidden = sceneId === "scene-1";
}

// =========================================================
// Scene 1: Mysterious Beginning
// =========================================================
const scene1 = document.getElementById("scene-1");
const introText = document.getElementById("intro-text");
const curiousBtn = document.getElementById("curious-btn");

// Must match --fade-duration (0.5s = 500ms) in style.css
const FADE_MS = 500;
const HOLD_MS = 2500;

async function showMessage(message, keepVisible = false, sessionId = introSessionId) {
  if (sessionId !== introSessionId) return;
  introText.textContent = message;

  introText.classList.add("is-visible");
  await wait(FADE_MS);
  if (sessionId !== introSessionId || keepVisible) return;

  await wait(HOLD_MS);
  if (sessionId !== introSessionId) return;

  introText.classList.remove("is-visible");
  await wait(FADE_MS);
}

async function runIntroSequence() {
  introSessionId += 1;
  const mySession = introSessionId;

  await wait(300);
  if (mySession !== introSessionId) return;

  await showMessage("You weren't expecting this right, were you!?", false, mySession);
  await showMessage("Neither was I.", false, mySession);
  await showMessage("Curious?????", true, mySession);
  if (mySession !== introSessionId) return;

  curiousBtn.hidden = false;
  void curiousBtn.offsetWidth;
  curiousBtn.classList.add("is-visible");
}

// =========================================================
// Scene 2: Notebook Story & Fighting Cats
// =========================================================
const scene2 = document.getElementById("scene-2");
const catBro = document.getElementById("cat-bro");
const catSis = document.getElementById("cat-sis");
const catBroBubble = document.getElementById("cat-bro-bubble");
const catSisBubble = document.getElementById("cat-sis-bubble");
const comicClash = document.getElementById("comic-clash");
const gemsPile = document.getElementById("gems-pile");
const scene2NextBtn = document.getElementById("scene2-next-btn");

const clashWords = ["6 vs 7!", "Bap!", "Appa!!"];
const sisLines = [
  "Hey! Un kitta 7 Gems irukku, en kitta 6 thaan irukku!",
  "Cheating pannaatha! Enakku oru Gems kammiya irukku!",
  "Irunga, naa ippo Appa kitta solliruven!"
];
const broLines = [
  "Adichiruven! Kammunu po, ellam correct-ah thaan irukku!",
  "Poi sollaatha, renduperukkum equal-ah thaan pirichu vechom!",
  "Aiyayo Appa-va koopdaatha, indha oru Gems-ah neeye vechiko!"
];

let broIndex = 0;
let sisIndex = 0;
let nextAutoSide = "sis";
let autoClashTimer = null;
let autoStartTimer = null;
let clashHideTimer = null;

function showComicClash(customWord = null) {
  comicClash.textContent = customWord || clashWords[(sisIndex + broIndex) % clashWords.length];

  // Reset and replay the CSS pop animation
  comicClash.hidden = false;
  comicClash.style.animation = "none";
  void comicClash.offsetWidth;
  comicClash.style.animation = "";

  // Jiggle the Gems pile whenever a clash happens
  gemsPile.classList.remove("is-rattled");
  void gemsPile.offsetWidth;
  gemsPile.classList.add("is-rattled");

  clearTimeout(clashHideTimer);
  clashHideTimer = setTimeout(() => {
    comicClash.hidden = true;
  }, 1100);
}

function showCatBubble(bubbleEl, otherBubbleEl, text) {
  // Hide the other cat's bubble so the back-and-forth stays easy to read
  clearTimeout(otherBubbleEl._hideTimer);
  otherBubbleEl.hidden = true;

  bubbleEl.textContent = text;
  bubbleEl.hidden = false;

  clearTimeout(bubbleEl._hideTimer);
  bubbleEl._hideTimer = setTimeout(() => {
    bubbleEl.hidden = true;
  }, 2700);
}

function triggerCatTurn(side) {
  const isBro = side === "bro";
  const catEl = isBro ? catBro : catSis;
  const bubbleEl = isBro ? catBroBubble : catSisBubble;
  const otherBubbleEl = isBro ? catSisBubble : catBroBubble;

  // Restart the pounce animation cleanly even on rapid clicks
  catEl.classList.remove("is-pouncing");
  void catEl.offsetWidth;
  catEl.classList.add("is-pouncing");

  let lineIndex;
  let lineText;

  if (isBro) {
    lineIndex = broIndex % broLines.length;
    lineText = broLines[lineIndex];
    broIndex += 1;
    nextAutoSide = "sis";
  } else {
    lineIndex = sisIndex % sisLines.length;
    lineText = sisLines[lineIndex];
    sisIndex += 1;
    nextAutoSide = "bro";
  }

  showCatBubble(bubbleEl, otherBubbleEl, lineText);

  // Match the center clash word to the dialogue beat
  const clashWord = lineIndex === 2 ? "Appa!!" : (isBro ? "Bap!" : "6 vs 7!");
  showComicClash(clashWord);

  setTimeout(() => {
    catEl.classList.remove("is-pouncing");
  }, 460);
}

function startCatAutoClash(playOpeningLine = true) {
  stopCatAutoClash();

  if (playOpeningLine) {
    // Start the first Gems argument beat right after Scene 2 fades in
    autoStartTimer = setTimeout(() => {
      triggerCatTurn("sis");
    }, 500);
  }

  autoClashTimer = setInterval(() => {
    triggerCatTurn(nextAutoSide);
  }, 3200);
}

function stopCatAutoClash() {
  clearTimeout(autoStartTimer);
  clearInterval(autoClashTimer);
  autoStartTimer = null;
  autoClashTimer = null;
}

// =========================================================
// Scene 3: Google Gravity Gallery
// =========================================================
const scene3 = document.getElementById("scene-3");
const galleryGrid = document.getElementById("gallery-grid");
const gravityHint = document.getElementById("gravity-hint");
const gravitySubhint = document.getElementById("gravity-subhint");
const tapTooltip = document.getElementById("tap-tooltip");
const gravityPopup = document.getElementById("gravity-popup");
const gravityPopupText = document.getElementById("gravity-popup-text");
const scene3NextBtn = document.getElementById("scene3-next-btn");
const photoLightbox = document.getElementById("photo-lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCloseBtn = document.getElementById("lightbox-close-btn");

// Google Gravity settings (Matter.js primary + custom offline fallback)
const GRAVITY = 0.2;
const AIR_DRAG = 0.992;
const BOUNCE = 0.34;
const WALL_BOUNCE = 0.42;
const CARD_BOUNCE = 0.28;
const WALL_THICKNESS = 140;

let physicsBodies = [];
let gravityActivated = false;
let physicsRafId = null;
let gravityTimers = [];
let physicsStartTime = 0;
let lastFrameTime = 0;

// Matter.js state
let useMatterPhysics = false;
let matterEngine = null;
let matterMouse = null;
let matterMouseConstraint = null;
let matterWalls = [];
let matterBodyToItem = new Map();
let cardToItemMap = new WeakMap();
let draggedMatterItem = null;
let activeTapCandidate = null;
let matterHandlersBound = false;

let tooltipTimer = null;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function encodeAssetPath(relativePath) {
  return relativePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function renderGalleryFrames() {
  galleryGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const isMegaCollage = GALLERY_PHOTOS.length > 100;
  scene3.classList.toggle("has-mega-collage", isMegaCollage);
  galleryGrid.classList.toggle("is-mega-collage", isMegaCollage);
  document.body.classList.toggle("has-mega-body", isMegaCollage);

  // Shuffle a copy so all unique photos appear in an organic mixed collage
  const photoPool = [...GALLERY_PHOTOS];
  for (let i = photoPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [photoPool[i], photoPool[j]] = [photoPool[j], photoPool[i]];
  }

  const frameCount = photoPool.length > 0 ? photoPool.length : TOTAL_GALLERY_FRAMES;

  for (let i = 0; i < frameCount; i++) {
    const rawPath = photoPool[i % photoPool.length];
    const card = document.createElement("figure");
    card.className = "gravity-card photo-frame";

    // Subtle organic collage scatter (-5deg to +5deg tilt) before gravity activates
    const scatterX = (Math.random() - 0.5) * (isMegaCollage ? 5 : 10);
    const scatterY = (Math.random() - 0.5) * (isMegaCollage ? 5 : 10);
    const scatterRot = (Math.random() - 0.5) * 10;
    card.dataset.scatterRot = scatterRot.toFixed(2);
    card.style.setProperty("--scatter-x", `${scatterX.toFixed(1)}px`);
    card.style.setProperty("--scatter-y", `${scatterY.toFixed(1)}px`);
    card.style.setProperty("--scatter-rot", `${scatterRot.toFixed(1)}deg`);

    const img = document.createElement("img");
    img.src = encodeAssetPath(rawPath);
    img.alt = `Memory ${i + 1}`;
    img.loading = "lazy";
    img.decoding = "async";
    img.draggable = false;

    // Cleanly remove any unreadable/corrupt frame so no broken image icon ever appears
    img.addEventListener("error", () => {
      const brokenItem = cardToItemMap.get(card);
      if (brokenItem && brokenItem.mBody && matterEngine && window.Matter) {
        window.Matter.World.remove(matterEngine.world, brokenItem.mBody);
        matterBodyToItem.delete(brokenItem.mBody);
      }
      card.remove();
      physicsBodies = physicsBodies.filter((body) => body.el !== card);
    });

    card.appendChild(img);
    fragment.appendChild(card);
  }

  galleryGrid.appendChild(fragment);
}

function updatePopupText(message, showContinueBtn = false) {
  gravityPopupText.classList.add("is-swapping");

  const swapTimer = setTimeout(() => {
    gravityPopupText.textContent = message;
    gravityPopupText.classList.remove("is-swapping");

    if (showContinueBtn) {
      scene3NextBtn.hidden = false;
      void scene3NextBtn.offsetWidth;
      scene3NextBtn.classList.add("is-visible");
    }
  }, 220);

  gravityTimers.push(swapTimer);
}

function scheduleGravityPopupSequence() {
  // Stage 1 (10s): Fade out subhint and reveal popup with first cheeky message
  gravityTimers.push(
    setTimeout(() => {
      gravitySubhint.classList.remove("is-visible");

      gravityPopupText.textContent = "Have you played enough 🧐";
      scene3NextBtn.hidden = true;
      scene3NextBtn.classList.remove("is-visible");

      gravityPopup.hidden = false;
      void gravityPopup.offsetWidth;
      gravityPopup.classList.add("is-visible");
    }, 10000)
  );

  // Stage 2 (20s): Smoothly swap to second message
  gravityTimers.push(
    setTimeout(() => {
      updatePopupText("Aren't you done playing yet !!! 🥸", false);
    }, 20000)
  );

  // Stage 3 (30s): Final message + reveal Continue button
  gravityTimers.push(
    setTimeout(() => {
      updatePopupText("Are you a 5 y/o? Come, we still have a lot more to explore", true);
    }, 30000)
  );
}

function resolveCardCollisions() {
  // Run 3 quick passes so all 55 upright frames stack cleanly without sinking into each other
  for (let pass = 0; pass < 3; pass++) {
    for (let i = 0; i < physicsBodies.length; i++) {
      for (let j = i + 1; j < physicsBodies.length; j++) {
        const a = physicsBodies[i];
        const b = physicsBodies[j];

        const overlapX = Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
        const overlapY = Math.min(a.y + a.height, b.y + b.height) - Math.max(a.y, b.y);

        if (overlapX <= 0 || overlapY <= 0) {
          continue;
        }

        const aCenterX = a.x + a.width / 2;
        const bCenterX = b.x + b.width / 2;
        const aCenterY = a.y + a.height / 2;
        const bCenterY = b.y + b.height / 2;

        if (overlapX < overlapY) {
          // Separate horizontally
          const dir = aCenterX < bCenterX ? -1 : 1;
          if (a.isDragging) {
            b.x -= dir * overlapX;
            b.vx = a.vx * 0.75 - dir * 1.8;
          } else if (b.isDragging) {
            a.x += dir * overlapX;
            a.vx = b.vx * 0.75 + dir * 1.8;
          } else {
            a.x += dir * (overlapX / 2);
            b.x -= dir * (overlapX / 2);

            const relVx = a.vx - b.vx;
            if (relVx * dir < 0) {
              const impulse = relVx * ((1 + CARD_BOUNCE) / 2);
              a.vx -= impulse;
              b.vx += impulse;
            }
          }
        } else {
          // Separate vertically
          const dir = aCenterY < bCenterY ? -1 : 1;
          if (a.isDragging) {
            b.y -= dir * overlapY;
            b.vy = a.vy * 0.75 - dir * 1.8;
          } else if (b.isDragging) {
            a.y += dir * overlapY;
            a.vy = b.vy * 0.75 + dir * 1.8;
          } else {
            a.y += dir * (overlapY / 2);
            b.y -= dir * (overlapY / 2);

            const relVy = a.vy - b.vy;
            if (relVy * dir < 0) {
              const impulse = relVy * ((1 + CARD_BOUNCE) / 2);
              a.vy -= impulse;
              b.vy += impulse;
            }

            // Gently settle horizontal drift when stacked on top of another frame
            if (Math.abs(relVy) < 1.2) {
              a.vx *= 0.94;
              b.vx *= 0.94;
            }
          }
        }
      }
    }
  }
}

function wakeBody(body) {
  body.settled = false;
  body.releaseDelayMs = 0;

  if (!physicsRafId && gravityActivated) {
    lastFrameTime = 0;
    physicsRafId = requestAnimationFrame(stepPhysics);
  }
}

function stepPhysics(timestamp) {
  if (!physicsStartTime) {
    physicsStartTime = timestamp;
  }
  if (!lastFrameTime) {
    lastFrameTime = timestamp;
  }

  // Normalize time step to ~60fps so physics feel identical on 60Hz and 120Hz screens
  const dt = clamp((timestamp - lastFrameTime) / 16.67, 0.5, 2.5);
  const elapsed = timestamp - physicsStartTime;
  lastFrameTime = timestamp;

  const viewW = window.innerWidth;
  const viewH = window.innerHeight;
  const usePairCollisions = physicsBodies.length <= 100;

  let anyAwake = false;

  for (const body of physicsBodies) {
    if (body.isDragging) {
      anyAwake = true;
      continue;
    }

    if (body.settled) {
      continue;
    }

    anyAwake = true;

    // Wait for this card's staggered release delay (0–450ms) unless the user grabs it
    if (elapsed < body.releaseDelayMs) {
      continue;
    }

    // Apply slow-motion gravity and gentle air drag (upright only, zero spinning)
    body.vy += GRAVITY * dt;
    body.vx *= Math.pow(AIR_DRAG, dt);
    body.vy *= Math.pow(AIR_DRAG, dt);

    body.x += body.vx * dt;
    body.y += body.vy * dt;
  }

  // Use card-to-card collisions only for small collages (<= 100);
  // 100+ bodies use lightweight floor/wall physics for locked 60fps
  if (usePairCollisions) {
    resolveCardCollisions();
  }

  // Keep every active frame inside screen walls and floor, settling once velocity < 0.2
  for (const body of physicsBodies) {
    if (body.settled && !body.isDragging) {
      continue;
    }

    if (!body.isDragging && elapsed >= body.releaseDelayMs) {
      const maxX = Math.max(0, viewW - body.width);
      const maxY = Math.max(0, viewH - body.height - body.floorOffset);

      // Left / Right walls
      if (body.x < 0) {
        body.x = 0;
        body.vx = Math.abs(body.vx) * WALL_BOUNCE;
      } else if (body.x > maxX) {
        body.x = maxX;
        body.vx = -Math.abs(body.vx) * WALL_BOUNCE;
      }

      // Ceiling
      if (body.y < 0) {
        body.y = 0;
        body.vy = Math.abs(body.vy) * BOUNCE;
      }

      // Floor (soft damped bounce, then mark settled once velocity drops below 0.2)
      if (body.y >= maxY) {
        body.y = maxY;
        if (Math.abs(body.vy) > 0.9) {
          body.vy = -Math.abs(body.vy) * BOUNCE;
        } else {
          body.vy = 0;
          body.vx *= 0.85;
          if (Math.abs(body.vx) < 0.2 && Math.abs(body.vy) < 0.2) {
            body.vx = 0;
            body.vy = 0;
            body.settled = true;
          }
        }
      }
    }

    body.el.style.transform = `translate3d(${body.x}px, ${body.y}px, 0)`;
  }

  // Stop requestAnimationFrame cleanly once all cards have settled (0% idle CPU)
  if (anyAwake) {
    physicsRafId = requestAnimationFrame(stepPhysics);
  } else {
    physicsRafId = null;
  }
}

function showTapTooltip(body, text) {
  tapTooltip.textContent = text;
  tapTooltip.style.left = `${body.x + body.width / 2}px`;
  tapTooltip.style.top = `${Math.max(28, body.y - 8)}px`;
  tapTooltip.hidden = false;

  clearTimeout(tooltipTimer);
  tooltipTimer = setTimeout(() => {
    tapTooltip.hidden = true;
  }, 650);
}

function hideTapTooltip() {
  clearTimeout(tooltipTimer);
  tapTooltip.hidden = true;
}

function openLightbox(imageSrc) {
  lightboxImg.src = imageSrc;
  photoLightbox.hidden = false;
  void photoLightbox.offsetWidth;
  photoLightbox.classList.add("is-open");
}

function closeLightbox() {
  if (photoLightbox.hidden) {
    return;
  }

  photoLightbox.classList.remove("is-open");
  setTimeout(() => {
    photoLightbox.hidden = true;
    lightboxImg.src = "";
  }, 240);
}

function handleCardTap(body) {
  openLightbox(body.imageSrc);
}

function attachCardDragHandlers(body) {
  let dragOffsetX = 0;
  let dragOffsetY = 0;
  let downX = 0;
  let downY = 0;

  body.el.addEventListener("pointerdown", (event) => {
    if (!gravityActivated || useMatterPhysics) {
      return;
    }

    event.preventDefault();
    wakeBody(body);
    body.isDragging = true;
    body.vx = 0;
    body.vy = 0;

    downX = event.clientX;
    downY = event.clientY;
    dragOffsetX = event.clientX - body.x;
    dragOffsetY = event.clientY - body.y;

    body.el.classList.add("is-dragging");
    body.el.setPointerCapture(event.pointerId);
  });

  body.el.addEventListener("pointermove", (event) => {
    if (!body.isDragging || useMatterPhysics) {
      return;
    }

    const prevX = body.x;
    const prevY = body.y;

    const maxX = Math.max(0, window.innerWidth - body.width);
    const maxY = Math.max(0, window.innerHeight - body.height);

    body.x = clamp(event.clientX - dragOffsetX, 0, maxX);
    body.y = clamp(event.clientY - dragOffsetY, 0, maxY);

    // Save recent pointer movement as throw velocity for when the user lets go
    body.vx = clamp((body.x - prevX) * 0.75, -30, 30);
    body.vy = clamp((body.y - prevY) * 0.75, -30, 30);
  });

  function stopDragging(event, isCancel = false) {
    if (!body.isDragging) {
      return;
    }

    body.isDragging = false;
    body.el.classList.remove("is-dragging");
    if (body.el.hasPointerCapture(event.pointerId)) {
      body.el.releasePointerCapture(event.pointerId);
    }

    // Quick tap (< 6px drag distance) opens lightbox; >= 6px flings with velocity
    if (!isCancel) {
      const distance = Math.hypot(event.clientX - downX, event.clientY - downY);
      if (distance < 6) {
        handleCardTap(body);
      }
    }
  }

  body.el.addEventListener("pointerup", (event) => stopDragging(event, false));
  body.el.addEventListener("pointercancel", (event) => stopDragging(event, true));
}

function stopOverlayPropagation(event) {
  event.stopPropagation();
}

function bindOverlayMouseGuards(shouldBind) {
  const overlays = [globalBackBtn, gravityPopup, photoLightbox];
  overlays.forEach((el) => {
    if (!el) {
      return;
    }
    el.removeEventListener("mousedown", stopOverlayPropagation);
    el.removeEventListener("touchstart", stopOverlayPropagation);
    if (shouldBind) {
      el.addEventListener("mousedown", stopOverlayPropagation);
      el.addEventListener("touchstart", stopOverlayPropagation, { passive: true });
    }
  });
}

function createMatterWalls(viewW, viewH) {
  const { Bodies } = window.Matter;
  const halfWall = WALL_THICKNESS / 2;
  const wallOptions = {
    isStatic: true,
    restitution: 0.35,
    friction: 0.65,
    frictionStatic: 0.85
  };

  return [
    // Floor
    Bodies.rectangle(viewW / 2, viewH + halfWall, viewW + WALL_THICKNESS * 2, WALL_THICKNESS, wallOptions),
    // Ceiling
    Bodies.rectangle(viewW / 2, -halfWall, viewW + WALL_THICKNESS * 2, WALL_THICKNESS, wallOptions),
    // Left wall
    Bodies.rectangle(-halfWall, viewH / 2, WALL_THICKNESS, viewH * 4, wallOptions),
    // Right wall
    Bodies.rectangle(viewW + halfWall, viewH / 2, WALL_THICKNESS, viewH * 4, wallOptions)
  ];
}

function handleScene3Resize() {
  if (!gravityActivated) {
    return;
  }

  const viewW = window.innerWidth;
  const viewH = window.innerHeight;

  if (useMatterPhysics && matterEngine && window.Matter) {
    const { World, Sleeping } = window.Matter;
    if (matterWalls.length > 0) {
      World.remove(matterEngine.world, matterWalls);
    }
    matterWalls = createMatterWalls(viewW, viewH);
    World.add(matterEngine.world, matterWalls);

    // Wake cards gently so they settle naturally onto the resized floor/walls
    for (const item of physicsBodies) {
      if (item.mBody) {
        Sleeping.set(item.mBody, false);
      }
    }
    return;
  }

  // Fallback resize clamp
  for (const body of physicsBodies) {
    body.x = clamp(body.x, 0, Math.max(0, viewW - body.width));
    body.y = clamp(body.y, 0, Math.max(0, viewH - body.height - body.floorOffset));
    wakeBody(body);
  }
}

function handleMatterGridPointerDown(event) {
  if (!gravityActivated || !useMatterPhysics || !photoLightbox.hidden) {
    return;
  }

  const card = event.target.closest(".gravity-card, .photo-frame");
  if (!card) {
    return;
  }

  activeTapCandidate = {
    card,
    downX: event.clientX,
    downY: event.clientY,
    pointerId: event.pointerId
  };
}

function handleMatterWindowPointerUp(event) {
  if (!activeTapCandidate || event.pointerId !== activeTapCandidate.pointerId) {
    return;
  }

  const candidate = activeTapCandidate;
  activeTapCandidate = null;

  if (!gravityActivated || !useMatterPhysics) {
    return;
  }

  if (event.target && event.target.closest("#global-back-btn, #gravity-popup, #photo-lightbox")) {
    return;
  }

  const dragDistance = Math.hypot(event.clientX - candidate.downX, event.clientY - candidate.downY);
  if (dragDistance < 6) {
    const item = cardToItemMap.get(candidate.card);
    if (item && item.imageSrc) {
      openLightbox(item.imageSrc);
    }
  }
}

function handleMatterWindowPointerCancel(event) {
  if (activeTapCandidate && event.pointerId === activeTapCandidate.pointerId) {
    activeTapCandidate = null;
  }
}

function stepMatterPhysics(timestamp) {
  if (!gravityActivated || !matterEngine || !window.Matter) {
    physicsRafId = null;
    return;
  }

  if (!lastFrameTime) {
    lastFrameTime = timestamp;
  }

  // Clamp timestep for smooth, consistent 60fps rigid-body integration
  const deltaMs = clamp(timestamp - lastFrameTime, 8, 22);
  lastFrameTime = timestamp;

  window.Matter.Engine.update(matterEngine, deltaMs);

  // Sync DOM positions & rotation in a single GPU-composited pass (skip sleeping bodies)
  for (let i = 0; i < physicsBodies.length; i++) {
    const item = physicsBodies[i];
    const mBody = item.mBody;
    if (!mBody) {
      continue;
    }

    if (mBody.isSleeping && item.wasSleeping) {
      continue;
    }

    const x = mBody.position.x - item.width / 2;
    const y = mBody.position.y - item.height / 2;
    item.el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${mBody.angle.toFixed(4)}rad)`;
    item.wasSleeping = mBody.isSleeping;
  }

  physicsRafId = requestAnimationFrame(stepMatterPhysics);
}

function startMatterPhysics(cardEls, measurements) {
  const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Events, Sleeping } = window.Matter;
  const viewW = window.innerWidth;
  const viewH = window.innerHeight;

  useMatterPhysics = true;
  matterEngine = Engine.create({ enableSleeping: true });
  matterEngine.gravity.y = 1;
  matterEngine.positionIterations = 6;
  matterEngine.velocityIterations = 4;

  matterBodyToItem.clear();
  cardToItemMap = new WeakMap();
  draggedMatterItem = null;

  const rigidBodies = [];
  physicsBodies = cardEls.map((el, index) => {
    const box = measurements[index];
    const imgEl = el.querySelector("img");
    const scatterDeg = parseFloat(el.dataset.scatterRot || "0") || 0;
    const initialAngle = (scatterDeg * Math.PI) / 180;

    el.style.width = `${box.width}px`;
    el.style.height = `${box.height}px`;
    el.classList.add("is-falling");

    const centerX = box.left + box.width / 2;
    const centerY = box.top + box.height / 2;

    const mBody = Bodies.rectangle(centerX, centerY, box.width, box.height, {
      restitution: 0.36,
      friction: 0.45,
      frictionStatic: 0.65,
      frictionAir: 0.012,
      density: 0.002,
      sleepThreshold: 45,
      angle: initialAngle
    });

    // Subtle initial scatter impulse + spin so photos break apart and tumble naturally
    Body.setVelocity(mBody, {
      x: (Math.random() - 0.5) * 3.2,
      y: Math.random() * 1.4
    });
    Body.setAngularVelocity(mBody, (Math.random() - 0.5) * 0.09);

    const item = {
      el,
      imageSrc: imgEl ? imgEl.src : "",
      width: box.width,
      height: box.height,
      mBody,
      wasSleeping: false
    };

    el.style.transform = `translate3d(${box.left.toFixed(2)}px, ${box.top.toFixed(2)}px, 0) rotate(${initialAngle.toFixed(4)}rad)`;

    rigidBodies.push(mBody);
    matterBodyToItem.set(mBody, item);
    cardToItemMap.set(el, item);
    return item;
  });

  matterWalls = createMatterWalls(viewW, viewH);
  World.add(matterEngine.world, [...rigidBodies, ...matterWalls]);

  // Attach MouseConstraint for Google Gravity grab, drag & fling across the pile
  matterMouse = Mouse.create(document.body);
  matterMouseConstraint = MouseConstraint.create(matterEngine, {
    mouse: matterMouse,
    constraint: {
      stiffness: 0.65,
      angularStiffness: 0.25,
      render: { visible: false }
    }
  });
  World.add(matterEngine.world, matterMouseConstraint);

  Events.on(matterMouseConstraint, "startdrag", (event) => {
    const draggedBody = event.body;
    if (!draggedBody) {
      return;
    }

    Sleeping.set(draggedBody, false);
    const item = matterBodyToItem.get(draggedBody);
    if (item) {
      item.wasSleeping = false;
      item.el.classList.add("is-dragging");
      draggedMatterItem = item;
    }
  });

  Events.on(matterMouseConstraint, "enddrag", () => {
    if (draggedMatterItem) {
      draggedMatterItem.el.classList.remove("is-dragging");
      draggedMatterItem = null;
    }
  });

  bindOverlayMouseGuards(true);

  if (!matterHandlersBound) {
    galleryGrid.addEventListener("pointerdown", handleMatterGridPointerDown);
    window.addEventListener("pointerup", handleMatterWindowPointerUp);
    window.addEventListener("pointercancel", handleMatterWindowPointerCancel);
    matterHandlersBound = true;
  }

  window.removeEventListener("resize", handleScene3Resize);
  window.addEventListener("resize", handleScene3Resize);

  lastFrameTime = 0;
  physicsRafId = requestAnimationFrame(stepMatterPhysics);
}

function startFallbackPhysics(cardEls, measurements) {
  useMatterPhysics = false;
  const isMegaCollage = cardEls.length > 100;

  physicsBodies = cardEls.map((el, index) => {
    const box = measurements[index];
    const imgEl = el.querySelector("img");
    el.style.width = `${box.width}px`;
    el.style.height = `${box.height}px`;
    el.classList.add("is-falling");

    const body = {
      el,
      imageSrc: imgEl ? imgEl.src : "",
      x: box.left,
      y: box.top,
      width: box.width,
      height: box.height,
      vx: (Math.random() - 0.5) * 2.4,
      vy: 0,
      floorOffset: isMegaCollage ? Math.random() * 28 : 0,
      releaseDelayMs: Math.random() * 450,
      isDragging: false,
      settled: false
    };

    el.style.transform = `translate3d(${body.x}px, ${body.y}px, 0)`;
    attachCardDragHandlers(body);
    return body;
  });

  window.removeEventListener("resize", handleScene3Resize);
  window.addEventListener("resize", handleScene3Resize);

  physicsStartTime = 0;
  lastFrameTime = 0;
  physicsRafId = requestAnimationFrame(stepPhysics);
}

function activateGravity() {
  if (gravityActivated || scene3.hidden) {
    return;
  }

  gravityActivated = true;
  if (window.scrollY !== 0 || window.scrollX !== 0) {
    window.scrollTo(0, 0);
  }
  document.body.classList.add("is-gravity-active");
  document.removeEventListener("click", handleScene3FirstClick);
  gravityHint.classList.add("is-hidden");

  // Reveal the grab/throw/tap hint at the top once gravity starts
  gravitySubhint.hidden = false;
  void gravitySubhint.offsetWidth;
  gravitySubhint.classList.add("is-visible");

  const cardEls = Array.from(galleryGrid.querySelectorAll(".gravity-card"));

  // Step 1: Batch ALL DOM reads once BEFORE any style writes (zero layout thrashing)
  const measurements = cardEls.map((el) => {
    const rect = el.getBoundingClientRect();
    const width = el.offsetWidth;
    const height = el.offsetHeight;
    return {
      width,
      height,
      left: rect.left + (rect.width - width) / 2,
      top: rect.top + (rect.height - height) / 2
    };
  });
  const gridRect = galleryGrid.getBoundingClientRect();

  // Step 2: Lock grid height, then start Matter.js 2D rigid-body physics (or offline fallback)
  galleryGrid.style.height = `${gridRect.height}px`;

  if (typeof window.Matter !== "undefined" && window.Matter.Engine) {
    startMatterPhysics(cardEls, measurements);
  } else {
    startFallbackPhysics(cardEls, measurements);
  }

  // Start the 3-stage cheeky popup sequence (10s, 20s, 30s)
  scheduleGravityPopupSequence();
}

function handleScene3FirstClick(event) {
  if (
    event &&
    event.target &&
    event.target.closest("#global-back-btn, #gravity-popup, #photo-lightbox")
  ) {
    return;
  }
  activateGravity();
}

function cleanupScene3Physics() {
  cancelAnimationFrame(physicsRafId);
  physicsRafId = null;
  gravityActivated = false;

  if (matterEngine && window.Matter) {
    const { Events, Mouse, World, Engine } = window.Matter;
    if (matterMouseConstraint) {
      Events.off(matterMouseConstraint);
    }
    if (matterMouse) {
      try {
        Mouse.setElement(matterMouse, null);
      } catch (err) {
        // Ignore if already detached
      }
    }
    World.clear(matterEngine.world, false);
    Engine.clear(matterEngine);
  }

  matterEngine = null;
  matterMouse = null;
  matterMouseConstraint = null;
  matterWalls = [];
  draggedMatterItem = null;
  activeTapCandidate = null;
  matterBodyToItem.clear();
  cardToItemMap = new WeakMap();
  useMatterPhysics = false;

  bindOverlayMouseGuards(false);

  if (matterHandlersBound) {
    galleryGrid.removeEventListener("pointerdown", handleMatterGridPointerDown);
    window.removeEventListener("pointerup", handleMatterWindowPointerUp);
    window.removeEventListener("pointercancel", handleMatterWindowPointerCancel);
    matterHandlersBound = false;
  }

  window.removeEventListener("resize", handleScene3Resize);

  // Reset inline card transforms and physics classes
  for (const item of physicsBodies) {
    if (item && item.el) {
      item.el.classList.remove("is-falling", "is-dragging");
      item.el.style.width = "";
      item.el.style.height = "";
      item.el.style.transform = "";
    }
  }
  physicsBodies = [];

  document.body.classList.remove("is-gravity-active", "has-mega-body");

  gravityTimers.forEach((timerId) => clearTimeout(timerId));
  gravityTimers = [];

  hideTapTooltip();
  closeLightbox();
  gravitySubhint.classList.remove("is-visible");

  document.removeEventListener("click", handleScene3FirstClick);
}

function resetScene3() {
  cleanupScene3Physics();
  scene3.classList.remove("has-mega-collage");
  galleryGrid.classList.remove("is-mega-collage");
  galleryGrid.style.height = "";
  galleryGrid.innerHTML = "";
  gravityHint.classList.remove("is-hidden");
  gravitySubhint.hidden = true;
  gravitySubhint.classList.remove("is-visible");
  gravityPopup.hidden = true;
  gravityPopup.classList.remove("is-visible");
  gravityPopupText.textContent = "";
  scene3NextBtn.hidden = true;
  scene3NextBtn.disabled = false;
  scene3NextBtn.classList.remove("is-visible");
}

// =========================================================
// Scene 4: Don't Click (The Trap)
// =========================================================
const scene4 = document.getElementById("scene-4");
const trapContainer = document.getElementById("trap-container");
const trapWarning = document.getElementById("trap-warning");
const clickStrikes = document.getElementById("click-strikes");
const strikeDots = Array.from(clickStrikes.querySelectorAll(".strike-dot"));
const dontClickWrap = document.getElementById("dont-click-wrap");
const dontClickBtn = document.getElementById("dont-click-btn");
const alarmFlash = document.getElementById("alarm-flash");

let trapClickCount = 0;

function resetScene4() {
  trapClickCount = 0;
  trapWarning.textContent = "Seriously. Just leave it alone.";
  dontClickBtn.disabled = false;
  dontClickWrap.classList.remove("is-swollen");
  trapContainer.classList.remove("shake-mild", "shake-intense");
  alarmFlash.hidden = true;
  alarmFlash.classList.remove("is-warning-flash", "is-alarm-flash");

  strikeDots.forEach((dot) => dot.classList.remove("is-lit"));
  clickStrikes.setAttribute("aria-label", "Warning strikes: 0 of 3");
}

function triggerTrapShake(className) {
  trapContainer.classList.remove("shake-mild", "shake-intense");
  void trapContainer.offsetWidth;
  trapContainer.classList.add(className);
}

function triggerRedFlash(className, durationMs) {
  alarmFlash.hidden = false;
  alarmFlash.classList.remove("is-warning-flash", "is-alarm-flash");
  void alarmFlash.offsetWidth;
  alarmFlash.classList.add(className);

  setTimeout(() => {
    alarmFlash.classList.remove(className);
    alarmFlash.hidden = true;
  }, durationMs);
}

async function handleTrapClick() {
  if (trapClickCount >= 3) {
    return;
  }

  trapClickCount += 1;

  // Light up the matching strike dot (0, 1, or 2)
  const dot = strikeDots[trapClickCount - 1];
  if (dot) {
    dot.classList.add("is-lit");
  }
  clickStrikes.setAttribute("aria-label", `Warning strikes: ${trapClickCount} of 3`);

  if (trapClickCount === 1) {
    triggerTrapShake("shake-mild");
    trapWarning.textContent = "Hey! Can't you read?! It literally says DON'T CLICK.";
  } else if (trapClickCount === 2) {
    triggerTrapShake("shake-intense");
    triggerRedFlash("is-warning-flash", 460);
    dontClickWrap.classList.add("is-swollen");
    trapWarning.textContent =
      "Last warning!! Touch it one more time and you're going to regret it...";
  } else if (trapClickCount === 3) {
    dontClickBtn.disabled = true;
    triggerTrapShake("shake-intense");
    triggerRedFlash("is-alarm-flash", 950);

    await wait(950);
    await transitionToScene5();
  }
}

// =========================================================
// Scene Transitions
// =========================================================
async function revealSceneEl(sceneEl, sceneId) {
  sceneEl.classList.remove("is-fading-out");
  sceneEl.hidden = false;
  void sceneEl.offsetWidth;
  sceneEl.classList.add("is-active");
  setCurrentScene(sceneId);
  globalBackBtn.disabled = false;
}

async function hideSceneEl(sceneEl) {
  globalBackBtn.disabled = true;
  sceneEl.classList.remove("is-active");
  sceneEl.classList.add("is-fading-out");
  await wait(600);
  sceneEl.hidden = true;
  sceneEl.classList.remove("is-fading-out");
}

async function transitionToScene2() {
  introSessionId += 1;
  await hideSceneEl(scene1);

  scene2NextBtn.disabled = false;
  await revealSceneEl(scene2, "scene-2");
  startCatAutoClash();
}

async function transitionToScene3() {
  stopCatAutoClash();

  // Pre-build the 55 frames while Scene 2 fades out so natural dimensions load immediately
  resetScene3();
  renderGalleryFrames();

  await hideSceneEl(scene2);

  // Switch to the bright Google Gravity space
  document.body.classList.add("is-gallery");
  await revealSceneEl(scene3, "scene-3");

  // Listen anywhere on the screen (except nav/popups) without duplicate listeners
  document.removeEventListener("click", handleScene3FirstClick);
  document.addEventListener("click", handleScene3FirstClick);
}

async function transitionToScene4() {
  cancelAnimationFrame(physicsRafId);
  physicsRafId = null;
  await hideSceneEl(scene3);
  resetScene3();
  scene3.hidden = true;
  scene3.style.cssText = "";
  document.body.classList.remove("is-gallery", "is-gravity-active", "has-mega-body");
  window.scrollTo(0, 0);

  // Prepare and reveal Scene 4
  resetScene4();
  await revealSceneEl(scene4, "scene-4");
}

async function transitionToScene5() {
  await hideSceneEl(scene4);

  // Prepare and reveal Scene 5 (Rage Bait Mode)
  resetScene5();
  await revealSceneEl(scene5, "scene-5");

  runFakeScanSequence();
}

// =========================================================
// Scene 5: Rage Bait Mode (Custom 5-Step Gauntlet)
// =========================================================
const scene5 = document.getElementById("scene-5");
const rageCard = document.getElementById("rage-card");
const rageMeterLabel = document.getElementById("rage-meter-label");
const rageMeterBar = document.getElementById("rage-meter-bar");
const rageFireFloor = document.getElementById("rage-fire-floor");
const rageFlash = document.getElementById("rage-flash");
const crackerBurstLayer = document.getElementById("cracker-burst-layer");

// Step 1 & 2: Fake Account Scan, Celebration & Dodging Skip
const subScanBox = document.getElementById("sub-scan-box");
const scanSpinner = document.getElementById("scan-spinner");
const scanStatus = document.getElementById("scan-status");
const scanTrack = document.getElementById("scan-track");
const scanBar = document.getElementById("scan-bar");
const subOfferPanel = document.getElementById("sub-offer-panel");
const subTaunt = document.getElementById("sub-taunt");
const subArena = document.getElementById("sub-arena");
const subUnlockBtn = document.getElementById("sub-unlock-btn");
const subSkipBtn = document.getElementById("sub-skip-btn");

// Step 3: Typing Message + Runaway Apology Button
const apologyBox = document.getElementById("apology-box");
const apologyTaunt = document.getElementById("apology-taunt");
const runawayArena = document.getElementById("runaway-arena");
const runawayBtn = document.getElementById("runaway-btn");

// Step 4: Single Combined Rigged Sibling Quiz (3-Heart Arcade Lives)
const riggedQuizBox = document.getElementById("rigged-quiz-box");
const quizHeartsContainer = document.getElementById("quiz-hearts");
const quizHeartEls = Array.from(quizHeartsContainer.querySelectorAll(".pixel-heart"));
const quizButtonsWrap = document.getElementById("quiz-buttons");
const quizBroBtn = document.getElementById("quiz-bro-btn");
const quizSisBtn = document.getElementById("quiz-sis-btn");
const quizRenewBtn = document.getElementById("quiz-renew-btn");
const quizFeedback = document.getElementById("quiz-feedback");

// Step 5: Unlocked Lifetime Subscription Finale
const subUnlockedFinale = document.getElementById("sub-unlocked-finale");
const scene5NextBtn = document.getElementById("scene5-next-btn");

const SKIP_TAUNTS = [
  "Nice try, cheapskate! 😂",
  "Skip button broken for lucky guys!",
  "One more try and see what happens... BOOM! Both are Unlock now! 👑"
];

const RUNAWAY_TAUNTS = [
  "Too slow, Anna!",
  "Skill issue 😂",
  "Almost had it!",
  "Okay fine, click me..."
];

let scene5SessionId = 0;
let skipDodges = 0;
let isSkipGliding = false;
let triedToSkip = false;
let runawayDodges = 0;
let isRunawayGliding = false;
let quizHeartsLeft = 3;
let hasRenewedHearts = false;
let isQuizCompleted = false;
let rageTimers = [];

function updateRageMeter(percent, isOverheating = false) {
  rageMeterBar.style.width = `${percent}%`;
  rageMeterLabel.textContent = isOverheating ? `${percent}% OVERHEATING 🔥` : `${percent}%`;
  rageMeterLabel.classList.toggle("is-overheating", isOverheating);
}

function triggerRageShake() {
  rageCard.classList.remove("is-shaking");
  void rageCard.offsetWidth;
  rageCard.classList.add("is-shaking");

  rageTimers.push(
    setTimeout(() => {
      rageCard.classList.remove("is-shaking");
    }, 450)
  );
}

function triggerRageFlash() {
  rageFlash.hidden = false;
  rageFlash.classList.remove("is-warning-flash");
  void rageFlash.offsetWidth;
  rageFlash.classList.add("is-warning-flash");

  rageTimers.push(
    setTimeout(() => {
      rageFlash.classList.remove("is-warning-flash");
      rageFlash.hidden = true;
    }, 460)
  );
}

function launchCrackerConfetti() {
  crackerBurstLayer.innerHTML = "";
  const colors = ["#fbbf24", "#ef4444", "#22c55e", "#3b82f6", "#ec4899", "#f97316"];
  const origins = [
    { x: 20, y: 35 },
    { x: 50, y: 25 },
    { x: 80, y: 35 }
  ];

  const fragment = document.createDocumentFragment();

  origins.forEach((origin) => {
    for (let i = 0; i < 24; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";

      const angle = Math.random() * Math.PI * 2;
      const distance = 90 + Math.random() * 240;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance + 110;
      const rot = (Math.random() - 0.5) * 720;

      piece.style.left = `${origin.x}%`;
      piece.style.top = `${origin.y}%`;
      piece.style.width = `${6 + Math.random() * 6}px`;
      piece.style.height = `${8 + Math.random() * 8}px`;
      piece.style.backgroundColor = colors[i % colors.length];
      piece.style.setProperty("--dx", `${dx}px`);
      piece.style.setProperty("--dy", `${dy}px`);
      piece.style.setProperty("--rot", `${rot}deg`);
      piece.style.setProperty("--burst-duration", `${1.3 + Math.random() * 0.9}s`);

      fragment.appendChild(piece);
    }
  });

  crackerBurstLayer.appendChild(fragment);

  rageTimers.push(
    setTimeout(() => {
      crackerBurstLayer.innerHTML = "";
    }, 2400)
  );
}

function resetScene5() {
  scene5SessionId += 1;
  rageTimers.forEach((id) => clearTimeout(id));
  rageTimers = [];

  skipDodges = 0;
  isSkipGliding = false;
  triedToSkip = false;
  runawayDodges = 0;
  isRunawayGliding = false;
  quizHeartsLeft = 3;
  hasRenewedHearts = false;
  isQuizCompleted = false;

  rageCard.classList.remove("is-shaking", "is-festive");
  rageFireFloor.classList.remove("is-extinguished");
  rageFlash.hidden = true;
  rageFlash.classList.remove("is-warning-flash");
  crackerBurstLayer.innerHTML = "";
  updateRageMeter(60, false);

  // Show Step 1 scanner, hide Steps 3–5
  subScanBox.hidden = false;
  apologyBox.hidden = true;
  riggedQuizBox.hidden = true;
  subUnlockedFinale.hidden = true;

  scanSpinner.hidden = false;
  scanTrack.hidden = false;
  scanStatus.hidden = false;
  scanStatus.classList.remove("is-error");
  scanStatus.textContent = "Detecting bank account & wallet details...";
  scanBar.style.transition = "none";
  scanBar.style.width = "0%";

  subOfferPanel.hidden = true;
  subTaunt.textContent = "Claim your once-in-a-lifetime blessing below:";
  subUnlockBtn.disabled = false;
  subSkipBtn.disabled = false;
  subSkipBtn.textContent = "Skip";
  subSkipBtn.classList.remove("is-dodging", "is-converted-unlock");
  subSkipBtn.style.left = "";
  subSkipBtn.style.top = "";

  apologyTaunt.textContent = "";
  runawayArena.hidden = true;
  runawayBtn.disabled = false;
  runawayBtn.classList.remove("is-moved", "is-caught");
  runawayBtn.style.left = "";
  runawayBtn.style.top = "";

  resetRiggedQuiz();
  scene5NextBtn.disabled = false;
}

// Step 1: Fake Account Scan -> Poor Joke -> Confetti Celebration
async function runFakeScanSequence() {
  const mySession = scene5SessionId;

  // Phase A (0 - 2.5s): Scanning animation
  await wait(60);
  if (mySession !== scene5SessionId) return;
  scanBar.style.transition = "width 2.3s ease";
  scanBar.style.width = "100%";
  await wait(2450);
  if (mySession !== scene5SessionId) return;

  // Phase B (at 2.5s): Red alert scan result
  scanSpinner.hidden = true;
  scanTrack.hidden = true;
  scanStatus.classList.add("is-error");
  scanStatus.textContent =
    "❌ Scan Complete: Poor guy! Not rich enough to afford a Best Sister 💸😂";
  triggerRageFlash();
  triggerRageShake();
  updateRageMeter(66, false);
  await wait(3000);
  if (mySession !== scene5SessionId) return;

  // Phase C (at 5.5s): Sudden Cracker Burst + Lifetime Free Subscription!
  scanStatus.hidden = true;
  rageCard.classList.add("is-festive");
  subOfferPanel.hidden = false;
  launchCrackerConfetti();
  triggerRageShake();
}

// Step 2: Dodging Skip Button (3 dodges -> transforms into second Unlock)
function dodgeSkipButton() {
  if (skipDodges >= 3 || isSkipGliding) {
    return;
  }

  triedToSkip = true;
  isSkipGliding = true;

  if (!subSkipBtn.classList.contains("is-dodging")) {
    const arenaRect = subArena.getBoundingClientRect();
    const btnRect = subSkipBtn.getBoundingClientRect();
    subSkipBtn.style.left = `${btnRect.left - arenaRect.left}px`;
    subSkipBtn.style.top = `${btnRect.top - arenaRect.top}px`;
    subSkipBtn.classList.add("is-dodging");
    void subSkipBtn.offsetWidth;
  }

  const pad = 12;
  const maxLeft = Math.max(pad, subArena.clientWidth - subSkipBtn.offsetWidth - pad);
  const maxTop = Math.max(pad, subArena.clientHeight - subSkipBtn.offsetHeight - pad);
  const currentLeft = parseFloat(subSkipBtn.style.left) || pad;
  const currentTop = parseFloat(subSkipBtn.style.top) || pad;

  let bestLeft = pad;
  let bestTop = pad;
  let bestDist = -1;

  for (let i = 0; i < 6; i++) {
    const candLeft = pad + Math.random() * Math.max(0, maxLeft - pad);
    const candTop = pad + Math.random() * Math.max(0, maxTop - pad);
    const dist = Math.hypot(candLeft - currentLeft, candTop - currentTop);
    if (dist > bestDist) {
      bestDist = dist;
      bestLeft = candLeft;
      bestTop = candTop;
    }
  }

  subSkipBtn.style.left = `${bestLeft}px`;
  subSkipBtn.style.top = `${bestTop}px`;
  subTaunt.textContent = SKIP_TAUNTS[skipDodges];
  skipDodges += 1;

  // On 3rd Skip attempt, transform Skip into a second Unlock button!
  if (skipDodges >= 3) {
    subSkipBtn.textContent = "Unlock";
    subSkipBtn.classList.add("is-converted-unlock");
    triggerRageShake();
  }

  rageTimers.push(
    setTimeout(() => {
      isSkipGliding = false;
    }, 150)
  );
}

// Step 3: Character-by-character typing + Fast Runaway Apology Button
async function startStep3Apology() {
  const mySession = scene5SessionId;
  subUnlockBtn.disabled = true;
  subSkipBtn.disabled = true;

  subScanBox.hidden = true;
  apologyBox.hidden = false;
  updateRageMeter(75, false);

  const line = triedToSkip
    ? "Congratulations lucky guy... Now apologize for trying to skip! 😤"
    : "Congratulations lucky guy... Now apologize for clicking DON'T CLICK! 😤";

  apologyTaunt.textContent = "";
  for (let i = 0; i < line.length; i++) {
    if (mySession !== scene5SessionId) return;
    apologyTaunt.textContent += line[i];
    await wait(28);
  }
  if (mySession !== scene5SessionId) return;

  runawayArena.hidden = false;
}

function dodgeRunawayButton() {
  if (runawayDodges >= 4 || isRunawayGliding) {
    return;
  }

  isRunawayGliding = true;

  if (!runawayBtn.classList.contains("is-moved")) {
    const arenaRect = runawayArena.getBoundingClientRect();
    const btnRect = runawayBtn.getBoundingClientRect();
    runawayBtn.style.left = `${btnRect.left - arenaRect.left}px`;
    runawayBtn.style.top = `${btnRect.top - arenaRect.top}px`;
    runawayBtn.classList.add("is-moved");
    void runawayBtn.offsetWidth;
  }

  const pad = 12;
  const maxLeft = Math.max(pad, runawayArena.clientWidth - runawayBtn.offsetWidth - pad);
  const maxTop = Math.max(pad, runawayArena.clientHeight - runawayBtn.offsetHeight - pad);
  const currentLeft = parseFloat(runawayBtn.style.left) || pad;
  const currentTop = parseFloat(runawayBtn.style.top) || pad;

  let bestLeft = pad;
  let bestTop = pad;
  let bestDist = -1;

  for (let i = 0; i < 6; i++) {
    const candLeft = pad + Math.random() * Math.max(0, maxLeft - pad);
    const candTop = pad + Math.random() * Math.max(0, maxTop - pad);
    const dist = Math.hypot(candLeft - currentLeft, candTop - currentTop);
    if (dist > bestDist) {
      bestDist = dist;
      bestLeft = candLeft;
      bestTop = candTop;
    }
  }

  runawayBtn.style.left = `${bestLeft}px`;
  runawayBtn.style.top = `${bestTop}px`;

  apologyTaunt.textContent = RUNAWAY_TAUNTS[runawayDodges];
  runawayDodges += 1;

  if (runawayDodges >= 4) {
    runawayBtn.classList.add("is-caught");
  }

  rageTimers.push(
    setTimeout(() => {
      isRunawayGliding = false;
    }, 130)
  );
}

async function handleRunawayCaught() {
  const mySession = scene5SessionId;
  runawayBtn.disabled = true;
  apologyTaunt.textContent =
    "Apology accepted... ONLY if you pass the final Sibling Quiz! 👇";
  updateRageMeter(85, false);
  triggerRageShake();

  await wait(1400);
  if (mySession !== scene5SessionId) return;

  apologyBox.hidden = true;
  riggedQuizBox.hidden = false;
  resetRiggedQuiz();
}

// Step 4: Single Combined Rigged Sibling Quiz (3-Heart Lives Mechanic)
function resetRiggedQuiz() {
  quizHeartsLeft = 3;
  hasRenewedHearts = false;
  isQuizCompleted = false;
  quizFeedback.textContent = "";

  quizHeartsContainer.setAttribute("aria-label", "Lives remaining: 3 of 3");
  quizHeartEls.forEach((heart) => {
    heart.classList.remove("is-lost", "is-restored");
  });

  quizButtonsWrap.hidden = false;
  quizBroBtn.hidden = false;
  quizBroBtn.disabled = false;
  quizSisBtn.disabled = false;
  quizRenewBtn.hidden = true;
}

function handleQuizBroClick() {
  if (isQuizCompleted || quizHeartsLeft <= 0) {
    return;
  }

  quizHeartsLeft -= 1;
  triggerRageFlash();
  triggerRageShake();

  // Break hearts from right to left (index 2 -> 1 -> 0)
  const brokenHeart = quizHeartEls[quizHeartsLeft];
  if (brokenHeart) {
    brokenHeart.classList.remove("is-restored");
    brokenHeart.classList.add("is-lost");
  }
  quizHeartsContainer.setAttribute(
    "aria-label",
    `Lives remaining: ${quizHeartsLeft} of 3`
  );

  if (quizHeartsLeft === 2) {
    quizFeedback.textContent = "❌ Wrong! 2 hearts left...";
  } else if (quizHeartsLeft === 1) {
    quizFeedback.textContent = "❌ Still wrong! 1 heart left, choose wisely...";
  } else {
    // 0 hearts left: Game Over -> hide options and reveal Renew Hearts button
    quizButtonsWrap.hidden = true;
    quizRenewBtn.hidden = false;
    quizFeedback.textContent =
      "💔 GAME OVER! You ran out of hearts trying to pick yourself!";
  }
}

function handleQuizRenewClick() {
  quizHeartsLeft = 3;
  hasRenewedHearts = true;
  quizHeartsContainer.setAttribute("aria-label", "Lives remaining: 3 of 3");

  quizHeartEls.forEach((heart) => {
    heart.classList.remove("is-lost", "is-restored");
    void heart.offsetWidth;
    heart.classList.add("is-restored");
  });

  quizRenewBtn.hidden = true;
  quizButtonsWrap.hidden = false;
  // Remove Yuvan option completely so only Harini remains
  quizBroBtn.hidden = true;
  quizFeedback.textContent = "3 hearts restored! Now answer honestly 😌";
}

async function handleQuizSisClick() {
  if (isQuizCompleted) {
    return;
  }

  const mySession = scene5SessionId;
  isQuizCompleted = true;
  quizBroBtn.disabled = true;
  quizSisBtn.disabled = true;

  quizFeedback.textContent = hasRenewedHearts
    ? "Took you long enough to accept the truth! 😂"
    : "Ooh, I think you have finally gained some knowledge! 🧠✨";

  updateRageMeter(100, true);
  triggerRageShake();

  await wait(1350);
  if (mySession !== scene5SessionId) return;

  // Reveal Step 5 Finale with celebratory confetti burst!
  riggedQuizBox.hidden = true;
  subUnlockedFinale.hidden = false;
  rageCard.classList.add("is-festive");
  launchCrackerConfetti();
}

function cleanupScene5() {
  scene5SessionId += 1;
  rageTimers.forEach((id) => clearTimeout(id));
  rageTimers = [];

  crackerBurstLayer.innerHTML = "";
  rageCard.classList.remove("is-shaking", "is-festive");
  rageFlash.classList.remove("is-warning-flash");
  rageFlash.hidden = true;
  rageFireFloor.classList.add("is-extinguished");
}

// Scene 5 -> Scene 7 (Hug & Cheek-Kiss First!)
async function exitScene5ToScene7() {
  cleanupScene5();
  await hideSceneEl(scene5);
  await transitionToScene7();
}

async function enterScene6() {
  polaroidSessionId += 1;
  renderPolaroids();
  document.body.classList.add("is-polaroids");
  await revealSceneEl(scene6, "scene-6");

  typePolaroidSubtitle();
  startPolaroidMusic();
}

async function transitionToScene6() {
  clearHugTimers();
  hugIllustration.classList.remove("is-hugging");
  hugKissPopup.hidden = true;
  hugHeartsBurst.innerHTML = "";

  await hideSceneEl(scene7);
  document.body.classList.remove("is-hug-scene");

  await enterScene6();
}

// =========================================================
// Scene 6: Polaroid Memories (Emotional + Ambient Music)
// =========================================================
const scene6 = document.getElementById("scene-6");
const polaroidAudioBtn = document.getElementById("polaroid-audio-btn");
const polaroidTypedSub = document.getElementById("polaroid-typed-sub");
const polaroidsGrid = document.getElementById("polaroids-grid");
const finalPolaroidNote = document.getElementById("final-polaroid-note");
const scene6NextBtn = document.getElementById("scene6-next-btn");

const POLAROID_SUBTITLE_TEXT =
  "Behind all the jokes and daily fights… this is what I actually hold onto.";

// Tender 4-chord ambient piano / music-box progression (Hz)
const AMBIENT_CHORDS = [
  [261.63, 329.63, 392.0, 493.88], // Cmaj7
  [220.0, 261.63, 329.63, 392.0],  // Am7
  [174.61, 220.0, 261.63, 329.63], // Fmaj7
  [196.0, 246.94, 293.66, 349.23]  // G7/G6 warmth
];

let polaroidSessionId = 0;
let flippedPolaroidsSet = new Set();
let isPolaroidMuted = false;
let polaroidAudioCtx = null;
let polaroidMasterGain = null;
let polaroidMelodyTimer = null;
let polaroidHtmlAudio = null;
let polaroidNoteStep = 0;

function updateAudioToggleUI() {
  polaroidAudioBtn.textContent = isPolaroidMuted ? "🔇 Muted" : "🎵 Music: On";
  polaroidAudioBtn.setAttribute("aria-pressed", String(isPolaroidMuted));
}

function playSynthNote(freq) {
  if (!polaroidAudioCtx || !polaroidMasterGain || isPolaroidMuted) {
    return;
  }

  const now = polaroidAudioCtx.currentTime;
  const oscMain = polaroidAudioCtx.createOscillator();
  const oscOver = polaroidAudioCtx.createOscillator();
  const noteGain = polaroidAudioCtx.createGain();
  const filter = polaroidAudioCtx.createBiquadFilter();

  // Warm soft music-box / felt-piano tone
  oscMain.type = "triangle";
  oscMain.frequency.setValueAtTime(freq, now);

  oscOver.type = "sine";
  oscOver.frequency.setValueAtTime(freq * 2, now);

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1150, now);

  noteGain.gain.setValueAtTime(0.0001, now);
  noteGain.gain.linearRampToValueAtTime(0.24, now + 0.05);
  noteGain.gain.exponentialRampToValueAtTime(0.0008, now + 2.4);

  oscMain.connect(filter);
  oscOver.connect(filter);
  filter.connect(noteGain);
  noteGain.connect(polaroidMasterGain);

  oscMain.start(now);
  oscOver.start(now);
  oscMain.stop(now + 2.45);
  oscOver.stop(now + 2.45);
}

function startBuiltInSynthMusic() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) {
    return;
  }

  if (!polaroidAudioCtx) {
    polaroidAudioCtx = new AudioCtx();
  }
  if (polaroidAudioCtx.state === "suspended") {
    polaroidAudioCtx.resume().catch(() => {});
  }

  if (!polaroidMasterGain) {
    polaroidMasterGain = polaroidAudioCtx.createGain();
    polaroidMasterGain.connect(polaroidAudioCtx.destination);
  }

  const now = polaroidAudioCtx.currentTime;
  polaroidMasterGain.gain.cancelScheduledValues(now);
  polaroidMasterGain.gain.setValueAtTime(0.0001, now);
  polaroidMasterGain.gain.linearRampToValueAtTime(isPolaroidMuted ? 0.0001 : 0.18, now + 1.8);

  clearInterval(polaroidMelodyTimer);
  polaroidNoteStep = 0;

  const triggerNextArpeggioNote = () => {
    const chordIdx = Math.floor(polaroidNoteStep / 4) % AMBIENT_CHORDS.length;
    const noteIdx = polaroidNoteStep % 4;
    playSynthNote(AMBIENT_CHORDS[chordIdx][noteIdx]);
    polaroidNoteStep += 1;
  };

  triggerNextArpeggioNote();
  polaroidMelodyTimer = setInterval(triggerNextArpeggioNote, 760);
}

function startPolaroidMusic() {
  updateAudioToggleUI();

  // Try optional local file assets/music.mp3 first; fall back cleanly to built-in Web Audio synth
  if (!polaroidHtmlAudio) {
    polaroidHtmlAudio = new Audio("assets/music.mp3");
    polaroidHtmlAudio.loop = true;
  }

  polaroidHtmlAudio.volume = isPolaroidMuted ? 0 : 0.32;
  const playPromise = polaroidHtmlAudio.play();

  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      polaroidHtmlAudio = null;
      startBuiltInSynthMusic();
    });
  }
}

function togglePolaroidAudio() {
  isPolaroidMuted = !isPolaroidMuted;
  updateAudioToggleUI();

  if (polaroidHtmlAudio) {
    polaroidHtmlAudio.volume = isPolaroidMuted ? 0 : 0.32;
  }

  if (polaroidMasterGain && polaroidAudioCtx) {
    const now = polaroidAudioCtx.currentTime;
    polaroidMasterGain.gain.cancelScheduledValues(now);
    polaroidMasterGain.gain.setValueAtTime(polaroidMasterGain.gain.value, now);
    polaroidMasterGain.gain.linearRampToValueAtTime(isPolaroidMuted ? 0.0001 : 0.18, now + 0.25);
  }
}

function stopPolaroidMusic() {
  clearInterval(polaroidMelodyTimer);
  polaroidMelodyTimer = null;

  if (polaroidHtmlAudio) {
    polaroidHtmlAudio.pause();
    polaroidHtmlAudio.currentTime = 0;
  }

  if (polaroidMasterGain && polaroidAudioCtx) {
    const now = polaroidAudioCtx.currentTime;
    polaroidMasterGain.gain.cancelScheduledValues(now);
    polaroidMasterGain.gain.setValueAtTime(polaroidMasterGain.gain.value, now);
    polaroidMasterGain.gain.linearRampToValueAtTime(0.0001, now + 0.55);
  }
}

function stopPolaroidScene() {
  polaroidSessionId += 1;
  stopPolaroidMusic();
}

async function typePolaroidSubtitle() {
  const mySession = polaroidSessionId;
  polaroidTypedSub.textContent = "";

  for (let i = 0; i < POLAROID_SUBTITLE_TEXT.length; i++) {
    if (mySession !== polaroidSessionId) return;
    polaroidTypedSub.textContent += POLAROID_SUBTITLE_TEXT[i];
    await wait(40);
  }
}

function togglePolaroidFlip(cardEl, index) {
  const isFlipped = cardEl.classList.toggle("is-flipped");
  cardEl.setAttribute("aria-pressed", String(isFlipped));

  // Track unique flipped Polaroids for the hidden keepsake note
  if (isFlipped) {
    flippedPolaroidsSet.add(index);
  }

  // Spotlight focus: dim unflipped cards gently while any card is flipped open
  const anyFlipped = polaroidsGrid.querySelectorAll(".polaroid-card.is-flipped").length > 0;
  polaroidsGrid.classList.toggle("has-focus", anyFlipped);

  if (flippedPolaroidsSet.size >= 5 && finalPolaroidNote.hidden) {
    finalPolaroidNote.hidden = false;
    void finalPolaroidNote.offsetWidth;
    finalPolaroidNote.classList.add("is-visible");
  }
}

function renderPolaroids() {
  flippedPolaroidsSet = new Set();
  polaroidsGrid.classList.remove("has-focus");
  finalPolaroidNote.hidden = true;
  finalPolaroidNote.classList.remove("is-visible");
  scene6NextBtn.disabled = false;

  polaroidsGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();

  POLAROID_MEMORIES.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "polaroid-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("aria-label", `Polaroid ${index + 1}: ${item.caption}. Click to flip.`);
    card.style.setProperty("--tilt", item.tilt || "0deg");

    const inner = document.createElement("div");
    inner.className = "polaroid-inner";

    // Front Face
    const front = document.createElement("div");
    front.className = "polaroid-front";

    const tape = document.createElement("span");
    tape.className = "polaroid-tape";
    tape.setAttribute("aria-hidden", "true");

    const photoWrap = document.createElement("div");
    photoWrap.className = "polaroid-photo-wrap";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.caption;
    img.draggable = false;

    const caption = document.createElement("p");
    caption.className = "polaroid-caption";
    caption.textContent = item.caption;

    photoWrap.appendChild(img);
    front.appendChild(tape);
    front.appendChild(photoWrap);
    front.appendChild(caption);

    // Back Face
    const back = document.createElement("div");
    back.className = "polaroid-back";

    const backTitle = document.createElement("h3");
    backTitle.className = "polaroid-back-title";
    backTitle.textContent = item.caption;

    const story = document.createElement("p");
    story.className = "polaroid-story";
    story.textContent = item.story;

    const flipHint = document.createElement("p");
    flipHint.className = "polaroid-flip-hint";
    flipHint.textContent = "Tap to flip back ↺";

    back.appendChild(backTitle);
    back.appendChild(story);
    back.appendChild(flipHint);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    card.addEventListener("click", () => togglePolaroidFlip(card, index));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        togglePolaroidFlip(card, index);
      }
    });

    fragment.appendChild(card);
  });

  polaroidsGrid.appendChild(fragment);
}

async function transitionToScene7() {
  // Transition smoothly into Scene 7's warm golden-hour hug scene
  resetScene7();
  document.body.classList.add("is-hug-scene");
  await revealSceneEl(scene7, "scene-7");

  // Auto-play the hug & cheek-kiss animation once 1.5s after entering Scene 7
  hugTimers.push(setTimeout(playHugSequence, 1500));
}

// =========================================================
// Scene 7: Brother & Sister Hug
// =========================================================
const scene7 = document.getElementById("scene-7");
const hugIllustration = document.getElementById("hug-illustration");
const hugKissPopup = document.getElementById("hug-kiss-popup");
const hugHeartsBurst = document.getElementById("hug-hearts-burst");
const sendHugBtn = document.getElementById("send-hug-btn");
const scene7NextBtn = document.getElementById("scene7-next-btn");

let hugTimers = [];
let isHuggingNow = false;

function clearHugTimers() {
  hugTimers.forEach((id) => clearTimeout(id));
  hugTimers = [];
}

function resetScene7() {
  clearHugTimers();
  isHuggingNow = false;
  hugIllustration.classList.remove("is-hugging");
  hugKissPopup.hidden = true;
  hugHeartsBurst.innerHTML = "";
  scene7NextBtn.disabled = false;
}

function spawnHugHearts() {
  hugHeartsBurst.innerHTML = "";
  const colors = ["#f43f5e", "#ec4899", "#fb7185", "#f59e0b"];

  for (let i = 0; i < 9; i++) {
    const heart = document.createElement("span");
    heart.className = "hug-heart-particle";
    heart.textContent = i % 3 === 0 ? "💛" : "♥";
    heart.style.color = colors[i % colors.length];
    heart.style.left = `${34 + Math.random() * 34}%`;
    heart.style.top = `${36 + Math.random() * 24}%`;
    heart.style.animationDelay = `${i * 110}ms`;
    heart.style.setProperty("--hx", `${(Math.random() - 0.5) * 70}px`);
    hugHeartsBurst.appendChild(heart);
  }
}

function playHugSequence() {
  if (isHuggingNow) {
    return;
  }

  isHuggingNow = true;
  hugIllustration.classList.add("is-hugging");

  // Show "mwah! 💋" and floating hearts right as sister leans in for the kiss
  hugTimers.push(
    setTimeout(() => {
      hugKissPopup.hidden = false;
      hugKissPopup.style.animation = "none";
      void hugKissPopup.offsetWidth;
      hugKissPopup.style.animation = "";
      spawnHugHearts();
    }, 320)
  );

  // Ease smoothly back to cozy idle sway after ~3.2s so he can replay anytime
  hugTimers.push(
    setTimeout(() => {
      hugIllustration.classList.remove("is-hugging");
      hugKissPopup.hidden = true;
      hugHeartsBurst.innerHTML = "";
      isHuggingNow = false;
    }, 3200)
  );
}

async function enterBirthdayFinale() {
  resetBirthdayFinale();
  document.body.classList.add("is-birthday-scene");
  window.scrollTo(0, 0);
  await revealSceneEl(sceneBirthday, "scene-birthday");
}

async function transitionToBirthdayFinale() {
  stopPolaroidScene();
  await hideSceneEl(scene6);
  document.body.classList.remove("is-polaroids");

  await enterBirthdayFinale();
}

// =========================================================
// Scene 8 (Grand Finale): Birthday Cake & Wish
// =========================================================
const sceneBirthday = document.getElementById("scene-birthday");
const birthdaySubtitle = document.getElementById("birthday-subtitle");
const cakeGlowAura = document.getElementById("cake-glow-aura");
const cakeCandleEls = Array.from(document.querySelectorAll("#cake-candles .cake-candle"));
const blowAllCandlesBtn = document.getElementById("blow-all-candles-btn");
const birthdayConfettiLayer = document.getElementById("birthday-confetti-layer");
const birthdayWishCard = document.getElementById("birthday-wish-card");
const relightCandlesBtn = document.getElementById("relight-candles-btn");
const replayJourneyBtn = document.getElementById("replay-journey-btn");

let birthdayTimers = [];
let hasWishRevealed = false;

function clearBirthdayTimers() {
  birthdayTimers.forEach((id) => clearTimeout(id));
  birthdayTimers = [];
}

function resetBirthdayFinale() {
  clearBirthdayTimers();
  hasWishRevealed = false;

  cakeCandleEls.forEach((candle) => {
    candle.classList.remove("is-blown");
    candle.disabled = false;
  });

  cakeGlowAura.classList.remove("is-dimmed");
  birthdaySubtitle.textContent = "Tap the candles (or click below) to blow them out";
  blowAllCandlesBtn.hidden = false;
  blowAllCandlesBtn.disabled = false;

  birthdayConfettiLayer.innerHTML = "";
  birthdayWishCard.hidden = true;
  birthdayWishCard.classList.remove("is-revealed");
  replayJourneyBtn.disabled = false;
}

function launchBirthdayConfetti() {
  birthdayConfettiLayer.innerHTML = "";
  const colors = ["#fbbf24", "#fde047", "#f59e0b", "#fb7185", "#fffbeb", "#f97316"];
  const origins = [
    { x: 18, y: 38 },
    { x: 50, y: 26 },
    { x: 82, y: 38 }
  ];

  const fragment = document.createDocumentFragment();

  origins.forEach((origin) => {
    for (let i = 0; i < 28; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";

      const angle = Math.random() * Math.PI * 2;
      const distance = 95 + Math.random() * 260;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance + 130;
      const rot = (Math.random() - 0.5) * 720;

      piece.style.left = `${origin.x}%`;
      piece.style.top = `${origin.y}%`;
      piece.style.width = `${6 + Math.random() * 6}px`;
      piece.style.height = `${8 + Math.random() * 8}px`;
      piece.style.backgroundColor = colors[i % colors.length];
      piece.style.setProperty("--dx", `${dx}px`);
      piece.style.setProperty("--dy", `${dy}px`);
      piece.style.setProperty("--rot", `${rot}deg`);
      piece.style.setProperty("--burst-duration", `${1.5 + Math.random() * 1.1}s`);

      fragment.appendChild(piece);
    }
  });

  birthdayConfettiLayer.appendChild(fragment);

  birthdayTimers.push(
    setTimeout(() => {
      birthdayConfettiLayer.innerHTML = "";
    }, 2800)
  );
}

function playBirthdayChime() {
  if (isPolaroidMuted) {
    return;
  }

  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) {
    return;
  }

  if (!polaroidAudioCtx) {
    polaroidAudioCtx = new AudioCtx();
  }
  if (polaroidAudioCtx.state === "suspended") {
    polaroidAudioCtx.resume().catch(() => {});
  }

  // Gentle celebratory birthday chime arpeggio (C4 -> D4 -> C4 -> F4 -> E4 -> G4 -> C5)
  const chimeNotes = [
    { freq: 392.0, delay: 0 },
    { freq: 392.0, delay: 0.22 },
    { freq: 440.0, delay: 0.45 },
    { freq: 392.0, delay: 0.78 },
    { freq: 523.25, delay: 1.1 },
    { freq: 493.88, delay: 1.45 },
    { freq: 659.25, delay: 1.88 }
  ];

  const baseTime = polaroidAudioCtx.currentTime;
  chimeNotes.forEach(({ freq, delay }) => {
    const start = baseTime + delay;
    const osc = polaroidAudioCtx.createOscillator();
    const oscBell = polaroidAudioCtx.createOscillator();
    const gain = polaroidAudioCtx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, start);

    oscBell.type = "sine";
    oscBell.frequency.setValueAtTime(freq * 2, start);

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(0.11, start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0008, start + 0.95);

    osc.connect(gain);
    oscBell.connect(gain);
    gain.connect(polaroidAudioCtx.destination);

    osc.start(start);
    oscBell.start(start);
    osc.stop(start + 1.0);
    oscBell.stop(start + 1.0);
  });
}

function revealBirthdayWish() {
  if (hasWishRevealed) {
    return;
  }

  hasWishRevealed = true;
  cakeGlowAura.classList.add("is-dimmed");
  blowAllCandlesBtn.hidden = true;
  birthdaySubtitle.textContent = "Make a wish... ✨🎉";

  launchBirthdayConfetti();
  playBirthdayChime();

  birthdayTimers.push(
    setTimeout(() => {
      birthdayWishCard.hidden = false;
      void birthdayWishCard.offsetWidth;
      birthdayWishCard.classList.add("is-revealed");
    }, 450)
  );
}

function blowOutSingleCandle(candleEl) {
  if (candleEl.classList.contains("is-blown")) {
    return;
  }

  candleEl.classList.add("is-blown");
  candleEl.disabled = true;

  const allBlown = cakeCandleEls.every((el) => el.classList.contains("is-blown"));
  if (allBlown) {
    revealBirthdayWish();
  }
}

function blowOutAllCandles() {
  blowAllCandlesBtn.disabled = true;
  const litCandles = cakeCandleEls.filter((el) => !el.classList.contains("is-blown"));

  if (litCandles.length === 0) {
    revealBirthdayWish();
    return;
  }

  litCandles.forEach((candleEl, idx) => {
    birthdayTimers.push(
      setTimeout(() => {
        blowOutSingleCandle(candleEl);
      }, idx * 75)
    );
  });
}

async function restartJourney() {
  clearBirthdayTimers();
  stopCatAutoClash();
  stopPolaroidScene();
  resetScene3();
  resetScene4();
  resetScene5();
  resetScene7();
  resetBirthdayFinale();

  await hideSceneEl(sceneBirthday);

  // Hide all scenes 2–birthday and clear every body theme class
  [scene2, scene3, scene4, scene5, scene6, scene7, sceneBirthday].forEach(
    (sceneEl) => {
      sceneEl.hidden = true;
      sceneEl.classList.remove("is-active", "is-fading-out");
    }
  );

  document.body.classList.remove(
    "is-gallery",
    "is-gravity-active",
    "has-mega-body",
    "is-polaroids",
    "is-hug-scene",
    "is-birthday-scene"
  );

  // Re-enable navigation buttons across scenes
  scene2NextBtn.disabled = false;
  scene6NextBtn.disabled = false;

  // Reset Scene 1 and replay the intro cleanly
  introText.textContent = "";
  introText.classList.remove("is-visible");
  curiousBtn.hidden = true;
  curiousBtn.disabled = false;
  curiousBtn.classList.remove("is-visible");

  await revealSceneEl(scene1, "scene-1");
  runIntroSequence();
}

// Global Back Navigation Across Scenes
async function goBackOneScene() {
  if (isSceneTransitioning || currentSceneId === "scene-1") {
    return;
  }

  isSceneTransitioning = true;
  globalBackBtn.disabled = true;

  try {
    switch (currentSceneId) {
      case "scene-2": {
        stopCatAutoClash();
        await hideSceneEl(scene2);

        introSessionId += 1;
        introText.textContent = "Curious?????";
        introText.classList.add("is-visible");
        curiousBtn.hidden = false;
        curiousBtn.disabled = false;
        curiousBtn.classList.add("is-visible");

        await revealSceneEl(scene1, "scene-1");
        break;
      }

      case "scene-3": {
        cancelAnimationFrame(physicsRafId);
        physicsRafId = null;
        await hideSceneEl(scene3);
        resetScene3();
        scene3.hidden = true;
        scene3.style.cssText = "";
        document.body.classList.remove("is-gallery", "is-gravity-active", "has-mega-body");

        scene2NextBtn.disabled = false;
        await revealSceneEl(scene2, "scene-2");
        startCatAutoClash();
        break;
      }

      case "scene-4": {
        await hideSceneEl(scene4);

        resetScene3();
        renderGalleryFrames();
        document.body.classList.add("is-gallery");
        await revealSceneEl(scene3, "scene-3");
        document.removeEventListener("click", handleScene3FirstClick);
        document.addEventListener("click", handleScene3FirstClick);
        break;
      }

      case "scene-5": {
        cleanupScene5();
        await hideSceneEl(scene5);

        resetScene4();
        await revealSceneEl(scene4, "scene-4");
        break;
      }

      case "scene-7": {
        clearHugTimers();
        hugIllustration.classList.remove("is-hugging");
        hugKissPopup.hidden = true;
        hugHeartsBurst.innerHTML = "";
        await hideSceneEl(scene7);
        document.body.classList.remove("is-hug-scene");

        resetScene5();
        await revealSceneEl(scene5, "scene-5");
        runFakeScanSequence();
        break;
      }

      case "scene-6": {
        stopPolaroidScene();
        await hideSceneEl(scene6);
        document.body.classList.remove("is-polaroids");

        await transitionToScene7();
        break;
      }

      case "scene-birthday": {
        clearBirthdayTimers();
        birthdayConfettiLayer.innerHTML = "";
        await hideSceneEl(sceneBirthday);
        document.body.classList.remove("is-birthday-scene");

        await enterScene6();
        break;
      }
    }
  } finally {
    globalBackBtn.disabled = false;
    isSceneTransitioning = false;
  }
}

// =========================================================
// Event Listeners
// =========================================================
curiousBtn.addEventListener("click", async () => {
  curiousBtn.disabled = true;
  await transitionToScene2();
});

catBro.addEventListener("click", () => {
  triggerCatTurn("bro");
  startCatAutoClash(false);
});

catSis.addEventListener("click", () => {
  triggerCatTurn("sis");
  startCatAutoClash(false);
});

// Allow keyboard Enter/Space to pounce too
[catBro, catSis].forEach((catEl, idx) => {
  catEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      triggerCatTurn(idx === 0 ? "bro" : "sis");
      startCatAutoClash(false);
    }
  });
});

scene2NextBtn.addEventListener("click", async () => {
  scene2NextBtn.disabled = true;
  await transitionToScene3();
});

scene3NextBtn.addEventListener("click", async () => {
  scene3NextBtn.disabled = true;
  await transitionToScene4();
});

dontClickBtn.addEventListener("click", handleTrapClick);

// Scene 5: Step 1 & 2 Unlock + Dodging Skip Button
subUnlockBtn.addEventListener("click", startStep3Apology);

subSkipBtn.addEventListener("pointerenter", (event) => {
  if (event.pointerType === "mouse" && skipDodges < 3) {
    dodgeSkipButton();
  }
});

subSkipBtn.addEventListener("pointerdown", (event) => {
  if (skipDodges < 3) {
    event.preventDefault();
    dodgeSkipButton();
  }
});

subSkipBtn.addEventListener("click", () => {
  if (skipDodges < 3) {
    return;
  }
  // Once transformed into a second Unlock button, clicking it advances to Step 3
  startStep3Apology();
});

// Scene 5: Step 3 Runaway Apology Button (mouse hover + mobile tap)
runawayBtn.addEventListener("pointerenter", (event) => {
  if (event.pointerType === "mouse" && runawayDodges < 4) {
    dodgeRunawayButton();
  }
});

runawayBtn.addEventListener("pointerdown", (event) => {
  if (runawayDodges < 4) {
    event.preventDefault();
    dodgeRunawayButton();
  }
});

runawayBtn.addEventListener("click", async () => {
  if (runawayDodges < 4) {
    return;
  }
  await handleRunawayCaught();
});

// Scene 5: Step 4 Single Combined Rigged Sibling Quiz
quizBroBtn.addEventListener("click", handleQuizBroClick);
quizSisBtn.addEventListener("click", handleQuizSisClick);
quizRenewBtn.addEventListener("click", handleQuizRenewClick);

// Scene 5: Step 5 Finale Continue -> Scene 7 (Hug)
scene5NextBtn.addEventListener("click", async () => {
  scene5NextBtn.disabled = true;
  await exitScene5ToScene7();
});

// Scene 6: Audio Toggle + Captured Moments Continue -> Birthday Finale
polaroidAudioBtn.addEventListener("click", togglePolaroidAudio);

scene6NextBtn.addEventListener("click", async () => {
  scene6NextBtn.disabled = true;
  await transitionToBirthdayFinale();
});

globalBackBtn.addEventListener("click", goBackOneScene);

// Scene 7: Replay Hug & Cheek-Kiss + Continue -> Scene 6 (Captured Moments)
sendHugBtn.addEventListener("click", playHugSequence);
hugIllustration.addEventListener("click", playHugSequence);
hugIllustration.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    playHugSequence();
  }
});

scene7NextBtn.addEventListener("click", async () => {
  scene7NextBtn.disabled = true;
  await transitionToScene6();
});

// Birthday Cake & Wish Finale Listeners
cakeCandleEls.forEach((candleEl) => {
  candleEl.addEventListener("click", () => blowOutSingleCandle(candleEl));
});

blowAllCandlesBtn.addEventListener("click", blowOutAllCandles);
relightCandlesBtn.addEventListener("click", resetBirthdayFinale);

replayJourneyBtn.addEventListener("click", async () => {
  replayJourneyBtn.disabled = true;
  await restartJourney();
});

lightboxCloseBtn.addEventListener("click", closeLightbox);

photoLightbox.addEventListener("click", (event) => {
  if (event.target === photoLightbox) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !photoLightbox.hidden) {
    closeLightbox();
  }
});

window.addEventListener("DOMContentLoaded", runIntroSequence);
