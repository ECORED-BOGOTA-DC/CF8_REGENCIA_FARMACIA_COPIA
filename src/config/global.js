export default {
  global: {
    componenteFormativo:
      'Proceso de selección y adquisición de productos farmacéuticos',
    descripcionCurso:
      'La importancia del proceso de selección y adquisición de productos farmacéuticos radica en la elaboración de un correcto listado básico de medicamentos y dispositivos médicos y del completo suministro de estos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/banner-principal-bg.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Normativa de los procesos de selección y adquisición en el sector farmacéutico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Proceso de selección de medicamentos y dispositivos médicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Proceso de adquisición de medicamentos y dispositivos médicos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Producción Audiovisual',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Metodologías de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Metodología de compras',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Priorización de la compra',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Políticas financieras y comerciales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Política de aprovisionamiento',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Fuentes de abastecimiento',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Base de datos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Acuerdos comerciales y reglamentación',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Catálogos de productos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Métodos de clasificación de servicios y de producto',
            hash: 't_9_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: 'Técnicas de estimación de precios',
            hash: 't_9_2',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Proceso administrativo',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      /*
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acosta, Martínez y Rodríguez. (2012). Diagnóstico de la estructura y procesos de funcionamiento de los comités de farmacia y terapéutica de dos entidades de salud del régimen especial en Bogotá. Investigación científica p.22.',
    },
    {
      referencia:
        'Líder de emprendimiento. (22 de marzo del 2021). ¿Qué son los proveedores y cuales son sus tipos?',
      link:
        'https://www.liderdelemprendimiento.com/logistica-y-distribucion/que-son-los-proveedores/',
    },
    {
      referencia:
        'MINISTERIO DE PROTECCIÓN SOCIAL. (2007). Por la cual se determina el modelo de gestión del servicio farmacéutico, se adopta el manual de condiciones esenciales y procedimientos de dicho servicio y se dictan otras disposiciones. Resolución número 1403.',
      link:
        'https://www.redjurista.com/Documents/resolucion_1403_de_2007_ministerio_de_la_proteccion_social.aspx#/',
    },
    {
      referencia:
        'Osorio, E. (S.F). Procesos generales del servicio farmacéutico.',
      link:
        'http://www.cendi.edu.co/DOCS/materialDeApoyo/TecnicoLaboralAuxiliarServiciosFarmace%CC%81uticos/SELECCI%C3%93N%20DOC..pdf',
    },
    {
      referencia:
        'Sangri Coral, A. (2016). Administración de compras: adquisiciones y abastecimiento.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39375',
    },
    {
      referencia:
        'Unab. (S.F). Adquisición de medicamentos y dispositivos médicos.',
      link:
        'http://unab.edupol.com.co/pluginfile.php/7206/mod_resource/content/1/UNIDAD_3 Adquisici%C3%B3n de medicamentos y dispositivos m%C3%A9dicos.pdf',
    },
    {
      referencia:
        'Valentín López, G. M. (2015). Aplicaciones informáticas de bases de datos relacionales: Access 2010.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50762?page=17',
    },
    {
      referencia: 'Vera, H. (2009). Buenas prácticas de abastecimiento.',
      link:
        'http://farmacus.com.co/wp-content/uploads/2016/07/Manual-Buenas-Practicas-Abast..pdf',
    },
  ],
  glosario: [
    {
      termino: 'Adquisición',
      significado:
        'es el acto de obtener algún producto o servicio, mediante una transacción.',
    },
    {
      termino: 'Buenas Prácticas en la cadena de Abastecimiento (BPA)',
      significado:
        'conjunto de procedimientos y normas destinadas a garantizar el almacenamiento, transporte y distribución adecuada de materiales y productos farmacéuticos a partir de la liberación de que son objeto, después del proceso de fabricación, de manera que estos conserven la naturaleza y calidad deseadas cuando lleguen al consumidor final.',
    },
    {
      termino: 'COFYTE',
      significado: 'Comité de Farmacia y Terapéutica.',
    },
    {
      termino: 'Compra',
      significado:
        'es la acción mediante la cual un agente (el comprador), adquiere un bien o un servicio de otro agente (el vendedor), a cambio de una contraprestación monetaria o en especie.',
    },
    {
      termino: 'Morbilidad',
      significado:
        'es la proporción de seres vivos que se enferman en un sitio y tiempo determinado. ',
    },
    {
      termino: 'Mortalidad',
      significado:
        'cantidad de personas que mueren en un lugar y en un período de tiempo determinados, en relación con el total de la población.',
    },
    {
      termino: 'Oferta y demanda',
      significado:
        'este principio refleja la relación que existe entre la demanda de un producto y la cantidad ofrecida de ese producto, teniendo en cuenta el precio al que se vende el producto.',
    },
    {
      termino: 'Perfil epidemiológico',
      significado:
        'es el estudio de la morbilidad, la mortalidad y los factores de riesgo, teniendo en cuenta las características geográficas, la población y el tiempo.',
    },
    {
      termino: 'Proveedor',
      significado:
        'es un profesional o empresa que abastece a otros profesionales o empresas, con existencias o servicios dirigidos directamente a la actividad.',
    },
  ],
  complementario: [
    {
      texto:
        'Dirección General de Planificación del Trabajo – Departamento de Desarrollo Organizacional. (2019). Guía para la elaboración de políticas institucionales.',
      tipo: 'PDF',
      link:
        'https://www.mtss.go.cr/perfiles/lineamientos_circulares_directrices_politicas_internas/lineamientos-circulares-directrices-politicas internas/guia_politicas_institucionales_MTSS.pdf',
    },
    {
      texto:
        'Vera, H. (2009). Manual de buenas prácticas en la cadena de abastecimiento de medicamentos.',
      tipo: 'PDF',
      link:
        'http://farmacus.com.co/wp-content/uploads/2016/07/Manual-Buenas-Practicas-Abast..pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Ayala Pardo',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios de Salud Regional Antioquia',
      },
      {
        nombre: 'Oscar Meza',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio y Servicios Regional Atlántico',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Diseñadora Instruccional – Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
