export const menuItems = [
  {
    title: 'Home',
    url: './#top',
  },
  {
    title: 'Cursos',
    url: '/cursos',
    submenu: [
      {
        title: 'Todos',
        url: './#courses',
      },
      {
        title: 'ESO',
        submenu: [
          {
            title: '1ºESO',
            url: 'primeroeso',
          },
          {
            title: '2ºESO',
            url: 'segundoeso',
          },
          {
            title: '3ºESO',
            url: 'terceroeso',
          },
          {
            title: '4ºESO',
            url: 'cuartoeso',
          },
        ],
      },
      {
        title: 'Bachiller',
        url: 'bachiller',
      },
      {
        title: 'Universidad',
        url: 'universidad',
      },
    ],
  },
  {
    title: 'About',
    url: './#aboutSection',
  },
];