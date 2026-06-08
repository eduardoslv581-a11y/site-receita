// Data
    const recipes = [
      {
        id: 1, name: "Bolo de Chocolate", emoji: "🍫", category: "doce",
        time: "45 min", difficulty: "Fácil", servings: 8,
        description: "Um bolo fofinho e irresistível com cobertura cremosa.",
        ingredients: [
          { name: "Farinha de trigo", qty: 2, unit: "xícaras" },
          { name: "Chocolate em pó", qty: 1, unit: "xícara" },
          { name: "Açúcar", qty: 1.5, unit: "xícaras" },
          { name: "Ovos", qty: 3, unit: "un" },
          { name: "Leite", qty: 1, unit: "xícara" },
          { name: "Óleo", qty: 0.5, unit: "xícara" },
          { name: "Fermento", qty: 1, unit: "colher" }
        ],
        steps: [
          "Pré-aqueça o forno a 180°C e unte uma forma.",
          "Misture os ingredientes secos: farinha, chocolate e açúcar.",
          "Adicione os ovos, leite e óleo. Bata bem até ficar homogêneo.",
          "Por último, adicione o fermento e misture delicadamente.",
          "Despeje na forma e asse por 35-40 minutos.",
          "Espere esfriar e cubra com sua cobertura favorita!"
        ]
      },
      {
        id: 2, name: "Risoto de Cogumelos", emoji: "🍄", category: "salgado",
        time: "35 min", difficulty: "Médio", servings: 4,
        description: "Cremoso e aromático, perfeito para impressionar.",
        ingredients: [
          { name: "Arroz arbóreo", qty: 2, unit: "xícaras" },
          { name: "Cogumelos fatiados", qty: 300, unit: "g" },
          { name: "Caldo de legumes", qty: 1, unit: "litro" },
          { name: "Vinho branco", qty: 0.5, unit: "xícara" },
          { name: "Parmesão ralado", qty: 0.5, unit: "xícara" },
          { name: "Manteiga", qty: 2, unit: "colheres" }
        ],
        steps: [
          "Aqueça o caldo e mantenha em fogo baixo.",
          "Refogue os cogumelos na manteiga até dourar. Reserve.",
          "Na mesma panela, toste o arroz por 2 minutos.",
          "Adicione o vinho e mexa até evaporar.",
          "Acrescente o caldo, uma concha por vez, mexendo sempre.",
          "Quando cremoso, adicione cogumelos e parmesão. Sirva imediatamente!"
        ]
      },
      {
        id: 3, name: "Limonada de Maracujá", emoji: "🍋", category: "bebida",
        time: "10 min", difficulty: "Fácil", servings: 6,
        description: "Refrescante e tropical, ideal para dias quentes.",
        ingredients: [
          { name: "Limões (suco)", qty: 4, unit: "un" },
          { name: "Polpa de maracujá", qty: 0.5, unit: "xícara" },
          { name: "Açúcar", qty: 4, unit: "colheres" },
          { name: "Água gelada", qty: 1, unit: "litro" },
          { name: "Gelo", qty: 1, unit: "xícara" }
        ],
        steps: [
          "Esprema os limões e coe o suco.",
          "Misture o suco com a água e o açúcar. Mexa até dissolver.",
          "Adicione a polpa de maracujá e misture.",
          "Coloque gelo e sirva decorado com rodelas de limão!"
        ]
      },
      {
        id: 4, name: "Pão de Queijo", emoji: "🧀", category: "salgado",
        time: "30 min", difficulty: "Fácil", servings: 20,
        description: "Crocante por fora, macio por dentro. Clássico mineiro.",
        ingredients: [
          { name: "Polvilho azedo", qty: 500, unit: "g" },
          { name: "Leite", qty: 1, unit: "xícara" },
          { name: "Óleo", qty: 0.5, unit: "xícara" },
          { name: "Ovos", qty: 2, unit: "un" },
          { name: "Queijo minas ralado", qty: 200, unit: "g" },
          { name: "Sal", qty: 1, unit: "colher de chá" }
        ],
        steps: [
          "Ferva o leite com o óleo e o sal.",
          "Despeje sobre o polvilho e misture com uma colher.",
          "Quando amornar, adicione os ovos um a um, amassando bem.",
          "Acrescente o queijo e misture até ficar uniforme.",
          "Faça bolinhas e coloque em assadeira untada.",
          "Asse a 200°C por 20-25 min até dourar. Sirva quente!"
        ]
      },
      {
        id: 5, name: "Brigadeiro Gourmet", emoji: "🍬", category: "doce",
        time: "20 min", difficulty: "Fácil", servings: 30,
        description: "O doce brasileiro mais amado, com toque especial.",
        ingredients: [
          { name: "Leite condensado", qty: 1, unit: "lata" },
          { name: "Chocolate em pó", qty: 4, unit: "colheres" },
          { name: "Manteiga", qty: 1, unit: "colher" },
          { name: "Granulado", qty: 1, unit: "xícara" }
        ],
        steps: [
          "Misture leite condensado, chocolate e manteiga numa panela.",
          "Cozinhe em fogo médio mexendo sem parar.",
          "Quando desgrudar do fundo da panela, está pronto!",
          "Despeje num prato untado e espere esfriar.",
          "Enrole bolinhas e passe no granulado."
        ]
      },
      {
        id: 6, name: "Smoothie Verde", emoji: "🥬", category: "bebida",
        time: "5 min", difficulty: "Fácil", servings: 2,
        description: "Nutritivo e energizante para começar bem o dia.",
        ingredients: [
          { name: "Banana congelada", qty: 1, unit: "un" },
          { name: "Espinafre", qty: 2, unit: "xícaras" },
          { name: "Leite de amêndoas", qty: 1, unit: "xícara" },
          { name: "Mel", qty: 1, unit: "colher" },
          { name: "Sementes de chia", qty: 1, unit: "colher" }
        ],
        steps: [
          "Coloque todos os ingredientes no liquidificador.",
          "Bata por 1-2 minutos até ficar cremoso.",
          "Prove e ajuste o mel se necessário.",
          "Sirva imediatamente decorado com sementes!"
        ]
      }
    ];

    let favorites = [];
    let currentFilter = 'all';
    let currentServings = {};

    // Render cards
    function renderCards() {
      const grid = document.getElementById('recipes-grid');
      const filtered = currentFilter === 'all' ? recipes : recipes.filter(r => r.category === currentFilter);
      
      grid.innerHTML = filtered.map((r, i) => `
        <div class="recipe-card rounded-2xl overflow-hidden cursor-pointer animate-fade-up" 
             style="background:#fff; border:1px solid #e8e2d9; animation-delay:${i * 0.1}s;"
              onclick="openRecipe(${r.id})">
          <div class="h-44 flex items-center justify-center relative" style="background: linear-gradient(135deg, ${getCatColor(r.category)}22, ${getCatColor(r.category)}44);">
            <span class="text-7xl">${r.emoji}</span>
            <button onclick="event.stopPropagation(); toggleFavorite(${r.id})" 
                    class="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition pulse-hover"
                    style="background:rgba(255,255,255,0.9);">
              <span style="color:${favorites.includes(r.id) ? '#c45d3e' : '#ccc'}; font-size:18px;">${favorites.includes(r.id) ? '❤️' : '🤍'}</span>
            </button>
          </div>
          <div class="p-5">
            <!-- Gestalt: Proximidade - info agrupada -->
            <h4 class="font-display text-lg font-semibold mb-1" style="color:#2d2418;">${r.name}</h4>
            <p class="text-sm mb-3" style="color:#8a7a6a;">${r.description}</p>
            <!-- Gestalt: Similaridade - badges consistentes -->
            <div class="flex gap-2 flex-wrap">
              <span class="px-2.5 py-1 rounded-full text-xs font-medium" style="background:#f0ebe4; color:#5a4a3a;">⏱ ${r.time}</span>
              <span class="px-2.5 py-1 rounded-full text-xs font-medium" style="background:#f0ebe4; color:#5a4a3a;">📊 ${r.difficulty}</span>
              <span class="px-2.5 py-1 rounded-full text-xs font-medium" style="background:#f0ebe4; color:#5a4a3a;">🍽 ${r.servings} porções</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    function getCatColor(cat) {
      return { doce: '#c45d3e', salgado: '#4a8c5c', bebida: '#3a7cc4' }[cat] || '#888';
    }

    // Filter
    function filterByCategory(cat) {
      currentFilter = cat;
      document.querySelectorAll('.category-pill').forEach(btn => {
        const isCurrent = btn.dataset.cat === cat;
        btn.className = `category-pill px-5 py-2 rounded-full text-sm font-medium transition ${isCurrent ? 'bg-white text-gray-800 shadow-md' : 'bg-white/20 text-white border border-white/40 hover:bg-white hover:text-gray-800'}`;
      });
      renderCards();
    }

    // Favorites
    function toggleFavorite(id) {
      if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
        showToast('Removido dos favoritos');
      } else {
        favorites.push(id);
        showToast('Adicionado aos favoritos! ❤️');
      }
      renderCards();
      renderFavorites();
    }

    function renderFavorites() {
      const list = document.getElementById('favorites-list');
      if (favorites.length === 0) {
        list.innerHTML = '<p class="text-sm italic" style="color:#8a7a6a;">Clique no ❤️ nas receitas para salvar aqui</p>';
        return;
      }
      list.innerHTML = favorites.map(id => {
        const r = recipes.find(x => x.id === id);
        return `<button onclick="openRecipe(${r.id})" class="px-4 py-2 rounded-full text-sm font-medium transition hover:shadow-md" style="background:#fff; border:1px solid #e8e2d9; color:#2d2418;">
          ${r.emoji} ${r.name}
        </button>`;
      }).join('');
    }

    // Modal
    function openRecipe(id) {
      const r = recipes.find(x => x.id === id);
      if (!currentServings[id]) currentServings[id] = r.servings;
      const servings = currentServings[id];
      const ratio = servings / r.servings;

      const modal = document.getElementById('recipe-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';

      document.getElementById('modal-content').innerHTML = `
        <div class="h-48 flex items-center justify-center" style="background: linear-gradient(135deg, ${getCatColor(r.category)}33, ${getCatColor(r.category)}55);">
          <span class="text-8xl">${r.emoji}</span>
        </div>
        <div class="p-6 md:p-8">
          <h2 class="font-display text-2xl md:text-3xl font-bold mb-2" style="color:#2d2418;">${r.name}</h2>
          <p class="mb-4" style="color:#8a7a6a;">${r.description}</p>
          
          <div class="flex gap-4 mb-6 flex-wrap">
            <span class="flex items-center gap-1.5 text-sm" style="color:#5a4a3a;"><i data-lucide="clock" style="width:16px;height:16px;"></i> ${r.time}</span>
            <span class="flex items-center gap-1.5 text-sm" style="color:#5a4a3a;"><i data-lucide="bar-chart-2" style="width:16px;height:16px;"></i> ${r.difficulty}</span>
          </div>

          <!-- Porções interativas - Gestalt: Fechamento (grupo contido) -->
          <div class="p-4 rounded-xl mb-6" style="background:#f8f4ef; border:1px solid #e8e2d9;">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium" style="color:#5a4a3a;">Porções</span>
              <div class="flex items-center gap-3">
                <button onclick="changeServings(${id}, -1)" class="serving-btn w-8 h-8 rounded-full flex items-center justify-center font-bold" style="background:#fff; border:1px solid #ddd; color:#c45d3e;">−</button>
                <span class="text-lg font-bold min-w-[2ch] text-center" style="color:#2d2418;">${servings}</span>
                <button onclick="changeServings(${id}, 1)" class="serving-btn w-8 h-8 rounded-full flex items-center justify-center font-bold" style="background:#fff; border:1px solid #ddd; color:#4a8c5c;">+</button>
              </div>
            </div>
          </div>

          <!-- Ingredientes com checkbox interativo -->
          <h3 class="font-display text-lg font-semibold mb-3" style="color:#2d2418;">Ingredientes</h3>
          <div class="space-y-2 mb-8">
            ${r.ingredients.map((ing, i) => {
              const adjustedQty = Math.round(ing.qty * ratio * 10) / 10;
              return `<label class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <input type="checkbox" class="ingredient-check w-5 h-5 rounded accent-[#c45d3e]" id="ing-${id}-${i}">
                <span class="ingredient-label text-sm" style="color:#3d3427;"><strong>${adjustedQty} ${ing.unit}</strong> de ${ing.name}</span>
              </label>`;
            }).join('')}
          </div>

          <!-- Passo a passo interativo - Gestalt: Continuidade (linha guia) -->
          <h3 class="font-display text-lg font-semibold mb-4" style="color:#2d2418;">Modo de Preparo</h3>
          <div class="space-y-4" id="steps-container-${id}">
            ${r.steps.map((step, i) => `
              <div class="flex gap-4 items-start step-item" data-step="${i}">
                <button onclick="toggleStep(${id}, ${i})" 
                        class="step-circle flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition"
                        id="step-btn-${id}-${i}"
                        style="background:#f0ebe4; color:#5a4a3a; border:2px solid #e8e2d9;">
                  ${i + 1}
                </button>
                <p class="text-sm pt-1.5 leading-relaxed" id="step-text-${id}-${i}" style="color:#3d3427;">${step}</p>
              </div>
            `).join('')}
          </div>

          <!-- Progresso -->
          <div class="mt-6 p-4 rounded-xl" style="background:#f8f4ef;">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-medium" style="color:#8a7a6a;">Progresso</span>
              <span class="text-xs font-medium" id="progress-text-${id}" style="color:#c45d3e;">0/${r.steps.length} etapas</span>
            </div>
            <div class="h-2 rounded-full overflow-hidden" style="background:#e8e2d9;">
              <div id="progress-bar-${id}" class="h-full rounded-full transition-all duration-500" style="background: linear-gradient(90deg, #c45d3e, #e8a87c); width:0%;"></div>
            </div>
          </div>
        </div>
      `;
      lucide.createIcons();
    }

    let completedSteps = {};

    function toggleStep(recipeId, stepIdx) {
      if (!completedSteps[recipeId]) completedSteps[recipeId] = new Set();
      const set = completedSteps[recipeId];
      const btn = document.getElementById(`step-btn-${recipeId}-${stepIdx}`);
      const text = document.getElementById(`step-text-${recipeId}-${stepIdx}`);
      const recipe = recipes.find(r => r.id === recipeId);

      if (set.has(stepIdx)) {
        set.delete(stepIdx);
        btn.style.background = '#f0ebe4';
        btn.style.color = '#5a4a3a';
        btn.style.borderColor = '#e8e2d9';
        btn.innerHTML = stepIdx + 1;
        btn.classList.remove('completed');
        text.style.opacity = '1';
      } else {
        set.add(stepIdx);
        btn.style.background = '#4a8c5c';
        btn.style.color = '#fff';
        btn.style.borderColor = '#4a8c5c';
        btn.innerHTML = '✓';
        btn.classList.add('completed');
        text.style.opacity = '0.5';
      }

      const progress = (set.size / recipe.steps.length) * 100;
      document.getElementById(`progress-bar-${recipeId}`).style.width = progress + '%';
      document.getElementById(`progress-text-${recipeId}`).textContent = `${set.size}/${recipe.steps.length} etapas`;

      if (set.size === recipe.steps.length) {
        showToast('🎉 Parabéns! Receita concluída!');
      }
    }

    function changeServings(id, delta) {
      const r = recipes.find(x => x.id === id);
      currentServings[id] = Math.max(1, (currentServings[id] || r.servings) + delta);
      openRecipe(id);
    }

    function closeModal() {
      const modal = document.getElementById('recipe-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }

    function showToast(msg) {
      const toast = document.getElementById('toast');
      toast.textContent = msg;
      toast.style.opacity = '1';
      toast.style.transform = 'translate(-50%, 0)';
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, 1rem)';
      }, 2500);
    }

    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    // Close modal on backdrop click
    document.getElementById('recipe-modal').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeModal();
    });

    // Init
    renderCards();
    renderFavorites();
    lucide.createIcons();

    // Element SDK
    const defaultConfig = {
      site_title: 'Receitas da Casa',
      hero_subtitle: 'Receitas interativas que guiam você passo a passo até o prato perfeito',
      background_color: '#faf7f2',
      accent_color: '#c45d3e',
      text_color: '#2d2418',
      surface_color: '#ffffff',
      secondary_action_color: '#4a8c5c',
      font_family: 'Playfair Display',
      font_size: 16
    };

    function applyConfig(config) {
      document.getElementById('site-title').textContent = config.site_title || defaultConfig.site_title;
      document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
      
      const bg = config.background_color || defaultConfig.background_color;
      const accent = config.accent_color || defaultConfig.accent_color;
      const text = config.text_color || defaultConfig.text_color;
      const font = config.font_family || defaultConfig.font_family;
      const size = config.font_size || defaultConfig.font_size;

      document.body.style.background = bg;
      document.body.style.fontSize = size + 'px';
      document.querySelector('header').style.borderBottomColor = accent + '22';
    }

    if (window.elementSdk) {
  window.elementSdk.init({
      defaultConfig,
      onConfigChange: async (config) => { applyConfig(config); },
      mapToCapabilities: (config) => ({
        recolorables: [
          { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
          { get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
          { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
          { get: () => config.accent_color || defaultConfig.accent_color, set: (v) => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); } },
          { get: () => config.secondary_action_color || defaultConfig.secondary_action_color, set: (v) => { config.secondary_action_color = v; window.elementSdk.setConfig({ secondary_action_color: v }); } }
        ],
        borderables: [],
        fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
        fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } }
      }),
      mapToEditPanelValues: (config) => new Map([
        ["site_title", config.site_title || defaultConfig.site_title],
        ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle]
      ])
    });
}