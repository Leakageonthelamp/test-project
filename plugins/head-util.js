export default (_, inject) => {
  inject('headUtil', (data) => ({
    title: data.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: data.description,
      },
      {
        name: 'keywords',
        content: ['zmartbuild', 'construction', 'wall panel', 'bathroom'],
      },
      {
        property: 'og:title',
        hid: 'og:title',
        name: 'og:title',
        content: data.title,
      },
      {
        property: 'og:description',
        hid: 'og:description',
        name: 'og:description',
        content: data.description,
      },
      {
        property: 'og:url',
        hid: 'og:url',
        name: 'og:url',
        content: 'www.zmartbuild.com',
      },
      {
        property: 'og:site_name',
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Zmartbuild',
      },
      {
        property: 'og:image',
        hid: 'og:image',
        name: 'og:image',
        content: data.image,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: data.urlPath ? data.urlPath : '',
      },
    ],
  }))
}
