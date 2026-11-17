const topics=[
['¿Qué es un sustrato?','El hogar de las raíces','Medio donde crecen las raíces, que brinda sostén y regula la disponibilidad de agua, aire y nutrientes.',[
['Tres fases que conviven','Gaseosa: poros con aire (O₂ y CO₂).|Líquida: agua con nutrientes disueltos.|Sólida: partículas que dan estructura y sostén.'],
['Ejemplos','Turba: material orgánico de alta retención de agua.|Fibra de coco: orgánica, porosa y estable.|Corteza compostada: aporta estructura y porosidad.|Perlita: mineral liviano que aumenta la aireación.'],
['Tres tipos de propiedades','Físicas: porosidad, aireación y retención de agua.|Químicas: pH, CE, CIC y nutrientes.|Biológicas: organismos y actividad microbiana.'],
['Idea clave','Puede ser orgánico, mineral o una mezcla. El suelo también puede integrar una mezcla.']]],
['pH · Acidez y alcalinidad','Una escala logarítmica','El pH mide la acidez o alcalinidad de una solución, como la solución del suelo o del sustrato.',[
['Definición','pH = −log₁₀ a(H⁺). La actividad del ion hidrógeno es adimensional.|En la escala habitual de 0 a 14, a 25 °C: pH menor que 7 es ácido; 7, neutro; mayor que 7, alcalino.'],
['Cada unidad importa','Una unidad de pH representa un cambio de diez veces en la actividad de H⁺.|De pH 5 a pH 6, la actividad de H⁺ disminuye diez veces.'],
['Nutrientes y medición','El pH afecta solubilidad, forma química y disponibilidad de nutrientes para las raíces.|Se mide con pHmetro en una suspensión o extracto de suelo o sustrato.'],
['Rango adecuado','Depende del cultivo y del método de producción. No hay un valor único adecuado para todos los casos.']]],
['CE · Conductividad eléctrica','Sales disueltas, no nutrientes individuales','La CE de una solución es un indicador de sales disueltas. No identifica cada nutriente.',[
['Unidades equivalentes','1 dS/m = 1 mS/cm.'],
['Cómo comparar','Usar igual método de extracción y temperatura de referencia, por ejemplo 25 °C.|Se mide con conductímetro.'],
['Cuando es alta','Una CE alta puede dificultar la absorción de agua por las raíces.'],
['No confundir','Salinidad no equivale a fertilidad: puede haber muchas sales sin una nutrición adecuada.']]],
['CIC · Capacidad de intercambio catiónico','Retener e intercambiar cargas positivas','Es la capacidad de retener e intercambiar cationes en la superficie del suelo o sustrato.',[
['Cómo funciona','Superficies con carga negativa, como las de arcillas y materia orgánica, retienen cationes como Ca²⁺, Mg²⁺, K⁺ y NH₄⁺.|El intercambio es reversible: otros cationes de la solución pueden reemplazarlos.'],
['Unidad','cmolc/kg: centimoles de carga positiva por kilogramo de suelo o sustrato.'],
['De qué depende','Del material: tipo de arcilla y contenido de materia orgánica, entre otros factores.|Puede variar con el pH.'],
['Límites de la idea','Mayor CIC no garantiza equilibrio nutricional: importan cantidad, proporción y disponibilidad de cada nutriente.|Las superficies negativas no retienen aniones por intercambio catiónico. La retención de aniones mediante otros mecanismos no se evalúa con la CIC.']]],
['Concentración de nutrientes','Cuánto hay, cuánto está disponible, cuánto entra','Cantidad de nutriente por volumen o masa del medio analizado.',[
['Tres conceptos distintos','Concentración: cantidad de nutriente en un medio; cuánto hay.|Disponibilidad: fracción en una forma accesible a la planta en ese momento.|Absorción: ingreso del nutriente a la planta a través de las raíces.'],
['Factores a considerar','pH: regula forma química y disponibilidad.|Interacciones: competencia o sinergia con otros nutrientes.|Raíces: desarrollo y estado.|Agua: disuelve y transporta nutrientes hacia las raíces.'],
['Siempre indicar','Elemento (por ejemplo N, P, K, Ca o Mg).|Unidad (mg/L, mmol/L o mg/kg).|Medio (solución nutritiva, solución del suelo, extracto o tejido vegetal).|Método de determinación (colorimetría, espectrofotometría, ICP-OES, electrodo selectivo, etc.).'],
['Solución nutritiva','Mezcla de sales que aporta nutrientes disueltos en agua en concentraciones conocidas y controladas.|N a 100 mg/L es un ejemplo ilustrativo de la lámina, no una recomendación.']]],
['Unidades de expresión','La unidad forma parte del resultado','Usar unidades correctas permite analizar, comparar y manejar suelos y sustratos.',[
['Mapa de unidades','pH: sin unidad.|CE: dS/m o mS/cm.|Soluciones: mg/L o mmol/L.|Sólidos: mg/kg.|CIC: cmolc/kg.|Porcentaje: especificar m/m, m/v o v/v.'],
['Equivalencias','1 g/L = 1000 mg/L.|Para una especie química: mg/L = mmol/L × masa molar (g/mol).|Ejemplo de Ca²⁺: 2 mmol/L × 40,08 = 80,16 mg/L.'],
['Conversiones con condiciones','ppm ≈ mg/L solo en soluciones acuosas diluidas con densidad cercana a 1 kg/L.|mg/kg y mg/L requieren información adicional para convertir entre sí: densidad, humedad o relación sólido/agua, según el caso.'],
['Instrumentos','Balanza: mide masa en gramos o miligramos.|Probeta: mide volumen en mililitros o litros.']]],
['Correcciones químicas','Diagnosticar antes de ajustar','Ajustes para mantener condiciones adecuadas en suelos y sustratos, según diagnóstico.',[
['El proceso','Analizar: pH, CE, nutrientes, agua y sustrato.|Definir objetivo según cultivo.|Calcular según análisis y respuesta del suelo o sustrato.|Aplicar de forma cuidadosa, segura y uniforme.|Verificar con nuevos análisis y respuesta del cultivo.'],
['pH bajo o alto','pH bajo: encalado según análisis y capacidad tampón.|pH alto: evaluar alcalinidad del agua de riego; acidificación controlada según diagnóstico y necesidad del cultivo.|Los valores de la lámina (menor que 5,5–6,0 o mayor que 7,5) son referencias de contexto, no objetivos universales.'],
['CE alta y deficiencias','CE alta: revisar calidad del agua y fertilización; lavado con agua de buena calidad y drenaje adecuado cuando corresponda.|Deficiencias: ajustar nutrientes según análisis de suelo, sustrato, agua y/o planta.'],
['Recordatorios','El yeso (CaSO₄) no sustituye a la cal (CaCO₃) para elevar el pH.|No hay dosis universal: depende del análisis, capacidad tampón, material, cultivo y manejo.|La acidificación debe ser controlada y basada en diagnóstico técnico.']]],
['Fundamentos de suelos y sustratos','Agua, aire, raíces y vida','La calidad del medio donde crecen las raíces depende de sus propiedades físicas, químicas y biológicas.',[
['Las raíces requieren','Agua: humedad adecuada.|Aire: oxígeno para respiración.|Sostén: anclaje y estabilidad.|Nutrientes: elementos esenciales para el crecimiento.|Actividad biológica adecuada: organismos que transforman materia y liberan nutrientes.'],
['Propiedades físicas','Porosidad: proporción de espacios o poros.|Aireación: circulación y disponibilidad de oxígeno.|Retención de agua: capacidad de almacenar agua útil y entregarla a la planta.'],
['Química y biología','Química: pH, CE, CIC y nutrientes, incluidos N, P, K, Ca, Mg, S y micronutrientes.|Biología: macroorganismos, mesoorganismos y microorganismos.|Actividad microbiana: descomposición, mineralización y ciclo de nutrientes.'],
['Cómo elegir','Cultivo: especie, requerimientos y etapa de desarrollo.|Contenedor: volumen, drenaje y material.|Riego: frecuencia y sistema manual o automatizado.|Ambiente: temperatura, luz, humedad y ventilación.']]]
];
const quizData=[
['¿Qué fase del sustrato da estructura y sostén?',['Sólida','Líquida','Gaseosa'],0,'Las partículas de la fase sólida sostienen y dan estructura.'],
['De pH 5 a pH 6, la actividad de H⁺…',['Aumenta diez veces','Disminuye diez veces','No cambia'],1,'El pH es logarítmico: subir una unidad reduce diez veces la actividad de H⁺.'],
['¿Qué permite conocer la CE?',['Cada nutriente individual','La CIC','Un indicador de sales disueltas'],2,'La CE no identifica cada nutriente ni equivale a fertilidad.'],
['1 dS/m equivale a…',['1 mS/cm','1000 mS/cm','0,1 mS/cm'],0,'Son dos formas equivalentes de expresar la conductividad eléctrica.'],
['La CIC describe la retención e intercambio de…',['Aniones','Cationes','Agua solamente'],1,'Los cationes tienen carga positiva; el intercambio es reversible.'],
['Una CIC alta garantiza equilibrio nutricional.',['Siempre','Solo en macetas','No necesariamente'],2,'También importan la cantidad, proporción y disponibilidad de cada nutriente.'],
['Absorción significa…',['Ingreso del nutriente a la planta','Cuánto hay en el medio','Solo la cantidad disuelta'],0,'Concentración, disponibilidad y absorción son conceptos diferentes.'],
['2 mmol/L de Ca²⁺ (40,08 g/mol) equivalen a…',['20,04 mg/L','80,16 mg/L','40,08 mg/L'],1,'Se multiplica 2 × 40,08 = 80,16 mg/L.'],
['¿Se puede convertir mg/kg a mg/L sin más datos?',['Siempre','Solo cambiando el símbolo','No'],2,'Se necesita información adicional, como densidad, humedad o relación sólido/agua.'],
['¿Qué reemplaza a la cal para elevar el pH según la lámina?',['El yeso no la sustituye','Cualquier sal','Más fertilizante siempre'],0,'El yeso y la cal tienen funciones distintas. No hay dosis universal de corrección.'],
['Para comparar CE conviene usar…',['Cualquier método','Igual método de extracción y temperatura de referencia','Solo el mismo color del medidor'],1,'El método y la temperatura condicionan la comparación.'],
['La elección del sustrato depende de…',['Solo su color','Solo su precio','Cultivo, contenedor, riego y ambiente'],2,'La elección integra las condiciones de producción.']];
