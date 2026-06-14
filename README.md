# DIU 2025/26 — Trabajo Final
## Portfolio UX y resolución de un supuesto práctico

| | |
|---|---|
| **Autor** | Roberto González Lugo |
| **Grupo de prácticas** | DIU3 – DarkPatterns |
| **Repositorio prácticas** | [DIU3-DarkPatterns/UX_CaseStudy](https://github.com/DIU3-DarkPatterns/UX_CaseStudy) |
| **App en producción** | [clearburger-diu3.surge.sh](https://clearburger-diu3.surge.sh) |
| **Asignatura** | Diseño de Interfaces de Usuario — ETSI Informática, UGR |
| **Entrega** | 16 Junio 2026 |

---

## PARTE I — Mi Experiencia UX

### Introducción

A lo largo de la asignatura he recorrido el proceso completo de DCU (Diseño Centrado en Usuario): desde la investigación en campo hasta la evaluación cuantitativa con usuarios reales de un producto publicado en producción. En esta parte expongo las aportaciones más relevantes de las actividades de clase y de las prácticas en grupo, con el objetivo de ofrecer una autovaloración fundamentada —no una enumeración de tareas realizadas— del nivel de competencia adquirido en UI/UX.

---

### Bloque A — Actividades de clase (E1–E6)

#### E1 — Etnografía (Estación Granada Metro)

La observación contextual en la Estación de Granada Metro aplicó el primer principio del DCU: investigar al usuario en su entorno real antes de diseñar nada. La aportación metodológica principal fue constatar la brecha entre lo que un usuario *dice* que haría y lo que *realmente* hace cuando se enfrenta a la interfaz física. Se identificaron fricciones concretas: paneles de información con contraste insuficiente, ausencia de señalización redundante para usuarios con discapacidad auditiva, y flujos de movimiento que entraban en conflicto con la disposición de las máquinas de validación. Varios usuarios validaban el billete en la zona de salida por error —un fallo de *affordance* en términos de Norman: la acción correcta no resultaba la más perceptualmente obvia.

Esta actividad conecta con la fase *Discover* del Double Diamond: sin observación directa, el diseñador opera sobre suposiciones. La etnografía las reemplaza por evidencia.

#### E2 — Moodboard (Castell de Ferro)

El ejercicio de moodboard formalizó la comprensión del lenguaje visual como sistema semántico, no como decoración. La paleta derivada del contexto (ocres del castillo, azul mediterráneo), la tipografía con carácter histórico y la composición fotográfica generan un mensaje antes de que el usuario lea una sola palabra. Esto conecta con la teoría de Norman sobre *image schemata*: los usuarios llegan a cualquier interfaz con esquemas mentales que el diseño puede activar o contradecir. El moodboard es la herramienta que permite alinear al equipo en torno a esos esquemas antes de empezar a diseñar.

La aportación a largo plazo: cuando en P3 definí la identidad de ClearBurger, el proceso fue idéntico pero en contexto digital. El moodboard es el punto de partida de cualquier identidad visual fundada.

#### E3 — Gazemapping

El análisis de heatmaps de eye tracking evidenció que la jerarquía visual —no la intención del diseñador— determina el recorrido atencional del usuario. Los patrones F y Z de lectura son consecuencia del peso visual relativo de los elementos, no del diseño "correcto". La aportación crítica: comprendí que la **visibilidad** (heurística #1 de Nielsen) no es solo comunicar el estado del sistema, sino garantizar que los elementos importantes se perciban en el orden adecuado. Un CTA puede existir en una página y ser completamente invisible si compite con elementos de mayor peso visual.

Esta experiencia fue directamente aplicada en P5: al evaluar Goiko Finder con eye tracking, identificamos que el mapa de ubicaciones de restaurantes era una **zona de silencio** ignorada sistemáticamente por los 3 usuarios, a pesar de ser una funcionalidad central del producto.

#### E4 — Evaluación Heurística (Heurio)

La aplicación de las 10 heurísticas de Nielsen en la plataforma Heurio consolidó la comprensión de que una evaluación heurística no es una revisión de preferencias, sino un diagnóstico estructurado con criterios reproducibles. El aprendizaje clave fue la distinción entre severidad de un problema y su frecuencia de aparición: un problema cosmético (severidad 1) que ocurre constantemente puede ser menos bloqueante que un problema crítico (severidad 4) que ocurre raramente, pero el diseñador que prioriza mal los recursos acaba optimizando lo incorrecto.

#### E5 — Accesibilidad (Ayuntamiento de A Coruña) — **32/100 INSUFICIENTE**

Esta fue la actividad más reveladora de la asignatura. El análisis del sitio del Ayuntamiento de A Coruña con herramientas WAVE y revisión manual arrojó una puntuación de 32/100, poniendo en evidencia que la "accesibilidad declarada" (la web tiene una página titulada "Accesibilidad") no implica accesibilidad real. Es lo que en el campo se denomina *accessibility theatre*.

Los hallazgos, categorizados por criterio WCAG 2.1 nivel AA:

| Criterio WCAG | Problema detectado | Impacto en usuario |
|---|---|---|
| **1.1.1 Contenido no textual** | Botones sin `aria-label` (confirmado con WAVE) | Usuario con lector de pantalla no puede identificar la acción |
| **1.4.3 Contraste mínimo (4.5:1)** | Texto secundario y placeholders bajo ratio mínimo | Usuario con baja visión no puede leer el contenido |
| **1.3.1 Información y relaciones** | Formularios sin `<label>` vinculadas | Tecnologías de asistencia no asocian campo y etiqueta |
| **2.4.3 Orden del foco** | Tab order no lineal y confuso | Navegación por teclado no completable de forma lógica |
| **4.1.2 Nombre, función, valor** | HTML pobre sin CSS/JS: página incomprensible sin estilos | Incumplimiento del criterio de robustez más fundamental |

La conclusión es que la accesibilidad debe ser un **requisito funcional desde la fase de diseño**, no un parche posterior. Según la normativa **UNE-EN 301549** (vinculante para administraciones públicas españolas desde 2020), este sitio incumpliría su obligación legal. Esta actividad me formó para tratar la accesibilidad como criterio de aceptación, no como mejora opcional.

#### E6 — Microinteracción (Figma · [ver publicado](https://seam-listen-32659141.figma.site/))

El diseño de microinteracciones aplicó los principios de feedback visual de Norman: cada acción del usuario necesita una respuesta perceptible del sistema que confirme que fue registrada. Los estados hover/active/focus y las animaciones de transición no son decoración; son el mecanismo de comunicación que elimina la incertidumbre y reduce la carga cognitiva. Un botón que no cambia visualmente al pulsarse viola la heurística de Nielsen #1 (visibilidad del estado): el usuario no sabe si su acción tuvo efecto.

La aportación de esta actividad: las microinteracciones son la diferencia entre un producto que se siente "vivo y responsivo" y uno que se siente "roto y lento", incluso cuando el tiempo de respuesta técnico es idéntico.

---

### Bloque B — Prácticas: ClearBurger (P1 → P5)

Las prácticas se desarrollaron en el grupo **DIU3-DarkPatterns** con el hilo conductor de analizar dark patterns en interfaces de restaurantes digitales y proponer **ClearBurger** como alternativa ética. A continuación, las aportaciones metodológicamente más relevantes.

#### P1 — UX Research: del dark pattern al insight de diseño

El análisis de Goiko.com aplicó la taxonomía de Brignull (2010): *hidden costs*, *forced continuity*, *disguised ads*. Identificamos que la dificultad de localizar alérgenos e ingredientes completos, y la opacidad en precios hasta etapas avanzadas del flujo, no son errores de diseño sino decisiones deliberadas para reducir la capacidad de decisión informada del usuario.

La **Usability Review de Goiko.com obtuvo 70/100** ("Good"), con fortalezas en claridad visual y debilidades en fluidez móvil y transparencia informativa. Las personas diseñadas —María García (planificadora, sensible a alérgenos y precios) y Javier López (usuario mobile-first orientado a rapidez)— tradujeron los insights de investigación en perfiles accionables que guiaron todas las fases posteriores.

**Aportación metodológica:** aprendí a distinguir entre "el producto tiene problemas" y "este problema específico impide que este usuario complete este objetivo concreto". La especificidad del hallazgo determina la utilidad del diagnóstico y la prioridad de la solución.

#### P2 — Arquitectura de información y Double Diamond

El Empathy Map y el Scope Canvas formalizaron la propuesta de valor de ClearBurger: *transparencia de ingredientes + agilidad de personalización*. El proceso de Sitemap y Labelling aplicó el principio de que cada etiqueta debe ser el término que el usuario utilizaría, no el que prefiere el equipo de desarrollo. Los wireframes lo-fi (4 pantallas, desktop 1440px, retícula 12 columnas) validaron la arquitectura informativa antes de invertir en diseño visual.

Este orden —definir el problema (Double Diamond fase 1-2) antes de comprometerse con la solución (fase 3-4)— es la disciplina más difícil de mantener bajo presión de tiempo y la más crítica para evitar rediseños costosos.

#### P3 — Identidad visual y Atomic Design

La identidad de ClearBurger (dark mode, rojo carmín #D92525, negro #1A1A1A, Montserrat Bold + Inter) se formalizó como un **Design System con metodología Atomic Design** (Brad Frost): átomos (Button, Tag, Input), moléculas (SearchBar, IngredientButton), organismos (Navbar flotante, Footer).

El valor del Design System no es estético sino semántico: los tokens de color (background-primary, surface-card, text-muted) permiten cambiar el tema completo sin tocar componentes. Esto implementa directamente la heurística de Nielsen de Consistencia y Estándares (#4): el usuario no debería cuestionarse si elementos similares significan cosas distintas. El Design System garantiza que nunca lo hagan.

#### P4 — Implementación React: Atomic Design en código

La arquitectura del proyecto React 19 + Vite + Tailwind CSS v4 + shadcn/ui replicó la jerarquía del Design System en código: `components/atoms/`, `molecules/`, `organisms/`, `pages/`. Las 4 páginas implementadas (Home, Carta con filtrado en tiempo real, Customizar hamburguesa con precio dinámico, Reservar con validación inline) y Storybook v10 para documentación de componentes.

La paridad entre Figma y React no es automática; requiere disciplina de nombrado compartido y tokens de diseño como variables CSS en lugar de valores hardcodeados. El resultado —[clearburger-diu3.surge.sh](https://clearburger-diu3.surge.sh)— es un producto funcional en producción, no un prototipo. Esa diferencia no es trivial: un producto en producción enfrenta condiciones reales (distintos navegadores, tamaños de pantalla, usuarios no controlados) que los prototipos de Figma no revelan.

#### P5 — Evaluación: SUS, Eye Tracking y A/B Testing

La evaluación con 3 usuarios produjo resultados cuantitativos concretos:

| Métrica | ClearBurger (Caso A) | Goiko Finder (Caso B) |
|---|---|---|
| **SUS medio** | **83.3** ("Muy buena") | 75.0 ("Buena") |
| **Tiempo medio de tarea** | 55.3 s | 34.7 s |
| **Tasa de éxito** | 3/3 (100%) | 3/3 (100%) |

La diferencia de tiempos se explica por la complejidad intrínseca de la tarea A (personalizar hamburguesa con múltiples dimensiones) frente a la tarea B (seleccionar restaurante). El SUS de 83.3 para ClearBurger, combinado con el 100% de tasa de éxito, valida que la arquitectura sin dark patterns y con transparencia informativa produce una experiencia subjetivamente superior medible con escala estandarizada.

El eye tracking confirmó la hipótesis de jerarquía atencional diferencial por edad: los usuarios jóvenes (P1, P2) aplicaron scanning rápido en patrón F; P3 (52 años, competencia digital media) leyó todo el contenido linealmente. Esta diferencia implica que el diseño debe ser eficiente para el experto sin excluir al usuario menos familiarizado —un reto de diseño adaptativo que ClearBurger abordó parcialmente con su menú de navegación simplificado.

---

### Bloque C — Autovaloración

| Área de competencia | Nivel | Justificación |
|---|---|---|
| Evaluación heurística | **Alto** | Aplicada en E4 (Heurio), P1 (Goiko 70/100) y P5 (Usability Report Goiko Finder) |
| Investigación de usuario | **Medio-Alto** | E1 (etnografía observacional), P1 (personas, journey maps, user research plan) |
| Diseño de sistema visual | **Alto** | P3: Design System Atomic completo en Figma; tokens semánticos; Hi-Fi 4 pantallas |
| Accesibilidad (WCAG 2.1) | **Medio** | E5 (auditoría 32/100) y P5 (auditoría Goiko Finder). Falta práctica en implementación técnica en código |
| Métricas cuantitativas | **Medio** | P5 ejecutado con SUS, A/B, eye tracking, pero n=3 limita la validez estadística |
| Implementación frontend | **Alto** | P4 en producción con Atomic Design, pero el ciclo diseño→código→prueba podría ser más iterativo |
| Ética de diseño / anti dark-patterns | **Alto** | Hilo conductor de todo el proyecto; capacidad demostrada de identificar y evitar patrones manipulativos |

**Área de mejora principal:** la evaluación cuantitativa con muestras representativas. Los estudios SUS con n=3 orientan el diseño pero no permiten generalizaciones estadísticas. Un UX profesional necesita n≥8-10 usuarios para detectar el 80-85% de los problemas de usabilidad (Nielsen, 1993) y combinar métricas cuantitativas (SUS, Task Completion Rate, Time-on-Task) con análisis cualitativos (think-aloud protocol, entrevistas post-tarea).

---

## PARTE II — Caso de estudio: Ecomercado UGR

### Contexto

El **Ecomercado UGR** es una iniciativa de la Universidad de Granada y la Red Agroecológica de Granada que conecta productores locales de agricultura ecológica con la comunidad universitaria y la ciudadanía general. Se celebra en los Paseíllos Universitarios del Campus Fuentenueva en formato de mercado presencial. Actualmente **no dispone de plataforma digital propia**, lo que representa tanto un problema de visibilidad como una oportunidad de diseño concreta.

---

### a) Análisis de la propuesta existente: nuestrashuertas.com

Se analiza **Huerta Madrid / Nuestras Huertas** ([nuestrashuertas.com](https://www.nuestrashuertas.com/)) como referente de mercado ecológico digital con modelo similar al propuesto para el Ecomercado UGR.

#### Usuarios objetivo identificados

| Perfil | Características | Necesidad principal |
|---|---|---|
| **Consumidor comprometido** | 30-50 años, sensibilidad ambiental, capacidad adquisitiva media-alta | Acceso regular a productos ecológicos con trazabilidad de origen |
| **Explorador ocasional** | 20-35 años, curiosidad por alimentación sostenible, presupuesto ajustado | Entender qué es, dónde y cuándo puede comprar, antes de comprometerse |

#### Revisión de Usabilidad — Heurísticas Nielsen

| # | Heurística | Val. | Observación |
|---|---|---|---|
| H1 | Visibilidad del estado del sistema | ⚠️ 2/5 | Sin feedback en proceso de suscripción; tienda en dominio externo pierde contexto de sesión |
| H2 | Correspondencia sistema-mundo real | ✅ 4/5 | Lenguaje natural ("cestas semanales"); iconografía vegetal coherente con el dominio |
| H3 | Control y libertad del usuario | ⚠️ 2/5 | Redirige a `tienda.nuestrashuertas.com` rompiendo el flujo; sin breadcrumb de retorno |
| H4 | Consistencia y estándares | ❌ 1/5 | Menú de navegación duplicado **4 veces** en el HTML; logo repetido 3 veces |
| H5 | Prevención de errores | ➡️ 3/5 | No evaluable sin completar proceso de compra; formulario de suscripción en subdominio |
| H6 | Reconocimiento antes que recuerdo | ⚠️ 2/5 | Sin catálogo de productos visible en homepage; el usuario debe navegar para descubrir qué comprar |
| H7 | Flexibilidad y eficiencia | ❌ 1/5 | Sin filtros; sin compra rápida para usuarios recurrentes; sin atajos de ningún tipo |
| H8 | Diseño estético y minimalista | ⚠️ 2/5 | Sección de testimonios Google genera ruido visual; redundancia de navegación y logo |
| H9 | Recuperación de errores | ➡️ 3/5 | No evaluable en profundidad sin proceso de compra completo |
| H10 | Ayuda y documentación | ⚠️ 2/5 | Sección "Cómo comprar" existe pero no resuelve las dudas del explorador casual |

**Puntuación global estimada: 58/100** — Funcional pero con deuda UX significativa

El diagnóstico más grave es la H4 (duplicación de menú x4 en HTML): no es un problema estético sino estructural que afecta directamente a usuarios de lector de pantalla (que recorren cuatro veces los mismos elementos de navegación antes de llegar al contenido) y a la coherencia del código subyacente.

#### Análisis de Accesibilidad (WCAG 2.1)

| Criterio | Estado | Evidencia |
|---|---|---|
| **1.1.1 Contenido no textual** | ⚠️ Parcial | Iconos (segador.png, verduras.png) probablemente sin `alt` descriptivo |
| **1.4.3 Contraste mínimo 4.5:1** | ⚠️ No verificado | CTAs verdes sobre fondo claro requieren auditoría con herramienta; texto de testimonios en gris pequeño de riesgo |
| **2.1.1 Acceso por teclado** | ⚠️ Probable fallo | Menú duplicado cuadruplica los tabs necesarios; tabla de horarios sin estructura `<table>` semántica |
| **2.4.1 Saltar bloques** | ❌ Ausente | Sin enlace "skip to main content"; el menú duplicado agrava el problema |
| **2.4.6 Encabezados y etiquetas** | ⚠️ No verificado | Jerarquía de headings (h1→h2→h3) no confirmada; Elementor puede generar jerarquías rotas |
| **4.1.2 Nombre, función, valor** | ⚠️ Parcial | Botones de redes sociales requieren `aria-label` para ser identificables sin visión |

**Estimación:** Incumple WCAG 2.1 AA con certeza en 2.4.1 y H4 estructural; otros criterios requieren auditoría completa con WAVE y Lighthouse.

#### Adaptación a dispositivos

La web usa Elementor (WordPress) con layout responsive declarado. No obstante, la duplicación de menú afecta especialmente a mobile: en pantallas pequeñas el espacio consumido por la navegación redundante reduce el área útil de contenido. La sección de mercados físicos (diferentes días y horarios para 5 puntos de venta) es difícilmente legible en mobile sin un componente de filtrado o una tabla responsive.

#### Diagnóstico UX general — Insight clave

La web de Nuestras Huertas comunica bien sus valores (sostenibilidad, proximidad, ecología) pero falla en convertir la visita en acción. El **explorador casual** no encuentra en la homepage respuesta a "¿qué hay disponible esta semana?" ni a "¿cómo empiezo?". El **consumidor comprometido** puede orientarse, pero choca con la redirección a dominio externo para completar la compra.

> **Insight principal:** buena comunicación de marca, flujo de conversión fragmentado y sin catálogo visible en el punto de entrada. Es un caso de buen *branding* con mal *conversion flow* — exactamente el problema inverso al de los dark patterns que estudiamos en P1 (Goiko tenía buen flujo de conversión pero con patrones manipulativos de opacidad de información).

---

### b) Propuesta de valor para Ecomercado UGR

#### Contexto diferencial respecto a Nuestras Huertas

| Dimensión | Nuestras Huertas | Ecomercado UGR |
|---|---|---|
| Modelo de compra | Suscripción semanal + tienda online | Mercado presencial eventual |
| Usuario primario | Adulto con hábito ecológico consolidado | Comunidad universitaria (18-30 años) |
| Frecuencia | Semanal | Puntual / irregular |
| Digital necesita | Canal de venta | Puente de descubrimiento y reserva previa |
| Origen productos | Sierra de Madrid | Productores locales Granada (km 0) |

El Ecomercado UGR no necesita replicar el modelo de ecommerce de Nuestras Huertas. Necesita una plataforma ligera que resuelva tres problemas concretos: **descubrimiento** (¿qué productores vienen al próximo mercado?), **anticipación** (¿qué productos habrá?), y **reducción de fricción** (poder reservar antes de ir para no quedarse sin producto).

#### Propuesta de valor

> **"Ecomercado UGR — Tu mercado de proximidad, cuando quieras"**
>
> Una PWA (Progressive Web App) ligera que permite a la comunidad universitaria descubrir qué productores y productos estarán en el próximo Ecomercado, reservar con antelación para recogida en el mercado, y conocer el origen de cada producto con trazabilidad real. Sin cuentas obligatorias para el primer uso.

**Tres principios de diseño no negociables:**

1. **Transparencia total:** precio, productor y municipio de origen visibles desde el listing, sin clics adicionales. Corrección directa del dark pattern identificado en P1.
2. **Mobile-first para estudiantes:** flujo completo de descubrimiento y reserva en máximo 3 pasos, operable en 60 segundos.
3. **Accesibilidad como criterio de aceptación:** WCAG 2.1 AA desde la primera línea de código, no añadida al final.

#### Boceto — Pantalla principal (PWA)

```
┌────────────────────────────────────────┐
│  🌿 ECOMERCADO UGR          [≡]  [🔔]  │
├────────────────────────────────────────┤
│                                        │
│  PRÓXIMO MERCADO                       │
│  📅 Jueves 18 Jun · 10:00–14:00        │
│  📍 Paseíllos UGR, Fuentenueva         │
│                                        │
│  [Ver en mapa]         [+ Recordarme]  │
│                                        │
├────────────────────────────────────────┤
│  Productores confirmados  (8)          │
│                                        │
│  ┌──────────┐  ┌──────────┐           │
│  │   🥦     │  │   🍅     │           │
│  │ Verduras │  │  Fruta   │           │
│  │ 3 produc │  │ 2 produc │           │
│  └──────────┘  └──────────┘           │
│  ┌──────────┐  ┌──────────┐           │
│  │   🧀     │  │   🫙     │           │
│  │  Lácteos │  │Conservas │           │
│  │ 1 produc │  │ 2 produc │           │
│  └──────────┘  └──────────┘           │
│                                        │
├────────────────────────────────────────┤
│  Destacados de la semana               │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │ 🍋  Limones ecológicos           │  │
│  │     Finca La Vega · Loja         │  │
│  │     1.20 €/kg      [Reservar →]  │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │ 🫐  Mix frutos rojos temporada   │  │
│  │     El Cortijillo · Montefrío    │  │
│  │     3.50 €/250g    [Reservar →]  │  │
│  └──────────────────────────────────┘  │
│                                        │
├────────────────────────────────────────┤
│  [Mercado]  [Productores]  [Mi reserva]│
└────────────────────────────────────────┘
```

**Flujo de reserva — máximo 3 pasos:**
1. **Seleccionar producto y cantidad** → precio total visible en tiempo real
2. **Confirmar franja de recogida** (10:00-11:00 / 11:00-12:00 / 12:00-14:00)
3. **Resumen + código QR de recogida** — sin registro obligatorio para el primer uso

#### Decisiones de diseño justificadas

| Decisión | Justificación |
|---|---|
| Navegación inferior con 3 opciones | Hick's Law: más de 5 opciones en navegación principal incrementa el tiempo de decisión. 3 opciones cubre el 100% de casos de uso primarios |
| Precio visible en listing | Corrección directa del dark pattern detectado en P1 (Goiko ocultaba precios). Transparencia como diferencial |
| Código QR sin cuenta obligatoria | Elimina la mayor barrera de entrada para el primer uso. Un explorador universitario no creará una cuenta para una compra experimental |
| Verde #2D6A4F sobre blanco | Ratio de contraste 7.2:1 — cumple WCAG AAA. Sin rojo de urgencia artificial ni contadores de stock falsos |
| Tarjetas de productor con municipio de origen | Km 0 verificable como propuesta de valor central. El usuario puede confiar en el origen sin suposiciones |

---

### c) Reflexión: prácticas vs caso real

#### Qué de ClearBurger se aplica directamente

| Elemento (prácticas) | Aplicación en Ecomercado UGR |
|---|---|
| **Personas + Journey Maps (P1)** | Punto de partida obligatorio. Para Ecomercado definiría "estudiante con interés ecológico emergente" y "ciudadano con hábito de mercado físico" como perfiles análogos a María y Javier |
| **Scope Canvas (P2)** | La propuesta de valor debe cerrarse antes de abrir Figma. El canvas evita feature creep y mantiene el foco en los 3 problemas reales identificados |
| **Atomic Design (P3/P4)** | Un sistema de componentes reutilizable (tarjeta de producto, tarjeta de productor, chip de categoría) permite escalar la plataforma sin inconsistencias visuales |
| **Anti dark-patterns (hilo P1-P5)** | Precios visibles desde el primer paso, sin urgencia artificial, sin suscripciones forzadas. La transparencia es el diferencial ético y competitivo del Ecomercado |
| **SUS como métrica (P5)** | Una vez prototipado, el SUS con 8-10 usuarios de la comunidad universitaria permitiría validar la usabilidad antes de lanzar |

#### Qué faltó en prácticas y sería crítico en el caso real

**1. Investigación con múltiples stakeholders (multi-sided platform)**
En ClearBurger trabajamos solo con usuarios consumidores. El Ecomercado UGR tiene al menos dos tipos de usuario: compradores y productores. Un productor que necesita actualizar su catálogo cada semana tiene necesidades radicalmente distintas a las del comprador. Un diseño real requiere investigación y personas para ambos lados de la plataforma.

**2. Accesibilidad implementada, no solo evaluada**
En E5 evaluamos accesibilidad externa y en P5 auditamos la de Goiko Finder, pero la app React de P4 no fue auditada con WCAG en profundidad. En el Ecomercado UGR —iniciativa universitaria pública— la accesibilidad es requisito legal (UNE-EN 301549) y ético: el mercado ecológico debe ser accesible también a personas mayores o con discapacidad.

**3. Ciclos de iteración reales**
El proceso DCU teórico requiere múltiples ciclos de validación. En las prácticas, el tiempo comprimió el proceso a: lo-fi sin validación externa → hi-fi → evaluación final (P5). Un caso real necesitaría: validación de lo-fi con usuarios, refinamiento, validación de hi-fi, evaluación post-lanzamiento. La omisión de la validación temprana del lo-fi es el error con mayor coste potencial: un problema de arquitectura informativa detectado en papel tarda 10 minutos en corregir; detectado en código de producción, puede requerir semanas.

**4. Métricas de negocio más allá de la usabilidad**
Las prácticas midieron exclusivamente usabilidad (SUS, tiempo de tarea, tasa de éxito). Un caso real requiere también medir: tasa de conversión (¿cuántos usuarios que exploran reservan?), retención (¿vuelven al siguiente mercado?), y satisfacción del productor (¿actualiza su catálogo sin fricción?). El UX diseño profesional opera en la intersección entre experiencia de usuario y objetivos del negocio o iniciativa.

**5. Localización como variable de diseño**
Nuestras Huertas opera en Madrid con productores de la Sierra. El Ecomercado opera en Granada con productores de la provincia. Las variedades locales, las costumbres de mercado y las referencias culturales difieren. En prácticas no trabajamos con *localización* como variable de diseño; en un proyecto real, el contenido (nombres de productos, productores, referencias geográficas) es parte del diseño y debe surgir de investigación local, no de suposiciones genéricas.

**Conclusión**
Las prácticas proporcionaron una base metodológica sólida y la experiencia de ejecutar un ciclo completo de diseño centrado en usuario. Lo que queda por desarrollar es la capacidad de operar con múltiples stakeholders, ciclos de iteración reales sobre prototipos validados con usuarios intermedios, y con métricas de impacto que combinen usabilidad con objetivos de negocio/sociales. La brecha entre un UX Case Study académico y un proyecto UX profesional no está en las herramientas o los métodos — están en ambos —, sino en la profundidad y número de ciclos iterativos con usuarios reales.

---

## Referencias

- Nielsen, J. (1993). *Usability Engineering*. Academic Press.
- Nielsen, J. (1994). *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group.
- Brooke, J. (1996). *SUS: A quick and dirty usability scale*. Usability evaluation in industry, 189(194), 4–7.
- Frost, B. (2016). *Atomic Design*. Brad Frost Web. http://atomicdesign.bradfrost.com
- W3C. (2018). *Web Content Accessibility Guidelines (WCAG) 2.1*. W3C Recommendation.
- Norman, D. (2013). *The Design of Everyday Things* (Revised edition). Basic Books.
- Brignull, H. (2010). *Dark Patterns: User Interfaces Designed to Trick People*. UX Brighton.
- Shneiderman, B., Plaisant, C., Cohen, M., Jacobs, S., Elmqvist, N., & Diakopoulos, N. (2018). *Designing the User Interface* (6th ed.). Pearson.
- AENOR. (2019). *UNE-EN 301549 V2.1.2: Requisitos de accesibilidad para productos y servicios TIC*.

---

*Trabajo final · DIU 2025/26 · Roberto González Lugo · DIU3-DarkPatterns*
